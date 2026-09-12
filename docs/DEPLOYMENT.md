# Build, Test und Deployment

## Voraussetzungen
- Node.js 22 (nur für den Build), npm
- PHP 8.2 oder neuer auf dem Zielhosting (getestet mit PHP 8.4 CLI), Erweiterungen: openssl, mbstring
- Apache mit mod_rewrite und mod_headers (für die mitgelieferte .htaccess), alternativ nginx-Konfiguration nachbilden
- Ausgehende SMTP-Verbindung vom Webserver (Port 587 STARTTLS oder 465 SMTPS)

## Umgebungsvariablen (Build, keine Geheimnisse)
Siehe `.env.example`:
- `SITE_URL` kanonische Basis-URL (Produktion: https://timo.muellerhv.de, Staging: eigene URL)
- `NOINDEX=true` setzt Staging auf noindex und sperrt robots.txt

## Befehle
```
npm ci
npm run check        # Typprüfung
npm run build        # erzeugt dist/
npm test             # Strukturprüfung des Builds (Titles, Canonicals, Sitemap, H1, Drafts, Budget)
node scripts/a11y-check.mjs      # axe-core und Tastaturprüfung gegen dist/
node scripts/screenshots.mjs out # Screenshots in 360/390/768/1024/1440
npm run lint:php     # Syntaxprüfung des Kontaktendpunkts
```

## Serverkonfiguration Kontaktformular (Geheimnisse außerhalb des Webroots)
1. `config/contact.config.example.php` kopieren nach z. B. `/var/www/timo-config/contact.config.php` (nicht im Webroot).
2. SMTP-Host, Port, Verschlüsselung, Benutzer, Passwort, freigegebene Absenderadresse eintragen. `allowed_origins` auf die Produktions-URL setzen.
3. Pfad bekannt machen: Standard ist `<webroot>/../../config/contact.config.php` relativ zu `api/contact.php`. Alternativ Umgebungsvariable `TIMO_CONTACT_CONFIG` in der PHP-Konfiguration (SetEnv oder php-fpm env) setzen.
4. Verzeichnisse für Rate-Limit und Fehlerlog müssen für den PHP-Prozess beschreibbar sein und außerhalb des Webroots liegen.
5. SPF, DKIM und DMARC der Absenderdomain mit dem SMTP-Dienst abgleichen. Bestehende DNS-Einträge nicht blind ersetzen.

## Deployment per SFTP
1. Lokal `npm ci && npm run build && npm test`.
2. SFTP-Hostschlüssel beim ersten Verbinden prüfen und dokumentieren.
3. Inhalt von `dist/` in das Zielverzeichnis der Subdomain hochladen (z. B. `/html/timo.muellerhv.de/`). Nur dieses Verzeichnis, keine Löschsynchronisation gegen gemeinsam genutzte Verzeichnisse.
4. Vorher Sicherung: bestehendes Zielverzeichnis als `_backup_JJJJMMTT` kopieren. Rollback = Backup zurückkopieren.
5. Nach dem Upload prüfen: Startseite, eine Fachseite, /kontakt/, /danke/, /404, /robots.txt, /sitemap-index.xml, HTTPS-Redirect, Security-Header (z. B. mit curl -I), Formular-Testanfrage mit Berechtigung.

## Staging
- Zugriffsschutz per HTTP Basic Auth auf dem Staging-Verzeichnis (Hoster-Konfiguration). Ein robots-Verbot ist kein Vertraulichkeitsschutz.
- Build mit `NOINDEX=true` und `SITE_URL=<staging-url>`.
- Beim Produktions-Launch ausdrücklich prüfen: `<meta name="robots" content="index, follow">` und robots.txt mit Allow.

## Beiträge veröffentlichen
Frontmatter in `src/content/einblicke/<slug>.md`: `status: freigegeben`, `datum: JJJJ-MM-TT`, ggf. `quellen`. Neu bauen und deployen. Entwürfe werden nie gebaut.
