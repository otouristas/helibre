import { AIRPORTS, FIXED_PRICES, PLACES } from '@/config/seoFacts';
import type { SEOPage } from '@/config/seoPages';
import { UI, comparisonSection, howItWorksSection, includedSection, pickFaqs } from './shared';
import type { SeoLandingContent, SeoSection } from './types';

/** Dutch "luchthavenvervoer {stad}" pages: from a Flemish city to both Belgian airports. */
export function buildCityAirportNl(page: SEOPage, placeKey: string): SeoLandingContent {
  const lang = 'nl' as const;
  const ui = UI[lang];
  const p = PLACES[placeKey];
  const city = p.name.nl;
  const bru = p.toBRU!;
  const crl = p.toCRL!;

  const lead = `Helicro haalt u op aan elk adres in ${city} en ${p.region.nl} en brengt u rechtstreeks naar Brussels Airport (Zaventem, ${bru.km} km, ${bru.minMin}–${bru.maxMin} min) of Brussels South Charleroi (${crl.km} km, ${crl.minMin}–${crl.maxMin} min) tegen een vaste prijs per minivan voor maximaal 8 personen. U ontvangt de prijs schriftelijk voor u boekt.`;

  const intro = [
    `Luchthavenvervoer vanuit ${city} betekent meestal een vroege trein met overstap in Brussel-Noord of een parkeerplaats op de luchthaven die duurder uitvalt dan de vlucht. Met een privé minivan van Helicro vertrekt u van thuis, laadt de chauffeur uw koffers in en stapt u uit aan de vertrekhal. Op de terugweg wacht dezelfde chauffeur u op in de aankomsthal, ook als uw vlucht vertraging heeft.`,
    `Gerasimos rijdt al meer dan 30 jaar schadevrij op de Belgische wegen en spreekt Engels, Frans en Grieks. Elke rit is een vaste prijs per voertuig: een gezin of een groep collega’s uit ${city} deelt dus één tarief in plaats van vier of vijf treintickets plus een taxi aan de luchthaven.`,
  ];

  const priceSection: SeoSection = {
    h2: `Wat kost luchthavenvervoer vanuit ${city}?`,
    paragraphs: [
      `De prijs vanuit ${city} is een vast bedrag per voertuig dat afhangt van uw exacte adres en de luchthaven; u krijgt hem binnen enkele minuten via WhatsApp. Ter referentie: vanuit Brussel-centrum betaalt u ${FIXED_PRICES.brusselsToBRU[0].price}€ tot ${FIXED_PRICES.brusselsToBRU[2].price}€ naar Zaventem en ${FIXED_PRICES.brusselsToCRL[0].price}€ tot ${FIXED_PRICES.brusselsToCRL[7].price}€ naar Charleroi, afhankelijk van het aantal passagiers. ${ui.perVehicle}`,
    ],
    table: {
      caption: `Afstand en gemiddelde rijtijd vanuit ${city} buiten de spits.`,
      headers: ['Luchthaven', ui.distance, ui.time],
      rows: [
        [AIRPORTS.BRU.name.nl, `${bru.km} km`, `${bru.minMin}–${bru.maxMin} min`],
        [AIRPORTS.CRL.name.nl, `${crl.km} km`, `${crl.minMin}–${crl.maxMin} min`],
      ],
    },
  };

  const meeting: SeoSection = {
    h2: ui.meetingPoint,
    paragraphs: [`Bij vertrek zetten we u af aan de Drop-off zone van Zaventem (P1 op aanvraag, +${FIXED_PRICES.bruP1Surcharge}€) of aan de Kiss & Ride van Charleroi. Bij aankomst geldt:`],
    bullets: [`Zaventem: ${AIRPORTS.BRU.meetingPoint.nl}`, `Charleroi: ${AIRPORTS.CRL.meetingPoint.nl}`],
  };

  const whyCity: SeoSection = {
    h2: `Waarom een privétransfer vanuit ${city} in plaats van trein of parking?`,
    paragraphs: [
      `Vanuit ${city} kost een treinticket naar Brussels Airport per persoon en komt daar de Diabolo-toeslag bovenop; naar Charleroi bestaat geen rechtstreekse trein. Wie met de auto gaat, betaalt op Zaventem al snel meer dan 100€ per week parking. Een minivan van Helicro rekent één vaste prijs voor het hele gezelschap, rijdt op het uur dat uw vlucht vereist en neemt kinderzitjes en bagage voor zijn rekening.`,
    ],
    bullets: [
      `Ophaling aan huis in ${city} en omliggende gemeenten, ook om 3u ’s nachts`,
      'Geen overstap, geen zware koffers op het perron, geen parkeerkosten',
      'Chauffeur wacht bij vertraging, gratis tot 60 minuten na de landing',
      'Retourrit samen boeken voor een vaste totaalprijs',
    ],
  };

  const specificFaqs = [
    { question: `Hoe lang duurt de rit van ${city} naar Zaventem?`, answer: `Ongeveer ${bru.km} km en ${bru.minMin} tot ${bru.maxMin} minuten buiten de spits. Op weekdagen tussen 7u en 9u30 rekent uw chauffeur een extra marge in, zodat u minstens 2 uur voor vertrek op de luchthaven bent.` },
    { question: `Rijden jullie ook van ${city} naar Charleroi Airport?`, answer: `Ja. Charleroi ligt op ${crl.km} km van ${city}, ongeveer ${crl.minMin} tot ${crl.maxMin} minuten. Omdat er geen rechtstreekse trein is, is een privé minivan vanuit ${city} de eenvoudigste optie voor Ryanair- en Wizz Air-vluchten.` },
    { question: `Wat als mijn vlucht laat landt en ik terug naar ${city} moet?`, answer: `We volgen uw vlucht live op. Het eerste uur na de landing wachten we gratis; daarna rekenen we ${FIXED_PRICES.waitingPerHour}€ per uur. ’s Nachts geldt dezelfde vaste prijs als overdag.` },
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
    sections: [priceSection, whyCity, meeting, howItWorksSection(lang), includedSection(lang), comparisonSection(lang)],
    faqs: [...specificFaqs, ...pickFaqs(lang, ['cancel', 'seats', 'pay', 'luggage', 'book'])],
    breadcrumbs: [
      { name: ui.home, url: '/nl' },
      { name: 'Luchthavenvervoer', url: '/nl/services/airport' },
      { name: page.h1, url: page.url },
    ],
    related: [
      {
        title: ui.hubs,
        links: [
          { href: '/nl/luchthavenvervoer/zaventem', label: 'Luchthavenvervoer Zaventem' },
          { href: '/nl/luchthavenvervoer/charleroi', label: 'Luchthavenvervoer Charleroi' },
          { href: '/nl/luchthavenvervoer/gent', label: 'Luchthavenvervoer Gent' },
          { href: '/nl/luchthavenvervoer/antwerpen', label: 'Luchthavenvervoer Antwerpen' },
          { href: '/nl/luchthavenvervoer/leuven', label: 'Luchthavenvervoer Leuven' },
          { href: '/nl/luchthavenvervoer/brugge', label: 'Luchthavenvervoer Brugge' },
        ].filter((l) => l.href !== page.url),
      },
      {
        title: ui.services,
        links: [
          { href: '/nl/services/airport', label: 'Luchthavenvervoer: alle info' },
          { href: '/nl/pricing', label: 'Alle vaste prijzen' },
          { href: '/nl/services/sightseeing', label: 'Dagtochten met privéchauffeur' },
          { href: '/nl/faq', label: 'Veelgestelde vragen' },
        ],
      },
    ],
    alternates: { nl: page.url, ...(placeKey === 'ghent' ? { en: '/en/route/ghent-brussels-airport' } : placeKey === 'antwerp' ? { en: '/en/route/antwerp-brussels-airport' } : placeKey === 'leuven' ? { en: '/en/route/leuven-brussels-airport' } : placeKey === 'bruges' ? { en: '/en/route/bruges-brussels-airport' } : {}) },
    schema: {
      serviceName: page.h1,
      serviceType: 'Airport transfer',
      areaServed: [
        { type: 'City', name: p.name.en },
        { type: 'City', name: 'Zaventem' },
        { type: 'Country', name: 'Belgium' },
      ],
    },
    cta: { headline: ui.ctaHeadline, text: ui.ctaText },
    image: '/images/airport-2.jpg',
  };
}
