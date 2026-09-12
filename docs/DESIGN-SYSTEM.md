# Design-System

Stand: 12.09.2026. Zusammenfassung des Designsystems v2 nach docs/DESIGN-SPEC-V2.md. Verbindlich ist die Spezifikation; dieses Dokument beschreibt, was in `src/styles/tokens.css`, `src/styles/global.css` und den Komponenten umgesetzt ist. Stand nach Integrationsbuild Runde 3 (12.09.2026), gegen dist geprüft; Prüfergebnisse (axe, Screenshots, Messungen, Kontraste) in docs/TESTBERICHT.md, Stand v2, Runde 3.

## 1. Gestaltungsprinzipien
1. Struktur durch Linien und Raster, nicht durch Flächenwechsel oder Rahmen. Je Seite höchstens zwei Abschnitte auf `--c-flaeche` und höchstens ein dunkler Abschnitt (Cta). Weiß-auf-Weiß-Abschnitte trennt eine 1 px Haarlinie am Container (`.section--linie`).
2. Orange ist Akzent, nie Text und nie Fläche: eine Geste je Abschnitt (Eyebrow-Marker, erster Schritt, Cta-Linie, Platzhalter-Linie, Checklisten-Marker). Trägt ein Abschnitt bereits eine Register-Nummerierung, entfällt der Eyebrow-Marker (`.eyebrow--still`).
3. Hierarchie durch Größe, Maß und Abstand. Systemschrift bleibt CI-Vorgabe für Web, nur die Gewichte 400, 600 und 700.
4. DOM-Reihenfolge ist Lesereihenfolge. Visuelle Anordnung nur per `grid-column`, nie per `order`. Unter 861 px fällt jedes Raster auf eine Spalte.
5. Zustände über Farbe von Linie und Text; keine Bewegung, keine Schatten (außer Untermenü), keine Skalierung. Einzige Bewegung: das FAQ-Kreuz dreht um 45 Grad.
6. Kein zusätzliches JavaScript. Bestehende Skripte (Navigation, Formular) bleiben.
7. Die Faktenliste ist Grenze. Nummern, Kennungen, Platzhalter, Bildunterschriften und Alt-Texte führen keine neuen Aussagen ein. Platzhalter zeigen kein Gesicht und keine Silhouette.

## 2. CI-Herkunft und Farbtokens
Farbwerte, Logo und Typografieregel stammen aus dem HVM-CI (Skill hvm-ci). Für Web-Kontraste nach WCAG 2.2 AA wurden Abstufungen abgeleitet. Sie sind in `tokens.css` als "abgeleitet" gekennzeichnet und keine Original-CI-Werte.

| Token | Wert | Herkunft | Einsatz |
|---|---|---|---|
| `--c-orange` | #E6A83C | HVM-CI | Akzentlinien, Eyebrow-Marker, Kennlinie, Checklisten-Marker, erster Schritt, Platzhalter-Linie. Nie für Text, nie als Fläche. |
| `--c-anthrazit` | #87888A | HVM-CI | Kennlinie; große Ziffern und Kennbuchstaben ab 24 px auf Weiß oder `--c-flaeche` (`.steps li::before`, `.spalte__kennung`, `.kapitel__kennung`). Nirgends sonst. |
| `--c-mittelgrau` | #9C9D9F | HVM-CI | Kennlinie, Link-Unterstreichung im Ruhezustand (nur dekorativ); Formular-, Button- und Toggle-Rahmen sind davon ausgenommen und stehen in `--c-text-3` |
| `--c-hellgrau` | #D7D8DA | HVM-CI | Kennlinie, Untermenü-Linie mobil |
| `--c-umriss` | #ECECEC | HVM-CI | reserviert (Wasserzeichen) |
| `--c-text` | #1A1A1A | HVM-CI | Fließtext, Überschriften, aktive Zustände |
| `--c-dunkel` | #2F3032 | abgeleitet | dunkle Akzentfläche (Cta), Buttons |
| `--c-dunkel-2` | #3D3E41 | abgeleitet | Hover auf dunklen Flächen |
| `--c-dunkel-3` | #232426 | abgeleitet, neu | Fläche des typografischen Porträtplatzhalters (dunkle Variante) |
| `--c-text-2` | #55565A | abgeleitet | Sekundärtext, Lead, Register-Absätze, Caps |
| `--c-text-3` | #6B6C70 | abgeleitet | Meta, Bildunterschriften, Kapitelnummern; Rahmen von Eingabefeldern, Sekundärbutton und Menü-Toggle (Nicht-Text-Kontrast 5,24:1 auf Weiß) |
| `--c-flaeche` | #F6F6F7 | abgeleitet | helle Sektionsflächen (Leistungsumfang, Szenario, Beratung) |
| `--c-flaeche-2` | #EFEFF0 | abgeleitet | helle Porträtplatzhalter, Ergebnisblock des Szenarios auf Weiß |
| `--c-linie` | #D7D8DA | abgeleitet | Haarlinien (`--rule`) |
| `--c-weiss-75` | rgba(255,255,255,.75) | abgeleitet, neu | Sekundärtext auf dunklen Flächen (Cta-Lead, Platzhalter-Label) |
| `--c-weiss-60` | rgba(255,255,255,.60) | abgeleitet, neu | Meta auf dunklen Flächen (Präfix der Cta-Mailzeile) |
| `--c-weiss-16` | rgba(255,255,255,.16) | abgeleitet, neu | Haarlinie auf dunklen Flächen (Passepartout des Platzhalters, Cta-Trennlinie), rein dekorativ |
| `--c-fokus` | #B67F1E | abgeleitet | Fokusring |
| `--c-fehler`, `--c-erfolg` | #A32D2D, #2E6B3A | abgeleitet | Formularstatus |

Kennlinie: Vier Segmente 0 bis 40 % Anthrazit, 40 bis 60 % Mittelgrau, 60 bis 67,5 % Orange, 67,5 bis 100 % Hellgrau, übernommen aus dem Briefbogen, im Kopf 3 px, im Footer 2 px. Sie ist im Kopf der einzige Farbträger.

## 3. Kontrasttabelle
Werte rechnerisch nach WCAG aus docs/DESIGN-SPEC-V2.md Abschnitt 2.3. Verifiziert im Integrationsbuild: axe-core 4.13 (Regeln wcag2a, wcag2aa, wcag21aa, wcag22aa, best-practice) bei 390 und 1440 px auf allen 17 Seiten ohne Verstoß, Regel color-contrast ohne Befund; die rechnerischen Werte wurden per Node-Skript bestätigt und die Kommentare in `tokens.css` angeglichen (siehe docs/TESTBERICHT.md, Stand v2). Nach Änderungen an Farbtokens ist die Prüfung zu wiederholen.

| Kombination | Kontrast | Bewertung |
|---|---|---|
| Weiß auf `--c-dunkel` #2F3032 | 13,21:1 | Text jeder Größe |
| Weiß auf `--c-dunkel-3` #232426 | 15,53:1 | Text jeder Größe |
| `--c-weiss-75` auf `--c-dunkel` | 8,15:1 | Text jeder Größe |
| `--c-weiss-75` auf `--c-dunkel-3` | 9,29:1 | Text jeder Größe |
| `--c-weiss-60` auf `--c-dunkel` | 5,82:1 | Text jeder Größe, bevorzugt Meta ab 15 px |
| `--c-weiss-60` auf `--c-dunkel-3` | 6,46:1 | Text jeder Größe |
| `--c-orange` auf `--c-dunkel` | 6,31:1 | zulässig als Linie und als Fokusring auf dunklen Flächen |
| `--c-orange` auf Weiß | 2,09:1 | nie für Text, nie für Zustandsanzeigen, nur dekorative Linien |
| `--c-anthrazit` auf Weiß | 3,55:1 | nur große Schrift ab 24 px (Ziffern, Kennungen) |
| `--c-anthrazit` auf `--c-flaeche` | 3,29:1 | nur große Schrift ab 24 px |
| `--c-anthrazit` auf `--c-flaeche-2` | 3,09:1 | nicht einsetzen (zu knapp), dort `--c-text-2` verwenden |
| `--c-text-2` auf Weiß / `--c-flaeche` / `--c-flaeche-2` | 7,33 / 6,79 / 6,38:1 | Fließtext |
| `--c-text-3` auf Weiß / `--c-flaeche` / `--c-flaeche-2` | 5,24 / 4,86 / 4,56:1 | Meta ab 13 px; auf `--c-flaeche-2` nur ab 15 px |
| `--c-fokus` auf Weiß / `--c-flaeche` / `--c-flaeche-2` | 3,47 / 3,22 / 3,02:1 | Fokusring (Bedienelement, 3:1 erfüllt), nicht für Text |
| `--c-mittelgrau` auf Weiß | 2,71:1 | nur dekorativ (Link-Unterstreichung im Ruhezustand, Kennlinie); Formular-, Button- und Toggle-Rahmen sind davon ausgenommen |
| Formularrahmen: `--c-text-3` als Rahmen von Eingabefeldern, Sekundärbutton und Menü-Toggle auf Weiß | 5,24:1 | Nicht-Text-Kontrast (WCAG 1.4.11 verlangt 3:1) |
| `--c-weiss-16` auf `--c-dunkel` | 1,66:1 | nur dekorativ |

Regel daraus: Große Ziffern und Kennbuchstaben stehen in `--c-anthrazit` nur auf Weiß oder `--c-flaeche` und nur ab 1,5 rem (24 px). Der Token `--fs-zahl` hat deshalb den harten Mindestwert 1,5 rem. Auf `--c-flaeche-2` und in der hellen Platzhalter-Variante wird `--c-text-2` verwendet. Aktive Zustände in der Navigation stehen in `--c-text`, nicht in Orange.

## 4. Typografie
Systemschrift gemäß CI-Vorgabe für Web (`system-ui`, Segoe UI, Helvetica Neue, Arial). Keine externen Schriftabrufe, keine eingebetteten Schriftdateien. Alle Überschriften `text-wrap: balance`, Absätze `text-wrap: pretty`. H2 und H3 `hyphens: auto`, H1 `hyphens: manual` mit weichen Trennstellen (U+00AD) im Quelltext. Ziffern überall `tabular-nums`.

| Stufe | Token | Größe | Gewicht | Farbe | Maß | Einsatz |
|---|---|---|---|---|---|---|
| Display | `--fs-display` | 32 bis 68 px | 700 | `--c-text` | 18ch | H1 Startseite und Profil (`.display`) |
| H1 | `--fs-h1` | 30 bis 56 px | 600 | `--c-text` | 24ch | Fachseiten, Vertiefungen, Kontakt, Einblicke, Rechtstexte |
| H2 | `--fs-h2` | 28 bis 44 px | 600 | `--c-text` | 24ch, in Randspalten 14ch | Abschnittsüberschriften |
| H3 | `--fs-h3` | 20 bis 24 px | 600 | `--c-text` | | Register, Spalten, Steps, Kapitelköpfe |
| Standfirst | `--fs-standfirst` | 20 bis 26 px | 600 | `--c-text` | `--w-narrow` 44ch | Leitzeile Start, Ausgangsfrage der Fachseiten |
| Lead | `--fs-lead` | 18 bis 22 px | 400 | `--c-text-2` | `--w-measure` 60ch | Einleitungen (`.lead`, `.section-head p`) |
| Zahl | `--fs-zahl` | 24 bis 56 px | 600 | `--c-anthrazit` | | Ordnungszahlen der Steps, Kennungen A, B, C |
| Body | `--fs-body` | 17 bis 18 px | 400 | `--c-text`, sekundär `--c-text-2` | `--w-text` 68ch | Fließtext, Zeilenhöhe 1,6 |
| Small | `--fs-small` | 15 px | 400 oder 600 | `--c-text-2` | | Fakten-Band, Seitennavigation, Registerziffern |
| Caps | `--fs-xs` | 13 px, Versalien, `--ls-caps` | 600 | `--c-text-2`, auf dunkel `--c-weiss-75` | | Eyebrow, `dt`, Kapitelnummern, Dossier-Kopfzeile, Platzhalter-Label |

Weitere Tokens: `--lh-heading` 1,12, `--lh-display` 1,04, `--ls-display`, `--ls-heading`, `--ls-caps`. Links: Unterstreichung 1 px in `--c-mittelgrau`, Hover in `--c-text`. Textlinks mit Pfeil (`.textlink`) in 600, Hover 2 px Unterstreichung, der Pfeil bewegt sich nicht. Zielhöhe: `.textlink` ist `inline-block` mit `padding-block: 0.65rem` und gleich großem negativem Außenabstand (44,8 px auch für `.textlink.small`, Zeilenrhythmus unverändert, Pfeil bleibt am letzten Wort). Seitenregeln setzen keinen eigenen Innenabstand; sichtbare Abstände werden mit `calc(var(--s-n) - 0.65rem)` gesetzt, Textlinks am Absatzende stehen als eigene Zeile (`display: block; width: fit-content`), Listen aus Textlinks halten mindestens `calc(var(--s-2) + 1.3rem)` Zeilenabstand, damit sich Zielflächen nicht überlappen.

## 5. Raster, Abstände und Linien
- Inhaltsbreite `--w-content` 1.240 px, Seitenabstand `--gutter`. Abschnitte `--section-y` (64 bis 128 px), kompakt `--section-y-tight` (40 bis 72 px). Abstände ausschließlich über `--s-1` bis `--s-10`.
- Zwölfspaltenraster `.g` mit `--col-gap` und `--row-gap`; Spaltenzuweisung über `.gc-A-B` (Spalten A bis B einschließlich) und `.gc-full`. Gängige Teilungen: Hero 7/4, Fachseiten-Hero 8/4, Text mit Aside 7/4, Artikel `gc-3-10`, Bild links 6/6, Dossier 6/5. Ein Bruchpunkt für alle Raster: 860 px, darunter eine Spalte. Zweiter Bruchpunkt 640 px nur für Ziffernspalten (Register, Steps).
- Linien als Tokens: `--rule` (1 px hellgrau), `--rule-strong` (2 px Text), `--rule-dark` (1 px Weiß 16 % auf dunklen Flächen), `--rule-akzent` (3 px Orange). Utilities `.rule-top`, `.rule-strong`.
- Flächenregel: `.section--flaeche` höchstens zweimal je Seite, `.section--dunkel` einmal (Cta). Fachseite.astro trägt eine Fläche (Leistungsumfang); ein Szenario im Slot ist die zweite. Slot-Abschnitte deshalb auf Weiß mit `.section--linie`.
- Medien: `--ar-portrait` 4/5, `--ar-landscape` 3/2, `--ar-square` 1/1, `--radius-media` 2 px. Buttons und Felder `--radius` 4 px. Keine anderen Radien.
- Sticky: einzige Sticky-Klasse neben dem Header ist `.sticky-rand` (Randspaltenköpfe, Kapitelköpfe, Arbeitsergebnisse, Kontakt-Kasten). Aktiv nur ab 861 px Breite und 641 px Höhe, `top: calc(var(--header-h) + var(--s-6))`.

## 6. Muster in global.css
| Muster | Markup | Regel |
|---|---|---|
| Register `.register` | `<ol class="register" role="list">` mit `li > h3 + p [+ .textlink]` | Ersatz für Kartenraster bei Aufzählungen mit Titel und Text. Ziffern 01, 02 aus CSS mit Alternativtext-Syntax (`content: counter(...) / ""`), Screenreader lesen sie nicht zusätzlich zur Listenposition. `.register--2` ab 861 px zweispaltig mit Waisenregel (letzter ungerader Eintrag über volle Breite); `.register--2 h3` dort in 1,2 rem statt `--fs-h3` (Abweichung von DESIGN-SPEC-V2 6.3: Titel in `--fs-h3` liefen in Spalten um 260 px über vier bis fünf Zeilen). Ziffern sind Gliederung, keine Rangfolge. |
| Abschnitt mit Randspalte `.abschnitt` | `.abschnitt > .abschnitt__kopf.sticky-rand (eyebrow--still, h2, p) + .abschnitt__inhalt` | Magazin-Gliederung: Kopf in Spalten 1 bis 4, Inhalt in 5 bis 12. Ersetzt `.section-head` bei Ausgangslagen, KI, Passende Situationen, Entscheidungsunterlagen, Einblicke-Übersicht. Ist selbst ein Zwölfspaltenraster (kein zusätzliches `.g`). |
| Kapitel `.kapitel` | `section.kapitel > .kapitel__kopf.sticky-rand (.kapitel__nr oder .kapitel__kennung aria-hidden, h2 oder h3) + .kapitel__text` | Kapitelfolge mit seitlicher Überschrift, Haarlinie oben, letztes Kapitel Linie unten. Einsatz: fünf Profilkapitel (Nummern 01 bis 05), drei Mandatsformen auf der AM-Seite (Kennungen A, B, C), Timeline-Stationen. Nummern und Kennungen sind echter Text mit `aria-hidden`. |
| Spalten `.spalten` | `.spalten > article.spalte (.spalte__kennung aria-hidden, h3, p, dl.spalte__dl, .textlink)` | Drei gleichwertige Mandatsformen als typografische Spalten mit 2 px Linie oben statt Karten. `auto-fit`, Mindestbreite 17 rem; der Textlink steht unten bündig. Kennung in `--fs-zahl` und Anthrazit, nur auf Weiß oder `--c-flaeche`. |
| Steps `.steps` | `<ol class="steps" role="list">` mit `li > h3 + p` | Große Ordnungszahlen aus CSS (nicht gelesen), erster Schritt mit oranger Linie, mobil (unter 641 px) Zahlenspalte links, Ziffer bleibt 24 px. Vier bis sechs Schritte, keine Dauerangaben. |
| Tabellen `.table-wrap table` | `caption` in Caps, `th[scope]`, `.num` rechtsbündig | Kopfzeile mit 2 px Linie statt grauer Fläche. Jede Tabelle trägt eine Caption; sie beginnt mit "Schematische" und benennt, was fehlt (kein Projektergebnis, keine Zielwerte), im Build "Schematische Struktur, kein Projektergebnis" und "Schematische Auswahl, keine Zielwerte". Keine Zahlen, die Bestand, Renditen oder Richtwerte darstellen. |
| Definitionsliste `.dl-grid` | `dl.dl-grid > dt + dd` | Zweispaltig, Haarlinien je Zeile, `dt` in Caps, `dd` in `--c-text-2`; unter 521 px einspaltig. |
| FAQ `.faq` | über `Faq.astro` | Kreuz aus zwei Linien, geöffnet 45 Grad gedreht (`--dur-slow`, bei reduzierter Bewegung sofort), Ziel mindestens 44 px. Antworten sind reiner Text (JSON-LD FAQPage). Prop `id` für mehrere Faq je Seite. |
| Checkliste `.checklist` | `ul.checklist` | Orange Marker als einzige Orange-Geste des Blocks (Arbeitsergebnisse, Abgrenzung, Vorbereitung). |
| Card `.card` | Bestand, begrenzt | Ohne Rahmen und Fläche, nur Haarlinie oben; `.card--flaeche` mit heller Fläche. Höchstens ein Kartenraster je Seite; Aufzählungen mit Titel und Text sind Register. |
| Section-Kopf `.section-head` | `eyebrow, h2 (24ch), p (Lead)` | Für Abschnitte ohne Randspalte (Vorgehen, Szenario, FAQ, Slot-Abschnitte). |

## 7. Komponenten
| Komponente | Gestaltung |
|---|---|
| Header | Sticky, weiß, 1 px Linie unten, kein Blur. Name 1,25 rem 700, Claim in Caps darunter. Menüpunkte mit transparenter Unterstreichung, aktiv in `--c-text`, Hover in `--c-mittelgrau`. Untermenü Beratung als details/summary mit zwei Gruppen (`.submenu--gruppen`): Gruppenüberschrift `p.submenu__titel` in Caps mit id, Liste per `aria-labelledby`, Einträge mit Label und Kurzbeschreibung, Ziel 44 px, aktiver Eintrag mit 2 px Linie links. Desktop zweispaltig 38 rem mittig unter dem Auslöser, 2 px Linie oben; mobil (bis 1120 px) Toggle mit Rahmen in `--c-text-3`, Gruppen untereinander mit Trennlinie, Untermenü mit 2 px Hellgrau-Linie links; geöffnet begrenzt `max-height: 100dvh` mit `overflow-y: auto` den Kopf. Kopfhöhe 73 px in allen Breiten (`--header-h` 72 px plus 1 px Linie), `scroll-padding-top` 88 px. Ohne JavaScript ist die Navigation immer sichtbar und der Kopf unterhalb des Bruchpunkts statisch; Escape und Klick außerhalb schließen alle offenen Untermenüs, ein focusout-Handler schließt das Desktop-Overlay beim Verlassen per Tastatur. Kein Mega-Menü mit Bildern. |
| Hero.astro | Eyebrow, H1 (`display` auf Start und Profil), optional Standfirst-Frage, Lead, Buttonzeile; Slot `media` teilt 7/4. Prop `mail` für die E-Mail-Zeile (Kontakt), `ohneLinie` vor einer Seitennavigation, `compact` für Rechtstexte, Danke und 404. |
| Seitennav.astro | Reiner Text zwischen zwei Haarlinien, `--fs-small` 600, Ziele 44 px, Abstand `--s-6` (unter 641 px `--s-5`), Hover Unterstreichung. Höchstens sechs Anker je Seite (AM, Vertiefungen, Zusammenarbeit), sieben auf KI- und PM-Seite und im Glossar; bei 1440 px eine Zeile, bei 390 px höchstens drei. `nav[aria-label="Auf dieser Seite"] > ol[role=list]`. Direkt unter einem Hero ohne Linie unten. |
| Fachseite.astro | Hero 8/4 ohne Linie unten, Seitennav, Situationen als `.abschnitt` mit `register--2`, Leistungsumfang auf `--c-flaeche` 7/4 mit `aside.ergebnisse.sticky-rand` (2 px Linie, Checkliste, Hinweiszeile), Slot methodik, Vorgehen als Steps, Slot szenario, Abgrenzung 7/4 mit Linkregister `ul.verwandt` (Pfeil, 44 px), Faq in `gc-1-8`, Personenanker (Portrait 2 als 1:1 hell, Name, Claim in Caps, Link Profil, keine weiteren Sätze), Cta. |
| Portrait.astro | Ein Bauteil für alle Porträtplätze. Mit Datei: `figure.portrait` mit `img` (webp, `object-fit: cover`, Ausschnitt über `--focus`), optional `figcaption.bildunterschrift`. Ohne Datei: `div.portrait.portrait--typo` (`aria-hidden`) mit Label TIMO MÜLLER, Initialen TM, oranger Linie und Claim; dunkle Variante auf `--c-dunkel-3` mit Passepartout `--c-weiss-16`, helle Variante auf `--c-flaeche-2` mit Passepartout `--c-linie`, Text in `--c-text` und `--c-text-2`. Querformat: Claim rechts unten. Quadrat: nur Initialen und Linie (wirkt als Signet). Beide Zustände haben identische Außenmaße (kein Layoutsprung). `nurMitBild` unterdrückt den Platzhalter. Kein Gesicht, keine Silhouette, kein Hinweis "Porträt folgt". |
| Szenario.astro | Vollständiger Abschnitt auf `--c-flaeche` (`flaeche={false}`: Weiß mit Linie, Ergebnisblock auf `--c-flaeche`). `.section-head` mit `eyebrow--still` "So würde ich vorgehen", dann Dossier im Raster 6/5: Kopfzeile `aria-hidden` mit zwei Caps ("Methode, schematisch", "Keine Ergebniszusage, kein Kundenfall"; 2 px Linie oben, 1 px unten), links die Felder Ausgangslage, Meine Rolle, Vorgehen (nummerierte Phasen), Beteiligte (Liste mit Haarlinien), rechts der weiße Ergebnisblock mit 2 px Linie: Arbeitsergebnisse (Checkliste, einzige Orange-Geste), Woran Erfolg gemessen würde, Grenzen. Fußsatz als `.bildunterschrift` mit optionalem Link. Feldtitel sind h3 in 1,2 rem (Stufe der Steps und FAQ-Summaries, unterhalb der H2 des Abschnitts). Fallstudienfelder als `dl.dl-grid` nur mit `freigabe`. |
| Autorenkasten.astro | `aside` mit 2 px Linie oben, 1 px unten, H2 in Caps ("Über den Autor"), Raster 8 rem / Rest (unter 521 px 6 rem): Portrait 2 als 1:1 hell, Name in `--fs-h3`, zwei Sätze aus `PERSON.funktionen`, Textlink "Zum Profil". |
| Cta.astro | `section--dunkel`, Raster 7/4: links orange Linie, H2 (18ch), Lead in `--c-weiss-75`; rechts Button, E-Mail und die Zeile "Was nach Ihrer Anfrage passiert" mit Link auf /zusammenarbeit/ (Prop `ohneAblauf`). Genau ein Cta je Seite, direkt vor dem Footer. |
| Footer.astro | Weiß, 2 px Linie oben, Absenderzeile (Name, Claim, E-Mail), drei Linkspalten aus `FOOTER_SPALTEN`, Betreiberblock "Ein Angebot der" mit HVM-Logo, Anschrift und Registerzeile, Kennlinie 2 px unten. Generiert aus den Navigationsdaten. |
| Timeline.astro | `ol.timeline` aus `.kapitel` mit Zeitraum im Kopf; rendert nur Stationen mit `freigabe: true`, ohne freigegebene Station nichts. |
| Breadcrumb.astro | Textzeile mit Trennzeichen, `aria-current="page"` auf dem letzten Eintrag, BreadcrumbList im JSON-LD aus demselben Array. |
| ContactForm.astro | Zwei Fieldsets mit Legenden (Haarlinie unten), ohne `order`; Fehlermeldungen per `aria-describedby`, Status mit `role="status"` und 2 px Linie links. |

## 8. Schematische Darstellungen
Schematische Grafiken sind ausschließlich inline-SVG in einer `figure` mit `figcaption`. Pflichten: Farben nur aus tokens.css, Text als echtes SVG-Textelement (kein Text in Pfaden), Textalternative über `role="img"` mit `aria-labelledby` oder `aria-label`, sichtbare Kennzeichnung "Schematische Darstellung, ohne Zahlen" in der figcaption und eine textliche Beschreibung des Inhalts im Fließtext darunter. Keine Zahlen, keine Werte, keine Skalenbeschriftungen mit Beträgen oder Prozenten, keine Orte oder Objekte. In v2 gibt es genau eine Grafik: die Bewertungsmatrix auf /investitionspriorisierung/ (Achsen "Dringlichkeit und Risiko" gegen "Wirkung auf Ertrag und Wert", Felder zwingend, sinnvoll, verzichtbar). Alle anderen Strukturen (Steuerungskette, Berichtsaufbau, Zuständigkeitsmatrix) sind Steps, Listen oder Tabellen mit Caption. `npm test` prüft die Kennzeichnung "Schematisch" in der figcaption jeder `figure` außer Porträts. Keine Diagramme mit Erfolgszahlen, keine Bilder als Ersatz für Text.

## 9. Bilder
Porträts werden ausschließlich über `Portrait.astro` gerendert (Abschnitt 7). Dateien `portrait-1` (4:5), `portrait-2` (3:2, daraus 1:1-Ausschnitt über `focus`), `portrait-3` (3:2) in `src/assets/portraits/`; Erkennung zur Buildzeit über `src/lib/portraits.ts`, Alt-Texte und Bildunterschriften zentral in `src/data/portraits.ts` (nur Angaben aus der Faktenliste). Einsatzorte, `sizes` und `widths` je Ort stehen in `src/assets/portraits/README.md`; Motive, Komposition, Blickrichtung, Serie und Mindestgrößen ebenfalls dort (Shooting-Brief nach DESIGN-SPEC-V2 Abschnitt 8). Aktuell liegt keine Datei vor: alle Plätze zeigen den typografischen Platzhalter, Slot 3 im Profil entfällt. Kein Stockfoto, kein KI-Bild, keine fremde Person, keine Objektbilder ohne Freigabe. HVM-Logo aus dem CI-Skill, per sharp optimiert. OG-Bild typografisch (`public/og-default.png`), bleibt so bis zur Freigabe von portrait-1. Zielgewicht der größten Hero-Bildstufe unter 120 KB, Startseite unter 1 MB (Build-Test misst). Lizenznachweise: docs/BILDER-LIZENZEN.md; ohne Eintrag bleibt eine Datei außerhalb des Repositories.

## 10. Barrierefreiheit
Skip-Link, sichtbare Fokuszustände (`:focus-visible` 3 px `--c-fokus`, auf dunklen Flächen und Platzhaltern weiß), 44 px Mindestgröße für Bedienelemente (Navigation, Untermenü, Seitennav, Verwandte Themen, FAQ-Summary, Buttons), `aria-current` in Navigation, Untermenü und Breadcrumb, `aria-expanded` am Menü-Toggle, Fehlermeldungen per `aria-describedby`, `role="status"` für den Formularstatus, `role="list"` auf Registern und Steps (Safari verwirft die Listensemantik sonst bei `list-style: none`), dekorative Ziffern und Kennungen nicht vorgelesen, `scroll-padding-top` für Anker unter dem Sticky-Header, `lang="de"`, genau eine H1 je Seite, Hierarchie ohne Sprünge, Tabellen mit `th` und `scope`, `figure` mit `figcaption`, DOM-Reihenfolge gleich Lesereihenfolge. Sticky-Randspalten sind unter 641 px Höhe statisch, damit sie bei 200 Prozent Zoom keinen Fokus verdecken. Prüfung: axe bei 390 und 1440 px, Tastatur, Screenreader-Stichprobe (Register mit Positionsangabe, Kennungen nicht gelesen, Dossier-Kopfzeile nicht gelesen, Hinweistext schon).

## 11. Bewegung
`--dur` 160 ms für Farben und Linienfarben, `--dur-slow` 240 ms nur für das FAQ-Kreuz, `--ease`. Bei `prefers-reduced-motion: reduce` sind beide Dauern 0 ms. Hover-Regeln nur in `@media (hover: hover)`. Keine Parallax-Effekte, keine Einblendungen, keine Skalierung, kein Scroll-Hijacking, keine Slider, kein erzwungener Dark Mode (`color-scheme: light`).

## 12. Verbote und Prüfung
Keine Pillen-Badges, keine Kartenwand, keine Hintergrundvideos, keine Autoplay-Slider, keine externen Schriften oder CDNs, keine Stockfotos, keine KI-Porträts, keine erfundenen Zahlen, Zähler oder Sterne, keine Gedankenstriche im deutschen Text, Orange nie als Text oder Fläche. `npm test` prüft Gedankenstriche, externe Ressourcen, Stockfoto-Quellen, verbotene Formulierungen, Platzhalter, Titles, Descriptions, Canonicals, Sitemap und Größenbudget. Screenshots bei 360, 390, 768, 1024 und 1440 px (Kopf zusätzlich bei 1081, 1100 und 1120 px) ohne horizontalen Scroll, ohne abgeschnittene H1 und ohne überlagerte Buttons; Zielgrößen, Überlappungen, Anker und CLS per Playwright gemessen (docs/TESTBERICHT.md).
