# Architektur und Seitenstruktur

Stand: 12.09.2026. Ergänzt um die Seitenstruktur v2 (docs/CONTENT-PLAN-V2.md) und das Designsystem v2 (docs/DESIGN-SPEC-V2.md). Stand nach Integrationsbuild Runde 3 (12.09.2026), gegen dist geprüft (docs/TESTBERICHT.md, Stand v2, Runde 3).

## Entscheidung
Neues, unabhängiges Projekt. Keine bestehende HVM-Anwendung im Repository (Repository war leer). Statisch erzeugte Mehrseitenwebsite mit Astro 7 (TypeScript) plus einem kleinen PHP-Endpunkt für das Kontaktformular. Node nur für den Build. Ergebnis (dist/) ist auf klassischem PHP-Webhosting per SFTP bereitstellbar. Kein Framework-Server, keine Datenbank, kein CMS, kein Benutzerkonto, kein zusätzliches JavaScript für Inhalte.

Offen: Die tatsächlichen Hostingfähigkeiten (Apache mit mod_rewrite/mod_headers, PHP-Version, ausgehender SMTP) sind vor dem Launch zu prüfen. Die .htaccess ist für Apache geschrieben; bei nginx sind Redirects, Header und 404 in der Serverkonfiguration nachzubilden.

## Verzeichnisse
- `src/pages/` Routen (eine Datei je Seite, `einblicke/[slug].astro` für Beiträge, `robots.txt.ts` generiert)
- `src/layouts/Base.astro` HTML-Grundgerüst, Meta, Canonical, robots-Meta, JSON-LD (WebSite, Organization, Person), Header, Footer
- `src/layouts/Fachseite.astro` Layout für die vier Fachseiten und die drei Vertiefungen (Abschnittsfolge siehe unten)
- `src/components/` Header, Footer, Hero, Breadcrumb, Seitennav, Cta, Faq, Timeline, ContactForm, Portrait, Szenario, Autorenkasten
- `src/data/site.ts` zentrale Daten (Betreiber, Person, Navigation mit Gruppen, Footer-Spalten, E-Mail)
- `src/data/glossar.ts` Glossareinträge (id, begriff, block, definition, bedeutung, heimatort) und Themenblöcke
- `src/data/portraits.ts` Alt-Texte, Bildunterschriften und Bildausschnitt je Porträtdatei
- `src/lib/seo.ts` JSON-LD-Bausteine; `src/lib/einblicke.ts` Filter und Helfer für Beiträge; `src/lib/portraits.ts` Erkennung der Porträtdateien zur Buildzeit
- `src/content/einblicke/*.md` Fachbeiträge mit Frontmatter (`status: entwurf | pruefung | freigegeben`, `glossar`, `verwandt`); Schema in `src/content.config.ts`
- `src/assets/portraits/` Ablage für freigegebene Porträts (`portrait-1` bis `portrait-3`), README mit Shooting-Brief
- `src/styles/tokens.css`, `global.css` Design-Tokens und Basisstile (siehe docs/DESIGN-SYSTEM.md)
- `public/` statische Dateien: `.htaccess`, `api/contact.php`, Favicon, OG-Bild, HVM-Logo
- `config/contact.config.example.php` Vorlage der Serverkonfiguration (Kopie außerhalb des Webroots)
- `scripts/` Build-Test, Screenshots, Barrierefreiheitsprüfung
- `docs/` Dokumentation

## Routen
| Route | Rolle | Aufgabe | Layout | Index |
|---|---|---|---|---|
| / | Startseite | Personenmarke, Nutzenversprechen, Für wen, drei Mandate, Arbeitsweise, Szenario "So würde ich vorgehen", Kontakt | Base | ja |
| /asset-management-beratung/ | Fachseite, Hub | Beratungsansatz, Fragestellungen, Eigentümerziele, Anlässe, Selbstprüfung (#selbstpruefung), drei Mandatsformen (#mandate), Vorgehen (#vorgehen), Entscheidungsunterlagen mit Muster Entscheidungsvorlage, Abgrenzung, FAQ; Seitennav mit sechs Ankern (Fragestellungen, Anlässe, Selbstprüfung, Mandatsformen, Entscheidungsunterlagen, Fragen und Antworten) | Base (eigener Aufbau) | ja |
| /portfoliooptimierung/ | Fachseite | Wirtschaftliche und operative Verbesserung, CAPEX und OPEX erläutert, Priorisierungslogik verlinkt | Fachseite | ja |
| /property-management-optimierung/ | Fachseite | Umsetzungsebene: Prozesse, Zuständigkeitsmatrix (schematisch), Eskalation, Dienstleister und Kennzahlen verlinkt | Fachseite | ja |
| /ki-immobilienmanagement/ | Fachseite | KI-Anwendungsfelder mit Freigabekonzept, Pilotinhalt, Entwicklungsstand nur mit Freigabe | Fachseite | ja |
| /investitionspriorisierung/ | Vertiefung | Methode der Investitionspriorisierung: Datengrundlage, drei Bewertungsachsen, schematische Bewertungsmatrix (SVG), Investitionsplan, Szenario | Fachseite mit Slots methodik und szenario | ja |
| /dienstleistersteuerung/ | Vertiefung | Steuerungskette von Leistungsbeschreibung bis Dienstleisterbewertung, Prüfung von Angeboten und Nachträgen, Standards, Szenario | Fachseite mit Slots | ja |
| /reporting-und-kennzahlen/ | Vertiefung | Eigentümerreporting: fünf Fragen, Kennzahlenset nach Ebenen ohne Zielwerte, Kennzahlensteckbrief, Berichtsaufbau, Szenario | Fachseite mit Slots | ja |
| /zusammenarbeit/ | Ablauf und Interessen | Ablauf in sechs Schritten, Vorbereitung, Rollen, Datenbedarf, Vertraulichkeit, Angebot, Interessenoffenlegung (#interessen), Mandatsende, FAQ | Base (eigener Aufbau, Cta ohne Ablaufzeile) | ja |
| /glossar/ | Begriffe | Begriffe der Website in sieben Themenblöcken mit Ankernavigation, Verweis auf den Heimatort je Begriff | Base | ja |
| /kurzfakten/ | Zitierfähige Kurzfakten: Wer, Was, Für wen, Wie, Was nicht, Begriffe, Betreiber; AboutPage und FAQPage | ja | Kurzfakten |
| /profil/ | Person | Person, Haltung, Funktionen, Arbeitsprinzipien, Kurzprofil zum Weitergeben (#kurzprofil), Fragen an mich, Timeline nur mit freigegebenen Stationen | Base | ja |
| /einblicke/ | Beitragsübersicht | Veröffentlichte Beiträge, Redaktionsgrundsätze (#redaktionsgrundsaetze), Glossar-Link | Base | nur mit mindestens einem freigegebenen Beitrag, sonst noindex und nicht in der Sitemap |
| /einblicke/[slug]/ | Beitrag | Fachbeitrag mit Autorenkasten, Begriffen und verwandten Beiträgen; nur `status: freigegeben` | Base | ja |
| /kontakt/ | Kontakt | Formular, Direktkontakt, Was nach der Anfrage passiert | Base | ja |
| /danke/ | Bestätigung | Bestätigung nach Versand, Was jetzt passiert, Zum Weiterlesen | Base | noindex, nicht in Sitemap |
| /impressum/, /datenschutz/ | Rechtstexte | Rechtstextentwürfe, unverändert bis zur Freigabe der Angaben | Base | ja |
| /404.html | Fehlerseite | Linkliste aus den NAV-Gruppen plus weitere Seiten (Apache ErrorDocument) | Base | noindex |
| /robots.txt, /sitemap-index.xml | generiert | | | |
| /api/contact.php | PHP-Endpunkt (POST) | | | Disallow |

15 indexierbare Seiten ohne Beiträge (Inhaltsplan v2, Abschnitt 2). URLs bleiben flach; die Hierarchie der Vertiefungen zeigt sich nur im Breadcrumb: Investitionspriorisierung unter Portfoliooptimierung, Dienstleistersteuerung unter Property-Management-Optimierung, Reporting und Kennzahlen zweistufig unter Beratung, Zusammenarbeit unter Beratung, Glossar unter Einblicke.

## Navigation und Footer
Hauptnavigation dreiteilig plus Kontaktbutton "Portfolio besprechen". Der Punkt Beratung trägt zwei Gruppen aus `NAV_GRUPPEN` in `src/data/site.ts`: "Beratungsfelder" (vier Fachseiten) und "Vertiefung und Ablauf" (drei Vertiefungen, Zusammenarbeit). Header, Footer (`FOOTER_SPALTEN`: Beratung, Vertiefung, Wissen und Weiteres) und 404 (`SEITEN_404`) generieren aus diesen Daten, es gibt keine handgepflegten Doppellisten. Das Glossar steht im Footer und in `WEITERE_SEITEN`, nicht im Hauptmenü. Untermenü als details/summary, ohne JavaScript sichtbar; Escape und Klick außerhalb schließen alle offenen Untermenüs.

## Layout Fachseite.astro
Abschnittsfolge in DOM-Reihenfolge: Breadcrumb, Hero (Eyebrow, H1, Ausgangsfrage, Intro, Buttonzeile), Seitennav, Passende Situationen (#situationen), Leistungsumfang mit Arbeitsergebnissen (#leistung), Slot `methodik`, Vorgehen (#vorgehen), Slot `szenario`, Abgrenzung mit Verwandten Themen (#abgrenzung), Fragen und Antworten (#fragen), Personenanker, Cta. Optionale Props: `crumbs` (Breadcrumb ohne Start), `seitennav` (Anker in DOM-Reihenfolge), `situationenTitel`, `situationenIntro`, `ergebnisseHinweis`, `vorgehenIntro`, Cta-Texte. Der Slot `methodik` nimmt vollständige `<section>`-Elemente zwischen Leistungsumfang und Vorgehen auf; der Slot `szenario` ist für genau ein `<Szenario>` nach dem Vorgehen vorgesehen. JSON-LD: BreadcrumbList, Service, FAQPage. Titles, Descriptions und Breadcrumb werden von weichen Trennstellen (U+00AD) bereinigt, die in der H1 erlaubt sind.

## Komponenten (neu in v2)
| Komponente | Aufgabe | Einsatz |
|---|---|---|
| `Portrait.astro` | Einziger Ort, an dem Porträts oder ihre Platzhalter gerendert werden. Prüft zur Buildzeit per `import.meta.glob`, ob `src/assets/portraits/portrait-{nr}.(jpg|jpeg|png)` vorliegt. Mit Datei: Bild über astro:assets (webp, feste Breiten, responsive `sizes`). Ohne Datei: typografischer Platzhalter mit identischem Seitenverhältnis und identischen Außenmaßen (kein Layoutsprung), `aria-hidden`. Prop `nurMitBild` unterdrückt den Platzhalter (Profil Slot 3). | Start Hero, Profil Hero und Kapitelbild, Kontakt, Personenanker der Fachseiten, Autorenkasten, Zusammenarbeit |
| `Szenario.astro` | Schematisches Szenario in sieben festen Feldern (Ausgangslage, Meine Rolle, Vorgehen, Beteiligte auf Ihrer Seite, Arbeitsergebnisse, Woran Erfolg gemessen würde, Grenzen) mit Kopfzeile "Methode, schematisch" und festem Fußsatz. Die Fallstudienfelder Zeitraum, belegtes Ergebnis und Messmethode rendern ausschließlich mit `freigabe: true`. Rendert eine vollständige `section` (Standard-id `szenario`). | Startseite "So würde ich vorgehen", Slot `szenario` der drei Vertiefungen |
| `Autorenkasten.astro` | Portrait 2 als 1:1, zwei Sätze ausschließlich aus `PERSON.funktionen`, Link Profil. Keine weiteren Textprops. | Beitragsende in `einblicke/[slug].astro` |
| `Seitennav.astro` | Seitennavigation unter dem Hero: Anker derselben Seite zwischen zwei Haarlinien, Ziele 44 px hoch, `aria-label` "Auf dieser Seite". Ankerzahl: fünf Standardanker der Fachseite (Portfoliooptimierung), sechs auf der AM-Seite, den drei Vertiefungen und Zusammenarbeit (Standard plus höchstens zwei Methodikanker und Szenario statt Vorgehen und Abgrenzung), sieben auf KI- und PM-Seite (Standard plus zwei Slot-Abschnitte) und im Glossar (sieben Themenblöcke). Bei 1440 px eine Zeile, bei 390 px höchstens drei. | Fachseiten und Vertiefungen (über Fachseite.astro), Asset-Management-Beratung, Zusammenarbeit, Glossar (Ankernavigation der Themenblöcke) |

Erweiterungen bestehender Komponenten: `Cta.astro` trägt sitewide die Zeile "Was nach Ihrer Anfrage passiert" mit Link auf /zusammenarbeit/ (Prop `ohneAblauf` nur auf /zusammenarbeit/ selbst). `Faq.astro` erhält die Prop `id` für mehrere Faq-Abschnitte je Seite. `Hero.astro` erhält `frage`, `mail`, `display`, `ohneLinie`, `compact` und den Slot `media`.

## Flags für offene Freigabepunkte
Aussagen, die an einem offenen Freigabepunkt hängen (docs/FAKTENLISTE.md Nr. 22 bis 35), sind im Frontmatter-Code der jeweiligen Seite als Konstante angelegt (`const ...Freigabe: boolean = false`, `entwicklungsstand`, `beraterprofilPdf`, `referenzfallFreigabe`). Ohne Freigabe rendert der zugehörige Abschnitt nichts; es gibt keine sichtbaren Platzhalter und keine Torso-Seiten. Jede Seite ist ohne ihre Flag-Abschnitte vollständig lesbar. Die Zuordnung Flag zu Freigabepunkt steht in der Faktenliste, Teil B.

## Einblicke-Indexregel
Die Übersicht /einblicke/ ist erst indexierbar, wenn mindestens ein Beitrag `status: freigegeben` und ein `datum` trägt. Bis dahin setzt `einblicke/index.astro` das robots-Meta noindex (`noindex={beitraege.length === 0}`) und zeigt einen Leerzustand ohne Ankündigungsliste. Beiträge werden ausschließlich mit Status freigegeben gebaut; `veroeffentlichteBeitraege()` in `src/lib/einblicke.ts` filtert und sortiert (neueste zuerst). `verwandteBeitraege()` liefert Ziele für den Block "Verwandte Beiträge" erst ab drei freigegebenen Beiträgen (`VERWANDT_MINDESTANZAHL`). Der Startseitenabschnitt "Aktuelle Einblicke" rendert nur mit mindestens einem veröffentlichten Beitrag.

## Sitemap-Regel
`astro.config.mjs` schließt /danke/ und 404 aus der Sitemap aus. /einblicke/ bleibt ausgeschlossen, solange keine Datei in `src/content/einblicke` im Frontmatter `status: freigegeben` trägt (Prüfung mit `node:fs` zur Buildzeit, kein Import aus src) und die gebaute Seite `dist/einblicke/index.html` das robots-Meta noindex trägt. Beide Bedingungen zusammen verhindern, dass Sitemap und robots-Meta auseinanderlaufen; `npm test` prüft, dass keine noindex-Seite in der Sitemap steht und keine indexierbare Seite fehlt. Mit dem ersten freigegebenen Beitrag kehrt /einblicke/ automatisch in die Sitemap zurück. Keine künstlichen lastmod-Zeitstempel.

## Porträts
Dateien `portrait-1` (4:5 Hochformat), `portrait-2` (3:2, daraus 1:1-Ausschnitt), `portrait-3` (3:2) in `src/assets/portraits/`. Erkennung nur zur Buildzeit, nach dem Ablegen einer Datei `npm run build`. Vor dem Commit einer Datei: Eintrag in docs/BILDER-LIZENZEN.md (Fotograf, Aufnahmedatum, Nutzungsrechte Web, Freigabe) und docs/FAKTENLISTE.md Nr. 15 und Nr. 34. Motive, Komposition und Mindestgrößen: `src/assets/portraits/README.md` und docs/DESIGN-SPEC-V2.md Abschnitt 8.

## Kontaktformular
Ohne JavaScript: normaler POST an /api/contact.php, Erfolg leitet per 303 auf /danke/ um, Fehler zeigt eine HTML-Seite mit Direktkontakt. Mit JavaScript: fetch mit `Accept: application/json`, Fehler werden inline angezeigt, Eingaben bleiben erhalten, Erfolg leitet auf /danke/ um (kein Doppelversand durch Neuladen).

Serverseitig: Methode, Größenlimit, Origin/Referer und Sec-Fetch-Site gegen Allowlist, Honeypot, Mindestausfüllzeit, dateibasiertes Rate-Limit je IP-Hash, Validierung, Steuerzeichenfilter (Header-Injection), UTF-8/Base64-Nachricht, eigener SMTP-Client mit STARTTLS oder SMTPS und Zertifikatsprüfung, AUTH PLAIN/LOGIN, fester Empfänger, Besucheradresse nur als Reply-To. Erfolg erst nach 250 auf DATA. Keine Auto-Antwort. Kein Formularinhalt im Log. Kein zusätzliches Formularfeld in v2; die Datenschutzerklärung bleibt deshalb unverändert.

Warum kein CSRF-Token: Die Seiten sind statisch und cachebar, ein pro Sitzung geheimes Token ist ohne serverseitige Sitzung nicht möglich. Stattdessen Origin-Allowlist plus Sec-Fetch-Site (moderne Browser senden beides zuverlässig) plus Honeypot und Rate-Limit. Der Endpunkt hat keine Nebenwirkungen auf Benutzerkonten, das Risiko eines CSRF ist damit auf Spam begrenzt.

## Design-System
Siehe docs/DESIGN-SYSTEM.md (Zusammenfassung des umgesetzten Stands) und docs/DESIGN-SPEC-V2.md (verbindliche Spezifikation).


Zusätzlich liefert `public/llms.txt` eine maschinenlesbare Übersicht der Kernseiten (Konvention, ohne Garantie). Bei neuen Seiten dort ergänzen.
