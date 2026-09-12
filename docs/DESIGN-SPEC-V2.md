# Designspezifikation v2, timo.muellerhv.de

Stand: 12.09.2026. Verbindliche Vorgabe für die Umsetzung in `src/styles/tokens.css`, `src/styles/global.css` und den Astro-Komponenten. Grundlage sind der Masterprompt (verbindlich), `docs/FAKTENLISTE.md`, `docs/DESIGN-SYSTEM.md`, die drei Designkonzepte v2 und die beiden Jurybewertungen.

## 0. Entscheidung

Basis ist der Jurysieger, Konzept 0 "Editorial": Zwölfspaltenraster mit asymmetrischen Teilungen, Display-Stufe für die H1, Register mit Haarlinien statt Kartenwand, Randspalten-Überschriften, Kapitelraster im Profil, deutlich mehr Weißraum, Orange als eine Geste je Abschnitt, Portraet-Komponente mit typografischem Platzhalter.

Aus den anderen Konzepten werden die von beiden Jurys empfohlenen Elemente übernommen:

| Nr. | Element | Herkunft | Umsetzung in dieser Spezifikation |
|---|---|---|---|
| 1 | Alternativtext-Syntax `content: counter(...) / ""` mit Fallback-Zeile für alle CSS-Ziffern | Konzept 1 | Abschnitt 6.3, 6.6, 6.10, 6.12 |
| 2 | portrait-3 im Profil ohne Datei nicht rendern (`nurMitBild` als Standard für diesen Slot) | Konzept 1 und 2 | Abschnitt 7 |
| 3 | Waisenregel für zweispaltige Register (letzter ungerader Eintrag über volle Breite) | Konzept 1 | Abschnitt 6.3 |
| 4 | Kennbuchstaben und dekorative Ziffern `aria-hidden="true"` | Konzept 1 | Abschnitt 6.5, 6.10 |
| 5 | Sticky-Elemente zusätzlich bei geringer Viewporthöhe statisch | Konzept 1 und 2 | Abschnitt 5.5 |
| 6 | Tabellenstil mit Caption "Schematische Modellannahme, kein Projektergebnis" | Konzept 1 | Abschnitt 6.14 |
| 7 | Kopfzeile am Dossier "Methode, schematisch" und "Keine Ergebniszusage, kein Kundenfall" | Konzept 1 | Abschnitt 6.7 |
| 8 | Kontaktformular in zwei Fieldsets mit Legenden, ohne `order` | Konzept 1 | Abschnitt 6.13 |
| 9 | Verwandte Themen als Linkregister mit Pfeil und 44 px Mindesthöhe | Konzept 1 | Abschnitt 6.11 |
| 10 | Personenanker vor dem Cta jeder Fachseite mit 1:1-Portraet, ohne Satzwiederholung | Konzept 2, Einschränkung Jury 1 | Abschnitt 6.11 |
| 11 | E-Mail zusätzlich im Kontakt-Hero, kein CSS `order` | Konzept 2 | Abschnitt 6.13 |
| 12 | Fotoplan als Shooting-Brief, Fallback bei nur einer Datei | Konzept 2 | Abschnitt 8 |
| 13 | Build-Hinweis in `scripts/test-build.mjs`: welche Slots mit Bild, welche mit Platzhalter | Konzept 2 | Abschnitt 11 |
| 14 | Jeden neuen Token mit gemessenem Kontrast in `docs/DESIGN-SYSTEM.md` dokumentieren | Konzept 1 und 2 | Abschnitt 2.3 |
| 15 | FAQ-Marker als CSS-Kreuz mit 45-Grad-Drehung, bei reduzierter Bewegung sofort | Konzept 1 und 2 | Abschnitt 6.12 |
| 16 | OG-Bild bleibt typografisch bis zur Portraetfreigabe | Konzept 2 | Abschnitt 8.4 |

Ausdrücklich nicht übernommen: warme Off-White-Palette, Radien 10 und 16 px, Verlauf im Platzhalter, Schriftgewichte 500 und 650 (Konzept 2); Nummerierung des Untermenüs, CSS `order` auf der Kontaktseite, Abbau des Weißraums, Orange-Tick an jedem Schritt (Konzept 1). Das Kennlinien-Segment im Platzhalter (Jury 2, optional) wird nicht übernommen, weil es mit der Kennlinie im Header konkurriert; im Platzhalter bleibt eine einzelne orange Linie.

## 1. Gestaltungsprinzipien

1. Struktur durch Linien und Raster, nicht durch Flächenwechsel oder Rahmen. Je Seite höchstens zwei Abschnitte auf `--c-flaeche`, höchstens ein dunkler Abschnitt (Cta). Abschnitte auf Weiß werden durch eine 1 px Haarlinie am Container getrennt.
2. Orange ist Akzent, nie Text und nie Fläche: eine Geste je Abschnitt (Eyebrow-Marker, erster Schritt, Cta-Linie, Platzhalter-Linie, Checklisten-Marker). Wo ein Abschnitt bereits eine Register-Nummerierung trägt, entfällt der Eyebrow-Marker (`.eyebrow--still`).
3. Hierarchie durch Größe, Maß und Abstand, nicht durch neue Schriften. Systemschrift bleibt CI-Vorgabe für Web. Nur die Gewichte 400, 600 und 700.
4. DOM-Reihenfolge ist Lesereihenfolge. Visuelle Vertauschungen nur per `grid-column`, nie per `order`. Unter 861 px fällt jedes Raster auf eine Spalte.
5. Zustände über Farbe von Linie und Text, keine Bewegung, keine Schatten, keine Skalierung. Einzige Bewegung: das FAQ-Kreuz dreht 45 Grad.
6. Kein zusätzliches JavaScript. Bestehende Skripte (Navigation, Formular) bleiben unverändert.
7. Faktenliste ist Grenze. Nummern, Kennungen, Platzhalter, Bildunterschriften und Alt-Texte führen keine neuen Aussagen ein. Platzhalter zeigen kein Gesicht und keine Silhouette.

## 2. Farben und Kontraste

### 2.1 Unveränderte CI- und Bestands-Tokens
`--c-orange`, `--c-anthrazit`, `--c-mittelgrau`, `--c-hellgrau`, `--c-umriss`, `--c-text` (HVM-CI) sowie `--c-dunkel`, `--c-dunkel-2`, `--c-text-2`, `--c-text-3`, `--c-flaeche`, `--c-flaeche-2`, `--c-linie`, `--c-weiss`, `--c-fokus`, `--c-fehler`, `--c-erfolg` (abgeleitet) bleiben wertgleich.

### 2.2 Neue abgeleitete Werte
Alle neuen Werte sind Grau- und Weißabstufungen innerhalb der HVM-Farbwelt und in `tokens.css` mit dem Kommentar "abgeleitet" zu kennzeichnen.

| Token | Wert | Einsatz |
|---|---|---|
| `--c-dunkel-3` | `#232426` | Fläche des typografischen Portraetplatzhalters (dunkle Variante) |
| `--c-weiss-75` | `rgba(255,255,255,.75)` | Sekundärtext auf dunklen Flächen (Cta-Lead, Platzhalter-Label) |
| `--c-weiss-60` | `rgba(255,255,255,.60)` | Meta auf dunklen Flächen (Cta-Mailzeile-Präfix) |
| `--c-weiss-16` | `rgba(255,255,255,.16)` | Haarlinie auf dunklen Flächen (Passepartout, Cta-Trennlinie), rein dekorativ |

### 2.3 Kontrastwerte (rechnerisch nach WCAG, vor Abnahme mit axe und einem Kontrastprüfer zu verifizieren)

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
| `--c-mittelgrau` auf Weiß | 2,71:1 | nur dekorativ (Link-Unterstreichung im Ruhezustand, Rahmen) |
| `--c-weiss-16` auf `--c-dunkel` | 1,66:1 | nur dekorativ |

Regel daraus: Große Ziffern und Kennbuchstaben stehen in `--c-anthrazit` nur auf Weiß oder `--c-flaeche` und nur ab 1,5 rem (24 px). Der Token `--fs-zahl` hat deshalb den harten Mindestwert 1,5 rem. Auf `--c-flaeche-2` und in der hellen Platzhalter-Variante wird `--c-text-2` verwendet. Diese Tabelle ist in `docs/DESIGN-SYSTEM.md` zu übernehmen und nach dem axe-Lauf um das Prüfergebnis zu ergänzen.

## 3. Token-Liste (tokens.css)

### 3.1 Übersicht alt und neu

| Token | alt | neu | Status |
|---|---|---|---|
| `--c-orange` bis `--c-erfolg` (alle Farben) | siehe Bestand | unverändert | bleibt |
| `--c-dunkel-3` | nicht vorhanden | `#232426` | neu |
| `--c-weiss-75` | nicht vorhanden | `rgba(255,255,255,.75)` | neu |
| `--c-weiss-60` | nicht vorhanden | `rgba(255,255,255,.60)` | neu |
| `--c-weiss-16` | nicht vorhanden | `rgba(255,255,255,.16)` | neu |
| `--ff-sans` | Systemschrift-Stack | unverändert | bleibt |
| `--fs-body` | `clamp(1.0625rem, 1rem + 0.2vw, 1.125rem)` | unverändert | bleibt |
| `--fs-small` | `0.9375rem` | unverändert | bleibt |
| `--fs-xs` | `0.8125rem` | unverändert | bleibt |
| `--fs-eyebrow` | `0.8125rem` | unverändert | bleibt |
| `--fs-display` | nicht vorhanden | `clamp(2rem, 1.1rem + 3.4vw, 4.25rem)` | neu, 32 bis 68 px, nur H1 Start und Profil |
| `--fs-h1` | `clamp(1.75rem, 1rem + 2.4vw, 3.25rem)` | `clamp(1.875rem, 1.1rem + 2.4vw, 3.5rem)` | geändert, 30 bis 56 px |
| `--fs-h2` | `clamp(1.625rem, 1.3rem + 1.4vw, 2.25rem)` | `clamp(1.75rem, 1.25rem + 1.8vw, 2.75rem)` | geändert, 28 bis 44 px |
| `--fs-h3` | `clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)` | unverändert | bleibt |
| `--fs-lead` | nicht vorhanden (bisher `1.15em` in `.lead`) | `clamp(1.125rem, 1.02rem + 0.45vw, 1.375rem)` | neu, 18 bis 22 px |
| `--fs-standfirst` | nicht vorhanden | `clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)` | neu, 20 bis 26 px |
| `--fs-zahl` | nicht vorhanden | `clamp(1.5rem, 1.1rem + 1.6vw, 3.5rem)` | neu, 24 bis 56 px, Mindestwert 24 px ist Kontrastbedingung |
| `--lh-body` | `1.6` | unverändert | bleibt |
| `--lh-tight` | `1.15` | unverändert, nur noch Kompatibilität | bleibt |
| `--lh-heading` | nicht vorhanden | `1.12` | neu |
| `--lh-display` | nicht vorhanden | `1.04` | neu |
| `--ls-display` | nicht vorhanden | `-0.028em` | neu |
| `--ls-heading` | nicht vorhanden | `-0.015em` | neu |
| `--ls-caps` | nicht vorhanden | `0.08em` | neu |
| `--w-content` | `1240px` | unverändert | bleibt |
| `--w-text` | `68ch` | unverändert | bleibt |
| `--w-measure` | nicht vorhanden | `60ch` | neu, Lead |
| `--w-narrow` | nicht vorhanden | `44ch` | neu, Standfirst |
| `--gutter` | `clamp(1rem, 4vw, 2.5rem)` | unverändert | bleibt |
| `--cols` | nicht vorhanden | `12` | neu |
| `--col-gap` | nicht vorhanden | `clamp(1rem, 2.4vw, 2rem)` | neu |
| `--row-gap` | nicht vorhanden | `clamp(2rem, 4vw, 3rem)` | neu |
| `--num-w` | nicht vorhanden | `3.5rem` | neu, Ziffernspalte in Registern |
| `--s-1` bis `--s-9` | Bestand | unverändert | bleibt |
| `--s-10` | nicht vorhanden | `8rem` | neu |
| `--section-y` | `clamp(3.5rem, 6vw, 6rem)` | `clamp(4rem, 8vw, 8rem)` | geändert, 64 bis 128 px |
| `--section-y-tight` | nicht vorhanden | `clamp(2.5rem, 5vw, 4.5rem)` | neu, Bänder und Seitennavigation |
| `--header-h` | nicht vorhanden | `4.5rem` | neu, entspricht der bestehenden Mindesthöhe des Headers |
| `--rule` | nicht vorhanden | `1px solid var(--c-linie)` | neu |
| `--rule-strong` | nicht vorhanden | `2px solid var(--c-text)` | neu |
| `--rule-dark` | nicht vorhanden | `1px solid var(--c-weiss-16)` | neu |
| `--rule-akzent` | nicht vorhanden | `3px solid var(--c-orange)` | neu |
| `--ar-portrait` | nicht vorhanden | `4 / 5` | neu |
| `--ar-landscape` | nicht vorhanden | `3 / 2` | neu |
| `--ar-square` | nicht vorhanden | `1 / 1` | neu |
| `--radius` | `4px` | unverändert (Buttons, Felder, Skip-Link) | bleibt |
| `--radius-media` | nicht vorhanden | `2px` | neu, Bilder und Platzhalter |
| `--shadow-soft` | Bestand | unverändert, nur Untermenü | bleibt |
| `--dur` | `160ms` | unverändert | bleibt |
| `--dur-slow` | nicht vorhanden | `240ms` | neu, nur FAQ-Kreuz |
| `--ease` | nicht vorhanden | `cubic-bezier(.2, .6, .2, 1)` | neu |

### 3.2 Vollständiger Ergänzungsblock für tokens.css

Der bestehende `:root`-Block bleibt, die drei geänderten Werte (`--fs-h1`, `--fs-h2`, `--section-y`) werden dort ersetzt. Alles Weitere wird als zweiter Block direkt darunter ergänzt:

```css
/* v2 Ergaenzungen. Farbwerte sind abgeleitet, keine CI-Originale. */
:root {
  --c-dunkel-3: #232426;
  --c-weiss-75: rgba(255, 255, 255, .75);
  --c-weiss-60: rgba(255, 255, 255, .60);
  --c-weiss-16: rgba(255, 255, 255, .16);

  --fs-display: clamp(2rem, 1.1rem + 3.4vw, 4.25rem);
  --fs-lead: clamp(1.125rem, 1.02rem + 0.45vw, 1.375rem);
  --fs-standfirst: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --fs-zahl: clamp(1.5rem, 1.1rem + 1.6vw, 3.5rem); /* Mindestwert 24 px: Anthrazit nur als grosse Schrift */
  --lh-heading: 1.12;
  --lh-display: 1.04;
  --ls-display: -0.028em;
  --ls-heading: -0.015em;
  --ls-caps: 0.08em;

  --w-measure: 60ch;
  --w-narrow: 44ch;
  --cols: 12;
  --col-gap: clamp(1rem, 2.4vw, 2rem);
  --row-gap: clamp(2rem, 4vw, 3rem);
  --num-w: 3.5rem;
  --s-10: 8rem;
  --section-y-tight: clamp(2.5rem, 5vw, 4.5rem);
  --header-h: 4.5rem;

  --rule: 1px solid var(--c-linie);
  --rule-strong: 2px solid var(--c-text);
  --rule-dark: 1px solid var(--c-weiss-16);
  --rule-akzent: 3px solid var(--c-orange);

  --ar-portrait: 4 / 5;
  --ar-landscape: 3 / 2;
  --ar-square: 1 / 1;
  --radius-media: 2px;

  --dur-slow: 240ms;
  --ease: cubic-bezier(.2, .6, .2, 1);
}
@media (prefers-reduced-motion: reduce) {
  :root { --dur: 0ms; --dur-slow: 0ms; }
}
```

Im bestehenden Block werden ersetzt:

```css
--fs-h1: clamp(1.875rem, 1.1rem + 2.4vw, 3.5rem);
--fs-h2: clamp(1.75rem, 1.25rem + 1.8vw, 2.75rem);
--section-y: clamp(4rem, 8vw, 8rem);
```

## 4. Typografie

### 4.1 Skala

| Stufe | Token | Größe | Zeilenhöhe | Laufweite | Gewicht | Farbe | Maß | Einsatz |
|---|---|---|---|---|---|---|---|---|
| Display | `--fs-display` | 32 bis 68 px | `--lh-display` 1,04 | `--ls-display` | 700 | `--c-text` | max. 18ch | H1 Startseite, H1 Profil (Klasse `.display`) |
| H1 | `--fs-h1` | 30 bis 56 px | `--lh-heading` | `--ls-heading` | 600 | `--c-text` | max. 24ch | Fachseiten, Kontakt, Einblicke, Rechtstexte, 404, Danke |
| H2 | `--fs-h2` | 28 bis 44 px | `--lh-heading` | `--ls-heading` | 600 | `--c-text` | max. 24ch in Section-Köpfen, 14ch in Randspalten | Abschnittsüberschriften |
| H3 | `--fs-h3` | 20 bis 24 px | `--lh-heading` | `-0.01em` | 600 | `--c-text` | | Register, Spalten, Steps, Kapitel-H2 im Profil |
| Standfirst | `--fs-standfirst` | 20 bis 26 px | 1,3 | `-0.01em` | 600 | `--c-text` | `--w-narrow` 44ch | Leitzeile Start, Ausgangsfrage Fachseiten |
| Lead | `--fs-lead` | 18 bis 22 px | 1,5 | 0 | 400 | `--c-text-2` | `--w-measure` 60ch | Einleitungstexte |
| Zahl | `--fs-zahl` | 24 bis 56 px | 1 | `-0.03em` | 600 | `--c-anthrazit` (nur Weiß, `--c-flaeche`) | | Ordnungszahlen Steps, Kennungen A, B, C |
| Body | `--fs-body` | 17 bis 18 px | `--lh-body` 1,6 | 0 | 400 | `--c-text`, Sekundär `--c-text-2` | `--w-text` 68ch | Fließtext |
| Small | `--fs-small` | 15 px | 1,55 | 0 | 400 oder 600 | `--c-text-2` | | Fakten-Band, Seitennavigation, Registerziffern |
| Caps | `--fs-xs` | 13 px | 1,4 | `--ls-caps` 0,08em, Versalien | 600 | `--c-text-2`, auf dunkel `--c-weiss-75` | | Eyebrow, `dt` in Spalten, Kapitelnummern, Dossier-Kopfzeile, Platzhalter-Label |

### 4.2 Regeln
- Alle Überschriften `text-wrap: balance`, Absätze `text-wrap: pretty` (progressiv, ohne Fallback-Bedarf).
- H2 und H3 `hyphens: auto`, H1 `hyphens: manual`. Lange Komposita in H1 erhalten im Quelltext ein weiches Trennzeichen: in `index.astro` `Immobilien&shy;portfolios`, in den Fachseiten-Props als Zeichen U+00AD innerhalb des Strings (`Portfolio­optimierung`, `Immobilien­management`, `Immobilien­bestände`). Die Trennung greift nur bei Bedarf. Prüfpunkt: 360 px und 200 Prozent Zoom auf Windows (Segoe UI) und macOS.
- Ziffern überall `font-variant-numeric: tabular-nums` (Register, Steps, Kapitel, Timeline, Tabellen, Datum in Einblicken).
- Fließtext bleibt 17 bis 18 px, Zeilenhöhe 1,6, maximal 68ch. Absätze kurz, Abstand statt Einzug.
- Links: Unterstreichung 1 px in `--c-mittelgrau`, `text-underline-offset: 0.2em`; Hover Unterstreichung `--c-text`. Textlinks mit Pfeil (`.textlink`) 600, Hover 2 px Unterstreichung, Pfeil bewegt sich nicht.
- Orange nie als Textfarbe, auch nicht für Ziffern oder Kennungen.
- `--c-anthrazit` ausschließlich in `.spalte__kennung`, `.steps li::before` und `.kapitel__kennung` (alle mindestens 24 px). Nirgends sonst.

## 5. Abstände, Raster und Basisregeln (global.css)

### 5.1 Vertikaler Rhythmus
| Ebene | Wert | Regel |
|---|---|---|
| Abschnitt (`.section`) | `padding-block: var(--section-y)` (64 bis 128 px) | Standard für jeden Abschnitt |
| Abschnitt kompakt (`.section--tight`) | `padding-block: var(--section-y-tight)` (40 bis 72 px) | Fakten-Band, Seitennavigation, Personenanker |
| Abschnitt mit Linie (`.section--linie`) | `padding-top: 0`, Container `border-top: var(--rule); padding-top: var(--section-y)` | Weiß auf Weiß, ersetzt den Flächenwechsel; kein doppelter Abstand, weil `padding-top` des Abschnitts auf 0 steht |
| Abschnittskopf zu Inhalt | `var(--s-7)` (48 px) | `.section-head`, `.abschnitt__kopf` |
| Zwischen Registerzeilen | `padding-block: var(--s-5)` (24 px) | `.register > li` |
| Zwischen Kapiteln (Profil, Mandate, Timeline) | `padding-block: var(--s-7)` | `.kapitel` |
| Hero Start | `padding-block: clamp(2.5rem, 6vw, 6rem) clamp(2.5rem, 5vw, 5rem)` | keine Linie unten, das Fakten-Band übernimmt |
| Hero Fachseite, Kontakt, Einblicke | `padding-block: clamp(2.5rem, 5vw, 4.5rem) clamp(2rem, 4vw, 3.5rem)` | Linie unten nur, wenn keine Seitennavigation folgt |
| Cta | `padding-block: clamp(4rem, 9vw, 8rem)` | |
| Footer | `margin-top: 0` | Der Cta oder das `.section`-Padding liefert den Abstand |

Regel: Abstände zwischen Elementen ausschließlich über `--s-*`. Keine Pixelwerte außer Linienstärken.

### 5.2 Zwölfspaltenraster
```css
.g { display: grid; grid-template-columns: repeat(var(--cols), minmax(0, 1fr)); column-gap: var(--col-gap); row-gap: var(--row-gap); }
.g > * { min-width: 0; }
.gc-1-4  { grid-column: 1 / span 4; }
.gc-1-5  { grid-column: 1 / span 5; }
.gc-1-6  { grid-column: 1 / span 6; }
.gc-1-7  { grid-column: 1 / span 7; }
.gc-1-8  { grid-column: 1 / span 8; }
.gc-1-3  { grid-column: 1 / span 3; }
.gc-3-10 { grid-column: 3 / span 8; }
.gc-4-12 { grid-column: 4 / -1; }
.gc-5-11 { grid-column: 5 / span 7; }
.gc-5-12 { grid-column: 5 / -1; }
.gc-7-12 { grid-column: 7 / -1; }
.gc-8-12 { grid-column: 8 / -1; }
.gc-9-12 { grid-column: 9 / -1; }
.gc-full { grid-column: 1 / -1; }
@media (max-width: 860px) { .g > [class*="gc-"] { grid-column: 1 / -1; } }
```
Der Bruchpunkt 860 px gilt für alle Raster der Seite (bisher gemischt 800, 860, 900). Zweiter Bruchpunkt 640 px nur für Ziffernspalten (Steps, Register).

### 5.3 Linien
```css
.rule-top { border-top: var(--rule); }
.rule-strong { border-top: var(--rule-strong); }
.section--linie { padding-top: 0; }
.section--linie > .container { border-top: var(--rule); padding-top: var(--section-y); }
```

### 5.4 Basisklassen und Änderungen an Bestandsregeln
```css
html { scroll-padding-top: calc(var(--header-h) + 1rem); }   /* Anker und Fokus nicht unter dem Sticky-Header */
h1, h2, h3, h4 { line-height: var(--lh-heading); letter-spacing: var(--ls-heading); }
h1 { font-size: var(--fs-h1); }
.display { font-size: var(--fs-display); line-height: var(--lh-display); letter-spacing: var(--ls-display); font-weight: 700; max-width: 18ch; }
.standfirst { font-size: var(--fs-standfirst); line-height: 1.3; font-weight: 600; letter-spacing: -0.01em; color: var(--c-text); max-width: var(--w-narrow); margin-bottom: var(--s-5); }
.lead { font-size: var(--fs-lead); line-height: 1.5; color: var(--c-text-2); max-width: var(--w-measure); }
p { text-wrap: pretty; }
.caps { font-size: var(--fs-xs); letter-spacing: var(--ls-caps); text-transform: uppercase; font-weight: 600; color: var(--c-text-2); }
.eyebrow::before { width: 1.25rem; }                          /* Balken verkuerzt */
.eyebrow--still::before { display: none; }                    /* Abschnitte mit Register-Nummerierung */
.section-head { max-width: none; margin-bottom: var(--s-7); }
.section-head h2 { max-width: 24ch; }
.section-head p { font-size: var(--fs-lead); color: var(--c-text-2); max-width: var(--w-measure); }
.bildunterschrift { font-size: var(--fs-xs); color: var(--c-text-3); border-top: var(--rule); padding-top: var(--s-2); margin-top: var(--s-3); }
a { text-decoration-thickness: 1px; text-underline-offset: 0.2em; transition: text-decoration-color var(--dur) var(--ease); }
.textlink { text-decoration-thickness: 1px; }
```
Entfallen: `.hero__fakten` (index.astro), Rahmen und Hintergrund von `.card` (siehe 6.15), grauer `th`-Hintergrund (siehe 6.14). Bestehende Überlaufschutzregeln (`overflow-wrap`, `hyphens`, `min-width: 0`) bleiben und werden um `.register li, .kapitel, .spalte, .portrait` ergänzt.

### 5.5 Hover- und Sticky-Guards (verbindlich für alle Komponenten)
```css
/* Hover nur bei Zeigegeraeten: alle :hover-Regeln der Seite stehen in diesem Block oder in gleichlautenden Bloecken der Komponenten */
@media (hover: hover) {
  a:hover { text-decoration-color: var(--c-text); }
  .textlink:hover { text-decoration-thickness: 2px; }
  .btn--primary:hover { background: var(--c-dunkel-2); }
  .btn--secondary:hover { border-color: var(--c-text); background: var(--c-flaeche); }
  .section--dunkel .btn--primary:hover { background: var(--c-flaeche-2); }
  .section--dunkel .btn--secondary:hover { border-color: #fff; background: rgba(255,255,255,.08); }
}
/* Sticky nur, wenn Breite und Hoehe es zulassen (200 Prozent Zoom auf 1440 px entspricht 720 px Breite und faellt heraus) */
@media (min-width: 861px) and (min-height: 641px) {
  .sticky-rand { position: sticky; top: calc(var(--header-h) + var(--s-6)); align-self: start; }
}
```
`.sticky-rand` ist die einzige Sticky-Klasse neben dem Header. Sie wird an `.abschnitt__kopf`, `.kapitel__kopf`, `.ergebnisse` und `.kontakt-direkt` gesetzt. Kein Element darf `position: sticky` direkt erhalten.

### 5.6 Fokus
Bestehender Ring bleibt: `:focus-visible { outline: 3px solid var(--c-fokus); outline-offset: 3px; }`. Ergänzung:
```css
.section--dunkel :focus-visible, .portrait--typo :focus-visible { outline-color: #fff; }
```
Skip-Link unverändert. Alle Bedienelemente mindestens 44 px hoch (Buttons, Navigationslinks, Seitennavigation, Linkregister, FAQ-Summary).

## 6. Komponenten

Für jede Komponente: Zweck, Markupänderung, CSS, Regeln. Texte bleiben wortgleich zum Bestand, sofern nicht ausdrücklich anders angegeben.

### 6.1 Header.astro
Zweck: ruhiger redaktioneller Kopf, Name im Vordergrund, Kennlinie als einziger Farbträger, keine Blur-Fläche.

Markup unverändert (details/summary, Toggle, no-js-Verhalten, Skript).

CSS-Änderungen (Komponentenstyle ersetzen):
```css
.site-header { position: sticky; top: 0; z-index: 50; background: #fff; border-bottom: var(--rule); backdrop-filter: none; }
.site-header__inner { min-height: var(--header-h); }
.brand__name { font-size: 1.25rem; font-weight: 700; letter-spacing: var(--ls-heading); }
.brand__claim { font-size: var(--fs-xs); color: var(--c-text-2); letter-spacing: var(--ls-caps); text-transform: uppercase; }
.site-nav__link { border-radius: 0; padding: 0.6rem 0.25rem; margin-inline: 0.5rem; text-decoration: underline; text-decoration-color: transparent; text-decoration-thickness: 2px; text-underline-offset: 0.45em; transition: text-decoration-color var(--dur) var(--ease); background: none; }
.site-nav__link[aria-current="page"] { box-shadow: none; text-decoration-color: var(--c-text); }
@media (hover: hover) { .site-nav__link:hover { background: none; text-decoration-color: var(--c-mittelgrau); } .submenu a:hover { background: var(--c-flaeche); } }
.submenu { min-width: 24rem; padding: var(--s-3); border-radius: 0 0 var(--radius) var(--radius); border-top: var(--rule-strong); box-shadow: var(--shadow-soft); }
.submenu a { border-radius: 0; }
.submenu a[aria-current="page"] { box-shadow: inset 2px 0 0 var(--c-text); }
.site-nav__item--cta .btn { padding: 0.6em 1.1em; }
```
Regeln: Aktiver Zustand in `--c-text`, nicht Orange (Zustandsanzeige braucht 3:1, Orange auf Weiß hat 2,09:1). HVM-Erkennung im Kopf trägt die Kennlinie (3 px, unverändert). Mobil (bis 1080 px) unverändert: Toggle, vertikale Liste, Untermenü mit 2 px Hellgrau-Linie links; im Untermenü `border-left` unverändert.

### 6.2 Hero Startseite (index.astro) und Hero.astro
Zweck: erster Bildschirm als Titelseite, große Typografie links, Portraet rechts, E-Mail sofort sichtbar.

Markup index.astro:
```astro
<section class="hero">
  <div class="container g hero__grid">
    <div class="hero__text gc-1-7">
      <span class="eyebrow">Timo Müller | Asset Management &amp; Portfoliooptimierung</span>
      <h1 class="display">Asset-Management-Beratung für Immobilien&shy;portfolios.</h1>
      <p class="standfirst">Wirtschaftlich denken. Klar priorisieren. Veränderungen umsetzen.</p>
      <p class="lead">…unverändert…</p>
      <div class="hero__actions">…Button und Textlink unverändert…</div>
      <p class="hero__mail">Direkt: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
    </div>
    <div class="hero__media gc-9-12">
      <Portrait nr={1} ratio="4/5" priority sizes="(max-width: 860px) 20rem, (max-width: 1300px) 30vw, 380px" />
    </div>
  </div>
</section>
```
Die bisherige `<aside class="hero__fakten">` verlässt den Hero und wird zum Fakten-Band (6.3). DOM-Reihenfolge: Text vor Bild, damit die H1 mobil auf dem ersten Bildschirm bleibt.

CSS:
```css
.hero { padding-block: clamp(2.5rem, 6vw, 6rem) clamp(2.5rem, 5vw, 5rem); border-bottom: 0; }
.hero__grid { align-items: start; }
.hero__actions { display: flex; flex-wrap: wrap; gap: var(--s-4) var(--s-5); align-items: center; margin-top: var(--s-6); }
.hero__mail { border-top: var(--rule); padding-top: var(--s-4); margin-top: var(--s-6); color: var(--c-text-2); font-size: var(--fs-small); }
.hero__mail a { font-weight: 600; color: var(--c-text); }
@media (max-width: 860px) { .hero__media { max-width: 20rem; } }
```

Hero.astro (Kontakt, Einblicke, Rechtstexte, Danke, 404): `.hero-frage` erhält zusätzlich die Klasse `standfirst` (Farbe `--c-text` statt Grau), H1 in `--fs-h1` mit `max-width: 24ch`, Padding `clamp(2.5rem, 5vw, 4.5rem) clamp(2rem, 4vw, 3.5rem)`, `border-bottom: var(--rule)`. Neuer optionaler Prop `mail?: boolean`, der unter dem Lead die E-Mail als `.hero__mail` ausgibt (Kontaktseite).

### 6.3 Fakten-Band (neu, index.astro) und Register (neues Listenmuster, global.css)

Fakten-Band, Zweck: sachlicher Vertrauensbereich ohne Kasten, drei Aussagen als ruhige Dreispalte direkt unter dem Hero. Inhalte wortgleich aus dem bisherigen `hero__fakten` (Eigentümerperspektive, Unternehmerische Verantwortung, Operatives Verständnis).
```astro
<section class="section section--tight fakten-band" aria-labelledby="kurzprofil-h">
  <div class="container">
    <h2 id="kurzprofil-h" class="visually-hidden">Kurzprofil</h2>
    <ul class="fakten g" role="list">
      <li class="gc-1-4"><strong>Eigentümerperspektive</strong> Ich halte selbst Immobilien und entscheide über Investitionen mit eigenem Kapital.</li>
      <li class="gc-5-8"><strong>Unternehmerische Verantwortung</strong> Vorstand der Müller Holding AG und Geschäftsführer mehrerer Unternehmen, darunter die Hausverwaltung Müller GmbH.</li>
      <li class="gc-9-12"><strong>Operatives Verständnis</strong> Verwaltungspraxis und ein Netzwerk aus Schreinerei, Fenster- und Elementebau sowie Heizung und Sanitär.</li>
    </ul>
    <p class="fakten__link"><a class="textlink small" href="/profil/">Zum Profil</a></p>
  </div>
</section>
```
Zusätzliche Utility `.gc-5-8 { grid-column: 5 / span 4; }` in 5.2 ergänzen. Die Überschrift ist visuell verborgen, damit die Überschriftenhierarchie (H1, dann H2) erhalten bleibt und das Band als Abschnitt benannt ist.
```css
.fakten-band > .container { border-top: var(--rule); }
.fakten { list-style: none; margin: 0; padding: var(--s-6) 0 0; }
.fakten > li { border-top: var(--rule-strong); padding-top: var(--s-4); margin: 0; font-size: var(--fs-small); color: var(--c-text-2); }
.fakten strong { display: block; color: var(--c-text); font-size: 1.0625rem; margin-bottom: var(--s-2); }
.fakten__link { margin: var(--s-5) 0 0; text-align: right; }
```

Register, Zweck: Ersatz für Kartenraster bei Aufzählungen mit Titel und Text (Ausgangslagen, Situationen, KI-Felder, Entscheidungsunterlagen, Leistungen, Einblicke-Übersicht). Immer als `<ol class="register" role="list">`; `role="list"` sichert die Listensemantik, weil Safari sie bei `list-style: none` sonst verwirft.
```css
.register { list-style: none; counter-reset: reg; margin: 0; padding: 0; border-top: var(--rule); }
.register > li { counter-increment: reg; display: grid; grid-template-columns: var(--num-w) minmax(0, 1fr); column-gap: var(--s-4); padding-block: var(--s-5); border-bottom: var(--rule); margin: 0; min-width: 0; }
.register > li::before {
  content: counter(reg, decimal-leading-zero);           /* Fallback fuer Browser ohne Alternativtext-Syntax */
  content: counter(reg, decimal-leading-zero) / "";      /* Screenreader lesen die Ziffer nicht zusaetzlich zur Listenposition */
  font-size: var(--fs-small); font-weight: 600; font-variant-numeric: tabular-nums; color: var(--c-text-2); padding-top: 0.3em;
}
.register h3 { font-size: var(--fs-h3); margin-bottom: var(--s-2); }
.register p { color: var(--c-text-2); max-width: 62ch; margin: 0; }
@media (min-width: 861px) {
  .register--2 { display: grid; grid-template-columns: 1fr 1fr; column-gap: var(--col-gap); }   /* Zeilenlinien liegen durch gleiche Zeilenhoehe des Grids buendig */
  .register--2 > li:nth-child(odd) { padding-right: var(--col-gap); }
  .register--2 > li:last-child:nth-child(odd) { grid-column: 1 / -1; padding-right: 0; }   /* Waisenregel: fuenfter Eintrag ueber volle Breite */
}
@media (max-width: 640px) { .register > li { grid-template-columns: 2.25rem minmax(0, 1fr); } }
```
Die Ziffern sind Gliederung, keine Rangfolge. Reihenfolge der Inhalte entspricht dem Masterprompt.

### 6.4 Abschnitt mit Randspalte (neues Muster, global.css)
Zweck: Magazin-Gliederung, Eyebrow, H2 und Einleitung links am Rand, Inhalt rechts. Ersetzt `.section-head` in den Abschnitten Ausgangslagen und KI (Startseite), Passende Situationen (Fachseiten) und Einblicke-Übersicht.
```astro
<div class="abschnitt">
  <div class="abschnitt__kopf sticky-rand">
    <span class="eyebrow eyebrow--still">Ausgangslagen</span>
    <h2>…</h2>
    <p>…</p>
  </div>
  <div class="abschnitt__inhalt">
    <ol class="register" role="list">…</ol>
  </div>
</div>
```
```css
.abschnitt { display: grid; grid-template-columns: repeat(var(--cols), minmax(0, 1fr)); column-gap: var(--col-gap); row-gap: var(--row-gap); }
.abschnitt__kopf { grid-column: 1 / span 4; min-width: 0; }
.abschnitt__kopf h2 { max-width: 14ch; }
.abschnitt__kopf p { color: var(--c-text-2); }
.abschnitt__inhalt { grid-column: 5 / -1; min-width: 0; }
@media (max-width: 860px) { .abschnitt__kopf, .abschnitt__inhalt { grid-column: 1 / -1; } .abschnitt__kopf h2 { max-width: 24ch; } }
```
Der Eyebrow trägt hier `eyebrow--still` (kein Orange-Balken), weil das Register die Gliederung bereits sichtbar macht.

### 6.5 Spalten für Mandatsformen (index.astro)
Zweck: drei gleichwertige Angebote als typografische Spalten mit Kennung statt Karten mit Rahmen. Das Array `angebote` erhält ein Feld `kenn: 'A' | 'B' | 'C'`; die Kennungen entsprechen den Mandatstiteln der Fachseite.
```astro
<div class="spalten">
  {angebote.map((a) => (
    <article class="spalte">
      <span class="spalte__kennung" aria-hidden="true">{a.kenn}</span>
      <h3>{a.titel}</h3>
      <p>{a.nutzen}</p>
      <dl class="spalte__dl"><dt>Arbeitsergebnis</dt><dd>{a.ergebnis}</dd></dl>
      <a class="textlink" href={a.href}>Mehr erfahren</a>
    </article>
  ))}
</div>
```
```css
.spalten { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr)); column-gap: var(--col-gap); row-gap: var(--s-7); }
.spalte { border-top: var(--rule-strong); padding-top: var(--s-4); display: flex; flex-direction: column; gap: var(--s-3); min-width: 0; }
.spalte__kennung { display: block; font-size: var(--fs-zahl); font-weight: 600; line-height: 1; letter-spacing: -0.03em; color: var(--c-anthrazit); margin-bottom: var(--s-3); }
.spalte p { color: var(--c-text-2); margin: 0; }
.spalte__dl { margin: var(--s-2) 0 0; border-top: var(--rule); padding-top: var(--s-3); }
.spalte__dl dt { font-size: var(--fs-xs); text-transform: uppercase; letter-spacing: var(--ls-caps); color: var(--c-text-2); font-weight: 600; margin-bottom: var(--s-1); }
.spalte__dl dd { margin: 0; color: var(--c-text-2); }
.spalte .textlink { margin-top: auto; }
```
Der Abschnitt Beratung liegt auf `--c-flaeche`; Anthrazit dort 3,29:1, zulässig nur wegen der Mindestgröße 24 px. Der Zusatz "Der Schwerpunkt liegt auf Asset Management …" bleibt als `.section-foot` unter den Spalten.

### 6.6 Steps (global.css)
Zweck: vier Schritte als Leiste mit großen Ordnungszahlen, erster Schritt orange, mobil mit linker Zahlenspalte.
```css
.steps { list-style: none; padding: 0; margin: 0; counter-reset: schritt; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr)); gap: var(--s-6) var(--col-gap); }
.steps li { counter-increment: schritt; border-top: var(--rule); padding-top: var(--s-5); margin: 0; min-width: 0; }
.steps li:first-child { border-top: var(--rule-akzent); }
.steps li::before {
  content: counter(schritt, decimal-leading-zero);
  content: counter(schritt, decimal-leading-zero) / "";
  display: block; font-size: var(--fs-zahl); font-weight: 600; line-height: 1; letter-spacing: -0.03em; color: var(--c-anthrazit); font-variant-numeric: tabular-nums; margin-bottom: var(--s-4);
}
.steps h3 { font-size: 1.2rem; margin-bottom: var(--s-2); }
.steps p { color: var(--c-text-2); font-size: var(--fs-body); margin: 0; }
@media (max-width: 640px) {
  .steps { gap: 0; }
  .steps li { display: grid; grid-template-columns: var(--num-w) minmax(0, 1fr); column-gap: var(--s-4); padding-block: var(--s-5); }
  .steps li::before { font-size: 1.5rem; padding-top: 0.15em; margin: 0; grid-row: 1 / 3; }
  .steps h3, .steps p { grid-column: 2; }
}
```
Die Ziffer bleibt auch mobil bei 1,5 rem (24 px), damit Anthrazit als große Schrift zulässig bleibt. `<ol class="steps" role="list">`.

### 6.7 Dossier "So würde ich vorgehen" (index.astro)
Zweck: Methode statt Kundenfall, als zweiteilige Seite mit Kopfzeile, die den Schema-Charakter sichtbar macht. Abschnitt auf `--c-flaeche`, kein `.card` mehr.
```astro
<div class="dossier g">
  <div class="dossier__kopf gc-full" aria-hidden="true">
    <span class="caps">Methode, schematisch</span>
    <span class="caps">Keine Ergebniszusage, kein Kundenfall</span>
  </div>
  <div class="dossier__lage gc-1-6">
    <h3>Ausgangslage</h3><p>…</p>
    <h3>Vorgehen in den ersten Wochen</h3><ul class="checklist">…</ul>
  </div>
  <div class="dossier__ergebnis gc-8-12">
    <h3>Arbeitsergebnis</h3><ul class="checklist">…</ul>
  </div>
  <p class="dossier__hinweis bildunterschrift gc-1-6">Schematische Darstellung des Vorgehens. Keine Ergebniszusage, keine Beschreibung eines konkreten Kundenfalls.</p>
</div>
```
Die Kopfzeile ist `aria-hidden`, weil der Hinweistext darunter denselben Sachverhalt vollständig für Screenreader transportiert; so wird nichts doppelt gelesen.
```css
.dossier__kopf { display: flex; justify-content: space-between; flex-wrap: wrap; gap: var(--s-2) var(--s-5); border-top: var(--rule-strong); border-bottom: var(--rule); padding-block: var(--s-3); }
.dossier__lage h3 + p, .dossier__lage ul { margin-bottom: var(--s-5); }
.dossier__ergebnis { background: #fff; border-top: var(--rule-strong); padding: var(--s-6); align-self: start; }
.dossier__hinweis { margin: 0; }
```

### 6.8 Cta.astro
Zweck: dunkler Schlussakkord mit großer Frage, asymmetrisch, eine orange Linie als einziger Akzent. Texte unverändert.
Markup: Textblock erhält `class="cta__text gc-1-7"`, Aktionen `class="cta__actions gc-9-12"`, `.cta__inner` wird `.g`.
```css
.cta { padding-block: clamp(4rem, 9vw, 8rem); }
.cta__inner { align-items: end; }
.cta__text::before { content: ""; display: block; width: 3rem; height: 3px; background: var(--c-orange); margin-bottom: var(--s-5); }
.cta h2 { font-size: var(--fs-h2); letter-spacing: var(--ls-heading); max-width: 18ch; }
.cta .lead { color: var(--c-weiss-75); }
.cta__actions { display: flex; flex-direction: column; gap: var(--s-4); align-items: flex-start; border-top: var(--rule-dark); padding-top: var(--s-5); }
.cta__mail { margin: 0; color: var(--c-weiss-60); }
.cta__mail a { color: #fff; font-size: var(--fs-lead); font-weight: 600; word-break: break-all; }
```
Der bisherige `rgba(255,255,255,.85)`-Wert wird durch die Tokens ersetzt.

### 6.9 Footer.astro
Zweck: Absender klar, HVM als dezenter Betreiber, Aufbau im Zwölfspaltenraster, Kennlinie unten bleibt.
Markup: die vier Blöcke erhalten `class="footer-brand"`, `class="footer-nav-1"`, `class="footer-nav-2"`, `class="footer-operator"`; `.footer-grid` wird `.g`. Inhalte, Pflichtangaben, Logo-Einsatz unverändert.
```css
.site-footer { background: #fff; border-top: var(--rule-strong); margin-top: 0; font-size: var(--fs-small); }
.footer-grid { padding-block: var(--s-8) var(--s-7); row-gap: var(--s-6); }
.footer-brand { grid-column: 1 / span 4; }
.footer-nav-1 { grid-column: 5 / span 3; }
.footer-nav-2 { grid-column: 8 / span 2; }
.footer-operator { grid-column: 10 / -1; }
.footer-name { font-size: 1.5rem; font-weight: 700; letter-spacing: var(--ls-heading); margin-bottom: var(--s-1); }
.footer-claim { letter-spacing: var(--ls-caps); }
.footer-head { letter-spacing: var(--ls-caps); }
.footer-logo img { width: 96px; height: auto; }
.footer-bottom { border-top: var(--rule); padding-block: var(--s-5); color: var(--c-text-2); }
@media (max-width: 860px) { .footer-grid > * { grid-column: 1 / -1; } }
@media (min-width: 600px) and (max-width: 860px) { .footer-nav-1, .footer-nav-2 { grid-column: span 6; } }
@media (hover: hover) { .site-footer a:hover { text-decoration: underline; } }
```

### 6.10 Kapitel (neues Muster, global.css) für Profil, Mandate und Timeline
Zweck: Kapitelfolge mit seitlicher Überschrift, Text rechts, Haarlinie oben. Ein Muster für drei Einsätze: die fünf Profilkapitel, die drei Mandatsformen auf `/asset-management-beratung/`, die Timeline-Stationen.
```astro
<section class="kapitel" id={id}>
  <div class="kapitel__kopf sticky-rand">
    <span class="kapitel__nr" aria-hidden="true">01</span>       <!-- oder .kapitel__kennung mit A, B, C -->
    <h2>Verantwortung</h2>
  </div>
  <div class="kapitel__text">…</div>
</section>
```
```css
.kapitel { display: grid; grid-template-columns: repeat(var(--cols), minmax(0, 1fr)); column-gap: var(--col-gap); padding-block: var(--s-7); border-top: var(--rule); }
.kapitel:last-child { border-bottom: var(--rule); }
.kapitel__kopf { grid-column: 1 / span 4; min-width: 0; }
.kapitel__nr { display: block; font-size: var(--fs-xs); letter-spacing: var(--ls-caps); color: var(--c-text-3); font-variant-numeric: tabular-nums; margin-bottom: var(--s-2); }
.kapitel__kennung { display: block; font-size: var(--fs-zahl); font-weight: 600; line-height: 1; letter-spacing: -0.03em; color: var(--c-anthrazit); margin-bottom: var(--s-3); }
.kapitel__kopf h2, .kapitel__kopf h3 { font-size: var(--fs-h3); margin: 0; }
.kapitel__text { grid-column: 5 / span 7; max-width: var(--w-text); min-width: 0; }
.kapitel__text > :last-child { margin-bottom: 0; }
@media (max-width: 860px) { .kapitel__kopf, .kapitel__text { grid-column: 1 / -1; } .kapitel__kopf { margin-bottom: var(--s-4); } }
```
Die Nummern und Kennungen sind `aria-hidden` und stehen als echter Text (kein CSS-Counter), damit sie in Astro aus den Daten kommen und die Screenreader-Ausgabe eindeutig bleibt.

Profil (profil.astro): Der `.prose`-Block mit fünf H2 wird in fünf `.kapitel` überführt, Nummern 01 bis 05, Inhalte wortgleich. Zwischen Kapitel 03 (Warum ich Strategie und Betrieb verbinde) und Kapitel 04 (Finanzierung, Netzwerk und KI):
```astro
<div class="g kapitel-bild"><div class="gc-5-12"><Portrait nr={3} ratio="3/2" nurMitBild sizes="(max-width: 860px) 100vw, (max-width: 1300px) 64vw, 800px" /></div></div>
```
Ohne Datei rendert dieser Block nichts (Prop `nurMitBild`, siehe 7.3). `.kapitel-bild { padding-block: var(--s-6); border-top: var(--rule); }` wird nur mitgerendert, wenn `hatPortrait(3)` wahr ist (Bedingung im Astro-Template, damit auch die Linie entfällt).

Mandate (asset-management-beratung.astro): `.mandate` wird eine Folge von `.kapitel` mit `.kapitel__kennung` A, B, C, dem Titel als `<h3>` (die Titel verlieren das Präfix "A. ", die Kennung übernimmt es visuell; für Screenreader steht die Kennung nicht im Titel, das ist beabsichtigt, weil die Reihenfolge keine Rangfolge ist), ids `portfolio-check`, `umsetzung`, `sparring` bleiben. Die `dl.dl-grid` mit vier Feldern steht in `.kapitel__text`, Spaltenbreite `10rem 1fr`, unter 600 px einspaltig (Bestand).

Timeline.astro: Die Liste wird `<ol class="timeline" role="list">`, jede Station `<li class="kapitel">` mit `.tl-zeit` in `.kapitel__kopf` (statt Nummer) und Titel plus Text in `.kapitel__text`. Vertikale Linie und Kreise entfallen.
```css
.timeline { list-style: none; padding: 0; margin: 0; border-left: 0; }
.timeline li { margin: 0; }
.timeline .tl-zeit { display: block; font-size: var(--fs-small); color: var(--c-text-2); font-weight: 600; font-variant-numeric: tabular-nums; }
.timeline h3 { font-size: var(--fs-h3); margin: 0 0 var(--s-2); }
.timeline p { color: var(--c-text-2); }
```
Freigabelogik unverändert: ohne `freigabe: true` wird nichts gerendert.

### 6.11 Fachseite.astro, Seitennav.astro (neu), Ergebnisse, Verwandte Themen, Personenanker
Hero: `.hero .container` wird `.g`. H1 (`--fs-h1`, `max-width: 24ch`) und Ausgangsfrage (`<p class="standfirst hero-frage">`) in `.gc-1-8`; Intro als `<p class="hero__intro gc-9-12">` in `--fs-body` und `--c-text-2`, `align-self: end`; Buttonzeile `.hero-actions gc-full`. Padding `clamp(2.5rem, 5vw, 4.5rem) clamp(2rem, 4vw, 3.5rem)`, `border-bottom: 0` (die Seitennavigation trägt die Linien). Mobil: Intro folgt der Frage, dann die Buttons.

Seitennav.astro (neu), direkt unter dem Hero:
```astro
---
interface Props { items: { label: string; href: string }[] }
const { items } = Astro.props;
---
<nav class="seitennav" aria-label="Auf dieser Seite">
  <div class="container">
    <ol role="list">{items.map((i) => <li><a href={i.href}>{i.label}</a></li>)}</ol>
  </div>
</nav>
```
Aufruf in Fachseite.astro mit den fünf Einträgen: Passende Situationen `#situationen`, Leistungsumfang `#leistung`, Vorgehen `#vorgehen`, Abgrenzung `#abgrenzung`, Fragen und Antworten `#fragen`. Die Sections erhalten diese ids; `Faq.astro` erhält Prop `id` (Standard `fragen`). Bestehende Deep-Links `#leistung`, `#portfolio-check`, `#sparring` bleiben.
```css
.seitennav { border-top: var(--rule); border-bottom: var(--rule); }
.seitennav ol { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0 var(--s-6); font-size: var(--fs-small); font-weight: 600; }
.seitennav li { margin: 0; }
.seitennav a { display: inline-flex; align-items: center; min-height: 44px; text-decoration: none; }
@media (hover: hover) { .seitennav a:hover { text-decoration: underline; text-decoration-color: var(--c-text); } }
```
Reiner Text zwischen zwei Haarlinien, keine Pillen, kein Hintergrund.

Passende Situationen: `.abschnitt` (6.4) mit `<ol class="register register--2" role="list">` statt drei Karten.

Leistungsumfang (auf `--c-flaeche`): `.zwei-spalten` wird `.g`; Leistungen als `<ol class="register" role="list">` in `.gc-1-7`; Aside `.ergebnisse` in `.gc-9-12`:
```css
.ergebnisse { background: transparent; border: 0; border-top: var(--rule-strong); padding: var(--s-4) 0 0; }   /* plus Klasse sticky-rand */
.ergebnisse .checklist li::before { background: var(--c-orange); }   /* Bestand, einzige Orange-Geste dieses Abschnitts */
```

Vorgehen: Steps wie Startseite, `.section-head` beibehalten.

Abgrenzung und Verwandte Themen: Abschnitt auf Weiß mit `.section--linie`, `.g`; Abgrenzung in `.gc-1-7`, Verwandte Themen in `.gc-9-12` als Linkregister:
```css
.verwandt { list-style: none; padding: 0; margin: 0; border-top: var(--rule-strong); }
.verwandt li { border-bottom: var(--rule); margin: 0; }
.verwandt a { display: flex; justify-content: space-between; align-items: center; gap: var(--s-4); min-height: 44px; padding-block: var(--s-3); text-decoration: none; font-weight: 600; }
.verwandt a::after { content: "\2192"; font-weight: 400; color: var(--c-text-3); }
@media (hover: hover) { .verwandt a:hover { text-decoration: underline; } }
```

Personenanker (neu, vor `<Cta />` auf jeder Fachseite): bringt die Person auf jede Fachseite, ohne einen Satz von Start oder Profil zu wiederholen. Inhalt ausschließlich Name, Claim aus `SITE.claim` und Link.
```astro
<section class="section section--tight personenanker" aria-label="Zur Person">
  <div class="container personenanker__grid">
    <Portrait nr={2} ratio="1/1" variant="hell" sizes="8rem" />
    <div>
      <p class="personenanker__name">Timo Müller</p>
      <p class="caps">{SITE.claim}</p>
      <a class="textlink" href="/profil/">Zum Profil</a>
    </div>
  </div>
</section>
```
```css
.personenanker > .container { border-top: var(--rule); padding-top: var(--section-y-tight); }
.personenanker__grid { display: grid; grid-template-columns: 8rem minmax(0, 1fr); gap: var(--col-gap); align-items: center; }
.personenanker__name { font-size: var(--fs-h3); font-weight: 600; margin: 0 0 var(--s-1); }
.personenanker .caps { margin-bottom: var(--s-3); }
@media (max-width: 520px) { .personenanker__grid { grid-template-columns: 6rem minmax(0, 1fr); } }
```

### 6.12 Faq.astro
Prop `id` (Standard `fragen`) auf der `<section>`. Marker als CSS-Kreuz aus zwei `currentColor`-Linien, geöffnet um 45 Grad gedreht.
```css
.faq { max-width: none; }
.faq details { border-top: var(--rule); }
.faq details:last-child { border-bottom: var(--rule); }
.faq summary { display: flex; justify-content: space-between; gap: var(--s-4); align-items: flex-start; padding: var(--s-5) 0; font-size: 1.125rem; font-weight: 600; min-height: 44px; cursor: pointer; list-style: none; }
.faq summary::after {
  content: ""; flex: none; width: 0.875rem; height: 0.875rem; margin-top: 0.4em; color: var(--c-text-2);
  background: linear-gradient(currentColor, currentColor) center / 100% 2px no-repeat, linear-gradient(currentColor, currentColor) center / 2px 100% no-repeat;
  transition: transform var(--dur-slow) var(--ease);
}
.faq details[open] summary::after { transform: rotate(45deg); }
.faq .faq-body { padding-bottom: var(--s-6); color: var(--c-text-2); max-width: var(--w-text); }
```
Bei `prefers-reduced-motion: reduce` ist `--dur-slow` 0 ms, die Drehung erfolgt sofort. Keine Höhenanimation.

### 6.13 Kontakt (kontakt.astro, ContactForm.astro)
kontakt.astro: Hero als Bestand, zusätzlich `<p class="hero__mail">Direkt: <a href="mailto:…">timo@muellerhv.de</a></p>` unter dem Lead, damit der Direktkontakt mobil vor dem Formular sichtbar ist (kein `order`). `.kontakt-grid` wird `.g`: Formularblock `.gc-1-7`, Aside `.kontakt-direkt gc-9-12 sticky-rand`.
```astro
<aside class="kontakt-direkt gc-9-12 sticky-rand">
  <Portrait nr={2} ratio="1/1" variant="hell" sizes="12rem" />
  <h2 class="h3">Direkt erreichen</h2>
  <p><a class="mail-gross" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
  <p class="small">…unverändert…</p>
  <hr />
  <h3 class="h4">Was hilft für eine erste Einschätzung</h3>
  <ul class="checklist small">…unverändert…</ul>
  <hr />
  <p class="small">Betreiber dieser Seite: …</p>
</aside>
```
```css
.kontakt-direkt { background: transparent; border: 0; border-top: var(--rule-strong); padding: var(--s-5) 0 0; }
.kontakt-direkt .portrait { max-width: 12rem; margin-bottom: var(--s-5); }
.mail-gross { font-size: var(--fs-lead); font-weight: 600; word-break: break-all; }
```
ContactForm.astro: Die Felder werden in zwei `<fieldset>` gruppiert. Fieldset 1 `<legend>Ihre Angaben</legend>`: Name, E-Mail, Unternehmen, Rolle, Telefon, Bestandsgröße. Fieldset 2 `<legend>Ihr Anliegen</legend>`: Textarea. Honeypot, Zeitstempel, Datenschutzhinweis, Button, Status und Fallback bleiben außerhalb der Fieldsets. Validierung, Honeypot, fetch-Logik und ids unverändert.
```css
fieldset { border: 0; padding: 0; margin: 0 0 var(--s-6); min-width: 0; }
legend { display: block; width: 100%; padding: 0 0 var(--s-3); margin-bottom: var(--s-5); border-bottom: var(--rule); font-weight: 600; font-size: var(--fs-h3); }
.form-field input, .form-field select, .form-field textarea { border-radius: var(--radius); }
.form-status { border-radius: 0; border: 0; border-left: var(--rule-strong); background: var(--c-flaeche); }
.form-status--fehler { border-left-color: var(--c-fehler); }
.form-status--erfolg { border-left-color: var(--c-erfolg); }
```
Die `.form-grid` bleibt innerhalb des ersten Fieldsets.

### 6.14 Tabellen und Definitionslisten (global.css)
Zweck: Zahlenwerke mit Kopflinie statt grauer Fläche; jede Modelltabelle trägt eine Caption mit dem Zusatz "Schematische Modellannahme, kein Projektergebnis" (Masterprompt Abschnitt 8). Aktuell enthält keine Seite eine Tabelle; die Regel gilt für künftige CAPEX- und OPEX-Beispiele auf `/portfoliooptimierung/` und für Rechtstexte.
```css
table { border-collapse: collapse; width: 100%; font-size: var(--fs-small); font-variant-numeric: tabular-nums; }
caption { caption-side: top; text-align: left; font-size: var(--fs-xs); letter-spacing: var(--ls-caps); text-transform: uppercase; color: var(--c-text-2); font-weight: 600; padding-bottom: var(--s-3); }
thead th { background: none; border-bottom: var(--rule-strong); font-size: var(--fs-xs); letter-spacing: 0.06em; text-transform: uppercase; color: var(--c-text-2); padding: var(--s-2) var(--s-3); vertical-align: bottom; }
th, td { text-align: left; padding: var(--s-3); border-bottom: var(--rule); vertical-align: top; }
th.num, td.num { text-align: right; }
tfoot td { border-top: var(--rule-strong); border-bottom: 0; font-weight: 600; }
.dl-grid { border-top: var(--rule); }
.dl-grid dt, .dl-grid dd { padding-block: var(--s-3); border-bottom: var(--rule); margin: 0; }
.dl-grid dt { font-size: var(--fs-xs); letter-spacing: var(--ls-caps); text-transform: uppercase; color: var(--c-text-2); font-weight: 600; }
@media (max-width: 520px) { .dl-grid dt { border-bottom: 0; padding-bottom: 0; } }
```
Tabellen bleiben im `.table-wrap` mit `overflow-x: auto`. Die Caption ist Pflicht, Zahlen in Modelltabellen sind Annahmen, nie Ergebnisse.

### 6.15 Card (Bestand, begrenzt)
`.card` bleibt in global.css für Einblicke-Teaser, Danke und 404, verliert aber Rahmen und Fläche:
```css
.card { background: transparent; border: 0; border-top: var(--rule); border-radius: 0; padding: var(--s-5) 0 0; }
.card--flaeche { background: var(--c-flaeche); border-top-color: transparent; padding: var(--s-5); }
```
Regel im Design-System: höchstens ein Kartenraster je Seite; Aufzählungen mit Titel und Text sind Register. Nach dem Umbau nutzt keine Seite mehr `.card--flaeche` außer als Reserve.

### 6.16 Weitere Seiten
- `asset-management-beratung.astro`: Hero wie Fachseite (Grid 8/4, Standfirst); "Fragen, die in der Beratung bearbeitet werden" bleibt Checkliste in `.gc-1-8`; Mandate als Kapitel (6.10); "Entscheidungsunterlagen, die entstehen" als `.abschnitt` mit `register--2` (fünf Einträge, Waisenregel); Abgrenzung auf Weiß mit `.section--linie`; Faq mit `id="fragen"`; Personenanker vor dem Cta; Seitennav mit den Ankern `#fragen-beratung` (Fragen, die bearbeitet werden), `#mandate`, `#unterlagen`, `#abgrenzung`, `#fragen`.
- `einblicke/index.astro`: Übersicht als `.abschnitt`; Beitragsliste `<ol class="register register--einblicke" role="list">` mit Datum statt Ziffer: `.register--einblicke > li::before { display: none; }`, `grid-template-columns: 9rem minmax(0, 1fr)`, Datum als `<time class="small">` in Spalte 1, Titel (H3 mit Link), Kernaussage und Textlink in Spalte 2. Zustand "Beiträge in Vorbereitung" bleibt `.prose` in `.gc-1-8`.
- `einblicke/[slug].astro`: Kopf im Fachseiten-Hero-Muster (Eyebrow, H1 `--fs-h1`, Meta), Artikeltext `.gc-3-10` mit `--w-text`, Quellen als `.register`-freie Liste mit Haarlinie oben. Das `.note` bleibt als Hinweiskasten (Bestand).
- `404.astro`, `danke.astro`: `.prose` in `.gc-1-8`, Checkliste bleibt; keine Karten.
- `impressum.astro`, `datenschutz.astro`: `.prose` unverändert, `.note` unverändert, `dl` und Tabellen nach 6.14.

## 7. Portrait.astro (neu)

Zweck: ein Bauteil für alle Portraetplätze. Festes Seitenverhältnis (kein Layoutsprung), automatischer Wechsel vom typografischen Platzhalter zum echten Foto, sobald eine Datei in `src/assets/portraits/` liegt. Kein Gesicht, keine Silhouette, kein Stockfoto im Platzhalter.

### 7.1 Dateien
| Datei | Aufgabe |
|---|---|
| `src/lib/portraits.ts` | Erkennung per `import.meta.glob`, Hilfsfunktionen `portraitBild(nr)` und `hatPortrait(nr)` |
| `src/data/portraits.ts` | Freigegebene Angaben je Datei: `alt`, optional `caption`, `focus` (object-position). Nur Angaben aus der Faktenliste. |
| `src/components/Portrait.astro` | Rendering (Bild oder Platzhalter) |
| `src/assets/portraits/portrait-1.jpg` bis `portrait-3.jpg` | echte Fotos, Dateinamen exakt, jpg, jpeg oder png |

### 7.2 src/lib/portraits.ts
```ts
import type { ImageMetadata } from 'astro';

export type PortraitNr = 1 | 2 | 3;

/* Wird zur Buildzeit ausgewertet. Ohne Dateien ist das Objekt leer, der Build laeuft durch. */
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

/* Fuer den Build-Hinweis in scripts/test-build.mjs und fuer Warnungen bei falsch benannten Dateien. */
export const portraitDateien = Object.keys(dateien);
```

### 7.3 src/data/portraits.ts
```ts
import type { PortraitNr } from '../lib/portraits';

/* Alt-Texte beschreiben nur, was zu sehen ist. Keine Orte, Objekte, Funktionen oder Jahre ohne Freigabe (docs/FAKTENLISTE.md Nr. 15). */
export const PORTRAITS: Record<PortraitNr, { alt: string; caption?: string; focus: string }> = {
  1: { alt: 'Timo Müller', focus: '50% 30%' },
  2: { alt: 'Timo Müller', focus: '50% 30%' },   /* focus fuer den 1:1-Ausschnitt je Datei anpassen und visuell abnehmen */
  3: { alt: 'Timo Müller' },                     /* caption erst mit freigegebenem Text eintragen */
} as const;
```

### 7.4 Props
| Prop | Typ | Standard | Bedeutung |
|---|---|---|---|
| `nr` | `1 \| 2 \| 3` | Pflicht | Slot, entspricht dem Dateinamen `portrait-{nr}` |
| `ratio` | `'4/5' \| '3/2' \| '1/1'` | `'4/5'` | Seitenverhältnis des Rahmens, setzt `--ar` |
| `variant` | `'dunkel' \| 'hell'` | `'dunkel'` | Platzhalter-Farbwelt; `hell` für kleine 1:1-Plätze auf Weiß (Kontakt, Personenanker) |
| `priority` | `boolean` | `false` | `loading="eager"`, `fetchpriority="high"`, `decoding="sync"` für LCP-Kandidaten (Hero Start, Hero Profil) |
| `sizes` | `string` | `'(max-width: 860px) 100vw, 40vw'` | `sizes`-Attribut, je Slot laut 7.7 setzen |
| `widths` | `number[]` | `[480, 800, 1200]` | Ausgabebreiten für `srcset` |
| `nurMitBild` | `boolean` | `false` | Wenn wahr und keine Datei vorhanden: Komponente rendert nichts (Profil-Slot 3) |
| `class` | `string` | | zusätzliche Klassen (Rasterzuweisung) |
| `alt`, `caption`, `focus` | `string` | aus `PORTRAITS[nr]` | Überschreibung nur in Ausnahmefällen, sonst zentral pflegen |

### 7.5 Komponente
```astro
---
import { Image } from 'astro:assets';
import { portraitBild, type PortraitNr } from '../lib/portraits';
import { PORTRAITS } from '../data/portraits';
import { SITE } from '../data/site';

interface Props {
  nr: PortraitNr; ratio?: '4/5' | '3/2' | '1/1'; variant?: 'dunkel' | 'hell'; priority?: boolean;
  sizes?: string; widths?: number[]; nurMitBild?: boolean; class?: string; alt?: string; caption?: string; focus?: string;
}
const {
  nr, ratio = '4/5', variant = 'dunkel', priority = false,
  sizes = '(max-width: 860px) 100vw, 40vw', widths = [480, 800, 1200], nurMitBild = false, class: cls,
} = Astro.props;
const meta = PORTRAITS[nr];
const alt = Astro.props.alt ?? meta.alt;
const caption = Astro.props.caption ?? meta.caption;
const focus = Astro.props.focus ?? meta.focus ?? '50% 30%';
const img = portraitBild(nr);
const style = `--ar:${ratio};--focus:${focus}`;
const ratioClass = `portrait--${ratio.replace('/', 'x')}`;
---
{img ? (
  <figure class:list={['portrait', ratioClass, cls]} style={style}>
    <Image src={img} alt={alt} widths={widths} sizes={sizes} format="webp" quality={82}
      loading={priority ? 'eager' : 'lazy'} fetchpriority={priority ? 'high' : 'auto'} decoding={priority ? 'sync' : 'async'} />
    {caption && <figcaption class="bildunterschrift">{caption}</figcaption>}
  </figure>
) : nurMitBild ? null : (
  <div class:list={['portrait', 'portrait--typo', `portrait--${variant}`, ratioClass, cls]} style={style} aria-hidden="true">
    <span class="portrait__label">{SITE.name}</span>
    <span class="portrait__initialen">TM</span>
    <span class="portrait__linie"></span>
    <span class="portrait__claim">{SITE.claim}</span>
  </div>
)}
```
Der Platzhalter ist `aria-hidden`, weil Name und Claim im umgebenden Text stehen und er rein dekorativ ist. Kein Hinweis "Portraet folgt": die typografische Variante ist produktionsfähig (Masterprompt Abschnitt 5).

### 7.6 CSS (in Portrait.astro)
```css
.portrait { position: relative; margin: 0; width: 100%; aspect-ratio: var(--ar); overflow: hidden; border-radius: var(--radius-media); container-type: inline-size; }
.portrait img { width: 100%; height: 100%; object-fit: cover; object-position: var(--focus); display: block; }
.portrait figcaption { position: static; }
.portrait:has(figcaption) { aspect-ratio: auto; }
.portrait:has(figcaption) img { aspect-ratio: var(--ar); height: auto; }

/* Typografische Variante, dunkel */
.portrait--typo { display: grid; grid-template-rows: auto 1fr auto auto; padding: clamp(1rem, 6cqi, 1.75rem); background: var(--c-dunkel-3); color: #fff; }
.portrait--typo::before { content: ""; position: absolute; inset: 0.75rem; border: var(--rule-dark); pointer-events: none; }
.portrait__label, .portrait__claim { font-size: var(--fs-xs); letter-spacing: var(--ls-caps); text-transform: uppercase; font-weight: 600; color: var(--c-weiss-75); }
.portrait__initialen { align-self: end; font-size: clamp(2.5rem, 34cqi, 8rem); font-weight: 700; line-height: 0.9; letter-spacing: -0.05em; }
.portrait__linie { width: 2.5rem; height: 3px; background: var(--c-orange); margin-block: var(--s-4) var(--s-3); }

/* Querformat: Claim rechts unten */
.portrait--3x2.portrait--typo { grid-template-columns: 1fr auto; grid-template-rows: auto 1fr auto; }
.portrait--3x2 .portrait__label { grid-column: 1 / -1; }
.portrait--3x2 .portrait__initialen { grid-column: 1 / -1; }
.portrait--3x2 .portrait__linie { grid-column: 1; }
.portrait--3x2 .portrait__claim { grid-column: 2; align-self: end; text-align: right; }

/* Quadrat: nur Initialen und Linie */
.portrait--1x1 .portrait__label, .portrait--1x1 .portrait__claim { display: none; }
.portrait--1x1 .portrait__initialen { font-size: clamp(2rem, 30cqi, 4rem); }
.portrait--1x1 .portrait__linie { width: 2rem; margin-block: var(--s-3) 0; }

/* Helle Variante (Kontakt, Personenanker) */
.portrait--hell.portrait--typo { background: var(--c-flaeche-2); color: var(--c-text); }
.portrait--hell.portrait--typo::before { border-color: var(--c-linie); }
.portrait--hell .portrait__label, .portrait--hell .portrait__claim { color: var(--c-text-2); }
```
Alle Werte der Platzhalter kommen aus Tokens; in der hellen Variante steht Text in `--c-text` und `--c-text-2` (auf `--c-flaeche-2`: 15,15:1 und 6,38:1), nie in Anthrazit.

### 7.7 Einsatzorte, Formate und Ladeverhalten
| Ort | nr | ratio | variant | priority | sizes | widths | gerendert (Desktop 1.240 px) |
|---|---|---|---|---|---|---|---|
| Startseite Hero, `.gc-9-12` | 1 | 4/5 | dunkel | ja | `(max-width: 860px) 20rem, (max-width: 1300px) 30vw, 380px` | 480, 800, 1200 | ca. 380 x 475 px |
| Profil Hero, `.gc-1-5` | 1 | 4/5 | dunkel | ja | `(max-width: 860px) 20rem, (max-width: 1300px) 40vw, 500px` | 480, 800, 1000, 1200 | ca. 500 x 625 px |
| Startseite Persönlicher Ansatz, `.gc-1-6` | 2 | 3/2 | dunkel | nein | `(max-width: 860px) 100vw, (max-width: 1300px) 48vw, 600px` | 640, 960, 1200 | ca. 600 x 400 px |
| Kontakt Aside | 2 | 1/1 | hell | nein | `12rem` | 400, 800 | 192 x 192 px |
| Personenanker Fachseiten | 2 | 1/1 | hell | nein | `8rem` | 400, 800 | 128 x 128 px |
| Profil zwischen Kapitel 03 und 04, `.gc-5-12` | 3 | 3/2 | nurMitBild | nein | `(max-width: 860px) 100vw, (max-width: 1300px) 64vw, 800px` | 640, 960, 1200, 1600 | ca. 800 x 533 px |

Mobil (unter 861 px): Hero-Portraets stehen unter dem Text, `max-width: 20rem`; Querformate volle Containerbreite; 1:1-Plätze behalten ihre rem-Breite.

### 7.8 Regeln
- Erkennung nur zur Buildzeit. Nach dem Ablegen einer Datei `npm run build`. Kein clientseitiges Nachladen, keine Erkennung per JavaScript.
- Dateinamen exakt `portrait-1`, `portrait-2`, `portrait-3` mit Endung jpg, jpeg oder png. Andere Dateien im Ordner werden vom Build-Test gemeldet (11.2).
- Zuschnitt auf 4:5 beziehungsweise 3:2 vor der Ablage. `object-fit: cover` fängt nur geringe Abweichungen; der 1:1-Ausschnitt aus portrait-2 wird über `focus` gesteuert und ist visuell abzunehmen.
- Vor dem Commit einer Datei: Fotograf, Datum, Nutzungsrechte Web und Freigabe durch Timo Müller in `docs/BILDER-LIZENZEN.md`; `docs/FAKTENLISTE.md` Nr. 15 auf "freigegeben" setzen.
- Zielgewicht: größte Ausgabestufe des Hero-Bilds unter 120 KB. Startseite bleibt unter 1 MB (Build-Test misst).
- Liegt nur portrait-1 vor: Slot 2 bleibt Platzhalter (Ansatz, Kontakt, Personenanker), Slot 3 wird nicht gerendert. Liegt gar keine Datei vor: Platzhalter auf Start, Profil, Kontakt, Fachseiten; Slot 3 entfällt.
- Der bestehende Inline-Platzhalter `.portrait` in `profil.astro` entfällt zugunsten der Komponente.

## 8. Fotoplan und Shooting-Brief

### 8.1 Motive
| Datei | Format | Motiv | Komposition | Quelle mindestens |
|---|---|---|---|---|
| portrait-1.jpg | 4:5 Hochformat | Kopf-Schulter-Portraet, ruhiger einfarbiger Hintergrund in Grau oder Weiß, weiches Licht, Geschäftskleidung, keine Requisiten, keine fremden Marken | Blickrichtung leicht nach links (zur Textspalte der Startseite); Gesicht im oberen Drittel, damit `focus 50% 30%` passt | 2000 x 2500 px |
| portrait-2.jpg | 3:2 Querformat | Halbportraet oder Arbeitssituation im Raum (Besprechungsraum, Fensterfront), ohne erkennbare Dritte | Person im rechten Drittel mit Blick nach rechts zur Textspalte (Startseite Ansatz: Bild links, Text rechts); der Kopf muss in einem mittigen 1:1-Ausschnitt liegen, damit Kontakt und Personenanker denselben Ausschnitt nutzen können; `focus` je Datei in `src/data/portraits.ts` eintragen | 2400 x 1600 px |
| portrait-3.jpg | 3:2 Querformat | Zweites Motiv, Arbeitssituation (Unterlagen, Objekt), deutlich anders als portrait-2, ohne Dritte, ohne lesbare Adressschilder, Mieter- oder Objektdaten, ohne fremde Logos | frei, Bildunterschrift nur mit freigegebenem Text | 2400 x 1600 px |

Serie: alle drei Motive in einem Termin mit gleichem Hintergrundton, Licht und Kleidung, damit die Seite bildlich zusammenhängt. Ohne Serie nur portrait-1 einsetzen; Slot 2 bleibt Platzhalter, Slot 3 entfällt.

### 8.2 Platzhalter je Ort
| Ort | Platzhalter |
|---|---|
| Start Hero, Profil Hero (4:5, dunkel) | Fläche `--c-dunkel-3`, Passepartout 1 px `--c-weiss-16` mit 0,75 rem Abstand, Label TIMO MÜLLER oben links (13 px Versalien, `--c-weiss-75`), Initialen TM unten links (containerabhängig 2,5 bis 8 rem, 700, Laufweite minus 0,05 em), orange Linie 2,5 rem x 3 px, Claim ASSET MANAGEMENT & PORTFOLIOOPTIMIERUNG. Beide Seiten zeigen erkennbar dasselbe Bild. |
| Start Ansatz (3:2, dunkel) | gleiche Sprache, Claim unten rechts, Initialen unten links |
| Kontakt, Personenanker (1:1, hell) | Fläche `--c-flaeche-2`, Passepartout `--c-linie`, nur Initialen TM in `--c-text` und orange Linie 2 rem; wirkt als Signet, nicht als fehlendes Bild |
| Profil Slot 3 | kein Platzhalter; Block wird nicht gerendert |

### 8.3 Dokumentation
- `src/assets/portraits/README.md` um Abschnitt 8.1 (Komposition, Blickrichtung, Serie, Mindestgrößen, focus) ergänzen.
- `docs/BILDER-LIZENZEN.md` je Datei: Dateiname, Fotograf, Aufnahmedatum, Nutzungsrechte Web, Freigabe durch Timo Müller mit Datum. Ohne Eintrag bleibt die Datei außerhalb des Repositories.
- `docs/DESIGN-SYSTEM.md`: Abschnitt Bilder auf die Komponente umstellen, Kontrasttabelle aus 2.3 übernehmen.

### 8.4 OG-Bild
Bleibt typografisch (`public/og-default.png`). Nach Freigabe von portrait-1 optional ein OG-Bild 1200 x 630 aus derselben Quelle erzeugen; eigener Arbeitsschritt, nicht Teil dieser Umsetzung.

## 9. Layout je Seitentyp

Sektionsrhythmus je Seite: Weiß, Linie, Weiß, Fläche, Weiß, Dunkel. Höchstens zwei Abschnitte auf `--c-flaeche`, ein dunkler Abschnitt.

### 9.1 Startseite (index.astro)
| Nr. | Abschnitt | Fläche | Raster | Inhalt |
|---|---|---|---|---|
| 1 | Hero | Weiß | 7/5 (`gc-1-7`, `gc-9-12`) | Eyebrow, Display-H1, Standfirst, Lead, Buttonzeile, E-Mail mit Haarlinie; Portrait 1 (4:5) oben ausgerichtet |
| 2 | Fakten-Band | Weiß, `section--tight`, Linie oben | 4/4/4 | drei Aussagen mit 2 px Linie oben, Link "Zum Profil" rechts |
| 3 | Ausgangslagen `#ausgangslagen` | Weiß, `section--linie` | `.abschnitt` 4/8 | Kopf sticky links, Register 01 bis 05 rechts |
| 4 | Beratung `#beratung` | `--c-flaeche` | `.spalten` 3 Spalten | Kennung A, B, C, Titel, Nutzen, dl Arbeitsergebnis, Textlink; Fußzeile |
| 5 | Arbeitsweise `#arbeitsweise` | Weiß | Section-Head `gc-1-7`, Steps 4 Spalten | erster Schritt orange |
| 6 | Persönlicher Ansatz `#ansatz` | Weiß, `section--linie` | 6/6 (`gc-1-6` Bild, `gc-7-12` Text) | Portrait 2 (3:2) links, Eyebrow, H2, drei Absätze, Link; DOM: Bild vor Text |
| 7 | KI `#ki` | Weiß, `section--linie` | `.abschnitt` 4/8 | Register `register--2` mit vier Feldern, Textlink |
| 8 | So würde ich vorgehen `#vorgehen` | `--c-flaeche` | Dossier 6/5 | Kopfzeile, Ausgangslage und Vorgehen links, Arbeitsergebnis weiß rechts, Hinweis |
| 9 | Cta | `--c-dunkel` | 7/4, unten ausgerichtet | Frage, Lead, Button, E-Mail |

Der Ansatz-Abschnitt wechselt von `--c-flaeche` auf Weiß, damit die Grenze von zwei Flächen je Seite eingehalten wird.

### 9.2 Fachseiten (Fachseite.astro, vier Seiten)
| Nr. | Abschnitt | Fläche | Raster | Inhalt |
|---|---|---|---|---|
| 0 | Breadcrumb | Weiß | | unverändert |
| 1 | Hero | Weiß | 8/4 | Eyebrow, H1, Standfirst-Frage links; Intro rechts unten ausgerichtet; Buttonzeile volle Breite |
| 2 | Seitennav | Weiß, zwei Haarlinien | Textzeile | fünf Anker |
| 3 | Passende Situationen `#situationen` | Weiß | `.abschnitt` 4/8 | `register--2`, Waisenregel |
| 4 | Leistungsumfang `#leistung` | `--c-flaeche` | 7/4 | Register der Leistungen; Ergebnisse als Aside mit 2 px Linie, sticky |
| 5 | Vorgehen `#vorgehen` | Weiß | Steps | |
| 6 | Abgrenzung `#abgrenzung` | Weiß, `section--linie` | 7/4 | Checkliste links, Linkregister Verwandte Themen rechts |
| 7 | Fragen `#fragen` | Weiß, `section--linie` | `gc-1-8` | FAQ mit Kreuz |
| 8 | Personenanker | Weiß, `section--tight`, Linie oben | 8rem / Rest | Portrait 2 (1:1, hell), Name, Claim, Link |
| 9 | Cta | `--c-dunkel` | 7/4 | |

### 9.3 Profil (profil.astro)
| Nr. | Abschnitt | Fläche | Raster | Inhalt |
|---|---|---|---|---|
| 1 | Hero | Weiß | 5/6 (`gc-1-5` Bild, `gc-7-12` Text) | Portrait 1 (4:5) links; Eyebrow, Display-H1 "Timo Müller", Lead, Funktionen als dl mit Haarlinien (dt Caps), Kontakt, optional PDF-Button; DOM: Bild vor Text, mobil Bild max. 20 rem vor der H1 |
| 2 | Kapitel 01 bis 03 | Weiß | `.kapitel` 4/7 | Nummer und H2 links sticky, Text rechts |
| 3 | Bild | Weiß | `gc-5-12` | Portrait 3 (3:2), nur mit Datei |
| 4 | Kapitel 04 bis 05 | Weiß | `.kapitel` 4/7 | |
| 5 | Stationen | Weiß | `.kapitel` | Timeline, nur freigegebene Stationen |
| 6 | Cta | `--c-dunkel` | 7/4 | Profil-Texte |

Der Profil-Hero ist die einzige Stelle, an der das Bild mobil vor der Überschrift steht. Das ist gewollt (Profilseite, Person zuerst), die H1 bleibt bei 360 px innerhalb des ersten Bildschirms plus einer kurzen Scrollbewegung. Prüfpunkt im Fünf-Sekunden-Test.

### 9.4 Kontakt (kontakt.astro)
Hero kompakt (H1 `--fs-h1`, Lead 60ch, E-Mail-Zeile). Grid 7/4: Formular mit zwei Fieldsets links, Aside rechts (Portrait 2 als 1:1 hell, Direkt erreichen, Checkliste, Betreiberhinweis), sticky ab 861 px und 641 px Höhe. Kein Kasten, nur Linien. Mobil Formular zuerst, dann Aside; die E-Mail steht bereits im Hero.

### 9.5 Einblicke
Übersicht: Hero, dann `.abschnitt` mit Register (Datum links 9 rem, Titel und Kernaussage rechts). Beitrag: Hero-Muster, Artikel `gc-3-10`, Quellen mit Haarlinie, Hinweiskasten, Cta.

### 9.6 Rechtstexte, 404, Danke
`.prose` in `gc-1-8`, keine Karten, keine Portraets, Footer folgt direkt.

## 10. Interaktionen und reduzierte Bewegung

| Element | Ruhezustand | Hover (nur `hover: hover`) | Fokus | Aktiv oder offen |
|---|---|---|---|---|
| Textlink im Fließtext | Unterstreichung 1 px `--c-mittelgrau` | Unterstreichung `--c-text` | Ring 3 px `--c-fokus`, Offset 3 px | |
| `.textlink` mit Pfeil | 600, Unterstreichung 1 px | Unterstreichung 2 px, Pfeil unbewegt | Ring | |
| Button primär | `--c-dunkel`, weißer Text, orange Quadrat | `--c-dunkel-2` | Ring | |
| Button sekundär | Rahmen `--c-mittelgrau` | Rahmen `--c-text`, Fläche `--c-flaeche` | Ring | |
| Buttons auf dunkel | invertiert (Bestand) | `--c-flaeche-2` | Ring weiß | |
| Navigationslink | transparente 2 px Unterstreichung | Unterstreichung `--c-mittelgrau` | Ring | `aria-current` Unterstreichung `--c-text` |
| Untermenü | geschlossen | Eintrag Fläche `--c-flaeche` | Ring | öffnet ohne Animation, Escape und Klick außerhalb schließen (Bestand) |
| Seitennavigation, Linkregister | Text 600 | Unterstreichung | Ring | |
| FAQ-Summary | Kreuz | Farbe unverändert | Ring | Kreuz dreht 45 Grad in `--dur-slow` |
| Register, Kapitel, Tabellen | kein Hover, reine Inhalte | | | |
| Portraet und Platzhalter | statisch | kein Hover, kein Zoom, keine Lightbox | | |

Übergänge nur für `background-color`, `border-color`, `color`, `text-decoration-color` und die Drehung des FAQ-Kreuzes. Dauer `--dur` 160 ms beziehungsweise `--dur-slow` 240 ms mit `--ease`. Keine `transform`-Animationen außer dem Kreuz, kein `box-shadow`-Wechsel, keine Verschiebung, kein Parallax, keine Scroll-Reveals, keine Header-Schrumpfanimation, kein Autoplay.

Reduzierte Bewegung: `@media (prefers-reduced-motion: reduce)` setzt `--dur` und `--dur-slow` auf 0 ms (tokens.css) und `scroll-behavior: auto` (global.css, Bestand). Damit erfolgen Farbwechsel sofort und das Kreuz springt. Layout und Inhalte sind identisch.

Tastatur und Zielgrößen: alle Bedienelemente mindestens 44 px hoch, Abstand zwischen Zielen mindestens 8 px (Seitennavigation `gap` 32 px, Linkregister durch Zeilenhöhe). `scroll-padding-top` verhindert, dass Anker und fokussierte Elemente unter dem Sticky-Header liegen (WCAG 2.2, 2.4.11). Sticky-Randspalten nur ab 861 px Breite und 641 px Höhe.

Ohne JavaScript: Navigation sichtbar (`html.no-js`), Untermenü per details/summary, FAQ nativ, Formular als POST, Platzhalter und Bilder sind zur Buildzeit entschieden. Nichts ist ohne JavaScript verborgen.

## 11. Tests, Build-Hinweise und Regression

### 11.1 Pflichtprüfungen nach Umsetzung
1. `npm run build`, `npm run check`, `npm test` fehlerfrei.
2. `node scripts/screenshots.mjs` bei 360, 390, 768, 1024 und 1440 px für alle Seiten der Liste plus `/property-management-optimierung/`, `/ki-immobilienmanagement/`, `/danke/`, `/impressum/`, `/datenschutz/` (Liste im Skript ergänzen). Kein horizontaler Scrollbalken, keine abgeschnittene H1, keine überlagerten Buttons.
3. `node scripts/a11y-check.mjs` (axe bei 390 und 1440 px) ohne Verstöße; zusätzlich manuell: Tab-Reihenfolge entspricht der Leserichtung auf Start (Hero, Fakten, Register), Profil (Bild vor Text), Kontakt (Hero-Mail, Formular, Aside); Sticky-Randspalten verdecken bei 200 Prozent Zoom keinen Fokus (bei 720 px Breite sind sie statisch).
4. Screenreader-Stichprobe mit NVDA oder VoiceOver: Register werden als Liste mit Positionsangabe gelesen, die CSS-Ziffer wird nicht zusätzlich angesagt; Kennungen A, B, C und Kapitelnummern werden nicht gelesen; Dossier-Kopfzeile wird nicht gelesen, der Hinweistext schon.
5. H1-Umbruch bei 360 px und 200 Prozent Zoom auf Windows (Segoe UI) und macOS: Startseite (weiches Trennzeichen greift), Fachseiten (U+00AD in den Props).
6. Reduzierte Bewegung aktiviert: FAQ-Kreuz springt, keine Übergänge.
7. Ohne JavaScript: Navigation, FAQ, Formular-POST, Seitennavigation funktionieren.
8. Fünf-Sekunden-Test auf Start und Profil bei 360 px wiederholen: Name, Thema, Leitzeile, Button und E-Mail auf dem ersten Bildschirm (Start) beziehungsweise nach höchstens einer Scrollbewegung (Profil).
9. Startseite unter 1 MB (Build-Test), größte Hero-Bildstufe unter 120 KB, sobald ein Foto vorliegt.

### 11.2 Erweiterung scripts/test-build.mjs
- Nach dem Build ausgeben, welche Portraet-Slots mit Bild und welche mit Platzhalter gebaut wurden: Für `/`, `/profil/`, `/kontakt/` und eine Fachseite prüfen, ob im HTML `class="portrait portrait--typo` (Platzhalter) oder `<figure class="portrait` mit `<img` (Bild) vorkommt, und je Slot eine Zeile `Portraet-Slot 1: Bild` oder `Portraet-Slot 1: Platzhalter` loggen.
- Dateien in `src/assets/portraits/` einlesen; jede Datei außer `README.md`, die nicht `^portrait-[123]\.(jpe?g|png)$` entspricht, als FEHLER melden ("falsch benannt, wird nicht erkannt").
- Für jede vorhandene Portraetdatei prüfen, dass `docs/BILDER-LIZENZEN.md` den Dateinamen enthält, sonst FEHLER.
- Jedes `<img` innerhalb von `.portrait` muss ein nicht leeres `alt` tragen, sonst FEHLER.
- Bestehende Prüfungen (Gedankenstriche, Platzhalter-Klammern, externe Ressourcen, Stockfoto-Quellen, verbotene Formulierungen, Budget) bleiben.

### 11.3 Regressionsliste
Der Umbau zentraler Muster betrifft alle zwölf Seiten. Nach der Umsetzung sind zu prüfen:
| Änderung | Betroffene Seiten |
|---|---|
| `.card` verliert Rahmen | Einblicke (Übersicht mit Beiträgen), Danke, 404, Formularstatus (eigene Klasse, unberührt) |
| `.section-head` Breite und Abstand | alle Seiten |
| `.steps` Ziffern und Mobilraster | Start, vier Fachseiten |
| `.faq` Kreuz und ids | vier Fachseiten, Asset-Seite |
| `.dl-grid` Linien | Profil (Funktionen), Asset-Seite (Mandate), Datenschutz |
| Tabellenkopf ohne Fläche | Datenschutz, künftige Modelltabellen |
| Footer weiß, `margin-top: 0` | alle Seiten, besonders Kontakt, Impressum, Datenschutz, 404, Danke (kein Cta davor) |
| Header ohne Blur, Unterstreichung | alle Seiten, Untermenü offen und geschlossen, mobil |
| Hero.astro Standfirst und Mail-Prop | Kontakt, Einblicke, Beitrag, Rechtstexte |
| Bruchpunkt 860 px vereinheitlicht | alle Raster (bisher 800, 860, 900 gemischt) |

## 12. Checkliste der Masterprompt-Verbote

| Verbot (Masterprompt Abschnitt 5) | Status in dieser Spezifikation | Prüfung |
|---|---|---|
| Keine verspielten Pillen-Badges | Keine gerundeten Labels; Eyebrow, Caps und Seitennavigation sind reiner Text; Radius nur 4 px auf Buttons und Feldern, 2 px auf Medien | Sichtprüfung Screenshots |
| Keine endlose Kartenwand | Alle Aufzählungen als Register, Spalten, Kapitel; `.card` nur noch Reserve ohne Rahmen; höchstens ein Kartenraster je Seite | Sichtprüfung, grep `class="card` im dist |
| Keine Hintergrundvideos | keine `<video>`, keine Medien außer Portraets und Logo | grep `<video` im dist |
| Kein Scroll-Hijacking | kein zusätzliches JavaScript, `scroll-behavior: smooth` nur mit reduced-motion-Fallback, kein Scroll-Listener | Code-Review Skripte |
| Keine Autoplay-Slider | keine Slider, keine Karussells | Sichtprüfung |
| Kein erzwungener Dark Mode | `color-scheme: light` bleibt, dunkle Flächen nur Cta und Platzhalter | Base.astro |
| Keine externen Schriften oder CDNs | Systemschrift, keine `@font-face`, Build-Test prüft auf cdn, googleapis, gstatic, unpkg, jsdelivr | `npm test` |
| Modern durch Gestaltung, nicht durch Effekte | keine Parallax, keine Reveals, keine Schatten außer Untermenü, keine Zoom-Effekte | Abschnitt 10 |
| Keine Stockfotos, keine KI-Portraets, keine fremde Person | Platzhalter ohne Gesicht; Build-Test prüft Stockfoto-Quellen; Lizenznachweis Pflicht | `npm test`, BILDER-LIZENZEN |
| Keine erfundenen Zahlen, Zähler, Sterne, Referenzen, Jahreszahlen | Fakten-Band wortgleich, Register-Ziffern sind Gliederung, Dossier als Schema gekennzeichnet, Timeline nur mit Freigabe, Tabellen mit Caption | Faktenliste, Sichtprüfung |
| Keine Gedankenstriche im deutschen Text | Trennungen nur über Linien; Build-Test prüft dist | `npm test` |
| WCAG 2.2 AA | Kontraste nach 2.3, Fokusringe, 44 px Ziele, scroll-padding, keine `order`-Umsortierung, Alternativtext-Syntax für Ziffern, `role="list"` | axe, manuelle Prüfung |
| Fließtext 17 bis 18 px, Textspalten nicht zu breit, kurze Absätze | `--fs-body` unverändert, 68ch, Lead 60ch, Standfirst 44ch | Sichtprüfung |
| Inhaltsbreite 1.200 bis 1.280 px | 1.240 px unverändert | tokens.css |

## 13. Umsetzungsreihenfolge

1. `tokens.css`: drei Werte ersetzen, Ergänzungsblock anfügen (Abschnitt 3.2).
2. `global.css`: Basisregeln, Raster, Linien, Hover- und Sticky-Guards, Register, Abschnitt, Spalten, Steps, Kapitel, Tabellen, Card, FAQ (Abschnitte 5, 6.3 bis 6.6, 6.10, 6.12, 6.14, 6.15). Build und Sichtprüfung: die Seiten müssen mit den neuen Basisregeln bereits sauber rendern, bevor Markup angefasst wird.
3. `src/lib/portraits.ts`, `src/data/portraits.ts`, `Portrait.astro` (Abschnitt 7). Build mit leerem Ordner prüfen.
4. `Header.astro`, `Footer.astro`, `Cta.astro`, `Hero.astro`, `Faq.astro` (id-Prop), `Timeline.astro`.
5. `Seitennav.astro` neu, `Fachseite.astro` umbauen inklusive Personenanker und ids; vier Fachseiten prüfen; U+00AD in den H1-Props ergänzen.
6. `index.astro`: Hero, Fakten-Band, Ausgangslagen, Beratung (`kenn` im Datenarray), Arbeitsweise, Ansatz mit Portrait 2, KI, Dossier.
7. `profil.astro`: Hero mit Portrait 1, Kapitel, Slot 3, Timeline.
8. `asset-management-beratung.astro`: Hero, Mandate als Kapitel, Unterlagen als Register, Seitennav, Personenanker.
9. `kontakt.astro`, `ContactForm.astro` (Fieldsets, Hero-Mail, Aside).
10. `einblicke/index.astro`, `einblicke/[slug].astro`, `404.astro`, `danke.astro`.
11. `scripts/test-build.mjs` erweitern (11.2), `scripts/screenshots.mjs` Seitenliste ergänzen.
12. Dokumentation: `docs/DESIGN-SYSTEM.md` (Tokens, Kontraste, Komponenten, Bilder), `src/assets/portraits/README.md`, `docs/BILDER-LIZENZEN.md`, `docs/TESTBERICHT.md` (Ergebnisse aus 11.1).
13. Vollständiger Prüflauf nach 11.1.

Jeder Schritt endet mit `npm run build` und `npm test`. Konkurrierende Änderungen derselben Datei vermeiden; Reihenfolge einhalten, weil spätere Schritte die Klassen früherer Schritte voraussetzen.

## 14. Offene Punkte und Freigaben

| Punkt | Zuständig | Wirkung auf das Design |
|---|---|---|
| Echte Portraets (drei Motive als Serie), Fotograf, Nutzungsrechte | Timo Müller | Bis zur Freigabe Platzhalter auf Start, Profil, Kontakt, Fachseiten; Slot 3 entfällt |
| Bildunterschrift portrait-3 | Timo Müller | Ohne Freigabe keine Bildunterschrift |
| Kontrastwerte aus 2.3 | Entwicklung | Verifikation mit axe und Kontrastprüfer, Eintrag in DESIGN-SYSTEM.md |
| Systemschrift-Metrik der Display-H1 auf Windows | Entwicklung | Test bei 360 px; bei Überlauf zusätzliche weiche Trennstellen, keine Verkleinerung unter 32 px |
| Vita-Stationen (Faktenliste Nr. 14) | Timo Müller | Timeline bleibt leer, Kapitelmuster ist vorbereitet |
| Modelltabellen CAPEX und OPEX | Redaktion | Tabellenstil nach 6.14 mit Pflicht-Caption |

Diese Spezifikation ersetzt keine Freigabe der Geschäftsführung für die Veröffentlichung der Seite. Sie regelt ausschließlich Gestaltung und Umsetzung im Rahmen von Masterprompt und Faktenliste.
