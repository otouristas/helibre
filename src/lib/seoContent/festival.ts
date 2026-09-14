import { FESTIVALS, FIXED_PRICES } from '@/config/seoFacts';
import type { SEOPage } from '@/config/seoPages';
import { UI, howItWorksSection, includedSection, pickFaqs } from './shared';
import type { SeoLandingContent, SeoSection } from './types';

export function buildFestival(page: SEOPage, key: string): SeoLandingContent {
  const lang = 'en' as const;
  const ui = UI[lang];
  const f = FESTIVALS[key];
  const F = FIXED_PRICES;

  const lead = `Helicro runs private 8-seat minivan transfers to ${f.name} at ${f.venue.en} from Brussels Airport (${f.fromBRU.km} km, ${f.fromBRU.minMin}–${f.fromBRU.maxMin} min), Brussels city (${f.fromBrussels.km} km, ${f.fromBrussels.minMin}–${f.fromBrussels.maxMin} min)${f.fromCRL ? ` and Charleroi Airport (${f.fromCRL.km} km, ${f.fromCRL.minMin}–${f.fromCRL.maxMin} min)` : ''}, at one fixed price per vehicle with a guaranteed late-night return.`;

  const intro = [
    `${f.name} takes place in ${f.month.en}. ${f.note.en} A pre-booked private transfer means your group leaves the airport or hotel together, arrives at the drop-off zone with all its gear, and has a driver on call for the ride back at the hour you choose.`,
    'Every ride is driven by Gerasimos or a licensed Helicro driver with more than 30 years of accident-free driving in Belgium. The price is fixed per minivan, not per person, and the same after midnight as at noon, so eight friends split one number instead of paying surge prices on an app.',
  ];

  const logistics: SeoSection = {
    h2: `Getting to ${f.name}: distances and timings`,
    paragraphs: ['Typical driving times outside festival congestion. On arrival and departure peaks around the site, add 20 to 40 minutes; your driver monitors police diversions and picks the least congested access road.'],
    table: {
      headers: ['From', ui.distance, ui.time],
      rows: [
        ['Brussels Airport (BRU)', `${f.fromBRU.km} km`, `${f.fromBRU.minMin}–${f.fromBRU.maxMin} min`],
        ['Brussels city centre', `${f.fromBrussels.km} km`, `${f.fromBrussels.minMin}–${f.fromBrussels.maxMin} min`],
        ...(f.fromCRL ? [['Charleroi Airport (CRL)', `${f.fromCRL.km} km`, `${f.fromCRL.minMin}–${f.fromCRL.maxMin} min`]] : []),
        ...(f.otherOrigin ? [[f.otherOrigin.name.en, `${f.otherOrigin.leg.km} km`, `${f.otherOrigin.leg.minMin}–${f.otherOrigin.leg.maxMin} min`]] : []),
      ],
    },
  };

  const packages: SeoSection = {
    h2: 'Transfer options for festival groups',
    bullets: [
      'One-way arrival: airport or station to the festival campsite or drop-off zone, luggage and tents included',
      'Daily round trip: hotel to festival in the afternoon, pickup at a fixed meeting point after the last set',
      'Weekend standby: one vehicle and driver reserved for your group for all festival days',
      'Multi-stop pickups: collect friends at two or three Brussels addresses for 10€ per extra stop',
      'Post-festival airport run: straight from the campsite to Brussels or Charleroi Airport for your flight home',
    ],
  };

  const meeting: SeoSection = {
    h2: 'Meeting your driver after the festival',
    paragraphs: [
      'Before drop-off, your driver agrees a precise return meeting point with you: a named car park, a road junction outside the police cordon or a nearby fuel station, plus the pickup time. Phone or WhatsApp works at the site, and the driver waits for late-running headliners at no extra charge within the agreed window.',
    ],
  };

  const pricing: SeoSection = {
    h2: `Fixed prices for ${f.name} transfers`,
    paragraphs: [
      `Festival transfers are quoted as a fixed amount per minivan for up to 8 passengers, confirmed in writing. For reference, the standard Brussels city to Brussels Airport rate is ${F.brusselsToBRU[0].price}€ to ${F.brusselsToBRU[2].price}€ and Brussels to Charleroi ${F.brusselsToCRL[0].price}€ to ${F.brusselsToCRL[7].price}€ per vehicle; festival runs from the same origins are priced on the same basis with no night or event surcharge. ${ui.perVehicle}`,
    ],
  };

  const specificFaqs = [
    { question: `How far in advance should I book a ${f.name} transfer?`, answer: 'Festival weekends sell out first. Book 4 to 8 weeks ahead for arrival-day and last-night rides; last-minute requests are still answered on WhatsApp, subject to availability.' },
    { question: `Is there a private shuttle from Brussels Airport to ${f.name}?`, answer: `Yes. Helicro collects you in the arrivals hall at Brussels Airport with a name sign and drives directly to ${f.venue.en}, about ${f.fromBRU.km} km and ${f.fromBRU.minMin} to ${f.fromBRU.maxMin} minutes outside festival traffic, with room for 8 passengers and their camping gear.` },
    { question: 'What if the last act finishes late?', answer: 'Your driver stays on call and adjusts the pickup within the agreed window at no extra charge. Because the price is fixed per vehicle, there is no surge or waiting meter running.' },
    { question: 'Can you take tents, backpacks and a trolley?', answer: 'The Ford Transit Custom carries 8 passengers and 8 large bags; with 6 passengers there is space for tents, camping chairs and a trolley. Tell us the group size and gear when you book.' },
  ];

  const siblings = Object.values(FESTIVALS)
    .filter((x) => x.key !== key)
    .map((x) => ({ href: `/en/festival/${x.key}`, label: `${x.name} private transfer` }));

  return {
    lang,
    url: page.url,
    type: page.type,
    title: page.title,
    description: page.description,
    h1: page.h1,
    lead,
    intro,
    sections: [logistics, packages, pricing, meeting, howItWorksSection(lang), includedSection(lang)],
    faqs: [...specificFaqs, ...pickFaqs(lang, ['cancel', 'pay', 'night'])],
    breadcrumbs: [
      { name: ui.home, url: '/' },
      { name: 'Event transfers', url: '/services/event-transfers' },
      { name: page.h1, url: page.url },
    ],
    related: [
      {
        title: 'Other festivals and events',
        links: [
          { href: '/services/event-transfers/tomorrowland', label: 'Tomorrowland private transfers' },
          { href: '/services/event-transfers/formula-1-spa-francorchamps', label: 'Spa-Francorchamps F1 transfers' },
          ...siblings,
        ],
      },
      {
        title: ui.services,
        links: [
          { href: '/services/event-transfers', label: 'All event transfers' },
          { href: '/en/airport-transfer/brussels-zaventem', label: 'Brussels Airport transfers' },
          { href: '/en/airport-transfer/brussels-charleroi', label: 'Charleroi Airport transfers' },
          { href: '/en/blog/tomorrowland-2026-vip-group-transport', label: 'Festival transport guide on the blog' },
        ],
      },
    ],
    alternates: { en: page.url },
    schema: {
      serviceName: page.h1,
      serviceType: 'Festival and event transfer',
      areaServed: [
        { type: 'City', name: f.locality },
        { type: 'City', name: 'Brussels' },
        { type: 'Country', name: 'Belgium' },
      ],
    },
    cta: { headline: `Book your ${f.name} transfer`, text: 'Send your festival dates, arrival flight or hotel, group size and gear. You receive a fixed price per vehicle within minutes.' },
    image: '/images/event-service.jpg',
  };
}
