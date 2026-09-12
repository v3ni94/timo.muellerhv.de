// Screenshots der gebauten Seiten in mehreren Breiten (Playwright, lokaler Preview-Server).
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const out = process.argv[2] ?? 'screenshots';
mkdirSync(out, { recursive: true });
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 3500));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const pages = ['/', '/asset-management-beratung/', '/portfoliooptimierung/', '/profil/', '/kontakt/', '/einblicke/', '/404.html'];
const widths = [360, 390, 768, 1024, 1440];
try {
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    for (const p of pages) {
      await page.goto('http://localhost:4321' + p, { waitUntil: 'networkidle' });
      const hScroll = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      if (hScroll) console.log('HORIZONTALER SCROLL:', w, p);
      await page.screenshot({ path: `${out}/${w}${p.replace(/\//g, '_') || '_'}.png`, fullPage: true });
    }
    await ctx.close();
  }
} finally {
  await browser.close();
  server.kill();
}
console.log('fertig');
