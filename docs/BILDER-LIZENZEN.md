# Bild- und Lizenznachweise

Stand: 12.09.2026. Jede Bilddatei im Repository braucht hier eine vollständige Zeile, bevor sie committet wird. Keine Stockfotos, keine fremden Logos, keine KI-generierten Personen- oder Objektbilder, keine fremden Personen als Platzhalter. Schriften: Systemschriften des Endgeräts, keine eingebetteten Schriftdateien.

## Vorhandene Dateien

| Datei | Inhalt | Quelle | Rechte |
|---|---|---|---|
| src/assets/logo-hvm.jpg, logo-hvm.png, public/logo-hvm.webp | HVM-Logo | Skill hvm-ci (Unternehmensasset) | Hausverwaltung Müller GmbH |
| public/favicon.svg, favicon.png | Initialen TM, typografisch | im Projekt erzeugt | Hausverwaltung Müller GmbH |
| public/og-default.png | Typografisches Vorschaubild 1200 x 630 | im Projekt erzeugt (sharp) | Hausverwaltung Müller GmbH |

## Porträts Timo Müller (offen, Faktenliste Nr. 15 und Nr. 34)

Ablage in `src/assets/portraits/`, Rendering ausschließlich über `src/components/Portrait.astro`. Solange eine Datei fehlt, zeigt die Komponente den typografischen Platzhalter; portrait-3 im Profil wird ohne Datei nicht gerendert. Motive, Komposition, Blickrichtung, Serie und Mindestgrößen: `src/assets/portraits/README.md` (Shooting-Brief nach docs/DESIGN-SPEC-V2.md Abschnitt 8).

| Datei | Format und Einsatz | Fotograf | Aufnahmedatum | Nutzungsrechte Web | Freigabe durch Timo Müller (Datum) | Status |
|---|---|---|---|---|---|---|
| src/assets/portraits/portrait-1.jpg | 4:5 Hochformat, Kopf-Schulter-Porträt; Startseite Hero, Profil Hero | offen | offen | offen | offen | Datei liegt nicht vor, Platzhalter aktiv |
| src/assets/portraits/portrait-2.jpg | 3:2 Querformat mit mittigem 1:1-Ausschnitt; Startseite Persönlicher Ansatz, Kontakt, Personenanker der Fachseiten, Autorenkasten | offen | offen | offen | offen | Datei liegt nicht vor, Platzhalter aktiv |
| src/assets/portraits/portrait-3.jpg | 3:2 Querformat, zweites Motiv; Profil zwischen Kapitel 03 und 04, nur mit Datei | offen | offen | offen | offen | Datei liegt nicht vor, Block wird nicht gerendert |

Regeln für den Eintrag:
- Erst die Zeile vollständig ausfüllen (Fotograf, Aufnahmedatum TT.MM.JJJJ, Umfang der Nutzungsrechte für Web einschließlich Bearbeitung und Zuschnitt, Freigabe mit Datum), dann die Datei ablegen und committen. Ohne vollständigen Eintrag bleibt die Datei außerhalb des Repositories.
- Der Dateiname hier muss dem tatsächlichen Namen entsprechen (Endung jpg, jpeg oder png). Der geplante Build-Test prüft nur, ob der Dateiname in dieser Datei vorkommt; er ersetzt nicht die inhaltliche Prüfung der Spalten.
- Bildunterschrift für portrait-3 nur mit freigegebenem Text in `src/data/portraits.ts`. Alt-Texte beschreiben nur, was zu sehen ist; keine Orte, Objekte, Funktionen oder Jahre ohne Freigabe.
- Auf den Motiven keine erkennbaren Dritten, keine lesbaren Adressschilder, Mieter- oder Objektdaten, keine fremden Logos oder Marken.
- Nach dem Eintrag docs/FAKTENLISTE.md Nr. 15 und Nr. 34 auf "freigegeben" setzen; das OG-Bild bleibt typografisch, bis ein eigener Arbeitsschritt es aus portrait-1 erzeugt.

## Weitere offene Punkte
- Freigegebene Objektbilder aus dem eigenen Bestand: nur mit Nachweis der Rechte und Freigabe; Stockfotos dürfen nicht als eigener Bestand erscheinen. Derzeit nicht vorgesehen.
- Schematische Darstellungen (inline-SVG, z. B. Bewertungsmatrix auf /investitionspriorisierung/) sind im Projekt erzeugt und tragen keine Fremdrechte.
