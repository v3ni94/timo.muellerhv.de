# Inhaltsplan v2 timo.muellerhv.de (verbindlich)

Stand: 12.09.2026. Verfasser: Redaktion. Grundlage: Masterprompt (verbindlich), docs/FAKTENLISTE.md, docs/DESIGN-SYSTEM.md, docs/ARCHITEKTUR.md, der bestehende Quellcode in src/ sowie zwei Inhaltsarchitekturen mit zwei unabhängigen Jurybewertungen.

Juryentscheidung: Beide Jurys haben die Architektur "Themennetz mit klaren Heimatorten" (Konzept 1) zum Sieger erklärt (82 und 81 Punkte gegenüber 58 und 58). Dieser Plan nimmt Konzept 1 als Basis und übernimmt die von beiden Jurys empfohlenen Elemente aus Konzept 0. Wo die Jurys voneinander abweichen, ist die Entscheidung im jeweiligen Abschnitt begründet.

Verbindlichkeit: Dieser Plan legt fest, welche Seiten, Abschnitte und Beiträge entstehen, welche Dateien dafür geändert oder angelegt werden und was bewusst nicht gebaut wird. Abweichungen in der Umsetzung sind hier nachzutragen. Aussagen, die in docs/FAKTENLISTE.md nicht als freigegeben oder als Auftraggeberangabe geführt sind, werden nicht öffentlich. Alle neuen Freigabepunkte sind in Abschnitt 9 gelistet und in die Faktenliste zu übernehmen.

## 1. Leitidee und Regeln

### 1.1 Leitidee

Die Website wächst von vier Fachseiten zu einem kompakten Themennetz mit fünf Inhaltsrollen, die sich nicht überschneiden:

1. Fachseiten beantworten ein Beratungsanliegen (Ausgangsfrage, Situationen, Leistung, Ergebnis, Vorgehen, Abgrenzung, FAQ). Bestehend: Asset-Management-Beratung, Portfoliooptimierung, Property-Management-Optimierung, KI im Immobilienmanagement.
2. Vertiefungen erklären die Methode je Handlungsfeld, das heute als Leistungsblock auf mehreren Seiten verteilt liegt. Neu: Investitionspriorisierung, Dienstleistersteuerung, Reporting und Kennzahlen.
3. Die Seite Zusammenarbeit bündelt Ablauf, Datenbedarf, Vertraulichkeit, Rollen auf Auftraggeberseite, Mandatsende und die Offenlegung von Interessen. Sie ist der einzige Heimatort der Interessenoffenlegung (Anker /zusammenarbeit/#interessen).
4. Einblicke tragen je eine scharfe These mit Arbeitsschritten und Grenzen. Drei weitere Entwürfe kommen hinzu.
5. Das Glossar erklärt Begriffe, die auf der Website vorkommen, an einer Stelle und ergänzt die Erläuterung beim ersten Auftreten. Es ersetzt sie nicht.

Der Fünf-Sekunden-Test des Masterprompts bleibt Maßstab für die Startseite (Wer, Was, Für wen, Wie, Kontakt). Ergänzend gilt für die Unterseiten der Fünf-Minuten-Test des Entscheiders aus Konzept 0: Nach fünf Minuten Lektüre weiß der Geschäftsführer eines Bestandshalters, ob sein Bestand passt, wie Erstgespräch und Mandat ablaufen, was sein Haus beisteuern muss, wie Interessen geregelt sind und was er nicht bekommt.

### 1.2 Heimatort-Prinzip

Jede Aussage hat genau eine Seite, auf der sie ausgeführt wird. Alle anderen Seiten verlinken mit einem Satz. Bestehende Doppelungen werden gekürzt, nicht nur ergänzt. Die drei heute nachweisbaren Doppelungen und ihre neuen Heimatorte:

| Aussage | Heute | Heimatort v2 | Gekürzt auf einen Satz plus Link |
|---|---|---|---|
| Persönliche Mandatsarbeit, Spezialisten, Offenlegung verbundener Unternehmen | Startseite (Persönlicher Ansatz), Profil (Zusammenarbeit), PM-Seite (Abgrenzung), AM-Seite (FAQ Vertraulichkeit) | /zusammenarbeit/#interessen | Startseite, Profil, PM-Abgrenzung, Dienstleistersteuerung |
| CAPEX-Priorisierung nach Dringlichkeit, Wirkung, Abhängigkeit | Portfolio-Seite (Leistungsblock CAPEX, Ergebnis CAPEX-Plan, FAQ CAPEX/OPEX) | /investitionspriorisierung/ | Portfolio-Seite behält die Begriffserläuterung CAPEX und OPEX (Masterprompt Abschnitt 8), kürzt die Priorisierungslogik |
| Kennzahlen und Reporting | AM-Seite (Reportingstruktur), PM-Seite (Kennzahlen und Reporting, FAQ Anzahl Kennzahlen), KI-Seite (Berichtsentwürfe) | /reporting-und-kennzahlen/ | AM-Unterlage bleibt als Nennung, PM-Leistungsblock und FAQ werden verschoben, KI-Block verlinkt |

Neue Heimatorte, die Konflikte vermeiden: Vorbereitungsliste für das Erstgespräch auf /zusammenarbeit/ (Kontakt kürzt auf zwei Sätze plus Link). Prozesskette Leerstand im Beitrag "Leerstand je Einheit" (keine neue Sektion auf der Portfolio-Seite). Ursachengruppen des Leerstands bleiben im Beitrag "Daten zuerst". Entscheidungsvorlage als Muster auf der AM-Seite. Zuständigkeitsmatrix schematisch auf der PM-Seite. Hinweis "Was ein echter Fall zusätzlich braucht" in den Redaktionsgrundsätzen auf /einblicke/.

### 1.3 Faktenregeln für alle neuen Inhalte

- Nur Aussagen aus docs/FAKTENLISTE.md. Keine Zahlen zu Bestand, Einheiten, Mandaten, Jahren, Einsparungen, Renditen, Budgets, Zeiträumen oder Fristen. Keine Branchenrichtwerte, keine Zielwerte, keine Benchmarks, auch nicht in Tabellen, Matrizen, Kennzahlensets oder Szenarien.
- Keine Referenzen, Kundenfälle, Logos, Zitate, Zertifikate, Mitgliedschaften, Auszeichnungen.
- Szenarien konsequent im Konjunktiv oder als Vorgehensbeschreibung. Keine Formulierung, die einen tatsächlichen Mandatsverlauf nahelegt (kein "In einem Fall habe ich"). Keine Orte, keine Größen.
- Keine Paragraphen, keine Normzitate, keine Steuer- oder Mietrechtsaussagen. Rechtlich geprägte Begriffe nur allgemein mit Verweis auf Rechtsanwalt und Steuerberater.
- Keine Aussagen zu Honorarhöhe, Reaktionszeiten, Projektdauer, Kapazität, Verfügbarkeit, Versicherung oder Vertragspartner des Beratungsmandats, bis die Freigabepunkte in Abschnitt 9 entschieden sind. Die bestehende Formulierung "in der Regel innerhalb weniger Werktage" (Kontakt) wird nicht verschärft und nicht wiederholt.
- Jeder Abschnitt, der an einem offenen Freigabepunkt hängt, wird im Code als Flag angelegt (Muster: `beraterprofilPdf` in profil.astro und `freigabe` in Timeline.astro). Ohne Freigabe rendert der Abschnitt nichts. Es entstehen keine sichtbaren Platzhalter und keine Torso-Seiten: Eine Seite wird nur angelegt, wenn sie ohne die Flag-Abschnitte vollständig lesbar ist. Das gilt für alle fünf neuen Seiten.
- Fachbegriffe werden beim ersten Auftreten auf der Seite erläutert (Masterprompt Abschnitt 3). Glossar-Links ergänzen die Erläuterung, ersetzen sie nicht.
- Keine Gedankenstriche in deutschen Texten. Kommas, Doppelpunkte oder Umformulierung. Der Build-Test prüft das bereits.
- Sprache: Ich-Form, Anrede Sie, kurze Sätze, keine Superlative, keine Vergleiche mit Dritten. Verbotene Wörter laut Masterprompt und scripts/test-build.mjs bleiben gesperrt.

### 1.4 Gestaltungsregeln für neue Inhalte

- Bestehende Komponenten und Klassen verwenden: Fachseite-Layout, .steps, .checklist, .dl-grid, .card (höchstens drei bis vier Karten je Raster), Faq, Cta, Breadcrumb, .note, .table-wrap. Keine neuen Farbwerte. Orange bleibt Akzent (Eyebrow-Marker, Kennlinie, Listenmarker, erster Schritt), nie Text, nie Fläche. Textschwarz #1A1A1A, Grautöne aus tokens.css.
- Systemschrift, keine externen Ressourcen, kein JavaScript für Inhalte. Untermenüs bleiben details/summary und ohne JavaScript sichtbar.
- Verboten laut Masterprompt: Pillen-Badges, endlose Kartenwand, Hintergrundvideos, Scroll-Hijacking, Autoplay-Slider, erzwungener Dark Mode, externe Schriften. Kein Mega-Menü mit Bildern.
- WCAG 2.2 AA: eine H1 je Seite, Überschriftenhierarchie ohne Sprünge, Tabellen mit th und scope, Diagramme als figure mit figcaption und Textalternative, Fokus sichtbar, Zielgrößen 44 px, aria-current in Navigation und Breadcrumb.
- Schematische Darstellungen ausschließlich als inline-SVG mit sichtbarer Kennzeichnung "Schematische Darstellung, ohne Zahlen" in der figcaption, Farben aus tokens.css, Text als echtes SVG-Text-Element, zusätzlich eine textliche Beschreibung im Fließtext. In v2 genau eine Grafik: die Bewertungsmatrix auf /investitionspriorisierung/. Alle anderen Strukturen (Steuerungskette, Berichtsaufbau, Zuständigkeitsmatrix) sind Steps, Listen oder Tabellen.

### 1.5 Porträts: Komponente mit automatischem Austausch

Neue Komponente `src/components/Portrait.astro`. Sie ist die einzige Stelle, an der Porträtbilder oder ihre Platzhalter gerendert werden. Die typografische Fläche aus profil.astro wandert in diese Komponente.

| Variante | Seitenverhältnis | Datei | Einsatz | Alt-Text |
|---|---|---|---|---|
| hero | 4:5 | src/assets/portraits/portrait-1.jpg | Startseite Hero (rechts), Profil Hero | Timo Müller, Porträt |
| arbeit | 3:2 | src/assets/portraits/portrait-3.jpg | Profil (neben "Warum ich Strategie und Betrieb verbinde"), Zusammenarbeit Hero | Timo Müller bei der Arbeit |
| autor | 1:1 | src/assets/portraits/portrait-2.jpg | Autorenkasten am Beitragsende, Kontakt (Kasten "Direkt erreichen") | Timo Müller, Porträt |

Mechanik: Die Komponente prüft zur Buildzeit per `import.meta.glob('../assets/portraits/portrait-*.{jpg,png}', { eager: true })`, ob die Datei der Variante vorliegt. Liegt sie vor, wird sie über `astro:assets` (Image) mit festen `width` und `height` in der Zielgröße ausgegeben, responsiv per `widths`, Format webp, Hero-Bild ohne `loading="lazy"`. Fehlt sie, rendert die Komponente den typografischen Platzhalter (Initialen TM, orange Kennlinie, Claim) in einer Box mit identischem Seitenverhältnis und identischen Maximalmaßen. Beide Zustände haben dieselben Außenmaße, es entsteht kein Layoutsprung (CLS). Kein Stockfoto, kein KI-Bild, keine fremde Person. Der Platzhalter trägt `aria-hidden="true"`, das echte Bild den festen Alt-Text. Nach dem Ablegen der Dateien genügt `npm run build`.

Zwei bis drei echte Porträts genügen für alle Einsätze: portrait-1 (Hochformat) und portrait-3 (Querformat) sind Pflicht, portrait-2 kann als quadratischer Ausschnitt aus portrait-1 erzeugt werden. Fotograf und Nutzungsrechte für Web werden in docs/BILDER-LIZENZEN.md eingetragen (Freigabepunkt 34). src/assets/portraits/README.md wird an die Tabelle oben angepasst (portrait-2 wird 1:1 und wandert vom Abschnitt "Persönlicher Ansatz" in Autorenkasten und Kontakt, damit die Startseite nur ein Porträt trägt).

### 1.6 Wiederverwendbare Bausteine, die neu entstehen

- `Portrait.astro` (siehe 1.5).
- `Szenario.astro`: rendert ein schematisches Szenario mit den sieben festen Feldern der künftigen Fallstudienstruktur: Ausgangslage, Meine Rolle, Vorgehen, Beteiligte auf Ihrer Seite, Arbeitsergebnisse, Woran Erfolg gemessen würde, Grenzen. Fester Fußsatz: "Schematische Darstellung des Vorgehens. Kein Kundenfall, keine Ergebniszusage." Sobald belegte Referenzfälle freigegeben sind, erhält die Komponente zusätzlich die Felder Zeitraum, belegtes Ergebnis, Messmethode und Freigabe. Einsatz: Startseite (ein Szenario) und je ein Szenario auf den drei Vertiefungen.
- `Autorenkasten.astro`: Porträt autor 1:1, zwei Sätze aus PERSON.funktionen, Link Profil. Einsatz: Beitragsende.
- Fachseite.astro erhält optionale Props `crumbs` (Breadcrumb-Übersteuerung) und `eyebrow` bleibt, dazu zwei benannte Slots: `methodik` (zwischen Leistungsumfang und Vorgehen) und `szenario` (nach Vorgehen). Damit können Fachseiten und Vertiefungen Zusatzabschnitte aufnehmen, ohne aus dem Layout auszubrechen.
- Cta.astro erhält eine feste Zusatzzeile unter der E-Mail: "Was nach Ihrer Anfrage passiert" mit Link auf /zusammenarbeit/. Abschaltbar per Prop `ohneAblauf` (für /zusammenarbeit/ selbst).
- `src/data/glossar.ts`: Datenquelle des Glossars (id, begriff, block, definition, bedeutung, heimatort). Seiten und Beiträge verlinken auf `/glossar/#id`. Ein Build-Test prüft, dass jede im Frontmatter `glossar` genannte id existiert.

## 2. Seitenübersicht v2

| Route | Rolle | Status | Index | Breadcrumb |
|---|---|---|---|---|
| / | Startseite | erweitert | ja | |
| /asset-management-beratung/ | Fachseite, Hub | erweitert | ja | Beratung |
| /portfoliooptimierung/ | Fachseite | erweitert, gekürzt | ja | Beratung / Portfoliooptimierung |
| /property-management-optimierung/ | Fachseite | erweitert, gekürzt | ja | Beratung / Property-Management-Optimierung |
| /ki-immobilienmanagement/ | Fachseite | erweitert | ja | Beratung / KI im Immobilienmanagement |
| /investitionspriorisierung/ | Vertiefung | neu | ja | Beratung / Portfoliooptimierung / Investitionspriorisierung |
| /dienstleistersteuerung/ | Vertiefung | neu | ja | Beratung / Property-Management-Optimierung / Dienstleistersteuerung |
| /reporting-und-kennzahlen/ | Vertiefung | neu | ja | Beratung / Reporting und Kennzahlen (zweistufig, weil "Beratung" bereits auf die AM-Seite zeigt) |
| /zusammenarbeit/ | Ablauf und Interessen | neu | ja | Beratung / Zusammenarbeit |
| /glossar/ | Begriffe | neu | ja | Einblicke / Glossar |
| /profil/ | Person | erweitert, gekürzt | ja | Profil |
| /einblicke/ | Beitragsübersicht, Redaktionsgrundsätze | erweitert | nur mit mindestens einem freigegebenen Beitrag, sonst noindex und nicht in der Sitemap | Einblicke |
| /einblicke/[slug]/ | Beitrag | erweitert | ja (nur freigegeben) | Einblicke / Titel |
| /kontakt/ | Kontakt | erweitert, gekürzt | ja | Kontakt |
| /danke/ | Bestätigung | erweitert | noindex | |
| /404/ | Fehlerseite | erweitert | noindex | |
| /impressum/, /datenschutz/ | Rechtstexte | unverändert bis Freigabe | ja | |

15 indexierbare Seiten statt 10 (Beiträge nicht mitgezählt). Die Hauptnavigation bleibt dreiteilig plus Kontaktbutton.

## 3. Neue Seiten

Für jede Seite: Route, Title (höchstens 65 Zeichen, Build-Test), Description (höchstens 160 Zeichen), H1, Zweck, vollständige Gliederung mit Stichpunkten je Abschnitt, Faktenrisiko und Vermeidung. Alle neuen Seiten verwenden Base.astro oder Fachseite.astro, Breadcrumb, Cta und die bestehenden Klassen.

### 3.1 /zusammenarbeit/

- Title: Zusammenarbeit: Ablauf eines Beratungsmandats | Timo Müller
- Description: Vom Erstgespräch bis zur Übergabe: Ablauf, Datenbedarf, Vertraulichkeit, Rollen auf Ihrer Seite und Offenlegung von Interessen. Beratung von Timo Müller.
- H1: So läuft eine Zusammenarbeit ab
- Eyebrow: Zusammenarbeit
- Datei: src/pages/zusammenarbeit.astro (eigene Seite auf Base.astro, kein Service-Markup, BreadcrumbList und FAQPage)
- Priorität: Stufe 1, erste Seite der Umsetzung.

Zweck: Konversionsseite zwischen Fachseiten und Kontakt. Beantwortet, was nach einer Anfrage passiert, welche Daten wann nötig sind, was das Haus des Auftraggebers beisteuern muss, wie Vertraulichkeit geregelt ist, wie Interessen offengelegt werden und wie ein Mandat endet. Einziger Heimatort der Interessenoffenlegung mit Anker #interessen, den ein skeptischer Entscheider direkt erhalten kann. Nimmt die heute vierfach vorhandenen Absätze zu Zusammenarbeit und Offenlegung auf; Startseite, Profil, PM-Seite und AM-FAQ kürzen auf einen Satz plus Link.

Suchintention: Prüfabsicht vor Kontaktaufnahme, geringes Rankingziel. Themenhypothesen: Ablauf Beratungsmandat Immobilien, Zusammenarbeit Asset Management Berater, Vertraulichkeit Portfolioanalyse, Interessenkonflikt Berater Verwalter. Keine Suchvolumen, keine Prognose.

Gliederung:

1. Hero. Ausgangsfrage: "Was passiert zwischen Ihrer Anfrage und dem ersten Arbeitsergebnis?" Lead in drei Sätzen: Erstgespräch ohne Detaildaten, Angebot vor Beginn, Entscheidungen bleiben bei Ihnen. Rechts Portrait-Variante arbeit 3:2 (portrait-3), bis zur Freigabe typografischer Platzhalter. Button "Portfolio besprechen", Textlink "Zu den Interessen" (#interessen).
2. Ablauf in sechs Schritten (.steps, zwei Reihen à drei). 01 Anfrage: Formular oder E-Mail, grobe Beschreibung von Bestand, Ziel, Rolle. 02 Erstgespräch: Telefon oder Video, Ausgangslage und Ziel klären, keine Detaildaten, keine Mieterdaten. 03 Einschätzung und Angebot: Vorschlag der Mandatsform, Leistungsumfang, Datentiefe, Zeitrahmen und Honorar schriftlich; die Kontaktaufnahme begründet keinen Vertrag (bestehende Aussage). 04 Vertraulichkeit und Datenzugang: schriftliche Vereinbarung vor jedem Datenaustausch (bestehende Aussage), Unterlagenliste je Handlungsfeld. 05 Kick-off und Arbeitsrhythmus: Ansprechpartner beider Seiten, Abstimmungstermine, Entscheidungsprotokoll, Maßnahmenliste als gemeinsames Arbeitsdokument. 06 Ergebnis, Entscheidung und Übergabe: Ergebnisdokumente, Ergebnisbesprechung, Übergabe an die Umsetzenden, Nachhalten nach Vereinbarung. Kein Schritt nennt eine Dauer.
3. Was Sie für das Erstgespräch vorbereiten können (.checklist, Heimatort; Kontakt kürzt). Art und ungefähre Größe des Bestands; Ihre Rolle und Entscheidungskompetenz; das Ziel oder Problem; Beteiligte und Entscheidungswege (Gesellschafter, Gremien, Verwaltung); Zeitrahmen, falls vorhanden; bekannte offene Themen. Abschlusssatz fett: "Nicht nötig sind Mieterdaten, Verträge oder andere vertrauliche Unterlagen. Diese folgen erst nach der Vertraulichkeitsvereinbarung im Mandat."
4. Rollen und Mitwirkung auf Ihrer Seite (.dl-grid). Geschäftsführung oder Eigentümer: Auftraggeber, Zielvorgabe, Entscheidungen, Teilnahme an Ergebnisbesprechungen. Asset- oder Portfoliomanagement (falls vorhanden): fachlicher Gegenpart, Datenzugang, Bewertung der Optionen. Verwaltung: Daten, Prozesswissen, Umsetzung im Tagesgeschäft, Teilnahme an Priorisierung. Technik oder Bauabteilung: Zustandsbewertung, Kostenplausibilisierung. Rechnungswesen: Plan- und Istdaten, Liquidität. Bei Bedarf Finanzierer sowie Steuer- und Rechtsberater des Auftraggebers: Schnittstellen, keine Ersetzung. Je Rolle: wofür gebraucht, in welcher Phase. Fester Satz: "Ohne Mitwirkung der Verwaltung entsteht kein Umsetzungsergebnis. Deshalb ist sie von Anfang an eingebunden, nicht erst bei der Umsetzung."
5. Datenbedarf je Mandatsform und Unterlagenkategorien. Ersteinschätzung: aggregierte Angaben genügen (bestehende FAQ-Aussage). Portfolio-Check: Kategorien ohne Formatvorgaben als kompakte Liste: Mieter- und Einheitenliste, Leerstand mit Ursache, Forderungen nach Alter, laufende Kosten nach Umlagefähigkeit, Instandhaltungshistorie und bekannter Rückstand, Verträge mit Laufzeiten, Finanzierungsübersicht. Umsetzungsbegleitung: Daten der vereinbarten Handlungsfelder. Sparring: Entscheidungsvorlagen und Berichte des Auftraggebers. Fester Satz: "Die Datentiefe wird im Angebot vereinbart. Lücken werden benannt, nicht überspielt." Link auf den Beitrag "Daten zuerst", sobald freigegeben (bedingt gerendert).
6. Vertraulichkeit und Umgang mit Daten (.prose). Schriftliche Vertraulichkeitsvereinbarung vor jedem Datenaustausch (bestehend). Daten werden ausschließlich für das vereinbarte Mandat verwendet. KI-Werkzeuge kommen mit Mandantendaten nur nach ausdrücklicher Vereinbarung und nach Prüfung von Rechtsgrundlage und Auftragsverarbeitung zum Einsatz (bestehende KI-Abgrenzung). Link Datenschutzerklärung. Flag-Abschnitt "Rückgabe oder Löschung nach Mandatsende" (Freigabepunkt 28 Datenhaltung); bis dahin nur der allgemeine Satz zur Zweckbindung.
7. Einschätzung, Angebot und Vertrag (.prose). Vor Beginn erhalten Sie ein Angebot mit Leistungsumfang, Datentiefe, Zeitrahmen und Honorar; Honorar richtet sich nach Mandatsform, Umfang und Datenlage (bestehende FAQ-Aussage); keine Ergebniszusagen, keine Erfolgsversprechen. Flag-Abschnitte: Honorarlogik je Mandatsform (Freigabepunkt 23), Vertragspartner des Beratungsmandats (22), Kostenfreiheit von Erstgespräch und Kurzeinschätzung (25). Bis zur Freigabe bleibt es bei der bestehenden neutralen Formulierung.
8. Rollen und Verantwortung (.prose, kurz). Ich analysiere, priorisiere, bereite Entscheidungen vor und steuere die Umsetzung. Entscheidungen bleiben beim Eigentümer. Persönliche Beratung, keine Organ- oder Beiratsfunktion, keine Rechts- oder Steuerberatung, keine erlaubnispflichtige Finanzdienstleistung (Verweis auf die Abgrenzung der AM-Seite, keine Wiederholung der Liste).
9. Interessen und verbundene Unternehmen (id="interessen", Heimatort, section--flaeche). Einleitende Frage: "Wessen Interessen sitzen mit am Tisch, wenn Sie mich beauftragen?" Absatz Funktionen und Unternehmen ausschließlich aus der Faktenliste: Vorstand der Müller Holding AG, Geschäftsführer der Hausverwaltung Müller GmbH und weiterer Unternehmen der Gruppe (ohne Namen), eigener Immobilienbestand (ohne Größe), operatives Netzwerk mit Bezügen zu Schreinerei, Fenster- und Elementebau, Heizung und Sanitär (ohne Betriebsnamen, ohne Kapazität). Dann die Regeln als .checklist:
   - Regel 1 Offenlegung vor Empfehlung: Kommt ein verbundenes Unternehmen oder ein Betrieb aus dem Netzwerk als Dienstleister in Frage, benenne ich das vorab, mit Begründung und Alternativen (bestehende Aussage, Masterprompt Abschnitt 9).
   - Regel 2 Die Beratung ist kein Vertriebskanal für die Verwaltung: Ein Verwalterwechsel ist kein Ziel der Beratung, er kann höchstens ein Analyseergebnis mit Alternativen sein (bestehende Aussage der Portfolio-FAQ). Das Verwaltungsangebot der Hausverwaltung Müller GmbH bleibt auf muellerhv.de und wird auf dieser Website nicht angeboten (bestehende Aussage der PM-Abgrenzung).
   - Regel 3 Vertraulichkeit gegenüber der eigenen Gruppe: Informationen aus Mandaten nutze ich nicht für Gruppengesellschaften oder den eigenen Bestand. Baubar, Formulierung wird im Rahmen der Textfreigabe bestätigt (Freigabepunkt 27).
   - Regel 4 Eigene Ankaufsinteressen (Flag, Freigabepunkt 26): Inhalt legt Timo Müller fest. Der Plan gibt keinen Wortlaut vor.
   - Regel 5 Keine Vergütung von Dritten (Flag, Freigabepunkt 24): Inhalt legt Timo Müller fest.
   Abschluss "Was das für Sie bedeutet" in drei Sätzen: Eigentümerperspektive eines Praktikers, Interessenlage vor der ersten Empfehlung bekannt, Entscheidung bleibt bei Ihnen. Kein Anspruch auf vollständige Anbieterunabhängigkeit (Masterprompt Abschnitt 9).
10. Wie ein Mandat endet (.prose). Dokumentation der Ergebnisse, Übergabe an interne Verantwortliche, keine Abhängigkeit von der Beratung, Nachhalten optional als Sparring, Übergang zwischen Mandatsformen möglich, jede Mandatsform eigenständig beauftragbar.
11. Fragen und Antworten (Faq, fünf Einträge). Kann eine Zusammenarbeit mit einem einzelnen Objekt oder Teilbestand beginnen? (Ja, Umfang wird im Angebot festgelegt.) Was passiert, wenn das Erstgespräch keinen Bedarf zeigt? (Dann sage ich das. Ein Mandat ohne erkennbaren Nutzen schlage ich nicht vor.) Wie arbeiten Sie mit unserem bestehenden Verwalter zusammen? (Eingebunden ab Beginn, Link PM-Seite.) Ihnen gehört eine Hausverwaltung. Wollen Sie unser Verwaltungsmandat? (Antwort verweist auf Regel 2.) Wie endet eine Zusammenarbeit? (Verweis Abschnitt 10.) Flag-FAQ "Arbeiten Sie vor Ort oder remote?" erst nach Freigabepunkt 29.
12. Cta mit Prop `ohneAblauf`.

Faktenrisiko: Mittel. Die Seite ist überwiegend Methode und verwendet für Vertrag, Honorar und Vertraulichkeit nur Aussagen, die bereits auf AM-FAQ, Portfolio-FAQ, PM-Abgrenzung und Kontaktseite stehen. Riskant sind fünf Punkte, die als Flag angelegt und ohne Freigabe nicht gerendert werden: Vertragspartner des Beratungsmandats, Honorarlogik, Kostenfreiheit des Erstgesprächs, Ankaufsregel, Vergütung Dritter. Regel 3 und die Aussage zur Datenverwendung sind Verhaltenszusagen; sie werden vor Launch mit Datenschutzerklärung und Praxis abgeglichen (Launch-Checkliste, Rechtstexte). Keine Dauer, keine Reaktionszeit, keine Verfügbarkeit. Die Seite ist ohne alle Flag-Abschnitte vollständig lesbar.

### 3.2 /investitionspriorisierung/

- Title: Investitionspriorisierung im Immobilienbestand | Timo Müller
- Description: Instandhaltung und Investitionen nach Dringlichkeit, Wirkung, Abhängigkeit und Liquidität ordnen: Methode, Kriterien und Investitionsplan mit Zeitachse.
- H1: Investitionspriorisierung für Immobilienbestände
- Eyebrow: Vertiefung
- Datei: src/pages/investitionspriorisierung.astro auf Fachseite.astro mit Slots methodik und szenario; Service-Markup mit sichtbaren Blöcken Leistungsumfang und Arbeitsergebnisse; Breadcrumb Beratung / Portfoliooptimierung / Investitionspriorisierung.
- Priorität: Stufe 1.

Zweck: Vertiefung zu Portfoliooptimierung (Mandat B). Erklärt die Methode, mit der Instandhaltung und Investitionen in eine begründete Reihenfolge kommen. Heimatort aller CAPEX-Priorisierungsinhalte; der Leistungsblock CAPEX der Portfolio-Seite behält die Begriffserläuterung und kürzt die Logik auf zwei Sätze plus Link. Macht die Eigentümerperspektive (eigenes Kapital, eigenes Risiko) und das handwerkliche Kostenverständnis an einer konkreten Entscheidungssituation sichtbar. Title, H1 und Intro sind so gefasst, dass die Seite nicht mit "Immobilienportfolio optimieren" konkurriert.

Suchintention: Problemlösung mit Beratungsabsicht. Themenhypothesen: Investitionsprioritäten Immobilienportfolio, Instandhaltungsstau priorisieren, CAPEX-Planung Wohnungsbestand, Instandhaltungsplanung Wohnungsunternehmen.

Gliederung:

1. Hero. Ausgangsfrage: "Welche Maßnahme kommt zuerst, wenn Budget, Zustand und Pflichten konkurrieren?" Intro: Eine Liste wird nicht dadurch beherrschbar, dass sie länger wird, sondern durch wenige Bewertungsachsen und eine offen gelegte Liquiditätsgrenze. Begriffserläuterung CAPEX beim ersten Auftreten plus Glossar-Link.
2. Passende Situationen (vier Karten). Rückstand bekannt, aber nicht beziffert. Konkurrierende Budgets zwischen Objekten. Pflichtmaßnahmen gegen Ertragsmaßnahmen. Finanzierer verlangt einen Investitionsplan.
3. Leistungsumfang (Fachseite-Block, sichtbar für Service-Markup). Bestandsaufnahme mit Technik und Verwaltung. Bewertung jeder Maßnahme nach den drei Achsen. Reihenfolge und Zeitachse. Zusammenführung mit Liquiditätsplanung. Vorbereitung der Unterlagen für Finanzierer. Übergabe in Vergabe und Nachhalten. Arbeitsergebnisse (Aside): bewertete Maßnahmenliste, Investitionsplan mit Zeitachse und Budgetrahmen ohne Zahlen im Muster, Entscheidungsvorlage für die Eigentümerseite, Unterlagenpaket für Finanzierungsgespräche, Kennzahlen für das Nachhalten.
4. Slot methodik, Abschnitt "Datengrundlage": Instandhaltungshistorie, Zustandsaufnahme, vorhandene Gutachten, bekannte Auflagen, Begehungen nach Relevanz; Umgang mit Objekten, die nie begutachtet wurden: kennzeichnen, nicht schätzen.
5. Slot methodik, Abschnitt "Drei Bewertungsachsen und ein Rahmen". Achse 1 Dringlichkeit und Risiko: Sicherheit, Verkehrssicherung, Folgeschäden, Betriebsunterbrechung, rechtliche oder behördliche Pflichten (allgemein benannt, keine Normen). Achse 2 Wirkung auf Ertrag und Wert: Vermietbarkeit, Leerstandsabbau, Werterhalt, Mietentwicklung im rechtlich zulässigen Rahmen (Einordnung durch Rechtsberatung). Achse 3 Technische Abhängigkeit und Bündelung: Reihenfolgen, die die Bausubstanz vorgibt, Gewerke bündeln, doppelte Baustelleneinrichtung vermeiden. Rahmen Liquidität: Liquiditätsplanung und Finanzierungstermine setzen die Grenze. Ergebnis je Maßnahme: zwingend, sinnvoll oder verzichtbar.
6. Slot methodik, Bewertungsmatrix als inline-SVG (figure): Achsen "Dringlichkeit und Risiko" gegen "Wirkung auf Ertrag und Wert", Felder zwingend, sinnvoll, verzichtbar, Hinweis auf Bündelung als dritte Dimension im Text. Figcaption: "Schematische Darstellung, ohne Zahlen." Textliche Beschreibung darunter.
7. Slot methodik, Abschnitt "Investitionsplan mit Zeitachse und Liquidität". Maßnahmen auf Perioden verteilen, Liquiditätsgrenze einhalten, Finanzierungstermine berücksichtigen. Unterlagen, die Finanzierer typischerweise erwarten (aus Konzept 0): Mieter- und Einheitenliste, Leerstand mit Ursache, Forderungen nach Alter, Instandhaltungs- und Investitionsplan, Liquiditätsplanung. Fester Satz: keine Aussage zu Konditionen, keine Finanzierungsvermittlung.
8. Vorgehen (Fachseite-Steps, vier Schritte): Bestand aufnehmen, Maßnahmen bewerten, Reihenfolge und Zeitachse festlegen, Nachhalten und Reihenfolge überprüfen.
9. Slot szenario: Szenario "Instandhaltungsstau vor einer Finanzierungsentscheidung" mit den sieben Feldern. Ausgangslage: Rückstand bekannt, nicht beziffert, Prolongation steht an. Meine Rolle: Bestandsaufnahme koordinieren, Bewertung moderieren, Entscheidungsvorlage erstellen. Vorgehen: drei Phasen. Beteiligte: Geschäftsführung, Technik, Verwaltung, Rechnungswesen. Arbeitsergebnisse: Investitionsplan, Unterlagenpaket. Woran Erfolg gemessen würde: Anteil der Maßnahmen mit Bewertung, Termin und Verantwortlichem; Plan-Ist je Periode (Art der Messung, kein Wert). Grenzen: keine Fachplanung, keine Finanzierungsvermittlung. Konjunktiv.
10. Von der Priorisierung zur Vergabe und zum Nachhalten (zwei kurze Absätze mit Links): Leistungsbeschreibung und Bündelung (Dienstleistersteuerung), Fortschritt und Wirkung (Reporting und Kennzahlen).
11. Abgrenzung: keine Fachplanung, kein Sachverständigengutachten, keine Energieberatung, keine Aussagen zu Förderprogrammen; Standsicherheit, Brandschutz, Gewährleistung gehören zu Fachplanern und Rechtsberatung; geeignete Spezialisten werden eingebunden. Verwandte Themen: Portfoliooptimierung, Dienstleistersteuerung, Reporting und Kennzahlen, Zusammenarbeit.
12. Fragen und Antworten (vier): Erst Gutachten oder erst Priorisierung? Wie gehen Sie mit Pflichtmaßnahmen um? Wie wird bei knapper Liquidität priorisiert? Wie oft wird die Reihenfolge überprüft? (Antwort ohne Rhythmusangabe: an Entscheidungstermine gekoppelt.)
13. Cta.

Faktenrisiko: Mittel. Die Seite lädt zu Rechenbeispielen, Kostenkennwerten je Quadratmeter, Nutzungsdauern, Normzitaten und Förderaussagen ein. Vermeidung: keine Zahlen, keine Normen, Pflichten nur allgemein, Matrix ohne Werte und ausdrücklich schematisch, handwerkliche Praxis nur als Kostenverständnis (Faktenliste Nr. 9), kein CAPEX-Rechenbeispiel (von beiden Jurys abgelehnt). Szenario im Konjunktiv ohne Zahlen, Orte, Zeiträume.

### 3.3 /dienstleistersteuerung/

- Title: Dienstleistersteuerung im Immobilienbestand | Timo Müller
- Description: Leistungsbeschreibung, Nachtrag, Abnahme: Wie Dienstleister im Wohnungsbestand nachvollziehbar gesteuert werden. Mit handwerklichem Kostenverständnis.
- H1: Dienstleistersteuerung im Immobilienbestand
- Eyebrow: Vertiefung
- Datei: src/pages/dienstleistersteuerung.astro auf Fachseite.astro; Service-Markup mit sichtbaren Blöcken Leistungsumfang und Arbeitsergebnisse; Breadcrumb Beratung / Property-Management-Optimierung / Dienstleistersteuerung.
- Priorität: Stufe 2.

Zweck: Vertiefung zu Property-Management-Optimierung. Erklärt die Steuerungskette von der Leistungsbeschreibung bis zur Rechnungsprüfung und macht den belegten Vorteil aus Faktenliste Nr. 9 (Kostenverständnis aus Schreinerei, Fenster- und Elementebau, Heizung und Sanitär) an einer konkreten Leistung greifbar, ohne Kapazität zu behaupten. Heimatort für Vergabe, Nachträge, Abnahme und Dienstleisterbewertung; der PM-Leistungsblock "Dienstleisterkoordination" und die PM-FAQ zur handwerklichen Erfahrung wandern hierher. Die Seite bleibt Steuerungsebene: Sie beschreibt, wie die Eigentümerseite die Verwaltung und ihre Dienstleister führt, nicht wie eine Verwaltung arbeitet.

Suchintention: Problemlösung mit Beratungsabsicht. Themenhypothesen: Dienstleistersteuerung Immobilienverwaltung, Nachtragsprüfung Instandhaltung, Abnahme und Dokumentation Instandhaltung, Rahmenvertrag Handwerksleistungen Bestand.

Gliederung:

1. Hero. Ausgangsfrage: "Woran erkennen Sie, ob Ihre Dienstleister das liefern, was Sie bezahlen?" Intro: Ob Kosten und Termine im Griff bleiben, entscheidet sich an drei Punkten: vor der Beauftragung in der Leistungsbeschreibung, während der Ausführung in der Nachtragsregel, am Ende in einer dokumentierten Abnahme. Wer diese drei Punkte verbindlich regelt, braucht weniger Kontrolle im Alltag.
2. Passende Situationen (vier Karten). Aufträge ohne Leistungsbeschreibung. Nachträge ohne Prüfung. Abnahmen ohne Protokoll. Abhängigkeit von einzelnen Betrieben oder uneinheitliche Dienstleisterlandschaft nach Zukauf.
3. Leistungsumfang (sichtbar). Steuerungskette aufnehmen und Lücken benennen. Standards für Leistungsbeschreibung, Nachtrag und Abnahme festlegen. Angebots- und Nachtragsprüfung aus handwerklicher Praxis. Zuständigkeiten entlang der Kette klären. Kennzahlarten zur Dienstleisterleistung definieren. Arbeitsergebnisse (Aside): Standardset für Vergabe, Nachträge und Abnahmen; Muster Leistungsbeschreibung als Gliederung; Nachtragsregel mit Freigabestufen ohne Beträge; Abnahmeprotokoll als Struktur; Kennzahlarten ohne Zielwerte.
4. Slot methodik, Abschnitt "Die Steuerungskette in neun Schritten" (.steps, drei Reihen): Bedarf, Leistungsbeschreibung, Angebotseinholung und Vergleich, Vergabe, Ausführungskontrolle, Nachtragsprüfung, Abnahme und Dokumentation, Rechnungsprüfung, Dienstleisterbewertung. Die drei Steuerungspunkte Leistungsbeschreibung, Nachtrag und Abnahme werden hervorgehoben und in eigenen Unterabschnitten vertieft:
   - Leistungsbeschreibung: Leistungsumfang, Schnittstellen zu anderen Gewerken, Qualitäten, Termine, Dokumentationspflichten, Regelung für Unvorhergesehenes; Vergleichbarkeit von Angeboten herstellen.
   - Nachtrag: Regel vor Beginn (Anzeige, Begründung, Freigabe vor Ausführung, Freigabestufen), Prüfung dem Grunde und der Höhe nach, Dokumentation.
   - Abnahme: Protokoll, Mängelliste mit Nachfristen ohne Fristangabe, Fotodokumentation, Freigabe der Schlussrechnung erst nach Abnahme, Übergabe der Unterlagen an die Verwaltung.
5. Slot methodik, Abschnitt "Angebote, Nachträge und Rechnungen prüfen": Vollständigkeit, Mengenansätze, Einheitspreise gegen Pauschalen, Nebenleistungen, Ausschlüsse, Plausibilität von Dauer und Aufwand, Abgrenzung zum Auftrag, Nachweise. Rolle des handwerklichen Kostenverständnisses in einem Absatz, formuliert als Einschätzungsquelle.
6. Slot methodik, Abschnitt "Standards für wiederkehrende Leistungen": Aufbau von Leistungsverzeichnissen und Rahmenvereinbarungen als Struktur (ohne Preise), Herrichtungsstandard für Wohnungen als Steuerungsinstrument der Eigentümerseite; wann Bündelung Steuerung erleichtert und wann sie Abhängigkeit schafft.
7. Slot methodik, Abschnitt "Zuständigkeiten und Kennzahlen" (zwei kurze Absätze mit Links): wer beauftragt, wer prüft, wer nimmt ab, wer gibt Zahlung frei (Link Zuständigkeitsmatrix auf der PM-Seite); Kennzahlarten Termintreue, Nachtragsanteil, Mängel bei Abnahme, Reaktionszeiten, jeweils Definition ohne Zielwert (Link Reporting und Kennzahlen).
8. Slot methodik, Abschnitt "Netzwerk und Interessen": Einschätzung aus dem eigenen operativen Netzwerk, keine bundesweite Kapazität, keine eigene Handwerkerorganisation (Masterprompt Abschnitt 4), Offenlegung nach Regel 1, ein Satz plus Link /zusammenarbeit/#interessen.
9. Vorgehen (Steps, vier): Kette aufnehmen, Standards festlegen, einführen und Beteiligte schulen, nachhalten.
10. Slot szenario: Szenario "Nachträge und Abnahmen ohne Regel". Ausgangslage: Rechnungen übersteigen Angebote regelmäßig, Abnahmen fehlen. Meine Rolle: Kette aufnehmen, Regeln mit Verwaltung und Technik festlegen, erste Vergaben begleiten. Vorgehen, Beteiligte, Arbeitsergebnisse, Messung (Nachtragsanteil und Anteil dokumentierter Abnahmen als Messgröße, kein Wert), Grenzen. Konjunktiv.
11. Abgrenzung: keine Bauleitung, keine Fachplanung, keine Rechtsberatung zu Werkverträgen, Gewährleistung und Haftung (mit Rechtsanwalt zu klären), keine Empfehlung einzelner Betriebe ohne Begründung und Alternativen, keine eigene Handwerkerkapazität. Verwandte Themen: Property-Management-Optimierung, Investitionspriorisierung, Reporting und Kennzahlen, Zusammenarbeit.
12. Fragen und Antworten (vier): Was bringt handwerkliche Erfahrung in der Dienstleistersteuerung? (aus der PM-FAQ verschoben). Sollen Nachträge grundsätzlich abgelehnt werden? Wie viele Angebote sind sinnvoll? (qualitativ, keine Zahl). Wie gehen Sie mit langjährigen Dienstleistern um?
13. Cta.

Faktenrisiko: Mittel bis hoch. Risiken: Kapazitäts- oder Verfügbarkeitsbehauptungen zum Netzwerk, Nennung von Betrieben, Preis- oder Stundensatzangaben, vertragsrechtliche Aussagen zu Werkvertrag, Abnahmefolgen oder Gewährleistung, Abdriften in Verwaltungsalltag. Vermeidung: Netzwerk ausschließlich als Einschätzungsquelle; keine Betriebs- oder Partnernamen; keine Zahlen; rechtliche Fragen allgemein mit Verweis; jeder Abschnitt aus Sicht der steuernden Eigentümerseite formuliert; Abschnitt Netzwerk und Interessen sowie die Hero-Formulierung ausdrücklich durch Timo Müller freigeben (Textfreigabe Launch-Checkliste). Vor Launch in die Erlaubnisprüfung aufnehmen, dass keine Bauleitung oder Planung zugesagt wird.

### 3.4 /reporting-und-kennzahlen/

- Title: Reporting und Kennzahlen für Eigentümer | Timo Müller
- Description: Eigentümerreporting, das Entscheidungen auslöst: Kennzahlen mit Definition, Quelle und Verantwortlichem, Berichtsaufbau und Rhythmus. Ohne Zielwerte.
- H1: Reporting und Kennzahlen für Eigentümer und Geschäftsleitungen
- Eyebrow: Vertiefung
- Datei: src/pages/reporting-und-kennzahlen.astro auf Fachseite.astro; Service-Markup mit sichtbaren Blöcken; Breadcrumb Beratung / Reporting und Kennzahlen (zweistufig).
- Priorität: Stufe 1.

Zweck: Querschnittsvertiefung. Reporting ist Arbeitsergebnis aller drei Mandatsformen und heute auf AM-, PM- und KI-Seite verteilt. Die Seite wird Heimatort für Kennzahlendefinitionen, Kennzahlensteckbrief, Berichtsaufbau, Datenherkunft und Berichtsrhythmus. Sie zeigt den Kern der Positionierung: Wie aus einem Bericht eine Entscheidung wird.

Suchintention: Orientierung mit Beratungsabsicht. Themenhypothesen: Eigentümerreporting Immobilien Kennzahlen, Asset Management Reporting aufbauen, Kennzahlen Wohnungsbestand Eigentümer, Plan-Ist-Vergleich Immobilienportfolio.

Gliederung:

1. Hero. Ausgangsfrage: "Beantwortet Ihr Bericht die Fragen, über die Sie entscheiden müssen?" Intro: Ein Bericht ist gut, wenn er Entscheidungen auslöst. Dafür braucht eine Geschäftsführung wenige Kennzahlen mit klarer Definition, Datenquelle, Verantwortlichem und einer festgelegten Konsequenz bei Abweichung.
2. Passende Situationen (vier Karten): Berichte ohne Konsequenz. Abweichende Zahlen je Quelle. Zu viele Kennzahlen, Verwaltungsreport statt Eigentümerbericht. Gremien brauchen eine andere Sicht als das Tagesgeschäft.
3. Leistungsumfang (sichtbar): Fragen der Geschäftsführung erheben. Kennzahlenset reduzieren und definieren. Datenherkunft und Verantwortliche festlegen. Berichtsaufbau und Rhythmus an Entscheidungstermine koppeln. Einführung begleiten und nach den ersten Zyklen anpassen. Arbeitsergebnisse (Aside): Kennzahlensteckbriefe, Berichtsstruktur als Muster ohne Werte, Datenherkunftsliste, Berichtskalender ohne feste Rhythmusvorgabe, Maßnahmen- und Beschlussverfolgung im Bericht.
4. Slot methodik, Abschnitt "Fünf Fragen, die ein Eigentümerbericht beantwortet" (.checklist): Wo stehen wir zum Plan? Was hat sich verändert? Wo sind Abweichungen und warum? Welche Entscheidungen stehen an? Was ist umgesetzt?
5. Slot methodik, Abschnitt "Kennzahlenset nach Ebenen" (Tabelle in .table-wrap, Spalten Ebene, Kennzahl, Wofür sie steht; keine Zielwerte): Ertrag (Sollmiete und Istmiete, Leerstand nach Ursache, Forderungen nach Alter); Kosten (Plan und Ist, umlagefähig und nicht umlagefähig); Substanz (Investitionsfortschritt, bekannter Rückstand); Prozess (Bearbeitungszeiten, offene Vorgänge, Nachtragsanteil); Liquidität (Vorschau, Finanzierungstermine). Fester Satz: Kandidaten, kein Pflichtset; jedes Haus wählt wenige.
6. Slot methodik, Abschnitt "Der Kennzahlensteckbrief" (.dl-grid): Definition, Datenquelle, Berechnungsweg, Rhythmus, Verantwortlicher, Schwelle für Handlung (vom Auftraggeber festzulegen, ohne Beispielwert), zuständiges Gremium.
7. Slot methodik, Abschnitt "Eine Quelle je Kennzahl": Datenherkunft dokumentieren, Abstimmung zwischen Verwaltungssystem und Buchhaltung, Zuständigkeit für Datenpflege, Umgang mit Systemgrenzen; Verweis auf den Beitrag "Daten zuerst" (bedingt).
8. Slot methodik, Abschnitt "Aufbau eines Berichts" (nummerierte Liste, Struktur ohne Werte, gekennzeichnet als Muster): eine Seite Überblick, Abweichungen mit Erklärung, Maßnahmen- und Beschlussstatus, anstehende Entscheidungen, Anhang mit Detaildaten.
9. Slot methodik, Abschnitt "Rhythmus und Adressaten": operative und strategische Sicht, Berichtstermin als Entscheidungstermin mit Protokoll und Nachverfolgung, Rhythmen als Beispiele ohne Vorgabe; Gremienvorlagen werden an die Formate des Auftraggebers angepasst.
10. Slot methodik, Abschnitt "Einführung in Schritten" und "KI-Schnittstelle": reduzieren, definieren, testen, nach einigen Zyklen anpassen; Berichtsentwürfe aus geprüften Daten mit Herkunftsnachweis je Zahl, Freigabe durch Verantwortliche (Link KI-Seite).
11. Vorgehen (Steps, vier): Fragen erheben, Kennzahlen definieren, Bericht und Termin koppeln, nachhalten und anpassen.
12. Slot szenario: Szenario "Reporting ohne Konsequenz". Ausgangslage: Geschäftsführung erhält Berichte, Entscheidungen bleiben aus. Meine Rolle, Vorgehen (Fragen erheben, Set reduzieren, Termin koppeln, Maßnahmenverfolgung), Beteiligte, Arbeitsergebnisse, Messung (Anteil der Berichtstermine mit gefasstem Beschluss als Messgröße, kein Wert), Grenzen. Konjunktiv.
13. Abgrenzung: kein Ersatz für Buchhaltung, Jahresabschluss oder Bewertungsgutachten; keine Benchmarks, keine Zielwerte; Kennzahlen ersetzen keine Kenntnis der Objekte und keine Entscheidung. Verwandte Themen: Asset-Management-Beratung, Property-Management-Optimierung, KI im Immobilienmanagement, Zusammenarbeit.
14. Fragen und Antworten (vier): Wie viele Kennzahlen sind sinnvoll? (aus der PM-FAQ verschoben). Was tun bei widersprüchlichen Zahlen? Wer erstellt den Bericht, Verwaltung oder Eigentümerseite? Reicht das Verwaltungssystem aus?
15. Cta.

Faktenrisiko: Niedrig. Kennzahlendefinitionen sind Methodik. Risiken: Zielwerte, Branchenvergleiche, ein als typisch ausgegebener Beispielbericht mit Werten, Rhythmusvorgaben. Vermeidung: Tabelle und Muster ohne Werte, jede Struktur als Muster gekennzeichnet, Schwellen ausdrücklich Sache des Auftraggebers, keine Softwarenamen.

### 3.5 /glossar/

- Title: Glossar Asset Management und Portfoliosteuerung | Timo Müller
- Description: Begriffe der Portfoliosteuerung, wie sie auf dieser Website verwendet werden: Asset und Property Management, CAPEX, OPEX, Instandhaltungsstau, Objektstrategie.
- H1: Glossar: Begriffe aus Asset Management und Portfoliosteuerung
- Eyebrow: Einblicke
- Dateien: src/pages/glossar.astro (Base.astro, Breadcrumb Einblicke / Glossar), src/data/glossar.ts (Daten).
- Priorität: Stufe 2.

Zweck: Setzt die Masterprompt-Vorgabe "Fachbegriffe beim ersten Auftreten erläutern" zentral um, stärkt die interne Verlinkung und gibt gemischten Entscheiderteams (Gesellschafter, Beirat, Rechnungswesen) eine gemeinsame Sprache. Eine Seite mit Ankernavigation, keine Einzelseiten je Begriff. Nur Begriffe, die auf der Website vorkommen. Kein Lexikon.

Suchintention: Informationell. Themenhypothesen: Unterschied Asset Management Property Management, CAPEX OPEX Immobilien Bedeutung, Instandhaltungsstau Definition, Objektstrategie Immobilien.

Gliederung:

1. Hero. Wozu das Glossar dient, wie es aufgebaut ist: Definition in zwei bis drei Sätzen, ein Satz Bedeutung für die Steuerung, Verweis "Auf dieser Website" auf den Heimatort.
2. Ankernavigation nach Themenblöcken (Liste mit Sprunglinks, kein JavaScript): Ebenen und Rollen, Wirtschaftlichkeit, Vermietung und Forderungen, Instandhaltung und Investition, Steuerung und Reporting, Zusammenarbeit und Vertrag, KI und Daten.
3. Ebenen und Rollen: Asset Management; Property Management (mit Abgrenzung zu Facility Management); Mandat und Sparring.
4. Wirtschaftlichkeit: CAPEX; OPEX; Umlagefähige Kosten (allgemein, Verweis Rechtsberatung); Liquiditätsplanung; Prolongation; Objektstrategie (Halten, Entwickeln, Verkaufen).
5. Vermietung und Forderungen: Leerstandsquote und Leerstandstage (mit Leerstandsursache); Forderungsalter.
6. Instandhaltung und Investition: Instandhaltungsstau (mit Instandhaltungshistorie); Technische Abhängigkeit und Bündelung; Modernisierung nur als Hinweis, dass die mietrechtliche Einordnung Rechtsberatung ist.
7. Steuerung und Reporting: Portfolio-Einordnung; Kennzahlensteckbrief; Plan-Ist-Abgleich; Entscheidungsvorlage; Maßnahmenplan; Zuständigkeitsmatrix und Wertgrenze.
8. Zusammenarbeit und Vertrag: Vertraulichkeitsvereinbarung; Leistungsbeschreibung; Nachtrag; Abnahme.
9. KI und Daten: Stammdaten und Datenqualität; Freigabe durch Menschen.
10. Hinweis am Ende: Definitionen dienen der Orientierung, rechtliche und steuerliche Einordnungen erfolgen durch die jeweiligen Berater.
11. Reduzierter Kontaktabschluss: Textlink auf /kontakt/ statt dunkler Cta-Fläche.

25 Begriffe. Je Begriff ein Eintrag mit id in src/data/glossar.ts. Strukturierte Daten optional als DefinedTermSet, nur wenn der sichtbare Inhalt entspricht; keine Rich-Result-Erwartung. Verwaltungsvokabular wie Mahnstufe, Einbringlichkeit oder Extraktion wird nicht aufgenommen, damit die Seite nicht wie eine Verwalterseite liest.

Faktenrisiko: Niedrig bis mittel. Rechtlich geprägte Begriffe (Umlagefähigkeit, Abnahme, Nachtrag, Prolongation, Modernisierung) bergen das Risiko ungenauer Rechtsaussagen. Vermeidung: keine Paragraphen, keine Prozent- oder Richtwerte, keine Fristen, allgemeine Formulierung, Prüfhinweis am Ende, fachliche Prüfung vor Veröffentlichung (Launch-Checkliste, Textfreigabe).

## 4. Neue und gekürzte Abschnitte je bestehender Seite

Regel: Jede Änderung ist entweder eine Ergänzung, eine Kürzung zugunsten eines Heimatorts oder eine Verlinkung. Bestehende Texte des Masterprompts (Hero, Ausgangslagen, Mandate, vier Schritte, Cta) bleiben im Wortlaut.

### 4.1 Startseite /

- Hero: Rechts Portrait-Variante hero 4:5 (portrait-1) statt des Kurzprofil-Kastens. Der Kurzprofil-Kasten (Eigentümerperspektive, Unternehmerische Verantwortung, Operatives Verständnis) wird zur dreispaltigen Leiste unmittelbar unter dem Hero (Klasse .kurzprofil-leiste, helle Fläche, Orange-Linie oben, Link Zum Profil). Inhalt unverändert. Ohne Porträtdatei zeigt der Hero den typografischen Platzhalter in gleicher Größe.
- Neuer Abschnitt "Für wen" nach den Ausgangslagen (section--flaeche, .dl-grid oder vier schlanke Karten): Eigentümer und Family Offices mit größerem Bestand (typische Frage: Halten, Entwickeln oder Verkaufen je Objekt?); Geschäftsführungen und Vorstände von Bestandshaltern (Wo hilft ein Blick von außen mit Eigentümerperspektive?); Asset- und Portfoliomanagement-Teams (Wie schließen wir die Lücke zwischen Beschluss und Tagesgeschäft?); verantwortliche Teams von Immobilienfonds (Wie verbinden wir Anlegerfragen mit der operativen Realität?). Schlusssatz aus dem Masterprompt: Schwerpunkt größere Wohnimmobilienbestände in Deutschland, fachlich passende kleinere Portfolios sind willkommen. Keine Größenschwelle, keine Erfahrungsbehauptung je Segment. Textlink "Fünf Fragen an Ihr Portfolio" auf /asset-management-beratung/#selbstpruefung.
- Abschnitt Beratung: Karten unverändert. Unter dem bestehenden Fußsatz ein Verweisblock "Vertiefungen" mit drei Zeilen (Label, ein Satz, Link): Investitionspriorisierung, Dienstleistersteuerung, Reporting und Kennzahlen.
- Abschnitt Arbeitsweise: unverändert.
- Abschnitt Persönlicher Ansatz: Absätze eins und zwei bleiben. Absatz drei (persönliche Mandatsarbeit, Spezialisten, Offenlegung) wird auf einen Satz mit Link gekürzt: "Wie ich arbeite und welche Interessen ich offenlege, steht unter Zusammenarbeit." Link auf /zusammenarbeit/#interessen.
- Abschnitt KI: unverändert.
- Abschnitt "So würde ich vorgehen": Inhalt bleibt (Wohnungsbestand mit mehreren Verwaltungseinheiten, uneinheitlichem Reporting, nicht beziffertem Instandhaltungsstau), wird aber über die Komponente Szenario.astro in die sieben Felder gebracht: Ausgangslage, Meine Rolle, Vorgehen, Beteiligte auf Ihrer Seite, Arbeitsergebnisse, Woran Erfolg gemessen würde (Art der Messung, kein Wert), Grenzen. Der bestehende Hinweis "Schematische Darstellung" bleibt. Neuer Satz mit Link: "Was ein echter Fall zusätzlich braucht, steht in den Redaktionsgrundsätzen" (/einblicke/#redaktionsgrundsaetze). Die Formulierung "die zehn größten offenen Themen" wird zu "die größten offenen Themen" (keine Zahl), "monatlich" bleibt als Beispiel eines Rhythmus zulässig, wird aber zu "in festem Rhythmus" neutralisiert.
- Neuer bedingter Abschnitt "Aktuelle Einblicke" vor dem Cta: rendert nur, wenn veroeffentlichteBeitraege() mindestens einen Beitrag liefert; zwei bis drei Karten mit Titel, Kernaussage, Link. Kein Hinweis auf kommende Beiträge.
- Cta: bekommt sitewide die Zusatzzeile "Was nach Ihrer Anfrage passiert" (Cta.astro).
- Ergebnis: Hero, Kurzprofil-Leiste, Ausgangslagen, Für wen, Beratung mit Vertiefungen, Arbeitsweise, Persönlicher Ansatz (gekürzt), KI, So würde ich vorgehen, Einblicke (bedingt), Cta. Ein neuer Abschnitt netto, die Seite bleibt kompakt.

### 4.2 /asset-management-beratung/

- Neuer Abschnitt "Eigentümerziele klären" nach den Fragen (.prose plus .checklist): Bestandserhalt, laufender Ertrag, Liquidität, Wachstum, Anlagehorizont, Risikotragfähigkeit, Übergabe- oder Verkaufsüberlegungen. Als Fragen formuliert, die vor der ersten Objektstrategie beantwortet werden, nicht als Beratungsleistung zu Nachfolge oder Steuern. Schließt die Masterprompt-Lücke Abschnitt 8.
- Neuer Abschnitt "Typische Anlässe für ein Mandat" (fünf Einträge in .checklist): Zukauf oder Zusammenführung von Teilportfolios, Ergebnisrückgang ohne klare Ursache, anstehende Finanzierungsentscheidung, Wechsel in Geschäftsführung oder Verwaltung, Aufbau oder Entlastung einer eigenen Asset-Management-Funktion. Als Anlässe formuliert, nicht als Referenzen.
- Neuer Abschnitt "Fünf Fragen an Ihr Portfolio" (id="selbstpruefung", .checklist ohne Punktevergabe): Können drei Beteiligte dieselbe Leerstandsquote nennen? Ist der Instandhaltungsrückstand beziffert und priorisiert? Hat jede beschlossene Maßnahme Verantwortlichen, Budget und Termin? Beantwortet Ihr Reporting die Fragen der Geschäftsführung? Wissen Verwaltung und Eigentümerseite, wer bis zu welcher Grenze entscheidet? Abschluss: "Bleiben zwei Fragen offen, lohnt ein Gespräch." Begründung für den Ort: Die Startseite bleibt kompakt, die AM-Seite ist der Hub und trägt bereits die Passungs-FAQ.
- Mandate: je Mandatsform eine Zeile "Vertiefung" im .dl-grid: A verweist auf Reporting und Kennzahlen (und den Beitrag Daten zuerst, sobald freigegeben); B auf Investitionspriorisierung und Dienstleistersteuerung; C auf Zusammenarbeit (Rhythmus, Rollen). Im Mandat C wird "zum Beispiel monatlich" zu "in festem Rhythmus" (kein Rhythmusversprechen).
- Entscheidungsunterlagen: neue sechste Karte oder Unterabschnitt "Aufbau einer Entscheidungsvorlage" als Mustergliederung ohne Zahlen: Ausgangslage, Fragestellung, Optionen, Annahmen und Datenbasis, Wirtschaftlichkeit und Risiken je Option, Empfehlung, benötigte Entscheidung, nächste Schritte. Hinweis: Vorlagen werden an die Gremienformate des Auftraggebers angepasst. Glossar-Link Entscheidungsvorlage.
- Fragen, die bearbeitet werden: unter der Szenarienfrage ein Link auf den Beitrag "Halten, Entwickeln oder Verkaufen" (bedingt, erst nach Freigabe).
- FAQ: neu "Kann eine Zusammenarbeit mit einem einzelnen Objekt oder Teilportfolio beginnen?" FAQ "Wie werden Honorar und Umfang festgelegt?" auf zwei Sätze kürzen plus Link Zusammenarbeit. FAQ "Wie gehen Sie mit vertraulichen Daten um?" auf zwei Sätze kürzen plus Link. FAQ Hausverwaltung bleibt (Kern der Abgrenzung).
- Abgrenzung: fünfter Punkt "Verbundene Unternehmen und Interessen lege ich offen, bevor ich eine Empfehlung ausspreche" mit Link /zusammenarbeit/#interessen.
- Glossar-Links beim ersten Auftreten von Objektstrategie, Sparring, Entscheidungsvorlage, Portfolio-Einordnung.

### 4.3 /portfoliooptimierung/

- Situation ergänzen (fünfte Karte, Raster bleibt bei auto-fit): "Bestand halten bei knapper Liquidität": Reihenfolge und Liquiditätswirkung der Maßnahmen entscheiden, keine Finanzierungsvermittlung.
- Leistungsblock "Instandhaltung und Investitionen (CAPEX)": Begriffserläuterung bleibt (Masterprompt Abschnitt 8). Die Priorisierungslogik wird auf zwei Sätze gekürzt und verlinkt: "Wie Maßnahmen in eine begründete Reihenfolge kommen, beschreibe ich unter Investitionspriorisierung."
- Leistungsblock "Liquidität und Finanzierungsschnittstelle": zusätzlicher Verweis auf den Investitionsplan mit Zeitachse (Investitionspriorisierung).
- Leistungsblock "Leerstand und Vermietung": unverändert, plus bedingter Link auf den Beitrag "Leerstand je Einheit" nach Freigabe. Keine neue Sektion zur Prozesskette (Heimatort ist der Beitrag).
- FAQ neu: "Ist der Verkauf einzelner Objekte Teil der Portfoliooptimierung?" (Verkauf als mögliches Ergebnis der Objektstrategie; steuerliche und rechtliche Folgen mit Steuerberater und Rechtsanwalt; Link Beitrag Objektstrategie, bedingt). FAQ CAPEX/OPEX bleibt (beantwortet die Steuerungsfrage), erhält Glossar-Links.
- Verwandte Themen: plus Investitionspriorisierung, Reporting und Kennzahlen, Zusammenarbeit.
- Kein Rechenbeispiel, keine Vier-Felder-Grafik (Heimatort der Matrix ist Investitionspriorisierung).

### 4.4 /property-management-optimierung/

- Slot methodik, neuer Abschnitt "Zuständigkeitsmatrix schematisch" (Tabelle in .table-wrap): Zeilen Entscheidungsarten (Instandsetzung, Herrichtung, Vergabe, Mietanpassung, Forderungsmaßnahme), Spalten Verwaltung entscheidet, Eigentümerseite entscheidet, Antwortfrist vereinbart. Zellen enthalten Stufen (Stufe 1, Stufe 2, nach Vereinbarung), keine Beträge, keine Fristen. Figcaption-Satz: Beispielstruktur, Wertgrenzen und Fristen legt jedes Haus selbst fest.
- Slot methodik, neuer Abschnitt "Wenn eine Maßnahme stockt: Eskalation und Nachhalten" (kurz): Eskalationsweg, Ursache im Prozess statt bei Personen, Dokumentation, Wiedervorlage. Link auf den Beitrag Asset und Property Management (bedingt).
- Situation ergänzen: "Mehrere Verwaltungen nach Zukauf" (einheitliche Standards, Berichtsformate und Datenstände über Verwaltungseinheiten hinweg), Link Beitrag Nach dem Zukauf (bedingt).
- Leistungsblock "Dienstleisterkoordination": Kernaussage in zwei Sätzen plus Link Dienstleistersteuerung. Leistungsblock "Kennzahlen und Reporting": Kernaussage plus Link Reporting und Kennzahlen.
- FAQ: "Was bringt handwerkliche Erfahrung" und "Wie viele Kennzahlen sind sinnvoll?" wandern zu den Vertiefungen. Ersatz: "Können mehrere Verwaltungen im Bestand einheitlich gesteuert werden?" und "Wie unterscheidet sich das von einem Verwalterwechsel?" (Antwort: Prozessarbeit zuerst, Wechsel höchstens Analyseergebnis, Link #interessen).
- Abgrenzung: Punkt drei (Offenlegung) auf einen Satz plus Link /zusammenarbeit/#interessen kürzen und um den Hinweis auf die eigene Interessenlage als Geschäftsführer einer Hausverwaltung ergänzen. Punkt eins (keine Verwaltersuche, muellerhv.de) bleibt.
- Keine WEG-Steuerungsthemen (Hausgeld, Rücklagen, Beschlüsse) auf dieser Seite, damit sie nicht als Verwalterseite liest (Masterprompt Abschnitt 8, Jury).
- Verwandte Themen: plus Dienstleistersteuerung, Reporting und Kennzahlen, Zusammenarbeit.

### 4.5 /ki-immobilienmanagement/

- Slot methodik, neuer Abschnitt "Was ein Pilot enthält" (führt die Prüfliste vor jeder Automatisierung aus Konzept 0 und den Pilotabschnitt aus Konzept 1 zusammen, .checklist): Umfang und Anwendungsfall, Datenquelle und Datenqualität, Rechtsgrundlage und Auftragsverarbeitung, Zugriffsrechte, menschliche Freigabe, Erfolgs- und Abbruchkriterien, Verantwortliche, Rückfallweg ohne KI. Keine Werkzeug- oder Anbieternamen.
- Neuer Absatz "Mandantendaten und KI": Einsatz nur nach ausdrücklicher Vereinbarung und Prüfung, Links auf /zusammenarbeit/ (Vertraulichkeit) und Datenschutzerklärung.
- Flag-Abschnitt "Entwicklungsstand eigener Anwendungen": Konstante `entwicklungsstand: string | null = null`; rendert ausschließlich eine von Timo Müller freigegebene, nüchterne Beschreibung des tatsächlichen Stands (Freigabepunkt 32); sonst vollständig ausgeblendet. Die bestehende Abgrenzung zu eigenen Anwendungen bleibt.
- Leistungsblock "Berichtsentwürfe" verlinkt auf Reporting und Kennzahlen, "Strukturierte Vorgangsbearbeitung" und "Maßnahmenverfolgung" auf Property-Management-Optimierung und Dienstleistersteuerung.
- Glossar-Links bei Plan-Ist-Abgleich, Freigabe durch Menschen, Stammdaten und Datenqualität.
- Verwandte Themen: plus Reporting und Kennzahlen, Beitrag KI kontrollierter Einstieg (bedingt).

### 4.6 /profil/

- Hero: Portrait-Variante hero 4:5 über die Komponente (ersetzt die Inline-Fläche, identische Maße). Funktionen und Kontakt unverändert.
- Abschnitt "Warum ich Strategie und Betrieb verbinde": daneben Portrait-Variante arbeit 3:2 (portrait-3), bis zur Freigabe Platzhalter.
- Neuer Abschnitt "Arbeitsprinzipien" (.checklist, sechs Punkte): Bestehendes unabhängig prüfen; Prioritäten begründen; Annahmen und Datenlücken offenlegen; Verwaltung von Anfang an einbinden; Wirkung nachhalten; keine Ergebnisversprechen. Einziger Heimatort für Haltungssätze.
- Abschnitt "Zusammenarbeit": wird durch einen Haltungssatz plus Link ersetzt: "Ich arbeite persönlich am Mandat und binde bei Bedarf geeignete Spezialisten ein. Ablauf, Vertraulichkeit und die Offenlegung meiner Interessen beschreibe ich unter Zusammenarbeit." Kein eigener Abschnitt "Rollen und Interessen" (Heimatort #interessen).
- Neuer Abschnitt "Kurzprofil zum Weitergeben" (id="kurzprofil"): drei bis vier Sätze in neutraler dritter Person ausschließlich aus Faktenlisteninhalten (Funktionen Nr. 5 bis 8, Netzwerk Nr. 9 ohne Kapazität, KI Nr. 10 als Entwicklungsstand), als kopierbarer Textblock (blockquote in .note, kein JavaScript nötig) für die interne Abstimmung des Entscheiders mit Gesellschaftern oder Beirat. Deckt die Masterprompt-Vorgabe zu Textbausteinen ab; der LinkedIn-Baustein in docs/SEO-MATRIX.md verweist darauf.
- Neuer Abschnitt "Fragen an mich" (Faq, vier Einträge, FAQPage-Markup zusätzlich zur ProfilePage): Warum berate ich, obwohl ich selbst investiere? Beraten Sie auch Eigentümer, deren Verwaltung nicht die Hausverwaltung Müller ist? (Ja.) Wo arbeiten Sie? (Deutschland, ohne Regionalversprechen, Arbeitsform wird im Angebot vereinbart.) Wie halten Sie Beratung und eigene Interessen auseinander? (Verweis #interessen.)
- Unverändert: Timeline rendert nur freigegebene Stationen (weiterhin leer), Downloadbutton nur bei Datei, LinkedIn nur nach Freigabe.

### 4.7 /einblicke/

- Leerzustand: Die Liste angekündigter Titel entfällt (Masterprompt Abschnitt 6, keine Coming-soon-Inhalte). Stattdessen ein Satz: "Beiträge erscheinen nach fachlicher Prüfung und Freigabe." plus Verweis auf die Beratungsseiten.
- Indexierung: `noindex={beitraege.length === 0}` in einblicke/index.astro; astro.config.mjs schließt /einblicke/ aus der Sitemap aus, solange keine Datei in src/content/einblicke `status: freigegeben` trägt (Prüfung per fs zur Buildzeit). Beides hebt sich mit dem ersten freigegebenen Beitrag automatisch auf.
- Neuer Abschnitt "Redaktionsgrundsätze" (id="redaktionsgrundsaetze", .checklist): Kernaussage zuerst; fachliche Prüfung vor Veröffentlichung; Quellen bei Tatsachenaussagen; keine Kundenfälle ohne Freigabe; echtes Änderungsdatum; keine erfundenen Ich-Erlebnisse. Unterabschnitt "Was ein echter Fall zusätzlich braucht": belegtes Ergebnis, Zeitraum, Messmethode, Freigabe des Eigentümers, Abgrenzung des eigenen Beitrags bei gemeinsamen Projekten. Heimatort dieses Hinweises.
- Link auf /glossar/ im Einleitungstext.
- Ordnung nach Themenfeldern erst ab etwa sechs freigegebenen Beiträgen; bis dahin flache Liste. Keine Kategorie- oder Tag-Seiten.

### 4.8 /einblicke/[slug]/

- Autorenkasten.astro am Beitragsende: Portrait autor 1:1, zwei Sätze aus PERSON.funktionen, Link Profil.
- Block "Begriffe in diesem Beitrag": Links aus Frontmatter `glossar` (Array von ids), rendert nur bei Einträgen.
- Block "Verwandte Beiträge": aus Frontmatter `verwandt` (Slugs), rendert nur, wenn mindestens drei Beiträge freigegeben sind und die Ziele veröffentlicht sind.
- "Passende Beratung" bleibt einziger Beratungslink.
- Glossar-Links ergänzen im Beitragstext die Erläuterung beim ersten Auftreten.

### 4.9 /kontakt/

- Neuer Abschnitt unter dem Formular "Was nach der Anfrage passiert" (.steps, drei Schritte): persönliche Rückmeldung, Erstgespräch, Einschätzung mit Vorschlag der Mandatsform. Keine Fristzusage außer der bestehenden Formulierung im Kasten. Link /zusammenarbeit/.
- Kasten "Direkt erreichen": Portrait autor 1:1 (portrait-2) oben, feste Maße. Die Liste "Was hilft für eine erste Einschätzung" wird auf zwei Sätze gekürzt: "Für eine erste Einschätzung genügen Art und ungefähre Größe des Bestands, Ihre Rolle und Ihr Ziel. Mieterdaten oder vertrauliche Unterlagen sind nicht nötig, Vertraulichkeit wird vor jedem Datenaustausch vereinbart." plus Link "Was Sie vorbereiten können" auf /zusammenarbeit/.
- Kein zusätzliches Formularfeld (siehe Abschnitt 7). Datenschutzerklärung bleibt unverändert.

### 4.10 /danke/

- Neuer Abschnitt "Was jetzt passiert" (.steps, drei Schritte): Rückmeldung, Erstgespräch, Vorbereitung; ohne Fristzusage.
- Neuer Abschnitt "Zum Weiterlesen": Zusammenarbeit, Investitionspriorisierung, Dienstleistersteuerung, Reporting und Kennzahlen. noindex bleibt.

### 4.11 /404/

- Linkliste wird aus den NAV-Gruppen generiert (Beratungsfelder, Vertiefung und Ablauf) und um Einblicke, Glossar, Profil, Kontakt ergänzt. Keine Handpflege.

### 4.12 /impressum/ und /datenschutz/

- Impressum: unverändert, bis Freigabepunkt 22 (Vertragspartner des Beratungsmandats) entschieden ist. Danach wird der Abschnitt "Hinweis zum Angebot" um die handelnde Gesellschaft ergänzt. Bis dahin kein Platzhalter im Build.
- Datenschutz: keine Änderung. Glossar, Vertiefungen und Zusammenarbeit lösen keine neue Verarbeitung aus. Der Abschnitt Kontaktformular bleibt, weil kein Feld hinzukommt.

## 5. Drei neue Beitragsentwürfe

Alle drei entstehen als Markdown in src/content/einblicke mit `status: entwurf`, ohne `datum`, mit `beratung`, `beratungLabel`, `glossar` und `verwandt`. Sie werden nicht gebaut, bis sie geprüft und freigegeben sind. Jeder Beitrag beginnt mit einer Kernaussage, erklärt Arbeitsschritte, benennt Grenzen und verlinkt zur passenden Beratung. Keine Ich-Erlebnisse, keine Zahlen, Quellenpflicht bei Tatsachenaussagen. Die Thesen sind so gewählt, dass Seite und Beitrag nicht dasselbe sagen: Die im Masterprompt als spätere Beiträge genannten Themen Investitionspriorisierung, Reportingqualität und Dienstleistersteuerung sind in v2 Vertiefungsseiten mit Beratungsabsicht; die Beiträge nehmen benachbarte Thesen.

### 5.1 Halten, Entwickeln oder Verkaufen: Wie eine Objektstrategie begründet wird

- Datei: src/content/einblicke/objektstrategie-halten-entwickeln-verkaufen.md
- Passende Beratung: /asset-management-beratung/
- Glossar: objektstrategie, portfolio-einordnung, entscheidungsvorlage
- Kernaussage: Eine Objektstrategie ist weder Bauchentscheidung noch Tabellenergebnis, sondern eine begründete Wahl zwischen wenigen Szenarien auf Basis von Ertragslage, Zustand, Kapitalbindung und Eigentümerzielen.

Gliederung:
1. Warum je Objekt entschieden wird und nicht je Portfolio.
2. Vier Eingangsgrößen: Ertragslage, Zustand und bekannter Rückstand, Kapitalbindung, Lage und Nachfrage (qualitativ, ohne Marktprognose).
3. Eigentümerziele als Filter: Bestandserhalt, laufender Ertrag, Liquidität, Wachstum (Verweis auf den Abschnitt Eigentümerziele der AM-Seite).
4. Drei Szenarien und ihre typischen Fragen: Halten (Instandhaltung und Vermietung sichern), Entwickeln (Investition, Dauer, Risiko), Verkaufen (Zeitpunkt, Vorbereitung, Verwendung des Erlöses).
5. Vom Szenario zur Objektstrategie: Zielrichtung, Maßnahmen, Zeitrahmen, Kennzahlen, Verantwortliche; Aufbau der Entscheidungsvorlage.
6. Typische Fehler: Verkauf aus Ärger über ein Objekt, Entwickeln ohne belegte Nachfrage, Halten aus Gewohnheit.
7. Grenzen: steuerliche und rechtliche Folgen gehören zu Steuerberater und Rechtsanwalt; kein Bewertungsgutachten; der Beitrag beschreibt ein Vorgehen, kein Mandat.

### 5.2 Nach dem Zukauf: In welcher Reihenfolge ein heterogener Bestand steuerbar wird

- Datei: src/content/einblicke/nach-dem-zukauf-reihenfolge.md
- Passende Beratung: /portfoliooptimierung/; Verweise auf /property-management-optimierung/ und /reporting-und-kennzahlen/
- Glossar: stammdaten-datenqualitaet, zustaendigkeitsmatrix-wertgrenze, kennzahlensteckbrief
- Kernaussage: Nach einem Zukauf entscheidet die Reihenfolge der Vereinheitlichung über die Steuerbarkeit: erst ein gemeinsamer Datenstand, dann Zuständigkeiten und Prozesse, dann Standards und ein Reporting für den Gesamtbestand.

Gliederung:
1. Ausgangslage: mehrere Teilportfolios, Verwaltungen, Systeme und Datenstände unter einem Eigentümer.
2. Schritt 1: Ein Datenstand über alle Teilbestände (Einheitenliste, Leerstand, Forderungen, Verträge mit Laufzeiten). Verweis auf den Beitrag Daten zuerst statt Wiederholung der sechs Datenbereiche.
3. Schritt 2: Zuständigkeiten, Wertgrenzen und Freigabefristen über alle Verwaltungen vereinheitlichen.
4. Schritt 3: Standards angleichen (Herrichtung, Vergabe, Abnahme, Dokumentation).
5. Schritt 4: Ein Bericht für den Gesamtbestand mit denselben Kennzahlendefinitionen.
6. Was bewusst offen bleibt: regionale Unterschiede, laufende Dienstleisterverträge, laufende Verfahren.
7. Typische Fehler: Systemwechsel vor Datenbereinigung, Verwalterwechsel als erster Schritt, neue Standards ohne Kapazität bei den Umsetzenden.
8. Grenzen: kein Ablaufplan mit festen Fristen; kaufvertragliche und rechtliche Fragen beim Rechtsanwalt; der Beitrag beschreibt ein Vorgehen, kein Mandat.

### 5.3 Leerstand je Einheit: Wo zwischen Kündigung und Neuvermietung die Zeit verloren geht

- Datei: src/content/einblicke/leerstand-je-einheit.md
- Passende Beratung: /portfoliooptimierung/
- Glossar: leerstandsquote-leerstandstage, zustaendigkeitsmatrix-wertgrenze, objektstrategie
- Kernaussage: Eine Leerstandsquote beschreibt einen Zustand, keine Ursache. Steuerbar wird Leerstand erst, wenn je Einheit der nächste Schritt, der Verantwortliche und die Wartezeit bis dahin feststehen.

Abgrenzung zur Vermeidung von Redundanz (Jury): Die vier Ursachengruppen bleiben im Beitrag Daten zuerst und werden hier nur mit einem Satz und Link genannt. Dieser Beitrag ist der Heimatort der Prozesskette und der Wartezeiten; die Portfolio-Seite erhält dazu keinen eigenen Abschnitt.

Gliederung:
1. Die Quote und ihre blinden Flecken: gleiche Zahl, völlig verschiedene Probleme (ein Satz zu den Ursachengruppen, Link Daten zuerst).
2. Die Prozesskette: Kündigung, Vorabnahme, Herrichtungsentscheidung, Freigabe, Herrichtung, Vermarktung, Übergabe.
3. Wo die Zeit verloren geht: Wartezeiten zwischen den Schritten, nicht die Arbeitszeit in den Schritten; typische Übergabepunkte zwischen Verwaltung, Eigentümerseite und Dienstleistern.
4. Zuständigkeiten entlang der Kette: wer entscheidet, wer wartet auf wen, welche Wertgrenze verhindert Stillstand.
5. Kennzahlen je Einheit statt einer Quote: Leerstandstage je Prozessschritt, offene Freigaben, Anteil der Einheiten mit festgelegtem nächsten Schritt (Definitionen ohne Zielwerte).
6. Struktureller Leerstand: wann eine Objektstrategie statt einer Vermietungsmaßnahme nötig ist (Verweis auf Beitrag 5.1).
7. Grenzen: keine Marktprognose, keine Mietpreisaussagen, mietrechtliche Fragen beim Rechtsanwalt; der Beitrag beschreibt ein Vorgehen, kein Mandat.

### 5.4 Redaktionsplan (Fortschreibung docs/SEO-MATRIX.md)

1. Daten zuerst (Entwurf vorhanden)
2. Asset Management und Property Management (Entwurf vorhanden)
3. KI kontrollierter Einstieg (Entwurf vorhanden)
4. Halten, Entwickeln oder Verkaufen (Entwurf neu)
5. Nach dem Zukauf (Entwurf neu)
6. Leerstand je Einheit (Entwurf neu)

Investitionspriorisierung, Reportingqualität und Dienstleistersteuerung sind als Vertiefungsseiten umgesetzt (bewusste, begründete Abweichung vom Wortlaut des Redaktionsplans, vom Masterprompt als Kann formuliert). LinkedIn-Teaser für die Beiträge 4 bis 6 werden in docs/SEO-MATRIX.md ergänzt, nichts wird eigenständig veröffentlicht.

## 6. Hauptnavigation und Footer

### 6.1 Hauptnavigation

Bleibt gemäß Masterprompt Abschnitt 6 dreiteilig plus Kontaktbutton: Name mit Unterzeile (Link Startseite), Beratung (Dropdown), Profil, Einblicke, hervorgehobener Button "Portfolio besprechen". Kein vierter Menüpunkt (beide Jurys, Masterprompt).

Dropdown Beratung mit zwei Gruppen und Zwischenüberschriften, desktop zweispaltig (Mindestbreite etwa 36 rem), mobil untereinander, weiterhin details/summary, ohne JavaScript sichtbar:

Gruppe "Beratungsfelder":
- Asset-Management-Beratung (Strategie, Mandatsformen, Zusammenarbeit)
- Portfoliooptimierung (Wirtschaftliche und operative Verbesserung)
- Property-Management-Optimierung (Prozesse, Zuständigkeiten, Umsetzung)
- KI im Immobilienmanagement (Bessere Daten und Abläufe)

Gruppe "Vertiefung und Ablauf":
- Investitionspriorisierung (Instandhaltung und Investitionen ordnen)
- Dienstleistersteuerung (Leistungsbeschreibung, Nachtrag, Abnahme)
- Reporting und Kennzahlen (Berichte, die Entscheidungen auslösen)
- Zusammenarbeit (Vom Erstgespräch bis zur Übergabe)

Das Glossar erscheint nicht im Hauptmenü, sondern auf /einblicke/, in Beiträgen, in Fachseiten (Begriffslinks) und im Footer.

Technik: NAV in src/data/site.ts erhält je Hauptpunkt optional `gruppen: { titel, children }[]`. Header.astro rendert Gruppen als zwei Listen mit Gruppenüberschrift (Element p mit aria-hidden plus aria-labelledby oder eine Überschrift im Untermenü). Escape und Klick außerhalb schließen alle offenen details-Elemente (querySelectorAll statt querySelector). aria-current auf aktivem Haupt- und Untermenüpunkt bleibt; `beratungActive` berücksichtigt alle Gruppen. Mobil unter 1080 px: Toggle wie bisher, Gruppen untereinander mit sichtbarer Gliederung, Kurzbeschreibungen bleiben.

### 6.2 Breadcrumbs

- Fachseiten: Start / Beratung / Seite (bestehend).
- Vertiefungen: Start / Beratung / zugeordnete Fachseite / Vertiefung (Investitionspriorisierung unter Portfoliooptimierung, Dienstleistersteuerung unter Property-Management-Optimierung). Reporting und Kennzahlen: Start / Beratung / Reporting und Kennzahlen, weil der Punkt Beratung bereits auf die AM-Seite zeigt und eine doppelte URL im BreadcrumbList vermieden wird.
- Zusammenarbeit: Start / Beratung / Zusammenarbeit.
- Glossar: Start / Einblicke / Glossar.
- URLs bleiben flach.

### 6.3 Footer

Vier Linkspalten plus Absenderblock, Kennlinie unten wie bisher. Das Raster (auto-fit, Mindestbreite 13 rem) trägt fünf Spalten bei 1.240 px Inhaltsbreite und bricht darunter um.

- Spalte 1: Name, Claim, E-Mail (bestehend).
- Spalte 2 "Beratung": die vier Fachseiten (aus NAV Gruppe Beratungsfelder).
- Spalte 3 "Vertiefung": Investitionspriorisierung, Dienstleistersteuerung, Reporting und Kennzahlen, Zusammenarbeit (aus NAV Gruppe Vertiefung und Ablauf).
- Spalte 4 "Wissen und Weiteres": Einblicke, Glossar, Profil, Kontakt, Impressum, Datenschutz.
- Absenderblock: "Ein Angebot der" mit HVM-Logo, Anschrift, Registerzeile unverändert.

Footer und 404 generieren aus NAV; keine handgepflegten Doppellisten.

### 6.4 Verlinkungsregeln

- Fachseiten verlinken ihre Vertiefungen im gekürzten Leistungsblock und unter Verwandte Themen.
- Jede Vertiefung verlinkt zurück auf ihre Fachseite, auf /zusammenarbeit/ und auf höchstens einen passenden Beitrag (bedingt).
- Beiträge verlinken auf eine Beratungsseite (Frontmatter) und auf Glossareinträge.
- Glossareinträge verlinken auf den Heimatort des Begriffs.
- Die Startseite verlinkt jeden Bereich einmal: Für wen (AM-Seite), Vertiefungen (Verweisblock), Zusammenarbeit (Persönlicher Ansatz, Cta), Einblicke (bedingt).
- Sitemap enthält nur gebaute, indexierbare Seiten; /danke/, 404 und der Einblicke-Leerzustand bleiben ausgeschlossen. Keine Kategorie- oder Tag-Archive.
- SEO-Matrix erhält fünf neue Zeilen (URL, Suchintention, Hauptthema, Title, Description, H1, interne Links, Handlungsziel) und die Redaktionsplan-Fortschreibung.

## 7. Bewusst nicht

| Nicht gebaut | Begründung |
|---|---|
| Vierter Hauptmenüpunkt "Zusammenarbeit" oder Dropdown unter Einblicke | Masterprompt Abschnitt 6 legt die Hauptnavigation fest. Zusammenarbeit und Vertiefungen sind im Dropdown Beratung gruppiert; das trägt die Positionierung (Asset Management vorn) besser als ein weiterer Punkt. |
| Zielgruppen-Landingpages (Bestandshalter, Family Offices, institutionelle Teams) | Ohne belegte Erfahrung je Segment wären es drei strukturell identische Türöffnerseiten (Masterprompt Abschnitte 2 und 10). Ersatz: Abschnitt Für wen auf der Startseite, Selbstprüfung und Anlässe auf der AM-Seite, Kurzprofil zum Weitergeben. |
| Zentrale FAQ-Seite | FAQ bleiben je Seite kontextnah. Eine Sammelseite würde AM-, Portfolio- und Zusammenarbeit-FAQ duplizieren und FAQ-Markup vervielfachen (Masterprompt Abschnitt 8). |
| Eigene Transparenz-Seite | Die Offenlegung erhält einen eigenen Anker /zusammenarbeit/#interessen, den man direkt weitergeben kann. Eine eigene Seite hinge zu drei von fünf Regeln an offenen Freigaben und wäre bis dahin ein Torso. |
| Eigene Seite Arbeitsweise und Methodik | Würde die vier Schritte der Startseite und die Vorgehen-Blöcke aller Fachseiten wiederholen. Methode wird je Handlungsfeld auf den Vertiefungen ausgeführt. |
| Eigene Szenarienseite | Szenarien A bis C würden die Situationen der Fachseiten und zwei Beiträge wiederholen. Stattdessen die Szenario-Komponente auf der Startseite und je ein Szenario pro Vertiefung. |
| Referenzen, Fallstudien, Kundenlogos, anonymisierte Zitate | Faktenliste Nr. 16 offen. Die Fallstudienstruktur ist in Szenario.astro vorbereitet; die Route /referenzen/ wird nicht angelegt und nicht im Menü geführt. |
| Vita, Stationen, Jahreszahlen, Qualifikationen | Faktenliste Nr. 14 offen. Timeline rendert weiterhin nichts. |
| Seite zur Unternehmensgruppe, Beteiligungen, weiteren Gesellschaften | Namen, Quoten und Funktionen jenseits von Müller Holding AG und Hausverwaltung Müller GmbH sind nicht freigegeben. Die Holding hat eine eigene Website. |
| Team-, Partner- oder Netzwerkseite mit Betrieben oder Logos | Netzwerk wird nur als Bezüge beschrieben (Faktenliste Nr. 9), Kapazität wird nicht behauptet, Namen Dritter sind nicht freigegeben. |
| Stadt- oder Regionalseiten | Masterprompt Abschnitt 10 untersagt generische Stadtseiten. Zielmarkt ist Deutschland; Regionalseiten ließen das Angebot wie eine lokale Hausverwaltung wirken. |
| Landingpage Portfolio-Check | Würde mit /portfoliooptimierung/ um dieselbe Suchabsicht konkurrieren und Mandat A verdoppeln. Einstieg wird auf /zusammenarbeit/ beschrieben, Anker auf der AM-Seite bleibt. |
| Übersichtsseite /beratung/ | AM-Seite bleibt Hub; Dropdown und Footer übernehmen die Übersicht. |
| Honorar- oder Preisseite, Tagessätze, Angaben zu Mandatsdauer, Reaktionszeit, Verfügbarkeit, Kapazität | Masterprompt Abschnitt 4: nicht vereinbarte Preise, Verfügbarkeiten und Fristen bleiben offen. Honorarlogik nur nach Freigabe als Flag-Absatz. |
| Aussagen zu Vertragspartner des Beratungsmandats, Berufshaftpflicht, Versicherung | Gesellschaftsfrage ist nicht entschieden (Freigabepunkt 22, Entscheidung der Geschäftsführung). Die Website nennt die Hausverwaltung Müller GmbH als Betreiber; ob sie Vertragspartner wird, ist vor Launch zu klären. |
| Rechenbeispiele, Musterportfolio, Zielwerte, Benchmarks, Richtwerte je Quadratmeter, das optionale CAPEX-Rechenbeispiel | Erzeugen Erwartungen und müssten als Fachaussage belegt werden. Nur schematische Darstellungen ohne Zahlen. Ein Zahlenbeispiel mit offen gelegten Modellannahmen frühestens nach ausdrücklicher Freigabe. |
| Produkt- oder Softwareseite für eigene KI-Anwendungen | Faktenliste Nr. 10 erlaubt nur den Entwicklungsstand. Eine geplante Software ist kein ausgerolltes Kundenprojekt. Abschnitt Entwicklungsstand rendert nur mit Freigabe. |
| Inhalte zu WEG-Verwaltung, Mietverwaltung, Nebenkostenabrechnung, Mietrecht, Verwaltersuche, WEG-Steuerungsthemen (Hausgeld, Rücklagen, Beschlüsse) | Gehört zu muellerhv.de. Die Website darf nicht als zweite Hausverwaltungsseite lesbar sein (Masterprompt Abschnitte 1 und 8). |
| Finanzierungsberatungsseite | Finanzierungsperspektive bleibt Abschnitt auf Portfolio-, Investitions- und Profilseite. Eine eigene Seite würde erlaubnispflichtige Vermittlung nahelegen (Prüfpunkt Launch-Checkliste). |
| Rechts-, Steuer- oder Nachfolgebeiträge (Share Deal, Erbschaft, Abschreibung, Förderprogramme, energetische Pflichten im Detail) | Rechts- und Steuerberatung sind ausgeschlossen, Fehlerrisiko hoch, Verweis auf Berater genügt. |
| Fonds- oder Bewertungsleistungen, regulatorische Sprache | Erlaubnispflichtige oder fremde Berufsfelder. Konsequent als Abgrenzung formuliert. |
| Coaching, Seminare, Vorträge, Newsletter, Download-Leadmagnete, Kalenderwidget, Chatbot, Kundenportal, Login | Positionierung, Datenschutz (keine Einwilligungsverwaltung nötig), Faktenliste Nr. 20 (kein PDF). Downloads erscheinen nur, wenn die Datei im Repository liegt. |
| Presse-, Medien- oder Bekannt-aus-Seite, Auszeichnungen, Zertifikate, Mitgliedschaften, Bewertungen, Zählermodule | Nichts davon ist belegt. Keine Sternebewertungen, keine Zahlenzähler. |
| Vergleiche mit anderen Beratungshäusern oder Verwaltern, Superlative | Positionierung über Eigentümerperspektive, persönliche Arbeit und Umsetzungsnähe, nicht über Abwertung Dritter (Masterprompt Abschnitt 3). |
| Ich-Erlebnisberichte aus Mandaten in Beiträgen oder Szenarien | Masterprompt Abschnitt 10: keine erfundenen Ich-Erlebnisse. Szenarien im Konjunktiv. |
| Kategorie-, Tag- oder Autorenarchive, Kommentare, Glossar-Einzelseiten | Zu dünn, Duplikatrisiko. Themenreihen erst ab etwa sechs freigegebenen Beiträgen als Anker auf einer Seite; Glossar als eine Seite. |
| Glossar über die auf der Website verwendeten Begriffe hinaus | Kein Lexikon, kein Traffic-Ziel, hoher Prüfaufwand bei rechtlich geprägten Begriffen. |
| Zusätzliches Formularfeld "Anlass" | Masterprompt Abschnitt 12 definiert den Feldkatalog. Das Feld erzeugte Änderungen an PHP-Endpunkt und Datenschutzerklärung ohne belegten Konversionsgewinn. |
| Englische Sprachversion | Zielmarkt Deutschland, Pflegeaufwand ohne Nutzen für qualifizierte Anfragen. |
| Stockfotos, KI-generierte Personen- oder Objektbilder, fremde Personen als Platzhalter, Objektbilder ohne Freigabe | Masterprompt Abschnitt 5. Porträtplätze bleiben typografisch, bis echte Dateien vorliegen. |
| Mega-Menü mit Bildern, Pillen-Badges, Kartenwand, Hintergrundvideo, Scroll-Hijacking, Autoplay-Slider, erzwungener Dark Mode, externe Schriften oder CDNs | Ausdrückliche Verbote des Masterprompts und der CI-Vorgabe (Systemschrift). |
| Ankündigungsliste kommender Beiträge auf /einblicke/ | Masterprompt Abschnitt 6: keine Coming-soon-Inhalte indexieren. Leerzustand wird noindex und aus der Sitemap genommen. |
| Änderungen an Impressum und Datenschutzerklärung ohne geklärte Fakten | Fehlende rechtliche Angaben sind ein Freigabehindernis, keine Einladung zum Erfinden (Masterprompt Abschnitt 13). |

## 8. Dateizuständigkeit

Alle Pfade relativ zu /home/user/timo.muellerhv.de. "neu" bedeutet Datei anlegen, "ändern" bedeutet bestehende Datei bearbeiten. Konkurrierende Änderungen derselben Datei sind zu vermeiden; die Spalte Stufe ordnet die Reihenfolge.

| Seite oder Bereich | Datei | Aktion | Kern der Änderung | Stufe |
|---|---|---|---|---|
| Zusammenarbeit | src/pages/zusammenarbeit.astro | neu | Seite nach 3.1 mit Anker #interessen, Flags für Vertragspartner, Honorarlogik, Kostenfreiheit, Ankaufsregel, Vergütung Dritter, Datenhaltung, Vor-Ort-FAQ | 1 |
| Investitionspriorisierung | src/pages/investitionspriorisierung.astro | neu | Vertiefung nach 3.2 auf Fachseite.astro, inline-SVG Bewertungsmatrix, Szenario | 1 |
| Reporting und Kennzahlen | src/pages/reporting-und-kennzahlen.astro | neu | Vertiefung nach 3.4, Kennzahlentabelle, Steckbrief, Szenario | 1 |
| Dienstleistersteuerung | src/pages/dienstleistersteuerung.astro | neu | Vertiefung nach 3.3, Steuerungskette, Szenario | 2 |
| Glossar | src/pages/glossar.astro | neu | Seite nach 3.5 mit Ankernavigation, optional DefinedTermSet | 2 |
| Glossar-Daten | src/data/glossar.ts | neu | 25 Einträge (id, begriff, block, definition, bedeutung, heimatort), Hilfsfunktion glossarHref(id) | 2 |
| Porträt | src/components/Portrait.astro | neu | Varianten hero, arbeit, autor; import.meta.glob; astro:assets; typografischer Fallback | 1 |
| Szenario | src/components/Szenario.astro | neu | Sieben Felder, fester Fußsatz, spätere Fallstudienfelder vorbereitet | 1 |
| Autorenkasten | src/components/Autorenkasten.astro | neu | Portrait autor, zwei Sätze aus PERSON, Link Profil | 2 |
| Fachseite-Layout | src/layouts/Fachseite.astro | ändern | Props crumbs optional, Slots methodik und szenario, Eyebrow bleibt Prop | 1 |
| Cta | src/components/Cta.astro | ändern | Zusatzzeile "Was nach Ihrer Anfrage passiert" mit Link, Prop ohneAblauf | 1 |
| Navigation und Daten | src/data/site.ts | ändern | NAV mit Gruppen Beratungsfelder und Vertiefung und Ablauf, FOOTER-Spalten als Daten | 1 |
| Header | src/components/Header.astro | ändern | Zwei Gruppen im Dropdown, zweispaltig ab Desktop, Escape und Klick außerhalb schließen alle details, beratungActive über alle Gruppen | 1 |
| Footer | src/components/Footer.astro | ändern | Vier Linkspalten plus Absender, aus NAV generiert, Glossar aufgenommen | 1 |
| 404 | src/pages/404.astro | ändern | Liste aus NAV-Gruppen plus Einblicke, Glossar, Profil, Kontakt | 1 |
| Startseite | src/pages/index.astro | ändern | Hero mit Portrait hero, Kurzprofil-Leiste, Abschnitt Für wen, Verweisblock Vertiefungen, Persönlicher Ansatz gekürzt, Szenario-Komponente, bedingte Einblicke | 1 |
| AM-Seite | src/pages/asset-management-beratung.astro | ändern | Eigentümerziele, Anlässe, Selbstprüfung (#selbstpruefung), Vertiefungszeilen je Mandat, Entscheidungsvorlage als Muster, FAQ gekürzt und ergänzt, Abgrenzung mit Link #interessen, Glossar-Links | 1 |
| Portfolio-Seite | src/pages/portfoliooptimierung.astro | ändern | Situation Liquidität, CAPEX-Block gekürzt und verlinkt, Liquiditätsblock verlinkt, FAQ Verkauf, Verwandt erweitert, Glossar-Links | 1 |
| PM-Seite | src/pages/property-management-optimierung.astro | ändern | Slot methodik mit Zuständigkeitsmatrix und Eskalation, Situation Zukauf, Leistungsblöcke gekürzt, FAQ getauscht, Abgrenzung gekürzt und verlinkt, Verwandt erweitert | 2 |
| KI-Seite | src/pages/ki-immobilienmanagement.astro | ändern | Slot methodik "Was ein Pilot enthält", Absatz Mandantendaten, Flag entwicklungsstand, Links auf Vertiefungen, Glossar-Links | 2 |
| Profil | src/pages/profil.astro | ändern | Portrait hero und arbeit über Komponente, Arbeitsprinzipien, Zusammenarbeit gekürzt, Kurzprofil zum Weitergeben, Fragen an mich mit FAQPage | 1 |
| Einblicke Übersicht | src/pages/einblicke/index.astro | ändern | Ankündigungsliste entfernt, Redaktionsgrundsätze (#redaktionsgrundsaetze), Glossar-Link, noindex im Leerzustand | 1 |
| Beitragsseite | src/pages/einblicke/[slug].astro | ändern | Autorenkasten, Block Begriffe, Block Verwandte Beiträge (ab drei freigegebenen) | 2 |
| Beitragsschema | src/content.config.ts | ändern | Optionale Felder glossar (Array von ids) und verwandt (Array von Slugs) | 2 |
| Beitrag 4 | src/content/einblicke/objektstrategie-halten-entwickeln-verkaufen.md | neu | Entwurf nach 5.1, status entwurf | 3 |
| Beitrag 5 | src/content/einblicke/nach-dem-zukauf-reihenfolge.md | neu | Entwurf nach 5.2, status entwurf | 3 |
| Beitrag 6 | src/content/einblicke/leerstand-je-einheit.md | neu | Entwurf nach 5.3, status entwurf | 3 |
| Einblicke-Helfer | src/lib/einblicke.ts | ändern | Funktion verwandteBeitraege(slugs), Zähler für die Drei-Beiträge-Regel | 2 |
| Kontakt | src/pages/kontakt.astro | ändern | Abschnitt Was nach der Anfrage passiert, Kasten mit Portrait autor, Liste auf zwei Sätze gekürzt plus Link | 1 |
| Danke | src/pages/danke.astro | ändern | Was jetzt passiert, Zum Weiterlesen | 1 |
| Impressum | src/pages/impressum.astro | ändern erst nach Freigabepunkt 22 | Hinweis zum Angebot um Vertragspartner ergänzen | nach Freigabe |
| Datenschutz | src/pages/datenschutz.astro | unverändert | keine neue Verarbeitung | |
| Sitemap | astro.config.mjs | ändern | Filter schließt /einblicke/ aus, solange kein Beitrag status freigegeben trägt (fs-Prüfung zur Buildzeit) | 1 |
| Build-Test | scripts/test-build.mjs | ändern | Prüfung der neuen Routen in der Sitemap, Prüfung der Glossar-ids aus Frontmatter, Prüfung "Schematische Darstellung" in jeder figure, Description-Grenze 160 | 1 |
| Stile | src/styles/global.css | ändern | Klassen .kurzprofil-leiste, .szenario, .autorenkasten, .portrait (aus profil.astro herausgelöst), .submenu--gruppen, .glossar-nav; keine neuen Farbwerte | 1 |
| Porträt-Ablage | src/assets/portraits/README.md | ändern | Tabelle nach 1.5 (portrait-2 wird 1:1, Einsatzorte aktualisiert) | 1 |
| Lizenzen | docs/BILDER-LIZENZEN.md | ändern | Zeilen für portrait-1 bis portrait-3 mit Fotograf und Nutzungsrechten, sobald vorhanden | 1 |
| Faktenliste | docs/FAKTENLISTE.md | ändern | Freigabepunkte 22 bis 35 nach Abschnitt 9 | 1 |
| SEO-Matrix | docs/SEO-MATRIX.md | ändern | Fünf neue Zeilen, Redaktionsplan 4 bis 6, LinkedIn-Teaser 4 bis 6, Hinweis Kurzprofil zum Weitergeben | 1 |
| Architektur | docs/ARCHITEKTUR.md | ändern | Routentabelle um fünf Seiten, Komponentenliste, Einblicke-Indexregel | 1 |
| Design-System | docs/DESIGN-SYSTEM.md | ändern | Komponenten Portrait, Szenario, Autorenkasten; Regel für schematische SVG; Untermenü mit Gruppen | 1 |
| Launch-Checkliste | docs/LAUNCH-CHECKLISTE.md | ändern | Neue Freigaben (Abschnitt 9), Erlaubnisprüfung um Dienstleistersteuerung erweitern, Textfreigabe für fünf neue Seiten | 1 |
| README | README.md | ändern | Hinweis auf CONTENT-PLAN-V2.md in der Dokumentationsliste | 1 |

## 9. Neue Freigabepunkte für docs/FAKTENLISTE.md

Jeder Punkt erhält Status offen, Quelle "fehlt" und die Verwendung, damit die zugehörigen Abschnitte per Flag gebaut werden können. Entscheidung durch Timo Müller beziehungsweise die Geschäftsführung; Punkte 22 und 24 bis 27 sind Erklärungen mit Außenwirkung und benötigen ausdrückliche Freigabe.

| Nr. | Aussage | Verwendung | Bis zur Freigabe |
|---|---|---|---|
| 22 | Vertragspartner des Beratungsmandats (Hausverwaltung Müller GmbH, andere Gesellschaft der Gruppe oder Einzelunternehmen). Betreiber der Website ist nicht automatisch Vertragspartner. | /zusammenarbeit/ Abschnitt 7, Impressum Hinweis zum Angebot | keine Aussage, Impressum unverändert |
| 23 | Honorarlogik je Mandatsform (Festpreis, Zeit- oder Pauschalhonorar) | /zusammenarbeit/ Abschnitt 7, AM-FAQ | nur "individuell nach Mandatsform, Umfang und Datenlage" |
| 24 | Keine Provisionen, Vermittlungsentgelte oder Vorteile von Dritten im Zusammenhang mit einem Mandat | /zusammenarbeit/#interessen Regel 5 | Regel nicht gerendert |
| 25 | Kostenfreiheit von Erstgespräch und Kurzeinschätzung | /zusammenarbeit/ Schritte 2 und 3, Kontakt | neutral: "unverbindlich" bleibt, "kostenfrei" entfällt |
| 26 | Regel zu eigenen Ankaufsinteressen bei Verkaufsobjekten aus Mandaten | /zusammenarbeit/#interessen Regel 4 | Regel nicht gerendert |
| 27 | Formulierung Regel 3: keine Nutzung von Mandatsinformationen für Gruppengesellschaften oder den eigenen Bestand | /zusammenarbeit/#interessen Regel 3 | baubar, Wortlaut in der Textfreigabe bestätigen |
| 28 | Datenhaltung im Mandat: Speicherort, Rückgabe oder Löschung nach Mandatsende, Abgleich mit Datenschutzerklärung | /zusammenarbeit/ Abschnitt 6 | nur Zweckbindungssatz |
| 29 | Arbeitsform vor Ort und remote, Begehungen | /zusammenarbeit/ FAQ, Profil FAQ "Wo arbeiten Sie?" | FAQ nicht gerendert, Profil-Antwort ohne Arbeitsform |
| 30 | Kapazitätsaussage zu Mandatsanzahl oder Verfügbarkeit | keine geplante Verwendung | keine Aussage |
| 31 | Berufshaftpflicht oder Versicherungsschutz | keine geplante Verwendung | keine Aussage |
| 32 | Entwicklungsstand eigener KI-Anwendungen (nüchterne Beschreibung) | /ki-immobilienmanagement/ Flag entwicklungsstand | Abschnitt ausgeblendet |
| 33 | Standard der Vertraulichkeitsvereinbarung (Muster vorhanden, wer stellt sie) | /zusammenarbeit/ Schritt 4 | nur "schriftlich vor Datenaustausch" (bestehende Aussage) |
| 34 | Nutzungsrechte und Fotograf der Porträts portrait-1 bis portrait-3 | Portrait.astro, docs/BILDER-LIZENZEN.md | typografischer Platzhalter |
| 35 | Wortlaut der Passung im Abschnitt Für wen (vier Rollen) und der fünf Selbstprüfungsfragen | Startseite, AM-Seite | Teil der allgemeinen Textfreigabe |

## 10. Umsetzungsreihenfolge

- Stufe 1 (Vertrauen und Konversion, geringstes Faktenrisiko nach Flags): Komponenten Portrait, Szenario, Cta-Zeile, Fachseite-Slots, NAV mit Gruppen, Header, Footer, 404; Seiten Zusammenarbeit, Reporting und Kennzahlen, Investitionspriorisierung; Kürzungen und Ergänzungen auf Startseite, AM-Seite, Portfolio-Seite, Profil, Kontakt, Danke; Einblicke-Leerzustand; Dokumente (Faktenliste, SEO-Matrix, Architektur, Design-System, Launch-Checkliste, Lizenzen, README der Porträts).
- Stufe 2: Dienstleistersteuerung, Glossar mit Daten, PM-Seite, KI-Seite, Beitragsseite mit Autorenkasten, Schema-Erweiterung, Einblicke-Helfer.
- Stufe 3: Drei Beitragsentwürfe (parallel zur fachlichen Prüfung der ersten drei).
- Nach jeder Stufe: `npm run build`, `npm test`, Barrierefreiheitsprüfung (scripts/a11y-check.mjs), Screenshots bei 360, 390, 768, 1.024 und 1.440 px, Prüfung auf Gedankenstriche, Prüfung, dass keine Flag-Inhalte im Build erscheinen.
- Vor Launch: Textfreigabe aller neuen Seiten durch Timo Müller, Entscheidung der Geschäftsführung zu Freigabepunkt 22, Erlaubnisprüfung um Dienstleistersteuerung und Investitionspriorisierung erweitern, Rechtstexte fachlich prüfen lassen.

## 11. Abnahmekriterien für diesen Plan

- Kein Gedankenstrich in neuen Texten (Build-Test).
- Keine Zahl, die Bestand, Mandate, Zeiträume, Budgets, Renditen oder Richtwerte beschreibt; Zahlen nur als Aufzählungsindex oder in Klassennamen.
- Jede Aussage zu Vertrag, Honorar, Interessen, Daten hat entweder eine bestehende Quelle auf der Website oder ein Flag mit Freigabepunkt.
- Jeder Heimatort aus Abschnitt 1.2 existiert genau einmal; die gekürzten Stellen enthalten höchstens einen Satz plus Link.
- Hauptnavigation dreiteilig plus Kontaktbutton; ohne JavaScript vollständig sichtbar; Escape schließt alle Untermenüs.
- Porträtplätze rendern in beiden Zuständen mit identischen Außenmaßen; kein Stockfoto, kein KI-Bild.
- Einblicke-Leerzustand ist noindex und nicht in der Sitemap.
- 15 indexierbare Seiten, alle in Sitemap, alle mit selbstreferenzierendem Canonical, einer H1, Title bis 65 und Description bis 160 Zeichen.
