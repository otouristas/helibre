import { DAY_TRIPS, FIXED_PRICES } from '@/config/seoFacts';
import type { SEOPage } from '@/config/seoPages';
import { UI, howItWorksSection, pickFaqs } from './shared';
import type { SeoLandingContent, SeoSection } from './types';

export function buildDayTrip(page: SEOPage, key: string): SeoLandingContent {
  const lang = 'en' as const;
  const ui = UI[lang];
  const t = DAY_TRIPS[key];
  const name = t.name.en;
  const leg = t.fromBrussels;
  const F = FIXED_PRICES;

  const lead = `A private ${name} day trip from Brussels with Helicro means an 8-seat Ford minivan and an English-speaking driver at your disposal for the whole day, from ${F.dayTourFrom}€ per vehicle. ${name} is about ${leg.km} km from Brussels, ${leg.minMin} to ${leg.maxMin} minutes each way, and you set the departure time, the stops and the pace.`;

  const intro = [
    key === 'waterloo'
      ? 'Waterloo is close enough to Brussels for a half day, which makes it the ideal add-on before an afternoon flight: Helicro can collect you at your hotel with your luggage, tour the battlefield, and drop you at Brussels Airport in time for check-in.'
      : `Coach tours to ${name} leave Brussels at a fixed hour, fill up with 50 people and give you 40 minutes in each spot. With Helicro you leave when you want, stop where you want, and your driver waits with the vehicle while you eat, shop or take photos. It is priced per minivan, so a couple, a family or a group of 8 pays one fixed rate.`,
    `Gerasimos has driven Belgian roads for more than 30 years and knows the parking, the shortcuts and the lunch spots in ${name}. He is not a licensed guide and does not enter museums with you, but he will point you to the right entrance, recommend what is worth the queue and suggest a quieter alternative when a square is packed.`,
  ];

  const highlights: SeoSection = {
    h2: `What to see in ${name}`,
    paragraphs: [`Most guests combine four or five of the following in a full day; tell us your priorities and we shape the route around them.`],
    bullets: t.highlights.en,
  };

  const itinerary: SeoSection = {
    h2: `Sample itinerary: Brussels to ${name} and back`,
    paragraphs: [t.typicalDay.en + '.', `Best for ${t.bestFor.en}. Pickup is possible from any Brussels hotel or address, from Brussels Airport on arrival, or from Antwerp, Ghent and Leuven at a small distance supplement.`],
  };

  const pricing: SeoSection = {
    h2: `Price of a private ${name} day trip`,
    paragraphs: [
      `Full-day private tours start at ${F.dayTourFrom}€ per vehicle for up to 8 passengers, including fuel, tolls, parking, the driver’s time and free child seats. Entrance tickets, boat trips and meals are not included and are paid on the spot. Half-day options and combinations (for example ${key === 'bruges' ? 'Bruges plus Ghent' : key === 'ghent' ? 'Ghent plus Bruges' : key === 'durbuy' ? 'Durbuy plus Dinant' : 'Waterloo plus Villers-la-Ville abbey'}) are quoted on request.`,
    ],
    table: {
      caption: 'Indicative planning figures for a day trip from Brussels city centre.',
      headers: ['', 'Value'],
      rows: [
        ['Distance each way', `${leg.km} km`],
        ['Driving time each way', `${leg.minMin}–${leg.maxMin} min`],
        ['Recommended time on site', key === 'waterloo' ? '3–4 hours' : '5–6 hours'],
        ['Full-day tour from', `${F.dayTourFrom}€ per minivan`],
        ['Passengers', 'up to 8'],
      ],
    },
  };

  const specificFaqs = [
    { question: `How far is ${name} from Brussels?`, answer: `About ${leg.km} km by road. With a private driver the journey takes ${leg.minMin} to ${leg.maxMin} minutes each way outside peak hours, door to door, with no station transfers.` },
    { question: `How much does a private day trip from Brussels to ${name} cost?`, answer: `From ${F.dayTourFrom}€ per vehicle for the full day, for up to 8 passengers. The price includes the driver, fuel, tolls and parking; entrance fees and meals are extra. Half days and multi-city combinations are quoted separately.` },
    { question: 'Is the driver also a guide?', answer: 'Gerasimos is a professional chauffeur, not a licensed tour guide. He shares local tips, drops you at the best entrances and waits with the vehicle. Licensed local guides can be booked on request in Bruges, Ghent and Waterloo.' },
    { question: 'Can the tour start or end at the airport?', answer: 'Yes. Many guests combine a day trip with an airport arrival or departure. We collect you and your luggage at Brussels Airport, tour the destination, and finish at your hotel or the airport.' },
  ];

  const siblings = Object.values(DAY_TRIPS)
    .filter((d) => d.key !== key)
    .map((d) => ({ href: `/en/day-trip/${d.key}`, label: `Private ${d.name.en} day trip` }));

  return {
    lang,
    url: page.url,
    type: page.type,
    title: page.title,
    description: page.description,
    h1: page.h1,
    lead,
    intro,
    sections: [highlights, itinerary, pricing, howItWorksSection(lang)],
    faqs: [...specificFaqs, ...pickFaqs(lang, ['cancel', 'seats', 'pay', 'lang'])],
    breadcrumbs: [
      { name: ui.home, url: '/' },
      { name: 'Private sightseeing', url: '/services/sightseeing' },
      { name: page.h1, url: page.url },
    ],
    related: [
      { title: 'Other day trips', links: siblings },
      {
        title: ui.services,
        links: [
          { href: '/services/sightseeing', label: 'All private sightseeing tours' },
          { href: '/en/service-area/brussels', label: 'Private driver in Brussels' },
          { href: '/en/airport-transfer/brussels-zaventem', label: 'Brussels Airport transfers' },
          { href: '/reviews', label: 'Reviews from tour guests' },
        ],
      },
    ],
    alternates: { en: page.url },
    schema: {
      serviceName: page.h1,
      serviceType: 'Private sightseeing tour',
      areaServed: [
        { type: 'City', name: name },
        { type: 'City', name: 'Brussels' },
        { type: 'Country', name: 'Belgium' },
      ],
      offers: [{ name: `Private ${name} day trip, full day, up to 8 passengers`, price: F.dayTourFrom }],
    },
    cta: { headline: 'Plan your day trip', text: 'Tell us your date, hotel, group size and what you most want to see. You receive a fixed price for the whole day within minutes, with free cancellation up to 24 hours before.' },
    image: key === 'bruges' ? '/images/shightseeing-bruges.jpg' : key === 'ghent' ? '/images/shightseeing-ghent.jpg' : key === 'durbuy' ? '/images/shightseeing-durbuy.jpg' : '/images/brussels-sightseeing.jpg',
  };
}
