import type { PortraitNr } from '../lib/portraits';

/**
 * Freigegebene Angaben je Portraetdatei (docs/DESIGN-SPEC-V2.md, Abschnitt 7.3).
 * Alt-Texte beschreiben nur, was zu sehen ist. Keine Orte, Objekte, Funktionen oder Jahre ohne Freigabe
 * (docs/FAKTENLISTE.md Nr. 15). focus steuert object-position fuer den Ausschnitt.
 */
export interface PortraitMeta {
  alt: string;
  /** Bildunterschrift, erst mit freigegebenem Text eintragen. */
  caption?: string;
  /** object-position, Standard 50% 30% (Gesicht im oberen Drittel). */
  focus?: string;
}

export const PORTRAITS: Record<PortraitNr, PortraitMeta> = {
  1: { alt: 'Timo Müller', focus: '50% 30%' },
  2: { alt: 'Timo Müller', focus: '50% 30%' },   /* focus fuer den 1:1-Ausschnitt je Datei anpassen und visuell abnehmen */
  3: { alt: 'Timo Müller' },                     /* caption erst mit freigegebenem Text eintragen */
};
