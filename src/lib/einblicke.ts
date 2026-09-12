import { getCollection, type CollectionEntry } from 'astro:content';

export type Beitrag = CollectionEntry<'einblicke'>;

/** Mindestzahl freigegebener Beitraege, ab der der Block "Verwandte Beitraege" rendert (docs/CONTENT-PLAN-V2.md 4.8). */
export const VERWANDT_MINDESTANZAHL = 3;

/** Nur freigegebene Beitraege mit Veroeffentlichungsdatum gelangen in den oeffentlichen Build. */
export async function veroeffentlichteBeitraege(): Promise<Beitrag[]> {
  const alle = await getCollection('einblicke');
  return alle
    .filter((b) => b.data.status === 'freigegeben' && b.data.datum)
    .sort((a, b) => (b.data.datum!.getTime() - a.data.datum!.getTime()));
}

/** Anzahl der freigegebenen, veroeffentlichten Beitraege (Zaehler fuer die Drei-Beitraege-Regel und den Leerzustand). */
export async function anzahlFreigegeben(): Promise<number> {
  return (await veroeffentlichteBeitraege()).length;
}

/**
 * Verwandte Beitraege zu einer Slug-Liste aus dem Frontmatter `verwandt`.
 * Liefert ausschliesslich veroeffentlichte Ziele in der Reihenfolge der Slugs, ohne Dubletten und ohne den
 * aktuellen Beitrag (Parameter aktuell). Sind weniger als VERWANDT_MINDESTANZAHL Beitraege freigegeben,
 * ist das Ergebnis leer und der Block wird nicht gerendert.
 */
export async function verwandteBeitraege(slugs: readonly string[], aktuell?: string): Promise<Beitrag[]> {
  const alle = await veroeffentlichteBeitraege();
  if (alle.length < VERWANDT_MINDESTANZAHL) return [];
  const nachId = new Map(alle.map((b) => [b.id, b] as const));
  return [...new Set(slugs)]
    .filter((s) => s !== aktuell)
    .map((s) => nachId.get(s))
    .filter((b): b is Beitrag => b !== undefined);
}

export function formatDatum(d: Date): string {
  return new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(d);
}
