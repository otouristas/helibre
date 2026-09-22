import { AIRPORTS, DESTINATIONS, FIXED_PRICES, PRICED_ROUTES, SHARED_SHUTTLE, type PricedRoute } from '@/config/seoFacts';
import { PRICED_ROUTE_URLS, PRICE_LIST_URLS, SHARED_SHUTTLE_URLS, type PricedLang } from '@/config/pricedRoutePages';
import type { SEOPage } from '@/config/seoPages';
import { UI, howItWorksSection, includedSection, legText, pickFaqs } from './shared';
import type { AlternateMap } from '@/lib/seo';
import type { SeoLandingContent, SeoLink, SeoSection, SeoTable } from './types';

const HOME: Record<PricedLang, string> = { en: '/', nl: '/nl', fr: '/fr' };
const SERVICE: Record<PricedLang, { name: string; url: string }> = {
  en: { name: 'Airport transfers', url: '/services/airport' },
  nl: { name: 'Luchthavenvervoer', url: '/nl/services/airport' },
  fr: { name: 'Navettes aéroport', url: '/fr/services/airport' },
};
const FROM_NAME: Record<PricedLang, Record<'brussels' | 'crl', string>> = {
  en: { brussels: 'Brussels', crl: 'Charleroi Airport' },
  nl: { brussels: 'Brussel', crl: 'Charleroi Airport' },
  fr: { brussels: 'Bruxelles', crl: 'l’aéroport de Charleroi' },
};
const FROM_SCOPE: Record<PricedLang, Record<'brussels' | 'crl', string>> = {
  en: { brussels: 'any address in Brussels or Brussels Airport (Zaventem)', crl: 'the terminal of Brussels South Charleroi Airport' },
  nl: { brussels: 'elk adres in Brussel of Brussels Airport (Zaventem)', crl: 'de terminal van Brussels South Charleroi Airport' },
  fr: { brussels: 'toute adresse à Bruxelles ou Brussels Airport (Zaventem)', crl: 'le terminal de Brussels South Charleroi Airport' },
};
/** Country name as used after "from" / "vanuit" / "depuis" in running text. */
const COUNTRY_NAME: Record<PricedLang, Record<string, string>> = {
  en: { BE: 'Belgium', FR: 'France', NL: 'the Netherlands', DE: 'Germany', LU: 'Luxembourg' },
  nl: { BE: 'België', FR: 'Frankrijk', NL: 'Nederland', DE: 'Duitsland', LU: 'Luxemburg' },
  fr: { BE: 'la Belgique', FR: 'la France', NL: 'les Pays-Bas', DE: 'l’Allemagne', LU: 'le Luxembourg' },
};

function tierTable(lang: PricedLang, route: PricedRoute, caption: string): SeoTable {
  const ui = UI[lang];
  return { caption, headers: [ui.passengers, ui.price], rows: route.tiers.map((t) => [t.pax, `${t.price}€`]) };
}

function siblingLinks(lang: PricedLang, current: PricedRoute): SeoLink[] {
  return PRICED_ROUTES.filter((r) => r.key !== current.key && PRICED_ROUTE_URLS[r.key]?.[lang])
    .filter((r) => (current.from === 'crl' ? r.from === 'crl' : r.from === 'brussels' && DESTINATIONS[r.to].country !== 'BE'))
    .map((r) => {
      const d = DESTINATIONS[r.to];
      const from = FROM_NAME[lang][r.from];
      const to = d.name[lang].replace(/\s*\(.*\)$/, '');
      const label = lang === 'en' ? `${from} to ${to} from ${r.tiers[0].price}€` : lang === 'nl' ? `${from} – ${to} vanaf ${r.tiers[0].price}€` : `${from} – ${to} dès ${r.tiers[0].price}€`;
      return { href: PRICED_ROUTE_URLS[r.key][lang]!, label };
    });
}

export function buildPricedRoute(page: SEOPage, lang: PricedLang, route: PricedRoute): SeoLandingContent {
  const ui = UI[lang];
  const d = DESTINATIONS[route.to];
  const isCrl = route.from === 'crl';
  const leg = isCrl ? d.fromCRL! : d.fromBrussels;
  const from = FROM_NAME[lang][route.from];
  const to = d.name[lang];
  const scope = d.scope[lang];
  const [t1, t2] = route.tiers;
  const abroad = d.country !== 'BE';
  const isAirport = Boolean(d.iata);
  const F = FIXED_PRICES;
  const country = COUNTRY_NAME[lang][d.country];

  let lead: string;
  let intro: string[];
  let priceSection: SeoSection;
  let travel: SeoSection;
  let dropOff: SeoSection;
  let returnSection: SeoSection;
  let compare: SeoSection;
  let faqs: { question: string; answer: string }[];

  if (lang === 'en') {
    lead = `A private Helicro minivan from ${FROM_SCOPE.en[route.from]} to ${scope} costs a fixed ${t1.price}€ for 1 to 3 passengers and ${t2.price}€ for 4 to 8 passengers, per vehicle, in either direction. The ${leg.km} km drive takes ${leg.minMin} to ${leg.maxMin} minutes outside peak hours, with luggage, child seats${abroad ? ', tolls' : ''} and VAT included.`;
    intro = [
      abroad
        ? `${to} is a common destination for Belgian travellers when a flight, a meeting or a family visit is easier from ${country}, and the alternatives are rarely convenient: a train with one or two changes and luggage on the platform, or a hire car with one-way fees and foreign parking. Helicro drives the whole route in one Ford minivan with Belgian plates, no change of vehicle at the border and one price agreed in writing before departure.`
        : isCrl
          ? `Charleroi Airport has no railway station, so reaching ${to} from a Ryanair or Wizz Air flight means the Flibco bus to a city it may not serve, or a train with a bus connection at Charleroi-Central. A Helicro driver waits inside the terminal with your name, loads the luggage and drives straight to ${scope} for a price fixed per vehicle, so a family of four pays ${t2.price}€ in total rather than four tickets plus a taxi.`
          : `Between Brussels and ${to} the train is fast for one person with hand luggage, but for a family, a group with suitcases or a late evening return, a door-to-door minivan at ${t1.price}€ per vehicle is usually simpler and often cheaper. The price covers ${scope}, at any hour, with the same driver both ways if you book a return.`,
      'Every transfer is driven by Gerasimos or a licensed Helicro driver with more than 30 years of accident-free driving, in a Ford Transit Custom or Tourneo Custom for 8 passengers and 8 large suitcases. There is no night surcharge and no surprise at the end: the price you confirm is the price you pay.',
    ];
    priceSection = {
      h2: `Fixed price from ${from} to ${to.replace(/\s*\(.*\)$/, '')}`,
      paragraphs: [`${ui.perVehicle} The same rate applies for the return leg and at night. Book outbound and return together and you receive one total in writing.`],
      table: tierTable(lang, route, `${from} (${FROM_SCOPE.en[route.from]}) to ${scope}, per vehicle.`),
    };
    travel = {
      h2: ui.travelInfo,
      paragraphs: [
        `${from} to ${to}: ${legText(lang, leg.km, leg.minMin, leg.maxMin)}, via the ${d.road.en}. ${abroad ? 'Motorway tolls and the driver’s return are included in the fixed price, and the driver plans a short comfort stop on drives over two hours.' : 'Your driver checks live traffic before departure and proposes a pickup time with a buffer for roadworks.'}${isAirport ? ' For a departing flight we aim to drop you at the terminal at least 2 hours before a European departure and 3 hours before long-haul.' : ''}`,
      ],
    };
    dropOff = {
      h2: `Where the fixed price takes you in ${to.replace(/\s*\(.*\)$/, '')}`,
      paragraphs: [`The price covers ${scope}${d.iata ? ` (IATA ${d.iata})` : ''}. Extra stops on the way, for example to collect a second party, are ${F.extraStop}€ each. Tell us the exact address or terminal when booking and the driver drops you at the door.`],
    };
    returnSection = {
      h2: isAirport ? `Pickup at ${to.replace(/\s*\(.*\)$/, '')} on the way back` : `Return transfer from ${to.replace(/\s*\(.*\)$/, '')}`,
      paragraphs: [
        isAirport
          ? `On the return your driver tracks the flight, waits in the arrivals hall with a name sign and gives you ${F.waitingFreeMinutes} minutes free after landing; after that waiting is ${F.waitingPerHour}€ per hour. The fixed price is identical in both directions.`
          : `For the way back the driver collects you at the agreed address or station at the agreed time, tracks train or event schedules where relevant, and the fixed price is identical in both directions.`,
      ],
    };
    compare = {
      h2: abroad ? 'Private transfer, train or rental car?' : 'Private transfer, train or bus?',
      bullets: abroad
        ? [
            `Train: usually 1 or 2 changes, tickets per person, luggage on the platform and a taxi at the far end; competitive only for solo travellers.`,
            `Rental car: one-way fees, fuel, tolls and parking abroad, plus driving after a flight; rarely cheaper than ${t1.price}€ for a group.`,
            `Helicro minivan: ${t1.price}€ to ${t2.price}€ for the whole vehicle, door to door, driver included, free cancellation up to ${F.cancellationHours} hours before.`,
          ]
        : [
            `Train: cheapest for one person, but station to station and per ticket; with luggage and children the last kilometre becomes the hard part.`,
            `Shuttle bus: fixed stops and departure times; you still need a taxi at both ends.`,
            `Helicro minivan: ${t1.price}€ to ${t2.price}€ for the whole vehicle, door to door, at any hour, free cancellation up to ${F.cancellationHours} hours before.`,
          ],
    };
    faqs = [
      { question: `How much is a taxi from ${from} to ${to.replace(/\s*\(.*\)$/, '')}?`, answer: `Helicro charges a fixed ${t1.price}€ for 1 to 3 passengers and ${t2.price}€ for 4 to 8 passengers, per vehicle, for the ${leg.km} km from ${FROM_SCOPE.en[route.from]} to ${scope}. Luggage, child seats${abroad ? ', tolls' : ''} and VAT are included.` },
      { question: `How long does the drive from ${from} to ${to.replace(/\s*\(.*\)$/, '')} take?`, answer: `${legText(lang, leg.km, leg.minMin, leg.maxMin)}. Allow extra time on weekday mornings and Friday afternoons; your driver proposes a departure time based on live traffic.` },
      { question: 'Is the price the same for the return trip?', answer: `Yes. ${to.replace(/\s*\(.*\)$/, '')} to ${from} costs the same fixed amount, and a return booked together is confirmed as one total.` },
      ...(abroad ? [{ question: 'Do I need documents for the border?', answer: 'EU citizens need only an ID card or passport. There is no border stop inside the Schengen area; the fixed price already covers tolls and the driver’s return to Belgium.' }] : []),
    ];
  } else if (lang === 'nl') {
    lead = `Een privé minivan van Helicro van ${FROM_SCOPE.nl[route.from]} naar ${scope} kost een vaste ${t1.price}€ voor 1 tot 3 passagiers en ${t2.price}€ voor 4 tot 8 passagiers, per voertuig, in beide richtingen. De rit van ${leg.km} km duurt ${leg.minMin} tot ${leg.maxMin} minuten buiten de spits, inclusief bagage, kinderzitjes${abroad ? ', tol' : ''} en btw.`;
    intro = [
      abroad
        ? `${to} is een vaste bestemming voor Belgische reizigers wanneer een vlucht, vergadering of familiebezoek makkelijker vanuit ${country} vertrekt, en de alternatieven zijn zelden comfortabel: een trein met een of twee overstappen en koffers op het perron, of een huurwagen met eenrichtingskosten en buitenlands parkeren. Helicro rijdt de hele route in één Ford minivan met Belgische nummerplaat, zonder overstap aan de grens en met één prijs die schriftelijk vastligt voor vertrek.`
        : isCrl
          ? `Charleroi Airport heeft geen treinstation, dus ${to} bereiken na een Ryanair- of Wizz Air-vlucht betekent de Flibco-bus naar een stad die misschien niet de uwe is, of een trein met busovervstap in Charleroi-Centraal. Een Helicro-chauffeur wacht in de terminal met uw naam, laadt de koffers in en rijdt rechtstreeks naar ${scope} tegen een vaste prijs per voertuig: een gezin van vier betaalt ${t2.price}€ in totaal in plaats van vier tickets plus een taxi.`
          : `Tussen Brussel en ${to} is de trein snel voor één persoon met handbagage, maar voor een gezin, een groep met koffers of een late terugrit is een minivan van deur tot deur voor ${t1.price}€ per voertuig meestal eenvoudiger en vaak goedkoper. De prijs geldt voor ${scope}, op elk uur, met dezelfde chauffeur heen en terug als u een retour boekt.`,
      'Elke rit wordt gereden door Gerasimos of een gelicentieerde Helicro-chauffeur met meer dan 30 jaar schadevrije ervaring, in een Ford Transit Custom of Tourneo Custom voor 8 passagiers en 8 grote koffers. Er is geen nachttoeslag en geen verrassing achteraf: de prijs die u bevestigt is de prijs die u betaalt.',
    ];
    priceSection = {
      h2: `Vaste prijs ${from} – ${to.replace(/\s*\(.*\)$/, '')}`,
      paragraphs: [`${ui.perVehicle} Hetzelfde tarief geldt voor de terugrit en ’s nachts. Boek heen en terug samen en u ontvangt één totaalprijs op papier.`],
      table: tierTable(lang, route, `${from} (${FROM_SCOPE.nl[route.from]}) naar ${scope}, per voertuig.`),
    };
    travel = {
      h2: ui.travelInfo,
      paragraphs: [
        `${from} – ${to}: ${legText(lang, leg.km, leg.minMin, leg.maxMin)}, via de ${d.road.nl}. ${abroad ? 'Tolwegen en de terugrit van de chauffeur zitten in de vaste prijs; bij ritten van meer dan twee uur plant de chauffeur een korte pauze.' : 'Uw chauffeur checkt het verkeer voor vertrek en stelt een ophaaltijd voor met marge voor wegenwerken.'}${isAirport ? ' Voor een vertrekkende vlucht zetten we u minstens 2 uur voor een Europese vlucht en 3 uur voor een intercontinentale vlucht af aan de terminal.' : ''}`,
      ],
    };
    dropOff = {
      h2: `Waar de vaste prijs u brengt in ${to.replace(/\s*\(.*\)$/, '')}`,
      paragraphs: [`De prijs geldt voor ${scope}${d.iata ? ` (IATA ${d.iata})` : ''}. Extra stops onderweg, bijvoorbeeld om een tweede groep op te halen, kosten ${F.extraStop}€ per stop. Geef bij het boeken het exacte adres of de terminal door en de chauffeur zet u aan de deur af.`],
    };
    returnSection = {
      h2: isAirport ? `Ophaling in ${to.replace(/\s*\(.*\)$/, '')} op de terugweg` : `Terugrit vanuit ${to.replace(/\s*\(.*\)$/, '')}`,
      paragraphs: [
        isAirport
          ? `Op de terugweg volgt uw chauffeur de vlucht, wacht in de aankomsthal met een naambordje en geeft u ${F.waitingFreeMinutes} minuten gratis na de landing; daarna kost wachten ${F.waitingPerHour}€ per uur. De vaste prijs is in beide richtingen dezelfde.`
          : `Voor de terugweg haalt de chauffeur u op het afgesproken adres of station op het afgesproken uur op; de vaste prijs is in beide richtingen dezelfde.`,
      ],
    };
    compare = {
      h2: abroad ? 'Privévervoer, trein of huurwagen?' : 'Privévervoer, trein of bus?',
      bullets: abroad
        ? [
            'Trein: meestal 1 of 2 overstappen, tickets per persoon, koffers op het perron en een taxi aan de andere kant; enkel interessant voor alleenreizigers.',
            `Huurwagen: eenrichtingskosten, brandstof, tol en parkeren in het buitenland, plus zelf rijden na een vlucht; zelden goedkoper dan ${t1.price}€ voor een groep.`,
            `Helicro minivan: ${t1.price}€ tot ${t2.price}€ voor het hele voertuig, van deur tot deur, chauffeur inbegrepen, gratis annuleren tot ${F.cancellationHours} uur vooraf.`,
          ]
        : [
            'Trein: het goedkoopst voor één persoon, maar van station tot station en per ticket; met bagage en kinderen wordt de laatste kilometer het lastigste deel.',
            'Shuttlebus: vaste haltes en vertrektijden; u hebt nog altijd een taxi nodig aan beide kanten.',
            `Helicro minivan: ${t1.price}€ tot ${t2.price}€ voor het hele voertuig, van deur tot deur, op elk uur, gratis annuleren tot ${F.cancellationHours} uur vooraf.`,
          ],
    };
    faqs = [
      { question: `Wat kost een taxi van ${from} naar ${to.replace(/\s*\(.*\)$/, '')}?`, answer: `Helicro rekent een vaste ${t1.price}€ voor 1 tot 3 passagiers en ${t2.price}€ voor 4 tot 8 passagiers, per voertuig, voor de ${leg.km} km van ${FROM_SCOPE.nl[route.from]} naar ${scope}. Bagage, kinderzitjes${abroad ? ', tol' : ''} en btw zijn inbegrepen.` },
      { question: `Hoe lang duurt de rit van ${from} naar ${to.replace(/\s*\(.*\)$/, '')}?`, answer: `${legText(lang, leg.km, leg.minMin, leg.maxMin)}. Reken extra tijd op weekdagen ’s ochtends en op vrijdagnamiddag; uw chauffeur stelt een vertrekuur voor op basis van het live verkeer.` },
      { question: 'Is de prijs dezelfde voor de terugrit?', answer: `Ja. ${to.replace(/\s*\(.*\)$/, '')} – ${from} kost hetzelfde vaste bedrag, en een samen geboekte retour wordt als één totaal bevestigd.` },
      ...(abroad ? [{ question: 'Heb ik documenten nodig voor de grens?', answer: 'EU-burgers hebben enkel een identiteitskaart of paspoort nodig. Binnen de Schengenzone is er geen grensstop; de vaste prijs dekt al de tol en de terugrit van de chauffeur naar België.' }] : []),
    ];
  } else {
    lead = `Un minivan privé Helicro depuis ${FROM_SCOPE.fr[route.from]} vers ${scope} coûte un prix fixe de ${t1.price}€ pour 1 à 3 passagers et ${t2.price}€ pour 4 à 8 passagers, par véhicule, dans les deux sens. Le trajet de ${leg.km} km prend ${leg.minMin} à ${leg.maxMin} minutes hors heures de pointe, bagages, sièges enfants${abroad ? ', péages' : ''} et TVA compris.`;
    intro = [
      abroad
        ? `${to} est une destination fréquente pour les voyageurs belges lorsqu’un vol, une réunion ou une visite familiale est plus simple depuis ${country}, et les alternatives sont rarement pratiques : un train avec une ou deux correspondances et les valises sur le quai, ou une voiture de location avec frais d’aller simple et parking à l’étranger. Helicro effectue tout le trajet dans un seul minivan Ford immatriculé en Belgique, sans changement de véhicule à la frontière, à un prix convenu par écrit avant le départ.`
        : isCrl
          ? `L’aéroport de Charleroi n’a pas de gare : rejoindre ${to} après un vol Ryanair ou Wizz Air signifie le bus Flibco vers une ville qui n’est peut-être pas la vôtre, ou un train avec correspondance en bus à Charleroi-Central. Un chauffeur Helicro vous attend dans le terminal avec votre nom, charge les valises et roule directement vers ${scope} pour un prix fixé par véhicule : une famille de quatre paie ${t2.price}€ au total plutôt que quatre billets plus un taxi.`
          : `Entre Bruxelles et ${to}, le train est rapide pour une personne avec un bagage à main, mais pour une famille, un groupe avec des valises ou un retour tardif, un minivan porte à porte à ${t1.price}€ par véhicule est généralement plus simple et souvent moins cher. Le prix couvre ${scope}, à toute heure, avec le même chauffeur à l’aller et au retour si vous réservez les deux.`,
      'Chaque trajet est assuré par Gerasimos ou un chauffeur agréé Helicro, plus de 30 ans de conduite sans accident, en Ford Transit Custom ou Tourneo Custom pour 8 passagers et 8 grandes valises. Pas de supplément de nuit ni de surprise à l’arrivée : le prix confirmé est le prix payé.',
    ];
    priceSection = {
      h2: `Prix fixe ${from.replace(/^l’/, 'L’')} – ${to.replace(/\s*\(.*\)$/, '')}`,
      paragraphs: [`${ui.perVehicle} Le même tarif s’applique au retour et la nuit. Réservez l’aller et le retour ensemble et vous recevez un total unique par écrit.`],
      table: tierTable(lang, route, `${from.replace(/^l’/, 'L’')} (${FROM_SCOPE.fr[route.from]}) vers ${scope}, par véhicule.`),
    };
    travel = {
      h2: ui.travelInfo,
      paragraphs: [
        `${from.replace(/^l’/, 'L’')} – ${to} : ${legText(lang, leg.km, leg.minMin, leg.maxMin)}, par ${d.road.fr}. ${abroad ? 'Les péages et le retour du chauffeur sont compris dans le prix fixe ; sur les trajets de plus de deux heures, le chauffeur prévoit une courte pause.' : 'Votre chauffeur vérifie le trafic en direct avant le départ et propose une heure de prise en charge avec une marge pour les travaux.'}${isAirport ? ' Pour un vol au départ, nous vous déposons au terminal au moins 2 heures avant un vol européen et 3 heures avant un long-courrier.' : ''}`,
      ],
    };
    dropOff = {
      h2: `Où le prix fixe vous emmène à ${to.replace(/\s*\(.*\)$/, '')}`,
      paragraphs: [`Le prix couvre ${scope}${d.iata ? ` (IATA ${d.iata})` : ''}. Les arrêts supplémentaires en route, par exemple pour prendre un second groupe, sont facturés ${F.extraStop}€ chacun. Indiquez l’adresse exacte ou le terminal à la réservation et le chauffeur vous dépose à la porte.`],
    };
    returnSection = {
      h2: isAirport ? `Prise en charge à ${to.replace(/\s*\(.*\)$/, '')} au retour` : `Trajet retour depuis ${to.replace(/\s*\(.*\)$/, '')}`,
      paragraphs: [
        isAirport
          ? `Au retour, votre chauffeur suit le vol, vous attend dans le hall des arrivées avec une pancarte à votre nom et vous accorde ${F.waitingFreeMinutes} minutes gratuites après l’atterrissage ; ensuite l’attente est facturée ${F.waitingPerHour}€ par heure. Le prix fixe est identique dans les deux sens.`
          : `Pour le retour, le chauffeur vous reprend à l’adresse ou à la gare convenue à l’heure convenue ; le prix fixe est identique dans les deux sens.`,
      ],
    };
    compare = {
      h2: abroad ? 'Navette privée, train ou voiture de location ?' : 'Navette privée, train ou bus ?',
      bullets: abroad
        ? [
            'Train : généralement 1 ou 2 correspondances, billets par personne, valises sur le quai et taxi à l’arrivée ; intéressant seulement en solo.',
            `Voiture de location : frais d’aller simple, carburant, péages et parking à l’étranger, plus la conduite après un vol ; rarement moins cher que ${t1.price}€ pour un groupe.`,
            `Minivan Helicro : ${t1.price}€ à ${t2.price}€ pour tout le véhicule, porte à porte, chauffeur compris, annulation gratuite jusqu’à ${F.cancellationHours} h avant.`,
          ]
        : [
            'Train : le moins cher pour une personne, mais de gare à gare et par billet ; avec bagages et enfants, le dernier kilomètre devient la partie pénible.',
            'Bus navette : arrêts et horaires fixes ; il faut encore un taxi aux deux bouts.',
            `Minivan Helicro : ${t1.price}€ à ${t2.price}€ pour tout le véhicule, porte à porte, à toute heure, annulation gratuite jusqu’à ${F.cancellationHours} h avant.`,
          ],
    };
    faqs = [
      { question: `Combien coûte un taxi de ${from} à ${to.replace(/\s*\(.*\)$/, '')} ?`, answer: `Helicro applique un prix fixe de ${t1.price}€ pour 1 à 3 passagers et ${t2.price}€ pour 4 à 8 passagers, par véhicule, pour les ${leg.km} km entre ${FROM_SCOPE.fr[route.from]} et ${scope}. Bagages, sièges enfants${abroad ? ', péages' : ''} et TVA sont compris.` },
      { question: `Combien de temps dure le trajet ${from.replace(/^l’/, '')} – ${to.replace(/\s*\(.*\)$/, '')} ?`, answer: `${legText(lang, leg.km, leg.minMin, leg.maxMin)}. Prévoyez plus de temps les matins de semaine et le vendredi après-midi ; votre chauffeur propose une heure de départ selon le trafic en direct.` },
      { question: 'Le prix est-il le même pour le retour ?', answer: `Oui. ${to.replace(/\s*\(.*\)$/, '')} – ${from.replace(/^l’/, '')} coûte le même montant fixe, et un aller-retour réservé ensemble est confirmé en un seul total.` },
      ...(abroad ? [{ question: 'Faut-il des documents pour la frontière ?', answer: 'Les citoyens de l’UE n’ont besoin que d’une carte d’identité ou d’un passeport. Il n’y a pas d’arrêt à la frontière dans l’espace Schengen ; le prix fixe couvre déjà les péages et le retour du chauffeur en Belgique.' }] : []),
    ];
  }

  const urls = PRICED_ROUTE_URLS[route.key] ?? {};
  const alternates: AlternateMap = { ...urls };

  const priceListLink: SeoLink = { href: PRICE_LIST_URLS[lang], label: lang === 'en' ? 'Full price list' : lang === 'nl' ? 'Volledige prijslijst' : 'Liste complète des tarifs' };
  const hubs: SeoLink[] =
    lang === 'en'
      ? [
          { href: AIRPORTS.CRL.hub.en!, label: 'Charleroi Airport transfers' },
          { href: AIRPORTS.BRU.hub.en!, label: 'Brussels Airport (Zaventem) transfers' },
          { href: SHARED_SHUTTLE_URLS.en, label: `Shared shuttle Brussels – Charleroi from ${SHARED_SHUTTLE.perPassengerDay}€` },
        ]
      : lang === 'nl'
        ? [
            { href: AIRPORTS.CRL.hub.nl!, label: 'Luchthavenvervoer Charleroi' },
            { href: AIRPORTS.BRU.hub.nl!, label: 'Luchthavenvervoer Zaventem' },
            { href: SHARED_SHUTTLE_URLS.nl, label: `Gedeelde shuttle Brussel – Charleroi vanaf ${SHARED_SHUTTLE.perPassengerDay}€` },
          ]
        : [
            { href: AIRPORTS.CRL.hub.fr!, label: 'Navette aéroport Charleroi' },
            { href: AIRPORTS.BRU.hub.fr!, label: 'Navette aéroport Bruxelles (Zaventem)' },
            { href: SHARED_SHUTTLE_URLS.fr, label: `Navette partagée Bruxelles – Charleroi dès ${SHARED_SHUTTLE.perPassengerDay}€` },
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
    sections: [priceSection, travel, dropOff, returnSection, howItWorksSection(lang), includedSection(lang), compare],
    faqs: [...faqs, ...pickFaqs(lang, ['cancel', 'seats', 'pay', 'luggage'])],
    breadcrumbs: [
      { name: ui.home, url: HOME[lang] },
      { name: SERVICE[lang].name, url: SERVICE[lang].url },
      { name: page.h1, url: page.url },
    ],
    related: [
      { title: ui.routes, links: siblingLinks(lang, route).slice(0, 8) },
      { title: ui.hubs, links: hubs },
      { title: ui.services, links: [priceListLink, { href: lang === 'en' ? '/pricing' : `/${lang}/pricing`, label: ui.fixedPrices }, { href: lang === 'en' ? '/faq' : `/${lang}/faq`, label: ui.faq }] },
    ],
    alternates,
    schema: {
      serviceName: page.h1,
      serviceType: abroad ? 'Long-distance private transfer' : 'Airport transfer',
      areaServed: [
        { type: 'City', name: isCrl ? 'Gosselies' : 'Brussels' },
        { type: 'City', name: DESTINATIONS[route.to].name.en.replace(/\s*\(.*\)$/, '') },
        { type: 'Country', name: 'Belgium' },
      ],
      airport: isCrl ? 'CRL' : undefined,
      offers: route.tiers.map((t) => ({ name: `${FROM_NAME.en[route.from]} to ${DESTINATIONS[route.to].name.en}, ${t.pax} passengers`, price: t.price })),
    },
    cta: { headline: ui.ctaHeadline, text: ui.ctaText },
    image: abroad ? '/images/door-to-door-transportation-4k.jpg' : isCrl ? '/images/airport-1.jpg' : '/images/car-1.jpg',
  };
}

const SHARED_DAY = [25, 50, 75, 90, 110, 120, 130];
const SHARED_NIGHT = [30, 60, 80, 100, 115, 125, 135];

export function buildSharedShuttle(page: SEOPage, lang: PricedLang): SeoLandingContent {
  const ui = UI[lang];
  const S = SHARED_SHUTTLE;
  const F = FIXED_PRICES;
  const crl = FIXED_PRICES.brusselsToCRL;
  const leg = { km: 60, minMin: 55, maxMin: 70 };

  const table: SeoTable = {
    caption:
      lang === 'en'
        ? 'Shared shuttle, per group, Brussels (any address) to Charleroi Airport. Day 06:00–22:00, night 22:00–06:00.'
        : lang === 'nl'
          ? 'Gedeelde shuttle, per groep, Brussel (elk adres) naar Charleroi Airport. Dag 06:00–22:00, nacht 22:00–06:00.'
          : 'Navette partagée, par groupe, Bruxelles (toute adresse) vers l’aéroport de Charleroi. Jour 06h00–22h00, nuit 22h00–06h00.',
    headers: [ui.passengers, lang === 'en' ? 'Day' : lang === 'nl' ? 'Dag' : 'Jour', lang === 'en' ? 'Night' : lang === 'nl' ? 'Nacht' : 'Nuit'],
    rows: SHARED_DAY.map((p, i) => [`${i + 1}`, `${p}€`, `${SHARED_NIGHT[i]}€`]),
  };

  let lead: string;
  let intro: string[];
  let sections: SeoSection[];
  let faqs: { question: string; answer: string }[];

  if (lang === 'en') {
    lead = `Helicro’s shared shuttle takes you from any address in Brussels to Charleroi Airport for ${S.perPassengerDay}€ per person by day and ${S.perPassengerNight}€ at night, door to terminal, with luggage included and your flight tracked. You share the minivan with a few other passengers on the same flight window; a private transfer for the same route starts at ${crl[0].price}€ per vehicle.`;
    intro = [
      'The Flibco bus is the cheapest way to Charleroi if you are next to Brussels-Midi with hand luggage. Everyone else has to reach the station first, with suitcases, at the time the coach dictates. The shared shuttle collects you at your door, groups you with passengers travelling in the same time slot, and drops the whole van in front of the terminal. It is the middle option: the comfort of a pickup at home at a price close to the bus.',
      `Shared shuttles run only on the Brussels to Charleroi Airport corridor, in both directions, with a maximum of ${S.maxPassengers} passengers per van. Pickups are confirmed the evening before with a 15-minute window, and the van makes at most two or three stops before the motorway.`,
    ];
    sections = [
      { h2: 'Shared shuttle prices per person and per group', paragraphs: ['Prices are per group of passengers booked together. Larger groups get a lower price per head; from 4 people the private minivan at 110€ becomes the better choice because you leave when you want and stop nowhere.'], table },
      { h2: 'How the shared shuttle works', steps: [
        { title: '1. Book with your flight number', text: 'Send your address, flight number and number of passengers on WhatsApp or the form. We reply with the price per person and the pickup window.' },
        { title: '2. Pickup at your door', text: 'The evening before you receive a 15-minute pickup window. The driver rings the bell, loads the luggage and collects the other passengers on the way.' },
        { title: '3. Terminal drop-off', text: `The van stops at the Kiss & Ride in front of the Charleroi terminal at least 2 hours before the earliest departure on board. On arrivals, the driver waits inside the terminal with a Helicro sign and gives every flight ${F.waitingFreeMinutes} minutes free.` },
      ] },
      { h2: 'Shared shuttle, Flibco bus or private transfer?', bullets: [
        'Flibco: about 17 to 20€ per person, only from Brussels-Midi, no pickup, one bag limit, leaves without you.',
        `Helicro shared shuttle: ${S.perPassengerDay}€ per person by day, pickup at home, luggage and child seats included, small detours for other passengers.`,
        `Helicro private transfer: ${crl[0].price}€ for 1, ${crl[1].price}€ for 2, ${crl[3].price}€ for 4 passengers, your own van, no stops, departure at the minute you choose.`,
      ] },
      { h2: ui.travelInfo, paragraphs: [`Brussels to Charleroi Airport is ${legText(lang, leg.km, leg.minMin, leg.maxMin)} via the E19; with two or three pickups allow 90 minutes door to door. Night departures (22:00 to 06:00) cost ${S.perPassengerNight}€ per person.`] },
      includedSection(lang),
    ];
    faqs = [
      { question: 'How much is the shared shuttle from Brussels to Charleroi Airport?', answer: `${S.perPassengerDay}€ per person between 06:00 and 22:00 and ${S.perPassengerNight}€ per person at night, pickup at your Brussels address included. Two people pay ${SHARED_DAY[1]}€, three pay ${SHARED_DAY[2]}€.` },
      { question: 'How many stops does the shared shuttle make?', answer: `At most two or three pickups in Brussels before joining the E19, and a maximum of ${S.maxPassengers} passengers per van. Your pickup window is confirmed the evening before.` },
      { question: 'Can I book a shared shuttle from Charleroi Airport to Brussels?', answer: 'Yes, in both directions. On arrival the driver waits inside the terminal with a Helicro sign and drops each passenger at their own address in Brussels.' },
      { question: 'When is a private transfer better than the shared shuttle?', answer: `From 4 passengers the private minivan (110€ for 4, 160€ for 8) costs about the same per head and gives you your own van with no stops. It is also the right choice for very early flights or if you want to leave at an exact time.` },
    ];
  } else if (lang === 'nl') {
    lead = `De gedeelde shuttle van Helicro brengt u van elk adres in Brussel naar Charleroi Airport voor ${S.perPassengerDay}€ per persoon overdag en ${S.perPassengerNight}€ ’s nachts, van deur tot terminal, bagage inbegrepen en met vluchtopvolging. U deelt de minivan met enkele andere passagiers in hetzelfde tijdvenster; een privétransfer op dezelfde route start bij ${crl[0].price}€ per voertuig.`;
    intro = [
      'De Flibco-bus is de goedkoopste manier naar Charleroi als u naast Brussel-Zuid woont en enkel handbagage hebt. Alle anderen moeten eerst met koffers naar het station, op het uur dat de bus bepaalt. De gedeelde shuttle haalt u aan huis op, groepeert u met passagiers in hetzelfde tijdvenster en zet de hele wagen voor de terminal af. Het is de middenweg: het comfort van ophaling thuis voor een prijs dicht bij die van de bus.',
      `Gedeelde shuttles rijden enkel op de as Brussel – Charleroi Airport, in beide richtingen, met maximaal ${S.maxPassengers} passagiers per wagen. De ophaling wordt de avond voordien bevestigd met een venster van 15 minuten, en de wagen maakt hoogstens twee of drie stops voor de snelweg.`,
    ];
    sections = [
      { h2: 'Prijzen gedeelde shuttle per persoon en per groep', paragraphs: ['De prijzen gelden per samen geboekte groep. Grotere groepen betalen minder per hoofd; vanaf 4 personen wordt de privé minivan aan 110€ de betere keuze, omdat u vertrekt wanneer u wilt en nergens stopt.'], table },
      { h2: 'Zo werkt de gedeelde shuttle', steps: [
        { title: '1. Boek met uw vluchtnummer', text: 'Stuur uw adres, vluchtnummer en aantal passagiers via WhatsApp of het formulier. U krijgt de prijs per persoon en het ophaalvenster.' },
        { title: '2. Ophaling aan huis', text: 'De avond voordien ontvangt u een ophaalvenster van 15 minuten. De chauffeur belt aan, laadt de bagage in en haalt onderweg de andere passagiers op.' },
        { title: '3. Afzetten aan de terminal', text: `De wagen stopt aan de Kiss & Ride voor de terminal van Charleroi, minstens 2 uur voor de vroegste vlucht aan boord. Bij aankomst wacht de chauffeur in de terminal met een Helicro-bordje en krijgt elke vlucht ${F.waitingFreeMinutes} minuten gratis.` },
      ] },
      { h2: 'Gedeelde shuttle, Flibco-bus of privétransfer?', bullets: [
        'Flibco: ongeveer 17 tot 20€ per persoon, enkel vanaf Brussel-Zuid, geen ophaling, één koffer, vertrekt zonder u.',
        `Helicro gedeelde shuttle: ${S.perPassengerDay}€ per persoon overdag, ophaling thuis, bagage en kinderzitjes inbegrepen, kleine omweg voor andere passagiers.`,
        `Helicro privétransfer: ${crl[0].price}€ voor 1, ${crl[1].price}€ voor 2, ${crl[3].price}€ voor 4 passagiers, eigen wagen, geen stops, vertrek op de minuut die u kiest.`,
      ] },
      { h2: ui.travelInfo, paragraphs: [`Brussel – Charleroi Airport is ${legText(lang, leg.km, leg.minMin, leg.maxMin)} via de E19; met twee of drie ophalingen rekent u 90 minuten van deur tot deur. Nachtvertrekken (22u tot 6u) kosten ${S.perPassengerNight}€ per persoon.`] },
      includedSection(lang),
    ];
    faqs = [
      { question: 'Wat kost de gedeelde shuttle van Brussel naar Charleroi Airport?', answer: `${S.perPassengerDay}€ per persoon tussen 6u en 22u en ${S.perPassengerNight}€ per persoon ’s nachts, ophaling aan uw Brussels adres inbegrepen. Twee personen betalen ${SHARED_DAY[1]}€, drie personen ${SHARED_DAY[2]}€.` },
      { question: 'Hoeveel stops maakt de gedeelde shuttle?', answer: `Hoogstens twee of drie ophalingen in Brussel voor de E19, en maximaal ${S.maxPassengers} passagiers per wagen. Uw ophaalvenster wordt de avond voordien bevestigd.` },
      { question: 'Kan ik ook een gedeelde shuttle van Charleroi Airport naar Brussel boeken?', answer: 'Ja, in beide richtingen. Bij aankomst wacht de chauffeur in de terminal met een Helicro-bordje en zet elke passagier af op zijn eigen adres in Brussel.' },
      { question: 'Wanneer is een privétransfer beter dan de gedeelde shuttle?', answer: 'Vanaf 4 passagiers kost de privé minivan (110€ voor 4, 160€ voor 8) ongeveer evenveel per hoofd en hebt u uw eigen wagen zonder stops. Ook voor heel vroege vluchten of een exact vertrekuur is privé de juiste keuze.' },
    ];
  } else {
    lead = `La navette partagée Helicro vous emmène de toute adresse à Bruxelles jusqu’à l’aéroport de Charleroi pour ${S.perPassengerDay}€ par personne le jour et ${S.perPassengerNight}€ la nuit, de la porte au terminal, bagages compris et vol suivi. Vous partagez le minivan avec quelques passagers du même créneau ; une navette privée sur le même trajet démarre à ${crl[0].price}€ par véhicule.`;
    intro = [
      'Le bus Flibco est le moyen le moins cher d’aller à Charleroi si vous habitez à côté de la gare du Midi avec un bagage à main. Tous les autres doivent d’abord rejoindre la gare, avec les valises, à l’heure que le car impose. La navette partagée vous prend à votre porte, vous regroupe avec des passagers du même créneau et dépose tout le van devant le terminal. C’est l’option intermédiaire : le confort d’une prise en charge à domicile pour un prix proche du bus.',
      `Les navettes partagées circulent uniquement sur l’axe Bruxelles – aéroport de Charleroi, dans les deux sens, avec ${S.maxPassengers} passagers maximum par van. La prise en charge est confirmée la veille au soir avec un créneau de 15 minutes, et le van fait au plus deux ou trois arrêts avant l’autoroute.`,
    ];
    sections = [
      { h2: 'Prix de la navette partagée par personne et par groupe', paragraphs: ['Les prix s’entendent par groupe réservé ensemble. Les grands groupes paient moins par personne ; à partir de 4 personnes, le minivan privé à 110€ devient le meilleur choix, car vous partez quand vous voulez et ne vous arrêtez nulle part.'], table },
      { h2: 'Comment fonctionne la navette partagée', steps: [
        { title: '1. Réservez avec votre numéro de vol', text: 'Envoyez votre adresse, votre numéro de vol et le nombre de passagers sur WhatsApp ou via le formulaire. Nous répondons avec le prix par personne et le créneau de prise en charge.' },
        { title: '2. Prise en charge à votre porte', text: 'La veille au soir, vous recevez un créneau de 15 minutes. Le chauffeur sonne, charge les bagages et prend les autres passagers en route.' },
        { title: '3. Dépose au terminal', text: `Le van s’arrête au Kiss & Ride devant le terminal de Charleroi au moins 2 heures avant le départ le plus tôt à bord. À l’arrivée, le chauffeur attend dans le terminal avec une pancarte Helicro et chaque vol bénéficie de ${F.waitingFreeMinutes} minutes gratuites.` },
      ] },
      { h2: 'Navette partagée, bus Flibco ou transfert privé ?', bullets: [
        'Flibco : environ 17 à 20€ par personne, uniquement depuis Bruxelles-Midi, sans prise en charge, un bagage, part sans vous.',
        `Navette partagée Helicro : ${S.perPassengerDay}€ par personne le jour, prise en charge à domicile, bagages et sièges enfants compris, petits détours pour les autres passagers.`,
        `Navette privée Helicro : ${crl[0].price}€ pour 1, ${crl[1].price}€ pour 2, ${crl[3].price}€ pour 4 passagers, votre propre van, aucun arrêt, départ à la minute que vous choisissez.`,
      ] },
      { h2: ui.travelInfo, paragraphs: [`Bruxelles – aéroport de Charleroi : ${legText(lang, leg.km, leg.minMin, leg.maxMin)} par l’E19 ; avec deux ou trois prises en charge, comptez 90 minutes porte à porte. Les départs de nuit (22h à 6h) coûtent ${S.perPassengerNight}€ par personne.`] },
      includedSection(lang),
    ];
    faqs = [
      { question: 'Combien coûte la navette partagée de Bruxelles à l’aéroport de Charleroi ?', answer: `${S.perPassengerDay}€ par personne entre 6h et 22h et ${S.perPassengerNight}€ par personne la nuit, prise en charge à votre adresse bruxelloise comprise. Deux personnes paient ${SHARED_DAY[1]}€, trois personnes ${SHARED_DAY[2]}€.` },
      { question: 'Combien d’arrêts fait la navette partagée ?', answer: `Au plus deux ou trois prises en charge à Bruxelles avant l’E19, et ${S.maxPassengers} passagers maximum par van. Votre créneau est confirmé la veille au soir.` },
      { question: 'Puis-je réserver une navette partagée de l’aéroport de Charleroi vers Bruxelles ?', answer: 'Oui, dans les deux sens. À l’arrivée, le chauffeur attend dans le terminal avec une pancarte Helicro et dépose chaque passager à sa propre adresse à Bruxelles.' },
      { question: 'Quand un transfert privé vaut-il mieux que la navette partagée ?', answer: 'À partir de 4 passagers, le minivan privé (110€ pour 4, 160€ pour 8) revient à peu près au même par personne et vous donne votre propre van sans arrêt. C’est aussi le bon choix pour les vols très matinaux ou un départ à heure fixe.' },
    ];
  }

  const priceListLink: SeoLink = { href: PRICE_LIST_URLS[lang], label: lang === 'en' ? 'Full price list' : lang === 'nl' ? 'Volledige prijslijst' : 'Liste complète des tarifs' };
  const related = [
    {
      title: ui.hubs,
      links:
        lang === 'en'
          ? [
              { href: '/en/route/brussels-charleroi', label: `Private transfer Brussels to Charleroi from ${crl[0].price}€` },
              { href: AIRPORTS.CRL.hub.en!, label: 'Charleroi Airport transfers' },
              { href: '/en/blog/flibco-vs-private-transfer-charleroi', label: 'Flibco vs private transfer compared' },
            ]
          : lang === 'nl'
            ? [
                { href: AIRPORTS.CRL.hub.nl!, label: `Privé luchthavenvervoer Charleroi vanaf ${crl[0].price}€` },
                { href: AIRPORTS.BRU.hub.nl!, label: 'Luchthavenvervoer Zaventem' },
                { href: '/nl/blog/wat-kost-een-taxi-naar-zaventem', label: 'Wat kost een taxi naar Zaventem?' },
              ]
            : [
                { href: '/fr/navette/charleroi-bruxelles', label: `Navette privée Bruxelles – Charleroi dès ${crl[0].price}€` },
                { href: AIRPORTS.CRL.hub.fr!, label: 'Navette aéroport Charleroi' },
                { href: '/fr/blog/combien-coute-un-taxi-bruxelles-charleroi', label: 'Combien coûte un taxi Bruxelles – Charleroi ?' },
              ],
    },
    { title: ui.services, links: [priceListLink, { href: lang === 'en' ? '/pricing' : `/${lang}/pricing`, label: ui.fixedPrices }, { href: lang === 'en' ? '/faq' : `/${lang}/faq`, label: ui.faq }] },
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
    sections,
    faqs: [...faqs, ...pickFaqs(lang, ['cancel', 'seats', 'pay'])],
    breadcrumbs: [
      { name: ui.home, url: HOME[lang] },
      { name: SERVICE[lang].name, url: SERVICE[lang].url },
      { name: page.h1, url: page.url },
    ],
    related,
    alternates: { ...SHARED_SHUTTLE_URLS },
    schema: {
      serviceName: page.h1,
      serviceType: 'Shared airport shuttle',
      areaServed: [
        { type: 'City', name: 'Brussels' },
        { type: 'City', name: 'Gosselies' },
        { type: 'Country', name: 'Belgium' },
      ],
      airport: 'CRL',
      offers: [
        { name: 'Shared shuttle Brussels to Charleroi Airport, per person, day', price: S.perPassengerDay },
        { name: 'Shared shuttle Brussels to Charleroi Airport, per person, night', price: S.perPassengerNight },
      ],
    },
    cta: { headline: ui.ctaHeadline, text: ui.ctaText },
    image: '/images/airport-1.jpg',
  };
}
