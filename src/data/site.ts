/**
 * Zentrale Site-Daten. Alle Fakten hier stammen aus der Faktenliste (docs/FAKTENLISTE.md).
 * Nichts ergaenzen, was dort nicht als freigegeben oder als Auftraggeberangabe gefuehrt ist.
 */
export const SITE = {
  name: 'Timo Müller',
  claim: 'Asset Management & Portfoliooptimierung',
  leitgedanke: 'Immobilienportfolios wirtschaftlich verbessern. Entscheidungen in Umsetzung bringen.',
  url: import.meta.env.SITE ?? 'https://timo.muellerhv.de',
  email: 'timo@muellerhv.de',
  noindex: (import.meta.env.NOINDEX ?? 'false') === 'true',
  lang: 'de',
  locale: 'de_DE',
} as const;

/** Betreiber laut HVM-Impressum, Stand 12.09.2026, vor Veroeffentlichung erneut pruefen. */
export const OPERATOR = {
  firma: 'Hausverwaltung Müller GmbH',
  coName: 'c/o Müller Holding AG',
  strasse: 'Rheinpromenade 13',
  plzOrt: '40789 Monheim am Rhein',
  land: 'DE',
  registergericht: 'Amtsgericht Düsseldorf',
  hrb: 'HRB 104762',
  vertretenDurch: 'Timo Müller',
  funktion: 'Geschäftsführer',
  website: 'https://www.muellerhv.de',
} as const;

/** Vom Auftraggeber angegebene Profilgrundlage. Keine Zahlen, Jahre oder Volumina. */
export const PERSON = {
  name: 'Timo Müller',
  funktionen: [
    'Vorstand der Müller Holding AG',
    'Geschäftsführer der Hausverwaltung Müller GmbH',
    'Geschäftsführer weiterer Unternehmen',
    'Eigentümer eines Immobilienbestands',
  ],
  linkedin: '', // erst nach Freigabe eintragen
} as const;

/* ---------------------------------------------------------------------------
   Navigation (docs/CONTENT-PLAN-V2.md, Abschnitt 6)
   Hauptnavigation bleibt dreiteilig plus Kontaktbutton. Der Punkt Beratung traegt
   zwei Gruppen; Header, Footer und 404 generieren daraus, keine handgepflegten Doppellisten.
--------------------------------------------------------------------------- */

export interface NavLink {
  label: string;
  href: string;
  /** Kurzbeschreibung fuer das Untermenue */
  kurz?: string;
}
export interface NavGruppe {
  /** Kennung fuer ids im Untermenue, nur Kleinbuchstaben und Bindestrich */
  id: string;
  titel: string;
  children: readonly NavLink[];
}
export interface NavItem {
  label: string;
  href: string;
  gruppen?: readonly NavGruppe[];
}

export const NAV = [
  {
    label: 'Beratung',
    href: '/asset-management-beratung/',
    gruppen: [
      {
        id: 'beratungsfelder',
        titel: 'Beratungsfelder',
        children: [
          { label: 'Asset-Management-Beratung', href: '/asset-management-beratung/', kurz: 'Strategie, Mandatsformen, Zusammenarbeit' },
          { label: 'Portfoliooptimierung', href: '/portfoliooptimierung/', kurz: 'Wirtschaftliche und operative Verbesserung' },
          { label: 'Property-Management-Optimierung', href: '/property-management-optimierung/', kurz: 'Prozesse, Zuständigkeiten, Umsetzung' },
          { label: 'KI im Immobilienmanagement', href: '/ki-immobilienmanagement/', kurz: 'Bessere Daten und Abläufe' },
        ],
      },
      {
        id: 'vertiefung',
        titel: 'Vertiefung und Ablauf',
        children: [
          { label: 'Investitionspriorisierung', href: '/investitionspriorisierung/', kurz: 'Instandhaltung und Investitionen ordnen' },
          { label: 'Dienstleistersteuerung', href: '/dienstleistersteuerung/', kurz: 'Leistungsbeschreibung, Nachtrag, Abnahme' },
          { label: 'Reporting und Kennzahlen', href: '/reporting-und-kennzahlen/', kurz: 'Berichte, die Entscheidungen auslösen' },
          { label: 'Zusammenarbeit', href: '/zusammenarbeit/', kurz: 'Vom Erstgespräch bis zur Übergabe' },
        ],
      },
    ],
  },
  { label: 'Profil', href: '/profil/' },
  { label: 'Einblicke', href: '/einblicke/' },
] as const satisfies readonly NavItem[];

/** Die beiden Gruppen des Untermenues Beratung. */
export const NAV_GRUPPEN = NAV[0].gruppen;

/** Alle acht Untermenuepunkte flach, z. B. fuer aria-current-Pruefungen. */
export const BERATUNG_LINKS: readonly NavLink[] = NAV_GRUPPEN.flatMap((g): readonly NavLink[] => g.children);

export const CTA = { label: 'Portfolio besprechen', href: '/kontakt/' } as const;

/** Seiten ausserhalb der Beratungsgruppen, die Footer und 404 zusaetzlich anbieten. Glossar steht nicht im Hauptmenue. */
export const WEITERE_SEITEN = [
  { label: 'Einblicke', href: '/einblicke/' },
  { label: 'Glossar', href: '/glossar/' },
  { label: 'Kurzfakten', href: '/kurzfakten/' },
  { label: 'Profil', href: '/profil/' },
  { label: 'Kontakt', href: '/kontakt/' },
] as const satisfies readonly NavLink[];

export const FOOTER_LEGAL = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
] as const satisfies readonly NavLink[];

export interface FooterSpalte {
  titel: string;
  links: readonly NavLink[];
}

/** Die drei Linkspalten des Footers neben dem Absenderblock, vollstaendig aus NAV abgeleitet. */
export const FOOTER_SPALTEN: readonly FooterSpalte[] = [
  { titel: 'Beratung', links: NAV_GRUPPEN[0].children },
  { titel: 'Vertiefung', links: NAV_GRUPPEN[1].children },
  { titel: 'Wissen und Weiteres', links: [...WEITERE_SEITEN, ...FOOTER_LEGAL] },
];

/** Linkgruppen der 404-Seite: beide Beratungsgruppen plus weitere Seiten, ohne Rechtstexte. */
export const SEITEN_404: readonly FooterSpalte[] = [
  ...NAV_GRUPPEN.map((g) => ({ titel: g.titel, links: g.children })),
  { titel: 'Weitere Seiten', links: WEITERE_SEITEN },
];
