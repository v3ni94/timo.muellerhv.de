# Testbericht, Stand 12.09.2026

Der Bericht führt zwei Stände: Stand v1 ist die Fassung vor dem Umbau nach Designspezifikation und Inhaltsplan v2 (12 Seiten, 10 Sitemap-URLs, Description-Grenze 165 Zeichen). Stand v2 ist der Integrationsbuild nach dem Umbau (17 Seiten, 14 Sitemap-URLs, Description-Grenze 160 Zeichen), geführt in drei Runden: Runde 1 nach der Zusammenführung der Inhaltsagenten, Runde 2 nach den Korrekturagenten, Runde 3 nach den Korrekturagenten der zweiten Prüfung (Fundament-Gruppe, Seitenregeln, Dokumentation). Maßgeblich für die aktuelle Fassung ist Stand v2, Runde 3.

## Stand v1, vor dem Umbau

Testumgebung: Linux-Container, Node 22.22, PHP 8.4.19 CLI, Chromium 1194 (Playwright 1.63), lokaler Dateiserver gegen dist/. Keine Produktions- oder Staging-Umgebung verfügbar, kein SMTP-Zugang.

### Durchgeführt und bestanden (Stand v1)
| Prüfung | Ergebnis |
|---|---|
| `npm run build` | 12 Seiten, ohne Fehler |
| `npm run check` (astro check) | 0 Fehler, 0 Warnungen |
| `npm test` (Strukturprüfung) | 12 HTML-Seiten, 10 Sitemap-URLs, 0 Fehler: eindeutige Titles und Descriptions (max. 165 Zeichen), genau eine H1 je Seite, absolute selbstreferenzierende Canonicals, JSON-LD parsbar, keine Gedankenstriche, keine externen Ressourcen, Entwürfe nicht gebaut, /danke/ nicht in Sitemap |
| axe-core (WCAG 2.0/2.1/2.2 A und AA, Best Practice) bei 390 und 1440 px auf allen 12 Seiten | 0 Verstöße |
| Tastatur: Skip-Link erster Tab-Stopp, Fokus auf #inhalt, Untermenü per Enter öffnen, Escape schließt | bestanden |
| Clientseitige Formularvalidierung (leeres Absenden) | drei Fehlermeldungen, Fokus auf erstes Fehlerfeld |
| Kein horizontaler Scroll bei 360, 390, 768, 1024, 1440 px | bestanden (nach Korrektur der Hero-Grid-Mindestbreite) |
| 200 % Zoom (720 px Viewport, DPR 2) | kein horizontaler Scroll |
| Screenshots aller Hauptseiten in fünf Breiten | geprüft, keine abgeschnittenen Überschriften oder überlagerten Buttons |
| PHP-Endpunkt lokal (php -S, Testkonfiguration ohne erreichbaren SMTP) | GET 405; fremder Origin 403; Honeypot 400; Validierung 422 mit Feldmeldungen; CRLF im Namen wird entfernt (keine Header-Injection); gültige Anfrage ohne SMTP 502 mit Direktkontakt-Hinweis, kein Falscherfolg; Rate-Limit 429; Fehlerlog ohne Formularinhalte |
| `php -l public/api/contact.php` | keine Syntaxfehler |
| Größenbudget Startseite | 42 KB unkomprimiert (HTML, CSS, Bilder), kein externes JavaScript, Inline-Skripte < 5 KB |

### Nicht durchgeführt (Stand v1, fehlende Umgebung oder Berechtigung)
- Echte End-to-End-Testanfrage mit SMTP und Postfachkontrolle. Offener Launchpunkt.
- HTTPS-Redirects, Security-Header, ErrorDocument 404 und Caching auf dem Zielserver (Apache-.htaccess nicht auf Zielhosting getestet).
- Lighthouse/Core Web Vitals: keine Laborwerte erhoben. Architektur (statisch, kein externes JS, Systemschrift, komprimierte Assets) ist auf LCP < 2,5 s und CLS < 0,1 ausgelegt. Felddaten liegen naturgemäß nicht vor.
- Reale Touch-Bedienung auf Geräten, Safari/Firefox (nur Chromium geprüft).
- Search-Console-Verifikation, Sitemap-Einreichung.
- Rich-Results-Test der strukturierten Daten (JSON syntaktisch geprüft, nicht gegen Google validiert).

### Behobene Fehler während der Tests (Stand v1)
1. Horizontaler Überlauf bei 360/390 px im Hero durch lange Komposita im Eyebrow: `min-width: 0` auf Grid-Kinder, `overflow-wrap`.
2. Automatische Silbentrennung trennte die H1 unsauber ("Immobilienportfolio s."): Silbentrennung für H1 auf manuell, H1-Skalierung verkleinert.
3. Kopfbereich brach bei 1024 px in zwei Zeilen: Menü-Toggle bis 1080 px.
4. Vier Descriptions über 165 Zeichen gekürzt.
5. Klasse `no-js` wurde vom Skript entfernt, aber nie gesetzt; ohne JavaScript wäre die mobile Navigation verborgen gewesen. Behoben in Base.astro.

## Stand v2 (Integrationsbuild 12.09.2026)

Testumgebung: Linux-Container, Node 22.22, Chromium 1194 (Playwright 1.63), `astro preview` beziehungsweise lokaler Dateiserver gegen dist/. Keine Produktions- oder Staging-Umgebung, kein SMTP-Zugang, keine Silbentrennungswörterbücher im Test-Browser. Geprüft wurde der Stand nach Zusammenführung aller Inhaltsagenten (Runde 1); die dabei behobenen Fehler stehen unten.

### Durchgeführt und bestanden

| Prüfung | Ergebnis |
|---|---|
| `npm run build` | 17 Seiten (14 indexierbare Routen, /einblicke/ im Leerzustand, /danke/, /404.html), ohne Fehler |
| `npm run check` (astro check) | 0 Fehler, 0 Warnungen, 20 Hinweise (Deprecation von `z` aus astro:content in src/content.config.ts, keine Funktionsauswirkung) |
| `npm test` (scripts/test-build.mjs, erweitert nach DESIGN-SPEC-V2 11.2 und CONTENT-PLAN-V2 8) | 17 HTML-Seiten, 14 Sitemap-URLs, 34 Glossar-ids, 0 Fehler: Titles bis 65 und Descriptions bis 160 Zeichen (Entities dekodiert, weiche Trennstellen abgezogen), eindeutig; genau eine H1 je Seite; absolute selbstreferenzierende Canonicals; JSON-LD parsbar und ohne Gedankenstriche; keine Gedankenstriche im Text; keine Platzhalter in eckigen Klammern außer Impressum und Datenschutz; keine externen Ressourcen, keine Stockfoto-Quellen, keine verbotenen Formulierungen; kein "EUR", kein Euro-Zeichen, kein "Honorar" mit Zahl, kein "kostenfrei"; alle 803 internen Links und Anker lösen auf; alle /glossar/#id-Links und Frontmatter-ids der Beiträge in GLOSSAR oder GLOSSAR_ALIAS; jede figure außer Porträts mit figcaption "Schematisch"; Tabellen mit caption und th scope; Untermenü und FAQ als details/summary; Formular mit method="post" und action; CSS-Regeln `html.no-js .site-nav {display:block}` und `html.no-js .site-header {position:static}`; Entwürfe nicht gebaut; /einblicke/ noindex und nicht in der Sitemap; Anker #redaktionsgrundsaetze vorhanden; Porträt-Slots: / 2 Platzhalter (4:5, 3:2), /profil/ 1 (4:5), /kontakt/ 1 (1:1), /portfoliooptimierung/ 1 (1:1); keine Porträtdateien in src/assets/portraits (Negativprobe mit falsch benannter Datei wird gemeldet) |
| Screenshots `node scripts/screenshots.mjs` bei 360, 390, 768, 1024 und 1440 px, alle 17 Routen (85 Aufnahmen, Ausgabe scratchpad/shots-int1) | kein horizontaler Scroll auf keiner Seite in keiner Breite (Skript prüft scrollWidth und benennt Verursacher) |
| Sichtprüfung der Screenshots Start, Profil, Portfoliooptimierung, Investitionspriorisierung, Zusammenarbeit, Glossar, Kontakt bei 390 und 1440 px (in Teilbildern gelesen) sowie Ausschnitte bei 768 und 1024 px | Befunde behoben (siehe unten); danach ohne abgeschnittene Überschriften, überlagerte Elemente, leere Flächen oder falsche Rasterzuweisungen |
| Wortumbruch-Prüfung (Playwright, Scratch-Skript): jedes Wort in h1 bis h4, dt, th, summary, legend, Eyebrow, Seitennavigation, Breadcrumb, Buttons, Textlinks und Footer-Links bei 360, 390, 768, 1024 und 1440 px gegen die Containerbreite gemessen | 0 erzwungene Umbrüche mitten im Wort (nach Setzen weicher Trennstellen, siehe unten) |
| `node scripts/a11y-check.mjs` (axe-core 4.13, Regeln wcag2a, wcag2aa, wcag21aa, wcag22aa, best-practice) bei 390 und 1440 px, alle 17 Routen | 0 Verstöße (zuvor 3, siehe unten); axe-Regel color-contrast auf allen Seiten ohne Befund |
| Tastatur: Skip-Link erster Tab-Stopp, Fokus auf #inhalt, Untermenü per Enter öffnen, Escape schließt | bestanden |
| Clientseitige Formularvalidierung (leeres Absenden) | drei Fehlermeldungen |
| 200 % Zoom (720 px Viewport, DPR 2) auf der Startseite | kein horizontaler Scroll |
| Ohne JavaScript (Playwright, javaScriptEnabled false) bei 390 und 1440 px auf /asset-management-beratung/ und /kontakt/ | `html.no-js` gesetzt; Navigation sichtbar (display block, drei Hauptlinks); Untermenü per Klick auf summary geöffnet, acht Links sichtbar; FAQ per summary geöffnet, Antwort sichtbar; Formular mit action="/api/contact.php", method="post", neun Felder; Kopf bei 390 px statisch (nach Korrektur, siehe unten), bei 1440 px sticky |
| Kontraste (rechnerisch nach WCAG, Node-Skript) | --c-text-2 #55565A auf Weiß 7,33:1, auf --c-flaeche 6,79:1; --c-text-3 #6B6C70 auf Weiß 5,24:1, auf --c-flaeche 4,86:1; --c-fokus #B67F1E auf Weiß 3,47:1 (Nicht-Text, Anforderung 3:1); --c-anthrazit #87888A auf Weiß 3,55:1 (nur Schrift ab 24 px); Weiß auf --c-dunkel 13,21:1; --c-weiss-75 auf --c-dunkel 8,15:1; Text #1A1A1A auf Weiß 17,40:1. Werte der Designspezifikation 2.3 bestätigt; Kommentare in tokens.css angeglichen |
| Stichprobe Flag-Inhalte im dist | kein "Fallstudie", kein "Belegtes Ergebnis" außerhalb der Redaktionsgrundsätze, kein "kostenfrei", kein Honorar mit Zahl, kein EUR, kein #entwicklungsstand, kein PDF-Button, kein LinkedIn-Link, keine Timeline; Register Interessen mit drei Regeln; FAQ Zusammenarbeit fünf, Profil vier Einträge |
| docs/SEO-MATRIX.md gegen dist | Title und Description aller 17 Seiten stimmen mit der Matrix überein |
| Größenbudget Startseite | 71 KB unkomprimiert (HTML plus referenzierte lokale Assets) |
| CLS (Playwright, PerformanceObserver layout-shift ohne Eingaben, gedrosselte Verbindung: 150 ms Latenz, 200 kbit/s Download, 100 kbit/s Upload; Auswertung 1,5 s nach load) auf /, /kontakt/ und /profil/ | Messung vor dem no-js-Fix: mobil 390 x 844 px auf allen drei Seiten 0,2174 (Quelle MAIN, auf /kontakt/ zusätzlich .form-grid), Desktop 1440 x 900 px 0 auf /, 0,0077 auf /kontakt/ und 0,0069 auf /profil/ (Quelle NAV.site-nav). Ursache mobil: das deferred Skript entfernte die Klasse no-js erst nach dem ersten Paint, bis dahin stand die Navigation ausgeklappt und schob den Inhalt. Fix in Base.astro (Nr. 11 unten). Nachmessung nach dem Fix in Runde 2 (unten): alle Werte unter 0,1 |

### Behobene Fehler während der Integration

1. axe "scrollable-region-focusable" (serious) bei 390 px auf /asset-management-beratung/, /property-management-optimierung/ und /reporting-und-kennzahlen/: `.table-wrap` erhielt tabindex="0", role="region" und aria-label.
2. Pfeil der Textlinks klebte in `inline-flex`-Kontexten am Wort (Profil-Kapitel, Vertiefungsblock Start, Kontakt-Steps, Einblicke-Register): `.textlink::after` mit geschütztem Leerzeichen.
3. Doppelter Abschnittsabstand zwischen letztem Kapitel und Kurzprofil auf /profil/: Kapitelfolge ohne padding-bottom.
4. dt "Berührungspunkte" lief auf /zusammenarbeit/ bei 1440 px über die Beschreibungsspalte: weiche Trennstelle.
5. Erzwungene Umbrüche mitten im Wort in zweispaltigen Registern, Steps, Randspalten-H2, Szenario-Titeln und den Rechtstext-Überschriften (Testumgebung ohne Silbentrennung; in Browsern mit deutscher Silbentrennung unsicher): weiche Trennstellen in den betroffenen Überschriften, Liste in docs/CONTENT-PLAN-V2.md 12.13. Ein `&shy;` in einem Astro-Prop-String wurde zunächst wörtlich ausgegeben und durch einen JSX-Ausdruck mit U+00AD-Literal ersetzt.
6. Footer zwischen 600 und 860 px: "Investitionspriorisierung" überlief die Drittelspalte; jetzt zwei Spalten je Reihe.
7. Vertiefungsblock der Startseite bei 1024 px: Linkspalte mindestens 16 rem.
8. Ohne JavaScript bei 390 px verdeckte die dauerhaft ausgeklappte, sticky Navigation den Inhalt (FAQ nicht anklickbar): `html.no-js .site-header {position: static}` unterhalb des mobilen Bruchpunkts (damals 1080 px, seit Runde 2 1120 px).
9. scripts/screenshots.mjs: Seitenliste auf 17 Routen, Verursacher-Ausgabe bei horizontalem Scroll, Bilder vor der Aufnahme eager laden (Footer-Logo erschien in Ganzseitenaufnahmen leer, im Browser aber korrekt), Exit-Code.
10. scripts/a11y-check.mjs: Seitenliste auf 17 Routen.
11. Layoutsprung mobil (CLS 0,2174 bei 390 px, Quelle MAIN): die Klasse `no-js` wurde vom deferred Modul-Skript entfernt, also erst nach dem ersten Paint; bis zum mobilen Bruchpunkt (damals 1080 px, seit Runde 2 1120 px) war die Navigation zunächst ausgeklappt. Base.astro entfernt die Klasse jetzt in einem synchronen Inline-Skript direkt nach `<meta charset>`, vor dem ersten Paint. Die CSP in public/.htaccess erlaubt dafür `script-src 'unsafe-inline'` (bewusst belassen, docs/LAUNCH-CHECKLISTE.md).

### Nicht durchgeführt (fehlende Umgebung oder Berechtigung)

- Echte End-to-End-Testanfrage mit SMTP und Postfachkontrolle (Faktenliste Nr. 18). Offener Launchpunkt.
- HTTPS-Redirects, Security-Header, ErrorDocument 404 und Caching auf dem Zielserver.
- Lighthouse: keine Laborwerte erhoben. Von den Core Web Vitals wurde nur der CLS per PerformanceObserver gemessen (Tabelle oben), LCP und INP nicht.
- Nachmessung des CLS nach dem no-js-Fix (Nr. 11): in Runde 1 nicht möglich (dist vor der Änderung gebaut); in Runde 2 nachgeholt, siehe Stand v2, Runde 2.
- Reale Touch-Bedienung, Firefox, Safari, Windows-Schriftmetrik der Display-H1 (Segoe UI) bei 360 px; nur Chromium unter Linux geprüft.
- Screenreader-Stichprobe mit NVDA oder VoiceOver (Register, Kennbuchstaben, Kapitelnummern, Dossier-Kopfzeile).
- Reduzierte Bewegung (prefers-reduced-motion) nur per CSS-Review, nicht im Browser aufgenommen.
- Gefüllte Zustände: Porträts (keine Datei), Einblicke-Übersicht mit Beiträgen, Blöcke Begriffe und Verwandte Beiträge auf Beitragsseiten, Fallstudienfelder des Szenarios (kein freigegebener Beitrag, keine Freigabe).
- Search-Console-Verifikation, Sitemap-Einreichung, Rich-Results-Test.
- Textfreigabe und rechtliche Prüfung (Textinhalte wurden nicht bewertet, nur technisch geprüft).

## Stand v2, Runde 2 (Integrationsbuild 12.09.2026, nach den Korrekturagenten)

Testumgebung wie Runde 1: Linux-Container, Node 22.22, Chromium 1194 (Playwright 1.63), `astro preview` beziehungsweise lokaler Dateiserver gegen dist/, keine Silbentrennungswörterbücher im Test-Browser. Alle Werte unten stammen aus tatsächlich ausgeführten Läufen; Ausgabeverzeichnis der Screenshots: /tmp/claude-0/-home-user-timo-muellerhv-de/8bdbf45f-9dfc-56fd-94a7-792ba2de598c/scratchpad/shots-int2.

### Durchgeführt und bestanden (Runde 2)

| Prüfung | Ergebnis |
|---|---|
| `npm run build` | 17 Seiten, ohne Fehler |
| `npm run check` (astro check) | 0 Fehler, 0 Warnungen, 1 Hinweis (zuvor 20; `z` wird jetzt aus `astro/zod` importiert) |
| `npm test` (scripts/test-build.mjs, erweitert) | 17 HTML-Seiten, 14 Sitemap-URLs, 34 Glossar-ids, 16 eindeutige H1, 0 Fehler. Erster Lauf meldete 1 Fehler (404 ohne Canonical), Ursache war die fehlende Ausnahme im Test, nicht die Seite. Neu geprüft: 404 ohne Canonical und og:url mit noindex; og:url auf allen anderen Seiten; eindeutige H1; Überschriftenhierarchie ohne Sprünge; BreadcrumbList beginnt mit Start (Portfoliooptimierung: Start / Beratung / Portfoliooptimierung); Service-Knoten mit provider Person; sichtbarer Breadcrumb mit aria-current="page"; role="list" auf Checklisten, Registern und Verwandten Themen; seiteninterne Anker (unter anderem #vorgehen der AM-Seite); /einblicke/ mit "noindex, follow" und Canonical; Wortregeln der Prüfung (Netzwerk aus, Werktage, tatsächlichen Entwicklungsstand, gehört eine Hausverwaltung, ohne Dauerangaben nirgends; Keine Referenzen, sondern nur AM-Seite; Baustelle nur Profil; handwerklich nur Dienstleistersteuerung). Bestehende Prüfungen aus Runde 1 unverändert |
| Negativtest der neuen Prüfungen (Verstöße vorübergehend in dist injiziert, danach wiederhergestellt) | Canonical auf 404, h4 direkt nach h1, "Werktage", "noindex, nofollow" auf /einblicke/, entfernte id vorgehen bei bestehendem Seitennav-Link, Service ohne provider: alle sechs gemeldet; nach Wiederherstellung 0 Fehler |
| Screenshots `node scripts/screenshots.mjs` bei 360, 390, 768, 1024 und 1440 px, 17 Routen (85 Aufnahmen) | erster Lauf: 1 horizontaler Scroll (360 px, /property-management-optimierung/, 6 px, Verursacher "Wohnungseigentümergemeinschaften" in der Abgrenzung, per Playwright-Sonde lokalisiert); nach weichen Trennstellen zweiter Lauf: 0 horizontaler Scroll |
| Sichtprüfung der Ganzseitenaufnahmen (in Teilbildern gelesen) | Start, Profil, Kontakt, Portfoliooptimierung, Zusammenarbeit vollständig bei 390 und 1440 px; Investitionspriorisierung und Glossar bei 1440 px vollständig, bei 390 px in Stichproben (Hero, Seitennavigation, Matrix, Investitionsplan, Themenblöcke 01, 02 und 04). Keine abgeschnittenen Überschriften, keine überlagerten Elemente, keine leeren Flächen, keine falschen Rasterzuweisungen. Der sticky Kopf mitten im Hero der ersten Aufnahmen war ein Artefakt des Skripts (Scroll-Animation), behoben in scripts/screenshots.mjs |
| Detailaufnahmen (Playwright, Elementaufnahmen) | Bewertungsmatrix (SVG) bei 360 px lesbar; Tabellenhinweis "Tabelle seitlich verschiebbar" und figcaption bei 390 px auf AM, PM und Reporting sichtbar und lesbar (die caption im Scrollbereich ist so breit wie die Tabelle und wird mitgescrollt, die Kennzeichnung steht zusätzlich in der figcaption außerhalb); Pfeile der Textlinks am letzten Wort bei Umbruch (Start Vertiefungen 390 und 1024 px, Profil Kapitel 390 px, Kontakt und Danke Schritt 03 390 px); zweispaltige Register mit gleichmäßigen Abständen (Start Für wen und KI bei 768, 1024 und 1440 px; AM Anlässe und Unterlagen bei 768, 1024 und 1440 px; Situationen Portfolio und Dienstleistersteuerung bei 768 und 1024 px); Steuerungskette 3 x 3 bei 768 und 1024 px; Datenbedarf, Interessen, Glossar-Block Wirtschaftlichkeit, Berichtsaufbau, Pilot, Eskalation bei 390 und 1440 px. Befunde: Wortbrüche bei 1024 px (AM Anlässe "Investitionspriorisierung" in Text und Linktext, PM und DS Situationen "Leistungsbeschreibung") und ein allein stehender Pfeil bei 1440 px (AM Anlässe), behoben durch weiche Trennstellen |
| Wortbruch-Prüfung (Scratch-Skript: Range je Wort, mehrere ClientRects ohne weiche Trennstelle) über alle 17 Routen bei 360, 390, 768, 1024 und 1440 px | vor der Korrektur 4 Treffer (alle bei 1024 px), danach 0 |
| Orange-Gesten je Abschnitt | in den gesichteten Abschnitten je eine (Eyebrow-Marker, erster Schritt der Steps oder Checklistenmarker); Eyebrows über Steps und Checklisten als `eyebrow--still` |
| `node scripts/a11y-check.mjs` (axe-core 4.13, wcag2a, wcag2aa, wcag21aa, wcag22aa, best-practice) bei 390 und 1440 px, 17 Routen, zwei Läufe (vor und nach den Trennstellen) | 0 Verstöße; Skip-Link erster Tab-Stopp, Fokus auf #inhalt, Untermenü per Enter geöffnet, Escape schließt, drei Clientfehler beim leeren Absenden, kein horizontaler Scroll bei 720 px (200 Prozent Zoom auf 1440) |
| Ohne JavaScript (Playwright, javaScriptEnabled false) bei 390 und 1440 px auf /asset-management-beratung/, /kontakt/, /zusammenarbeit/ | `html.no-js` gesetzt; Navigation display block mit den Einträgen Beratung, Profil, Einblicke, Portfolio besprechen; Untermenü als details mit acht Links, per Klick auf summary geöffnet; FAQ als details, per Klick geöffnet, Antwort sichtbar; Formular method="post", action="/api/contact.php", neun Felder; Seitennavigation 9 beziehungsweise 8 Links; Kopf bei 390 px statisch, bei 1440 px sticky |
| CLS nach dem no-js-Fix (scratchpad/cls.mjs: PerformanceObserver layout-shift ohne Eingaben, 150 ms Latenz, 200 kbit/s Download, 100 kbit/s Upload, Auswertung 1,5 s nach load) | mobil 390 x 844 px: / 0, /kontakt/ 0, /profil/ 0,0012 (Quelle A.brand); Desktop 1440 x 900 px: / 0, /kontakt/ 0,0062, /profil/ 0,0078 (Quelle NAV.site-nav). Alle unter 0,1; zuvor mobil 0,2174. Navigation beim ersten Paint mit display block |
| Wortregeln der Prüfung im dist (grep) | "handwerklich" nur auf /dienstleistersteuerung/ (Description, FAQ-Frage und Antwort als Kostenverständnis); "Baustelle" als eigenes Wort nur im Profil-Lead, "Baustelleneinrichtung" als Fachbegriff auf Investitionspriorisierung und im Glossar; "Netzwerk aus", "ohne Dauerangaben", "Werktage", "tatsächlichen Entwicklungsstand", "gehört eine Hausverwaltung" nirgends; "Keine Referenzen, sondern" nur auf /asset-management-beratung/; "mit Bezügen zu" auf Start, Dienstleistersteuerung, Zusammenarbeit |
| JSON-LD (Scratch-Auswertung aller 17 Seiten) | BreadcrumbList auf allen Unterseiten mit Start als erstem Item; Service auf den sieben Fach- und Vertiefungsseiten mit provider #person; FAQPage auf AM, PM, KI, Portfolio, Investitionspriorisierung, Dienstleistersteuerung, Reporting, Zusammenarbeit, Profil; ProfilePage auf /profil/; DefinedTermSet auf /glossar/; alle H1 eindeutig, keine Überschriftensprünge |
| Sitemap und Indexierung | 14 URLs; /einblicke/ mit "noindex, follow", Canonical selbstreferenzierend, nicht in der Sitemap; /404.html ohne Canonical und og:url, noindex; /danke/ noindex; Titles bis 65 und Descriptions bis 160 Zeichen, eindeutig |
| Größenbudget Startseite | 72 KB unkomprimiert (HTML plus referenzierte lokale Assets) |

### Behobene Fehler in Runde 2

1. scripts/test-build.mjs meldete "kein Canonical" für /404.html, obwohl die Fehlerseite absichtlich ohne Canonical gebaut wird: Ausnahme für die Fehlerseite (jetzt Pflicht: kein Canonical, kein og:url, noindex).
2. Horizontaler Scroll bei 360 px auf /property-management-optimierung/ (6 px): "Wohnungseigentümergemeinschaften" in der Abgrenzung mit weichen Trennstellen.
3. Wortbrüche mitten im Wort bei 1024 px in zweispaltigen Registern (AM Anlässe, PM und DS Situationen) und allein stehender Textlink-Pfeil bei 1440 px (AM Anlässe): weiche Trennstellen in "Investitionspriorisierung" und "Leistungsbeschreibung".
4. scripts/screenshots.mjs: sticky Kopf stand in den Ganzseitenaufnahmen mitten im Hero, weil scrollTo bei `scroll-behavior: smooth` als Animation weiterlief; jetzt `scroll-behavior: auto` und ein Frame Wartezeit.
5. Wortregel "Baustelle" (nur Profil-Lead): zwei eigenständige Verwendungen auf Investitionspriorisierung und im Glossar zu "ohnehin laufenden Maßnahme" umformuliert; das Kompositum Baustelleneinrichtung bleibt.
6. astro check: 20 Deprecation-Hinweise zu `z` aus astro:content; Import aus `astro/zod`.
7. Dokumentation nachgezogen: DESIGN-SPEC-V2 6.1 (Selektor `[aria-current]`) und 7.7 (Zeile Zusammenarbeit Hero), ARCHITEKTUR (AM-Seite mit Vorgehen und Seitennav), SEO-MATRIX (interne Links der AM-Seite), LAUNCH-CHECKLISTE (CLS-Kästchen mit Werten), DEPLOYMENT (Caching und Sicherheitsheader), CONTENT-PLAN-V2 12.2, 12.8 und 12.15.

### Nicht durchgeführt (Runde 2)

- Echte End-to-End-Testanfrage mit SMTP und Postfachkontrolle (Faktenliste Nr. 18). Offener Launchpunkt.
- HTTPS-Redirects, Security-Header, ErrorDocument 404 und Caching auf dem Zielserver.
- Lighthouse: keine Laborwerte; LCP und INP nicht gemessen (nur CLS, siehe oben; die im CLS-Skript mitgeschriebenen LCP-Zeiten gelten für die gedrosselte Testverbindung und sind kein Laborwert nach Lighthouse-Bedingungen).
- Reale Touch-Bedienung, Firefox, Safari, Windows-Schriftmetrik der Display-H1 (Segoe UI) bei 360 px; nur Chromium unter Linux geprüft.
- Screenreader-Stichprobe mit NVDA oder VoiceOver.
- Reduzierte Bewegung nur per CSS-Review, nicht im Browser aufgenommen.
- Ganzseitenaufnahmen von Investitionspriorisierung und Glossar bei 390 px nur in Stichproben gesichtet (siehe oben); die übrigen Routen (AM, PM, KI, Dienstleistersteuerung, Reporting, Einblicke, Danke, Rechtstexte, 404) in Runde 2 nur über Skriptprüfungen (horizontaler Scroll, Wortbruch, axe) und Detailaufnahmen, nicht als vollständige Ganzseiten-Sichtprüfung.
- Gefüllte Zustände: Porträts (keine Datei), Einblicke-Übersicht mit Beiträgen, Blöcke Begriffe und Verwandte Beiträge, Fallstudienfelder des Szenarios.
- Search-Console-Verifikation, Sitemap-Einreichung, Rich-Results-Test.
- Textfreigabe und rechtliche Prüfung (Inhalte nur technisch geprüft).

## Stand v2, Runde 3 (Integrationsbuild 12.09.2026, nach den Korrekturagenten der zweiten Prüfung)

Testumgebung wie Runde 1 und 2: Linux-Container, Node 22.22, Chromium 1194 (Playwright 1.63), `astro preview` (Screenshots) beziehungsweise lokaler Dateiserver gegen dist/ (axe, Messskripte). Systemschrift des Containers ist DejaVu Sans (breiter als Segoe UI und SF), keine Silbentrennungswörterbücher. Alle Werte stammen aus tatsächlich ausgeführten Läufen. Ausgabeverzeichnis der Screenshots: /tmp/claude-0/-home-user-timo-muellerhv-de/8bdbf45f-9dfc-56fd-94a7-792ba2de598c/scratchpad/shots-int3 (Ganzseiten in fünf Breiten, Kopfbreiten 1081, 1100 und 1120 px, Aufnahmen des geöffneten Menüs), Teilbilder für die Sichtprüfung in slices-int3. Der mobile Bruchpunkt des Kopfs liegt seit Runde 2 bei 1120 px; Runde 1 nannte 1080 px.

### Durchgeführt und bestanden (Runde 3)

| Prüfung | Ergebnis |
|---|---|
| `npm run build` | 17 Seiten, ohne Fehler (drei Läufe: Eingangsstand, nach den Textlink-Änderungen, Endstand) |
| `npm run check` (astro check) | 0 Fehler, 0 Warnungen, 1 Hinweis (Deprecation von `z.string().url()` in src/content.config.ts, keine Funktionsauswirkung) |
| `npm test` (scripts/test-build.mjs) | 17 HTML-Seiten, 14 Sitemap-URLs, 34 Glossar-ids, 16 eindeutige H1, 811 interne Links und Anker ohne Fehlziel, 0 Fehler. Die Prüfungen aus Runde 1 und 2 nach Designspezifikation 11.2 und Inhaltsplan 8 (Porträt-Slots je Seite, Dateinamen und Lizenzeinträge in src/assets/portraits, alt-Pflicht in `.portrait`, Glossar-ids aus Frontmatter und aus allen href="/glossar/#..." gegen GLOSSAR und GLOSSAR_ALIAS, figcaption "Schematisch" in jeder figure, Description 160, 15 indexierbare Routen mit /einblicke/ nur bei freigegebenem Beitrag, kein EUR und kein Euro-Zeichen, kein Honorar mit Zahl, kein kostenfrei, Ohne-JavaScript-Regeln, Wortregeln) sind enthalten und bestanden; Runde 3 hat den Test nicht erweitert |
| Screenshots `node scripts/screenshots.mjs` bei 360, 390, 768, 1024 und 1440 px, 17 Routen (85 Aufnahmen), zwei Läufe (Eingangsstand und Endstand) | 0 horizontaler Scroll |
| Screenshots bei 1081, 1100 und 1120 px (Kopfprüfung; Breiten jetzt als drittes Argument des Skripts, 51 Aufnahmen) | 0 horizontaler Scroll; Kopf in allen drei Breiten mit Marke und Toggle in einer Zeile, Navigation eingeklappt |
| Sichtprüfung der Ganzseitenaufnahmen in Teilbildern: Start, Profil, Portfoliooptimierung, Investitionspriorisierung, Zusammenarbeit, Glossar, Kontakt vollständig bei 390 und 1440 px (109 Teilbilder), Start zusätzlich bei 360 px, Kopf bei 1100 px auf Zusammenarbeit und Kontakt | Keine abgeschnittenen Überschriften, keine überlagerten Elemente, keine leeren Flächen, keine falschen Rasterzuweisungen. Zwei Befunde behoben (unten, Nr. 3): Zusatzabstand vor der letzten Absatzzeile mit Textlink auf Kontakt und Zusammenarbeit. Beobachtung ohne Änderung: Die Display-H1 der Startseite steht bei 1440 px in DejaVu Sans fünfzeilig (Asset- / Management- / Beratung für / Immobilien- / portfolios.), weil "Asset-Management-" in 66,5 px nicht in die Spalte gc-1-7 passt; nichts ist abgeschnitten, die weiche Trennstelle greift, in Segoe UI und SF ist die Zeile schmaler (dort ungeprüft) |
| Kopfhöhe `.site-header` (ohne die 3 px Kennlinie darüber, die mitscrollt) | 360, 390 und 414 px: 73,3 px (Innenhöhe 72,3 px plus 1 px Linie; Unterzeile der Marke zweizeilig in 11 px); 480 px: 73 px; 1081, 1085, 1100 und 1120 px: 73 px mit Toggle und eingeklappter Navigation; 1121 und 1440 px: 73 px mit Desktop-Navigation. `--header-h` (72 px) entspricht der Innenhöhe |
| `scroll-padding-top` und `.sticky-rand` | `scroll-padding-top` 88 px (72 + 16), 15 px unter der Kopfunterkante von 73 px; `.sticky-rand` ab 861 px `position: sticky; top: 104px` (72 + 32), darunter statisch. Beide Werte liegen über der gemessenen Kopfhöhe |
| Shift+Tab in ein Element oberhalb des Viewports (Link "KI im Immobilienmanagement" unter Verwandte Themen auf /portfoliooptimierung/; Ausgang: Fokus auf dem folgenden Link "Zusammenarbeit" am oberen Viewportrand) | 390 und 1440 px: Das Ziel steht nach Shift+Tab mit Oberkante 468 px, 395 px unter der Kopfunterkante; nicht hinter dem Kopf |
| Anker unter dem Kopf (Deep-Links ohne Scroll-Animation, Oberkante des Ziels) | /portfoliooptimierung/#fragen (Seitennavigation): 88 px, 15 px unter dem Kopf, Haarlinie 1 px des `.section--linie`-Containers sichtbar; /asset-management-beratung/#honorar (details): 88 px, Haarlinie 1 px (Oberkante des details) sichtbar, details geschlossen; /zusammenarbeit/#interessen und /asset-management-beratung/#selbstpruefung (Flächenabschnitte ohne Linie): 88 px. Jeweils bei 390 und 1440 px |
| Mobiles Menü per Tastatur (360 x 780 und 390 x 844 px, /portfoliooptimierung/) | Tab-Stopps: Skip-Link, Marke, Toggle "Menü" (Enter öffnet, `aria-expanded="true"`, Kopf 296 px hoch mit `overflow-y: auto`), Summary "Beratung" (Enter öffnet die Gruppe), acht Untermenüpunkte, Profil, Einblicke, Kontaktbutton "Portfolio besprechen" (erreicht, im Viewport). Die Gruppe bleibt beim Weitertabben offen; der focusout-Handler wirkt nur im Desktop-Overlay. Aufnahmen menu-offen-360.png und menu-offen-390.png |
| Fünf-Sekunden-Test Start (Unterkanten in px; Kopf einschließlich Kennlinie endet bei 76 px) | 390 x 844 px: Eyebrow 150, H1 295 (vier Zeilen), Leitzeile 390, Lead 618, Button "Portfolio besprechen" 692, Textlink 745, E-Mail-Zeile 792: Name, Thema, Leitzeile, Button und E-Mail auf dem ersten Bildschirm. 360 x 780 px: Eyebrow 150, H1 328 (fünf Zeilen in 32 px), Leitzeile 423, Lead 676, Button 750, Textlink 803, E-Mail-Zeile 850: Name, Thema, Leitzeile und Button auf dem ersten Bildschirm, die E-Mail-Zeile 70 px darunter (siehe Einschränkungen) |
| Fünf-Sekunden-Test Profil (Vorgabe: höchstens eine Scrollbewegung) | 360 x 780 px: Porträt 572, H1 "Timo Müller" 670 (erster Bildschirm), Lead 902, E-Mail in der Funktionsliste 1236, Funktionsliste 1253 (innerhalb einer Scrollbewegung, unter 1560 px); 390 x 844 px: H1 670, Lead 903, E-Mail 1210 |
| Zielgrößen (Playwright, kleinste Höhe je Selektor über alle 17 Seiten, nach den Textlink-Änderungen) | 360 px: `.textlink` 44,8, `.cta__mail a` 49,6, `.cta__ablauf a` 75,2, `.kontakt-direkt__link` 44,8, `.footer-nav a` 44, `.seitennav a` 44, `.verwandt a` 51,2, `.breadcrumb a` 44, `.faq summary` 76,8, `.btn` 49,6, `.begriff__ort a` 44,8, `.weiterlesen a` 87,2. 1440 px: `.textlink` 44,8, `.cta__mail a` 56, `.cta__ablauf a` 49,6, `.kontakt-direkt__link` 44,8, `.footer-nav a` 44, `.site-nav__link` 48, `.submenu a` 70,8, `.seitennav a` 44, `.verwandt a` 52,8, `.breadcrumb a` 44, `.faq summary` 76,8, `.btn` 45,2. Kein Bedienelement unter 44 px |
| Überlappende Zielflächen (Fragmente per getClientRects aller Links, Buttons und Summaries; Inhalte geschlossener details ausgenommen) bei 360, 390, 1024 und 1440 px | Vor der Korrektur 2 Überlappungen (Glossar-Link "Sparring" und Textlink "Zu den Mandatsformen" im selben Absatz auf /zusammenarbeit/, 76 x 6 px bei 1024 und 1440 px); nach der Korrektur 0 |
| `node scripts/a11y-check.mjs` (axe-core 4.13, wcag2a, wcag2aa, wcag21aa, wcag22aa, best-practice) bei 390 und 1440 px, 17 Routen, zwei Läufe (Eingangsstand, Endstand) | 0 Verstöße; Skip-Link erster Tab-Stopp, Fokus auf #inhalt, Untermenü per Enter geöffnet, Escape schließt, drei Clientfehler beim leeren Absenden, kein horizontaler Scroll bei 720 px (200 Prozent Zoom auf 1440) |
| Ohne JavaScript (Playwright, javaScriptEnabled false) bei 390 und 1440 px auf /asset-management-beratung/, /kontakt/, /glossar/ | `html.no-js` gesetzt; Navigation `display: block` mit Beratung, Profil, Einblicke, Portfolio besprechen; Untermenü als details mit acht Links, per Klick geöffnet und sichtbar; FAQ als details, per Klick geöffnet, Antwort sichtbar; Formular method="post", action="/api/contact.php", neun Felder; Seitennavigation sechs beziehungsweise sieben Links; Kopf bei 390 px statisch, bei 1440 px sticky |
| CLS (scratchpad/cls.mjs, gedrosselte Verbindung wie Runde 2) nach den Textlink-Änderungen | mobil 390 x 844 px: / 0, /kontakt/ 0, /profil/ 0; Desktop 1440 x 900 px: / 0, /kontakt/ 0,0077, /profil/ 0,0078 (Quelle NAV.site-nav). Alle unter 0,1 |
| JSON-LD (alle 17 Seiten geparst) | WebSite, Organization, Person überall; BreadcrumbList auf allen Unterseiten außer den Rechtstexten; Service und FAQPage auf den vier Fachseiten und den drei Vertiefungen; FAQPage auf /zusammenarbeit/ (fünf Einträge) und /profil/ (vier); ProfilePage auf /profil/; DefinedTermSet auf /glossar/. Keine Gedankenstriche im JSON-LD (Build-Test) |
| Wortregeln im dist (Build-Test, nach den Textänderungen der Runde 2) | "handwerklich" nur auf /dienstleistersteuerung/; "Netzwerk aus", "Werktage", "tatsächlichen Entwicklungsstand", "gehört eine Hausverwaltung", "ohne Dauerangaben" nirgends; "Keine Referenzen, sondern" nur AM-Seite; "Baustelle" nur Profil-Lead |
| Flag-Stichprobe im dist | kein "Fallstudie", kein "kostenfrei" oder "kostenlos", kein EUR (Wortgrenze) und kein Euro-Zeichen, kein Abschnitt #entwicklungsstand, kein PDF-Button, kein LinkedIn-Link, keine Timeline, keine Begriffe Festpreis, Pauschalhonorar, Provision; Register Interessen mit drei Regeln (01 bis 03); FAQ Zusammenarbeit fünf, Profil vier Einträge. Treffer für "Ankauf" (Entscheidungsfelder auf Start und Profil), "vor Ort" (Glossar Property Management, Szenario Dienstleistersteuerung) und "Löschung" (Datenschutzerklärung) sind keine Flag-Inhalte |
| Seitennavigation nach der Reduktion auf höchstens sechs Anker | AM (Fragestellungen, Anlässe, Selbstprüfung, Mandatsformen, Entscheidungsunterlagen, Fragen und Antworten), Investitionspriorisierung, Dienstleistersteuerung, Reporting und Kennzahlen (je Passende Situationen, Leistungsumfang, zwei Methodikanker, Szenario, Fragen und Antworten), Zusammenarbeit (Ablauf, Vorbereitung, Datenbedarf, Vertraulichkeit und Vertrag, Interessen, Fragen und Antworten): sechs Anker, bei 1440 px eine Zeile, bei 390 px drei Zeilen (Investitionspriorisierung erst nach Verkleinerung des Spaltenabstands unter 641 px auf --s-5, zuvor vier). Glossar sieben (Themenblöcke, Plan 3.5), KI- und PM-Seite sieben (Slot-Abschnitte), Portfoliooptimierung fünf (Standard). Der Build-Test auf seiteninterne Anker ist bestanden |

### Einschränkungen (Runde 3)

- Fünf-Sekunden-Test bei 360 x 780 px: Die E-Mail-Zeile des Start-Heros liegt mit Unterkante 850 px unterhalb des ersten Bildschirms (780 px); Button "Portfolio besprechen" (750 px) und damit der direkte Kontaktweg liegen darauf. Ursachen: fünfzeilige Display-H1 in 32 px (Untergrenze der Spezifikation, keine Verkleinerung), achtzeiliger Lead in 17 px und der zweizeilige Aktionsblock (Button und Textlink brechen bei 328 px Inhaltsbreite untereinander). Ohne Änderung von Wortlaut, Schriftuntergrenze oder DOM-Reihenfolge (Masterprompt 7A, Designspezifikation 6.2) ist der Wert nicht zu erreichen; die vom Korrekturagenten genannte DOM-Umstellung Button, E-Mail, Textlink brächte die E-Mail rechnerisch auf etwa 797 px und reichte allein nicht. Entscheidung offen (docs/CONTENT-PLAN-V2.md 12.16). Bei 390 x 844 px bestanden.
- Umbrüche sind in DejaVu Sans gemessen; die Display-H1 bei 1440 px steht dort fünfzeilig, die Seitennavigation der Investitionspriorisierung bei 390 px dreizeilig. In Segoe UI und SF fallen beide schmaler aus.

### Behobene Fehler in Runde 3

1. Seitenregeln mit `padding-block: 0.6rem` (Glossar 0.625rem) an `.textlink` entfernt, weil die globale Regel (inline-block, `padding-block: 0.65rem`, gleich großer negativer Außenabstand) 44,8 px liefert: profil.astro (`.kapitel__text .textlink`), index.astro (`.vertiefungen .textlink`, `.register--einblicke .textlink`), einblicke/index.astro (`.register--einblicke .textlink`), glossar.astro (`.begriff__ort a`). kontakt.astro und danke.astro (`.ablauf .steps .textlink`): `margin-top: calc(var(--s-3) - 0.65rem)`. Der `.kontakt-direkt__link` hatte keine Seitenregel mehr und misst 44,8 px (Korrekturbefund 8.1).
2. Seitenregeln, die `margin-top` oder `margin-bottom` an `.textlink` setzten und den Linktext um 10,4 px verschoben, um 0.65rem reduziert (sichtbarer Abstand bleibt): index.astro `.ansatz__text .textlink`, zusammenarbeit.astro `.rahmen .kapitel__text .textlink`, reporting-und-kennzahlen.astro `.quelle .textlink`, dienstleistersteuerung.astro `.rollen .textlink, .kennzahlarten .textlink`, investitionspriorisierung.astro `.plan-aside .textlink:not(:last-child)` (Korrekturbefund 8.2).
3. Textlinks am Ende eines Absatzes (kontakt.astro `.ablauf__mehr .textlink`, zusammenarbeit.astro `.ablauf__mandatsformen .textlink`): `display: block; width: fit-content; margin-top: calc(var(--s-2) - 0.65rem)` nach dem Muster `.selbstpruefung__schluss` der AM-Seite. Zuvor zeigte der Absatz eine Leerzeile vor der letzten Zeile (Screenshots 1440 px), und auf /zusammenarbeit/ überlappte die Zielfläche des Textlinks den Glossar-Link "Sparring" in der Zeile darüber (76 x 6 px).
4. asset-management-beratung.astro `.vertiefung`: Zeilenabstand `calc(var(--s-2) + 1.3rem)`, damit sich die 44-px-Zielflächen untereinander stehender Textlinks beim Umbruch nicht überlappen, sondern 8 px Abstand halten (Korrekturbefund 8.3).
5. Seitennav.astro: `column-gap: var(--s-5)` unter 641 px (24 statt 32 px), damit die sechs Anker der Investitionspriorisierung bei 390 px in drei statt vier Zeilen stehen; Abstand zwischen Zielen bleibt über 8 px (Auftrag 7.6). Ab 641 px unverändert 32 px.
6. Header.astro: Rahmen des Menü-Toggles in `--c-text-3` (5,24:1) wie Formularfelder und Sekundärbutton statt `--c-linie` (1,5:1). Kein WCAG-Verstoß zuvor (Text "Menü" und Balkensymbol sind die Merkmale), Angleichung an die Kontrasttabelle 2.3 (Korrekturbeobachtung 8.5).
7. src/data/glossar.ts: satzinitiales "Sie" in den Einträgen Vertraulichkeitsvereinbarung ("Die Vereinbarung steht vor jedem Datenaustausch.") und Leistungsbeschreibung ("Die Leistungsbeschreibung ist der erste von drei Steuerungspunkten ...") aufgelöst, weil "Sie" auf einer Website mit Sie-Anrede als Anrede gelesen werden kann; analog zum Korrekturbefund 3 der Runde 2 (Beobachtung 8.10 b).
8. scripts/screenshots.mjs: Breiten als drittes Argument oder Umgebungsvariable WIDTHS (Standard 360,390,768,1024,1440), Kopfprüfung mit `1081,1100,1120`.
9. src/layouts/Base.astro: Kommentar zum mobilen Bruchpunkt von 1080 auf 1120 px angeglichen (Korrekturbefund 8.4).
10. Dokumentation nachgezogen: docs/CONTENT-PLAN-V2.md (6.1, 12.1 bis 12.6, 12.8 bis 12.10, neu 12.16), docs/DESIGN-SPEC-V2.md (1.2, 1.6, 2.3, 4.1, 5.4, 6.1, 6.2, 6.3, 6.9, 6.11, 9.1, 10, 11.1), docs/DESIGN-SYSTEM.md (Statuszeile, Farbtokens, Kontrasttabelle, Typografie, Register, Header, Seitennav, Prüfung), docs/SEO-MATRIX.md (AM, Zusammenarbeit, Beitragsseite, Technik, Prüfsatz), docs/FAKTENLISTE.md (Teil B, Nr. 1, Nr. 7, Nr. 39), docs/ARCHITEKTUR.md (Statuszeile, Ankeranzahl), docs/LAUNCH-CHECKLISTE.md (Fünf-Sekunden-Test), dieser Bericht.

### Nicht durchgeführt (Runde 3)

- Echte End-to-End-Testanfrage mit SMTP und Postfachkontrolle (Faktenliste Nr. 18). Offener Launchpunkt.
- HTTPS-Redirects, Security-Header, ErrorDocument 404 und Caching auf dem Zielserver.
- Lighthouse; LCP und INP nicht gemessen (nur CLS wie oben).
- Prüfung der kanonischen Host-Variante der HVM-Website (www oder Apex): aus der Build-Umgebung nicht möglich, der Agent-Proxy beantwortet beide Varianten mit 403 (Runde 2). Manuell durch Timo Müller oder die IT; bis dahin bleibt OPERATOR.website unverändert.
- Reale Touch-Bedienung, Firefox, Safari, Windows- und macOS-Schriftmetrik (Display-H1 bei 360 und 1440 px, Seitennavigation bei 390 px); nur Chromium unter Linux mit DejaVu Sans geprüft.
- Screenreader-Stichprobe mit NVDA oder VoiceOver; reduzierte Bewegung nur per CSS-Review.
- Ganzseiten-Sichtprüfung der Routen AM, PM, KI, Dienstleistersteuerung, Reporting, Einblicke, Danke, Impressum, Datenschutz und 404 in Runde 3 nur über die Skriptprüfungen (horizontaler Scroll, axe, Zielgrößen, Überlappungen, Anker), nicht als Bildsichtung; Runde 1 und 2 hatten sie gesichtet.
- Gefüllte Zustände: Porträts (keine Datei), Einblicke-Übersicht mit Beiträgen, Blöcke Begriffe und Verwandte Beiträge, Fallstudienfelder des Szenarios, Flag-Abschnitte mit Freigabe.
- Search-Console-Verifikation, Sitemap-Einreichung, Rich-Results-Test.
- Textfreigabe und rechtliche Prüfung (Inhalte nur technisch geprüft); Fünf-Minuten-Test des Entscheiders (inhaltliche Bewertung, nicht Gegenstand der technischen Prüfung).

## Stand v2, Abschlussverifikation (12.09.2026, nach Abschluss der Prüfrunden)

Eigener Prüflauf nach Abschluss aller Agentenrunden, vor dem Commit:

| Prüfung | Ergebnis |
|---|---|
| `npm run build` | 17 Seiten, fehlerfrei |
| `npx astro check` | 0 Fehler, 0 Warnungen |
| `npm test` | 811 interne Links ohne totes Ziel, 14 Sitemap-URLs, 34 Glossar-ids, 16 eindeutige H1, 0 Fehler; /einblicke/ im Leerzustand noindex, follow und nicht in der Sitemap; alle Porträt-Slots als Platzhalter gebaut |
| `node scripts/a11y-check.mjs` | 0 axe-Verstöße bei 390 und 1440 px auf 17 Seiten; Skip-Link, Untermenü per Tastatur, Escape, Clientvalidierung, kein horizontaler Scroll bei 720 px |
| `node scripts/screenshots.mjs` | 17 Seiten in 360, 390, 768, 1024, 1440 px, kein horizontaler Scroll |
| Messung Kopfbereich | 73 px bei 360, 390, 1085 und 1440 px; geöffnetes mobiles Menü scrollbar (overflow auto, max-height Viewport) |
| Messung Startseite mobil | Primärbutton bei 360 px bis 750 px sichtbar (Viewport 800 px); E-Mail-Zeile knapp unter dem ersten Bildschirm |
| Formularfelder | Rahmen #6B6C70 auf Weiß (rechnerisch 5,3:1) |
| Seitennavigation | 5 bis 6 Anker einzeilig bei 1440 px auf Fachseiten und Vertiefungen; Glossar zweizeilig (7 Blöcke) |
| Sicherheitsrelevante Dateien | public/api/contact.php unverändert (git diff leer); ContactForm: Feldnamen, ids, action, Honeypot, Zeitstempel und Skript unverändert |
| Rechtstexte | Impressum und Datenschutz inhaltlich unverändert, nur Rasterzuweisung und weiche Trennstelle in der H1 |
| `npm run lint:php` | Pfad in package.json auf public/api/contact.php korrigiert, Syntax fehlerfrei |

Nach der Verifikation korrigiert: Start-H1 bei 1440 px von fünf auf drei Zeilen (Textspalte gc-1-8, Display-Obergrenze 60 px), Wortwiederholung im Profil (Kapitel 01), Druckstil für Profil und Fachseiten ergänzt (Masterprompt Abschnitt 9, Druckfassung ohne Navigation, Kontaktabschluss und Platzhalter).

Weiterhin nicht durchgeführt: SMTP-Versand end-to-end, Zielserver (Redirects, Header, 404), Lighthouse, Screenreader, Windows- und macOS-Schriftmetrik, Firefox und Safari, reale Touch-Bedienung.

## Ergänzung 13.09.2026: Seite /kurzfakten/ und llms.txt

Build 18 Seiten, `npx astro check` 0 Fehler, `npm test` 0 Fehler (15 Sitemap-URLs, 17 eindeutige H1), axe 0 Verstöße auf 18 Seiten, kein horizontaler Scroll bei 390 und 1440 px auf der neuen Seite. Inhalte ausschließlich aus der Faktenliste Nr. 1 bis 11 und bestehenden Seiten; Stand-Datum wird manuell gepflegt.
