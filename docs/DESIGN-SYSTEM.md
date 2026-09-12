# Design-System

## CI-Herkunft
Farbwerte, Logo und Typografieregel stammen aus dem HVM-CI (Skill hvm-ci). Für Web-Kontraste nach WCAG 2.2 AA wurden zusätzliche Abstufungen abgeleitet. Diese sind in `src/styles/tokens.css` als "abgeleitet" gekennzeichnet und keine Original-CI-Werte.

| Token | Wert | Herkunft | Einsatz |
|---|---|---|---|
| --c-orange | #E6A83C | HVM-CI | Akzentlinien, Eyebrow-Marker, Kennlinie, Listenmarker. Nie für Text (Kontrast auf Weiß ca. 2:1). |
| --c-anthrazit | #87888A | HVM-CI | Kennlinie, Dekor. Nicht für Fließtext (3,3:1). |
| --c-mittelgrau | #9C9D9F | HVM-CI | Rahmen, Kennlinie |
| --c-hellgrau | #D7D8DA | HVM-CI | Linien, Kennlinie, Schrittmarker |
| --c-umriss | #ECECEC | HVM-CI | reserviert (Wasserzeichen) |
| --c-text | #1A1A1A | HVM-CI | Fließtext, Überschriften |
| --c-dunkel | #2F3032 | abgeleitet | dunkle Akzentflächen (Kontaktabschluss, Buttons, Porträtfeld) |
| --c-text-2 | #55565A | abgeleitet | Sekundärtext, 7,0:1 |
| --c-text-3 | #6B6C70 | abgeleitet | Meta, 5,3:1 |
| --c-flaeche | #F6F6F7 | abgeleitet | helle Sektionsflächen |
| --c-fokus | #B67F1E | abgeleitet | Fokusring (3,6:1) |

Kennlinie: Vier Segmente 0 bis 40 % Anthrazit, 40 bis 60 % Mittelgrau, 60 bis 67,5 % Orange, 67,5 bis 100 % Hellgrau, übernommen aus dem Briefbogen, oben 3 px, im Footer 2 px.

## Typografie
Systemschrift gemäß CI-Vorgabe für Web (system-ui, Helvetica Neue, Arial). Keine externen Schriftabrufe, keine Lizenzfragen. Fließtext 17 bis 18 px (clamp), Zeilenhöhe 1,6, Textspalten max. 68 Zeichen. Überschriften 600, negative Laufweite. H1 clamp 28 bis 52 px.

## Raster
Inhaltsbreite 1.240 px, Seitenabstand clamp(1rem, 4vw, 2.5rem). Sektionen clamp(3.5rem, 6vw, 6rem). Karten zurückhaltend (1 px Rahmen oder helle Fläche, 4 px Radius), keine Schatten außer Untermenü.

## Komponenten
Header (sticky, Untermenü als details/summary, mobil Toggle, ohne JavaScript immer sichtbar), Hero, Eyebrow mit Orange-Marker, Steps (nummeriert, erster Schritt orange), Cards, Checklist, Faq (details), Timeline, Cta (dunkle Fläche), Footer mit HVM-Logo als Absender.

## Barrierefreiheit
Skip-Link, sichtbare Fokuszustände, 44 px Mindesthöhe für Bedienelemente, aria-current, aria-expanded, Fehlermeldungen per aria-describedby, role=status für Formularstatus, prefers-reduced-motion respektiert (Transitions auf 0), lang=de, Überschriftenhierarchie je Seite eine H1.

## Bilder
Kein Porträt vorhanden: typografische Variante (Initialen auf dunkler Fläche). Kein Stockfoto, kein KI-Bild. HVM-Logo aus dem CI-Skill, per sharp optimiert. OG-Bild typografisch generiert (public/og-default.png). Lizenzhinweise: docs/BILDER-LIZENZEN.md.
