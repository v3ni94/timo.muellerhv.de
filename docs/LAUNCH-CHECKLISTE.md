# Launch-Checkliste und offene Freigaben

Stand: 12.09.2026. Ergänzt um die Freigabepunkte 22 bis 35 (docs/FAKTENLISTE.md, Teil B) und die fünf neuen Seiten des Inhaltsplans v2. Nichts aus dieser Liste ist erledigt, solange das Kästchen offen ist. Die Umsetzung der Seiten befindet sich in der Integration.

## Kritisch (blockiert Launch)
- [ ] SMTP-Dienst, freigegebene Absenderadresse und Zugangsdaten bereitstellen; `contact.config.php` außerhalb des Webroots anlegen
- [ ] SPF/DKIM/DMARC der Absenderdomain mit dem SMTP-Dienst abgleichen; bestehende DNS-Einträge nicht blind ersetzen
- [ ] End-to-End-Testanfrage senden und Eingang in timo@muellerhv.de prüfen (nur mit Berechtigung)
- [ ] Impressum: Telefonnummer, USt-IdNr. (falls vorhanden), Registerdaten und Vertretung anhand aktueller Unterlagen bestätigen; VSBG-Hinweis prüfen (Angebot an Unternehmer?)
- [ ] Datenschutzerklärung: Hosting-Anbieter, Mailserver, Logfristen, Löschfrist, Datenschutzbeauftragter, Auftragsverarbeitungsverträge ergänzen; Rechtstexte fachlich prüfen lassen
- [ ] Datenschutzerklärung und Praxis mit den Verhaltenszusagen auf /zusammenarbeit/ abgleichen: Zweckbindung der Mandatsdaten, Regel 3 (keine Nutzung für Gruppengesellschaften oder eigenen Bestand), KI-Werkzeuge nur nach Vereinbarung (Faktenliste Nr. 27 und 28)
- [ ] Erlaubnispflichten prüfen lassen und Formulierungen der Abgrenzung freigeben:
  - keine erlaubnispflichtige Finanzdienstleistung, keine Anlagevermittlung, keine Rechts- oder Steuerberatung (alle Seiten)
  - Investitionspriorisierung: keine Finanzierungsvermittlung, keine Aussagen zu Konditionen oder Förderprogrammen, keine Energieberatung, keine Fachplanung oder Sachverständigenleistung
  - Dienstleistersteuerung: keine Bauleitung, keine Fachplanung, keine Rechtsberatung zu Werkverträgen, Gewährleistung und Haftung, keine eigene Handwerkerkapazität
  - Reporting und Kennzahlen: kein Ersatz für Buchhaltung, Jahresabschluss oder Bewertungsgutachten
- [ ] Entscheidung der Geschäftsführung zu Freigabepunkt 22 (Vertragspartner des Beratungsmandats) herbeiführen. Bis zur Entscheidung keine Aussage auf der Website und Impressum unverändert; prüfen lassen, ob der Hinweis zum Angebot im Impressum ohne Nennung des Vertragspartners ausreicht
- [ ] Hostingfähigkeiten prüfen: Apache/mod_rewrite/mod_headers oder nginx, PHP-Version, ausgehender SMTP
- [ ] Produktions-Build mit `SITE_URL=https://timo.muellerhv.de` und `NOINDEX=false`; nach Upload robots-Meta und robots.txt kontrollieren
- [ ] HTTPS-Redirect, Security-Header und 404 auf dem Zielserver testen; HSTS ohne includeSubDomains belassen
- [ ] CSP: `'unsafe-inline'` in script-src für die Astro-Inline-Skripte (no-js-Klasse, Navigation, Formular) bewusst belassen; eine Hash-CSP ist optional als eigener Deploy-Schritt möglich (Hashes je Build aus dist erzeugen, `public/.htaccess`)

## Prüfung des Builds vor Launch
- [ ] `npm run build`, `npm run check`, `npm test` fehlerfrei; 14 indexierbare Seiten in der Sitemap (15 mit /einblicke/ nach dem ersten freigegebenen Beitrag), alle mit selbstreferenzierendem Canonical, einer H1, Title bis 65 und Description bis 160 Zeichen
- [ ] Kein Flag-Inhalt im Build: Suche im dist nach Wortlauten der Freigabepunkte 22 bis 33 (Vertragspartner, Honorarlogik, kostenfrei, Ankauf, Provision, Löschung nach Mandatsende, vor Ort, Entwicklungsstand) liefert keine Treffer, solange die Punkte offen sind
- [ ] Keine Gedankenstriche, keine Platzhalter in eckigen Klammern außerhalb von Impressum und Datenschutz, keine verbotenen Formulierungen (Build-Test)
- [ ] /einblicke/ trägt noindex und fehlt in der Sitemap, solange kein Beitrag freigegeben ist; Entwürfe sind nicht gebaut
- [x] Kontrastwerte aus docs/DESIGN-SYSTEM.md Abschnitt 3 verifiziert: axe-core 4.13 (Regel color-contrast) bei 390 und 1440 px auf 17 Seiten ohne Befund, rechnerische Werte per Node-Skript bestätigt; Ergebnis in DESIGN-SYSTEM.md Abschnitt 3 und TESTBERICHT.md Stand v2 eingetragen. Nach Änderungen an tokens.css wiederholen
- [x] CLS mobil (390 px, gedrosselte Verbindung) und Desktop (1440 px) nach dem no-js-Fix in Base.astro gemessen (Integrationsbuild Runde 2, 12.09.2026): mobil / 0, /kontakt/ 0, /profil/ 0,0012; Desktop / 0, /kontakt/ 0,0062, /profil/ 0,0078; alle unter 0,1 (vor dem Fix mobil 0,2174, Quelle MAIN). Werte in TESTBERICHT.md Stand v2 eingetragen; nach dem Produktions-Deployment mit Felddaten gegenprüfen
- [ ] axe bei 390 und 1440 px ohne Verstöße; Tastatur (Skip-Link, Untermenü mit zwei Gruppen, Escape schließt alle Untermenüs, FAQ, Seitennavigation); Screenreader-Stichprobe (Register mit Positionsangabe, Kennungen und Dossier-Kopfzeile nicht gelesen)
- [ ] Screenshots bei 360, 390, 768, 1024 und 1440 px für alle Seiten einschließlich der fünf neuen: kein horizontaler Scroll, keine abgeschnittene H1 (weiche Trennstellen greifen), keine überlagerten Buttons; 200 Prozent Zoom
- [ ] Ohne JavaScript: Navigation, FAQ, Formular-POST, Seitennavigation funktionieren
- [x] Fünf-Sekunden-Test auf Start und Profil gemessen (Integrationsbuild Runde 3, 12.09.2026, Playwright, Unterkanten in px): Start 390 x 844: Button "Portfolio besprechen" 692, E-Mail-Zeile 792, damit Name, Thema, Leitzeile, Button und E-Mail auf dem ersten Bildschirm; Start 360 x 780: Button 750 auf dem ersten Bildschirm, E-Mail-Zeile 850 (70 px darunter, Einschränkung, Entscheidung offen, docs/CONTENT-PLAN-V2.md 12.16); Profil 360 x 780: H1 670 auf dem ersten Bildschirm, E-Mail 1236 innerhalb einer Scrollbewegung. Werte in docs/TESTBERICHT.md, Stand v2, Runde 3
- [ ] Fünf-Minuten-Test des Entscheiders auf den Unterseiten (Passt mein Bestand, wie laufen Erstgespräch und Mandat, was muss mein Haus beisteuern, wie sind Interessen geregelt, was bekomme ich nicht); inhaltliche Prüfung, nicht Teil der technischen Prüfung

## Fachliche Freigaben durch Timo Müller
- [ ] Textfreigabe aller öffentlichen Seiten: Start, vier Fachseiten, Profil, Kontakt, Danke, 404 sowie die fünf neuen Seiten Zusammenarbeit, Investitionspriorisierung, Dienstleistersteuerung, Reporting und Kennzahlen, Glossar. Insbesondere die Formulierungen zu Funktionen, eigenem Bestand, Netzwerk und KI
- [ ] Zusammenarbeit: Wortlaut von Regel 3 der Interessenoffenlegung bestätigen (Faktenliste Nr. 27); Abschnitt Interessen insgesamt freigeben (#interessen); Abschluss "Was das für Sie bedeutet" ohne Anspruch auf vollständige Anbieterunabhängigkeit
- [ ] Dienstleistersteuerung: Hero-Formulierung und Abschnitt "Netzwerk und Interessen" ausdrücklich freigeben (Netzwerk nur als Einschätzungsquelle, keine Kapazität, keine Betriebsnamen)
- [ ] Investitionspriorisierung: Bewertungsmatrix (schematisch, ohne Werte) und Szenario im Konjunktiv prüfen; keine Kostenkennwerte, Nutzungsdauern, Normen oder Förderaussagen
- [ ] Reporting und Kennzahlen: Kennzahlentabelle und Berichtsmuster ohne Zielwerte und Rhythmusvorgaben prüfen; Schwellen bleiben Sache des Auftraggebers
- [ ] Glossar: fachliche Prüfung der rechtlich geprägten Begriffe (Umlagefähigkeit, Abnahme, Nachtrag, Prolongation, Modernisierung) durch Rechtsanwalt beziehungsweise Steuerberater; keine Paragraphen, Prozent- oder Richtwerte
- [ ] Startseite und AM-Seite: Wortlaut der Passung im Abschnitt "Für wen" (vier Rollen) und der fünf Selbstprüfungsfragen freigeben (Faktenliste Nr. 35)
- [ ] Profil: Arbeitsprinzipien, Kurzprofil zum Weitergeben (#kurzprofil, dritte Person, nur Faktenlisteninhalte) und "Fragen an mich" freigeben
- [ ] Vita: Stationen mit Zeiträumen, Funktionen und Verantwortungsbereichen bestätigen, dann in `src/pages/profil.astro` `freigabe: true` setzen (Faktenliste Nr. 14)
- [ ] Sechs Fachbeiträge prüfen (sechs Entwürfe vorhanden, Redaktionsplan in docs/SEO-MATRIX.md), Quellen ergänzen, dann `status: freigegeben` und `datum` setzen. Mit dem ersten freigegebenen Beitrag wird /einblicke/ automatisch indexierbar
- [ ] LinkedIn-URL freigeben (`src/data/site.ts`, Faktenliste Nr. 19)

## Freigabepunkte 22 bis 35 (Entscheidung, dann Flag setzen)
Jeder Punkt bleibt bis zur Entscheidung ohne Aussage auf der Website. Ablauf je Punkt: Entscheidung dokumentieren, Faktenliste aktualisieren, Flag in der genannten Datei setzen, Build und Test, Textfreigabe.
- [ ] 22 Vertragspartner des Beratungsmandats (`vertragspartnerFreigabe`, zusammenarbeit.astro; danach Impressum ergänzen und den `provider` im Service-Markup (`src/lib/seo.ts`, derzeit die Person) bewusst setzen)
- [ ] 23 Honorarlogik je Mandatsform (`honorarlogikFreigabe`, zusammenarbeit.astro und asset-management-beratung.astro)
- [ ] 24 Keine Vergütung von Dritten, Regel 5 (`verguetungDritterFreigabe`, zusammenarbeit.astro)
- [ ] 25 Kostenfreiheit von Erstgespräch und Kurzeinschätzung (`kostenfreiFreigabe`, zusammenarbeit.astro, kontakt.astro, danke.astro)
- [ ] 26 Regel zu eigenen Ankaufsinteressen, Regel 4 (`ankaufsregelFreigabe`, zusammenarbeit.astro)
- [ ] 27 Wortlaut Regel 3 bestätigen (kein Flag, Textfreigabe)
- [ ] 28 Datenhaltung im Mandat (`datenhaltungFreigabe`, zusammenarbeit.astro; Abgleich Datenschutzerklärung)
- [ ] 29 Arbeitsform vor Ort und remote (`vorOrtFreigabe`, zusammenarbeit.astro; `arbeitsformFreigabe`, profil.astro)
- [ ] 30 Kapazitätsaussage: keine Verwendung geplant, nur Entscheidung dokumentieren
- [ ] 31 Berufshaftpflicht oder Versicherungsschutz: keine Verwendung geplant, nur Entscheidung dokumentieren
- [ ] 32 Entwicklungsstand eigener KI-Anwendungen (`entwicklungsstand`, ki-immobilienmanagement.astro; nüchterne Beschreibung des tatsächlichen Stands)
- [ ] 33 Standard der Vertraulichkeitsvereinbarung (`vertraulichkeitsstandardFreigabe`, zusammenarbeit.astro)
- [ ] 34 Nutzungsrechte und Fotograf der Porträts (siehe Optionale Assets)
- [ ] 35 Wortlaut Für wen und Selbstprüfung (Teil der Textfreigabe oben)

## Optionale Assets (halten den Launch nicht auf)
- [ ] Echte Porträts als Serie: portrait-1 (4:5 Hochformat, Pflicht), portrait-2 (3:2 Querformat, Kopf in einem mittigen 1:1-Ausschnitt), portrait-3 (3:2, zweites Motiv). Shooting-Brief mit Motiven, Komposition, Blickrichtung, Mindestgrößen und Bildausschnitt: `src/assets/portraits/README.md` und docs/DESIGN-SPEC-V2.md Abschnitt 8. Ohne Serie nur portrait-1 einsetzen
- [ ] Vor dem Commit einer Porträtdatei: Fotograf, Aufnahmedatum, Nutzungsrechte Web und Freigabe mit Datum in docs/BILDER-LIZENZEN.md eintragen; docs/FAKTENLISTE.md Nr. 15 und Nr. 34 auf "freigegeben" setzen; `focus` in `src/data/portraits.ts` visuell abnehmen; Bildunterschrift portrait-3 nur mit freigegebenem Text; `npm run build` und Größenprüfung (größte Hero-Bildstufe unter 120 KB)
- [ ] Nach Freigabe von portrait-1 optional ein OG-Bild 1200 x 630 aus derselben Quelle erzeugen (eigener Arbeitsschritt, bis dahin bleibt das typografische OG-Bild)
- [ ] Beraterprofil als PDF (Downloadbutton erscheint automatisch, wenn `beraterprofilPdf` in profil.astro gesetzt ist, Faktenliste Nr. 20)
- [ ] Referenzfälle mit Freigabe des Auftraggebers: Struktur Ausgangslage, eigene Rolle, Maßnahmen, Zeitraum, belegtes Ergebnis, Messmethode, Freigabe; Abgrenzung des eigenen Beitrags bei gemeinsamen Projekten. Umsetzung über `Szenario.astro` mit `freigabe: true` (Faktenliste Nr. 16); Anonymisierung ersetzt weder Belegbarkeit noch Vertraulichkeitsprüfung
- [ ] Freigegebene Objektbilder aus dem eigenen Bestand (kein Stockfoto darf als eigener Bestand erscheinen)

## Nach dem Launch
- [ ] Search Console verifizieren (DNS- oder HTML-Datei-Methode), Sitemap https://timo.muellerhv.de/sitemap-index.xml einreichen
- [ ] Rich-Results-Test für /, /profil/, eine Fachseite, eine Vertiefung und /zusammenarbeit/ (FAQPage); keine Rich-Result-Erwartung, nur Syntaxprüfung
- [ ] Core Web Vitals im Feld beobachten (Search Console), Lighthouse mobil vor Launch dokumentieren; Felddaten nicht erfinden
- [ ] Messung qualifizierter Anfragen: Eingänge im Postfach zählen, keine Analytics mit personenbezogenen Formularinhalten
- [ ] Nach dem ersten freigegebenen Beitrag prüfen, dass /einblicke/ indexierbar ist und in der Sitemap steht; LinkedIn-Teaser nur manuell verwenden (docs/SEO-MATRIX.md)
