import { getCollection, type CollectionEntry } from 'astro:content';

export type Beitrag = CollectionEntry<'einblicke'>;

/** Nur freigegebene Beitraege gelangen in den oeffentlichen Build. */
export async function veroeffentlichteBeitraege(): Promise<Beitrag[]> {
  const alle = await getCollection('einblicke');
  return alle
    .filter((b) => b.data.status === 'freigegeben' && b.data.datum)
    .sort((a, b) => (b.data.datum!.getTime() - a.data.datum!.getTime()));
}

export function formatDatum(d: Date): string {
  return new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(d);
}
