// Strukturpruefung des Builds (docs/DESIGN-SPEC-V2.md 11.2, docs/CONTENT-PLAN-V2.md 8 und 11):
// Titles, Descriptions, Canonicals, H1, Sitemap, Drafts, JSON-LD, Gedankenstriche, Platzhalter, verbotene
// Formulierungen, Portraet-Slots und -Dateien, Lizenzeintraege, Glossar-ids, schematische Grafiken, interne Anker,
// Flag-Inhalte (Honorarbetraege, EUR), Ueberschriftenhierarchie, Listen-Semantik, Breadcrumb- und Service-Knoten im JSON-LD,
// Fehlerseite ohne Canonical, redaktionelle Wortregeln der Pruefung Runde 2 und Groessenbudget.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
if (!existsSync(dist)) { console.error('dist/ fehlt, zuerst npm run build'); process.exit(1); }
const site = (process.env.SITE_URL || 'https://timo.muellerhv.de').replace(/\/$/, '');
const html = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && html.push(p); } })(dist);

let fail = 0;
const err = (m) => { fail++; console.log('FEHLER', m); };
const info = (m) => console.log('INFO  ', m);

/* Grenzen laut Inhaltsplan 11 und Designspezifikation 11.2 */
const TITLE_MAX = 65;
const DESC_MAX = 160;

/* Die 16 indexierbaren Routen (Inhaltsplan 2). /einblicke/ ist nur mit mindestens einem freigegebenen Beitrag indexierbar. */
const ROUTEN_INDEX = [
  '/', '/asset-management-beratung/', '/portfoliooptimierung/', '/property-management-optimierung/',
  '/ki-immobilienmanagement/', '/investitionspriorisierung/', '/dienstleistersteuerung/', '/reporting-und-kennzahlen/',
  '/zusammenarbeit/', '/glossar/', '/kurzfakten/', '/profil/', '/kontakt/', '/impressum/', '/datenschutz/',
];
const ROUTE_EINBLICKE = '/einblicke/';

/* HTML-Entities aufloesen, damit Laengen und Zeichenpruefungen den sichtbaren Text treffen. */
const decode = (s) => s
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&shy;/g, '\u00AD').replace(/&ndash;/g, '\u2013').replace(/&mdash;/g, '\u2014')
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
const ohneTrenner = (s) => s.replace(/\u00AD/g, '');

const titles = new Map(), descs = new Map(), h1s = new Map();
const sitemap = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

/* Beitraege: Frontmatter lesen (status, glossar-ids) */
const einblickeDir = 'src/content/einblicke';
const beitraege = readdirSync(einblickeDir).filter((f) => f.endsWith('.md')).map((f) => {
  const q = readFileSync(join(einblickeDir, f), 'utf8');
  const fm = q.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const status = fm.match(/^status:\s*["']?(\w+)["']?\s*$/m)?.[1] ?? 'entwurf';
  const glossarZeile = fm.match(/^glossar:\s*\[([^\]]*)\]/m)?.[1] ?? '';
  const glossar = glossarZeile.split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  return { slug: f.replace(/\.md$/, ''), status, glossar };
});
const freigegeben = beitraege.filter((b) => b.status === 'freigegeben');
const hatFreigegebene = freigegeben.length > 0;

/* Glossar: kanonische ids und Aliasse aus src/data/glossar.ts (ohne TypeScript-Import, reine Textauswertung) */
const glossarQuelle = readFileSync('src/data/glossar.ts', 'utf8');
const glossarBlock = glossarQuelle.slice(glossarQuelle.indexOf('export const GLOSSAR:'), glossarQuelle.indexOf('export const GLOSSAR_ALIAS'));
const GLOSSAR_IDS = new Set([...glossarBlock.matchAll(/^\s{2}(?:\{\s*)?id:\s*['"]([a-z0-9-]+)['"]/gm)].map((m) => m[1]));
const aliasBlock = glossarQuelle.slice(glossarQuelle.indexOf('export const GLOSSAR_ALIAS'), glossarQuelle.indexOf('export function glossarId'));
const GLOSSAR_ALIAS = new Map([...aliasBlock.matchAll(/['"]([a-z0-9-]+)['"]\s*:\s*['"]([a-z0-9-]+)['"]/g)].map((m) => [m[1], m[2]]));
if (GLOSSAR_IDS.size < 25) err(`Glossar: nur ${GLOSSAR_IDS.size} ids in src/data/glossar.ts erkannt (mindestens 25 erwartet)`);
const glossarBekannt = (id) => GLOSSAR_IDS.has(id) || (GLOSSAR_ALIAS.has(id) && GLOSSAR_IDS.has(GLOSSAR_ALIAS.get(id)));
for (const b of beitraege) for (const id of b.glossar) if (!glossarBekannt(id)) err(`Beitrag ${b.slug}: Glossar-id "${id}" fehlt in src/data/glossar.ts`);

/* ids je Route fuer die Ankerpruefung */
const idsJeRoute = new Map();
const interneLinks = [];

for (const f of html) {
  const s = readFileSync(f, 'utf8');
  const route = '/' + f.slice(dist.length + 1).replace(/index\.html$/, '');
  const ohneSkripte = s.replace(/<script[\s\S]*?<\/script>/g, '');
  const text = decode(ohneSkripte.replace(/<[^>]+>/g, ' '));
  const title = s.match(/<title>([^<]*)<\/title>/)?.[1];
  const titleRein = title ? ohneTrenner(decode(title)) : '';
  const desc = s.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const descRein = desc ? ohneTrenner(decode(desc)) : '';
  const canon = s.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const h1 = (s.match(/<h1[\s>]/g) || []).length;
  const ueberschriften = [...s.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)]
    .map((m) => ({ ebene: Number(m[1]), text: ohneTrenner(decode(m[2].replace(/<[^>]+>/g, ' '))).replace(/\s+/g, ' ').trim() }));
  const h1Text = ueberschriften.find((h) => h.ebene === 1)?.text ?? '';
  const noindex = /content="noindex/.test(s);
  const ist404 = f.endsWith('404.html');
  idsJeRoute.set(route, new Set([...s.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  for (const m of s.matchAll(/href="(\/[^"#?]*)(#[^"]*)?"/g)) interneLinks.push({ von: route, ziel: m[1], anker: m[2] });

  if (!title) err(`${route}: kein <title>`); else if (titles.has(titleRein)) err(`${route}: Title doppelt (${titles.get(titleRein)})`); else titles.set(titleRein, route);
  if (title && titleRein.length > TITLE_MAX) err(`${route}: Title ${titleRein.length} Zeichen (max. ${TITLE_MAX})`);
  if (!desc) err(`${route}: keine Description`);
  else {
    if (descRein.length > DESC_MAX) err(`${route}: Description ${descRein.length} Zeichen (max. ${DESC_MAX})`);
    if (descs.has(descRein)) err(`${route}: Description doppelt (${descs.get(descRein)})`);
    descs.set(descRein, route);
  }
  if (h1 !== 1) err(`${route}: ${h1} H1`);
  // Eindeutige H1 je Seite (Masterprompt Abschnitt 10; AM-Seite gegenueber Startseite)
  if (h1Text && !ist404) { if (h1s.has(h1Text)) err(`${route}: H1 doppelt (${h1s.get(h1Text)})`); else h1s.set(h1Text, route); }
  // Ueberschriftenhierarchie ohne Spruenge (WCAG, Inhaltsplan 1.4)
  { let vorher = 0; for (const h of ueberschriften) { if (h.ebene > vorher + 1) err(`${route}: Ueberschriftensprung h${vorher} zu h${h.ebene} ("${h.text.slice(0, 50)}")`); vorher = h.ebene; } }
  if (ist404) {
    // Fehlerseite: wird unter beliebigen Pfaden ausgeliefert, deshalb weder Canonical noch og:url, aber noindex
    if (canon) err(`${route}: Fehlerseite mit Canonical`);
    if (/property="og:url"/.test(s)) err(`${route}: Fehlerseite mit og:url`);
    if (!noindex) err(`${route}: Fehlerseite ohne noindex`);
  } else if (!canon) err(`${route}: kein Canonical`);
  else if (!canon.startsWith(site + '/')) err(`${route}: Canonical ${canon} nicht selbstreferenzierend/absolut`);
  else if (canon !== site + route) err(`${route}: Canonical ${canon} weicht ab`);
  if (!ist404 && !/property="og:url" content="([^"]*)"/.test(s)) err(`${route}: og:url fehlt`);
  if (!/lang="de"/.test(s)) err(`${route}: lang fehlt`);
  if (/[\u2013\u2014]/.test(decode(ohneSkripte))) err(`${route}: Gedankenstrich im Text`);
  if (!/application\/ld\+json/.test(s)) err(`${route}: kein JSON-LD`);
  try {
    for (const m of s.matchAll(/<script[^>]*ld\+json[^>]*>([\s\S]*?)<\/script>/g)) {
      const ld = JSON.parse(m[1]);
      if (/[\u2013\u2014]/.test(JSON.stringify(ld))) err(`${route}: Gedankenstrich im JSON-LD`);
      const knoten = Array.isArray(ld['@graph']) ? ld['@graph'] : [ld];
      for (const k of knoten) {
        if (k['@type'] === 'BreadcrumbList') {
          const erster = k.itemListElement?.[0];
          if (!erster || erster.name !== 'Start' || erster.item !== site + '/') err(`${route}: BreadcrumbList beginnt nicht mit Start`);
          const namen = (k.itemListElement ?? []).map((i) => i.name).join(' / ');
          if (route === '/portfoliooptimierung/' && namen !== 'Start / Beratung / Portfoliooptimierung') err(`${route}: Breadcrumb lautet "${namen}"`);
        }
        if (k['@type'] === 'Service' && k.provider?.['@id'] !== site + '/#person') err(`${route}: Service-Knoten ohne provider Person`);
      }
    }
  } catch { err(`${route}: JSON-LD ungueltig`); }
  // Sichtbarer Breadcrumb: beginnt mit Start, aktuelle Seite mit aria-current
  {
    const bc = s.match(/<nav[^>]*class="breadcrumb[^"]*"[^>]*>([\s\S]*?)<\/nav>/);
    if (bc) {
      const erster = bc[1].match(/<a\b[^>]*>([^<]*)<\/a>/)?.[1]?.trim();
      if (erster !== 'Start') err(`${route}: Breadcrumb beginnt sichtbar nicht mit Start`);
      if (!/aria-current="page"/.test(bc[1])) err(`${route}: Breadcrumb ohne aria-current="page"`);
    }
  }
  const inSitemap = urls.includes(site + route);
  if (noindex && inSitemap) err(`${route}: noindex, aber in Sitemap`);
  if (!noindex && !ist404 && !inSitemap) err(`${route}: fehlt in Sitemap`);
  if (/\[[^\]]*(ergänzen|bestätigen|prüfen|eintragen)[^\]]*\]/.test(s) && !/impressum|datenschutz/.test(route)) err(`${route}: Platzhalter im Build`);
  if (/(cdn\.|googleapis|gstatic|unpkg|jsdelivr)/.test(s)) err(`${route}: externe Ressource`);
  // Verbotene Formulierungen laut Masterprompt (Abschnitt 3)
  for (const w of ['führender Experte', 'führende Expert', 'garantierte Rendite', 'revolutionär', 'einzigartig', '360-Grad', '360°', 'Waffe', 'Selfmade', 'Self-made', 'Vonovia', 'Deutsche Wohnen', 'Coming soon', 'Lorem ipsum']) {
    if (text.toLowerCase().includes(w.toLowerCase())) err(`${route}: verbotene Formulierung "${w}"`);
  }
  // Redaktionelle Wortregeln aus der Pruefung Runde 2 (docs/CONTENT-PLAN-V2.md 12.15)
  for (const w of ['Netzwerk aus', 'Werktage', 'tatsächlichen Entwicklungsstand', 'gehört eine Hausverwaltung']) {
    if (text.includes(w)) err(`${route}: Formulierung "${w}" darf nicht vorkommen`);
  }
  if (/ohne Dauerangaben/i.test(text)) err(`${route}: Formulierung "ohne Dauerangaben" darf nicht vorkommen`);
  if (text.includes('Keine Referenzen, sondern') && route !== '/asset-management-beratung/') err(`${route}: "Keine Referenzen, sondern" nur auf /asset-management-beratung/`);
  if (/\bBaustelle\b/.test(text) && route !== '/profil/') err(`${route}: "Baustelle" nur im Profil-Lead`);
  if (/handwerklich/i.test(text) && route !== '/dienstleistersteuerung/') err(`${route}: "handwerklich" nur auf /dienstleistersteuerung/ (Kostenverstaendnis, FAQ-Frage, Description)`);
  // Listen mit list-style none brauchen role="list" (Safari verwirft sonst die Listensemantik)
  for (const m of s.matchAll(/<(ul|ol) class="(?:checklist|register|verwandt)[^"]*"([^>]*)>/g)) if (!/role="list"/.test(m[2])) err(`${route}: <${m[1]} class="${m[0].match(/class="([^"]+)"/)[1]}"> ohne role="list"`);
  // Seiteninterne Anker (Seitennavigation, Sprunglinks) muessen auf der Seite existieren
  for (const m of s.matchAll(/href="#([^"]+)"/g)) if (!idsJeRoute.get(route).has(decodeURIComponent(m[1]))) err(`${route}: Anker #${m[1]} existiert nicht auf der Seite`);
  // Keine Stockfoto- oder Fremdbild-Einbindung
  if (/(unsplash|pexels|shutterstock|istock|getty)/i.test(s)) err(`${route}: Stockfoto-Quelle`);
  if (Buffer.byteLength(s) > 150_000) err(`${route}: HTML > 150 KB`);

  // Flag-Inhalte (Inhaltsplan 9, Nr. 23 und 25): keine Betraege, kein EUR, kein Honorar mit Zahl, kein "kostenfrei" ohne Freigabe
  if (/\bEUR\b|€/.test(text)) err(`${route}: "EUR" oder Euro-Zeichen im Text (Honorar- oder Betragsangabe)`);
  if (/Honorar[^.!?]{0,160}?\d/.test(text)) err(`${route}: "Honorar" in Kombination mit einer Zahl`);
  if (/kostenfrei|kostenlos/i.test(text)) err(`${route}: "kostenfrei" oder "kostenlos" im Text (Freigabepunkt 25 offen)`);

  // Portraet: jedes <img> innerhalb von .portrait braucht ein nicht leeres alt
  for (const m of s.matchAll(/<figure class="portrait[^"]*"[^>]*>([\s\S]*?)<\/figure>/g)) {
    for (const img of m[1].matchAll(/<img\b[^>]*>/g)) {
      const alt = img[0].match(/\salt="([^"]*)"/);
      if (!alt || !alt[1].trim()) err(`${route}: Portraet-Bild ohne alt`);
    }
  }

  // Schematische Grafiken und Tabellen in <figure>: figcaption mit "Schematisch" (Inhaltsplan 1.4, 8)
  for (const m of s.matchAll(/<figure\b([^>]*)>([\s\S]*?)<\/figure>/g)) {
    if (/class="portrait/.test(m[1])) continue;
    const cap = m[2].match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/);
    if (!cap) err(`${route}: <figure> ohne figcaption`);
    else if (!/Schematisch/.test(decode(cap[1].replace(/<[^>]+>/g, ' ')))) err(`${route}: figcaption ohne Kennzeichnung "Schematisch"`);
  }
  // Tabellen: caption, th mit scope, in .table-wrap
  for (const m of s.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/g)) {
    if (!/<caption/.test(m[1])) err(`${route}: Tabelle ohne caption`);
    for (const th of m[1].matchAll(/<th\b([^>]*)>/g)) if (!/\sscope="/.test(th[1])) err(`${route}: <th> ohne scope`);
  }
  // Glossar-Links: jede id muss in src/data/glossar.ts existieren
  for (const m of s.matchAll(/href="\/glossar\/#([^"]+)"/g)) {
    if (!glossarBekannt(m[1])) err(`${route}: Glossar-Link auf unbekannte id "${m[1]}"`);
  }
  // Ohne JavaScript: Navigation ueber html.no-js sichtbar, Untermenue und FAQ als details/summary
  if (!/<html[^>]*class="[^"]*no-js/.test(s)) err(`${route}: <html> ohne Klasse no-js`);
  const css = [...s.matchAll(/<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)"/g)]
    .map((m) => (existsSync(join(dist, m[1])) ? readFileSync(join(dist, m[1]), 'utf8') : ''))
    .join('\n') + [...s.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
  if (!/html\.no-js \.site-nav[^{]*\{[^}]*display:\s*block/.test(css)) err(`${route}: Regel html.no-js .site-nav {display:block} fehlt im CSS`);
  if (!/html\.no-js \.site-header[^{]*\{[^}]*position:\s*static/.test(css)) err(`${route}: Regel html.no-js .site-header {position:static} fehlt im CSS (ausgeklappte Navigation darf mobil nicht sticky sein)`);
  if (!/<details class="nav-details"/.test(s)) err(`${route}: Untermenue nicht als details/summary`);
  if (/class="faq"/.test(s) && !/class="faq"[^>]*>\s*<details/.test(s)) err(`${route}: FAQ nicht als details/summary`);
  if (route === '/kontakt/') {
    const form = s.match(/<form\b[^>]*>/)?.[0] ?? '';
    if (!/method="post"/i.test(form) || !/action="\/api\/contact\.php"/.test(form)) err(`${route}: Formular ohne method="post" und action`);
  }
}

/* Interne Links und Anker: jedes Ziel muss gebaut sein, jeder Anker im Zieldokument existieren */
const istDatei = (z) => /\.(xml|txt|png|svg|webp|jpe?g|php|ico)$/.test(z) || z.startsWith('/_astro/') || z.startsWith('/api/');
let linkfehler = 0;
for (const l of interneLinks) {
  if (istDatei(l.ziel)) continue;
  const ids = idsJeRoute.get(l.ziel);
  if (!ids) { err(`${l.von}: Link auf nicht gebaute Route ${l.ziel}`); linkfehler++; continue; }
  if (l.anker && l.anker.length > 1 && !ids.has(decodeURIComponent(l.anker.slice(1)))) { err(`${l.von}: Anker ${l.ziel}${l.anker} existiert nicht`); linkfehler++; }
}
info(`${interneLinks.length} interne Links geprueft, ${linkfehler} ohne Ziel`);

/* Sitemap: alle indexierbaren Routen; /einblicke/ nur mit freigegebenem Beitrag (Inhaltsplan 4.7) */
for (const r of ROUTEN_INDEX) {
  if (!urls.includes(site + r)) err(`Sitemap: ${r} fehlt`);
  if (!existsSync(join(dist, r, 'index.html'))) err(`Route ${r} nicht gebaut`);
}
{
  const einblicke = readFileSync(join(dist, 'einblicke', 'index.html'), 'utf8');
  const noindex = /content="noindex/.test(einblicke);
  const inSitemap = urls.includes(site + ROUTE_EINBLICKE);
  if (hatFreigegebene) {
    if (noindex) err('/einblicke/: freigegebene Beitraege vorhanden, aber noindex');
    if (!inSitemap) err('/einblicke/: freigegebene Beitraege vorhanden, aber nicht in Sitemap');
  } else {
    if (!noindex) err('/einblicke/: Leerzustand ohne noindex');
    if (!/<meta name="robots" content="noindex, follow">/.test(einblicke) && !process.env.NOINDEX) err('/einblicke/: Leerzustand nicht mit "noindex, follow"');
    if (inSitemap) err('/einblicke/: Leerzustand, aber in Sitemap');
    if (/<link rel="canonical" href="([^"]*)"/.exec(einblicke)?.[1] !== site + ROUTE_EINBLICKE) err('/einblicke/: Canonical nicht selbstreferenzierend');
    info('/einblicke/ im Leerzustand: noindex, follow; nicht in Sitemap');
  }
  if (!/id="redaktionsgrundsaetze"/.test(einblicke)) err('/einblicke/: Anker #redaktionsgrundsaetze fehlt');
}
const erwartet = ROUTEN_INDEX.length + (hatFreigegebene ? 1 + freigegeben.length : 0);
if (urls.length !== erwartet) err(`Sitemap enthaelt ${urls.length} URLs, erwartet ${erwartet}`);
for (const u of urls) if (!u.startsWith(site + '/')) err(`Sitemap: fremde URL ${u}`);
if (urls.some((u) => u.includes('/danke/') || u.includes('/404'))) err('Sitemap: /danke/ oder /404 enthalten');

/* Drafts duerfen nicht gebaut sein; freigegebene Beitraege muessen gebaut sein */
for (const b of beitraege) {
  const gebaut = existsSync(join(dist, 'einblicke', b.slug));
  if (b.status !== 'freigegeben' && gebaut) err(`Entwurf gebaut: ${b.slug}`);
  if (b.status === 'freigegeben' && !gebaut) err(`Freigegebener Beitrag nicht gebaut: ${b.slug}`);
}

/* robots */
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap:') && !robots.includes('Disallow: /\n')) err('robots.txt ohne Sitemap');

/* Portraet-Slots je Seite (Designspezifikation 11.2): Bild oder Platzhalter */
for (const r of ['/', '/profil/', '/kontakt/', '/portfoliooptimierung/']) {
  const s = readFileSync(join(dist, r, 'index.html'), 'utf8');
  const typo = (s.match(/class="portrait portrait--typo/g) || []).length;
  const bild = (s.match(/<figure class="portrait/g) || []).length;
  const slots = [...s.matchAll(/class="portrait[^"]*"[^>]*style="--ar:([^;"]+)/g)].map((m) => m[1]);
  info(`Portraet ${r}: ${bild} Bild, ${typo} Platzhalter (Formate ${slots.join(', ') || 'keine'})`);
  if (typo + bild === 0) err(`${r}: kein Portraet-Slot gefunden`);
}

/* Portraet-Dateien: Benennung und Lizenzeintrag */
const portraitDir = 'src/assets/portraits';
const lizenzen = readFileSync('docs/BILDER-LIZENZEN.md', 'utf8');
const portraitDateien = readdirSync(portraitDir).filter((f) => f !== 'README.md');
for (const f of portraitDateien) {
  if (!/^portrait-[123]\.(jpe?g|png)$/.test(f)) { err(`${portraitDir}/${f}: falsch benannt, wird nicht erkannt (erwartet portrait-1|2|3.jpg|jpeg|png)`); continue; }
  if (!lizenzen.includes(f)) err(`${portraitDir}/${f}: kein Eintrag in docs/BILDER-LIZENZEN.md`);
  info(`Portraet-Datei vorhanden: ${f}`);
}
if (portraitDateien.length === 0) info('Keine Portraet-Dateien in src/assets/portraits, alle Slots als Platzhalter gebaut');
/* Gegenprobe: liegt eine gueltige Datei vor, darf der zugehoerige Slot nicht als Platzhalter gebaut sein */
if (portraitDateien.some((f) => /^portrait-1\.(jpe?g|png)$/.test(f))) {
  const start = readFileSync(join(dist, 'index.html'), 'utf8');
  if (!/<figure class="portrait/.test(start)) err('portrait-1 liegt vor, Startseite baut trotzdem den Platzhalter');
}

/* Groessenbudget Startseite */
let total = 0; const idx = readFileSync(join(dist, 'index.html'), 'utf8'); total += Buffer.byteLength(idx);
for (const m of idx.matchAll(/(?:href|src)="(\/_astro\/[^"]+|\/[^"]+\.(?:webp|png|svg))"/g)) { const p = join(dist, m[1]); if (existsSync(p)) total += statSync(p).size; }
console.log(`Startseite gesamt (HTML + referenzierte lokale Assets, unkomprimiert): ${(total / 1024).toFixed(0)} KB`);
if (total > 1_000_000) err('Startseite > 1 MB');
console.log(`${html.length} HTML-Seiten geprueft, ${urls.length} Sitemap-URLs, ${GLOSSAR_IDS.size} Glossar-ids, ${h1s.size} eindeutige H1, Fehler: ${fail}`);
process.exit(fail ? 1 : 0);
