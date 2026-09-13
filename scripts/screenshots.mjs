// Screenshots der gebauten Seiten in mehreren Breiten (Playwright, lokaler Preview-Server).
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const out = process.argv[2] ?? 'screenshots';
// Breiten als drittes Argument oder WIDTHS, z. B. "1081,1100,1120" fuer die Kopfpruefung (Designspezifikation 11.1, Pruefung Runde 3).
const widths = (process.argv[3] ?? process.env.WIDTHS ?? '360,390,768,1024,1440').split(',').map(Number).filter(Boolean);
mkdirSync(out, { recursive: true });
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 3500));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
// Alle Routen des Builds (docs/DESIGN-SPEC-V2.md 11.1, docs/CONTENT-PLAN-V2.md 2): Start, vier Fachseiten, drei Vertiefungen,
// Zusammenarbeit, Glossar, Profil, Einblicke, Kontakt, Danke, Rechtstexte, 404.
const pages = [
  '/', '/asset-management-beratung/', '/portfoliooptimierung/', '/property-management-optimierung/', '/ki-immobilienmanagement/',
  '/investitionspriorisierung/', '/dienstleistersteuerung/', '/reporting-und-kennzahlen/', '/zusammenarbeit/', '/glossar/', '/kurzfakten/', '/facts/',
  '/profil/', '/einblicke/', '/kontakt/', '/danke/', '/impressum/', '/datenschutz/', '/404.html',
];
let scrollFehler = 0;
try {
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    for (const p of pages) {
      await page.goto('http://localhost:4321' + p, { waitUntil: 'networkidle' });
      // Seite einmal durchscrollen, damit lazy geladene Bilder (Footer-Logo, Portraets) im Screenshot erscheinen
      await page.evaluate(async () => {
        document.documentElement.style.scrollBehavior = 'auto';    // sonst laeuft scrollTo als Animation weiter und der sticky Kopf steht in der Ganzseitenaufnahme mitten im Hero
        for (const img of document.images) img.loading = 'eager';   // lazy-Attribut fuer die Aufnahme aufheben
        for (let y = 0; y < document.documentElement.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
        window.scrollTo(0, 0);
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));   // Layout nach dem Ruecksprung abwarten
        const bilder = [...document.images].filter((img) => !img.complete).map((img) => new Promise((r) => { img.onload = img.onerror = r; }));
        await Promise.race([Promise.all(bilder), new Promise((r) => setTimeout(r, 2000))]);   // hoechstens 2 s warten
      });
      await page.waitForLoadState('networkidle');
      const hScroll = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      if (hScroll) {
        // Verursacher benennen: Elemente, die rechts ueber den Viewport hinausragen
        const taeter = await page.evaluate(() => [...document.querySelectorAll('body *')]
          .filter((el) => el.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
          .slice(0, 5)
          .map((el) => `${el.tagName.toLowerCase()}.${[...el.classList].join('.')} (${Math.round(el.getBoundingClientRect().right)}px)`));
        console.log('HORIZONTALER SCROLL:', w, p, taeter.join(' | '));
        scrollFehler++;
      }
      await page.screenshot({ path: `${out}/${w}${p.replace(/\//g, '_') || '_'}.png`, fullPage: true });
    }
    await ctx.close();
  }
} finally {
  await browser.close();
  server.kill();
}
console.log(`fertig, ${pages.length} Seiten x ${widths.length} Breiten, horizontaler Scroll: ${scrollFehler}`);
process.exit(scrollFehler ? 1 : 0);
