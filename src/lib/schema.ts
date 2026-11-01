import { AIRPORTS, DESTINATIONS, FIXED_PRICES, PRICED_ROUTES, SHARED_SHUTTLE, SPA_F1, type AirportCode } from '@/config/seoFacts';
import { PRICED_ROUTE_URLS, SHARED_SHUTTLE_URLS, type PricedLang } from '@/config/pricedRoutePages';
import { priceListHref } from '@/config/translations';
import { AVERAGE_RATING, GOOGLE_MAPS_URL, REVIEW_COUNT, googleReviews } from '@/config/googleReviews';
import type { Locale } from '@/lib/seo';

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

const BUSINESS_COPY: Record<Locale, { description: string; jobTitle: string; region: string }> = {
  en: {
    description: 'Private airport transfers and chauffeur service in Brussels, with fixed prices and Ford minivans for up to 8 passengers.',
    jobTitle: 'Founder and chauffeur',
    region: 'Walloon Brabant',
  },
  nl: {
    description: 'Privé luchthavenvervoer en chauffeursdienst in Brussel, met vaste prijzen en Ford minivans tot 8 passagiers.',
    jobTitle: 'Oprichter en chauffeur',
    region: 'Waals-Brabant',
  },
  fr: {
    description: 'Navette aéroport privée et service de chauffeur à Bruxelles, prix fixes et minivans Ford jusqu’à 8 passagers.',
    jobTitle: 'Fondateur et chauffeur',
    region: 'Brabant wallon',
  },
  el: {
    description: 'Ιδιωτικές μεταφορές αεροδρομίου και υπηρεσία σοφέρ στις Βρυξέλλες, με σταθερές τιμές και Ford minivan έως 8 επιβάτες.',
    jobTitle: 'Ιδρυτής και σοφέρ',
    region: 'Βαλλονική Βραβάντη',
  },
  hr: {
    description: 'Privatni transferi do zračne luke i usluga vozača u Bruxellesu, fiksne cijene i Ford kombiji do 8 putnika.',
    jobTitle: 'Osnivač i vozač',
    region: 'Valonski Brabant',
  },
};

/** Site-wide entity graph: Organization, WebSite, LocalBusiness/TaxiService and the founder. */
export function siteGraph(lang: Locale = 'en') {
  const copy = BUSINESS_COPY[lang];
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
        jobTitle: copy.jobTitle,
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
        description: copy.description,
        inLanguage: lang,
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
          addressRegion: copy.region,
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
          ...FIXED_PRICES.brusselsToBRU.map((tier) => ({
            '@type': 'Offer',
            name: `Brussels to Brussels Airport (Zaventem), ${tier.pax} passengers`,
            priceCurrency: 'EUR',
            priceSpecification: { '@type': 'PriceSpecification', minPrice: tier.price, maxPrice: tier.maxPrice, priceCurrency: 'EUR' },
          })),
          { '@type': 'Offer', name: 'Brussels to Charleroi Airport, 1 passenger', price: 70, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Brussels to Charleroi Airport, 8 passengers', price: FIXED_PRICES.brusselsToCRL[7].price, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Private full-day sightseeing tour, up to 8 passengers', price: FIXED_PRICES.dayTourFrom, priceCurrency: 'EUR' },
        ],
      },
    ],
  };
}

/** Kept for backwards compatibility; prefer siteGraph(). */
export function localBusinessSchema(lang: Locale = 'en') {
  return siteGraph(lang);
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
  offers?: { name: string; price: number; maxPrice?: number }[];
  lang?: string;
}) {
  const offers = opts.offers?.length
    ? opts.offers.map((o) => ({
        '@type': 'Offer',
        name: o.name,
        ...(o.maxPrice ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: o.price, maxPrice: o.maxPrice, priceCurrency: 'EUR' } } : { price: o.price }),
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

const CATALOG_COPY: Record<Locale, { name: string; serviceType: string; catalog: string; fromWord: string; vehicle: string; sharedDay: string; sharedNight: string; spa: string; tour: string; brussels: string; charleroi: string; zaventem: string }> = {
  en: { name: 'Helicro fixed-price private transfers', serviceType: 'Airport transfer and long-distance chauffeur service', catalog: 'Helicro price list 2026', fromWord: 'from', vehicle: 'per vehicle', sharedDay: 'Shared shuttle Brussels to Charleroi Airport, per person, day', sharedNight: 'Shared shuttle Brussels to Charleroi Airport, per person, night', spa: 'Spa-Francorchamps race weekend, chauffeur and 8-seat minivan, per day', tour: 'Private full-day sightseeing tour, up to 8 passengers', brussels: 'Brussels', charleroi: 'Charleroi Airport', zaventem: 'Brussels Airport (Zaventem)' },
  nl: { name: 'Helicro privévervoer met vaste prijzen', serviceType: 'Luchthavenvervoer en chauffeur over lange afstand', catalog: 'Prijslijst Helicro 2026', fromWord: 'vanaf', vehicle: 'per voertuig', sharedDay: 'Gedeelde shuttle Brussel naar Charleroi Airport, per persoon, dag', sharedNight: 'Gedeelde shuttle Brussel naar Charleroi Airport, per persoon, nacht', spa: 'Raceweekend Spa-Francorchamps, chauffeur en minivan 8 plaatsen, per dag', tour: 'Privé dagtocht, tot 8 passagiers', brussels: 'Brussel', charleroi: 'Charleroi Airport', zaventem: 'Brussels Airport (Zaventem)' },
  fr: { name: 'Transferts privés Helicro à prix fixe', serviceType: 'Navette aéroport et chauffeur longue distance', catalog: 'Tarifs Helicro 2026', fromWord: 'dès', vehicle: 'par véhicule', sharedDay: 'Navette partagée Bruxelles vers Charleroi, par personne, jour', sharedNight: 'Navette partagée Bruxelles vers Charleroi, par personne, nuit', spa: 'Week-end de course Spa-Francorchamps, chauffeur et minivan 8 places, par jour', tour: 'Excursion privée d’une journée, jusqu’à 8 passagers', brussels: 'Bruxelles', charleroi: 'Aéroport de Charleroi', zaventem: 'Aéroport de Bruxelles (Zaventem)' },
  el: { name: 'Ιδιωτικές μεταφορές Helicro με σταθερή τιμή', serviceType: 'Μεταφορά αεροδρομίου και σοφέρ μεγάλων αποστάσεων', catalog: 'Τιμοκατάλογος Helicro 2026', fromWord: 'από', vehicle: 'ανά όχημα', sharedDay: 'Κοινόχρηστο λεωφορείο Βρυξέλλες προς Charleroi, ανά άτομο, ημέρα', sharedNight: 'Κοινόχρηστο λεωφορείο Βρυξέλλες προς Charleroi, ανά άτομο, νύχτα', spa: 'Σαββατοκύριακο αγώνων Spa-Francorchamps, σοφέρ και minivan 8 θέσεων, ανά ημέρα', tour: 'Ιδιωτική ολοήμερη περιήγηση, έως 8 επιβάτες', brussels: 'Βρυξέλλες', charleroi: 'Αεροδρόμιο Charleroi', zaventem: 'Αεροδρόμιο Βρυξελλών (Zaventem)' },
  hr: { name: 'Privatni transferi Helicro po fiksnoj cijeni', serviceType: 'Transfer do zračne luke i vozač na duljim relacijama', catalog: 'Cjenik Helicro 2026', fromWord: 'od', vehicle: 'po vozilu', sharedDay: 'Dijeljeni shuttle Bruxelles–Charleroi, po osobi, dan', sharedNight: 'Dijeljeni shuttle Bruxelles–Charleroi, po osobi, noć', spa: 'Vikend utrka Spa-Francorchamps, vozač i kombi s 8 sjedala, po danu', tour: 'Privatni cjelodnevni razgled, do 8 putnika', brussels: 'Bruxelles', charleroi: 'Zračna luka Charleroi', zaventem: 'Zračna luka Bruxelles (Zaventem)' },
};

function isPricedLang(lang: Locale): lang is PricedLang {
  return lang === 'en' || lang === 'nl' || lang === 'fr';
}

/** Every published fixed price as an OfferCatalog, for the pricing and price-list pages. */
export function priceCatalogSchema(lang: Locale) {
  const pageUrl = priceListHref(lang);
  const copy = CATALOG_COPY[lang];
  const localPath = (path: string) => (lang === 'en' ? path : `/${lang}${path}`);
  const offer = (name: string, price: number, url?: string) => ({
    '@type': 'Offer',
    name,
    price,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: abs(url ?? pageUrl),
    priceSpecification: { '@type': 'PriceSpecification', price, priceCurrency: 'EUR', valueAddedTaxIncluded: true },
  });
  const routeUrl = (key: string) => (isPricedLang(lang) ? PRICED_ROUTE_URLS[key]?.[lang] : undefined);
  const offers = [
    ...FIXED_PRICES.brusselsToBRU.map((t) => ({ ...offer(`${copy.brussels} – ${copy.zaventem}, ${t.price}–${t.maxPrice}€, ${t.pax}, ${copy.vehicle}`, t.price, routeUrl('brussels-zaventem')), price: undefined, priceSpecification: { '@type': 'PriceSpecification', minPrice: t.price, maxPrice: t.maxPrice, priceCurrency: 'EUR', valueAddedTaxIncluded: true } })),
    ...FIXED_PRICES.brusselsToCRL.map((t) => offer(`${copy.brussels} – ${copy.charleroi}, ${t.pax}, ${copy.vehicle}`, t.price, routeUrl('brussels-charleroi'))),
    offer(copy.sharedDay, SHARED_SHUTTLE.perPassengerDay, isPricedLang(lang) ? SHARED_SHUTTLE_URLS[lang] : pageUrl),
    offer(copy.sharedNight, SHARED_SHUTTLE.perPassengerNight, isPricedLang(lang) ? SHARED_SHUTTLE_URLS[lang] : pageUrl),
    ...PRICED_ROUTES.flatMap((r) =>
      r.tiers.map((t) => offer(`${r.from === 'crl' ? copy.charleroi : copy.brussels} – ${DESTINATIONS[r.to].name[lang]}, ${t.pax}, ${copy.vehicle}`, t.price, routeUrl(r.key)))
    ),
    offer(copy.spa, SPA_F1.perDay, localPath('/services/event-transfers/formula-1-spa-francorchamps')),
    offer(copy.tour, FIXED_PRICES.dayTourFrom, localPath('/services/sightseeing')),
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: copy.name,
    serviceType: copy.serviceType,
    inLanguage: lang,
    provider: { '@id': BUSINESS_ID },
    areaServed: [{ '@type': 'Country', name: 'Belgium' }, { '@type': 'Country', name: 'France' }, { '@type': 'Country', name: 'Netherlands' }, { '@type': 'Country', name: 'Germany' }, { '@type': 'Country', name: 'Luxembourg' }],
    url: abs(pageUrl),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: copy.catalog,
      itemListElement: offers,
    },
  };
}
