import { AIRPORTS, FIXED_PRICES, PLACES } from '@/config/seoFacts';
import type { SEOPage } from '@/config/seoPages';
import { UI, comparisonSection, howItWorksSection, includedSection, pickFaqs } from './shared';
import type { SeoLandingContent, SeoSection } from './types';

const CITY_NOTES: Record<string, { landmarks: string; business: string; routes: { href: string; label: string }[] }> = {
  brussels: {
    landmarks: 'Grand-Place, the European Quarter, Sablon, Avenue Louise, the Atomium and the hotels around Brussels-Midi and Brussels-Central',
    business: 'EU institutions, NATO headquarters in Evere, embassies, Brussels Expo and the SQUARE convention centre',
    routes: [{ href: '/en/route/brussels-zaventem', label: 'Brussels to Zaventem' }, { href: '/en/route/brussels-charleroi', label: 'Brussels to Charleroi Airport' }],
  },
  antwerp: {
    landmarks: 'the historic centre, Zuid, Eilandje, Antwerp-Central station, the diamond district and the port area',
    business: 'the port and petrochemical cluster, the diamond exchange, Antwerp Expo and the university hospital',
    routes: [{ href: '/en/route/antwerp-brussels-airport', label: 'Antwerp to Brussels Airport' }],
  },
  ghent: {
    landmarks: 'Korenmarkt, Graslei, Patershol, Gent-Sint-Pieters station and the university quarter',
    business: 'Ghent University, the North Sea Port, Flanders Expo and the Technologiepark in Zwijnaarde',
    routes: [{ href: '/en/route/ghent-brussels-airport', label: 'Ghent to Brussels Airport' }],
  },
  bruges: {
    landmarks: 'the medieval centre inside the ring canal, Markt, Burg, Sint-Anna and the station district',
    business: 'the College of Europe, Zeebrugge port and the coastal hotel sector',
    routes: [{ href: '/en/route/bruges-brussels-airport', label: 'Bruges to Brussels Airport' }, { href: '/en/cruise-transfer/zeebrugge', label: 'Zeebrugge cruise transfer' }],
  },
  leuven: {
    landmarks: 'Oude Markt, Grote Markt, the Beguinage, Leuven station and the KU Leuven campuses',
    business: 'KU Leuven, imec, UZ Leuven Gasthuisberg and the Haasrode research park',
    routes: [{ href: '/en/route/leuven-brussels-airport', label: 'Leuven to Brussels Airport' }],
  },
  mechelen: {
    landmarks: 'Grote Markt, St Rumbold’s Tower, Mechelen station and the Nekkerspoel district',
    business: 'the Mechelen-Noord business park, Technopolis and Telenet’s campus',
    routes: [{ href: '/en/route/leuven-brussels-airport', label: 'Leuven to Brussels Airport' }],
  },
  liege: {
    landmarks: 'Liège-Guillemins station, the Carré, Outremeuse and the Cointe hill',
    business: 'Liège Airport cargo, CHU Liège, the Sart-Tilman university campus and the Spa-Francorchamps circuit 45 minutes away',
    routes: [{ href: '/en/route/liege-brussels-airport', label: 'Liège to Brussels Airport' }, { href: '/services/event-transfers/formula-1-spa-francorchamps', label: 'Spa-Francorchamps transfers' }],
  },
  namur: {
    landmarks: 'the Citadel, the old town on the Sambre and Meuse, Namur station and Jambes',
    business: 'the Walloon Parliament and government, UNamur and the Crealys science park',
    routes: [{ href: '/en/route/namur-charleroi-airport', label: 'Namur to Charleroi Airport' }],
  },
  charleroi: {
    landmarks: 'Charleroi-Central station, Place Charles II, the Ville Haute and Gosselies',
    business: 'the Aeropole science park, Sonaca and the airport zone itself',
    routes: [{ href: '/en/route/charleroi-brussels-airport', label: 'Charleroi to Brussels Zaventem' }, { href: '/en/airport-transfer/lille', label: 'Lille Airport transfers' }],
  },
  mons: {
    landmarks: 'the Grand-Place, the Belfry, Mons station and the SHAPE area in Casteau',
    business: 'SHAPE and NATO personnel, UMons, the Digital Innovation Valley and Google’s data centre in Saint-Ghislain',
    routes: [{ href: '/en/route/mons-charleroi-airport', label: 'Mons to Charleroi Airport' }, { href: '/en/airport-transfer/lille', label: 'Lille Airport transfers' }],
  },
  hasselt: {
    landmarks: 'the city centre, Hasselt station, Kiewit and the Japanese Garden',
    business: 'Corda Campus, UHasselt, Jessa hospital and the Limburg business parks',
    routes: [{ href: '/en/route/hasselt-brussels-airport', label: 'Hasselt to Brussels Airport' }, { href: '/en/festival/pukkelpop', label: 'Pukkelpop transfers' }],
  },
  ostend: {
    landmarks: 'the seafront promenade, Ostend station and ferry terminal, Mariakerke and the Kursaal',
    business: 'the port, Ostend-Bruges airport and the coastal tourism sector',
    routes: [{ href: '/en/route/bruges-brussels-airport', label: 'Bruges to Brussels Airport' }],
  },
};

export function buildCity(page: SEOPage, placeKey: string): SeoLandingContent {
  const lang = 'en' as const;
  const ui = UI[lang];
  const p = PLACES[placeKey];
  const notes = CITY_NOTES[placeKey];
  const city = p.name.en;
  const bru = p.toBRU;
  const crl = p.toCRL;
  const F = FIXED_PRICES;

  const lead = `Helicro provides a private, English-speaking driver in ${city} for airport transfers, day trips and business travel, at one fixed price per minivan for up to 8 passengers. From ${city}, ${AIRPORTS.BRU.shortName.en} is ${bru ? `${bru.km} km (${bru.minMin}–${bru.maxMin} min)` : 'reachable directly'} and ${AIRPORTS.CRL.shortName.en} is ${crl ? `${crl.km} km (${crl.minMin}–${crl.maxMin} min)` : 'reachable directly'}.`;

  const intro = [
    `Whether you land at Brussels Airport with a family and six suitcases, need a reliable car for a week of meetings in ${city}, or want to see Bruges and Ghent without renting a car, Helicro’s owner-driver Gerasimos plans the ride around your schedule rather than a timetable. Pickups cover ${notes.landmarks}.`,
    `Corporate and institutional clients in ${city} use Helicro for ${notes.business}. Hourly hire, multi-stop itineraries and monthly invoicing with VAT are available, and the driver speaks English, French and Greek.`,
  ];

  const servicesSection: SeoSection = {
    h2: `What Helicro does in ${city}`,
    bullets: [
      `Airport transfers between ${city} and Brussels Airport (BRU), Brussels South Charleroi (CRL) and Lille (LIL), fixed price per vehicle`,
      `Private day trips from ${city} to Bruges, Ghent, Durbuy, Waterloo, Dinant and the Ardennes with a driver who knows the roads`,
      `Corporate chauffeur service and hourly hire for meetings, conferences, roadshows and embassy delegations`,
      `Festival and event transfers: Tomorrowland, Rock Werchter, Pukkelpop, Spa-Francorchamps race weekends`,
      `Wedding guest shuttles and private party transport across ${p.region.en}`,
      `Same-day parcel and document courier from ${city} to anywhere in Belgium`,
    ],
  };

  const priceSection: SeoSection = {
    h2: `Fixed prices from ${city}`,
    paragraphs: [
      `Every ride from ${city} is quoted as a single fixed amount per minivan, confirmed in writing before you book. As a reference, the published prices from Brussels city are ${F.brusselsToBRU[0].price}€ to ${F.brusselsToBRU[2].price}€ to Zaventem and ${F.brusselsToCRL[0].price}€ to ${F.brusselsToCRL[7].price}€ to Charleroi depending on group size; a full-day private tour starts at ${F.dayTourFrom}€. ${ui.perVehicle}`,
    ],
    table: {
      caption: `Typical driving distances and times from ${city} outside peak hours.`,
      headers: ['Destination', ui.distance, ui.time],
      rows: [
        ...(bru ? [[AIRPORTS.BRU.name.en, `${bru.km} km`, `${bru.minMin}–${bru.maxMin} min`]] : []),
        ...(crl ? [[AIRPORTS.CRL.name.en, `${crl.km} km`, `${crl.minMin}–${crl.maxMin} min`]] : []),
        ...(p.toLIL ? [[AIRPORTS.LIL.name.en, `${p.toLIL.km} km`, `${p.toLIL.minMin}–${p.toLIL.maxMin} min`]] : []),
      ],
    },
  };

  const specificFaqs = [
    { question: `Do you pick up anywhere in ${city}?`, answer: `Yes. Helicro collects from any address in ${city} and the surrounding ${p.region.en}: homes, hotels, stations, offices and campuses. Extra pickup points in the same city cost ${F.extraStop}€ per stop.` },
    { question: `How much does a private driver in ${city} cost?`, answer: `Airport transfers are priced per vehicle as a fixed amount based on your address; hourly hire and full-day tours from ${F.dayTourFrom}€ are quoted per booking. There is no per-person pricing, no meter and no night surcharge.` },
    { question: `Which airport is best from ${city}?`, answer: bru && crl ? `Brussels Airport (Zaventem) is ${bru.km} km away and has the most destinations; Charleroi is ${crl.km} km away and serves the low-cost carriers. Helicro drives to both at a fixed price, so choose by flight, not by transport.` : `Helicro drives from ${city} to Brussels Airport, Charleroi and Lille at a fixed price, so you can choose the airport by flight rather than by transport options.` },
  ];

  return {
    lang,
    url: page.url,
    type: page.type,
    title: page.title,
    description: page.description,
    h1: page.h1,
    lead,
    intro,
    sections: [servicesSection, priceSection, howItWorksSection(lang), includedSection(lang), comparisonSection(lang)],
    faqs: [...specificFaqs, ...pickFaqs(lang, ['cancel', 'seats', 'pay', 'lang', 'book'])],
    breadcrumbs: [
      { name: ui.home, url: '/' },
      { name: 'Service area', url: '/en/service-area' },
      { name: city, url: page.url },
    ],
    related: [
      { title: ui.routes, links: notes.routes },
      {
        title: ui.hubs,
        links: [
          { href: AIRPORTS.BRU.hub.en!, label: 'Brussels Airport (Zaventem) transfers' },
          { href: AIRPORTS.CRL.hub.en!, label: 'Charleroi Airport transfers' },
        ],
      },
      {
        title: ui.services,
        links: [
          { href: '/en/service-area', label: 'All service areas' },
          { href: '/services/sightseeing', label: 'Private day trips' },
          { href: '/en/corporate-shuttle-brussels', label: 'Corporate shuttle service' },
          { href: '/pricing', label: 'Fixed prices' },
        ],
      },
    ],
    alternates: { en: page.url },
    schema: {
      serviceName: page.h1,
      serviceType: 'Private driver and airport transfer',
      areaServed: [
        { type: 'City', name: city },
        { type: 'Country', name: 'Belgium' },
      ],
    },
    cta: { headline: ui.ctaHeadline, text: ui.ctaText },
    image: '/images/door-to-door-transportation-4k.jpg',
  };
}
