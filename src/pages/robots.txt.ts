import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

export const GET: APIRoute = () => {
  // Staging (NOINDEX=true) sperrt alles. Ein robots-Verbot ist kein Zugriffsschutz, Staging zusaetzlich per Passwort sichern.
  // Produktion: /danke/ bewusst nicht sperren. Die Seite traegt noindex, nofollow und steht nicht in der Sitemap.
  // Ein per robots gesperrter Crawler koennte das noindex nicht lesen und eine verlinkte URL ohne Inhalt indexieren.
  // Gesperrt bleibt nur der Formular-Endpunkt unter /api/.
  const body = SITE.noindex
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
