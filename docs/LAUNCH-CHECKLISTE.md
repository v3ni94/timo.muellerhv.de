# Launch-Checkliste und offene Freigaben

## Kritisch (blockiert Launch)
- [ ] SMTP-Dienst, freigegebene Absenderadresse und Zugangsdaten bereitstellen; `contact.config.php` außerhalb des Webroots anlegen
- [ ] SPF/DKIM/DMARC der Absenderdomain mit dem SMTP-Dienst abgleichen
- [ ] End-to-End-Testanfrage senden und Eingang in timo@muellerhv.de prüfen
- [ ] Impressum: Telefonnummer, USt-IdNr. (falls vorhanden), Registerdaten und Vertretung anhand aktueller Unterlagen bestätigen; VSBG-Hinweis prüfen (Angebot an Unternehmer?)
- [ ] Datenschutzerklärung: Hosting-Anbieter, Mailserver, Logfristen, Löschfrist, Datenschutzbeauftragter, Auftragsverarbeitungsverträge ergänzen; Rechtstexte fachlich prüfen lassen
- [ ] Erlaubnispflichten prüfen lassen (keine Finanzdienstleistung, keine Rechts-/Steuerberatung; Formulierungen der Abgrenzung freigeben)
- [ ] Hostingfähigkeiten prüfen: Apache/mod_rewrite/mod_headers oder nginx, PHP-Version, ausgehender SMTP
- [ ] Produktions-Build mit `SITE_URL=https://timo.muellerhv.de` und `NOINDEX=false`; nach Upload robots-Meta und robots.txt kontrollieren
- [ ] HTTPS-Redirect, Security-Header und 404 auf dem Zielserver testen; HSTS ohne includeSubDomains belassen

## Fachliche Freigaben durch Timo Müller
- [ ] Alle öffentlichen Texte (Start, vier Fachseiten, Profil, Kontakt) freigeben, insbesondere die Formulierungen zu Funktionen, eigenem Bestand, Netzwerk und KI
- [ ] Vita: Stationen mit Zeiträumen, Funktionen und Verantwortungsbereichen bestätigen, dann in `src/pages/profil.astro` `freigabe: true` setzen
- [ ] Drei Fachbeiträge prüfen, ggf. Quellen ergänzen, dann `status: freigegeben` und `datum` setzen
- [ ] LinkedIn-URL freigeben (src/data/site.ts)

## Optionale Assets (halten den Launch nicht auf)
- [ ] Echtes Porträt mit Nutzungsrechten (ersetzt typografische Variante auf /profil/ und ggf. OG-Bild)
- [ ] Beraterprofil als PDF (Downloadbutton erscheint automatisch, wenn Pfad in profil.astro gesetzt)
- [ ] Referenzfälle mit Freigabe (Struktur: Ausgangslage, eigene Rolle, Maßnahmen, Zeitraum, belegtes Ergebnis, Messmethode, Freigabe)
- [ ] Freigegebene Objektbilder aus dem eigenen Bestand

## Nach dem Launch
- [ ] Search Console verifizieren (DNS- oder HTML-Datei-Methode), Sitemap https://timo.muellerhv.de/sitemap-index.xml einreichen
- [ ] Rich-Results-Test für /, /profil/ und eine Fachseite
- [ ] Core Web Vitals im Feld beobachten (Search Console), Lighthouse mobil vor Launch dokumentieren
- [ ] Messung qualifizierter Anfragen: Eingänge im Postfach zählen, keine Analytics mit personenbezogenen Formularinhalten
