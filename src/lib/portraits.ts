import type { ImageMetadata } from 'astro';

/**
 * Erkennung der Portraetdateien zur Buildzeit (docs/DESIGN-SPEC-V2.md, Abschnitt 7.2).
 * Erwartet werden src/assets/portraits/portrait-1, portrait-2, portrait-3 mit Endung jpg, jpeg oder png.
 * Ohne Dateien ist das Objekt leer, der Build laeuft durch und Portrait.astro rendert den typografischen Platzhalter.
 * Keine Erkennung per JavaScript im Browser, nach dem Ablegen einer Datei ist ein neuer Build noetig.
 */
export type PortraitNr = 1 | 2 | 3;

const dateien = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/portraits/portrait-*.{jpg,jpeg,png}',
  { eager: true },
);

export function portraitBild(nr: PortraitNr): ImageMetadata | null {
  const re = new RegExp(`/portrait-${nr}\\.(jpg|jpeg|png)$`, 'i');
  const key = Object.keys(dateien).find((k) => re.test(k));
  return key ? dateien[key].default : null;
}

export function hatPortrait(nr: PortraitNr): boolean {
  return portraitBild(nr) !== null;
}

/** Fuer den Build-Hinweis in scripts/test-build.mjs und fuer Warnungen bei falsch benannten Dateien. */
export const portraitDateien = Object.keys(dateien);
