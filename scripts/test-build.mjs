// Strukturpruefung des Builds: Titles, Descriptions, Canonicals, H1, Sitemap, Drafts, JSON-LD, Gedankenstriche.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
if (!existsSync(dist)) { console.error('dist/ fehlt, zuerst npm run build'); process.exit(1); }
const site = (process.env.SITE_URL || 'https://timo.muellerhv.de').replace(/\/$/, '');
const html = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && html.push(p); } })(dist);

let fail = 0;
const err = (m) => { fail++; console.log('FEHLER', m); };
const titles = new Map(), descs = new Map();
const sitemap = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

for (const f of html) {
  const s = readFileSync(f, 'utf8');
  const route = '/' + f.slice(dist.length + 1).replace(/index\.html$/, '');
  const title = s.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = s.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canon = s.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const h1 = (s.match(/<h1[\s>]/g) || []).length;
  const noindex = /content="noindex/.test(s);
  if (!title) err(`${route}: kein <title>`); else if (titles.has(title)) err(`${route}: Title doppelt (${titles.get(title)})`); else titles.set(title, route);
  if (!desc) err(`${route}: keine Description`); else { if (desc.length > 165) err(`${route}: Description ${desc.length} Zeichen`); if (descs.has(desc)) err(`${route}: Description doppelt`); descs.set(desc, route); }
  if (title && title.length > 65) err(`${route}: Title ${title.length} Zeichen`);
  if (h1 !== 1) err(`${route}: ${h1} H1`);
  if (!canon) err(`${route}: kein Canonical`);
  else if (!canon.startsWith(site + '/')) err(`${route}: Canonical ${canon} nicht selbstreferenzierend/absolut`);
  else if (!noindex && !f.endsWith('404.html') && canon !== site + route) err(`${route}: Canonical ${canon} weicht ab`);
  if (!/lang="de"/.test(s)) err(`${route}: lang fehlt`);
  if (/[–—]/.test(s.replace(/<script[\s\S]*?<\/script>/g, ''))) err(`${route}: Gedankenstrich im Text`);
  if (!/application\/ld\+json/.test(s)) err(`${route}: kein JSON-LD`);
  try { for (const m of s.matchAll(/<script[^>]*ld\+json[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(m[1]); } catch { err(`${route}: JSON-LD ungueltig`); }
  const inSitemap = urls.includes(site + route);
  if (noindex && inSitemap) err(`${route}: noindex, aber in Sitemap`);
  if (!noindex && !f.endsWith('404.html') && !inSitemap) err(`${route}: fehlt in Sitemap`);
  if (/\[[^\]]*(ergänzen|bestätigen|prüfen|eintragen)[^\]]*\]/.test(s) && !/impressum|datenschutz/.test(route)) err(`${route}: Platzhalter im Build`);
  if (/(cdn\.|googleapis|gstatic|unpkg|jsdelivr)/.test(s)) err(`${route}: externe Ressource`);
  // Verbotene Formulierungen laut Masterprompt (Abschnitt 3)
  const text = s.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  for (const w of ['führender Experte', 'führende Expert', 'garantierte Rendite', 'revolutionär', 'einzigartig', '360-Grad', '360°', 'Waffe', 'Selfmade', 'Self-made', 'Vonovia', 'Deutsche Wohnen', 'Coming soon', 'Lorem ipsum']) {
    if (text.toLowerCase().includes(w.toLowerCase())) err(`${route}: verbotene Formulierung "${w}"`);
  }
  // Keine Stockfoto- oder Fremdbild-Einbindung
  if (/(unsplash|pexels|shutterstock|istock|getty)/i.test(s)) err(`${route}: Stockfoto-Quelle`);
  if (Buffer.byteLength(s) > 150_000) err(`${route}: HTML > 150 KB`);
}
// Drafts duerfen nicht gebaut sein
const drafts = readdirSync('src/content/einblicke').filter((f) => !/status:\s*freigegeben/.test(readFileSync(join('src/content/einblicke', f), 'utf8'))).map((f) => f.replace(/\.md$/, ''));
for (const d of drafts) if (existsSync(join(dist, 'einblicke', d))) err(`Entwurf gebaut: ${d}`);
// robots
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap:') && !robots.includes('Disallow: /\n')) err('robots.txt ohne Sitemap');
// Groessenbudget Startseite
let total = 0; const idx = readFileSync(join(dist, 'index.html'), 'utf8'); total += Buffer.byteLength(idx);
for (const m of idx.matchAll(/(?:href|src)="(\/_astro\/[^"]+|\/[^"]+\.(?:webp|png|svg))"/g)) { const p = join(dist, m[1]); if (existsSync(p)) total += statSync(p).size; }
console.log(`Startseite gesamt (HTML + referenzierte lokale Assets, unkomprimiert): ${(total / 1024).toFixed(0)} KB`);
if (total > 1_000_000) err('Startseite > 1 MB');
console.log(`${html.length} HTML-Seiten geprueft, ${urls.length} Sitemap-URLs, Fehler: ${fail}`);
process.exit(fail ? 1 : 0);
