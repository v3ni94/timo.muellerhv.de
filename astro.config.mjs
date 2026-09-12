// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const site = env.SITE_URL || 'https://timo.muellerhv.de';

// Nicht indexierte Seiten bleiben aus der Sitemap heraus.
const excludeFromSitemap = ['/danke/', '/404'];

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !excludeFromSitemap.some((p) => page.endsWith(p) || page.includes('/404')),
      // Keine kuenstlichen Zeitstempel: lastmod wird nicht pauschal gesetzt.
    }),
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  vite: { build: { assetsInlineLimit: 2048 } },
});
