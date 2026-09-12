<?php
/**
 * Kontaktendpunkt timo.muellerhv.de
 * Nimmt POST-Anfragen des Kontaktformulars an, validiert serverseitig und uebergibt die Nachricht
 * per authentifiziertem, verschluesseltem SMTP an den fest hinterlegten Empfaenger.
 *
 * Antwortformate:
 *  - Accept: application/json  -> JSON {ok: bool, message: string}
 *  - sonst                     -> 303 auf success_url bei Erfolg, HTML-Fehlerseite bei Fehlern
 *
 * Keine Formularinhalte werden protokolliert. Keine Auto-Antwort an fremde Adressen.
 */
declare(strict_types=1);

ini_set('display_errors', '0');
error_reporting(E_ALL);
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');
header('Cache-Control: no-store');

const CONTACT_CONFIG_DEFAULT = __DIR__ . '/../../config/contact.config.php';

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function respond(bool $ok, string $message, int $status, ?string $redirect = null): never
{
    global $wantsJson;
    http_response_code($status);
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_UNICODE);
        exit;
    }
    if ($ok && $redirect !== null) {
        header('Location: ' . $redirect, true, 303);
        exit;
    }
    header('Content-Type: text/html; charset=utf-8');
    $m = htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    echo "<!doctype html><html lang=\"de\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
        . "<meta name=\"robots\" content=\"noindex\"><title>Anfrage nicht übermittelt</title>"
        . "<style>body{font-family:system-ui,Arial,sans-serif;max-width:40rem;margin:3rem auto;padding:0 1rem;line-height:1.6;color:#1a1a1a}a{color:#1a1a1a}</style></head><body>"
        . "<h1>Anfrage nicht übermittelt</h1><p>{$m}</p>"
        . "<p>Bitte gehen Sie <a href=\"/kontakt/\">zurück zum Formular</a> oder schreiben Sie direkt an <a href=\"mailto:timo@muellerhv.de\">timo@muellerhv.de</a>.</p>"
        . "</body></html>";
    exit;
}

function logError(array $cfg, string $msg): void
{
    $file = $cfg['error_log'] ?? '';
    if ($file === '') return;
    @file_put_contents($file, date('c') . ' ' . $msg . PHP_EOL, FILE_APPEND | LOCK_EX);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'Methode nicht erlaubt.', 405);
}

$cfgPath = getenv('TIMO_CONTACT_CONFIG') ?: CONTACT_CONFIG_DEFAULT;
if (!is_readable($cfgPath)) {
    respond(false, 'Der Versand ist derzeit nicht eingerichtet.', 503);
}
$cfg = require $cfgPath;
if (!is_array($cfg) || empty($cfg['recipient']) || empty($cfg['smtp_host']) || empty($cfg['from_address'])) {
    respond(false, 'Der Versand ist derzeit nicht eingerichtet.', 503);
}

// Groessenlimit
$len = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($len > 32 * 1024) {
    respond(false, 'Die Anfrage ist zu groß.', 413);
}

// Herkunftspruefung (Origin bzw. Referer) und Sec-Fetch-Site
$allowed = $cfg['allowed_origins'] ?? [];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === '' && !empty($_SERVER['HTTP_REFERER'])) {
    $p = parse_url($_SERVER['HTTP_REFERER']);
    if ($p && isset($p['scheme'], $p['host'])) {
        $origin = $p['scheme'] . '://' . $p['host'] . (isset($p['port']) ? ':' . $p['port'] : '');
    }
}
$sfs = $_SERVER['HTTP_SEC_FETCH_SITE'] ?? '';
if ($sfs !== '' && !in_array($sfs, ['same-origin', 'same-site', 'none'], true)) {
    respond(false, 'Die Anfrage wurde aus Sicherheitsgründen abgelehnt.', 403);
}
if ($allowed && ($origin === '' || !in_array($origin, $allowed, true))) {
    respond(false, 'Die Anfrage wurde aus Sicherheitsgründen abgelehnt.', 403);
}

// Honeypot
if (trim((string)($_POST['website'] ?? '')) !== '') {
    // Bots ohne Hinweis abweisen, aber nicht als Erfolg tarnen (kein Erfolg ohne Versand).
    respond(false, 'Die Anfrage konnte nicht verarbeitet werden.', 400);
}

// Mindestausfuellzeit (nur wenn Feld gesetzt; ohne JavaScript bleibt es leer und wird uebersprungen)
$minFill = (int)($cfg['min_fill_seconds'] ?? 0);
$ts = (int)($_POST['ts'] ?? 0);
if ($minFill > 0 && $ts > 0 && (time() - $ts) < $minFill) {
    respond(false, 'Die Anfrage wurde zu schnell abgesendet. Bitte versuchen Sie es erneut.', 400);
}

// Rate-Limit je IP-Hash (dateibasiert, ausserhalb des Webroots)
$rlDir = $cfg['rate_limit_dir'] ?? '';
if ($rlDir !== '') {
    if (!is_dir($rlDir)) @mkdir($rlDir, 0700, true);
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    $key = hash('sha256', $ip . '|' . ($cfg['rate_limit_salt'] ?? $cfg['smtp_host']));
    $file = rtrim($rlDir, '/') . '/' . $key;
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $hits = array_filter(array_map('intval', file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: []),
            fn($t) => $now - $t < (int)($cfg['rate_limit_window'] ?? 3600));
    }
    if (count($hits) >= (int)($cfg['rate_limit_max'] ?? 5)) {
        respond(false, 'Zu viele Anfragen in kurzer Zeit. Bitte schreiben Sie direkt per E-Mail.', 429);
    }
    $hits[] = $now;
    @file_put_contents($file, implode(PHP_EOL, $hits) . PHP_EOL, LOCK_EX);
}

// Eingaben normalisieren und validieren
function clean(string $v, int $max, bool $multiline = false): string
{
    $v = str_replace(["\r\n", "\r"], "\n", $v);
    if (!$multiline) $v = str_replace(["\n", "\t"], ' ', $v);
    // Steuerzeichen entfernen (Header-Injection-Schutz), Zeilenumbrueche in Mehrzeilenfeldern erlauben
    $v = preg_replace($multiline ? '/[^\P{C}\n]+/u' : '/\p{C}+/u', '', $v) ?? '';
    $v = trim($v);
    return mb_substr($v, 0, $max);
}

$name       = clean((string)($_POST['name'] ?? ''), 120);
$email      = clean((string)($_POST['email'] ?? ''), 200);
$unternehmen= clean((string)($_POST['unternehmen'] ?? ''), 160);
$rolle      = clean((string)($_POST['rolle'] ?? ''), 120);
$telefon    = clean((string)($_POST['telefon'] ?? ''), 40);
$bestand    = clean((string)($_POST['bestand'] ?? ''), 60);
$anliegen   = clean((string)($_POST['anliegen'] ?? ''), 4000, true);

$errors = [];
if (mb_strlen($name) < 2) $errors[] = 'Bitte geben Sie Ihren Namen an.';
if (filter_var($email, FILTER_VALIDATE_EMAIL) === false || preg_match('/[\s,;<>"]/', $email)) $errors[] = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
if (mb_strlen($anliegen) < 20) $errors[] = 'Bitte beschreiben Sie Ihr Anliegen in mindestens 20 Zeichen.';
if ($errors) {
    respond(false, implode(' ', $errors), 422);
}

// Nachricht aufbauen (Text, UTF-8, Base64)
$lines = [
    'Neue Anfrage über timo.muellerhv.de',
    '',
    'Name:            ' . $name,
    'E-Mail:          ' . $email,
    'Unternehmen:     ' . ($unternehmen !== '' ? $unternehmen : '(keine Angabe)'),
    'Rolle:           ' . ($rolle !== '' ? $rolle : '(keine Angabe)'),
    'Telefon:         ' . ($telefon !== '' ? $telefon : '(keine Angabe)'),
    'Bestandsgröße:   ' . ($bestand !== '' ? $bestand : '(keine Angabe)'),
    'Eingegangen:     ' . date('d.m.Y H:i') . ' (Serverzeit)',
    '',
    'Anliegen:',
    $anliegen,
    '',
    'Hinweis: Antwort an den Absender über Reply-To. Diese Nachricht wurde vom Kontaktformular erzeugt.',
];
$body = implode("\r\n", $lines);

$encodeHeader = static fn(string $s): string => '=?UTF-8?B?' . base64_encode($s) . '?=';
$subject = 'Anfrage über timo.muellerhv.de: ' . mb_substr($name, 0, 60);
$fromName = $cfg['from_name'] ?? 'Website';
$messageId = sprintf('<%s@%s>', bin2hex(random_bytes(12)), parse_url($cfg['allowed_origins'][0] ?? 'https://timo.muellerhv.de', PHP_URL_HOST) ?: 'timo.muellerhv.de');

$headers = [
    'Date: ' . date(DATE_RFC2822),
    'From: ' . $encodeHeader($fromName) . ' <' . $cfg['from_address'] . '>',
    'To: <' . $cfg['recipient'] . '>',
    'Reply-To: ' . $encodeHeader($name) . ' <' . $email . '>',
    'Subject: ' . $encodeHeader($subject),
    'Message-ID: ' . $messageId,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    'X-Mailer: timo.muellerhv.de contact',
    'Auto-Submitted: auto-generated',
];
$raw = implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($body), 76, "\r\n");

// Minimaler SMTP-Client (STARTTLS oder SMTPS, AUTH PLAIN/LOGIN)
final class Smtp
{
    /** @var resource */
    private $sock;
    private string $log = '';

    public function __construct(private array $cfg) {}

    private function read(): array
    {
        $lines = [];
        while (($line = fgets($this->sock, 2048)) !== false) {
            $lines[] = rtrim($line, "\r\n");
            if (strlen($line) < 4 || $line[3] !== '-') break;
        }
        if (!$lines) throw new RuntimeException('SMTP: keine Antwort vom Server');
        $code = (int)substr($lines[0], 0, 3);
        $this->log .= implode(' | ', $lines) . "\n";
        return [$code, $lines];
    }

    private function cmd(string $cmd, array $expect): void
    {
        fwrite($this->sock, $cmd . "\r\n");
        [$code, $lines] = $this->read();
        if (!in_array($code, $expect, true)) {
            $shown = str_starts_with($cmd, 'AUTH') || !str_contains($cmd, ' ') ? strtok($cmd, ' ') : strtok($cmd, ' ');
            throw new RuntimeException("SMTP: unerwartete Antwort auf {$shown}: " . $lines[0]);
        }
    }

    public function send(string $from, string $to, string $raw): void
    {
        $host = $this->cfg['smtp_host'];
        $port = (int)($this->cfg['smtp_port'] ?? 587);
        $secure = $this->cfg['smtp_secure'] ?? 'tls';
        $timeout = (int)($this->cfg['smtp_timeout'] ?? 15);
        $ctx = stream_context_create(['ssl' => [
            'verify_peer' => true, 'verify_peer_name' => true, 'allow_self_signed' => false, 'SNI_enabled' => true, 'peer_name' => $host,
        ]]);
        $remote = ($secure === 'ssl' ? 'ssl://' : 'tcp://') . $host . ':' . $port;
        $sock = @stream_socket_client($remote, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $ctx);
        if (!$sock) throw new RuntimeException("SMTP: Verbindung fehlgeschlagen ({$errno} {$errstr})");
        $this->sock = $sock;
        stream_set_timeout($this->sock, $timeout);

        [$code] = $this->read();
        if ($code !== 220) throw new RuntimeException('SMTP: Server nicht bereit');
        $ehlo = 'EHLO ' . (gethostname() ?: 'localhost');
        $this->cmd($ehlo, [250]);
        if ($secure === 'tls') {
            $this->cmd('STARTTLS', [220]);
            if (!stream_socket_enable_crypto($this->sock, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('SMTP: STARTTLS fehlgeschlagen');
            }
            $this->cmd($ehlo, [250]);
        } elseif ($secure !== 'ssl') {
            throw new RuntimeException('SMTP: unverschlüsselte Verbindung ist nicht zulässig');
        }
        $user = (string)($this->cfg['smtp_user'] ?? '');
        $pass = (string)($this->cfg['smtp_pass'] ?? '');
        if ($user === '' || $pass === '') throw new RuntimeException('SMTP: keine Zugangsdaten konfiguriert');
        fwrite($this->sock, "AUTH PLAIN\r\n");
        [$code] = $this->read();
        if ($code === 334) {
            $this->cmd(base64_encode("\0{$user}\0{$pass}"), [235]);
        } else {
            $this->cmd('AUTH LOGIN', [334]);
            $this->cmd(base64_encode($user), [334]);
            $this->cmd(base64_encode($pass), [235]);
        }
        $this->cmd("MAIL FROM:<{$from}>", [250]);
        $this->cmd("RCPT TO:<{$to}>", [250, 251]);
        $this->cmd('DATA', [354]);
        // Dot-Stuffing
        $data = preg_replace('/^\./m', '..', $raw) ?? $raw;
        fwrite($this->sock, rtrim($data, "\r\n") . "\r\n.\r\n");
        [$code, $lines] = $this->read();
        if ($code !== 250) throw new RuntimeException('SMTP: Nachricht nicht angenommen: ' . $lines[0]);
        fwrite($this->sock, "QUIT\r\n");
        fclose($this->sock);
    }
}

try {
    (new Smtp($cfg))->send($cfg['from_address'], $cfg['recipient'], $raw);
} catch (Throwable $e) {
    // Kein Formularinhalt im Log, nur der technische Fehler.
    logError($cfg, $e->getMessage());
    respond(false, 'Die Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie mir direkt per E-Mail.', 502);
}

respond(true, 'Vielen Dank, Ihre Anfrage wurde übermittelt.', 200, $cfg['success_url'] ?? '/danke/');
