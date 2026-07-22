export const SITE_URL = 'https://helicro.be';
export const BUSINESS_PHONE = '+32472358805';
export const BUSINESS_EMAIL = 'helicrotransport@gmail.com';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Helicro',
    legalName: 'Helicro SRL',
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    priceRange: '€€',
    image: `${SITE_URL}/images/logo-2.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: "Braine-l'Alleud",
      postalCode: '1420',
      addressRegion: 'Walloon Brabant',
      addressCountry: 'BE',
    },
    vatID: 'BE 0804.095.653',
    areaServed: [
      { '@type': 'Country', name: 'Belgium' },
      { '@type': 'City', name: 'Brussels' },
      { '@type': 'City', name: 'Antwerp' },
    ],
    sameAs: [],
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed: { type: 'City' | 'Country'; name: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Helicro',
      url: SITE_URL,
      telephone: BUSINESS_PHONE,
      priceRange: '€€',
    },
    areaServed: opts.areaServed.map((a) => ({
      '@type': a.type,
      name: a.name,
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: {
      '@type': 'Organization',
      name: 'Helicro',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Helicro',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-2.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    },
  };
}
