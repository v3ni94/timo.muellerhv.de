# timo.muellerhv.de

Persönliche Beratungswebsite von Timo Müller für Asset Management und Portfoliooptimierung. Betreiber: Hausverwaltung Müller GmbH.

Statische Mehrseitenwebsite mit Astro 7 (TypeScript) und einem PHP-Endpunkt für das Kontaktformular. Bereitstellung per SFTP auf klassischem PHP-Webhosting.

```
npm ci
npm run build   # dist/
npm test        # Strukturprüfung
```

Dokumentation in `docs/`:
- ARCHITEKTUR.md: Architektur, Routen, Kontaktformular
- DESIGN-SYSTEM.md: Tokens, CI-Herkunft, Komponenten
- FAKTENLISTE.md: Aussagen, Quellen, Freigabestatus
- SEO-MATRIX.md: URLs, Titles, Descriptions, strukturierte Daten, Redaktionsplan
- DEPLOYMENT.md: Build, Serverkonfiguration, SFTP, Staging
- TESTBERICHT.md: durchgeführte und offene Tests
- LAUNCH-CHECKLISTE.md: offene Freigaben und Launchpunkte
- BILDER-LIZENZEN.md

Geheimnisse (SMTP) gehören ausschließlich in `config/contact.config.php` außerhalb des Webroots, nie ins Repository.
