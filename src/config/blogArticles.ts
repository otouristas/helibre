import type { AlternateMap, Locale } from '@/lib/seo';

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogArticle {
  slug: string;
  /** Language of the article; determines the /{lang}/blog/ prefix (EN lives under /en/blog/). */
  lang: Locale;
  title: string;
  excerpt: string;
  date: string;
  datePublished: string;
  dateModified?: string;
  /** Cross-language versions of this article, when they exist. */
  alternates?: AlternateMap;
  readTime: string;
  category: string;
  ctaHref: string;
  ctaLabel: string;
  image?: string;
  /** Paragraphs. A string starting with "## " renders as an H2, "- " lines render as a bullet list. */
  content: string[];
  faqs?: BlogFaq[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'brussels-airport-to-city-centre',
    lang: 'en',
    title: 'How to get from Brussels Airport to the city centre in 2026: train, bus, taxi or private transfer',
    excerpt:
      'Every real option from Zaventem to central Brussels compared on price, time and comfort, with the honest answer on which one to pick for your group.',
    date: 'September 14, 2026',
    datePublished: '2026-09-14',
    readTime: '7 min read',
    category: 'Airport Guides',
    ctaHref: '/en/airport-transfer/brussels-zaventem',
    ctaLabel: 'Book a fixed-price Brussels Airport transfer →',
    image: '/images/airport-2.jpg',
    content: [
      'Brussels Airport sits in Zaventem, 14 km north-east of the Grand-Place. There are four realistic ways to cover that distance: the Airport Express train, the STIB or De Lijn bus, a taxi from the rank, or a pre-booked private transfer. A solo traveller with a backpack should take the train. Two or more people with suitcases, anyone landing after 23:00 and every family with a car seat are usually better off with a fixed-price private transfer, which costs 35€ per vehicle for one or two passengers with Helicro.',
      '## The train: cheapest for one person',
      'The station is on level -1 of the terminal. Trains to Brussels-Nord, Brussels-Central and Brussels-Midi leave several times an hour and take 17 to 25 minutes to Central. A standard single costs around 10€ per person including the Diabolo surcharge that funds the airport rail link. Trains run from roughly 5:00 until midnight; after the last train you are left with the night bus or a taxi.',
      'The catch is the last kilometre. Brussels-Central is a 10-minute walk from the Grand-Place with luggage over cobblestones, and most hotels in the European Quarter, Louise or Ixelles need a metro or tram connection on top. With two suitcases and a child, that connection is where the train stops being cheap in effort.',
      '## The bus: cheap but slow',
      'STIB Airport Line 12 (express, Monday to Friday until 20:00) and line 21 (evenings and weekends) run to Schuman and Luxembourg in the European Quarter in about 30 to 40 minutes. A ticket bought at the airport costs about 7€. De Lijn lines 272 and 471 go to Brussels-Nord for a couple of euros but stop everywhere. Buses are fine for a light-luggage traveller heading to the EU institutions and poor value for anyone else.',
      '## Taxi from the rank: no queue, unknown price',
      'Official taxis wait outside arrivals. Brussels taxi tariffs are metered, so the fare depends on traffic: expect 45€ to 60€ to the city centre by day and more at night or in the Friday evening rush, when the 14 km can take 50 minutes. Card payment is standard. It is the right choice if you did not plan ahead and do not mind the meter.',
      '## Ride-hailing apps',
      'App-based rides operate in the Brussels region, but availability at the airport pickup zone varies and surge pricing at 6:00 or after a wave of delayed arrivals can push the price above a regular taxi. Child seats are almost never available. Treat apps as a backup rather than a plan.',
      '## Pre-booked private transfer: fixed price, driver in arrivals',
      'A private transfer is booked in advance for a price agreed in writing. With Helicro, any Brussels address to or from Brussels Airport costs 35€ for 1 to 2 passengers, 45€ for 3 to 4 and 55€ for 5 to 8, per vehicle, including luggage, child seats and 60 minutes of free waiting after landing. The driver tracks your flight and stands in the arrivals hall with a name sign. For two people that is already at or below the metered taxi price, and for a family of four it is cheaper than four train tickets plus a taxi from the station.',
      '## Which option for which traveller',
      '- Solo, hand luggage, hotel near Central or Midi: train.',
      '- Two adults with suitcases, any hotel: private transfer at 35€ beats two train tickets plus a taxi.',
      '- Family with children: private transfer, because the child seats are included and free.',
      '- Group of 5 to 8: private minivan at 55€ is the cheapest option per person by a wide margin.',
      '- Landing after midnight: private transfer or taxi; the train has stopped.',
      '- Business traveller with a receipt requirement: private transfer with a VAT invoice from Helicro SRL.',
      'Whichever you pick, allow extra time on weekday mornings between 7:00 and 9:30, when the E40 and the Brussels ring are at their busiest.',
    ],
    faqs: [
      { question: 'How long does the train take from Brussels Airport to the city centre?', answer: 'About 17 to 25 minutes to Brussels-Central, with several departures an hour from 5:00 to around midnight. Add 10 to 20 minutes to walk or connect to your hotel.' },
      { question: 'How much is a taxi from Brussels Airport to the city centre?', answer: 'A metered taxi from the rank usually costs 45€ to 60€ by day and more at night. A pre-booked Helicro private transfer is a fixed 35€ for 1 to 2 passengers, 45€ for 3 to 4 and 55€ for 5 to 8.' },
      { question: 'Is there public transport from Brussels Airport at night?', answer: 'Trains stop around midnight. After that only night buses and taxis remain, so late arrivals are best covered by a pre-booked transfer that tracks your flight.' },
    ],
  },
  {
    slug: 'flibco-vs-private-transfer-charleroi',
    lang: 'en',
    title: 'Flibco shuttle vs private transfer: Brussels to Charleroi Airport compared',
    excerpt:
      'The shuttle bus is cheap for one person. For two or more, or with luggage and an early flight, the numbers change. Here is the full comparison for 2026.',
    date: 'September 14, 2026',
    datePublished: '2026-09-14',
    readTime: '6 min read',
    category: 'Charleroi Transfers',
    ctaHref: '/en/airport-transfer/brussels-charleroi',
    ctaLabel: 'Book a fixed-price Charleroi transfer →',
    image: '/images/airport-1.jpg',
    content: [
      'Brussels South Charleroi Airport is 60 km from the capital and has no railway station. That leaves three ways to get there from Brussels: the Flibco shuttle bus to Brussels-Midi, a train-plus-bus combination via Charleroi-Central, or a door-to-door private transfer. Flibco is the cheapest option for a single traveller. From two people upwards, a private minivan at a fixed 75€ for 2 or 110€ for 4 with Helicro is comparable in cost and saves the trip to Midi station, the queue and the risk of missing the bus.',
      '## Flibco shuttle: what you actually get',
      'Flibco runs coaches between the airport and Brussels-Midi station roughly every 20 to 30 minutes through the day, with a journey time of about 55 to 65 minutes when the E19 is clear. Tickets bought online in advance cost around 17€ to 20€ per person one way; walk-up fares are higher. Luggage is limited to one large bag plus hand luggage per person, and the bus leaves on time whether you are on it or not.',
      'The part people forget is Brussels-Midi itself. Unless you are staying next to the station, you need a metro, tram or taxi to reach it, with luggage, at the hour the shuttle demands. For a 6:30 flight that means leaving a city-centre hotel around 3:45 to catch a 4:15 coach.',
      '## Train and bus via Charleroi-Central',
      'Trains from Brussels-Midi to Charleroi-Central take about 55 minutes; TEC bus A then covers the last 8 km to the terminal in 20 minutes. Total time is typically 90 minutes plus connections, and the combined ticket is cheaper than Flibco. It is the budget choice for a flexible traveller with light luggage, but the first trains do not connect with the earliest Ryanair departures.',
      '## Private transfer: door to door at a fixed price',
      'Helicro collects you at any Brussels address and drops you at the Kiss & Ride in front of the Charleroi terminal. The price is fixed per vehicle: 65€ for 1 passenger, 75€ for 2, 90€ for 3, 110€ for 4, 120€ for 5, 130€ for 6, 140€ for 7 and 160€ for 8, at any hour, with luggage and child seats included. On the return, your driver tracks the flight and waits inside the terminal with a sign; the first 60 minutes after landing are free.',
      '## Cost comparison for real groups',
      '- 1 person: Flibco about 17€ to 20€ plus 3€ to 10€ to reach Midi, versus 65€ private. Take the bus.',
      '- 2 people: about 40€ to 50€ all-in by bus versus 75€ private, door to door with no 4:00 metro. Close call; private wins for early flights and late returns.',
      '- 4 people: about 80€ to 100€ by bus including the trip to Midi, versus 110€ private. Private is nearly the same money for 8 seats, 8 bags and zero connections.',
      '- 6 to 8 people: bus costs 120€ to 160€ plus two taxis to Midi; private is 130€ to 160€ for one vehicle. Private wins on price and logistics.',
      '## Time comparison',
      'Door to terminal, the private transfer takes 55 to 70 minutes outside peak hours. The shuttle takes the same 60 minutes on the motorway plus 20 to 40 minutes to reach Midi and 10 to 15 minutes of waiting at the stop. Budget 90 to 120 minutes for the shuttle route in practice.',
      '## Verdict',
      'Flibco is a good product for solo travellers who are near Brussels-Midi and flying at a civilised hour. Everyone else, especially families, groups and anyone on the first or last flight of the day, gets more for their money from a fixed-price private transfer.',
    ],
    faqs: [
      { question: 'How much does the Flibco bus cost from Brussels to Charleroi?', answer: 'Advance online tickets are typically 17€ to 20€ per person one way, with higher walk-up fares. The coach runs between Brussels-Midi and the airport in about an hour.' },
      { question: 'How much is a private transfer from Brussels to Charleroi Airport?', answer: 'Helicro charges a fixed 65€ for 1 passenger, 75€ for 2, 110€ for 4 and 160€ for 8, per vehicle, door to door, including luggage and child seats.' },
      { question: 'Is there a train to Charleroi Airport?', answer: 'No. The nearest station is Charleroi-Central, 8 km away, connected to the terminal by TEC bus A in about 20 minutes.' },
    ],
  },
  {
    slug: 'brussels-airport-strike-transfer-plan',
    lang: 'en',
    title: 'Brussels Airport strikes: how to protect your trip and your transfer',
    excerpt:
      'Belgian strike days ground flights at Zaventem and Charleroi and stop the trains at the same time. A practical plan for travellers, including what happens to a pre-booked transfer.',
    date: 'September 14, 2026',
    datePublished: '2026-09-14',
    readTime: '5 min read',
    category: 'Travel Tips',
    ctaHref: '/services/airport',
    ctaLabel: 'Pre-book a transfer with free cancellation →',
    image: '/images/door-to-door-transport.jpg',
    content: [
      'Belgium has had a run of national action days since 2025, and each one follows the same pattern at the airports: security and ground-handling staff join the strike, Brussels Airport asks airlines to cancel most departures the day before, Charleroi cancels a large share of its Ryanair and Wizz Air flights, and SNCB runs a reduced train timetable. The road network stays open. If your flight still operates, a private transfer is the one part of the journey that works normally.',
      '## How airport strikes unfold',
      'Announcements usually come 7 to 14 days ahead from the unions, and the airports publish their operational plan 24 to 48 hours before. Departures are hit hardest because outbound passengers need security screening; arrivals are often maintained. Airlines send rebooking options by email and app, and EU261 rules apply to cancellations, though strikes by airport staff count as extraordinary circumstances for compensation.',
      '## Five things to do when a strike is announced',
      '- Check whether your flight is on the airport’s cancellation list before you leave home; do not rely on the airline app alone.',
      '- Ask the airline to rebook you on the day before or after; both airports are usually overloaded on the first day back.',
      '- Keep the transfer booking: with Helicro it is free to cancel or move up to 24 hours before pickup, so there is nothing to lose by holding the slot.',
      '- If the trains are striking too, remember the ride to the airport is unaffected; roads may be busier around Brussels because of demonstrations, and the driver plans around them.',
      '- Consider the other airport: on several action days Charleroi kept more flights running than Zaventem, or the reverse. Helicro drives to both at a fixed price.',
      '## What happens to your Helicro booking',
      'If your flight is cancelled, tell us by WhatsApp and the transfer is cancelled or moved free of charge, even inside 24 hours when the cancellation is strike-related. If your flight is rebooked to a new time, the same driver takes the new slot at the same fixed price. If you land during a strike day, arrivals are tracked as normal and the driver waits inside the terminal.',
      '## Why pre-booking beats improvising on strike days',
      'On action days, taxi ranks at the airport thin out, app prices surge and the trains are the thing on strike. Travellers who pre-booked a private transfer with flight tracking simply walk out to a driver holding their name. Those who did not spend the morning refreshing apps. The price difference is small; the difference on the day is large.',
    ],
    faqs: [
      { question: 'Do private transfers run during Belgian strike days?', answer: 'Yes. Roads stay open and Helicro drives as normal. Only the flights and the trains are affected, so check your flight status and keep your transfer booking.' },
      { question: 'Can I cancel my transfer if my flight is cancelled by a strike?', answer: 'Yes, free of charge. Send a WhatsApp message and the booking is cancelled or moved to the rebooked flight at the same fixed price.' },
    ],
  },
  {
    slug: 'wat-kost-een-taxi-naar-zaventem',
    lang: 'nl',
    title: 'Wat kost een taxi naar Zaventem in 2026? Vaste prijzen, meter en alternatieven',
    excerpt:
      'Van 35€ vast tot 60€ met de meter: wat een taxi naar Brussels Airport echt kost vanuit Brussel, Leuven, Antwerpen en Gent, en wanneer een privé minivan goedkoper is dan de trein.',
    date: '14 september 2026',
    datePublished: '2026-09-14',
    readTime: '6 min lezen',
    category: 'Luchthavenvervoer',
    ctaHref: '/nl/luchthavenvervoer/zaventem',
    ctaLabel: 'Boek luchthavenvervoer Zaventem met vaste prijs →',
    image: '/images/airport-2.jpg',
    content: [
      'Een taxi van het centrum van Brussel naar Brussels Airport in Zaventem kost met de meter doorgaans 45€ tot 60€ overdag en meer ’s nachts. Een vooraf geboekte privétransfer van Helicro kost een vaste 35€ voor 1 tot 2 passagiers, 45€ voor 3 tot 4 en 55€ voor 5 tot 8, per voertuig, inclusief bagage, kinderzitjes en ontvangst in de aankomsthal. Vanuit andere steden ligt de prijs hoger en wordt hij per rit schriftelijk vastgelegd.',
      '## Meter of vaste prijs: het verschil',
      'Een Brusselse taxi rekent een opstapbedrag plus een kilometertarief en een wachttarief; in de file tussen 7u en 9u30 tikt de meter door. De 14 km naar Zaventem duren dan gerust 50 minuten in plaats van 20, en het bedrag op de meter groeit mee. Een vaste prijs is vooraf afgesproken per voertuig en verandert niet, ongeacht file, uur of aantal koffers.',
      '## Vaste prijzen vanuit Brussel',
      '- 1 tot 2 passagiers: 35€ (afzetten aan de Drop-off zone; P1 +5€)',
      '- 3 tot 4 passagiers: 45€',
      '- 5 tot 8 passagiers: 55€',
      '- Wachttijd na de landing: eerste 60 minuten gratis, daarna 30€ per uur',
      '- Extra stop onderweg: 10€ per stop',
      '- Nachttoeslag: geen',
      '## Wat kost een taxi naar Zaventem vanuit Leuven, Antwerpen, Gent of Brugge?',
      'Vanuit Leuven (20 km, 20 tot 30 minuten) en Mechelen is de prijs vergelijkbaar met Brussel. Antwerpen ligt op 45 km (40 tot 55 minuten), Gent op 70 km (55 tot 70 minuten) en Brugge op 110 km (75 tot 95 minuten). Helicro geeft voor elk adres binnen enkele minuten een vaste prijs per minivan via WhatsApp; die prijs geldt voor het hele gezelschap, niet per persoon.',
      '## Taxi versus trein versus parking',
      'Een treinticket naar Brussels Airport kost per persoon ongeveer 10€ inclusief Diabolo-toeslag; met vier personen betaalt u al 40€ plus het traject naar het station. Parkeren op de luchthaven kost snel 100€ of meer per week. Voor twee of meer reizigers met koffers is een privé minivan met vaste prijs dus meestal even duur of goedkoper dan de trein en altijd goedkoper dan een week parking, met ophaling aan huis erbij.',
      '## Hoe boekt u een taxi naar Zaventem met vaste prijs?',
      'Stuur uw ophaaladres, datum, vluchtnummer en aantal passagiers via WhatsApp naar +32 472 35 88 05 of via het formulier op de website. U krijgt de prijs schriftelijk, de chauffeur staat 10 minuten op voorhand klaar en annuleren is gratis tot 24 uur voor de rit.',
    ],
    faqs: [
      { question: 'Wat kost een taxi van Brussel naar Zaventem?', answer: 'Met de meter 45€ tot 60€ overdag; met Helicro een vaste 35€ voor 1 tot 2 passagiers, 45€ voor 3 tot 4 en 55€ voor 5 tot 8, per voertuig.' },
      { question: 'Is er een nachttoeslag voor een taxi naar de luchthaven?', answer: 'Bij Helicro niet: dezelfde vaste prijs geldt om 4u ’s ochtends als om 14u. Gewone taxi’s rekenen wel een hoger nachttarief.' },
      { question: 'Hoe lang duurt de rit van Brussel naar Zaventem?', answer: 'Ongeveer 14 km en 20 tot 35 minuten buiten de spits; in de ochtendspits op weekdagen tot 50 minuten.' },
    ],
  },
  {
    slug: 'combien-coute-un-taxi-bruxelles-charleroi',
    lang: 'fr',
    title: 'Combien coûte un taxi de Bruxelles à l’aéroport de Charleroi en 2026 ?',
    excerpt:
      'Compteur, navette Flibco, train ou minivan privé à prix fixe : ce que coûte vraiment le trajet Bruxelles – Charleroi selon votre groupe, et comment éviter les mauvaises surprises.',
    date: '14 septembre 2026',
    datePublished: '2026-09-14',
    readTime: '6 min de lecture',
    category: 'Navettes Charleroi',
    ctaHref: '/fr/navette/charleroi-bruxelles',
    ctaLabel: 'Réserver une navette Bruxelles – Charleroi à prix fixe →',
    image: '/images/airport-1.jpg',
    content: [
      'Un taxi au compteur entre le centre de Bruxelles et l’aéroport de Charleroi, à 60 km, dépasse généralement 100€, davantage la nuit. Une navette privée Helicro réservée à l’avance coûte un prix fixe de 65€ pour 1 passager, 75€ pour 2, 90€ pour 3, 110€ pour 4 et jusqu’à 160€ pour 8, par véhicule, porte à porte, avec bagages, sièges enfants et 60 minutes d’attente gratuites à l’arrivée. La navette Flibco coûte environ 17€ à 20€ par personne mais ne dessert que Bruxelles-Midi.',
      '## Pourquoi le compteur coûte si cher sur ce trajet',
      'Les taxis bruxellois appliquent une prise en charge, un tarif kilométrique majoré hors de la Région et un tarif d’attente. Sur 60 km d’autoroute avec un retour à vide pour le chauffeur, le compteur atteint vite 100€ à 130€. Aux heures de pointe du matin, quand l’E19 est saturée, le temps d’attente s’ajoute au prix.',
      '## Prix fixes Bruxelles – Charleroi avec Helicro',
      '- 1 passager : 65€',
      '- 2 passagers : 75€',
      '- 3 passagers : 90€',
      '- 4 passagers : 110€',
      '- 5 passagers : 120€',
      '- 6 passagers : 130€',
      '- 7 passagers : 140€',
      '- 8 passagers : 160€',
      'Ces prix s’entendent par véhicule, TVA comprise, de jour comme de nuit, dans les deux sens. Une famille de quatre paie donc 110€ au total, soit 27,50€ par personne pour un trajet de porte à porte sans correspondance.',
      '## La navette Flibco et le train',
      'Flibco relie Bruxelles-Midi à l’aéroport en une heure environ pour 17€ à 20€ par personne en réservant en ligne. Il faut ajouter le trajet jusqu’à la gare du Midi, avec les bagages, à l’heure imposée par le bus. Le train jusqu’à Charleroi-Central puis le bus TEC A jusqu’au terminal coûte moins cher mais prend 90 minutes ou plus, et les premiers trains ne correspondent pas aux premiers vols Ryanair.',
      '## Quel choix selon votre situation',
      '- Seul, bagage léger, hôtel près de la gare du Midi : navette Flibco.',
      '- À deux avec valises ou vol avant 7h : navette privée à 75€, sans métro à 4h du matin.',
      '- Famille avec enfants : navette privée, sièges enfants gratuits inclus.',
      '- Groupe de 5 à 8 : minivan privé de 120€ à 160€, moins cher par personne que le bus plus deux taxis.',
      '## Comment réserver',
      'Envoyez votre adresse, la date, le numéro de vol et le nombre de passagers sur WhatsApp au +32 472 35 88 05 ou via le formulaire. Le prix est confirmé par écrit en quelques minutes, annulation gratuite jusqu’à 24 h avant, et le chauffeur suit votre vol au retour.',
    ],
    faqs: [
      { question: 'Combien coûte un taxi Bruxelles – Charleroi aéroport ?', answer: 'Au compteur, généralement plus de 100€. Avec Helicro, un prix fixe de 65€ pour 1 passager, 75€ pour 2, 110€ pour 4 et 160€ pour 8, par véhicule.' },
      { question: 'Combien de temps dure le trajet Bruxelles – Charleroi ?', answer: 'Environ 60 km et 55 à 70 minutes hors heures de pointe par l’E19 ; jusqu’à 80 minutes aux heures de pointe du matin en semaine.' },
      { question: 'Y a-t-il un train direct pour l’aéroport de Charleroi ?', answer: 'Non. La gare la plus proche est Charleroi-Central, à 8 km, reliée au terminal par le bus TEC A en 20 minutes environ.' },
    ],
  },
  {
    slug: 'tomorrowland-2026-vip-group-transport',
    lang: 'en',
    title: 'Tomorrowland 2026 VIP Group Transport & Shuttle Guide',
    excerpt:
      'Everything you need to know about getting your festival group safely to Boom and back with return shuttle planning.',
    date: 'April 15, 2026',
    datePublished: '2026-04-15',
    readTime: '6 min read',
    category: 'Festival Logistics',
    ctaHref: '/services/event-transfers/tomorrowland',
    ctaLabel: 'Book Tomorrowland private transfers →',
    image: '/images/event-service.jpg',
    content: [
      'Tomorrowland 2026 draws hundreds of thousands of visitors to Boom, Belgium. Getting a group of friends from Brussels Airport (BRU), Charleroi (CRL), or a city hotel to the festival, and home again after the last set, is the hardest part of the weekend for many travellers.',
      'Official shuttles work for solo travellers with light bags, but groups of 4 to 8 with camping gear often lose hours in queues and still face surge-priced rideshares at 1:00 AM. A pre-booked private 8-seater minivan with a dedicated chauffeur solves both problems: fixed pricing and a guaranteed night return.',
      'Typical travel times outside extreme festival congestion: BRU to Boom about 30 minutes, Brussels centre about 35 minutes, CRL about 1 hour 10 minutes, Antwerp centre about 20 minutes. Always build buffer time for festival traffic control near De Schorre.',
      'Best practice for VIP groups: book one-way airport arrivals for DreamVille campers, or a daily round-trip shuttle if you stay in Brussels hotels. Full-weekend chauffeur packages keep one vehicle and driver assigned for all festival days.',
      'Helicro specialises in multilingual (English, French, Greek) private transfers with luggage capacity for festival gear. Pre-coordinate your late-night meeting point near official pickup zones before drop-off so reuniting with your van is seamless.',
      'Ready to lock in flat-rate pricing for Tomorrowland 2026/2027 weekends? Availability fills months ahead, so reserve early.',
    ],
  },
  {
    slug: 'spa-francorchamps-f1-transfer-guide',
    lang: 'en',
    title: 'How to Get to Spa-Francorchamps for F1: Private Transfer Guide',
    excerpt:
      'Race-weekend logistics for the Belgian Grand Prix, 24 Hours of Spa, and track days: airports, hotels, standby chauffeurs, and traffic reality.',
    date: 'May 5, 2026',
    datePublished: '2026-05-05',
    readTime: '7 min read',
    category: 'Motorsport Travel',
    ctaHref: '/services/event-transfers/formula-1-spa-francorchamps',
    ctaLabel: 'Book Spa-Francorchamps F1 transfers →',
    image: '/images/event-service.jpg',
    content: [
      'Circuit de Spa-Francorchamps is one of the world’s most iconic race tracks, and one of the hardest venues to reach smoothly on Grand Prix weekends. Roads around Spa, Stavelot, and Malmedy clog for hours during Formula 1, WEC, and the TotalEnergies 24 Hours of Spa.',
      'From Brussels Airport (BRU) expect roughly 1 hour 40 minutes in normal conditions and up to 2.5 to 3 hours on race Sundays. Liège Airport (LGG) is closer, about 45 minutes. Cross-border arrivals from Cologne (CGN), Düsseldorf (DUS), Luxembourg (LUX), and Maastricht (MST) are common for international fans and hospitality guests.',
      'Point-to-point taxis struggle when sessions overrun. Full-day chauffeur standby is the smarter package: your driver stays assigned through qualifying delays, hospitality dinners, and post-race exits while you keep a fixed flat rate.',
      'Hotel bases that work well: Liège for shorter circuit hops, Brussels for city nightlife between sessions, or Spa, Malmedy and Stavelot for maximum proximity. Helicro runs daily hotel to circuit shuttles for full race weekends in an 8-passenger executive minivan with space for hospitality gear.',
      'Corporate and Ferrari track-day groups often need multi-point pickups (airport, hotel and paddock access where permits allow). Share your P-parking or VIP entry details when booking so drop-offs match circuit access rules.',
      'Book 4 to 8 weeks ahead for F1 weekends. Fixed Helicro rates mean no race-day traffic surcharge; ask for a Grand Prix day pass or 3-day weekend chauffeur quote.',
    ],
  },
];

export function getBlogArticle(slug: string, lang?: Locale) {
  return blogArticles.find((a) => a.slug === slug && (lang ? a.lang === lang : true));
}

export function blogArticlesFor(lang: Locale) {
  return blogArticles.filter((a) => a.lang === lang);
}

export function blogPath(a: BlogArticle) {
  return a.lang === 'en' ? `/en/blog/${a.slug}` : `/${a.lang}/blog/${a.slug}`;
}
