import type { Locale } from '@/lib/seo';

export type L = Record<Locale, string>;

export type AirportCode = 'BRU' | 'CRL' | 'LIL';

export interface AirportFact {
  code: AirportCode;
  iata: string;
  icao: string;
  name: L;
  shortName: L;
  locality: string;
  postalCode: string;
  country: 'BE' | 'FR';
  /** Where the driver waits. */
  meetingPoint: L;
  /** Path of the hub page per locale, when one exists. */
  hub: Partial<Record<Locale, string>>;
}

export const AIRPORTS: Record<AirportCode, AirportFact> = {
  BRU: {
    code: 'BRU',
    iata: 'BRU',
    icao: 'EBBR',
    name: {
      en: 'Brussels Airport (Zaventem)',
      nl: 'Brussels Airport (Zaventem)',
      fr: 'Aéroport de Bruxelles (Zaventem)',
      el: 'Αεροδρόμιο Βρυξελλών (Zaventem)',
      hr: 'Zračna luka Bruxelles (Zaventem)',
    },
    shortName: { en: 'Zaventem', nl: 'Zaventem', fr: 'Zaventem', el: 'Zaventem', hr: 'Zaventem' },
    locality: 'Zaventem',
    postalCode: '1930',
    country: 'BE',
    meetingPoint: {
      en: 'Your driver waits in the arrivals hall, in front of the café, holding a sign with your name. Drop-offs use the Drop-off Area (P1 on request, +5€).',
      nl: 'Uw chauffeur wacht in de aankomsthal, vlak voor het café, met een naambordje. Bij vertrek zetten we u af aan de Drop-off zone (P1 op aanvraag, +5€).',
      fr: 'Votre chauffeur vous attend dans le hall des arrivées, devant le café, avec une pancarte à votre nom. Au départ, dépose à la zone Drop-off (P1 sur demande, +5€).',
      el: 'Ο οδηγός σας περιμένει στην αίθουσα αφίξεων, μπροστά από το καφέ, με πινακίδα με το όνομά σας. Στην αναχώρηση σας αφήνουμε στη ζώνη Drop-off (P1 κατόπιν αιτήματος, +5€).',
      hr: 'Vozač vas čeka u dvorani za dolaske, ispred kafića, s natpisom vašeg imena. Pri odlasku iskrcaj je u Drop-off zoni (P1 na zahtjev, +5€).',
    },
    hub: {
      en: '/en/airport-transfer/brussels-zaventem',
      nl: '/nl/luchthavenvervoer/zaventem',
      fr: '/fr/navette/aeroport-bruxelles',
    },
  },
  CRL: {
    code: 'CRL',
    iata: 'CRL',
    icao: 'EBCI',
    name: {
      en: 'Brussels South Charleroi Airport',
      nl: 'Brussels South Charleroi Airport',
      fr: 'Aéroport de Bruxelles-Sud Charleroi',
      el: 'Αεροδρόμιο Brussels South Charleroi',
      hr: 'Zračna luka Brussels South Charleroi',
    },
    shortName: { en: 'Charleroi', nl: 'Charleroi', fr: 'Charleroi', el: 'Charleroi', hr: 'Charleroi' },
    locality: 'Gosselies',
    postalCode: '6041',
    country: 'BE',
    meetingPoint: {
      en: 'Your driver meets you at the official Kiss & Ride zone or inside the terminal, holding a Helicro sign. Budget-airline delays are monitored live.',
      nl: 'Uw chauffeur wacht aan de officiële Kiss & Ride zone of in de terminal met een Helicro-bordje. Vertragingen van lowcostvluchten volgen we live op.',
      fr: 'Votre chauffeur vous attend à la zone Kiss & Ride officielle ou dans le terminal, avec une pancarte Helicro. Les retards des compagnies low-cost sont suivis en direct.',
      el: 'Ο οδηγός σας σας περιμένει στη ζώνη Kiss & Ride ή μέσα στον τερματικό σταθμό με πινακίδα Helicro. Παρακολουθούμε ζωντανά τις καθυστερήσεις των low-cost πτήσεων.',
      hr: 'Vozač vas čeka na službenoj Kiss & Ride zoni ili unutar terminala s natpisom Helicro. Kašnjenja niskotarifnih letova pratimo uživo.',
    },
    hub: {
      en: '/en/airport-transfer/brussels-charleroi',
      nl: '/nl/luchthavenvervoer/charleroi',
      fr: '/fr/navette/aeroport-charleroi',
    },
  },
  LIL: {
    code: 'LIL',
    iata: 'LIL',
    icao: 'LFQQ',
    name: {
      en: 'Lille Airport (Lesquin)',
      nl: 'Luchthaven Rijsel (Lille-Lesquin)',
      fr: 'Aéroport de Lille-Lesquin',
      el: 'Αεροδρόμιο Lille (Lesquin)',
      hr: 'Zračna luka Lille (Lesquin)',
    },
    shortName: { en: 'Lille', nl: 'Rijsel', fr: 'Lille', el: 'Lille', hr: 'Lille' },
    locality: 'Lesquin',
    postalCode: '59810',
    country: 'FR',
    meetingPoint: {
      en: 'Your driver waits in the arrivals area of the single terminal with a name sign. Cross-border pickups need no extra paperwork for EU passengers.',
      nl: 'Uw chauffeur wacht in de aankomstzone van de terminal met een naambordje. Voor EU-reizigers is geen extra papierwerk nodig.',
      fr: 'Votre chauffeur vous attend dans la zone des arrivées du terminal unique avec une pancarte à votre nom.',
      el: 'Ο οδηγός σας περιμένει στις αφίξεις του τερματικού με πινακίδα ονόματος.',
      hr: 'Vozač vas čeka u zoni dolazaka terminala s natpisom vašeg imena.',
    },
    hub: { en: '/en/airport-transfer/lille' },
  },
};

export interface Leg {
  km: number;
  minMin: number;
  maxMin: number;
}

export interface PlaceFact {
  key: string;
  name: L;
  /** Used inside sentences ("from any address in ...") */
  region: L;
  toBRU?: Leg;
  toCRL?: Leg;
  toLIL?: Leg;
}

const P = (
  key: string,
  name: L,
  region: L,
  legs: { toBRU?: Leg; toCRL?: Leg; toLIL?: Leg }
): PlaceFact => ({ key, name, region, ...legs });

export const PLACES: Record<string, PlaceFact> = {
  brussels: P(
    'brussels',
    { en: 'Brussels', nl: 'Brussel', fr: 'Bruxelles', el: 'Βρυξέλλες', hr: 'Bruxelles' },
    { en: 'the Brussels-Capital Region', nl: 'het Brussels Hoofdstedelijk Gewest', fr: 'la Région de Bruxelles-Capitale', el: 'την περιοχή των Βρυξελλών', hr: 'regiji Bruxellesa' },
    { toBRU: { km: 14, minMin: 20, maxMin: 35 }, toCRL: { km: 60, minMin: 55, maxMin: 70 }, toLIL: { km: 110, minMin: 80, maxMin: 95 } }
  ),
  antwerp: P(
    'antwerp',
    { en: 'Antwerp', nl: 'Antwerpen', fr: 'Anvers', el: 'Αμβέρσα', hr: 'Antwerpen' },
    { en: 'Antwerp province', nl: 'de provincie Antwerpen', fr: 'la province d’Anvers', el: 'την επαρχία της Αμβέρσας', hr: 'pokrajini Antwerpen' },
    { toBRU: { km: 45, minMin: 40, maxMin: 55 }, toCRL: { km: 100, minMin: 75, maxMin: 90 } }
  ),
  ghent: P(
    'ghent',
    { en: 'Ghent', nl: 'Gent', fr: 'Gand', el: 'Γάνδη', hr: 'Gent' },
    { en: 'East Flanders', nl: 'Oost-Vlaanderen', fr: 'la Flandre-Orientale', el: 'την Ανατολική Φλάνδρα', hr: 'Istočnoj Flandriji' },
    { toBRU: { km: 70, minMin: 55, maxMin: 70 }, toCRL: { km: 105, minMin: 80, maxMin: 95 } }
  ),
  bruges: P(
    'bruges',
    { en: 'Bruges', nl: 'Brugge', fr: 'Bruges', el: 'Μπριζ', hr: 'Bruges' },
    { en: 'West Flanders', nl: 'West-Vlaanderen', fr: 'la Flandre-Occidentale', el: 'τη Δυτική Φλάνδρα', hr: 'Zapadnoj Flandriji' },
    { toBRU: { km: 110, minMin: 75, maxMin: 95 }, toCRL: { km: 145, minMin: 100, maxMin: 120 } }
  ),
  leuven: P(
    'leuven',
    { en: 'Leuven', nl: 'Leuven', fr: 'Louvain', el: 'Λέουβεν', hr: 'Leuven' },
    { en: 'Flemish Brabant', nl: 'Vlaams-Brabant', fr: 'le Brabant flamand', el: 'το Φλαμανδικό Βραβάντη', hr: 'Flamanskom Brabantu' },
    { toBRU: { km: 20, minMin: 20, maxMin: 30 }, toCRL: { km: 80, minMin: 65, maxMin: 80 } }
  ),
  mechelen: P(
    'mechelen',
    { en: 'Mechelen', nl: 'Mechelen', fr: 'Malines', el: 'Μέχελεν', hr: 'Mechelen' },
    { en: 'Antwerp province', nl: 'de provincie Antwerpen', fr: 'la province d’Anvers', el: 'την επαρχία της Αμβέρσας', hr: 'pokrajini Antwerpen' },
    { toBRU: { km: 20, minMin: 20, maxMin: 30 }, toCRL: { km: 85, minMin: 65, maxMin: 80 } }
  ),
  liege: P(
    'liege',
    { en: 'Liège', nl: 'Luik', fr: 'Liège', el: 'Λιέγη', hr: 'Liège' },
    { en: 'Liège province', nl: 'de provincie Luik', fr: 'la province de Liège', el: 'την επαρχία της Λιέγης', hr: 'pokrajini Liège' },
    { toBRU: { km: 95, minMin: 65, maxMin: 80 }, toCRL: { km: 100, minMin: 70, maxMin: 85 } }
  ),
  namur: P(
    'namur',
    { en: 'Namur', nl: 'Namen', fr: 'Namur', el: 'Ναμύρ', hr: 'Namur' },
    { en: 'Namur province', nl: 'de provincie Namen', fr: 'la province de Namur', el: 'την επαρχία της Ναμύρ', hr: 'pokrajini Namur' },
    { toBRU: { km: 65, minMin: 50, maxMin: 65 }, toCRL: { km: 40, minMin: 35, maxMin: 45 } }
  ),
  charleroi: P(
    'charleroi',
    { en: 'Charleroi', nl: 'Charleroi', fr: 'Charleroi', el: 'Σαρλερουά', hr: 'Charleroi' },
    { en: 'Hainaut', nl: 'Henegouwen', fr: 'le Hainaut', el: 'το Αινώ', hr: 'Hainautu' },
    { toBRU: { km: 65, minMin: 55, maxMin: 70 }, toCRL: { km: 8, minMin: 10, maxMin: 15 }, toLIL: { km: 100, minMin: 70, maxMin: 85 } }
  ),
  mons: P(
    'mons',
    { en: 'Mons', nl: 'Bergen', fr: 'Mons', el: 'Μονς', hr: 'Mons' },
    { en: 'Hainaut', nl: 'Henegouwen', fr: 'le Hainaut', el: 'το Αινώ', hr: 'Hainautu' },
    { toBRU: { km: 75, minMin: 60, maxMin: 75 }, toCRL: { km: 45, minMin: 35, maxMin: 45 }, toLIL: { km: 75, minMin: 55, maxMin: 70 } }
  ),
  hasselt: P(
    'hasselt',
    { en: 'Hasselt', nl: 'Hasselt', fr: 'Hasselt', el: 'Χάσελτ', hr: 'Hasselt' },
    { en: 'Limburg', nl: 'Limburg', fr: 'le Limbourg', el: 'το Λίμπουργκ', hr: 'Limburgu' },
    { toBRU: { km: 75, minMin: 55, maxMin: 70 }, toCRL: { km: 125, minMin: 90, maxMin: 105 } }
  ),
  ostend: P(
    'ostend',
    { en: 'Ostend', nl: 'Oostende', fr: 'Ostende', el: 'Οστάνδη', hr: 'Ostende' },
    { en: 'the Belgian coast', nl: 'de Belgische kust', fr: 'la côte belge', el: 'τις βελγικές ακτές', hr: 'belgijskoj obali' },
    { toBRU: { km: 120, minMin: 85, maxMin: 100 }, toCRL: { km: 160, minMin: 110, maxMin: 130 } }
  ),
  waterloo: P(
    'waterloo',
    { en: 'Waterloo', nl: 'Waterloo', fr: 'Waterloo', el: 'Βατερλό', hr: 'Waterloo' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 35, minMin: 30, maxMin: 45 }, toCRL: { km: 45, minMin: 40, maxMin: 50 } }
  ),
  'braine-l-alleud': P(
    'braine-l-alleud',
    { en: 'Braine-l’Alleud', nl: 'Eigenbrakel', fr: 'Braine-l’Alleud', el: 'Braine-l’Alleud', hr: 'Braine-l’Alleud' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 40, minMin: 35, maxMin: 50 }, toCRL: { km: 40, minMin: 35, maxMin: 45 } }
  ),
  wavre: P(
    'wavre',
    { en: 'Wavre', nl: 'Waver', fr: 'Wavre', el: 'Wavre', hr: 'Wavre' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 30, minMin: 30, maxMin: 40 }, toCRL: { km: 55, minMin: 45, maxMin: 55 } }
  ),
  nivelles: P(
    'nivelles',
    { en: 'Nivelles', nl: 'Nijvel', fr: 'Nivelles', el: 'Nivelles', hr: 'Nivelles' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 45, minMin: 40, maxMin: 50 }, toCRL: { km: 30, minMin: 30, maxMin: 40 } }
  ),
  zeebrugge: P(
    'zeebrugge',
    { en: 'Zeebrugge', nl: 'Zeebrugge', fr: 'Zeebrugge', el: 'Zeebrugge', hr: 'Zeebrugge' },
    { en: 'the Belgian coast', nl: 'de Belgische kust', fr: 'la côte belge', el: 'τις βελγικές ακτές', hr: 'belgijskoj obali' },
    { toBRU: { km: 115, minMin: 80, maxMin: 95 }, toCRL: { km: 150, minMin: 105, maxMin: 125 } }
  ),
  'louvain-la-neuve': P(
    'louvain-la-neuve',
    { en: 'Louvain-la-Neuve', nl: 'Louvain-la-Neuve', fr: 'Louvain-la-Neuve', el: 'Louvain-la-Neuve', hr: 'Louvain-la-Neuve' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 35, minMin: 35, maxMin: 45 }, toCRL: { km: 45, minMin: 40, maxMin: 50 } }
  ),
  tubize: P(
    'tubize',
    { en: 'Tubize', nl: 'Tubeke', fr: 'Tubize', el: 'Tubize', hr: 'Tubize' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 40, minMin: 40, maxMin: 50 }, toCRL: { km: 45, minMin: 40, maxMin: 50 } }
  ),
  rixensart: P(
    'rixensart',
    { en: 'Rixensart', nl: 'Rixensart', fr: 'Rixensart', el: 'Rixensart', hr: 'Rixensart' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 25, minMin: 25, maxMin: 40 }, toCRL: { km: 55, minMin: 45, maxMin: 55 } }
  ),
  lasne: P(
    'lasne',
    { en: 'Lasne', nl: 'Lasne', fr: 'Lasne', el: 'Lasne', hr: 'Lasne' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 30, minMin: 30, maxMin: 45 }, toCRL: { km: 50, minMin: 45, maxMin: 55 } }
  ),
  genappe: P(
    'genappe',
    { en: 'Genappe', nl: 'Genepiën', fr: 'Genappe', el: 'Genappe', hr: 'Genappe' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 45, minMin: 40, maxMin: 55 }, toCRL: { km: 30, minMin: 30, maxMin: 40 } }
  ),
  'la-hulpe': P(
    'la-hulpe',
    { en: 'La Hulpe', nl: 'Terhulpen', fr: 'La Hulpe', el: 'La Hulpe', hr: 'La Hulpe' },
    { en: 'Walloon Brabant', nl: 'Waals-Brabant', fr: 'le Brabant wallon', el: 'το Βαλλονικό Βραβάντη', hr: 'Valonskom Brabantu' },
    { toBRU: { km: 22, minMin: 25, maxMin: 35 }, toCRL: { km: 55, minMin: 45, maxMin: 60 } }
  ),
};

/** Published fixed prices (EUR, per vehicle, not per person). */
export const FIXED_PRICES = {
  brusselsToBRU: [
    { pax: '1–2', price: 35 },
    { pax: '3–4', price: 45 },
    { pax: '5–8', price: 55 },
  ],
  brusselsToCRL: [
    { pax: '1', price: 65 },
    { pax: '2', price: 75 },
    { pax: '3', price: 90 },
    { pax: '4', price: 110 },
    { pax: '5', price: 120 },
    { pax: '6', price: 130 },
    { pax: '7', price: 140 },
    { pax: '8', price: 160 },
  ],
  bruP1Surcharge: 5,
  waitingFreeMinutes: 60,
  waitingPerHour: 30,
  extraStop: 10,
  dayTourFrom: 380,
  cancellationHours: 24,
};

/** Destinations with a published fixed price (source: Helicro price list, September 2026). */
export type DestinationCountry = 'BE' | 'FR' | 'NL' | 'DE' | 'LU';

export interface DestinationFact {
  key: string;
  name: L;
  /** What the fixed price covers at the destination end, e.g. "city centre or Schiphol Airport". */
  scope: L;
  country: DestinationCountry;
  /** Road distance and typical time from Brussels (city or Brussels Airport). */
  fromBrussels: Leg;
  /** Road distance and typical time from Charleroi Airport, when a CRL price exists. */
  fromCRL?: Leg;
  /** Main motorway or route used, per language. */
  road: L;
  /** IATA code when the destination is an airport. */
  iata?: string;
}

export const DESTINATIONS: Record<string, DestinationFact> = {
  antwerp: {
    key: 'antwerp',
    name: PLACES.antwerp.name,
    scope: { en: 'any address in Antwerp city or the port area', nl: 'elk adres in Antwerpen-stad of de haven', fr: 'toute adresse à Anvers ou dans la zone portuaire', el: 'οποιαδήποτε διεύθυνση στην Αμβέρσα', hr: 'bilo koja adresa u Antwerpenu' },
    country: 'BE',
    fromBrussels: { km: 45, minMin: 40, maxMin: 55 },
    fromCRL: { km: 100, minMin: 75, maxMin: 90 },
    road: { en: 'E19 north via Mechelen', nl: 'E19 richting noorden via Mechelen', fr: 'E19 vers le nord via Malines', el: 'E19 βόρεια μέσω Μέχελεν', hr: 'E19 na sjever preko Mechelena' },
  },
  ghent: {
    key: 'ghent',
    name: PLACES.ghent.name,
    scope: { en: 'any address in Ghent, including Gent-Sint-Pieters station', nl: 'elk adres in Gent, ook station Gent-Sint-Pieters', fr: 'toute adresse à Gand, y compris la gare de Gent-Sint-Pieters', el: 'οποιαδήποτε διεύθυνση στη Γάνδη', hr: 'bilo koja adresa u Gentu' },
    country: 'BE',
    fromBrussels: { km: 60, minMin: 45, maxMin: 60 },
    fromCRL: { km: 105, minMin: 80, maxMin: 95 },
    road: { en: 'E40 west', nl: 'E40 richting westen', fr: 'E40 vers l’ouest', el: 'E40 δυτικά', hr: 'E40 na zapad' },
  },
  bruges: {
    key: 'bruges',
    name: PLACES.bruges.name,
    scope: { en: 'any address or hotel in Bruges, including Zeebrugge on request', nl: 'elk adres of hotel in Brugge, Zeebrugge op aanvraag', fr: 'toute adresse ou hôtel à Bruges, Zeebrugge sur demande', el: 'οποιαδήποτε διεύθυνση ή ξενοδοχείο στην Μπριζ', hr: 'bilo koja adresa ili hotel u Brugesu' },
    country: 'BE',
    fromBrussels: { km: 100, minMin: 70, maxMin: 85 },
    fromCRL: { km: 145, minMin: 100, maxMin: 120 },
    road: { en: 'E40 west past Ghent', nl: 'E40 richting westen voorbij Gent', fr: 'E40 vers l’ouest après Gand', el: 'E40 δυτικά μετά τη Γάνδη', hr: 'E40 na zapad pokraj Genta' },
  },
  tomorrowland: {
    key: 'tomorrowland',
    name: { en: 'Tomorrowland (Boom)', nl: 'Tomorrowland (Boom)', fr: 'Tomorrowland (Boom)', el: 'Tomorrowland (Boom)', hr: 'Tomorrowland (Boom)' },
    scope: { en: 'the official drop-off zones at De Schorre, Boom, or DreamVille', nl: 'de officiële afzetzones aan De Schorre in Boom of DreamVille', fr: 'les zones de dépose officielles de De Schorre à Boom ou DreamVille', el: 'τις επίσημες ζώνες αποβίβασης στο De Schorre, Boom', hr: 'službene zone iskrcaja u De Schorreu, Boom' },
    country: 'BE',
    fromBrussels: { km: 35, minMin: 30, maxMin: 45 },
    road: { en: 'A12 north', nl: 'A12 richting noorden', fr: 'A12 vers le nord', el: 'A12 βόρεια', hr: 'A12 na sjever' },
  },
  'lille-airport': {
    key: 'lille-airport',
    name: AIRPORTS.LIL.name,
    scope: { en: 'the terminal at Lille-Lesquin, or Lille-Europe and Lille-Flandres stations', nl: 'de terminal van Lille-Lesquin of de stations Lille-Europe en Lille-Flandres', fr: 'le terminal de Lille-Lesquin, ou les gares de Lille-Europe et Lille-Flandres', el: 'τον τερματικό σταθμό Lille-Lesquin', hr: 'terminal Lille-Lesquin' },
    country: 'FR',
    fromBrussels: { km: 110, minMin: 80, maxMin: 95 },
    road: { en: 'E19 and A27/A1 via Tournai', nl: 'E19 en A27/A1 via Doornik', fr: 'E19 puis A27/A1 via Tournai', el: 'E19 και A27/A1 μέσω Tournai', hr: 'E19 i A27/A1 preko Tournaija' },
    iata: 'LIL',
  },
  'paris-cdg': {
    key: 'paris-cdg',
    name: { en: 'Paris Charles de Gaulle Airport', nl: 'Luchthaven Parijs Charles de Gaulle', fr: 'Aéroport Paris Charles de Gaulle', el: 'Αεροδρόμιο Παρίσι Charles de Gaulle', hr: 'Zračna luka Pariz Charles de Gaulle' },
    scope: { en: 'any terminal at Roissy Charles de Gaulle (CDG)', nl: 'elke terminal van Roissy Charles de Gaulle (CDG)', fr: 'tout terminal de Roissy Charles de Gaulle (CDG)', el: 'οποιονδήποτε τερματικό στο Roissy CDG', hr: 'bilo koji terminal u Roissyju CDG' },
    country: 'FR',
    fromBrussels: { km: 300, minMin: 180, maxMin: 210 },
    road: { en: 'E19 and A1 via Valenciennes', nl: 'E19 en A1 via Valenciennes', fr: 'E19 puis A1 via Valenciennes', el: 'E19 και A1 μέσω Valenciennes', hr: 'E19 i A1 preko Valenciennesa' },
    iata: 'CDG',
  },
  'paris-orly': {
    key: 'paris-orly',
    name: { en: 'Paris Orly Airport', nl: 'Luchthaven Parijs Orly', fr: 'Aéroport Paris Orly', el: 'Αεροδρόμιο Παρίσι Orly', hr: 'Zračna luka Pariz Orly' },
    scope: { en: 'any terminal at Paris Orly (ORY)', nl: 'elke terminal van Parijs Orly (ORY)', fr: 'tout terminal de Paris Orly (ORY)', el: 'οποιονδήποτε τερματικό στο Orly', hr: 'bilo koji terminal u Orlyju' },
    country: 'FR',
    fromBrussels: { km: 320, minMin: 195, maxMin: 230 },
    road: { en: 'A1 and the Paris ring road', nl: 'A1 en de Parijse ring', fr: 'A1 puis le périphérique parisien', el: 'A1 και περιφερειακός Παρισιού', hr: 'A1 i pariška obilaznica' },
    iata: 'ORY',
  },
  eindhoven: {
    key: 'eindhoven',
    name: { en: 'Eindhoven', nl: 'Eindhoven', fr: 'Eindhoven', el: 'Eindhoven', hr: 'Eindhoven' },
    scope: { en: 'Eindhoven Airport (EIN) or any address in the city', nl: 'Eindhoven Airport (EIN) of elk adres in de stad', fr: 'l’aéroport d’Eindhoven (EIN) ou toute adresse en ville', el: 'το αεροδρόμιο Eindhoven ή τη πόλη', hr: 'zračnu luku Eindhoven ili grad' },
    country: 'NL',
    fromBrussels: { km: 125, minMin: 85, maxMin: 105 },
    road: { en: 'E19 and E34/A67 via Antwerp and Turnhout', nl: 'E19 en E34/A67 via Antwerpen en Turnhout', fr: 'E19 puis E34/A67 via Anvers et Turnhout', el: 'E19 και E34 μέσω Αμβέρσας', hr: 'E19 i E34 preko Antwerpena' },
    iata: 'EIN',
  },
  amsterdam: {
    key: 'amsterdam',
    name: { en: 'Amsterdam', nl: 'Amsterdam', fr: 'Amsterdam', el: 'Άμστερνταμ', hr: 'Amsterdam' },
    scope: { en: 'Amsterdam Schiphol Airport (AMS) or any address in the city', nl: 'Amsterdam Schiphol Airport (AMS) of elk adres in de stad', fr: 'l’aéroport d’Amsterdam Schiphol (AMS) ou toute adresse en ville', el: 'το αεροδρόμιο Schiphol ή την πόλη', hr: 'zračnu luku Schiphol ili grad' },
    country: 'NL',
    fromBrussels: { km: 205, minMin: 130, maxMin: 160 },
    road: { en: 'E19 north via Antwerp, Breda and Rotterdam', nl: 'E19 richting noorden via Antwerpen, Breda en Rotterdam', fr: 'E19 vers le nord via Anvers, Breda et Rotterdam', el: 'E19 βόρεια μέσω Αμβέρσας και Ρότερνταμ', hr: 'E19 na sjever preko Antwerpena i Rotterdama' },
    iata: 'AMS',
  },
  maastricht: {
    key: 'maastricht',
    name: { en: 'Maastricht', nl: 'Maastricht', fr: 'Maastricht', el: 'Μάαστριχτ', hr: 'Maastricht' },
    scope: { en: 'Maastricht Aachen Airport (MST) or any address in the city', nl: 'Maastricht Aachen Airport (MST) of elk adres in de stad', fr: 'l’aéroport Maastricht Aachen (MST) ou toute adresse en ville', el: 'το αεροδρόμιο Maastricht Aachen ή την πόλη', hr: 'zračnu luku Maastricht Aachen ili grad' },
    country: 'NL',
    fromBrussels: { km: 115, minMin: 75, maxMin: 95 },
    road: { en: 'E40 east via Leuven and Liège', nl: 'E40 richting oosten via Leuven en Luik', fr: 'E40 vers l’est via Louvain et Liège', el: 'E40 ανατολικά μέσω Λέουβεν και Λιέγης', hr: 'E40 na istok preko Leuvena i Liègea' },
    iata: 'MST',
  },
  dusseldorf: {
    key: 'dusseldorf',
    name: { en: 'Düsseldorf', nl: 'Düsseldorf', fr: 'Düsseldorf', el: 'Ντίσελντορφ', hr: 'Düsseldorf' },
    scope: { en: 'Düsseldorf Airport (DUS) or any address in the city', nl: 'Düsseldorf Airport (DUS) of elk adres in de stad', fr: 'l’aéroport de Düsseldorf (DUS) ou toute adresse en ville', el: 'το αεροδρόμιο Ντίσελντορφ ή την πόλη', hr: 'zračnu luku Düsseldorf ili grad' },
    country: 'DE',
    fromBrussels: { km: 220, minMin: 135, maxMin: 165 },
    road: { en: 'E40 and A44 via Liège and Aachen', nl: 'E40 en A44 via Luik en Aken', fr: 'E40 puis A44 via Liège et Aix-la-Chapelle', el: 'E40 και A44 μέσω Λιέγης και Άαχεν', hr: 'E40 i A44 preko Liègea i Aachena' },
    iata: 'DUS',
  },
  cologne: {
    key: 'cologne',
    name: { en: 'Cologne', nl: 'Keulen', fr: 'Cologne', el: 'Κολωνία', hr: 'Köln' },
    scope: { en: 'Cologne Bonn Airport (CGN) or any address in Cologne or Bonn', nl: 'Köln Bonn Airport (CGN) of elk adres in Keulen of Bonn', fr: 'l’aéroport de Cologne-Bonn (CGN) ou toute adresse à Cologne ou Bonn', el: 'το αεροδρόμιο Κολωνίας-Βόννης ή την πόλη', hr: 'zračnu luku Köln Bonn ili grad' },
    country: 'DE',
    fromBrussels: { km: 225, minMin: 140, maxMin: 170 },
    road: { en: 'E40 and A4 via Liège and Aachen', nl: 'E40 en A4 via Luik en Aken', fr: 'E40 puis A4 via Liège et Aix-la-Chapelle', el: 'E40 και A4 μέσω Λιέγης και Άαχεν', hr: 'E40 i A4 preko Liègea i Aachena' },
    iata: 'CGN',
  },
  frankfurt: {
    key: 'frankfurt',
    name: { en: 'Frankfurt', nl: 'Frankfurt', fr: 'Francfort', el: 'Φρανκφούρτη', hr: 'Frankfurt' },
    scope: { en: 'Frankfurt Airport (FRA) or any address in the city', nl: 'Frankfurt Airport (FRA) of elk adres in de stad', fr: 'l’aéroport de Francfort (FRA) ou toute adresse en ville', el: 'το αεροδρόμιο Φρανκφούρτης ή την πόλη', hr: 'zračnu luku Frankfurt ili grad' },
    country: 'DE',
    fromBrussels: { km: 400, minMin: 240, maxMin: 280 },
    road: { en: 'E40 and A3 via Cologne', nl: 'E40 en A3 via Keulen', fr: 'E40 puis A3 via Cologne', el: 'E40 και A3 μέσω Κολωνίας', hr: 'E40 i A3 preko Kölna' },
    iata: 'FRA',
  },
  luxembourg: {
    key: 'luxembourg',
    name: { en: 'Luxembourg', nl: 'Luxemburg', fr: 'Luxembourg', el: 'Λουξεμβούργο', hr: 'Luksemburg' },
    scope: { en: 'Luxembourg Findel Airport (LUX), the city or Kirchberg', nl: 'Luxembourg Findel Airport (LUX), de stad of Kirchberg', fr: 'l’aéroport de Luxembourg-Findel (LUX), la ville ou le Kirchberg', el: 'το αεροδρόμιο Findel ή την πόλη', hr: 'zračnu luku Findel ili grad' },
    country: 'LU',
    fromBrussels: { km: 220, minMin: 135, maxMin: 165 },
    road: { en: 'E411 south via Namur and Arlon', nl: 'E411 richting zuiden via Namen en Aarlen', fr: 'E411 vers le sud via Namur et Arlon', el: 'E411 νότια μέσω Ναμύρ και Arlon', hr: 'E411 na jug preko Namura i Arlona' },
    iata: 'LUX',
  },
};

export interface PriceTier {
  pax: string;
  price: number;
}

export interface PricedRoute {
  /** Stable key, e.g. 'brussels-amsterdam' or 'crl-antwerp'. */
  key: string;
  from: 'brussels' | 'crl';
  to: string; // DESTINATIONS key
  tiers: PriceTier[];
}

const T2 = (a: number, b: number): PriceTier[] => [
  { pax: '1–3', price: a },
  { pax: '4–8', price: b },
];

/** Fixed prices per vehicle, VAT included, from Brussels (city or Brussels Airport) and from Charleroi Airport. */
export const PRICED_ROUTES: PricedRoute[] = [
  { key: 'brussels-antwerp', from: 'brussels', to: 'antwerp', tiers: T2(75, 85) },
  { key: 'brussels-ghent', from: 'brussels', to: 'ghent', tiers: T2(100, 120) },
  { key: 'brussels-bruges', from: 'brussels', to: 'bruges', tiers: T2(130, 150) },
  { key: 'brussels-tomorrowland', from: 'brussels', to: 'tomorrowland', tiers: T2(75, 100) },
  { key: 'crl-antwerp', from: 'crl', to: 'antwerp', tiers: T2(150, 180) },
  { key: 'crl-ghent', from: 'crl', to: 'ghent', tiers: T2(150, 180) },
  { key: 'crl-bruges', from: 'crl', to: 'bruges', tiers: T2(180, 210) },
  { key: 'brussels-lille-airport', from: 'brussels', to: 'lille-airport', tiers: T2(150, 170) },
  { key: 'brussels-paris-cdg', from: 'brussels', to: 'paris-cdg', tiers: T2(380, 420) },
  { key: 'brussels-paris-orly', from: 'brussels', to: 'paris-orly', tiers: T2(460, 500) },
  { key: 'brussels-eindhoven', from: 'brussels', to: 'eindhoven', tiers: T2(190, 210) },
  { key: 'brussels-amsterdam', from: 'brussels', to: 'amsterdam', tiers: T2(250, 290) },
  { key: 'brussels-maastricht', from: 'brussels', to: 'maastricht', tiers: T2(150, 170) },
  { key: 'brussels-dusseldorf', from: 'brussels', to: 'dusseldorf', tiers: T2(250, 280) },
  { key: 'brussels-cologne', from: 'brussels', to: 'cologne', tiers: T2(250, 280) },
  { key: 'brussels-frankfurt', from: 'brussels', to: 'frankfurt', tiers: T2(380, 420) },
  { key: 'brussels-luxembourg', from: 'brussels', to: 'luxembourg', tiers: T2(260, 300) },
];

export function pricedRoute(from: 'brussels' | 'crl', to: string): PricedRoute | undefined {
  return PRICED_ROUTES.find((r) => r.from === from && r.to === to);
}

/** Shared (seat-in-van) shuttle between Brussels and Charleroi Airport, per passenger. */
export const SHARED_SHUTTLE = {
  perPassengerDay: 25,
  perPassengerNight: 30,
  maxPassengers: 7,
};

/** Spa-Francorchamps race weekends: full-day chauffeur and 8-seat minivan, return trips included. */
export const SPA_F1 = {
  perDay: 580,
  typicalDays: 3,
};

export interface DayTripFact {
  key: string;
  name: L;
  fromBrussels: Leg;
  highlights: Record<Locale, string[]>;
  bestFor: L;
  typicalDay: L;
}

export const DAY_TRIPS: Record<string, DayTripFact> = {
  bruges: {
    key: 'bruges',
    name: PLACES.bruges.name,
    fromBrussels: { km: 100, minMin: 70, maxMin: 85 },
    highlights: {
      en: ['Markt and the 83-metre Belfry', 'Burg square and the Basilica of the Holy Blood', 'Canal boat trip from the Rozenhoedkaai', 'Minnewater (Lake of Love) and the Beguinage', 'Chocolate and lace shops around Katelijnestraat'],
      nl: ['De Markt en het 83 meter hoge Belfort', 'De Burg en de Heilig-Bloedbasiliek', 'Boottocht op de reien vanaf de Rozenhoedkaai', 'Het Minnewater en het Begijnhof', 'Chocolade- en kantwinkels rond de Katelijnestraat'],
      fr: ['La Grand-Place et le Beffroi de 83 mètres', 'Le Burg et la Basilique du Saint-Sang', 'Balade en bateau sur les canaux depuis le Rozenhoedkaai', 'Le Minnewater (lac d’Amour) et le Béguinage', 'Chocolatiers et dentelle autour de la Katelijnestraat'],
      el: ['Η πλατεία Markt και το Καμπαναριό 83 μέτρων', 'Η πλατεία Burg και η Βασιλική του Αγίου Αίματος', 'Βόλτα με βάρκα στα κανάλια από το Rozenhoedkaai', 'Το Minnewater (Λίμνη της Αγάπης) και το Μπεγκινάζ', 'Σοκολατερί και δαντέλες γύρω από την Katelijnestraat'],
      hr: ['Trg Markt i 83 metra visoki zvonik Belfry', 'Trg Burg i Bazilika Svete Krvi', 'Vožnja brodom kanalima od Rozenhoedkaaija', 'Minnewater (Jezero ljubavi) i beginaža', 'Čokolaterije i čipka oko Katelijnestraata'],
    },
    bestFor: { en: 'first-time visitors, couples and photographers', nl: 'eerste bezoekers, koppels en fotografen', fr: 'les premières visites, les couples et les photographes', el: 'πρώτη επίσκεψη, ζευγάρια και φωτογράφους', hr: 'prve posjete, parove i fotografe' },
    typicalDay: { en: '9:00 pickup, 10:30 arrival, canal boat and Markt before lunch, Beguinage and chocolate shops after, back in Brussels by 18:00', nl: 'Ophaling om 9:00, aankomst 10:30, boottocht en Markt voor de lunch, Begijnhof en chocolade erna, terug in Brussel rond 18:00', fr: 'Départ 9h00, arrivée 10h30, bateau et Grand-Place avant le déjeuner, Béguinage et chocolat ensuite, retour à Bruxelles vers 18h00', el: 'Παραλαβή 9:00, άφιξη 10:30, βάρκα και Markt πριν το γεύμα, Μπεγκινάζ και σοκολάτα μετά, επιστροφή στις Βρυξέλλες έως 18:00', hr: 'Polazak 9:00, dolazak 10:30, brod i Markt prije ručka, beginaža i čokolada poslije, povratak u Bruxelles do 18:00' },
  },
  ghent: {
    key: 'ghent',
    name: PLACES.ghent.name,
    fromBrussels: { km: 60, minMin: 45, maxMin: 60 },
    highlights: {
      en: ['Gravensteen, the 12th-century Castle of the Counts', 'St Bavo’s Cathedral and the Ghent Altarpiece', 'Graslei and Korenlei guild houses on the Leie', 'Werregarenstraat street-art alley', 'Patershol old quarter for lunch'],
      nl: ['Het Gravensteen uit de 12de eeuw', 'De Sint-Baafskathedraal en het Lam Gods', 'De gildehuizen op de Graslei en Korenlei', 'Het graffitistraatje Werregarenstraat', 'Het Patershol voor de lunch'],
      fr: ['Le Gravensteen, château des Comtes du XIIe siècle', 'La cathédrale Saint-Bavon et l’Agneau mystique', 'Les maisons de corporations du Graslei et du Korenlei', 'La ruelle street-art Werregarenstraat', 'Le vieux quartier du Patershol pour déjeuner'],
      el: ['Το κάστρο Gravensteen του 12ου αιώνα', 'Ο καθεδρικός του Αγίου Βάβωνα και ο Μυστικός Αμνός', 'Τα σπίτια των συντεχνιών στο Graslei και Korenlei', 'Το σοκάκι street-art Werregarenstraat', 'Η παλιά συνοικία Patershol για γεύμα'],
      hr: ['Gravensteen, dvorac grofova iz 12. stoljeća', 'Katedrala sv. Bava i Gentski oltar', 'Cehovske kuće na Grasleiju i Korenleiju', 'Ulica uličnе umjetnosti Werregarenstraat', 'Stara četvrt Patershol za ručak'],
    },
    bestFor: { en: 'art lovers, foodies and travellers who prefer fewer crowds than Bruges', nl: 'kunstliefhebbers, foodies en wie het rustiger wil dan Brugge', fr: 'les amateurs d’art, les gourmands et ceux qui veulent moins de foule qu’à Bruges', el: 'φίλους της τέχνης, γευσιγνώστες και όσους θέλουν λιγότερο κόσμο από την Μπριζ', hr: 'ljubitelje umjetnosti, gurmane i one koji žele manje gužve nego u Brugesu' },
    typicalDay: { en: '9:00 pickup, castle and cathedral in the morning, lunch in Patershol, Graslei and a short boat trip in the afternoon, back by 17:30', nl: 'Ophaling 9:00, kasteel en kathedraal in de voormiddag, lunch in het Patershol, Graslei en boottocht in de namiddag, terug rond 17:30', fr: 'Départ 9h00, château et cathédrale le matin, déjeuner au Patershol, Graslei et bateau l’après-midi, retour vers 17h30', el: 'Παραλαβή 9:00, κάστρο και καθεδρικός το πρωί, γεύμα στο Patershol, Graslei και βάρκα το απόγευμα, επιστροφή έως 17:30', hr: 'Polazak 9:00, dvorac i katedrala ujutro, ručak u Patersholu, Graslei i kratka vožnja brodom popodne, povratak do 17:30' },
  },
  durbuy: {
    key: 'durbuy',
    name: { en: 'Durbuy', nl: 'Durbuy', fr: 'Durbuy', el: 'Durbuy', hr: 'Durbuy' },
    fromBrussels: { km: 115, minMin: 85, maxMin: 100 },
    highlights: {
      en: ['Cobbled lanes of the “smallest town in the world”', 'Topiary park on the banks of the Ourthe', 'Durbuy castle viewpoint and the Anticline rock', 'Local brewery and jam shop tastings', 'Optional stop in La Roche-en-Ardenne or Hotton caves'],
      nl: ['De kasseistraatjes van het “kleinste stadje ter wereld”', 'Het Topiarypark aan de Ourthe', 'Uitzicht op het kasteel van Durbuy en de Anticlinaal', 'Proeverij bij de lokale brouwerij en confituurwinkel', 'Optionele stop in La Roche-en-Ardenne of de grotten van Hotton'],
      fr: ['Les ruelles pavées de la “plus petite ville du monde”', 'Le parc des Topiaires au bord de l’Ourthe', 'Le point de vue sur le château et l’Anticlinal', 'Dégustation à la brasserie et à la confiturerie locales', 'Arrêt optionnel à La Roche-en-Ardenne ou aux grottes de Hotton'],
      el: ['Τα λιθόστρωτα δρομάκια της «μικρότερης πόλης του κόσμου»', 'Το πάρκο Topiary στις όχθες του Ourthe', 'Θέα στο κάστρο του Durbuy και τον βράχο Anticline', 'Γευσιγνωσία σε τοπική ζυθοποιία και μαρμελάδες', 'Προαιρετική στάση στο La Roche-en-Ardenne ή στα σπήλαια Hotton'],
      hr: ['Kaldrmisane uličice „najmanjeg grada na svijetu“', 'Park topijara na obali rijeke Ourthe', 'Vidikovac na dvorac Durbuy i stijenu Anticline', 'Kušanje u lokalnoj pivovari i trgovini džemova', 'Opcionalno stajanje u La Roche-en-Ardenneu ili špiljama Hotton'],
    },
    bestFor: { en: 'families, nature lovers and anyone wanting the Ardennes without renting a car', nl: 'gezinnen, natuurliefhebbers en wie de Ardennen wil zien zonder huurwagen', fr: 'les familles, les amoureux de la nature et ceux qui veulent voir les Ardennes sans louer de voiture', el: 'οικογένειες, φυσιολάτρες και όσους θέλουν τις Αρδέννες χωρίς ενοικίαση αυτοκινήτου', hr: 'obitelji, ljubitelje prirode i sve koji žele Ardene bez najma automobila' },
    typicalDay: { en: '8:30 pickup, scenic Ardennes route, old town and Topiary park before lunch, river walk and tastings after, back in Brussels by 18:30', nl: 'Ophaling 8:30, mooie route door de Ardennen, oude stad en Topiarypark voor de lunch, wandeling en proeverij erna, terug rond 18:30', fr: 'Départ 8h30, route panoramique des Ardennes, vieille ville et Topiaires avant le déjeuner, balade et dégustations ensuite, retour vers 18h30', el: 'Παραλαβή 8:30, γραφική διαδρομή στις Αρδέννες, παλιά πόλη και Topiary πριν το γεύμα, βόλτα στο ποτάμι και γευσιγνωσία μετά, επιστροφή έως 18:30', hr: 'Polazak 8:30, slikovita ruta kroz Ardene, stari grad i park topijara prije ručka, šetnja uz rijeku i kušanje poslije, povratak do 18:30' },
  },
  waterloo: {
    key: 'waterloo',
    name: PLACES.waterloo.name,
    fromBrussels: { km: 20, minMin: 25, maxMin: 35 },
    highlights: {
      en: ['Lion’s Mound and the 1815 Memorial museum', 'Panorama of the Battle and the Hougoumont farm', 'Wellington Museum in Waterloo centre', 'Napoleon’s last headquarters at Le Caillou', 'Combine with Villers-la-Ville abbey or a Brabant lunch'],
      nl: ['De Leeuw van Waterloo en het Memorial 1815', 'Het Panorama van de slag en de hoeve van Hougoumont', 'Het Wellington Museum in het centrum', 'Le Caillou, het laatste hoofdkwartier van Napoleon', 'Te combineren met de abdij van Villers-la-Ville'],
      fr: ['La Butte du Lion et le Mémorial 1815', 'Le Panorama de la bataille et la ferme d’Hougoumont', 'Le Musée Wellington au centre de Waterloo', 'Le Caillou, dernier QG de Napoléon', 'À combiner avec l’abbaye de Villers-la-Ville'],
      el: ['Ο Λόφος του Λιονταριού και το Μουσείο Memorial 1815', 'Το Πανόραμα της μάχης και η φάρμα Hougoumont', 'Το Μουσείο Wellington στο κέντρο του Βατερλό', 'Το Le Caillou, το τελευταίο αρχηγείο του Ναπολέοντα', 'Συνδυασμός με το αβαείο Villers-la-Ville'],
      hr: ['Lavlji humak i muzej Memorial 1815', 'Panorama bitke i farma Hougoumont', 'Wellingtonov muzej u centru Waterlooa', 'Le Caillou, Napoleonov posljednji stožer', 'Kombinirajte s opatijom Villers-la-Ville'],
    },
    bestFor: { en: 'history enthusiasts and half-day trips before an afternoon flight', nl: 'geschiedenisliefhebbers en halve dagtrips voor een namiddagvlucht', fr: 'les passionnés d’histoire et les demi-journées avant un vol l’après-midi', el: 'φίλους της ιστορίας και ημιήμερες εκδρομές πριν από απογευματινή πτήση', hr: 'ljubitelje povijesti i poludnevne izlete prije popodnevnog leta' },
    typicalDay: { en: '9:30 pickup, Memorial and Lion’s Mound, Hougoumont, lunch in Waterloo, Wellington Museum, back in Brussels by 15:30 or straight to the airport', nl: 'Ophaling 9:30, Memorial en Leeuw, Hougoumont, lunch in Waterloo, Wellington Museum, terug rond 15:30 of rechtstreeks naar de luchthaven', fr: 'Départ 9h30, Mémorial et Butte du Lion, Hougoumont, déjeuner à Waterloo, Musée Wellington, retour vers 15h30 ou directement à l’aéroport', el: 'Παραλαβή 9:30, Memorial και Λόφος του Λιονταριού, Hougoumont, γεύμα στο Βατερλό, Μουσείο Wellington, επιστροφή έως 15:30 ή απευθείας στο αεροδρόμιο', hr: 'Polazak 9:30, Memorial i Lavlji humak, Hougoumont, ručak u Waterloou, Wellingtonov muzej, povratak do 15:30 ili izravno u zračnu luku' },
  },
};

export interface FestivalFact {
  key: string;
  name: string;
  venue: L;
  locality: string;
  month: L;
  fromBrussels: Leg;
  fromBRU: Leg;
  fromCRL?: Leg;
  otherOrigin?: { name: L; leg: Leg };
  note: L;
}

export const FESTIVALS: Record<string, FestivalFact> = {
  'rock-werchter': {
    key: 'rock-werchter',
    name: 'Rock Werchter',
    venue: { en: 'Festivalpark Werchter (Rotselaar)', nl: 'Festivalpark Werchter (Rotselaar)', fr: 'Festivalpark Werchter (Rotselaar)', el: 'Festivalpark Werchter (Rotselaar)', hr: 'Festivalpark Werchter (Rotselaar)' },
    locality: 'Werchter',
    month: { en: 'early July', nl: 'begin juli', fr: 'début juillet', el: 'αρχές Ιουλίου', hr: 'početak srpnja' },
    fromBrussels: { km: 35, minMin: 35, maxMin: 50 },
    fromBRU: { km: 25, minMin: 25, maxMin: 40 },
    fromCRL: { km: 95, minMin: 75, maxMin: 90 },
    otherOrigin: { name: PLACES.leuven.name, leg: { km: 10, minMin: 15, maxMin: 25 } },
    note: { en: 'Four days, roughly 90,000 visitors a day; the festival bus queues at Leuven station are longest after the headliners.', nl: 'Vier dagen, ongeveer 90.000 bezoekers per dag; de wachtrijen voor de festivalbus aan Leuven Station zijn het langst na de headliners.', fr: 'Quatre jours, environ 90 000 visiteurs par jour ; les files pour les navettes à la gare de Louvain sont les plus longues après les têtes d’affiche.', el: 'Τέσσερις ημέρες, περίπου 90.000 επισκέπτες την ημέρα· οι ουρές για τα λεωφορεία στον σταθμό της Λέουβεν είναι μεγαλύτερες μετά τους headliners.', hr: 'Četiri dana, oko 90.000 posjetitelja dnevno; redovi za festivalske autobuse na kolodvoru Leuven najduži su nakon glavnih izvođača.' },
  },
  pukkelpop: {
    key: 'pukkelpop',
    name: 'Pukkelpop',
    venue: { en: 'Kiewit festival grounds, Hasselt', nl: 'Festivalterrein Kiewit, Hasselt', fr: 'Site de Kiewit, Hasselt', el: 'Χώρος Kiewit, Χάσελτ', hr: 'Festivalsko područje Kiewit, Hasselt' },
    locality: 'Hasselt',
    month: { en: 'mid-August', nl: 'half augustus', fr: 'mi-août', el: 'μέσα Αυγούστου', hr: 'sredina kolovoza' },
    fromBrussels: { km: 85, minMin: 60, maxMin: 80 },
    fromBRU: { km: 70, minMin: 55, maxMin: 70 },
    fromCRL: { km: 135, minMin: 95, maxMin: 115 },
    otherOrigin: { name: PLACES.hasselt.name, leg: { km: 5, minMin: 10, maxMin: 20 } },
    note: { en: 'Three days in Kiewit with camping; late-night returns to Brussels hotels are the most requested ride.', nl: 'Drie dagen in Kiewit met camping; late retourritten naar Brusselse hotels zijn de meest gevraagde rit.', fr: 'Trois jours à Kiewit avec camping ; les retours nocturnes vers les hôtels bruxellois sont la demande la plus fréquente.', el: 'Τρεις ημέρες στο Kiewit με κάμπινγκ· οι νυχτερινές επιστροφές σε ξενοδοχεία των Βρυξελλών είναι η πιο συχνή ζήτηση.', hr: 'Tri dana u Kiewitu s kampiranjem; noćni povratak u briselske hotele najtraženija je vožnja.' },
  },
  'couleur-cafe': {
    key: 'couleur-cafe',
    name: 'Couleur Café',
    venue: { en: 'Parc d’Osseghem, Atomium / Heysel, Brussels', nl: 'Ossegempark, Atomium / Heizel, Brussel', fr: 'Parc d’Osseghem, Atomium / Heysel, Bruxelles', el: 'Πάρκο Osseghem, Atomium / Heysel, Βρυξέλλες', hr: 'Park Osseghem, Atomium / Heysel, Bruxelles' },
    locality: 'Brussels',
    month: { en: 'late June', nl: 'eind juni', fr: 'fin juin', el: 'τέλη Ιουνίου', hr: 'kraj lipnja' },
    fromBrussels: { km: 8, minMin: 15, maxMin: 30 },
    fromBRU: { km: 15, minMin: 20, maxMin: 30 },
    fromCRL: { km: 60, minMin: 55, maxMin: 70 },
    note: { en: 'Three evenings of world music beside the Atomium; metro line 6 is packed at closing time.', nl: 'Drie avonden wereldmuziek naast het Atomium; metrolijn 6 zit overvol bij sluitingstijd.', fr: 'Trois soirées de musiques du monde à côté de l’Atomium ; la ligne 6 du métro est bondée à la fermeture.', el: 'Τρία βράδια world music δίπλα στο Atomium· η γραμμή 6 του μετρό είναι ασφυκτικά γεμάτη στο κλείσιμο.', hr: 'Tri večeri world glazbe uz Atomium; linija metroa 6 prepuna je nakon zatvaranja.' },
  },
  'jazz-weekend': {
    key: 'jazz-weekend',
    name: 'Brussels Jazz Weekend',
    venue: { en: 'Grand-Place, Sablon, Sainte-Catherine and 100+ venues across Brussels', nl: 'Grote Markt, Zavel, Sint-Katelijne en 100+ locaties in Brussel', fr: 'Grand-Place, Sablon, Sainte-Catherine et plus de 100 lieux à Bruxelles', el: 'Grand-Place, Sablon, Sainte-Catherine και 100+ χώροι στις Βρυξέλλες', hr: 'Grand-Place, Sablon, Sainte-Catherine i više od 100 lokacija u Bruxellesu' },
    locality: 'Brussels',
    month: { en: 'late May', nl: 'eind mei', fr: 'fin mai', el: 'τέλη Μαΐου', hr: 'kraj svibnja' },
    fromBrussels: { km: 5, minMin: 10, maxMin: 25 },
    fromBRU: { km: 14, minMin: 20, maxMin: 35 },
    fromCRL: { km: 60, minMin: 55, maxMin: 70 },
    note: { en: 'Free open-air stages across the city; a driver on standby lets you hop between squares without hunting for parking.', nl: 'Gratis openluchtpodia in de hele stad; een chauffeur op standby brengt u van plein naar plein zonder parkeerzorgen.', fr: 'Scènes gratuites en plein air dans toute la ville ; un chauffeur en attente vous emmène de place en place sans chercher de parking.', el: 'Δωρεάν υπαίθριες σκηνές σε όλη την πόλη· ο οδηγός σε αναμονή σας πηγαίνει από πλατεία σε πλατεία χωρίς άγχος για πάρκινγκ.', hr: 'Besplatne pozornice na otvorenom diljem grada; vozač u pripravnosti vozi vas od trga do trga bez traženja parkinga.' },
  },
};
