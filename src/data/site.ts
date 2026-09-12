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
    'Geschäftsführer weiterer Unternehmen der Gruppe',
    'Eigentümer eines eigenen Immobilienbestands',
  ],
  linkedin: '', // erst nach Freigabe eintragen
} as const;

export const NAV = [
  {
    label: 'Beratung',
    href: '/asset-management-beratung/',
    children: [
      { label: 'Asset-Management-Beratung', href: '/asset-management-beratung/', kurz: 'Strategie, Mandatsformen, Zusammenarbeit' },
      { label: 'Portfoliooptimierung', href: '/portfoliooptimierung/', kurz: 'Wirtschaftliche und operative Verbesserung' },
      { label: 'Property-Management-Optimierung', href: '/property-management-optimierung/', kurz: 'Prozesse, Zuständigkeiten, Reporting' },
      { label: 'KI im Immobilienmanagement', href: '/ki-immobilienmanagement/', kurz: 'Bessere Daten und Abläufe' },
    ],
  },
  { label: 'Profil', href: '/profil/' },
  { label: 'Einblicke', href: '/einblicke/' },
] as const;

export const CTA = { label: 'Portfolio besprechen', href: '/kontakt/' } as const;

export const FOOTER_LEGAL = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
] as const;
