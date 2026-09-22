import type { Locale } from '@/lib/seo';
import { AIRPORTS, FIXED_PRICES, PLACES, pricedRoute, type AirportCode, type Leg } from '@/config/seoFacts';
import type { SEOPage } from '@/config/seoPages';
import { UI, brusselsPriceTable, comparisonSection, howItWorksSection, includedSection, legText, pickFaqs } from './shared';
import type { SeoLandingContent, SeoLink, SeoSection, SeoTable } from './types';

type HubLang = 'en' | 'nl' | 'fr';

const ORIGINS: Record<AirportCode, string[]> = {
  BRU: ['brussels', 'leuven', 'mechelen', 'waterloo', 'wavre', 'antwerp', 'ghent', 'hasselt', 'namur', 'liege', 'bruges', 'ostend'],
  CRL: ['brussels', 'nivelles', 'braine-l-alleud', 'waterloo', 'namur', 'mons', 'wavre', 'leuven', 'liege', 'antwerp', 'ghent', 'bruges'],
  LIL: ['brussels', 'mons', 'charleroi'],
};

const EN_ROUTES: Record<AirportCode, SeoLink[]> = {
  BRU: [
    { href: '/en/route/brussels-zaventem', label: 'Brussels to Zaventem transfer' },
    { href: '/en/route/antwerp-brussels-airport', label: 'Antwerp to Brussels Airport' },
    { href: '/en/route/ghent-brussels-airport', label: 'Ghent to Brussels Airport' },
    { href: '/en/route/bruges-brussels-airport', label: 'Bruges to Brussels Airport' },
    { href: '/en/route/leuven-brussels-airport', label: 'Leuven to Brussels Airport' },
    { href: '/en/route/liege-brussels-airport', label: 'Liège to Brussels Airport' },
    { href: '/en/route/hasselt-brussels-airport', label: 'Hasselt to Brussels Airport' },
    { href: '/en/route/waterloo-brussels-airport', label: 'Waterloo to Brussels Airport' },
    { href: '/en/route/charleroi-brussels-airport', label: 'Charleroi to Brussels Zaventem' },
  ],
  CRL: [
    { href: '/en/route/brussels-charleroi', label: 'Brussels to Charleroi Airport' },
    { href: '/en/route/namur-charleroi-airport', label: 'Namur to Charleroi Airport' },
    { href: '/en/route/mons-charleroi-airport', label: 'Mons to Charleroi Airport' },
    { href: '/en/route/charleroi-brussels-airport', label: 'Charleroi to Brussels Zaventem' },
  ],
  LIL: [
    { href: '/en/route/brussels-charleroi', label: 'Brussels to Charleroi Airport' },
    { href: '/en/service-area/mons', label: 'Private driver in Mons' },
    { href: '/en/service-area/charleroi', label: 'Private driver in Charleroi' },
  ],
};

const NL_LINKS: SeoLink[] = [
  { href: '/nl/luchthavenvervoer/zaventem', label: 'Luchthavenvervoer Zaventem' },
  { href: '/nl/luchthavenvervoer/charleroi', label: 'Luchthavenvervoer Charleroi' },
  { href: '/nl/luchthavenvervoer/gent', label: 'Luchthavenvervoer Gent' },
  { href: '/nl/luchthavenvervoer/antwerpen', label: 'Luchthavenvervoer Antwerpen' },
  { href: '/nl/luchthavenvervoer/leuven', label: 'Luchthavenvervoer Leuven' },
  { href: '/nl/luchthavenvervoer/brugge', label: 'Luchthavenvervoer Brugge' },
];

const FR_LINKS: SeoLink[] = [
  { href: '/fr/navette/aeroport-bruxelles', label: 'Navette aéroport Bruxelles (Zaventem)' },
  { href: '/fr/navette/aeroport-charleroi', label: 'Navette aéroport Charleroi' },
  { href: '/fr/navette/charleroi-bruxelles', label: 'Navette Bruxelles – Charleroi' },
  { href: '/fr/local/braine-l-alleud', label: 'Taxi Braine-l’Alleud' },
  { href: '/fr/local/waterloo', label: 'Taxi Waterloo' },
  { href: '/fr/local/wavre', label: 'Taxi Wavre' },
  { href: '/fr/local/nivelles', label: 'Taxi Nivelles' },
];

function legFor(code: AirportCode, placeKey: string): Leg | undefined {
  const p = PLACES[placeKey];
  if (!p) return undefined;
  return code === 'BRU' ? p.toBRU : code === 'CRL' ? p.toCRL : p.toLIL;
}

function originsTable(lang: HubLang, code: AirportCode): SeoTable {
  const ui = UI[lang];
  const rows: string[][] = [];
  ORIGINS[code].forEach((k) => {
    const leg = legFor(code, k);
    if (!leg) return;
    rows.push([PLACES[k].name[lang], `${leg.km} km`, `${leg.minMin}–${leg.maxMin} min`]);
  });
  const caption: Record<HubLang, string> = {
    en: 'Typical driving distance and time to the airport outside peak hours. Fixed quotes for every origin on request.',
    nl: 'Gemiddelde afstand en rijtijd naar de luchthaven buiten de spits. Vaste prijs voor elk vertrekpunt op aanvraag.',
    fr: 'Distance et temps de trajet habituels vers l’aéroport hors heures de pointe. Prix fixe pour chaque point de départ sur demande.',
  };
  return { caption: caption[lang], headers: [lang === 'en' ? 'From' : lang === 'nl' ? 'Vanuit' : 'Depuis', ui.distance, ui.time], rows };
}

export function buildAirportHub(page: SEOPage, lang: HubLang, code: AirportCode): SeoLandingContent {
  const a = AIRPORTS[code];
  const ui = UI[lang];
  const name = a.name[lang];
  const short = a.shortName[lang];
  const fromBrussels = legFor(code, 'brussels')!;
  const priceBRU = FIXED_PRICES.brusselsToBRU;
  const priceCRL = FIXED_PRICES.brusselsToCRL;
  const priceLIL = pricedRoute('brussels', 'lille-airport')!;
  const lilTable = (l: HubLang): SeoTable => ({
    caption: l === 'en' ? 'Brussels (any address or Brussels Airport) to Lille-Lesquin airport, per vehicle, tolls included.' : l === 'nl' ? 'Brussel (elk adres of Brussels Airport) naar de luchthaven Lille-Lesquin, per voertuig, tol inbegrepen.' : 'Bruxelles (toute adresse ou Brussels Airport) vers l’aéroport de Lille-Lesquin, par véhicule, péages compris.',
    headers: [UI[l].passengers, UI[l].price],
    rows: priceLIL.tiers.map((t) => [t.pax, `${t.price}€`]),
  });

  let lead = '';
  let intro: string[] = [];
  let practical: SeoSection;
  let specificFaqs: { question: string; answer: string }[] = [];
  let priceSection: SeoSection;

  if (lang === 'en') {
    lead =
      code === 'BRU'
        ? `Helicro drives you from any address in Belgium to ${name} in a private Ford minivan for a price fixed in advance: ${priceBRU[0].price}€ for 1–2 passengers, ${priceBRU[1].price}€ for 3–4 and ${priceBRU[2].price}€ for 5–8 from Brussels city. Meet and greet in arrivals, live flight tracking and free child seats are included.`
        : code === 'CRL'
          ? `Helicro drives you between any Belgian address and ${name} (CRL) in a private Ford minivan for a fixed price: ${priceCRL[0].price}€ for 1 passenger, ${priceCRL[1].price}€ for 2, ${priceCRL[3].price}€ for 4 and ${priceCRL[7].price}€ for a full 8-seater from Brussels. Your driver tracks Ryanair and Wizz Air delays and waits inside the terminal.`
          : `Helicro provides private cross-border transfers from Brussels and the whole of Belgium to ${name}, about ${fromBrussels.km} km and ${fromBrussels.minMin} to ${fromBrussels.maxMin} minutes from Brussels, for a fixed ${priceLIL.tiers[0].price}€ for 1 to 3 passengers and ${priceLIL.tiers[1].price}€ for 4 to 8, per vehicle, tolls included. An English-speaking driver and no change of vehicle at the French border.`;
    intro =
      code === 'BRU'
        ? [
            `Brussels Airport at Zaventem is Belgium’s main hub with well over 20 million passengers a year, and the road from the city centre is only ${fromBrussels.km} km, yet a late train, a full parking lot or a metered taxi can turn it into the most stressful part of a trip. A pre-booked Helicro transfer removes that uncertainty: you know the driver, the vehicle and the price before you leave home.`,
            'Every ride is handled by Gerasimos or one of his licensed Helicro drivers, with more than 30 years of accident-free driving in Belgium. The same fixed rate applies at 4:30 in the morning for the first Ryanair departure as at midnight after a delayed long-haul arrival.',
          ]
        : code === 'CRL'
          ? [
              `Brussels South Charleroi Airport lies in Gosselies, ${fromBrussels.km} km south of Brussels, and serves mainly low-cost carriers such as Ryanair, Wizz Air and TUI fly. Public transport means a shuttle bus to Brussels-Midi or a bus-plus-train combination that stops at Charleroi-Central; with luggage and children, a door-to-door minivan is often the difference between a relaxed and a rushed morning.`,
              'Helicro covers Charleroi Airport from Brussels, Walloon Brabant (Braine-l’Alleud, Waterloo, Nivelles, Wavre), Namur, Mons and the Flemish cities. Prices from Brussels are published below; every other origin receives a fixed written quote within minutes.',
            ]
          : [
              'Lille-Lesquin is a practical alternative for travellers in Hainaut, Brussels and Walloon Brabant when a flight is cheaper or better timed from France. There is no direct public transport from Belgium to the terminal, which is why most Belgian passengers combine a train to Lille-Flandres with a taxi, or pre-book a private transfer straight to the door.',
              'Helicro drives the full route in one vehicle, Belgian plates, Belgian invoice, and waits in French arrivals on the way back. Cross-border pickups also cover Lille city, Roubaix, Tourcoing and Eurostar connections at Lille-Europe.',
            ];
    priceSection =
      code === 'LIL'
        ? {
            h2: ui.fixedPrices,
            paragraphs: [
              `From Brussels or Brussels Airport to Lille-Lesquin the fixed price is ${priceLIL.tiers[0].price}€ for 1 to 3 passengers and ${priceLIL.tiers[1].price}€ for 4 to 8, per vehicle, in either direction, tolls and luggage included. ${ui.perVehicle} From Mons, Charleroi or Tournai the price is lower and confirmed in writing within minutes.`,
            ],
            table: lilTable(lang),
          }
        : {
            h2: ui.fixedPrices,
            paragraphs: [
              code === 'BRU'
                ? `From Brussels city to ${name} the fixed price is ${priceBRU[0].price}€ for 1–2 passengers, ${priceBRU[1].price}€ for 3–4 and ${priceBRU[2].price}€ for 5–8, per vehicle, drop-off at the Drop-off Area (P1 drop-off +${FIXED_PRICES.bruP1Surcharge}€). ${ui.perVehicle}`
                : `From Brussels city to ${name} the fixed price starts at ${priceCRL[0].price}€ for 1 passenger and rises with group size up to ${priceCRL[7].price}€ for 8 passengers, per vehicle, door to door. ${ui.perVehicle}`,
            ],
            table: brusselsPriceTable(lang, code),
          };
    practical =
      code === 'BRU'
        ? {
            h2: 'Brussels Airport practical information',
            paragraphs: [
              'Brussels Airport has one terminal with piers A (Schengen) and B (non-Schengen). Departures are on level 3, arrivals on level 2, and the Drop-off Area sits directly in front of departures. Allow 2 hours before a European flight and 3 hours for long-haul; security queues are longest between 5:30 and 8:00.',
            ],
            bullets: [
              'Drop-off Area: standard, included in the fixed price, 10 minutes free stop',
              `P1 parking drop-off: closer to the doors, +${FIXED_PRICES.bruP1Surcharge}€, useful with wheelchairs or many bags`,
              `Arrivals: driver waits in the hall in front of the café with a name sign, ${FIXED_PRICES.waitingFreeMinutes} minutes free after landing`,
              'Airport codes: IATA BRU, ICAO EBBR; postcode 1930 Zaventem',
            ],
          }
        : code === 'CRL'
          ? {
              h2: 'Charleroi Airport practical information',
              paragraphs: [
                'Charleroi has a single terminal used by Ryanair, Wizz Air, TUI fly, Pegasus and Air Arabia. Check-in and bag drop close 40 minutes before departure for most low-cost carriers, and security is busiest from 5:00 to 7:30 and again in the early afternoon. Plan to be at the airport 2 hours ahead.',
              ],
              bullets: [
                'Drop-off: Kiss & Ride zone in front of the terminal, included in the fixed price',
                `Arrivals: driver waits at Kiss & Ride or inside the hall with a Helicro sign, ${FIXED_PRICES.waitingFreeMinutes} minutes free after landing`,
                'Low-cost delays: your flight is tracked live, the pickup time moves with it at no charge within the free hour',
                'Airport codes: IATA CRL, ICAO EBCI; postcode 6041 Gosselies',
              ],
            }
          : {
              h2: 'Lille Airport practical information',
              paragraphs: [
                'Lille-Lesquin has one terminal about 10 km south-east of Lille city and is served by easyJet, Volotea, Transavia, Ryanair and Air France. Belgian passengers should keep their ID card or passport at hand; there is no systematic border control on the E42/A27 but spot checks do occur.',
              ],
              bullets: [
                'Drop-off: directly in front of the terminal, included in the fixed price',
                `Arrivals: driver waits in the arrivals area with a name sign, ${FIXED_PRICES.waitingFreeMinutes} minutes free after landing`,
                'Airport codes: IATA LIL, ICAO LFQQ; 59810 Lesquin, France',
                'Also served: Lille-Europe (Eurostar, TGV) and Lille-Flandres stations',
              ],
            };
    specificFaqs =
      code === 'BRU'
        ? [
            { question: 'How much is a taxi from Brussels to Zaventem airport?', answer: `A Helicro private transfer from any Brussels address to Brussels Airport costs ${priceBRU[0].price}€ for 1–2 passengers, ${priceBRU[1].price}€ for 3–4 and ${priceBRU[2].price}€ for 5–8, per vehicle, including luggage and child seats. A metered street taxi typically costs 45 to 60€ for one to four people and more at night.` },
            { question: 'How long does the transfer from Brussels to Brussels Airport take?', answer: `The distance is about ${fromBrussels.km} km. Outside peak hours it takes ${fromBrussels.minMin} to ${fromBrussels.maxMin} minutes; between 7:00 and 9:30 or 16:00 and 19:00 on weekdays plan for up to 50 minutes on the E40 and the Brussels ring.` },
            { question: 'Where does the driver wait at Brussels Airport?', answer: a.meetingPoint.en },
            { question: 'Can you pick me up for a 6:00 flight?', answer: 'Yes. Helicro operates 24 hours a day at the same fixed price. For a 6:00 departure from Brussels city we usually collect you between 3:45 and 4:15 depending on your address.' },
          ]
        : code === 'CRL'
          ? [
              { question: 'How much is a taxi from Brussels to Charleroi Airport?', answer: `Helicro charges a fixed ${priceCRL[0].price}€ for 1 passenger, ${priceCRL[1].price}€ for 2, ${priceCRL[2].price}€ for 3, ${priceCRL[3].price}€ for 4 and up to ${priceCRL[7].price}€ for 8 passengers from any Brussels address, door to door. That is per vehicle, so a family of four pays ${priceCRL[3].price}€ in total rather than four bus tickets plus a taxi at each end.` },
              { question: 'How long is the drive from Brussels to Charleroi Airport?', answer: `About ${fromBrussels.km} km and ${fromBrussels.minMin} to ${fromBrussels.maxMin} minutes outside peak hours via the E19. In the weekday morning rush allow up to 80 minutes. The Flibco shuttle bus takes around 60 minutes to Brussels-Midi plus your onward journey.` },
              { question: 'What happens if my Ryanair flight lands late at night?', answer: `Your driver tracks the flight live and adjusts the pickup time automatically. The first ${FIXED_PRICES.waitingFreeMinutes} minutes after landing are free. There is no night surcharge, so a 23:55 arrival costs the same as a midday one.` },
              { question: 'Where do I meet the driver at Charleroi Airport?', answer: a.meetingPoint.en },
            ]
          : [
              { question: 'How far is Lille Airport from Brussels?', answer: `About ${fromBrussels.km} km via the E19 and A27, or ${fromBrussels.minMin} to ${fromBrussels.maxMin} minutes of driving outside peak hours. From Mons it is roughly 75 km and from Charleroi 100 km.` },
              { question: 'Do I need anything special for a cross-border transfer?', answer: 'EU citizens need only an ID card or passport. There is no extra charge for crossing into France; the fixed price covers tolls, fuel and the driver’s return.' },
              { question: 'Can you also collect me at Lille-Europe station?', answer: 'Yes. Eurostar and TGV arrivals at Lille-Europe or Lille-Flandres are collected the same way as airport arrivals, with a name sign at the platform exit.' },
            ];
  } else if (lang === 'nl') {
    lead =
      code === 'BRU'
        ? `Helicro brengt u van elk adres in België naar ${name} in een privé Ford minivan tegen een vooraf vastgelegde prijs: ${priceBRU[0].price}€ voor 1–2 passagiers, ${priceBRU[1].price}€ voor 3–4 en ${priceBRU[2].price}€ voor 5–8 vanuit Brussel. Ontvangst in de aankomsthal, live vluchtopvolging en gratis kinderzitjes zijn inbegrepen.`
        : code === 'CRL'
          ? `Helicro rijdt tussen elk Belgisch adres en ${name} (CRL) in een privé Ford minivan tegen een vaste prijs: ${priceCRL[0].price}€ voor 1 passagier, ${priceCRL[1].price}€ voor 2, ${priceCRL[3].price}€ voor 4 en ${priceCRL[7].price}€ voor een volle 8-zitter vanuit Brussel. Uw chauffeur volgt Ryanair- en Wizz Air-vertragingen op en wacht in de terminal.`
          : `Helicro verzorgt grensoverschrijdend privévervoer van Brussel en heel België naar ${name}, ongeveer ${fromBrussels.km} km en ${fromBrussels.minMin} tot ${fromBrussels.maxMin} minuten van Brussel, voor een vaste ${priceLIL.tiers[0].price}€ voor 1 tot 3 passagiers en ${priceLIL.tiers[1].price}€ voor 4 tot 8, per voertuig, tol inbegrepen. Geen overstap aan de Franse grens.`;
    intro =
      code === 'BRU'
        ? [
            `Brussels Airport in Zaventem is de grootste luchthaven van België met ruim 20 miljoen passagiers per jaar. Vanuit het centrum is het slechts ${fromBrussels.km} km, maar een gemiste trein, een volle parking of een taximeter maken het vaak het meest stresserende deel van de reis. Met een vooraf geboekte Helicro-rit kent u chauffeur, voertuig en prijs voor u vertrekt.`,
            'Elke rit wordt uitgevoerd door Gerasimos of een van zijn gelicentieerde Helicro-chauffeurs, met meer dan 30 jaar schadevrije ervaring op Belgische wegen. Hetzelfde vaste tarief geldt om 4u30 voor de eerste Ryanair-vlucht als om middernacht na een vertraagde intercontinentale aankomst.',
          ]
        : code === 'CRL'
          ? [
              `Brussels South Charleroi Airport ligt in Gosselies, ${fromBrussels.km} km ten zuiden van Brussel, en is de thuisbasis van lowcostmaatschappijen zoals Ryanair, Wizz Air en TUI fly. Met het openbaar vervoer neemt u de shuttlebus naar Brussel-Zuid of een combinatie bus-trein via Charleroi-Centraal; met koffers en kinderen maakt een minivan van deur tot deur het verschil tussen een rustige en een gehaaste ochtend.`,
              'Helicro bedient Charleroi Airport vanuit Brussel, Waals-Brabant (Eigenbrakel, Waterloo, Nijvel, Waver), Namen, Bergen en de Vlaamse steden. De prijzen vanuit Brussel staan hieronder; voor elk ander vertrekpunt krijgt u binnen enkele minuten een vaste schriftelijke prijs.',
            ]
          : [
              'Lille-Lesquin is een praktisch alternatief voor reizigers uit Henegouwen, Brussel en Waals-Brabant wanneer een vlucht vanuit Frankrijk goedkoper of beter getimed is. Er is geen rechtstreeks openbaar vervoer vanuit België naar de terminal; daarom boeken de meeste Belgische passagiers een privétransfer tot aan de deur.',
              'Helicro rijdt de hele route in één voertuig, met Belgische nummerplaat en Belgische factuur, en wacht bij de terugreis in de Franse aankomsthal. We halen ook op in Rijsel-stad, Roubaix, Tourcoing en aan het Eurostar-station Lille-Europe.',
            ];
    priceSection =
      code === 'LIL'
        ? {
            h2: ui.fixedPrices,
            paragraphs: [`Van Brussel of Brussels Airport naar Lille-Lesquin betaalt u een vaste ${priceLIL.tiers[0].price}€ voor 1 tot 3 passagiers en ${priceLIL.tiers[1].price}€ voor 4 tot 8, per voertuig, in beide richtingen, tol en bagage inbegrepen. ${ui.perVehicle} Vanuit Bergen, Charleroi of Doornik ligt de prijs lager en krijgt u hem binnen enkele minuten op papier.`],
            table: lilTable(lang),
          }
        : {
            h2: ui.fixedPrices,
            paragraphs: [
              code === 'BRU'
                ? `Van Brussel naar ${name} betaalt u ${priceBRU[0].price}€ voor 1–2 passagiers, ${priceBRU[1].price}€ voor 3–4 en ${priceBRU[2].price}€ voor 5–8, per voertuig, afzetten aan de Drop-off zone (P1 +${FIXED_PRICES.bruP1Surcharge}€). ${ui.perVehicle}`
                : `Van Brussel naar ${name} start de vaste prijs bij ${priceCRL[0].price}€ voor 1 passagier en loopt op met de groepsgrootte tot ${priceCRL[7].price}€ voor 8 passagiers, per voertuig, van deur tot deur. ${ui.perVehicle}`,
            ],
            table: brusselsPriceTable(lang, code),
          };
    practical =
      code === 'BRU'
        ? {
            h2: 'Praktische info Brussels Airport',
            paragraphs: ['Brussels Airport heeft één terminal met pier A (Schengen) en pier B (niet-Schengen). Vertrek is op niveau 3, aankomst op niveau 2 en de Drop-off zone ligt recht voor de vertrekhal. Reken op 2 uur voor een Europese vlucht en 3 uur voor een intercontinentale; de veiligheidscontrole is het drukst tussen 5u30 en 8u.'],
            bullets: [
              'Drop-off zone: standaard, inbegrepen in de vaste prijs, 10 minuten gratis stoppen',
              `P1-parking drop-off: dichter bij de deuren, +${FIXED_PRICES.bruP1Surcharge}€, handig met rolstoel of veel bagage`,
              `Aankomst: chauffeur wacht in de hal voor het café met naambordje, ${FIXED_PRICES.waitingFreeMinutes} minuten gratis na de landing`,
              'Luchthavencodes: IATA BRU, ICAO EBBR; 1930 Zaventem',
            ],
          }
        : code === 'CRL'
          ? {
              h2: 'Praktische info Charleroi Airport',
              paragraphs: ['Charleroi heeft één terminal, gebruikt door Ryanair, Wizz Air, TUI fly, Pegasus en Air Arabia. Check-in en bagageafgifte sluiten bij de meeste lowcostmaatschappijen 40 minuten voor vertrek; de veiligheidscontrole is het drukst tussen 5u en 7u30 en opnieuw in de vroege namiddag. Wees 2 uur op voorhand aanwezig.'],
              bullets: [
                'Afzetten: Kiss & Ride zone voor de terminal, inbegrepen in de vaste prijs',
                `Aankomst: chauffeur wacht aan Kiss & Ride of in de hal met een Helicro-bordje, ${FIXED_PRICES.waitingFreeMinutes} minuten gratis na de landing`,
                'Lowcostvertragingen: uw vlucht wordt live opgevolgd, de ophaaltijd schuift kosteloos mee binnen het gratis uur',
                'Luchthavencodes: IATA CRL, ICAO EBCI; 6041 Gosselies',
              ],
            }
          : {
              h2: 'Praktische info luchthaven Rijsel',
              paragraphs: ['Lille-Lesquin heeft één terminal, zo’n 10 km ten zuidoosten van Rijsel, met vluchten van easyJet, Volotea, Transavia, Ryanair en Air France. Houd uw identiteitskaart bij de hand; er is geen systematische grenscontrole op de E42/A27, maar steekproeven komen voor.'],
              bullets: [
                'Afzetten: recht voor de terminal, inbegrepen in de vaste prijs',
                `Aankomst: chauffeur wacht in de aankomstzone met naambordje, ${FIXED_PRICES.waitingFreeMinutes} minuten gratis na de landing`,
                'Luchthavencodes: IATA LIL, ICAO LFQQ; 59810 Lesquin, Frankrijk',
                'Ook bediend: stations Lille-Europe (Eurostar, TGV) en Lille-Flandres',
              ],
            };
    specificFaqs =
      code === 'BRU'
        ? [
            { question: 'Wat kost een taxi van Brussel naar Zaventem?', answer: `Een Helicro-privétransfer van elk Brussels adres naar Brussels Airport kost ${priceBRU[0].price}€ voor 1–2 passagiers, ${priceBRU[1].price}€ voor 3–4 en ${priceBRU[2].price}€ voor 5–8, per voertuig, inclusief bagage en kinderzitjes. Een gewone taxi met meter kost doorgaans 45 tot 60€ voor één tot vier personen en meer ’s nachts.` },
            { question: 'Hoe lang duurt de rit van Brussel naar Brussels Airport?', answer: `De afstand is ongeveer ${fromBrussels.km} km. Buiten de spits duurt het ${fromBrussels.minMin} tot ${fromBrussels.maxMin} minuten; op weekdagen tussen 7u en 9u30 of 16u en 19u rekent u op maximaal 50 minuten via de E40 en de Brusselse ring.` },
            { question: 'Waar wacht de chauffeur op Brussels Airport?', answer: a.meetingPoint.nl },
            { question: 'Kunnen jullie mij ophalen voor een vlucht om 6u?', answer: 'Ja. Helicro rijdt 24 uur per dag tegen dezelfde vaste prijs. Voor een vertrek om 6u vanuit Brussel halen we u meestal op tussen 3u45 en 4u15, afhankelijk van uw adres.' },
          ]
        : code === 'CRL'
          ? [
              { question: 'Wat kost een taxi van Brussel naar Charleroi Airport?', answer: `Helicro rekent een vaste ${priceCRL[0].price}€ voor 1 passagier, ${priceCRL[1].price}€ voor 2, ${priceCRL[2].price}€ voor 3, ${priceCRL[3].price}€ voor 4 en tot ${priceCRL[7].price}€ voor 8 passagiers vanuit elk Brussels adres, van deur tot deur. Dat is per voertuig: een gezin van vier betaalt dus ${priceCRL[3].price}€ in totaal in plaats van vier bustickets plus een taxi aan beide kanten.` },
              { question: 'Hoe lang rijdt u van Brussel naar Charleroi Airport?', answer: `Ongeveer ${fromBrussels.km} km en ${fromBrussels.minMin} tot ${fromBrussels.maxMin} minuten buiten de spits via de E19. In de ochtendspits op weekdagen rekent u op maximaal 80 minuten. De Flibco-shuttle doet er zo’n 60 minuten over tot Brussel-Zuid, plus uw verdere traject.` },
              { question: 'Wat als mijn Ryanair-vlucht ’s nachts laat landt?', answer: `Uw chauffeur volgt de vlucht live en past de ophaaltijd automatisch aan. De eerste ${FIXED_PRICES.waitingFreeMinutes} minuten na de landing zijn gratis. Er is geen nachttoeslag: een aankomst om 23u55 kost evenveel als een middagrit.` },
              { question: 'Waar ontmoet ik de chauffeur op Charleroi Airport?', answer: a.meetingPoint.nl },
            ]
          : [
              { question: 'Hoe ver is de luchthaven van Rijsel van Brussel?', answer: `Ongeveer ${fromBrussels.km} km via de E19 en A27, of ${fromBrussels.minMin} tot ${fromBrussels.maxMin} minuten rijden buiten de spits. Vanuit Bergen is het ongeveer 75 km en vanuit Charleroi 100 km.` },
              { question: 'Heb ik iets speciaals nodig voor een grensoverschrijdende rit?', answer: 'EU-burgers hebben enkel een identiteitskaart of paspoort nodig. Er is geen toeslag voor de grensovergang; de vaste prijs dekt tol, brandstof en de terugrit van de chauffeur.' },
              { question: 'Kunnen jullie mij ook ophalen aan het station Lille-Europe?', answer: 'Ja. Eurostar- en TGV-aankomsten in Lille-Europe of Lille-Flandres halen we op dezelfde manier op als luchthavenaankomsten, met een naambordje aan de uitgang van het perron.' },
            ];
  } else {
    lead =
      code === 'BRU'
        ? `Helicro vous conduit de n’importe quelle adresse en Belgique vers l’${name} en minivan Ford privé, à un prix fixé à l’avance : ${priceBRU[0].price}€ pour 1–2 passagers, ${priceBRU[1].price}€ pour 3–4 et ${priceBRU[2].price}€ pour 5–8 depuis Bruxelles. Accueil aux arrivées, suivi de vol en direct et sièges enfants gratuits inclus.`
        : code === 'CRL'
          ? `Helicro assure la navette entre toute adresse belge et l’${name} (CRL) en minivan Ford privé à prix fixe : ${priceCRL[0].price}€ pour 1 passager, ${priceCRL[1].price}€ pour 2, ${priceCRL[3].price}€ pour 4 et ${priceCRL[7].price}€ pour un 8 places complet depuis Bruxelles. Votre chauffeur suit les retards Ryanair et Wizz Air et vous attend dans le terminal.`
          : `Helicro propose des transferts privés transfrontaliers depuis Bruxelles et toute la Belgique vers l’${name}, à environ ${fromBrussels.km} km et ${fromBrussels.minMin} à ${fromBrussels.maxMin} minutes de Bruxelles, pour un prix fixe de ${priceLIL.tiers[0].price}€ pour 1 à 3 passagers et ${priceLIL.tiers[1].price}€ pour 4 à 8, par véhicule, péages compris. Sans changement de voiture à la frontière.`;
    intro =
      code === 'BRU'
        ? [
            `Brussels Airport à Zaventem est le premier aéroport de Belgique avec plus de 20 millions de passagers par an. Depuis le centre-ville, la route ne fait que ${fromBrussels.km} km, mais un train raté, un parking complet ou un taxi au compteur en font souvent le moment le plus stressant du voyage. Avec une navette Helicro réservée à l’avance, vous connaissez le chauffeur, le véhicule et le prix avant de quitter la maison.`,
            'Chaque trajet est assuré par Gerasimos ou l’un de ses chauffeurs agréés Helicro, forts de plus de 30 ans de conduite sans accident en Belgique. Le même tarif fixe s’applique à 4h30 pour le premier vol Ryanair comme à minuit après un long-courrier retardé.',
          ]
        : code === 'CRL'
          ? [
              `L’aéroport de Bruxelles-Sud Charleroi se trouve à Gosselies, à ${fromBrussels.km} km au sud de Bruxelles, et accueille surtout les compagnies low-cost comme Ryanair, Wizz Air et TUI fly. En transport public, il faut prendre le bus navette vers Bruxelles-Midi ou une combinaison bus-train via Charleroi-Central ; avec des valises et des enfants, un minivan porte à porte fait souvent la différence entre une matinée sereine et une course contre la montre.`,
              'Helicro dessert l’aéroport de Charleroi depuis Bruxelles, le Brabant wallon (Braine-l’Alleud, Waterloo, Nivelles, Wavre), Namur, Mons et les villes flamandes. Les prix depuis Bruxelles sont publiés ci-dessous ; tout autre point de départ reçoit un devis fixe écrit en quelques minutes.',
            ]
          : [
              'Lille-Lesquin est une alternative pratique pour les voyageurs du Hainaut, de Bruxelles et du Brabant wallon lorsqu’un vol est moins cher ou mieux placé au départ de la France. Il n’existe pas de transport public direct depuis la Belgique jusqu’au terminal ; la plupart des passagers belges réservent donc une navette privée jusqu’à la porte.',
              'Helicro effectue tout le trajet dans un seul véhicule, immatriculation et facture belges, et vous attend dans le hall des arrivées français au retour. Nous desservons aussi Lille centre, Roubaix, Tourcoing et les correspondances Eurostar à Lille-Europe.',
            ];
    priceSection =
      code === 'LIL'
        ? {
            h2: ui.fixedPrices,
            paragraphs: [`De Bruxelles ou Brussels Airport vers Lille-Lesquin, le prix fixe est de ${priceLIL.tiers[0].price}€ pour 1 à 3 passagers et ${priceLIL.tiers[1].price}€ pour 4 à 8, par véhicule, dans les deux sens, péages et bagages compris. ${ui.perVehicle} Depuis Mons, Charleroi ou Tournai, le prix est plus bas et confirmé par écrit en quelques minutes.`],
            table: lilTable(lang),
          }
        : {
            h2: ui.fixedPrices,
            paragraphs: [
              code === 'BRU'
                ? `De Bruxelles vers l’${name}, le prix fixe est de ${priceBRU[0].price}€ pour 1–2 passagers, ${priceBRU[1].price}€ pour 3–4 et ${priceBRU[2].price}€ pour 5–8, par véhicule, dépose à la zone Drop-off (P1 +${FIXED_PRICES.bruP1Surcharge}€). ${ui.perVehicle}`
                : `De Bruxelles vers l’${name}, le prix fixe commence à ${priceCRL[0].price}€ pour 1 passager et augmente avec la taille du groupe jusqu’à ${priceCRL[7].price}€ pour 8 passagers, par véhicule, porte à porte. ${ui.perVehicle}`,
            ],
            table: brusselsPriceTable(lang, code),
          };
    practical =
      code === 'BRU'
        ? {
            h2: 'Informations pratiques Brussels Airport',
            paragraphs: ['Brussels Airport compte un seul terminal avec les jetées A (Schengen) et B (hors Schengen). Les départs sont au niveau 3, les arrivées au niveau 2, et la zone Drop-off se trouve juste devant le hall des départs. Prévoyez 2 heures avant un vol européen et 3 heures pour un long-courrier ; les files de sécurité sont les plus longues entre 5h30 et 8h.'],
            bullets: [
              'Zone Drop-off : standard, incluse dans le prix fixe, arrêt gratuit de 10 minutes',
              `Dépose parking P1 : plus près des portes, +${FIXED_PRICES.bruP1Surcharge}€, utile avec une chaise roulante ou beaucoup de bagages`,
              `Arrivées : le chauffeur attend dans le hall devant le café avec une pancarte, ${FIXED_PRICES.waitingFreeMinutes} minutes gratuites après l’atterrissage`,
              'Codes aéroport : IATA BRU, ICAO EBBR ; 1930 Zaventem',
            ],
          }
        : code === 'CRL'
          ? {
              h2: 'Informations pratiques aéroport de Charleroi',
              paragraphs: ['Charleroi possède un seul terminal utilisé par Ryanair, Wizz Air, TUI fly, Pegasus et Air Arabia. L’enregistrement et le dépôt des bagages ferment 40 minutes avant le départ chez la plupart des low-cost ; la sécurité est la plus chargée de 5h à 7h30 et en début d’après-midi. Prévoyez d’être à l’aéroport 2 heures avant.'],
              bullets: [
                'Dépose : zone Kiss & Ride devant le terminal, incluse dans le prix fixe',
                `Arrivées : le chauffeur attend au Kiss & Ride ou dans le hall avec une pancarte Helicro, ${FIXED_PRICES.waitingFreeMinutes} minutes gratuites après l’atterrissage`,
                'Retards low-cost : votre vol est suivi en direct, l’heure de prise en charge est décalée sans frais dans l’heure gratuite',
                'Codes aéroport : IATA CRL, ICAO EBCI ; 6041 Gosselies',
              ],
            }
          : {
              h2: 'Informations pratiques aéroport de Lille',
              paragraphs: ['Lille-Lesquin dispose d’un terminal unique à environ 10 km au sud-est de Lille, desservi par easyJet, Volotea, Transavia, Ryanair et Air France. Gardez votre carte d’identité à portée de main : il n’y a pas de contrôle systématique sur l’E42/A27, mais des contrôles ponctuels existent.'],
              bullets: [
                'Dépose : directement devant le terminal, incluse dans le prix fixe',
                `Arrivées : le chauffeur attend dans la zone des arrivées avec une pancarte, ${FIXED_PRICES.waitingFreeMinutes} minutes gratuites après l’atterrissage`,
                'Codes aéroport : IATA LIL, ICAO LFQQ ; 59810 Lesquin, France',
                'Également desservies : gares de Lille-Europe (Eurostar, TGV) et Lille-Flandres',
              ],
            };
    specificFaqs =
      code === 'BRU'
        ? [
            { question: 'Combien coûte un taxi de Bruxelles à l’aéroport de Zaventem ?', answer: `Une navette privée Helicro depuis toute adresse bruxelloise vers Brussels Airport coûte ${priceBRU[0].price}€ pour 1–2 passagers, ${priceBRU[1].price}€ pour 3–4 et ${priceBRU[2].price}€ pour 5–8, par véhicule, bagages et sièges enfants compris. Un taxi au compteur revient généralement à 45–60€ pour une à quatre personnes, davantage la nuit.` },
            { question: 'Combien de temps dure le trajet Bruxelles – Brussels Airport ?', answer: `La distance est d’environ ${fromBrussels.km} km. Hors heures de pointe, comptez ${fromBrussels.minMin} à ${fromBrussels.maxMin} minutes ; en semaine entre 7h et 9h30 ou 16h et 19h, prévoyez jusqu’à 50 minutes via l’E40 et le ring de Bruxelles.` },
            { question: 'Où le chauffeur attend-il à Brussels Airport ?', answer: a.meetingPoint.fr },
            { question: 'Pouvez-vous venir me chercher pour un vol à 6h ?', answer: 'Oui. Helicro roule 24 h/24 au même prix fixe. Pour un départ à 6h depuis Bruxelles, nous vous prenons en charge généralement entre 3h45 et 4h15 selon votre adresse.' },
          ]
        : code === 'CRL'
          ? [
              { question: 'Combien coûte un taxi de Bruxelles à l’aéroport de Charleroi ?', answer: `Helicro applique un prix fixe de ${priceCRL[0].price}€ pour 1 passager, ${priceCRL[1].price}€ pour 2, ${priceCRL[2].price}€ pour 3, ${priceCRL[3].price}€ pour 4 et jusqu’à ${priceCRL[7].price}€ pour 8 passagers depuis toute adresse bruxelloise, porte à porte. C’est par véhicule : une famille de quatre paie ${priceCRL[3].price}€ au total plutôt que quatre billets de bus plus un taxi à chaque bout.` },
              { question: 'Combien de temps dure le trajet Bruxelles – aéroport de Charleroi ?', answer: `Environ ${fromBrussels.km} km et ${fromBrussels.minMin} à ${fromBrussels.maxMin} minutes hors heures de pointe par l’E19. Aux heures de pointe du matin en semaine, prévoyez jusqu’à 80 minutes. La navette Flibco met environ 60 minutes jusqu’à Bruxelles-Midi, plus votre trajet final.` },
              { question: 'Que se passe-t-il si mon vol Ryanair atterrit tard le soir ?', answer: `Votre chauffeur suit le vol en direct et adapte l’heure de prise en charge automatiquement. Les ${FIXED_PRICES.waitingFreeMinutes} premières minutes après l’atterrissage sont gratuites. Il n’y a pas de supplément de nuit : une arrivée à 23h55 coûte le même prix qu’en journée.` },
              { question: 'Où retrouver le chauffeur à l’aéroport de Charleroi ?', answer: a.meetingPoint.fr },
            ]
          : [
              { question: 'À quelle distance de Bruxelles se trouve l’aéroport de Lille ?', answer: `Environ ${fromBrussels.km} km par l’E19 et l’A27, soit ${fromBrussels.minMin} à ${fromBrussels.maxMin} minutes de route hors heures de pointe. Depuis Mons comptez environ 75 km et depuis Charleroi 100 km.` },
              { question: 'Faut-il quelque chose de particulier pour un transfert transfrontalier ?', answer: 'Les citoyens de l’UE n’ont besoin que d’une carte d’identité ou d’un passeport. Aucun supplément pour le passage en France : le prix fixe couvre péages, carburant et retour du chauffeur.' },
              { question: 'Pouvez-vous aussi me prendre en charge à la gare de Lille-Europe ?', answer: 'Oui. Les arrivées Eurostar et TGV à Lille-Europe ou Lille-Flandres sont prises en charge comme les arrivées aéroport, avec une pancarte à la sortie du quai.' },
            ];
  }

  const travelSection: SeoSection = {
    h2: ui.travelInfo,
    paragraphs: [
      lang === 'en'
        ? `From Brussels city centre to ${short} it is ${legText(lang, fromBrussels.km, fromBrussels.minMin, fromBrussels.maxMin)}. Your driver checks live traffic before leaving and adds a buffer for roadworks on the ring, so you are never asked to leave earlier than necessary.`
        : lang === 'nl'
          ? `Van het centrum van Brussel naar ${short} is het ${legText(lang, fromBrussels.km, fromBrussels.minMin, fromBrussels.maxMin)}. Uw chauffeur checkt het verkeer voor vertrek en rekent een marge voor wegenwerken op de ring, zodat u nooit vroeger dan nodig hoeft te vertrekken.`
          : `Du centre de Bruxelles à ${short}, comptez ${legText(lang, fromBrussels.km, fromBrussels.minMin, fromBrussels.maxMin)}. Votre chauffeur vérifie le trafic en direct avant de partir et prévoit une marge pour les travaux sur le ring, pour ne jamais vous faire partir plus tôt que nécessaire.`,
    ],
    table: originsTable(lang, code),
  };

  const meetingSection: SeoSection = { h2: ui.meetingPoint, paragraphs: [a.meetingPoint[lang]] };

  const comparisonIntro: Record<HubLang, string> = {
    en: `For a solo traveller with hand luggage the train is the cheapest way to reach ${short}. For two or more people, families with car seats, early departures or late arrivals, a fixed-price private transfer usually costs the same or less than separate tickets plus a taxi, and removes every connection.`,
    nl: `Voor een alleenreiziger met handbagage is de trein de goedkoopste manier om ${short} te bereiken. Vanaf twee personen, met kinderzitjes, bij vroege vertrekken of late aankomsten kost een privétransfer met vaste prijs meestal evenveel of minder dan aparte tickets plus een taxi, en valt elke overstap weg.`,
    fr: `Pour un voyageur seul avec un bagage à main, le train reste le moyen le moins cher de rejoindre ${short}. À partir de deux personnes, avec des sièges enfants, pour un départ matinal ou une arrivée tardive, une navette privée à prix fixe coûte généralement autant ou moins que des billets séparés plus un taxi, sans aucune correspondance.`,
  };

  const relatedGroups = [];
  if (lang === 'en') {
    relatedGroups.push({ title: ui.routes, links: EN_ROUTES[code] });
    relatedGroups.push({
      title: ui.hubs,
      links: (['BRU', 'CRL', 'LIL'] as AirportCode[]).filter((c) => c !== code).map((c) => ({ href: AIRPORTS[c].hub.en!, label: `${AIRPORTS[c].name.en} transfers` })),
    });
    relatedGroups.push({
      title: ui.services,
      links: [
        { href: '/services/airport', label: 'Airport transfer service' },
        { href: '/pricing', label: 'All fixed prices' },
        { href: '/en/service-area', label: 'Service areas across Belgium' },
        { href: '/en/blog', label: 'Airport guides on the blog' },
      ],
    });
  } else if (lang === 'nl') {
    relatedGroups.push({ title: ui.hubs, links: NL_LINKS.filter((l) => l.href !== page.url) });
    relatedGroups.push({
      title: ui.services,
      links: [
        { href: '/nl/services/airport', label: 'Luchthavenvervoer: alle info' },
        { href: '/nl/pricing', label: 'Alle vaste prijzen' },
        { href: '/nl/fleet', label: 'Ons wagenpark' },
        { href: '/nl/faq', label: 'Veelgestelde vragen' },
      ],
    });
  } else {
    relatedGroups.push({ title: ui.hubs, links: FR_LINKS.filter((l) => l.href !== page.url) });
    relatedGroups.push({
      title: ui.services,
      links: [
        { href: '/fr/services/airport', label: 'Navette aéroport : toutes les infos' },
        { href: '/fr/pricing', label: 'Tous les prix fixes' },
        { href: '/fr/fleet', label: 'Notre flotte' },
        { href: '/fr/faq', label: 'Questions fréquentes' },
      ],
    });
  }

  const offers =
    code === 'BRU'
      ? priceBRU.map((p) => ({ name: `Brussels to Brussels Airport, ${p.pax} passengers`, price: p.price }))
      : code === 'CRL'
        ? priceCRL.map((p) => ({ name: `Brussels to Charleroi Airport, ${p.pax} passenger(s)`, price: p.price }))
        : priceLIL.tiers.map((t) => ({ name: `Brussels to Lille Airport, ${t.pax} passengers`, price: t.price }));

  const homeLabel = ui.home;
  const airportCrumb: Record<HubLang, string> = { en: 'Airport transfers', nl: 'Luchthavenvervoer', fr: 'Navettes aéroport' };
  const servicePath = lang === 'en' ? '/services/airport' : `/${lang}/services/airport`;

  return {
    lang,
    url: page.url,
    type: page.type,
    title: page.title,
    description: page.description,
    h1: page.h1,
    lead,
    intro,
    sections: [priceSection, travelSection, meetingSection, practical, howItWorksSection(lang), includedSection(lang), comparisonSection(lang, comparisonIntro[lang])],
    faqs: [...specificFaqs, ...pickFaqs(lang, ['cancel', 'seats', 'pay', 'luggage', 'night'])],
    breadcrumbs: [
      { name: homeLabel, url: lang === 'en' ? '/' : `/${lang}` },
      { name: airportCrumb[lang], url: servicePath },
      { name: page.h1, url: page.url },
    ],
    related: relatedGroups,
    alternates: code === 'LIL' ? { en: a.hub.en!, nl: '/nl/route/brussel-rijsel-luchthaven', fr: '/fr/navette/bruxelles-lille-aeroport' } : a.hub,
    schema: {
      serviceName: page.h1,
      serviceType: 'Airport transfer',
      areaServed: [
        { type: 'City', name: a.locality },
        { type: 'City', name: 'Brussels' },
        { type: 'Country', name: 'Belgium' },
      ],
      airport: code,
      offers,
    },
    cta: { headline: ui.ctaHeadline, text: ui.ctaText },
    image: code === 'CRL' ? '/images/airport-1.jpg' : '/images/airport-2.jpg',
  };
}
