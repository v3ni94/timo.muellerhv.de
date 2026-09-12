import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Fachbeitraege. Beitraege mit status "entwurf" oder "pruefung" werden nicht gebaut
 * (siehe src/lib/einblicke.ts). Erst "freigegeben" veroeffentlicht.
 */
const einblicke = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/einblicke' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    kernaussage: z.string(),
    status: z.enum(['entwurf', 'pruefung', 'freigegeben']).default('entwurf'),
    datum: z.coerce.date().optional(),          // Veroeffentlichungsdatum, erst bei Freigabe setzen
    aktualisiert: z.coerce.date().optional(),   // echtes Aenderungsdatum
    beratung: z.string(),                       // Pfad zur passenden Beratungsseite
    beratungLabel: z.string(),
    quellen: z.array(z.object({ titel: z.string(), url: z.string().url(), abgerufen: z.string() })).default([]),
  }),
});

export const collections = { einblicke };
