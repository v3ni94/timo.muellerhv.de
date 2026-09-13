// Barrierefreiheits- und Tastaturpruefung mit axe-core (Playwright), lokal gegen dist/.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const axeSrc = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const server = spawn('python3', ['-m', 'http.server', '4326', '--bind', '127.0.0.1'], { cwd: 'dist', stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 1500));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
// Alle Routen des Builds (docs/CONTENT-PLAN-V2.md 2), axe bei 390 und 1440 px.
const pages = [
  '/', '/asset-management-beratung/', '/portfoliooptimierung/', '/property-management-optimierung/', '/ki-immobilienmanagement/',
  '/investitionspriorisierung/', '/dienstleistersteuerung/', '/reporting-und-kennzahlen/', '/zusammenarbeit/', '/glossar/', '/kurzfakten/', '/facts/',
  '/profil/', '/einblicke/', '/kontakt/', '/danke/', '/impressum/', '/datenschutz/', '/404.html',
];
let total = 0;
try {
  for (const w of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    for (const p of pages) {
      await page.goto('http://127.0.0.1:4326' + p);
      await page.addScriptTag({ content: axeSrc });
      const r = await page.evaluate(async () => await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] }));
      for (const v of r.violations) {
        total++;
        console.log(`[${w}] ${p} ${v.id} (${v.impact}): ${v.help}`);
        v.nodes.slice(0, 3).forEach((n) => console.log('   ', n.target.join(' '), '|', n.html.slice(0, 120)));
      }
    }
    await page.close();
  }
  // Tastaturtest: Skip-Link, Menue, Formular
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:4326/kontakt/');
  await page.keyboard.press('Tab');
  const first = await page.evaluate(() => document.activeElement?.textContent?.trim());
  console.log('Erster Tab-Stopp:', first);
  await page.keyboard.press('Enter');
  const focusAfterSkip = await page.evaluate(() => document.activeElement?.id);
  console.log('Fokus nach Skip-Link:', focusAfterSkip);
  await page.goto('http://127.0.0.1:4326/');
  await page.focus('summary.site-nav__link');
  await page.keyboard.press('Enter');
  const open = await page.evaluate(() => document.querySelector('[data-nav-details]').open);
  console.log('Untermenue per Tastatur geoeffnet:', open);
  await page.keyboard.press('Escape');
  console.log('Untermenue nach Escape geschlossen:', await page.evaluate(() => !document.querySelector('[data-nav-details]').open));
  // Formularvalidierung clientseitig
  await page.goto('http://127.0.0.1:4326/kontakt/');
  await page.click('[data-submit]');
  console.log('Clientfehler angezeigt:', await page.evaluate(() => [...document.querySelectorAll('.form-error:not([hidden])')].map((e) => e.textContent)));
  // Reduced motion / 200% Zoom Smoke
  const z = await browser.newPage({ viewport: { width: 720, height: 600 }, deviceScaleFactor: 2 });
  await z.goto('http://127.0.0.1:4326/');
  console.log('Kein horizontaler Scroll bei 720px (entspricht 200 % Zoom auf 1440):', await z.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth));
} finally {
  await browser.close(); server.kill();
}
console.log('axe-Verstoesse gesamt:', total);
process.exit(total ? 1 : 0);
