import { AIRPORTS, type AirportCode } from '@/config/seoFacts';
import { AVERAGE_RATING, GOOGLE_MAPS_URL, REVIEW_COUNT, googleReviews } from '@/config/googleReviews';

export const SITE_URL = 'https://helicro.be';
export const BUSINESS_PHONE = '+32472358805';
export const BUSINESS_PHONE_GR = '+306974581706';
export const BUSINESS_EMAIL = 'helicrotransport@gmail.com';
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/#gerasimos`;

const abs = (u: string) => (u.startsWith('http') ? u : `${SITE_URL}${u === '/' ? '' : u}`);

function aggregateRating() {
  return {
    '@type': 'AggregateRating',
    ratingValue: AVERAGE_RATING,
    bestRating: 5,
    worstRating: 1,
    reviewCount: REVIEW_COUNT,
  };
}

/** Site-wide entity graph: Organization, WebSite, LocalBusiness/TaxiService and the founder. */
export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Helicro Transport',
        legalName: 'Helicro SRL',
        alternateName: 'Helicro',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo-2.png` },
        vatID: 'BE 0804.095.653',
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        founder: { '@id': FOUNDER_ID },
        sameAs: [GOOGLE_MAPS_URL],
        contactPoint: [
          { '@type': 'ContactPoint', telephone: BUSINESS_PHONE, contactType: 'reservations', areaServed: 'BE', availableLanguage: ['en', 'fr', 'el', 'nl'] },
          { '@type': 'ContactPoint', telephone: BUSINESS_PHONE_GR, contactType: 'reservations', areaServed: 'GR', availableLanguage: ['el', 'en'] },
        ],
      },
      {
        '@type': 'Person',
        '@id': FOUNDER_ID,
        name: 'Gerasimos',
        jobTitle: 'Founder and chauffeur',
        worksFor: { '@id': ORG_ID },
        knowsLanguage: ['en', 'fr', 'el'],
        image: `${SITE_URL}/images/gerasimos-portrait.jpg`,
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: 'Helicro Transport',
        publisher: { '@id': ORG_ID },
        inLanguage: ['en', 'nl', 'fr', 'el', 'hr'],
      },
      {
        '@type': ['LocalBusiness', 'TaxiService'],
        '@id': BUSINESS_ID,
        name: 'Helicro',
        legalName: 'Helicro SRL',
        url: SITE_URL,
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Credit Card, Debit Card, Bank Transfer, Invoice',
        image: `${SITE_URL}/images/logo-2.png`,
        logo: `${SITE_URL}/images/logo-2.png`,
        parentOrganization: { '@id': ORG_ID },
        founder: { '@id': FOUNDER_ID },
        address: {
          '@type': 'PostalAddress',
          addressLocality: "Braine-l'Alleud",
          postalCode: '1420',
          addressRegion: 'Walloon Brabant',
          addressCountry: 'BE',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 50.6836, longitude: 4.3676 },
        vatID: 'BE 0804.095.653',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        areaServed: [
          { '@type': 'Country', name: 'Belgium' },
          { '@type': 'City', name: 'Brussels' },
          { '@type': 'City', name: 'Antwerp' },
          { '@type': 'City', name: 'Ghent' },
          { '@type': 'City', name: 'Bruges' },
          { '@type': 'City', name: 'Charleroi' },
          { '@type': 'City', name: 'Lille' },
        ],
        knowsLanguage: ['en', 'fr', 'el'],
        hasMap: GOOGLE_MAPS_URL,
        sameAs: [GOOGLE_MAPS_URL],
        aggregateRating: aggregateRating(),
        makesOffer: [
          { '@type': 'Offer', name: 'Brussels to Brussels Airport (Zaventem), 1–2 passengers', price: 35, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Brussels to Brussels Airport (Zaventem), 3–4 passengers', price: 45, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Brussels to Brussels Airport (Zaventem), 5–8 passengers', price: 55, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Brussels to Charleroi Airport, 1 passenger', price: 65, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Brussels to Charleroi Airport, 8 passengers', price: 160, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Private full-day sightseeing tour, up to 8 passengers', price: 380, priceCurrency: 'EUR' },
        ],
      },
    ],
  };
}

/** Kept for backwards compatibility; prefer siteGraph(). */
export function localBusinessSchema() {
  return siteGraph();
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: abs(item.url),
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
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed: { type: 'City' | 'Country'; name: string }[];
  offers?: { name: string; price: number }[];
  lang?: string;
}) {
  const offers = opts.offers?.length
    ? opts.offers.map((o) => ({
        '@type': 'Offer',
        name: o.name,
        price: o.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: abs(opts.url),
      }))
    : { '@type': 'Offer', priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: abs(opts.url) };
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.url),
    inLanguage: opts.lang,
    provider: { '@id': BUSINESS_ID },
    areaServed: opts.areaServed.map((a) => ({ '@type': a.type, name: a.name })),
    offers,
  };
}

export function airportSchema(code: AirportCode) {
  const a = AIRPORTS[code];
  return {
    '@context': 'https://schema.org',
    '@type': 'Airport',
    name: a.name.en,
    iataCode: a.iata,
    icaoCode: a.icao,
    address: {
      '@type': 'PostalAddress',
      addressLocality: a.locality,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  lang?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.url),
    inLanguage: opts.lang ?? 'en',
    image: abs(opts.image ?? '/images/brussels-must-see-travelstyle.jpg'),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: { '@id': FOUNDER_ID, '@type': 'Person', name: 'Gerasimos', url: `${SITE_URL}/about-us` },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.url) },
  };
}

/** Review + AggregateRating markup for the reviews page. */
export function reviewsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TaxiService'],
    '@id': BUSINESS_ID,
    name: 'Helicro',
    url: SITE_URL,
    aggregateRating: aggregateRating(),
    review: googleReviews
      .filter((r) => r.text)
      .map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        reviewRating: { '@type': 'Rating', ratingValue: r.stars, bestRating: 5, worstRating: 1 },
        reviewBody: r.text,
        inLanguage: r.lang,
        url: r.reviewUrl,
        publisher: { '@type': 'Organization', name: 'Google' },
      })),
  };
}
