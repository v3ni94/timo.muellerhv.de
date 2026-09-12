import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

export const GET: APIRoute = () => {
  // Staging (NOINDEX=true) sperrt alles. Ein robots-Verbot ist kein Zugriffsschutz, Staging zusaetzlich per Passwort sichern.
  const body = SITE.noindex
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\nDisallow: /danke/\nDisallow: /api/\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
