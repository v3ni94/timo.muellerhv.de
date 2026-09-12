# timo.muellerhv.de

Persönliche Beratungswebsite von Timo Müller für Asset Management und Portfoliooptimierung. Betreiber: Hausverwaltung Müller GmbH.

Statische Mehrseitenwebsite mit Astro 7 (TypeScript) und einem PHP-Endpunkt für das Kontaktformular. Bereitstellung per SFTP auf klassischem PHP-Webhosting. Kein zusätzliches JavaScript für Inhalte, keine externen Ressourcen, Systemschrift.

```
npm ci
npm run check   # Typprüfung
npm run build   # dist/
npm test        # Strukturprüfung des Builds
```

Dokumentation in `docs/`:
- CONTENT-PLAN-V2.md: verbindlicher Inhaltsplan (Seitenstruktur, Heimatort-Prinzip, neue Seiten, Beiträge, Navigation, Freigabepunkte)
- DESIGN-SPEC-V2.md: verbindliche Designspezifikation (Tokens, Raster, Muster, Komponenten, Porträt-Komponente, Fotoplan, Prüfungen)
- ARCHITEKTUR.md: Architektur, Routen, Komponenten, Indexregel Einblicke, Sitemap-Regel, Kontaktformular
- DESIGN-SYSTEM.md: umgesetzter Stand des Designsystems, Tokens, Kontrasttabelle, Muster, Komponenten, Bilder
- FAKTENLISTE.md: Aussagen, Quellen, Freigabestatus, Freigabepunkte 1 bis 35 mit zugehörigen Flags im Code
- SEO-MATRIX.md: URLs, Titles, Descriptions, interne Links, strukturierte Daten, Indexregel, Redaktionsplan, LinkedIn-Bausteine
- DEPLOYMENT.md: Build, Serverkonfiguration, SFTP, Staging
- TESTBERICHT.md: durchgeführte und offene Tests
- LAUNCH-CHECKLISTE.md: offene Freigaben und Launchpunkte
- BILDER-LIZENZEN.md: Bild- und Lizenznachweise, Porträts

Porträts: freigegebene Dateien `portrait-1` bis `portrait-3` nach `src/assets/portraits/` legen (README dort beachten), Lizenzzeile in `docs/BILDER-LIZENZEN.md` ausfüllen, dann neu bauen. Ohne Datei rendert `src/components/Portrait.astro` den typografischen Platzhalter.

Freigaben: Abschnitte, die an offenen Freigabepunkten hängen, sind in den Seitendateien als Konstanten (`...Freigabe = false`) angelegt und rendern ohne Freigabe nichts. Zuordnung in `docs/FAKTENLISTE.md`, Teil B.

Geheimnisse (SMTP) gehören ausschließlich in `config/contact.config.php` außerhalb des Webroots, nie ins Repository.
