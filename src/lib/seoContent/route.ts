import { AIRPORTS, FIXED_PRICES, PLACES, pricedRoute, type AirportCode, type Leg } from '@/config/seoFacts';
import type { SEOPage } from '@/config/seoPages';
import { UI, brusselsPriceTable, comparisonSection, howItWorksSection, includedSection, legText, pickFaqs } from './shared';
import type { SeoLandingContent, SeoSection } from './types';

export interface RouteSpec {
  origin: string; // PLACES key
  airport: AirportCode;
  /** Origin city page (EN service area) if any */
  cityPage?: string;
}

/** Maps route URLs to structured facts. */
export const ROUTES: Record<string, RouteSpec> = {
  '/en/route/brussels-zaventem': { origin: 'brussels', airport: 'BRU', cityPage: '/en/service-area/brussels' },
  '/en/route/brussels-charleroi': { origin: 'brussels', airport: 'CRL', cityPage: '/en/service-area/brussels' },
  '/en/route/antwerp-brussels-airport': { origin: 'antwerp', airport: 'BRU', cityPage: '/en/service-area/antwerp' },
  '/en/route/ghent-brussels-airport': { origin: 'ghent', airport: 'BRU', cityPage: '/en/service-area/ghent' },
  '/en/route/bruges-brussels-airport': { origin: 'bruges', airport: 'BRU', cityPage: '/en/service-area/bruges' },
  '/en/route/leuven-brussels-airport': { origin: 'leuven', airport: 'BRU', cityPage: '/en/service-area/leuven' },
  '/en/route/liege-brussels-airport': { origin: 'liege', airport: 'BRU', cityPage: '/en/service-area/liege' },
  '/en/route/namur-charleroi-airport': { origin: 'namur', airport: 'CRL', cityPage: '/en/service-area/namur' },
  '/en/route/mons-charleroi-airport': { origin: 'mons', airport: 'CRL', cityPage: '/en/service-area/mons' },
  '/en/route/hasselt-brussels-airport': { origin: 'hasselt', airport: 'BRU', cityPage: '/en/service-area/hasselt' },
  '/en/route/waterloo-brussels-airport': { origin: 'waterloo', airport: 'BRU' },
  '/en/route/charleroi-brussels-airport': { origin: 'charleroi', airport: 'BRU', cityPage: '/en/service-area/charleroi' },
  '/fr/navette/charleroi-bruxelles': { origin: 'brussels', airport: 'CRL' },
};

function legOf(spec: RouteSpec): Leg {
  const p = PLACES[spec.origin];
  const leg = spec.airport === 'BRU' ? p.toBRU : spec.airport === 'CRL' ? p.toCRL : p.toLIL;
  if (!leg) throw new Error(`Missing leg for ${spec.origin} -> ${spec.airport}`);
  return leg;
}

export function buildRoute(page: SEOPage, lang: 'en' | 'fr', spec: RouteSpec): SeoLandingContent {
  const ui = UI[lang];
  const p = PLACES[spec.origin];
  const a = AIRPORTS[spec.airport];
  const leg = legOf(spec);
  const origin = p.name[lang];
  const airportName = a.name[lang];
  const isBrussels = spec.origin === 'brussels';
  const published = isBrussels && (spec.airport === 'BRU' || spec.airport === 'CRL');
  /** City pairs with a published two-tier price (Brussels / Brussels Airport to Antwerp, Ghent, Bruges). */
  const tiered = !isBrussels && spec.airport === 'BRU' ? pricedRoute('brussels', spec.origin) : undefined;
  const bruP = FIXED_PRICES.brusselsToBRU;
  const crlP = FIXED_PRICES.brusselsToCRL;

  let lead: string;
  let intro: string[];
  let priceSection: SeoSection;
  let specificFaqs: { question: string; answer: string }[];
  let originSection: SeoSection;

  if (lang === 'en') {
    lead = published
      ? spec.airport === 'BRU'
        ? `A private Helicro transfer from any Brussels address to ${airportName} costs a fixed ${bruP[0].price}€ for 1–2 passengers, ${bruP[1].price}€ for 3–4 and ${bruP[2].price}€ for 5–8, per vehicle. The ${leg.km} km drive takes ${leg.minMin} to ${leg.maxMin} minutes outside peak hours, door to Drop-off Area, with luggage and child seats included.`
        : `A private Helicro transfer from any Brussels address to ${airportName} costs a fixed ${crlP[0].price}€ for 1 passenger, ${crlP[1].price}€ for 2, ${crlP[3].price}€ for 4 and ${crlP[7].price}€ for 8, per vehicle, door to door. The ${leg.km} km drive takes ${leg.minMin} to ${leg.maxMin} minutes outside peak hours.`
      : tiered
        ? `A private Helicro transfer from any address in ${origin} to ${airportName} costs a fixed ${tiered.tiers[0].price}€ for 1 to 3 passengers and ${tiered.tiers[1].price}€ for 4 to 8 passengers, per vehicle, in either direction. The route is about ${leg.km} km and takes ${leg.minMin} to ${leg.maxMin} minutes outside peak hours, with pickup at your door, luggage and child seats included and drop-off in front of departures.`
        : `Helicro drives you from any address in ${origin} to ${airportName} in a private Ford minivan for one fixed price per vehicle, agreed in writing before you travel. The route is about ${leg.km} km and takes ${leg.minMin} to ${leg.maxMin} minutes outside peak hours, with pickup at your door and drop-off in front of departures.`;
    intro = [
      isBrussels
        ? spec.airport === 'BRU'
          ? 'The Brussels to Zaventem run is the most booked transfer in Belgium and the one where a metered taxi, a rideshare surge or a missed Airport Express train hurts the most. Helicro quotes one figure per vehicle, so a couple, a family of four or a group of eight all know exactly what the ride costs before the driver rings the bell.'
          : 'Charleroi is where Belgium’s cheapest flights leave from, and the 60 km from the capital is the awkward part: the Flibco bus only serves Brussels-Midi, the train needs a bus connection at Charleroi-Central, and a metered taxi can exceed 100€. A pre-booked private minivan collects you at home and drops you at the terminal for a price fixed per vehicle.'
        : `Travellers from ${origin} and ${p.region.en} usually reach ${a.shortName.en} by train with at least one change, or by car with a week of airport parking that often costs more than the flight. A pre-booked Helicro minivan leaves from your door at the time your flight requires, carries the whole group and its luggage in one vehicle, and is waiting in arrivals on the way back.`,
      'Every transfer is driven by Gerasimos or a licensed Helicro driver with more than 30 years of accident-free driving in Belgium, in a Ford Transit Custom or Tourneo Custom with room for 8 passengers and 8 large suitcases. The same fixed price applies at 4:00 in the morning and after midnight.',
    ];
    priceSection = published
      ? {
          h2: `Fixed price from Brussels to ${a.shortName.en}`,
          paragraphs: [`${ui.perVehicle} The price is the same at night and at weekends.`],
          table: brusselsPriceTable(lang, spec.airport as 'BRU' | 'CRL'),
        }
      : tiered
        ? {
            h2: `Fixed price from ${origin} to ${a.shortName.en}`,
            paragraphs: [`${ui.perVehicle} The same price applies from ${airportName} to ${origin} and at night. Book outbound and return together for one written total.`],
            table: {
              caption: `${origin} (any address) to ${airportName}, per vehicle, luggage and child seats included.`,
              headers: [ui.passengers, ui.price],
              rows: tiered.tiers.map((t) => [t.pax, `${t.price}€`]),
            },
          }
        : {
            h2: `Fixed price from ${origin} to ${a.shortName.en}`,
            paragraphs: [
              `The transfer from ${origin} to ${airportName} is quoted as one fixed amount per minivan for up to 8 passengers, based on your exact pickup address. Send the address and your flight time on WhatsApp and you receive the price in writing within minutes. ${ui.perVehicle}`,
              `For reference, the published fixed price from Brussels city is ${bruP[0].price}€ to ${bruP[2].price}€ to Zaventem and ${crlP[0].price}€ to ${crlP[7].price}€ to Charleroi depending on group size. Return trips can be booked together for one total.`,
            ],
          };
    originSection = {
      h2: `Pickup anywhere in ${origin}`,
      paragraphs: [
        isBrussels
          ? 'We collect from every commune of the Brussels-Capital Region: the city centre and Grand-Place hotels, the European Quarter, Ixelles, Uccle, Woluwe, Schaerbeek, Anderlecht, Etterbeek and the NATO and embassy districts, as well as Brussels-Midi and Brussels-Central stations for Eurostar and Thalys connections.'
          : `Pickups cover the whole of ${origin} and ${p.region.en}: city-centre hotels, railway stations, residential addresses, business parks and universities. Multiple pickup addresses in the same city are possible for 10€ per extra stop.`,
      ],
    };
    specificFaqs = [
      { question: `How long does it take from ${origin} to ${airportName}?`, answer: `The drive is ${legText(lang, leg.km, leg.minMin, leg.maxMin)}. Your driver checks live traffic and roadworks before departure and proposes a pickup time that gets you to the airport at least 2 hours before a European flight.` },
      { question: `How much is a taxi from ${origin} to ${a.shortName.en} airport?`, answer: published ? (spec.airport === 'BRU' ? `Helicro charges a fixed ${bruP[0].price}€ (1–2 passengers), ${bruP[1].price}€ (3–4) or ${bruP[2].price}€ (5–8) per vehicle from any Brussels address to Brussels Airport, luggage and child seats included. A metered taxi typically costs 45–60€ and more at night.` : `Helicro charges a fixed ${crlP[0].price}€ for one passenger rising to ${crlP[7].price}€ for eight, per vehicle, from any Brussels address to Charleroi Airport. Metered taxis for the same 60 km are usually well above 100€.`) : tiered ? `Helicro charges a fixed ${tiered.tiers[0].price}€ for 1 to 3 passengers and ${tiered.tiers[1].price}€ for 4 to 8 passengers, per vehicle, for the ${leg.km} km from any ${origin} address to ${airportName}, luggage and child seats included. Train tickets are per person; this price is shared by everyone on board.` : `Helicro quotes a single fixed price per minivan for the ${leg.km} km from ${origin}, confirmed in writing before you book. It is priced per vehicle, so it is shared by everyone on board rather than charged per person like train tickets.` },
      { question: `Where does the driver wait when I land at ${a.shortName.en}?`, answer: a.meetingPoint.en },
      { question: 'Can I book the return trip at the same time?', answer: `Yes. Book the outbound and return together and you receive one total for both legs. On the return, your driver tracks your flight and waits free of charge for ${FIXED_PRICES.waitingFreeMinutes} minutes after landing.` },
    ];
  } else {
    // French: Brussels -> Charleroi route
    lead = `Une navette privée Helicro entre toute adresse bruxelloise et l’${airportName} coûte un prix fixe de ${crlP[0].price}€ pour 1 passager, ${crlP[1].price}€ pour 2, ${crlP[3].price}€ pour 4 et ${crlP[7].price}€ pour 8, par véhicule, porte à porte. Le trajet de ${leg.km} km prend ${leg.minMin} à ${leg.maxMin} minutes hors heures de pointe, dans les deux sens.`;
    intro = [
      'Charleroi est l’aéroport des vols les moins chers de Belgique, et les 60 km depuis la capitale en sont la partie compliquée : le bus Flibco ne dessert que Bruxelles-Midi, le train impose une correspondance en bus à Charleroi-Central, et un taxi au compteur dépasse facilement 100€. Un minivan privé réservé à l’avance vous prend chez vous et vous dépose devant le terminal pour un prix fixé par véhicule.',
      'Chaque trajet est assuré par Gerasimos ou un chauffeur agréé Helicro, plus de 30 ans de conduite sans accident en Belgique, en Ford Transit Custom ou Tourneo Custom pour 8 passagers et 8 grandes valises. Le même prix fixe s’applique à 4h du matin et après minuit, au départ de Bruxelles comme au retour de Charleroi.',
    ];
    priceSection = {
      h2: 'Prix fixe navette Bruxelles – Charleroi',
      paragraphs: [`${ui.perVehicle} Le prix est identique de nuit, le week-end et dans le sens Charleroi – Bruxelles.`],
      table: brusselsPriceTable(lang, 'CRL'),
    };
    originSection = {
      h2: 'Prise en charge partout à Bruxelles',
      paragraphs: [
        'Nous venons vous chercher dans toutes les communes de la Région de Bruxelles-Capitale : le centre et les hôtels de la Grand-Place, le quartier européen, Ixelles, Uccle, Woluwe, Schaerbeek, Anderlecht, Etterbeek, ainsi que les gares de Bruxelles-Midi et Bruxelles-Central pour les correspondances Eurostar et Thalys. Depuis le Brabant wallon (Waterloo, Braine-l’Alleud, Nivelles, Wavre), le trajet est plus court encore.',
      ],
    };
    specificFaqs = [
      { question: 'Combien de temps dure la navette Bruxelles – Charleroi ?', answer: `Le trajet fait ${legText(lang, leg.km, leg.minMin, leg.maxMin)} par l’E19. En semaine entre 7h et 9h30, prévoyez jusqu’à 80 minutes ; votre chauffeur vérifie le trafic avant le départ et propose une heure de prise en charge qui vous amène à l’aéroport au moins 2 heures avant le vol.` },
      { question: 'Combien coûte un taxi de Bruxelles à l’aéroport de Charleroi ?', answer: `Helicro applique un prix fixe de ${crlP[0].price}€ pour un passager jusqu’à ${crlP[7].price}€ pour huit, par véhicule, depuis toute adresse bruxelloise. Un taxi au compteur pour les mêmes 60 km dépasse généralement 100€, et la navette Flibco coûte par personne sans vous déposer à votre adresse.` },
      { question: 'Où le chauffeur m’attend-il à l’arrivée à Charleroi ?', answer: a.meetingPoint.fr },
      { question: 'Puis-je réserver l’aller et le retour en même temps ?', answer: `Oui. Réservez les deux trajets ensemble et vous recevez un total unique. Au retour, votre chauffeur suit votre vol et vous attend gratuitement pendant ${FIXED_PRICES.waitingFreeMinutes} minutes après l’atterrissage.` },
    ];
  }

  const travel: SeoSection = {
    h2: ui.travelInfo,
    paragraphs: [
      lang === 'en'
        ? `${origin} to ${airportName}: ${legText(lang, leg.km, leg.minMin, leg.maxMin)}. ${spec.airport === 'BRU' ? 'The final approach uses the Brussels ring (R0) and the A201 airport spur; roadworks on the ring are frequent, so the driver builds in a buffer on weekday mornings.' : 'The route follows the E19 south past Nivelles and the A54 to Gosselies; the last 5 km are signposted “Aéroport” from the Charleroi ring.'}`
        : `Bruxelles – aéroport de Charleroi : ${legText(lang, leg.km, leg.minMin, leg.maxMin)}. L’itinéraire suit l’E19 vers le sud via Nivelles puis l’A54 jusqu’à Gosselies ; les 5 derniers kilomètres sont fléchés « Aéroport » depuis le ring de Charleroi.`,
    ],
  };

  const meeting: SeoSection = { h2: ui.meetingPoint, paragraphs: [a.meetingPoint[lang]] };

  const related = [];
  if (lang === 'en') {
    const hubLinks = [
      { href: a.hub.en!, label: `${airportName} transfer hub` },
      ...(spec.airport === 'BRU' && AIRPORTS.CRL.hub.en ? [{ href: AIRPORTS.CRL.hub.en, label: 'Charleroi Airport transfers' }] : []),
      ...(spec.airport === 'CRL' ? [{ href: AIRPORTS.BRU.hub.en!, label: 'Brussels Airport (Zaventem) transfers' }] : []),
    ];
    related.push({ title: ui.hubs, links: hubLinks });
    const routeLinks = Object.entries(ROUTES)
      .filter(([u, s]) => u.startsWith('/en/route/') && u !== page.url && s.airport === spec.airport)
      .slice(0, 6)
      .map(([u, s]) => ({ href: u, label: `${PLACES[s.origin].name.en} to ${AIRPORTS[s.airport].shortName.en} airport` }));
    related.push({ title: ui.routes, links: routeLinks });
    related.push({
      title: ui.services,
      links: [
        ...(spec.cityPage ? [{ href: spec.cityPage, label: `Private driver in ${origin}` }] : []),
        { href: '/pricing', label: 'All fixed prices' },
        { href: '/services/airport', label: 'Airport transfer service' },
        { href: '/en/blog', label: 'Airport guides on the blog' },
      ],
    });
  } else {
    related.push({
      title: ui.hubs,
      links: [
        { href: '/fr/navette/aeroport-charleroi', label: 'Navette aéroport Charleroi : toutes les infos' },
        { href: '/fr/navette/aeroport-bruxelles', label: 'Navette aéroport Bruxelles (Zaventem)' },
      ],
    });
    related.push({
      title: ui.cities,
      links: [
        { href: '/fr/local/braine-l-alleud', label: 'Taxi Braine-l’Alleud' },
        { href: '/fr/local/waterloo', label: 'Taxi Waterloo' },
        { href: '/fr/local/nivelles', label: 'Taxi Nivelles' },
        { href: '/fr/local/wavre', label: 'Taxi Wavre' },
      ],
    });
    related.push({
      title: ui.services,
      links: [
        { href: '/fr/pricing', label: 'Tous les prix fixes' },
        { href: '/fr/services/airport', label: 'Navette aéroport : le service' },
        { href: '/fr/faq', label: 'Questions fréquentes' },
      ],
    });
  }

  const alternates =
    page.url === '/fr/navette/charleroi-bruxelles'
      ? { fr: page.url, en: '/en/route/brussels-charleroi' }
      : page.url === '/en/route/brussels-charleroi'
        ? { en: page.url, fr: '/fr/navette/charleroi-bruxelles' }
        : spec.origin === 'ghent'
          ? { en: page.url, nl: '/nl/luchthavenvervoer/gent' }
          : spec.origin === 'antwerp'
            ? { en: page.url, nl: '/nl/luchthavenvervoer/antwerpen' }
            : spec.origin === 'leuven'
              ? { en: page.url, nl: '/nl/luchthavenvervoer/leuven' }
              : spec.origin === 'bruges'
                ? { en: page.url, nl: '/nl/luchthavenvervoer/brugge' }
                : { [lang]: page.url };

  const offers = published
    ? spec.airport === 'BRU'
      ? bruP.map((r) => ({ name: `Brussels to Brussels Airport, ${r.pax} passengers`, price: r.price }))
      : crlP.map((r) => ({ name: `Brussels to Charleroi Airport, ${r.pax} passenger(s)`, price: r.price }))
    : tiered
      ? tiered.tiers.map((t) => ({ name: `${p.name.en} to Brussels Airport, ${t.pax} passengers`, price: t.price }))
      : undefined;

  return {
    lang,
    url: page.url,
    type: page.type,
    title: page.title,
    description: page.description,
    h1: page.h1,
    lead,
    intro,
    sections: [priceSection, travel, originSection, meeting, howItWorksSection(lang), includedSection(lang), comparisonSection(lang)],
    faqs: [...specificFaqs, ...pickFaqs(lang, ['cancel', 'seats', 'pay', 'night'])],
    breadcrumbs: [
      { name: ui.home, url: lang === 'en' ? '/' : '/fr' },
      { name: lang === 'en' ? 'Airport transfers' : 'Navettes aéroport', url: lang === 'en' ? '/services/airport' : '/fr/services/airport' },
      { name: page.h1, url: page.url },
    ],
    related,
    alternates,
    schema: {
      serviceName: page.h1,
      serviceType: 'Airport transfer',
      areaServed: [
        { type: 'City', name: p.name.en },
        { type: 'City', name: a.locality },
        { type: 'Country', name: 'Belgium' },
      ],
      airport: spec.airport,
      offers,
    },
    cta: { headline: ui.ctaHeadline, text: ui.ctaText },
    image: spec.airport === 'CRL' ? '/images/airport-1.jpg' : '/images/door-to-door-transport.jpg',
  };
}
