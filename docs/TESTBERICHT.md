# Testbericht, Stand 12.09.2026

Testumgebung: Linux-Container, Node 22.22, PHP 8.4.19 CLI, Chromium 1194 (Playwright 1.63), lokaler Dateiserver gegen dist/. Keine Produktions- oder Staging-Umgebung verfügbar, kein SMTP-Zugang.

## Durchgeführt und bestanden
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

## Nicht durchgeführt (fehlende Umgebung oder Berechtigung)
- Echte End-to-End-Testanfrage mit SMTP und Postfachkontrolle. Offener Launchpunkt.
- HTTPS-Redirects, Security-Header, ErrorDocument 404 und Caching auf dem Zielserver (Apache-.htaccess nicht auf Zielhosting getestet).
- Lighthouse/Core Web Vitals: keine Laborwerte erhoben. Architektur (statisch, kein externes JS, Systemschrift, komprimierte Assets) ist auf LCP < 2,5 s und CLS < 0,1 ausgelegt. Felddaten liegen naturgemäß nicht vor.
- Reale Touch-Bedienung auf Geräten, Safari/Firefox (nur Chromium geprüft).
- Search-Console-Verifikation, Sitemap-Einreichung.
- Rich-Results-Test der strukturierten Daten (JSON syntaktisch geprüft, nicht gegen Google validiert).

## Behobene Fehler während der Tests
1. Horizontaler Überlauf bei 360/390 px im Hero durch lange Komposita im Eyebrow: `min-width: 0` auf Grid-Kinder, `overflow-wrap`.
2. Automatische Silbentrennung trennte die H1 unsauber ("Immobilienportfolio s."): Silbentrennung für H1 auf manuell, H1-Skalierung verkleinert.
3. Kopfbereich brach bei 1024 px in zwei Zeilen: Menü-Toggle bis 1080 px.
4. Vier Descriptions über 165 Zeichen gekürzt.
5. Klasse `no-js` wurde vom Skript entfernt, aber nie gesetzt; ohne JavaScript wäre die mobile Navigation verborgen gewesen. Behoben in Base.astro.
