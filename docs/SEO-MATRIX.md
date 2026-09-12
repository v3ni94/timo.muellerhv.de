# SEO-Matrix timo.muellerhv.de

Suchbegriffe sind Themenhypothesen, keine gemessenen Marktdaten. Keine Suchvolumen, keine Rankingprognosen. Ziel: qualifizierte Beratungsanfragen.

| URL | Suchintention | Hauptthema (Hypothese) | Title | Description (Kurzform) | H1 | Interne Links | Handlungsziel |
|---|---|---|---|---|---|---|---|
| / | Person und Angebot verstehen | Timo Müller, Immobilienberater, Asset Management, Portfoliooptimierung | Timo Müller \| Asset Management & Portfoliooptimierung | Beratung für Immobilienbestandshalter und Investoren ... | Asset-Management-Beratung für Immobilienportfolios. | alle Fachseiten, Profil, Kontakt | Kontakt / Portfolio besprechen |
| /asset-management-beratung/ | Beratung suchen | Asset Management Beratung Immobilien, Beratung Immobilienbestandshalter | Asset-Management-Beratung für Immobilien \| Timo Müller | Strategische Beratung ... drei Mandatsformen | Asset-Management-Beratung für Immobilienportfolios | PM-Seite, Portfolio, Kontakt | Mandatsanfrage |
| /portfoliooptimierung/ | Problem lösen | Immobilienportfolio optimieren, Bestandsoptimierung Immobilien | Immobilienportfolio optimieren \| Timo Müller | Bestandsoptimierung für Wohnimmobilien ... | Portfoliooptimierung für Immobilienbestände | AM-Seite, PM-Seite, KI-Seite, Kontakt | Anfrage Portfolio-Check |
| /property-management-optimierung/ | Umsetzung verbessern | Property Management optimieren, Immobilienverwaltung Prozesse verbessern | Property Management optimieren \| Timo Müller | Immobilienverwaltung als Umsetzungsebene verbessern ... | Property-Management-Optimierung | Portfolio, AM-Seite, KI-Seite, muellerhv.de (Abgrenzung) | Anfrage |
| /ki-immobilienmanagement/ | Orientierung KI | KI im Immobilienmanagement, KI im Asset Management | KI im Immobilienmanagement \| Timo Müller | KI in der Portfoliosteuerung ... kontrollierter Einstieg | KI im Immobilienmanagement | PM-Seite, Portfolio, AM-Seite | Anfrage Einstiegsprüfung |
| /profil/ | Person prüfen | Timo Müller Immobilien, Timo Müller Müller Holding | Timo Müller \| Profil, Haltung und Funktionen | Vorstand der Müller Holding AG ... | Timo Müller | Kontakt, Fachseiten (über Nav) | Vertrauen, Kontakt |
| /einblicke/ | Fachwissen | Portfoliosteuerung, AM/PM, KI-Einstieg | Einblicke \| Timo Müller | Fachbeiträge zur Arbeitsweise ... | Einblicke in die Arbeitsweise | Fachseiten, Beiträge | Lesen, Kontakt |
| /kontakt/ | Kontakt | Timo Müller Kontakt | Kontakt \| Timo Müller | Portfolio besprechen ... | Portfolio besprechen | Impressum, Datenschutz | Formular / E-Mail |
| /impressum/, /datenschutz/ | Rechtliches | | Impressum / Datenschutzerklärung \| Timo Müller | | Impressum / Datenschutzerklärung | | |
| /danke/ | (noindex) | | Anfrage übermittelt | | | Startseite | |

## Technik
- Kanonische URLs absolut, selbstreferenzierend, mit Trailing Slash (astro trailingSlash: always).
- Sitemap: nur indexierbare Seiten (/danke/ und 404 ausgeschlossen), ohne künstliche lastmod.
- robots.txt: Allow /, Disallow /danke/ und /api/, Sitemap-Verweis. Bei NOINDEX=true (Staging) Disallow /.
- Strukturierte Daten (JSON-LD, @graph): WebSite, Organization (HVM), Person (Timo Müller) auf allen Seiten; BreadcrumbList auf Unterseiten; Service + FAQPage auf Fachseiten; ProfilePage auf /profil/; Article auf freigegebenen Beiträgen. Stabile IDs: /#person, /#organisation, /#website.
- Keine Bewertungen, Partner, Qualifikationen oder Kundenzahlen im Markup.
- Search Console: Verifikation und Sitemap-Einreichung vorbereitet (docs/LAUNCH-CHECKLISTE.md), nicht durchgeführt.

## Redaktionsplan Einblicke
1. Immobilienportfolio optimieren: Welche Daten zuerst auf den Tisch gehören (Entwurf vorhanden)
2. Asset Management und Property Management: Wo die Zusammenarbeit konkret wird (Entwurf vorhanden)
3. KI im Immobilienmanagement: Welche Prozesse sich für einen kontrollierten Einstieg eignen (Entwurf vorhanden)
4. Später: Investitionspriorisierung, Reportingqualität, Dienstleistersteuerung

Veröffentlichung: Frontmatter `status: freigegeben` und `datum` setzen, erst nach fachlicher Prüfung und Autorenfreigabe.

## LinkedIn-Textbausteine (nicht automatisch veröffentlichen)
Profil-Link: "Asset-Management-Beratung mit Eigentümerperspektive und operativer Umsetzungskompetenz. Mehr unter timo.muellerhv.de"
Teaser Beitrag 1: "Ohne konsistenten Datenstand ist jede Priorisierung eine Vermutung. Sechs Datenbereiche, die vor jeder Maßnahmenliste auf den Tisch gehören: [Link]"
Teaser Beitrag 2: "Die Schnittstelle zwischen Asset und Property Management ist kein Organigramm, sondern fünf konkrete Vereinbarungen: [Link]"
Teaser Beitrag 3: "KI lohnt sich zuerst dort, wo Vorgänge häufig, regelbasiert und prüfbar sind. Vier Kriterien für die Prozessauswahl: [Link]"
