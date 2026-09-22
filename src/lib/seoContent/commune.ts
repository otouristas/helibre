import { AIRPORTS, FIXED_PRICES, PLACES } from '@/config/seoFacts';
import type { SEOPage } from '@/config/seoPages';
import { UI, comparisonSection, howItWorksSection, includedSection, pickFaqs } from './shared';
import type { SeoLandingContent, SeoSection } from './types';

const COMMUNE_NOTES: Record<string, { quartiers: string; extra: string }> = {
  'braine-l-alleud': {
    quartiers: 'le centre, Ophain, Lillois, la gare de Braine-l’Alleud, le Paradis, Mont-Saint-Pont et les quartiers proches du Lion de Waterloo',
    extra: 'Helicro est basé à Braine-l’Alleud (1420) : c’est ici que Gerasimos habite et que les véhicules stationnent, ce qui garantit une prise en charge locale rapide, même pour une demande de dernière minute.',
  },
  waterloo: {
    quartiers: 'le centre de Waterloo, la chaussée de Bruxelles, Joli-Bois, le Chenois, Mont-Saint-Jean et le site du Lion',
    extra: 'Waterloo compte une importante communauté internationale (St. John’s, Scandinavian School) qui utilise Helicro pour les navettes aéroport en anglais et les trajets scolaires ou professionnels récurrents.',
  },
  wavre: {
    quartiers: 'le centre de Wavre, Limal, Bierges, Louvain-la-Neuve, Ottignies, Rixensart et le parc d’affaires Walibi',
    extra: 'Depuis Wavre et Louvain-la-Neuve, l’E411 rejoint le ring de Bruxelles en 20 minutes ; Zaventem est donc souvent plus rapide en minivan qu’en train avec correspondance.',
  },
  nivelles: {
    quartiers: 'le centre de Nivelles, la gare, le zoning de Nivelles-Sud, Baulers, Thines et Monstreux',
    extra: 'Nivelles se trouve à mi-chemin entre les deux aéroports : Charleroi en 30 minutes par l’A54, Zaventem en 45 minutes par l’E19 et le ring.',
  },
  'louvain-la-neuve': {
    quartiers: 'le centre piétonnier de Louvain-la-Neuve, la gare et l’Esplanade, le Biéreau, Lauzelle, les Bruyères, Hocaille, le parc scientifique et l’ensemble d’Ottignies (centre, Limelette, Céroux-Mousty)',
    extra: 'Louvain-la-Neuve accueille des milliers d’étudiants et de chercheurs internationaux de l’UCLouvain : Helicro assure les navettes vers Zaventem et Charleroi en début et fin de semestre, les trajets vers les gares TGV et les déplacements de délégations du parc scientifique, avec un chauffeur qui parle français, anglais et grec.',
  },
  tubize: {
    quartiers: 'le centre de Tubize, la gare, Clabecq, Oisquercq, Saintes et la zone des Forges',
    extra: 'Depuis Tubize, la N6 puis le ring ouest de Bruxelles rejoignent Zaventem en 40 à 50 minutes, et l’E19 mène à Charleroi en un temps comparable : la commune est idéalement placée pour choisir l’aéroport le moins cher à chaque voyage.',
  },
  rixensart: {
    quartiers: 'le centre de Rixensart, Genval et le lac de Genval, Rosières, Bourgeois et les abords de la gare de Rixensart',
    extra: 'Rixensart et Genval comptent de nombreux cadres et familles internationales qui voyagent souvent : Helicro y assure des navettes aéroport récurrentes avec facture mensuelle, ainsi que les trajets vers Bruxelles-Midi pour l’Eurostar.',
  },
  lasne: {
    quartiers: 'Lasne centre, Ohain, Plancenoit, Couture-Saint-Germain, Maransart et Chapelle-Saint-Lambert',
    extra: 'Lasne est à 10 minutes de la base de Helicro à Braine-l’Alleud : les prises en charge très matinales, avant 5h, y sont assurées sans difficulté, et Zaventem se rejoint en une demi-heure par la N5 et le ring.',
  },
  genappe: {
    quartiers: 'le centre de Genappe, Baisy-Thy, Bousval, Glabais, Houtain-le-Val, Loupoigne, Vieux-Genappe et Ways',
    extra: 'Genappe est plus proche de Charleroi que de Zaventem : l’aéroport de Charleroi est à 30 minutes par la N5 et l’A54, ce qui rend la navette privée particulièrement compétitive pour les vols Ryanair du matin.',
  },
  'la-hulpe': {
    quartiers: 'le centre de La Hulpe, la gare, le domaine Solvay et le château de La Hulpe, Gaillemarde et les quartiers proches de la forêt de Soignes',
    extra: 'La Hulpe est l’une des communes les plus proches de Zaventem dans le Brabant wallon : 25 minutes hors heures de pointe par la N275 et le ring, ce qui permet des départs plus tardifs et un retour rapide depuis l’aéroport.',
  },
};

/** Distance and time from the commune to central Brussels / Gare du Midi (row in the price table). */
const TO_BRUSSELS: Record<string, [string, string]> = {
  'braine-l-alleud': ['25 km', '30–45 min'],
  waterloo: ['20 km', '25–40 min'],
  wavre: ['30 km', '30–45 min'],
  nivelles: ['35 km', '35–50 min'],
  'louvain-la-neuve': ['30 km', '30–45 min'],
  tubize: ['25 km', '30–45 min'],
  rixensart: ['25 km', '30–40 min'],
  lasne: ['25 km', '30–40 min'],
  genappe: ['35 km', '35–50 min'],
  'la-hulpe': ['20 km', '25–35 min'],
};

const COMMUNE_LINKS: { href: string; label: string }[] = [
  { href: '/fr/local/braine-l-alleud', label: 'Taxi Braine-l’Alleud' },
  { href: '/fr/local/waterloo', label: 'Taxi Waterloo' },
  { href: '/fr/local/wavre', label: 'Taxi Wavre' },
  { href: '/fr/local/nivelles', label: 'Taxi Nivelles' },
  { href: '/fr/local/louvain-la-neuve', label: 'Taxi Louvain-la-Neuve et Ottignies' },
  { href: '/fr/local/tubize', label: 'Taxi Tubize' },
  { href: '/fr/local/rixensart', label: 'Taxi Rixensart et Genval' },
  { href: '/fr/local/lasne', label: 'Taxi Lasne' },
  { href: '/fr/local/genappe', label: 'Taxi Genappe' },
  { href: '/fr/local/la-hulpe', label: 'Taxi La Hulpe' },
];

export function buildCommune(page: SEOPage, placeKey: string): SeoLandingContent {
  const lang = 'fr' as const;
  const ui = UI[lang];
  const p = PLACES[placeKey];
  const commune = p.name.fr;
  const notes = COMMUNE_NOTES[placeKey];
  const bru = p.toBRU!;
  const crl = p.toCRL!;
  const F = FIXED_PRICES;

  const lead = `Helicro est un service de taxi privé et de navette aéroport à ${commune}, disponible 24 h/24 à prix fixe. Depuis ${commune}, l’aéroport de Charleroi est à ${crl.km} km (${crl.minMin}–${crl.maxMin} min) et Brussels Airport à ${bru.km} km (${bru.minMin}–${bru.maxMin} min), en minivan Ford pour 8 passagers avec chauffeur francophone.`;

  const intro = [
    `Trouver un taxi fiable à ${commune} à 4h du matin pour un vol Ryanair, ou un chauffeur qui attend vraiment à l’aéroport quand le vol a deux heures de retard, n’est pas évident dans le Brabant wallon. Helicro répond aux deux besoins avec un prix fixé à l’avance par véhicule, un suivi de vol en direct et un chauffeur, Gerasimos, qui totalise plus de 30 ans de conduite sans accident en Belgique.`,
    notes.extra,
  ];

  const zones: SeoSection = {
    h2: `Prise en charge à ${commune} et alentours`,
    paragraphs: [`Nous venons vous chercher dans tous les quartiers : ${notes.quartiers}. Plusieurs adresses de prise en charge dans la même commune sont possibles pour ${F.extraStop}€ par arrêt supplémentaire.`],
  };

  const prices: SeoSection = {
    h2: `Prix fixes depuis ${commune}`,
    paragraphs: [
      `Le trajet depuis ${commune} vers Charleroi, Zaventem ou Lille est facturé comme un montant fixe par minivan, confirmé par écrit en quelques minutes sur WhatsApp. À titre de repère, les prix publiés depuis Bruxelles-ville sont de ${F.brusselsToBRU[0].price}€ à ${F.brusselsToBRU[2].price}€ vers Zaventem et de ${F.brusselsToCRL[0].price}€ à ${F.brusselsToCRL[7].price}€ vers Charleroi selon le nombre de passagers. ${ui.perVehicle}`,
    ],
    table: {
      caption: `Distances et temps de trajet habituels depuis ${commune} hors heures de pointe.`,
      headers: ['Destination', ui.distance, ui.time],
      rows: [
        [AIRPORTS.CRL.name.fr, `${crl.km} km`, `${crl.minMin}–${crl.maxMin} min`],
        [AIRPORTS.BRU.name.fr, `${bru.km} km`, `${bru.minMin}–${bru.maxMin} min`],
        ['Bruxelles centre / Gare du Midi', ...(TO_BRUSSELS[placeKey] ?? ['25 km', '30–45 min'])],
      ],
    },
  };

  const services: SeoSection = {
    h2: `Taxi, navette et chauffeur privé à ${commune} : nos services`,
    bullets: [
      'Navette aéroport vers Charleroi, Zaventem et Lille, aller simple ou aller-retour, à prix fixe',
      'Taxi local et trajets vers Bruxelles, Waterloo, Louvain-la-Neuve, Nivelles et les gares TGV/Eurostar',
      'Excursions privées vers Bruges, Gand, Durbuy et Dinant avec chauffeur',
      'Transport d’affaires et mise à disposition horaire pour réunions et délégations',
      'Transfert mariages, fêtes privées et festivals (Tomorrowland, Werchter, Spa-Francorchamps)',
      'Livraison express de documents et colis dans toute la Belgique',
    ],
  };

  const meeting: SeoSection = {
    h2: ui.meetingPoint,
    bullets: [`Charleroi : ${AIRPORTS.CRL.meetingPoint.fr}`, `Zaventem : ${AIRPORTS.BRU.meetingPoint.fr}`],
  };

  const specificFaqs = [
    { question: `Combien coûte un taxi de ${commune} à l’aéroport de Charleroi ?`, answer: `Le prix est fixe par véhicule et dépend de votre adresse exacte à ${commune} ; il vous est confirmé par écrit avant la réservation. Il couvre jusqu’à 8 passagers, les bagages, les sièges enfants et l’attente gratuite de ${F.waitingFreeMinutes} minutes à l’arrivée, sans supplément de nuit.` },
    { question: `Combien de temps pour aller de ${commune} à Zaventem ?`, answer: `Environ ${bru.km} km et ${bru.minMin} à ${bru.maxMin} minutes hors heures de pointe via le ring de Bruxelles. En semaine entre 7h et 9h30, votre chauffeur prévoit une marge supplémentaire pour vous déposer au moins 2 heures avant le vol.` },
    { question: `Proposez-vous un taxi à ${commune} la nuit et le week-end ?`, answer: 'Oui, 24 h/24 et 7 j/7, au même prix fixe. Réservez la veille pour les départs avant 6h afin de garantir la disponibilité du véhicule.' },
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
    sections: [services, prices, zones, meeting, howItWorksSection(lang), includedSection(lang), comparisonSection(lang)],
    faqs: [...specificFaqs, ...pickFaqs(lang, ['cancel', 'seats', 'pay', 'luggage', 'lang'])],
    breadcrumbs: [
      { name: ui.home, url: '/fr' },
      { name: 'Navettes aéroport', url: '/fr/services/airport' },
      { name: page.h1, url: page.url },
    ],
    related: [
      {
        title: ui.cities,
        links: COMMUNE_LINKS.filter((l) => l.href !== page.url),
      },
      {
        title: ui.hubs,
        links: [
          { href: '/fr/navette/aeroport-charleroi', label: 'Navette aéroport Charleroi' },
          { href: '/fr/navette/aeroport-bruxelles', label: 'Navette aéroport Bruxelles (Zaventem)' },
          { href: '/fr/navette/charleroi-bruxelles', label: 'Navette Bruxelles – Charleroi' },
        ],
      },
      {
        title: ui.services,
        links: [
          { href: '/fr/pricing', label: 'Tous les prix fixes' },
          { href: '/fr/services/sightseeing', label: 'Excursions privées' },
          { href: '/fr/services/corporate', label: 'Chauffeur d’entreprise' },
          { href: '/fr/faq', label: 'Questions fréquentes' },
        ],
      },
    ],
    alternates: { fr: page.url, ...(placeKey === 'waterloo' ? { en: '/en/route/waterloo-brussels-airport' } : {}) },
    schema: {
      serviceName: page.h1,
      serviceType: 'Taxi and airport shuttle',
      areaServed: [
        { type: 'City', name: p.name.en },
        { type: 'Country', name: 'Belgium' },
      ],
    },
    cta: { headline: ui.ctaHeadline, text: ui.ctaText },
    image: '/images/car-2.jpg',
  };
}
