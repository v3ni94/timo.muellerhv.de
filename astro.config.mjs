// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const site = env.SITE_URL || 'https://timo.muellerhv.de';

const einblickeDir = fileURLToPath(new URL('./src/content/einblicke/', import.meta.url));
const distDir = fileURLToPath(new URL('./dist/', import.meta.url));

/**
 * Traegt mindestens ein Beitrag in src/content/einblicke im Frontmatter `status: freigegeben`?
 * Reine Dateipruefung zur Buildzeit (kein Import aus src). Mit dem ersten freigegebenen Beitrag
 * kehrt /einblicke/ automatisch in die Sitemap zurueck (docs/CONTENT-PLAN-V2.md 4.7).
 */
function hatFreigegebeneBeitraege() {
  if (!existsSync(einblickeDir)) return false;
  return readdirSync(einblickeDir)
    .filter((f) => f.endsWith('.md'))
    .some((f) => {
      const quelle = readFileSync(join(einblickeDir, f), 'utf8');
      const frontmatter = quelle.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
      return /^status:\s*["']?freigegeben["']?\s*$/m.test(frontmatter);
    });
}

/**
 * Traegt die gebaute Seite ein robots-Meta mit noindex? Wird im Hook astro:build:done gelesen, wenn dist/ vorliegt.
 * Sicherung, damit Sitemap und robots-Meta nicht auseinanderlaufen (scripts/test-build.mjs prueft beides):
 * /einblicke/ verlaesst die Sitemap erst, wenn die Seite im Leerzustand selbst noindex traegt.
 * @param {string} pathname Pfad mit fuehrendem und abschliessendem Slash, z. B. "/einblicke/"
 */
function istNoindex(pathname) {
  const datei = join(distDir, pathname, 'index.html');
  return existsSync(datei) && /<meta name="robots" content="noindex/.test(readFileSync(datei, 'utf8'));
}

// Nicht indexierte Seiten bleiben aus der Sitemap heraus.
const excludeFromSitemap = ['/danke/', '/404'];

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        if (pathname.includes('/404') || excludeFromSitemap.some((p) => pathname.endsWith(p))) return false;
        // Einblicke-Leerzustand: ohne freigegebenen Beitrag nicht in die Sitemap (Pruefung per fs zur Buildzeit).
        if (pathname === '/einblicke/' && !hatFreigegebeneBeitraege() && istNoindex(pathname)) return false;
        return true;
      },
      // Keine kuenstlichen Zeitstempel: lastmod wird nicht pauschal gesetzt.
    }),
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  vite: { build: { assetsInlineLimit: 2048 } },
});
