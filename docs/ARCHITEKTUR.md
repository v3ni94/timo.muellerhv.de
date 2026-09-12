# Architektur und Seitenstruktur

## Entscheidung
Neues, unabhängiges Projekt. Keine bestehende HVM-Anwendung im Repository (Repository war leer). Statisch erzeugte Mehrseitenwebsite mit Astro 7 (TypeScript) plus einem kleinen PHP-Endpunkt für das Kontaktformular. Node nur für den Build. Ergebnis (dist/) ist auf klassischem PHP-Webhosting per SFTP bereitstellbar. Kein Framework-Server, keine Datenbank, kein CMS, kein Benutzerkonto.

Offen: Die tatsächlichen Hostingfähigkeiten (Apache mit mod_rewrite/mod_headers, PHP-Version, ausgehender SMTP) sind vor dem Launch zu prüfen. Die .htaccess ist für Apache geschrieben; bei nginx sind Redirects, Header und 404 in der Serverkonfiguration nachzubilden.

## Verzeichnisse
- `src/pages/` Routen (eine Datei je Seite, `einblicke/[slug].astro` für Beiträge)
- `src/layouts/Base.astro` HTML-Grundgerüst, Meta, Canonical, JSON-LD, Header, Footer
- `src/layouts/Fachseite.astro` Vorlage für Fachseiten (Situationen, Leistung, Ergebnisse, Vorgehen, Abgrenzung, FAQ)
- `src/components/` Header, Footer, Cta, Faq, Breadcrumb, Timeline, ContactForm, Hero
- `src/data/site.ts` zentrale Daten (Betreiber, Person, Navigation, E-Mail)
- `src/lib/seo.ts` JSON-LD-Bausteine; `src/lib/einblicke.ts` Filter für freigegebene Beiträge
- `src/content/einblicke/*.md` Fachbeiträge mit Frontmatter (`status: entwurf | pruefung | freigegeben`)
- `src/styles/tokens.css`, `global.css` Design-Tokens und Basisstile
- `public/` statische Dateien: `.htaccess`, `api/contact.php`, Favicon, OG-Bild, HVM-Logo
- `config/contact.config.example.php` Vorlage der Serverkonfiguration (Kopie außerhalb des Webroots)
- `scripts/` Build-Test, Screenshots, Barrierefreiheitsprüfung
- `docs/` Dokumentation

## Routen
| Route | Aufgabe | Index |
|---|---|---|
| / | Personenmarke, Nutzenversprechen, Überblick, Kontakt | ja |
| /asset-management-beratung/ | Beratungsansatz, drei Mandatsformen, Entscheidungsunterlagen | ja |
| /portfoliooptimierung/ | Wirtschaftliche und operative Verbesserung, CAPEX/OPEX | ja |
| /property-management-optimierung/ | Umsetzungsebene: Prozesse, Zuständigkeiten, Dienstleister, Kennzahlen | ja |
| /ki-immobilienmanagement/ | KI-Anwendungsfelder mit Freigabekonzept | ja |
| /profil/ | Person, Haltung, Funktionen, Timeline (nur freigegebene Stationen) | ja |
| /einblicke/ | Beitragsübersicht, zeigt "in Vorbereitung", solange nichts freigegeben ist | ja |
| /einblicke/[slug]/ | Fachbeitrag, nur `status: freigegeben` | ja |
| /kontakt/ | Formular und Direktkontakt | ja |
| /danke/ | Bestätigung nach Versand | noindex, nicht in Sitemap |
| /impressum/, /datenschutz/ | Rechtstextentwürfe | ja |
| /404.html | Fehlerseite (Apache ErrorDocument) | noindex |
| /robots.txt, /sitemap-index.xml | generiert | |
| /api/contact.php | PHP-Endpunkt (POST) | Disallow |

## Kontaktformular
Ohne JavaScript: normaler POST an /api/contact.php, Erfolg leitet per 303 auf /danke/ um, Fehler zeigt eine HTML-Seite mit Direktkontakt. Mit JavaScript: fetch mit `Accept: application/json`, Fehler werden inline angezeigt, Eingaben bleiben erhalten, Erfolg leitet auf /danke/ um (kein Doppelversand durch Neuladen).

Serverseitig: Methode, Größenlimit, Origin/Referer und Sec-Fetch-Site gegen Allowlist, Honeypot, Mindestausfüllzeit, dateibasiertes Rate-Limit je IP-Hash, Validierung, Steuerzeichenfilter (Header-Injection), UTF-8/Base64-Nachricht, eigener SMTP-Client mit STARTTLS oder SMTPS und Zertifikatsprüfung, AUTH PLAIN/LOGIN, fester Empfänger, Besucheradresse nur als Reply-To. Erfolg erst nach 250 auf DATA. Keine Auto-Antwort. Kein Formularinhalt im Log.

Warum kein CSRF-Token: Die Seiten sind statisch und cachebar, ein pro Sitzung geheimes Token ist ohne serverseitige Sitzung nicht möglich. Stattdessen Origin-Allowlist plus Sec-Fetch-Site (moderne Browser senden beides zuverlässig) plus Honeypot und Rate-Limit. Der Endpunkt hat keine Nebenwirkungen auf Benutzerkonten, das Risiko eines CSRF ist damit auf Spam begrenzt.

## Design-System
Siehe docs/DESIGN-SYSTEM.md.
