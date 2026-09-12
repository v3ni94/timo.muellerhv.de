<?php
/**
 * Konfiguration des Kontaktendpunkts. Diese Datei NICHT im Webroot ablegen.
 * Kopie als contact.config.php auf dem Server ausserhalb des oeffentlichen Verzeichnisses speichern,
 * Pfad in public/api/contact.php (Konstante CONTACT_CONFIG) oder ueber die Umgebungsvariable
 * TIMO_CONTACT_CONFIG angeben. Keine Zugangsdaten ins Repository.
 */
return [
    // Fest hinterlegter Empfaenger. Wird niemals aus dem Formular uebernommen.
    'recipient'      => 'timo@muellerhv.de',
    // Freigegebene eigene Absenderadresse (muss zu SPF/DKIM der Domain passen).
    'from_address'   => 'noreply@muellerhv.de',          // pruefen und freigeben
    'from_name'      => 'Website timo.muellerhv.de',
    // SMTP, verschluesselt. 'tls' = STARTTLS (Port 587), 'ssl' = SMTPS (Port 465).
    'smtp_host'      => 'smtp.example.invalid',
    'smtp_port'      => 587,
    'smtp_secure'    => 'tls',
    'smtp_user'      => '',
    'smtp_pass'      => '',
    'smtp_timeout'   => 15,
    // Erlaubte Origins fuer Formular-Posts (Missbrauchsabwehr).
    'allowed_origins' => ['https://timo.muellerhv.de'],
    // Rate-Limit: max. Anfragen pro IP-Hash im Zeitfenster (Sekunden). Ablage ausserhalb des Webroots.
    'rate_limit_dir' => __DIR__ . '/rate-limit',
    'rate_limit_max' => 5,
    'rate_limit_window' => 3600,
    // Mindestzeit zwischen Seitenaufruf (Feld ts) und Absenden, Sekunden. 0 deaktiviert.
    'min_fill_seconds' => 3,
    // Pfad fuer Fehlerprotokoll (keine Formularinhalte), ausserhalb des Webroots. Leer = kein Log.
    'error_log'      => __DIR__ . '/contact-error.log',
    // Weiterleitungsziel ohne JavaScript nach Erfolg.
    'success_url'    => '/danke/',
];
