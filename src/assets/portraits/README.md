# Porträts Timo Müller

Hier ausschließlich freigegebene, echte Porträts von Timo Müller ablegen. Vor dem Commit einer Datei: Fotograf, Aufnahmedatum, Nutzungsrechte Web und Freigabe durch Timo Müller in `docs/BILDER-LIZENZEN.md` eintragen und `docs/FAKTENLISTE.md` Nr. 15 auf "freigegeben" setzen. Keine Stockfotos, keine KI-Bilder, keine fremden Personen.

Gerendert wird ausschließlich über `src/components/Portrait.astro`. Die Erkennung erfolgt zur Buildzeit (`src/lib/portraits.ts`). Fehlt eine Datei, rendert die Komponente den typografischen Platzhalter mit identischem Seitenverhältnis; Slot 3 wird ohne Datei nicht gerendert. Nach dem Ablegen neu bauen (`npm run build`).

## Dateinamen und Einsatzorte

Dateinamen exakt `portrait-1`, `portrait-2`, `portrait-3` mit Endung jpg, jpeg oder png. Andere Dateien in diesem Ordner werden vom Build-Test gemeldet.

| Datei | Format | Einsatzorte (Komponente `Portrait`) | ratio | variant | priority | sizes | widths |
|---|---|---|---|---|---|---|---|
| portrait-1.jpg | 4:5 Hochformat | Startseite Hero (`.gc-9-12`) | 4/5 | dunkel | ja | `(max-width: 860px) 20rem, (max-width: 1300px) 30vw, 380px` | 480, 800, 1200 |
| portrait-1.jpg | 4:5 Hochformat | Profil Hero (`.gc-1-5`) | 4/5 | dunkel | ja | `(max-width: 860px) 20rem, (max-width: 1300px) 40vw, 500px` | 480, 800, 1000, 1200 |
| portrait-2.jpg | 3:2 Querformat | Startseite Persönlicher Ansatz (`.gc-1-6`) | 3/2 | dunkel | nein | `(max-width: 860px) 100vw, (max-width: 1300px) 48vw, 600px` | 640, 960, 1200 |
| portrait-2.jpg | 1:1 Ausschnitt | Kontakt, Kasten Direkt erreichen | 1/1 | hell | nein | `12rem` | 400, 800 |
| portrait-2.jpg | 1:1 Ausschnitt | Personenanker der Fachseiten, Autorenkasten | 1/1 | hell | nein | `8rem` | 400, 800 |
| portrait-3.jpg | 3:2 Querformat | Profil zwischen Kapitel 03 und 04 (`.gc-5-12`), nur mit Datei (`nurMitBild`) | 3/2 | dunkel | nein | `(max-width: 860px) 100vw, (max-width: 1300px) 64vw, 800px` | 640, 960, 1200, 1600 |

Mobil (unter 861 px): Hero-Porträts stehen unter dem Text mit `max-width: 20rem`; Querformate volle Containerbreite; 1:1-Plätze behalten ihre rem-Breite.

## Motive und Komposition (Shooting-Brief)

| Datei | Format | Motiv | Komposition | Quelle mindestens |
|---|---|---|---|---|
| portrait-1.jpg | 4:5 Hochformat | Kopf-Schulter-Porträt, ruhiger einfarbiger Hintergrund in Grau oder Weiß, weiches Licht, Geschäftskleidung, keine Requisiten, keine fremden Marken | Blickrichtung leicht nach links (zur Textspalte der Startseite); Gesicht im oberen Drittel, damit `focus 50% 30%` passt | 2000 x 2500 px |
| portrait-2.jpg | 3:2 Querformat | Halbporträt oder Arbeitssituation im Raum (Besprechungsraum, Fensterfront), ohne erkennbare Dritte | Person im rechten Drittel mit Blick nach rechts zur Textspalte (Startseite Ansatz: Bild links, Text rechts); der Kopf muss in einem mittigen 1:1-Ausschnitt liegen, damit Kontakt und Personenanker denselben Ausschnitt nutzen können; `focus` je Datei in `src/data/portraits.ts` eintragen und visuell abnehmen | 2400 x 1600 px |
| portrait-3.jpg | 3:2 Querformat | Zweites Motiv, Arbeitssituation (Unterlagen, Objekt), deutlich anders als portrait-2, ohne Dritte, ohne lesbare Adressschilder, Mieter- oder Objektdaten, ohne fremde Logos | frei, Bildunterschrift nur mit freigegebenem Text (`caption` in `src/data/portraits.ts`) | 2400 x 1600 px |

Serie: alle drei Motive in einem Termin mit gleichem Hintergrundton, Licht und Kleidung, damit die Seite bildlich zusammenhängt. Ohne Serie nur portrait-1 einsetzen; Slot 2 bleibt Platzhalter, Slot 3 entfällt.

## Regeln

- Zuschnitt auf 4:5 beziehungsweise 3:2 vor der Ablage. `object-fit: cover` fängt nur geringe Abweichungen; der 1:1-Ausschnitt aus portrait-2 wird über `focus` gesteuert.
- Alt-Texte und Bildunterschriften stehen zentral in `src/data/portraits.ts` und beschreiben nur, was zu sehen ist. Keine Orte, Objekte, Funktionen oder Jahre ohne Freigabe.
- Zielgewicht: größte Ausgabestufe des Hero-Bilds unter 120 KB. Die Startseite bleibt unter 1 MB (Build-Test misst).
- Liegt nur portrait-1 vor: Slot 2 bleibt Platzhalter (Ansatz, Kontakt, Personenanker), Slot 3 wird nicht gerendert. Liegt keine Datei vor: Platzhalter auf Start, Profil, Kontakt, Fachseiten; Slot 3 entfällt.
- Das OG-Bild (`public/og-default.png`) bleibt typografisch, bis portrait-1 freigegeben ist.
