# Fakten- und Freigabeliste timo.muellerhv.de

Stand: 12.09.2026. Nur Aussagen mit Status "freigegeben" oder "Auftraggeberangabe" erscheinen öffentlich. Aussagen mit Status "offen" sind in der Produktionsfassung ausgeblendet oder durch eine Beschreibung des Vorgehens ersetzt.

Umsetzungsregel (Inhaltsplan v2, Abschnitt 1.3): Jeder Abschnitt, der an einem offenen Punkt hängt, ist im Quellcode als Flag angelegt (Konstante mit Wert `false` oder `null`). Ohne Freigabe rendert der Abschnitt nichts. Es gibt keine sichtbaren Platzhalter auf öffentlichen Seiten. Impressum und Datenschutzerklärung bleiben bis zur Klärung ihrer Angaben unverändert und tragen als einzige Seiten Platzhalter in der Arbeitsfassung.

## Teil A: Grundlagen und Freigabepunkte 1 bis 21

| Nr. | Aussage | Quelle | Datum | Status | Verwendung |
|---|---|---|---|---|---|
| 1 | Betreiber: Hausverwaltung Müller GmbH, c/o Müller Holding AG, Rheinpromenade 13, 40789 Monheim am Rhein | HVM-Impressum, Skill hvm-ci | 12.09.2026 | freigegeben, vor Launch erneut prüfen | Impressum, Footer, Datenschutz. Website des Betreibers in `src/data/site.ts` (`OPERATOR.website`) als https://www.muellerhv.de nach Skill hvm-ci; der Masterprompt nennt die Apex-Variante https://muellerhv.de. Welche Variante kanonisch ist (Weiterleitung, Canonical der HVM-Startseite), war aus der Build-Umgebung am 12.09.2026 nicht prüfbar (Proxy antwortet 403) und ist manuell durch Timo Müller oder die IT festzustellen; danach `OPERATOR.website` angleichen (Footer-Logo-Link, mehr-Link der PM-Abgrenzung, Organization.url im JSON-LD) |
| 2 | Amtsgericht Düsseldorf, HRB 104762 | HVM-Impressum, Skill hvm-ci | 12.09.2026 | freigegeben, vor Launch erneut prüfen | Impressum, Footer |
| 3 | Vertreten durch Geschäftsführer Timo Müller | HVM-Impressum, Skill hvm-ci | 12.09.2026 | freigegeben | Impressum, Footer |
| 4 | Kontakt-E-Mail timo@muellerhv.de | Briefing | 12.09.2026 | freigegeben | alle Seiten |
| 5 | Timo Müller ist Vorstand der Müller Holding AG | Briefing (Auftraggeberangabe), mueller-holding.ag/impressum | 12.09.2026 | Auftraggeberangabe | Start, Profil, Zusammenarbeit (Interessen), Autorenkasten |
| 6 | Geschäftsführer mehrerer Unternehmen | Briefing (Auftraggeberangabe) | 12.09.2026 | Auftraggeberangabe, ohne Namen weiterer Gesellschaften | Start, Profil, Zusammenarbeit (Interessen), Autorenkasten |
| 7 | Eigener Immobilienbestand | Briefing (Auftraggeberangabe) | 12.09.2026 | Auftraggeberangabe, ohne Größenangabe | Start, Profil, Zusammenarbeit (Interessen), Autorenkasten. Auf Start (Fakten-Band, Persönlicher Ansatz) und Profil (Kapitel 01 und 02) ist die Eigentümerperspektive als "mit eigenem Kapital (und eigenem Risiko)" ausformuliert (DESIGN-SPEC-V2 6.3, Inhaltsplan 3.2); dieser Wortlaut ist in der Textfreigabe zu bestätigen |
| 8 | Praktische Immobilien- und Verwaltungserfahrung | Briefing (Auftraggeberangabe) | 12.09.2026 | Auftraggeberangabe | Start, Profil, Dienstleistersteuerung (Verwaltungspraxis als Quelle des Kostenverständnisses im Leistungsblock und in der FAQ) |
| 9 | Operatives Netzwerk mit Bezügen zu Schreinerei, Fenster- und Elementebau, Heizung/Sanitär | Briefing (Auftraggeberangabe) | 12.09.2026 | Auftraggeberangabe, ohne Kapazitätsbehauptung, ohne Betriebsnamen | Start, Profil, PM-Seite, Investitionspriorisierung (Achse 3, nur als Kostenverständnis), Dienstleistersteuerung (nur als Einschätzungsquelle), Zusammenarbeit (Interessen) |
| 10 | KI und Automatisierung werden als unternehmerischer Hebel entwickelt | Briefing (Auftraggeberangabe) | 12.09.2026 | Auftraggeberangabe, nur als Entwicklungsstand | KI-Seite, Profil |
| 11 | CI-Farben und Logo HVM | Skill hvm-ci | 12.09.2026 | freigegeben | Design-Tokens, Footer-Logo |
| 12 | Telefonnummer | fehlt | | offen | Impressum (Platzhalter) |
| 13 | USt-IdNr. | fehlt | | offen | Impressum (Platzhalter) |
| 14 | Vita: Stationen, Zeiträume, Funktionen, Qualifikationen | fehlt | | offen | Profil-Timeline (rendert nichts) |
| 15 | Echtes Porträt | fehlt | | offen | Alle Porträtplätze über `src/components/Portrait.astro`: typografische Variante aktiv, Slot 3 im Profil entfällt ohne Datei. Nutzungsrechte siehe Nr. 34 |
| 16 | Referenzfälle | fehlt | | offen | Startseite und Vertiefungen zeigen "So würde ich vorgehen" über `src/components/Szenario.astro`. Die Fallstudienfelder Zeitraum, belegtes Ergebnis und Messmethode rendern nur mit `freigabe: true` |
| 17 | Hosting-Anbieter, Serverstandort, Logfristen | fehlt | | offen | Datenschutz (Platzhalter) |
| 18 | SMTP-Dienst, Absenderadresse, SPF/DKIM/DMARC | fehlt | | offen | Kontaktformular (Endpunkt nicht produktiv getestet) |
| 19 | LinkedIn-Profil-URL | fehlt | | offen | nicht verlinkt |
| 20 | Beraterprofil-PDF | fehlt | | offen | Downloadbutton ausgeblendet (`beraterprofilPdf` in profil.astro) |
| 21 | Zielgröße ab 2.000 Einheiten | Briefing | 12.09.2026 | intern, nicht öffentlich | nur Formular-Auswahlstufen |

## Teil B: Freigabepunkte 22 bis 35 (Inhaltsplan v2, Abschnitt 9)

Entscheidung durch Timo Müller beziehungsweise die Geschäftsführung. Die Punkte 22 und 24 bis 27 sind Erklärungen mit Außenwirkung und benötigen eine ausdrückliche Freigabe. Die Spalte "Flag im Code" nennt die Konstante, die den Abschnitt schaltet. Flags am 12.09.2026 im Quellcode und im Build geprüft (npm test, Stichprobe dist, Integrationsbuild Runde 3): keiner der Bausteine ist ohne Freigabe sichtbar.

| Nr. | Aussage | Quelle | Datum | Status | Verwendung | Bis zur Freigabe | Flag im Code |
|---|---|---|---|---|---|---|---|
| 22 | Vertragspartner des Beratungsmandats: Hausverwaltung Müller GmbH, eine andere Gesellschaft der Gruppe oder das Einzelunternehmen. Der Betreiber der Website ist nicht automatisch Vertragspartner. | fehlt, Entscheidung der Geschäftsführung | | offen | /zusammenarbeit/ Abschnitt "Einschätzung, Angebot und Vertrag"; Impressum "Hinweis zum Angebot" | keine Aussage, Impressum unverändert | `vertragspartnerFreigabe` in zusammenarbeit.astro |
| 23 | Honorarlogik je Mandatsform (Festpreis, Zeit- oder Pauschalhonorar) | fehlt | | offen | /zusammenarbeit/ Abschnitt "Einschätzung, Angebot und Vertrag"; AM-Seite FAQ Honorar | nur "individuell nach Mandatsform, Umfang und Datenlage" (bestehende Aussage) | `honorarlogikFreigabe` in zusammenarbeit.astro und asset-management-beratung.astro |
| 24 | Keine Provisionen, Vermittlungsentgelte oder sonstigen Vorteile von Dritten im Zusammenhang mit einem Mandat | fehlt, Wortlaut legt Timo Müller fest | | offen | /zusammenarbeit/#interessen Regel 5 | Regel nicht gerendert | `verguetungDritterFreigabe` in zusammenarbeit.astro |
| 25 | Kostenfreiheit von Erstgespräch und Kurzeinschätzung | fehlt | | offen | /zusammenarbeit/ Schritte 2 und 3; Kontakt; Danke | neutral: "unverbindlich" bleibt, "kostenfrei" entfällt | `kostenfreiFreigabe` in zusammenarbeit.astro, kontakt.astro und danke.astro |
| 26 | Regel zu eigenen Ankaufsinteressen bei Verkaufsobjekten aus Mandaten | fehlt, Wortlaut legt Timo Müller fest | | offen | /zusammenarbeit/#interessen Regel 4 | Regel nicht gerendert | `ankaufsregelFreigabe` in zusammenarbeit.astro |
| 27 | Regel 3: Informationen aus Mandaten werden nicht für Gruppengesellschaften oder den eigenen Bestand genutzt | Inhaltsplan v2, Abschnitt 3.1 (Verhaltenszusage, aus bestehenden Vertraulichkeitsaussagen abgeleitet) | 12.09.2026 | baubar, Wortlaut in der Textfreigabe zu bestätigen | /zusammenarbeit/#interessen Regel 3 | Regel wird gerendert; Wortlaut vor Launch von Timo Müller bestätigen und mit Datenschutzerklärung und Praxis abgleichen | kein Flag, Textfreigabe |
| 28 | Datenhaltung im Mandat: Speicherort, Rückgabe oder Löschung nach Mandatsende, Abgleich mit der Datenschutzerklärung | fehlt | | offen | /zusammenarbeit/ Abschnitt "Vertraulichkeit und Umgang mit Daten" | nur der Satz zur Zweckbindung | `datenhaltungFreigabe` in zusammenarbeit.astro |
| 29 | Arbeitsform vor Ort und remote, Begehungen | fehlt | | offen | /zusammenarbeit/ FAQ "Arbeiten Sie vor Ort oder remote?"; Profil FAQ "Wo arbeiten Sie?" | FAQ auf Zusammenarbeit nicht gerendert; Profil-Antwort ohne Arbeitsform (Deutschland, Arbeitsform wird im Angebot vereinbart) | `vorOrtFreigabe` in zusammenarbeit.astro; `arbeitsformFreigabe` in profil.astro |
| 30 | Kapazitätsaussage zu Mandatsanzahl oder Verfügbarkeit | fehlt | | offen | keine geplante Verwendung | keine Aussage | kein Flag |
| 31 | Berufshaftpflicht oder Versicherungsschutz | fehlt | | offen | keine geplante Verwendung | keine Aussage | kein Flag |
| 32 | Entwicklungsstand eigener KI-Anwendungen als nüchterne Beschreibung des tatsächlichen Stands | fehlt | | offen | /ki-immobilienmanagement/ Abschnitt "Entwicklungsstand eigener Anwendungen" | Abschnitt ausgeblendet; die bestehende Abgrenzung zu eigenen Anwendungen bleibt | `entwicklungsstand` in ki-immobilienmanagement.astro |
| 33 | Standard der Vertraulichkeitsvereinbarung: Muster vorhanden, wer stellt sie | fehlt | | offen | /zusammenarbeit/ Schritt 4 "Vertraulichkeit und Datenzugang" | nur "schriftlich vor jedem Datenaustausch" (bestehende Aussage) | `vertraulichkeitsstandardFreigabe` in zusammenarbeit.astro |
| 34 | Nutzungsrechte und Fotograf der Porträts portrait-1 bis portrait-3 | fehlt | | offen | `src/components/Portrait.astro` (alle Porträtplätze); docs/BILDER-LIZENZEN.md | typografischer Platzhalter auf Start, Profil, Kontakt, Fachseiten, Autorenkasten; Slot 3 im Profil entfällt | kein Flag; Erkennung der Datei zur Buildzeit über `src/lib/portraits.ts`. Vor dem Ablegen einer Datei Eintrag in docs/BILDER-LIZENZEN.md, danach Nr. 15 und Nr. 34 hier auf "freigegeben" setzen |
| 35 | Wortlaut der Passung im Abschnitt "Für wen" (vier Rollen) und der fünf Selbstprüfungsfragen | Inhaltsplan v2, Abschnitte 4.1 und 4.2 | 12.09.2026 | baubar, Teil der allgemeinen Textfreigabe | Startseite Abschnitt "Für wen"; AM-Seite Abschnitt "Fünf Fragen an Ihr Portfolio" (#selbstpruefung) | wird gerendert; Wortlaut vor Launch von Timo Müller freigeben | kein Flag, Textfreigabe |

## Teil C: Nachträge (Prüfung 12.09.2026)

Aussagen, die im Quellcode verwendet wurden oder in der Fassung v1 standen, ohne eine eigene Zeile in dieser Liste zu haben. Nr. 36 ist eine Auftraggeberangabe aus dem Briefing und wird verwendet. Nr. 37 und 38 haben keinen Beleg; die betroffenen Sätze sind bis zur Freigabe gekürzt oder entfallen, ohne Flag im Code. Nach Freigabe wird der Wortlaut in `src/pages/profil.astro` (Kapitel 01) ergänzt. Nr. 39 (Prüfung Runde 3) fasst die Verhaltenszusagen der Kontakt- und Danke-Seite zusammen; sie sind baubar und in der Textfreigabe zu bestätigen.

| Nr. | Aussage | Quelle | Datum | Status | Verwendung |
|---|---|---|---|---|---|
| 36 | Handwerkliches Kostenverständnis und Umsetzungsnähe | Briefing (Masterprompt Abschnitt 4 und 7F) | 12.09.2026 | Auftraggeberangabe, nur als Kostenverständnis und Einschätzungsquelle, ohne Gewerk, Zeitraum, Qualifikation oder eigene Ausführung; Wortlaut in der Textfreigabe bestätigen | Profil Kapitel 03, Investitionspriorisierung Achse 3, Dienstleistersteuerung (Description, Leistungsblock, FAQ) |
| 37 | Verantwortungsfelder der Müller Holding AG (Beteiligungen, Unternehmensstrukturen, Bestandshaltung, Projektentwicklung) | fehlt (Profilseite v1, kein Beleg) | | offen | Profil Kapitel 01, bis zur Freigabe auf Nr. 5 und 6 gekürzt |
| 38 | Verwaltungsgegenstand der Hausverwaltung Müller GmbH (Wohnungseigentümergemeinschaften und Mietobjekte) | muellerhv.de, ungeprüft | | offen | Profil Kapitel 01, bis zur Freigabe entfällt der Satz; PM-Abgrenzung Punkt 1 bis zur Freigabe ohne Nennung von Wohnungseigentümergemeinschaften und Mietobjekten |
| 39 | Verhaltenszusagen Kontakt und Danke: Die Anfrage geht direkt an Timo Müller, er liest sie selbst, meldet sich persönlich per E-Mail oder telefonisch und schlägt ein Erstgespräch per Telefon oder Video vor | Inhaltsplan v2, Abschnitte 4.9 und 4.10 (Ablaufbeschreibung, keine Reaktionszeit) | 12.09.2026 | baubar, Wortlaut in der Textfreigabe zu bestätigen | kontakt.astro (Hero-Lead, Aside "Direkt erreichen", Schritte 01 bis 03), danke.astro (Lead, Schritte 01 bis 03) |

## Ablauf einer Freigabe

1. Zeile hier aktualisieren: Quelle, Datum (TT.MM.JJJJ), Status "freigegeben" und gegebenenfalls den freigegebenen Wortlaut oder einen Verweis auf das Dokument, in dem er steht.
2. Flag in der genannten Datei auf `true` setzen beziehungsweise den freigegebenen Text in die dafür vorgesehene Konstante eintragen. Kein anderer Text wird angepasst.
3. `npm run build` und `npm test` ausführen. Der Build-Test prüft Gedankenstriche, verbotene Formulierungen, Platzhalter und Sitemap.
4. Textfreigabe in docs/LAUNCH-CHECKLISTE.md abhaken. Bei den Punkten 22, 27 und 28 zusätzlich Impressum beziehungsweise Datenschutzerklärung abgleichen.

## Ausdrücklich nicht verwendet

Assets under Management, Projektvolumina, Mandantennamen, Renditen, Einsparquoten, Abschlüsse, Zertifizierungen, Beteiligungsquoten, Beschäftigtenzahlen, biografische Jahreszahlen, Kunden- oder Partnerlogos, Vonovia, Deutsche Wohnen oder andere Unternehmen als Referenz. Ebenso keine Honorarhöhen, Reaktionszeiten, Projektdauern, Kapazitäten, Verfügbarkeiten, Versicherungen, Betriebsnamen aus dem Netzwerk, Branchenrichtwerte, Zielwerte oder Benchmarks (Inhaltsplan v2, Abschnitt 1.3).
