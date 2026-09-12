import { SITE, OPERATOR, PERSON } from '../data/site';

export const ID = {
  person: `${SITE.url}/#person`,
  org: `${SITE.url}/#organisation`,
  website: `${SITE.url}/#website`,
} as const;

export function absolute(path: string): string {
  return new URL(path, SITE.url).toString();
}

export function personLd() {
  return {
    '@type': 'Person',
    '@id': ID.person,
    name: PERSON.name,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    jobTitle: 'Berater für Asset Management und Portfoliooptimierung',
    worksFor: { '@id': ID.org },
    knowsAbout: ['Asset Management', 'Portfoliooptimierung', 'Property Management', 'Immobilienwirtschaft'],
  };
}

export function orgLd() {
  return {
    '@type': 'Organization',
    '@id': ID.org,
    name: OPERATOR.firma,
    url: OPERATOR.website,
    logo: absolute('/logo-hvm.webp'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: OPERATOR.strasse,
      postalCode: OPERATOR.plzOrt.split(' ')[0],
      addressLocality: OPERATOR.plzOrt.split(' ').slice(1).join(' '),
      addressCountry: OPERATOR.land,
    },
  };
}

export function websiteLd() {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: SITE.url,
    name: `${SITE.name} | ${SITE.claim}`,
    inLanguage: SITE.lang,
    publisher: { '@id': ID.org },
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absolute(c.href),
    })),
  };
}

export function serviceLd(opts: { name: string; description: string; path: string; serviceType: string }) {
  return {
    '@type': 'Service',
    '@id': `${absolute(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: absolute(opts.path),
    provider: { '@id': ID.org },
    areaServed: { '@type': 'Country', name: 'Deutschland' },
    audience: { '@type': 'BusinessAudience', name: 'Eigentümer und Bestandshalter von Wohnimmobilienportfolios' },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}
