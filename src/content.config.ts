import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Fachbeitraege. Beitraege mit status "entwurf" oder "pruefung" werden nicht gebaut
 * (siehe src/lib/einblicke.ts). Erst "freigegeben" veroeffentlicht.
 */
const einblicke = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/einblicke' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(65).optional(),    // vollstaendiger <title> mit Namenszusatz " | Timo Müller", hoechstens 65 Zeichen; ohne Feld leitet [slug].astro den Title aus title ab
    description: z.string().max(160),           // hoechstens 160 Zeichen (Inhaltsplan 11, SEO-Matrix)
    kernaussage: z.string(),
    status: z.enum(['entwurf', 'pruefung', 'freigegeben']).default('entwurf'),
    datum: z.coerce.date().optional(),          // Veroeffentlichungsdatum, erst bei Freigabe setzen
    aktualisiert: z.coerce.date().optional(),   // echtes Aenderungsdatum
    beratung: z.string(),                       // Pfad zur passenden Beratungsseite
    beratungLabel: z.string(),
    quellen: z.array(z.object({ titel: z.string(), url: z.string().url(), abgerufen: z.string() })).default([]),
    glossar: z.array(z.string()).default([]),   // ids aus src/data/glossar.ts fuer den Block "Begriffe in diesem Beitrag"
    verwandt: z.array(z.string()).default([]),  // Slugs anderer Beitraege fuer den Block "Verwandte Beitraege" (nur veroeffentlichte Ziele)
  }),
});

export const collections = { einblicke };
