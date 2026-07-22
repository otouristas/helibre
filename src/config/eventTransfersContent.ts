import { EventTransferContent, EventLang } from '@/components/EventTransferPage';

export const eventTransfersHub: Record<EventLang, EventTransferContent> = {
  en: {
    img: '/images/event-service.jpg',
    title: 'Premium Event Transfers & Chauffeur Services in Belgium',
    intro: [
      'Whether you are heading to world-renowned music festivals, elite motorsport races, or international corporate summits, Helicro provides stress-free, luxury private group transport across Belgium and neighboring regions.',
      'Forget unreliable taxis, crowded public transit, and unpredictable surge pricing. Our high-capacity 8-passenger luxury minivan and professional chauffeur ensure your group arrives on time, in comfort, and style — with seamless connections to our airport transfer and corporate shuttle services.',
    ],
    whyTitle: 'Why Choose Helicro for Your Event Transport?',
    features: [
      {
        title: 'Spacious 8-Passenger Luxury Van',
        text: 'Perfect for friend groups, VIP guests, racing crews, and corporate delegates with full luggage capacity from our dedicated fleet.',
      },
      {
        title: 'Guaranteed Late-Night Returns',
        text: 'Unpredictable event schedules or late festival finishes? Your driver stays assigned to you for guaranteed return pickups.',
      },
      {
        title: 'Fixed, Transparent Pricing',
        text: 'No hidden fees, traffic surcharges, or peak event meters. You know the exact rate before you ride.',
      },
      {
        title: 'Airport & Hotel Direct Pickups',
        text: 'Door-to-door service from Brussels Airport (BRU), Brussels South Charleroi (CRL), Antwerp (ANR), or any hotel in Belgium.',
      },
      {
        title: 'Multilingual Executive Chauffeur',
        text: 'Fluent in English, French, and Greek, providing discreet, military-grade driving safety and personalized service.',
      },
    ],
    sectionTitle: 'Featured Events We Cover',
    cards: [
      {
        title: '1. Tomorrowland (Boom)',
        text: 'Skip the shuttle queues. Direct luxury transfers from Brussels airports or hotels straight to the festival grounds in Boom, with flexible night-time return options.',
        href: '/services/event-transfers/tomorrowland',
        linkLabel: 'Discover Tomorrowland Transfers →',
      },
      {
        title: '2. Formula 1 & Motorsport at Spa-Francorchamps',
        text: 'Navigate the dense traffic around Circuit de Spa-Francorchamps with ease. Dedicated driver services for F1 Grand Prix, Ferrari Track Days, and TotalEnergies 24 Hours of Spa.',
        href: '/services/event-transfers/formula-1-spa-francorchamps',
        linkLabel: 'Discover Motorsport Transfers →',
      },
      {
        title: '3. Music Festivals & Cultural Events',
        text: 'VIP group shuttles for Rock Werchter, Graspop Metal Meeting, Dour Festival, TEFAF Maastricht, and Gentse Feesten — coordinated with our private sightseeing routes when you want extra days in Belgium.',
      },
      {
        title: '4. EU Summits & Corporate Trade Fairs',
        text: 'Executive transport for diplomacy and business delegates attending summits in Brussels, SQUARE, or Brussels Expo at Heysel — fully integrated with our corporate chauffeur service.',
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'How far in advance should I book for major events like Tomorrowland or F1?',
        answer:
          'Due to extreme demand during peak event weekends, we strongly recommend booking at least 4 to 8 weeks in advance to secure your vehicle and driver schedule.',
      },
      {
        question: 'What happens if the event finishes later than expected?',
        answer:
          'For daily standby and round-trip packages, your chauffeur remains on call and monitors event timing to ensure you are picked up smoothly, even if schedules delay.',
      },
    ],
    ctaTitle: 'Ready to Book Your Event Transport?',
    ctaText: 'Tell us your event date, group size, and pickup location for an instant flat-rate quote.',
    relatedTitle: 'Also explore',
    related: [
      { href: '/services/airport', label: 'Airport Transfers' },
      { href: '/services/corporate', label: 'Corporate Shuttle' },
      { href: '/services/events', label: 'Weddings & Private Parties' },
      { href: '/fleet', label: 'Our Fleet' },
    ],
    defaultEvent: 'general',
  },
  nl: {
    img: '/images/event-service.jpg',
    title: 'Premium evenemententransfers & chauffeursdiensten in België',
    intro: [
      'Of u nu naar wereldberoemde muziekfestivals, topmotorsport of internationale bedrijfstoppen reist: Helicro biedt stressvrij, luxe privé-groepsvervoer in België en de buurlanden.',
      'Vergeet onbetrouwbare taxi’s, overvolle shuttles en onvoorspelbare surge-prijzen. Onze ruime luxe minivan voor 8 personen en professionele chauffeur brengen uw groep op tijd, comfortabel en stijlvol — met naadloze aansluiting op onze luchthaven- en corporate transfers.',
    ],
    whyTitle: 'Waarom Helicro voor uw evenementenvervoer?',
    features: [
      {
        title: 'Ruime luxe van voor 8 personen',
        text: 'Ideaal voor vrienden, VIP-gasten, raceploegen en corporate delegates met voldoende bagageruimte.',
      },
      {
        title: 'Gegarandeerde late retourritten',
        text: 'Onvoorspelbaar festival- of raceschema? Uw chauffeur blijft toegewezen voor een gegarandeerde terugrit.',
      },
      {
        title: 'Vaste, transparante prijzen',
        text: 'Geen verborgen kosten, verkeers- of piektoeslagen. U kent het tarief vóór vertrek.',
      },
      {
        title: 'Directe ophaling aan luchthaven & hotel',
        text: 'Deur-tot-deur vanuit Brussels Airport (BRU), Charleroi (CRL), Antwerpen (ANR) of elk hotel in België.',
      },
      {
        title: 'Meertalige executive chauffeur',
        text: 'Vloeiend Engels, Frans en Grieks, met discrete en uiterst veilige rijstijl.',
      },
    ],
    sectionTitle: 'Evenementen die wij coveren',
    cards: [
      {
        title: '1. Tomorrowland (Boom)',
        text: 'Sla de shuttle-rijen over. Directe luxe transfers van Brusselse luchthavens of hotels naar de festivalweide in Boom, met flexibele nachtelijke retourritten.',
        href: '/services/event-transfers/tomorrowland',
        linkLabel: 'Tomorrowland transfers ontdekken →',
      },
      {
        title: '2. Formule 1 & motorsport Spa-Francorchamps',
        text: 'Door druk verkeer rond Circuit de Spa-Francorchamps zonder stress. Dedicated chauffeurs voor F1, Ferrari track days en de 24 Hours of Spa.',
        href: '/services/event-transfers/formula-1-spa-francorchamps',
        linkLabel: 'Motorsport transfers ontdekken →',
      },
      {
        title: '3. Muziekfestivals & culturele events',
        text: 'VIP-groepsshuttles voor Rock Werchter, Graspop, Dour, TEFAF Maastricht en de Gentse Feesten.',
      },
      {
        title: '4. EU-toppen & beurzen',
        text: 'Executive transport voor diplomatie en business-delegaties in Brussel, SQUARE of Brussels Expo — geïntegreerd met onze corporate chauffeursdienst.',
      },
    ],
    faqTitle: 'Veelgestelde vragen',
    faqs: [
      {
        question: 'Hoe ver op voorhand boeken voor Tomorrowland of F1?',
        answer:
          'Door de extreme vraag tijdens piekweekends raden we sterk aan minstens 4 tot 8 weken op voorhand te boeken.',
      },
      {
        question: 'Wat als het evenement later eindigt dan gepland?',
        answer:
          'Bij dagstand-by en round-trip pakketten blijft uw chauffeur stand-by en volgt hij de timing, zodat u ook bij vertraging soepel wordt opgehaald.',
      },
    ],
    ctaTitle: 'Klaar om uw evenemententransfer te boeken?',
    ctaText: 'Deel datum, groepsgrootte en ophaallocatie voor een vaste prijsopgave.',
    relatedTitle: 'Bekijk ook',
    related: [
      { href: '/services/airport', label: 'Luchthavenvervoer' },
      { href: '/services/corporate', label: 'Corporate shuttle' },
      { href: '/services/events', label: 'Trouwen & privéfeesten' },
      { href: '/fleet', label: 'Onze vloot' },
    ],
    defaultEvent: 'general',
  },
  fr: {
    img: '/images/event-service.jpg',
    title: 'Transferts événementiels premium & chauffeur privé en Belgique',
    intro: [
      'Que vous partiiez pour un festival mondial, une course motorsport d’élite ou un sommet d’entreprise international, Helicro assure un transport de groupe privé, luxueux et sans stress en Belgique et dans les régions voisines.',
      'Oubliez taxis aléatoires, navettes bondées et tarifs dynamiques. Notre minivan de luxe 8 places et chauffeur professionnel vous amènent à l’heure, dans le confort — avec une continuité totale vers nos transferts aéroport et navettes corporate.',
    ],
    whyTitle: 'Pourquoi choisir Helicro pour vos transferts événementiels ?',
    features: [
      {
        title: 'Minivan luxe 8 places',
        text: 'Idéal pour groupes d’amis, VIP, équipes racing et délégations corporate avec grand volume bagages.',
      },
      {
        title: 'Retours de nuit garantis',
        text: 'Horaires de festival imprévisibles ? Votre chauffeur reste dédié pour le retour.',
      },
      {
        title: 'Tarifs fixes et transparents',
        text: 'Pas de frais cachés, ni de surcharges trafic ou événement. Le prix est connu avant le départ.',
      },
      {
        title: 'Prise en charge aéroport & hôtel',
        text: 'Porte-à-porte depuis BRU, CRL, ANR ou tout hôtel en Belgique.',
      },
      {
        title: 'Chauffeur exécutif multilingue',
        text: 'Anglais, français et grec — conduite discrète, sécurisée et personnalisée.',
      },
    ],
    sectionTitle: 'Événements que nous couvrons',
    cards: [
      {
        title: '1. Tomorrowland (Boom)',
        text: 'Évitez les files de navettes. Transferts luxe directs depuis les aéroports ou hôtels de Bruxelles vers Boom, avec retours de nuit flexibles.',
        href: '/services/event-transfers/tomorrowland',
        linkLabel: 'Découvrir les transferts Tomorrowland →',
      },
      {
        title: '2. Formule 1 & motorsport à Spa-Francorchamps',
        text: 'Contournez les embouteillages autour du circuit. Chauffeurs dédiés pour le Grand Prix F1, Ferrari Track Days et les 24 Heures de Spa.',
        href: '/services/event-transfers/formula-1-spa-francorchamps',
        linkLabel: 'Découvrir les transferts motorsport →',
      },
      {
        title: '3. Festivals & événements culturels',
        text: 'Navettes VIP pour Rock Werchter, Graspop, Dour, TEFAF Maastricht et les Fêtes de Gand.',
      },
      {
        title: '4. Sommets UE & salons professionnels',
        text: 'Transport exécutif pour délégations diplomatiques et business à Bruxelles, SQUARE ou Brussels Expo — intégré à notre service corporate.',
      },
    ],
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        question: 'Combien de temps à l’avance réserver pour Tomorrowland ou la F1 ?',
        answer:
          'En raison d’une demande extrême les week-ends de pointe, nous recommandons fortement de réserver 4 à 8 semaines à l’avance.',
      },
      {
        question: 'Que se passe-t-il si l’événement se termine plus tard ?',
        answer:
          'Pour les forfaits stand-by et aller-retour, votre chauffeur reste disponible et suit le timing pour un ramassage fluide malgré les retards.',
      },
    ],
    ctaTitle: 'Prêt à réserver votre transfert événementiel ?',
    ctaText: 'Indiquez la date, la taille du groupe et le lieu de prise en charge pour un devis au forfait.',
    relatedTitle: 'À explorer aussi',
    related: [
      { href: '/services/airport', label: 'Transferts aéroport' },
      { href: '/services/corporate', label: 'Navette corporate' },
      { href: '/services/events', label: 'Mariages & soirées privées' },
      { href: '/fleet', label: 'Notre flotte' },
    ],
    defaultEvent: 'general',
  },
};

export const tomorrowlandContent: Record<EventLang, EventTransferContent> = {
  en: {
    img: '/images/event-service.jpg',
    title: 'Tomorrowland VIP Private Transfers & Chauffeur Van Service',
    intro: [
      'Experience the world’s premier electronic music festival without the hassle of travel logistics. Helicro offers private, door-to-door VIP transfers between Brussels airports, hotels, and Tomorrowland in Boom for groups of up to 8 passengers.',
      'Skip the Lines. Travel to Boom in Comfort. Getting to and from Boom during Tomorrowland weekend can be chaotic. Public shuttles mean long queues, and ride-shares face extreme surge pricing or sudden cancellations. With Helicro, your private 8-seater minivan and dedicated chauffeur are reserved exclusively for your group.',
    ],
    whyTitle: 'Why festival groups choose Helicro',
    features: [
      {
        title: 'Up to 8 Passengers + Festival Gear',
        text: 'Plenty of room for luggage, camping equipment, and festival gear in our executive minivan fleet.',
      },
      {
        title: 'Direct Drop-off at Official VIP/Uber Zones',
        text: 'We get you as close to the gates as regulations permit.',
      },
      {
        title: '24/7 Guaranteed Return Rides',
        text: 'No standing in line at 1:00 AM wondering how you’ll get back to your hotel.',
      },
      {
        title: 'Airport Transfers',
        text: 'Direct pick-up at Brussels Airport (BRU), Charleroi (CRL), or Schiphol (AMS) straight to DreamVille or your hotel — powered by our airport transfer service.',
      },
    ],
    packagesTitle: 'Tomorrowland Transfer Options',
    packageHeaders: ['Package', 'Ideal For', "What's Included"],
    packages: [
      {
        name: 'Airport / Hotel One-Way',
        idealFor: 'Individual Arrivals',
        includes: 'Direct pickup from BRU/CRL to Boom or hotel with luggage assistance.',
      },
      {
        name: 'Daily Round-Trip Shuttle',
        idealFor: 'Hotel Guests in Brussels',
        includes: 'Morning pickup from hotel to Boom + guaranteed late-night return after final set.',
      },
      {
        name: 'Full-Weekend VIP Pass',
        idealFor: 'VIP Groups & Artists',
        includes: 'Dedicated driver & luxury 8-seater minivan at your disposal for all 3 or 4 days.',
      },
    ],
    timesTitle: 'Travel Times to Tomorrowland (Boom)',
    times: [
      'Brussels Airport (BRU) → Boom: ~30 minutes',
      'Brussels City Center → Boom: ~35 minutes',
      'Charleroi Airport (CRL) → Boom: ~1 hour 10 minutes',
      'Antwerp City Center → Boom: ~20 minutes',
    ],
    timesNote: 'Note: Driving times may vary slightly depending on peak festival traffic control.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Where will the chauffeur pick us up after the festival ends?',
        answer:
          'We pre-coordinate a designated, easily accessible meeting point near the official pickup zones in Boom prior to drop-off, ensuring you find your vehicle seamlessly late at night.',
      },
      {
        question: 'Can we book a return transfer for 2:00 AM after the main stage closes?',
        answer:
          'Yes. Night pickups are pre-scheduled. Your driver will be parked and waiting for your group at the agreed time.',
      },
    ],
    ctaTitle: 'Secure Your Tomorrowland 2026/2027 Chauffeur',
    ctaText: 'Vehicle availability during Tomorrowland weekends is strictly limited. Reserve early to lock in flat-rate pricing.',
    relatedTitle: 'Related event transfers',
    related: [
      { href: '/services/event-transfers', label: 'All Event Transfers' },
      {
        href: '/services/event-transfers/formula-1-spa-francorchamps',
        label: 'Spa-Francorchamps F1 Transfers',
      },
      { href: '/services/airport', label: 'Airport Transfers' },
      { href: '/en/blog/tomorrowland-2026-vip-group-transport', label: 'Tomorrowland Transport Guide' },
    ],
    defaultEvent: 'tomorrowland',
  },
  nl: {
    img: '/images/event-service.jpg',
    title: 'Tomorrowland VIP privétransfers & chauffeur-minivan',
    intro: [
      'Beleef het grootste electronic festival ter wereld zonder stress over logistiek. Helicro biedt privé deur-tot-deur VIP-transfers tussen Brusselse luchthavens, hotels en Tomorrowland in Boom voor groepen tot 8 personen.',
      'Tijdens Tomorrowland-weekends zijn shuttles en ride-shares chaotisch. Met Helicro is uw luxe 8-zitter exclusief voor uw groep gereserveerd.',
    ],
    whyTitle: 'Waarom festivalgroepen voor Helicro kiezen',
    features: [
      {
        title: 'Tot 8 passagiers + festivalgear',
        text: 'Ruimte voor bagage, campingmateriaal en festivaloutfits.',
      },
      {
        title: 'Drop-off bij officiële VIP/Uber-zones',
        text: 'Zo dicht bij de poorten als de regels toelaten.',
      },
      {
        title: '24/7 gegarandeerde retourritten',
        text: 'Geen wachtrijen om 01:00 uur na de laatste set.',
      },
      {
        title: 'Luchthaventransfers',
        text: 'Directe ophaling op BRU, CRL of AMS naar DreamVille of uw hotel.',
      },
    ],
    packagesTitle: 'Tomorrowland transferopties',
    packageHeaders: ['Pakket', 'Ideaal voor', 'Inbegrepen'],
    packages: [
      {
        name: 'Luchthaven / hotel enkele rit',
        idealFor: 'Individuele aankomsten',
        includes: 'Directe ophaling BRU/CRL naar Boom of hotel met bagagehulp.',
      },
      {
        name: 'Dagelijkse round-trip',
        idealFor: 'Hotelgasten in Brussel',
        includes: 'Ochtendophaling hotel → Boom + gegarandeerde late retour.',
      },
      {
        name: 'Full-weekend VIP',
        idealFor: 'VIP-groepen & artiesten',
        includes: 'Dedicated chauffeur & luxe 8-zitter voor 3 of 4 dagen.',
      },
    ],
    timesTitle: 'Reistijden naar Tomorrowland (Boom)',
    times: [
      'Brussels Airport (BRU) → Boom: ~30 minuten',
      'Brussel centrum → Boom: ~35 minuten',
      'Charleroi Airport (CRL) → Boom: ~1 uur 10',
      'Antwerpen centrum → Boom: ~20 minuten',
    ],
    timesNote: 'Reistijden kunnen variëren bij festivalverkeer.',
    faqTitle: 'Veelgestelde vragen',
    faqs: [
      {
        question: 'Waar worden we na het festival opgehaald?',
        answer:
          'We spreken vooraf een duidelijk ontmoetingspunt af nabij de officiële pickup-zones in Boom.',
      },
      {
        question: 'Kunnen we een retour om 02:00 boeken?',
        answer: 'Ja. Nachtophalingen worden vooraf gepland; uw chauffeur wacht op het afgesproken uur.',
      },
    ],
    ctaTitle: 'Reserveer uw Tomorrowland 2026/2027 chauffeur',
    ctaText: 'Beschikbaarheid is strikt beperkt. Boek vroeg voor vaste tarieven.',
    relatedTitle: 'Gerelateerde transfers',
    related: [
      { href: '/services/event-transfers', label: 'Alle evenemententransfers' },
      {
        href: '/services/event-transfers/formula-1-spa-francorchamps',
        label: 'Spa-Francorchamps F1',
      },
      { href: '/services/airport', label: 'Luchthavenvervoer' },
    ],
    defaultEvent: 'tomorrowland',
  },
  fr: {
    img: '/images/event-service.jpg',
    title: 'Transferts VIP Tomorrowland & minivan avec chauffeur',
    intro: [
      'Vivez le plus grand festival électronique du monde sans le stress logistique. Helicro propose des transferts VIP privés porte-à-porte entre aéroports/hôtels bruxellois et Tomorrowland à Boom pour groupes jusqu’à 8 passagers.',
      'Pendant Tomorrowland, navettes et VTC sont saturés. Avec Helicro, votre minivan 8 places et chauffeur sont réservés exclusivement à votre groupe.',
    ],
    whyTitle: 'Pourquoi les groupes festival choisissent Helicro',
    features: [
      {
        title: "Jusqu'à 8 passagers + matériel festival",
        text: 'Espace pour bagages, camping et tenues festival.',
      },
      {
        title: 'Dépose aux zones VIP/Uber officielles',
        text: 'Aussi près des portes que la réglementation le permet.',
      },
      {
        title: 'Retours 24/7 garantis',
        text: 'Plus de files à 1h du matin après le last set.',
      },
      {
        title: 'Transferts aéroport',
        text: 'Prise en charge directe BRU, CRL ou AMS vers DreamVille ou votre hôtel.',
      },
    ],
    packagesTitle: 'Options de transfert Tomorrowland',
    packageHeaders: ['Forfait', 'Idéal pour', 'Inclus'],
    packages: [
      {
        name: 'Aéroport / hôtel aller simple',
        idealFor: 'Arrivées individuelles',
        includes: 'Prise en charge BRU/CRL vers Boom ou hôtel avec aide bagages.',
      },
      {
        name: 'Navette aller-retour quotidienne',
        idealFor: 'Clients hôtels Bruxelles',
        includes: 'Départ matin hôtel → Boom + retour de nuit garanti.',
      },
      {
        name: 'VIP week-end complet',
        idealFor: 'Groupes VIP & artistes',
        includes: 'Chauffeur dédié & minivan luxe 8 places sur 3 ou 4 jours.',
      },
    ],
    timesTitle: 'Temps de trajet vers Tomorrowland (Boom)',
    times: [
      'Aéroport de Bruxelles (BRU) → Boom : ~30 minutes',
      'Centre de Bruxelles → Boom : ~35 minutes',
      'Aéroport de Charleroi (CRL) → Boom : ~1 h 10',
      'Centre d’Anvers → Boom : ~20 minutes',
    ],
    timesNote: 'Les temps de trajet peuvent varier selon le trafic festival.',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        question: 'Où le chauffeur nous récupère-t-il après le festival ?',
        answer:
          'Nous convenons à l’avance d’un point de rendez-vous clair près des zones de ramassage officielles à Boom.',
      },
      {
        question: 'Peut-on réserver un retour à 2h00 ?',
        answer:
          'Oui. Les reprises de nuit sont planifiées ; votre chauffeur attend à l’heure convenue.',
      },
    ],
    ctaTitle: 'Réservez votre chauffeur Tomorrowland 2026/2027',
    ctaText: 'Disponibilité très limitée. Réservez tôt pour un tarif forfaitaire.',
    relatedTitle: 'Transferts liés',
    related: [
      { href: '/services/event-transfers', label: 'Tous les transferts événementiels' },
      {
        href: '/services/event-transfers/formula-1-spa-francorchamps',
        label: 'Spa-Francorchamps F1',
      },
      { href: '/services/airport', label: 'Transferts aéroport' },
    ],
    defaultEvent: 'tomorrowland',
  },
};

export const spaMotorsportContent: Record<EventLang, EventTransferContent> = {
  en: {
    img: '/images/event-service.jpg',
    title: 'Circuit de Spa-Francorchamps Private Chauffeur & Group Transfers',
    intro: [
      'Heading to the Belgian Formula 1 Grand Prix, Ferrari Track Days, Spa Six Hours, or the TotalEnergies 24 Hours of Spa? Helicro provides executive 8-passenger private transfers connecting Brussels, major airports, and luxury hotels directly to Circuit de Spa-Francorchamps in the Ardennes.',
      'Spa-Francorchamps is legendary, but the surrounding roads become severely congested during major race weekends. Navigating regional traffic requires experienced driving, route familiarity, and punctual scheduling.',
    ],
    whyTitle: 'Why race teams, sponsors, and fans choose Helicro',
    features: [
      {
        title: 'High-Capacity Executive Van',
        text: 'Accommodates up to 8 passengers with ample trunk space for hospitality gear, luggage, and team equipment.',
      },
      {
        title: 'Full-Day Driver Standby',
        text: 'Keep your driver on call throughout the day to adapt to delayed qualifying sessions or evening events.',
      },
      {
        title: 'Door-to-Trackside Access',
        text: 'Direct drop-off at designated P-parking passes, VIP entry points, or nearby hotels in Spa, Malmedy, and Stavelot.',
      },
      {
        title: 'Cross-Border Service',
        text: 'Comfortable long-distance transfers to/from Maastricht (MST), Liège (LGG), Cologne (CGN), and Luxembourg (LUX) — coordinated with our airport transfer network.',
      },
    ],
    packagesTitle: 'Motorsport Transfer Packages',
    packageBlocks: [
      {
        title: 'Grand Prix Day Pass (One-Day Round Trip)',
        bullets: [
          'Pick-up at your Brussels hotel or airport in the morning.',
          'Direct transfer to Spa-Francorchamps.',
          'Driver waiting on standby during the race.',
          'Evening return transfer back to Brussels/hotel.',
        ],
      },
      {
        title: 'Full Race Weekend Chauffeur (3-Day Standby)',
        bullets: [
          'Dedicated luxury 8-passenger minivan from Friday practice through Sunday post-race.',
          'Daily transfers between your hotel (Liège, Brussels, or Spa region) and the circuit.',
        ],
      },
      {
        title: 'Track Day & Corporate Hospitality Shuttles',
        bullets: [
          'Tailored logistics for private racing drivers, Ferrari club participants, and corporate sponsor groups requiring flexible multi-point pick-ups.',
        ],
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Can you handle pickups from airports outside Belgium?',
        answer:
          'Yes. We routinely pick up guests from Düsseldorf (DUS), Cologne (CGN), Luxembourg (LUX), and Maastricht (MST) for direct transfers to Spa-Francorchamps.',
      },
      {
        question: 'Is pricing fixed despite traffic delays around Spa?',
        answer:
          'Yes. All Helicro race transfers are quoted at fixed, pre-agreed flat rates, so you never pay extra for race-day traffic slow-downs.',
      },
    ],
    ctaTitle: 'Reserve Your Motorsport Transfer',
    ctaText: 'Ensure your Grand Prix or track day experience is smooth from start to finish.',
    relatedTitle: 'Related event transfers',
    related: [
      { href: '/services/event-transfers', label: 'All Event Transfers' },
      { href: '/services/event-transfers/tomorrowland', label: 'Tomorrowland Transfers' },
      { href: '/services/corporate', label: 'Corporate Shuttle' },
      { href: '/en/blog/spa-francorchamps-f1-transfer-guide', label: 'F1 Spa Travel Guide' },
    ],
    defaultEvent: 'spa_f1',
  },
  nl: {
    img: '/images/event-service.jpg',
    title: 'Privéchauffeur & groepstransfers Circuit de Spa-Francorchamps',
    intro: [
      'Op weg naar de Belgische Formule 1 Grand Prix, Ferrari track days, Spa Six Hours of de 24 Hours of Spa? Helicro biedt executive privétransfers voor 8 personen van Brussel, luchthavens en hotels rechtstreeks naar Spa-Francorchamps.',
      'Rond raceweekends is het verkeer extreem druk. Ervaren chauffeurs, lokale route-kennis en strikte timing maken het verschil.',
    ],
    whyTitle: 'Waarom teams, sponsors en fans Helicro kiezen',
    features: [
      {
        title: 'Ruime executive van',
        text: 'Tot 8 passagiers met ruimte voor hospitality-materiaal, bagage en teamuitrusting.',
      },
      {
        title: 'Chauffeur stand-by hele dag',
        text: 'Aanpasbaar bij vertraagde kwalificaties of avondprogramma’s.',
      },
      {
        title: 'Tot aan de circuittoegang',
        text: 'Drop-off bij P-parking, VIP-ingangen of hotels in Spa, Malmedy en Stavelot.',
      },
      {
        title: 'Grensoverschrijdend',
        text: 'Transfers van/naar MST, LGG, CGN en LUX.',
      },
    ],
    packagesTitle: 'Motorsport transferpakketten',
    packageBlocks: [
      {
        title: 'Grand Prix day pass (heen-en-terug)',
        bullets: [
          'Ochtendophaling hotel of luchthaven in Brussel.',
          'Directe transfer naar Spa-Francorchamps.',
          'Chauffeur stand-by tijdens de race.',
          'Avondretour naar Brussel/hotel.',
        ],
      },
      {
        title: 'Volledig raceweekend (3 dagen)',
        bullets: [
          'Dedicated luxe 8-zitter van vrijdag tot zondag.',
          'Dagelijkse transfers hotel ↔ circuit.',
        ],
      },
      {
        title: 'Track day & corporate hospitality',
        bullets: [
          'Maatwerk voor private racers, Ferrari-clubs en sponsor-groepen met multi-stop ophalingen.',
        ],
      },
    ],
    faqTitle: 'Veelgestelde vragen',
    faqs: [
      {
        question: 'Kunnen jullie ophalen aan luchthavens buiten België?',
        answer:
          'Ja. Regelmatig vanuit Düsseldorf (DUS), Keulen (CGN), Luxemburg (LUX) en Maastricht (MST).',
      },
      {
        question: 'Blijft de prijs vast bij file rond Spa?',
        answer: 'Ja. Alle race-transfers zijn vaste forfaitaire tarieven — geen toeslag voor raceverkeer.',
      },
    ],
    ctaTitle: 'Reserveer uw motorsporttransfer',
    ctaText: 'Maak van uw Grand Prix of track day een soepele ervaring van begin tot eind.',
    relatedTitle: 'Gerelateerde transfers',
    related: [
      { href: '/services/event-transfers', label: 'Alle evenemententransfers' },
      { href: '/services/event-transfers/tomorrowland', label: 'Tomorrowland' },
      { href: '/services/corporate', label: 'Corporate shuttle' },
    ],
    defaultEvent: 'spa_f1',
  },
  fr: {
    img: '/images/event-service.jpg',
    title: 'Chauffeur privé & transferts de groupe Circuit de Spa-Francorchamps',
    intro: [
      'Vous allez au Grand Prix de Formule 1 belge, aux Ferrari Track Days, aux Spa Six Hours ou aux 24 Heures de Spa ? Helicro assure des transferts privés exécutifs 8 places entre Bruxelles, les aéroports et hôtels, et le circuit de Spa-Francorchamps.',
      'Les routes autour du circuit saturent les week-ends de course. Il faut un chauffeur expérimenté, la connaissance des itinéraires et une ponctualité stricte.',
    ],
    whyTitle: 'Pourquoi équipes, sponsors et fans choisissent Helicro',
    features: [
      {
        title: 'Van exécutif haute capacité',
        text: "Jusqu'à 8 passagers avec grand coffre pour hospitalité, bagages et matériel d'équipe.",
      },
      {
        title: 'Chauffeur en stand-by toute la journée',
        text: 'Adaptation aux qualifications retardées ou soirées.',
      },
      {
        title: 'Accès trackside',
        text: 'Dépose aux parkings P, entrées VIP ou hôtels à Spa, Malmedy et Stavelot.',
      },
      {
        title: 'Service transfrontalier',
        text: 'Transferts depuis/vers MST, LGG, CGN et LUX.',
      },
    ],
    packagesTitle: 'Forfaits transferts motorsport',
    packageBlocks: [
      {
        title: 'Grand Prix day pass (aller-retour)',
        bullets: [
          'Prise en charge matin hôtel ou aéroport Bruxelles.',
          'Transfert direct vers Spa-Francorchamps.',
          'Chauffeur en stand-by pendant la course.',
          'Retour soir vers Bruxelles/hôtel.',
        ],
      },
      {
        title: 'Week-end de course complet (3 jours)',
        bullets: [
          'Minivan luxe 8 places dédié du vendredi au dimanche.',
          'Transferts quotidiens hôtel ↔ circuit.',
        ],
      },
      {
        title: 'Track day & hospitalité corporate',
        bullets: [
          'Logistique sur mesure pour pilotes privés, clubs Ferrari et groupes sponsors multi-points.',
        ],
      },
    ],
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        question: 'Pouvez-vous récupérer depuis des aéroports hors Belgique ?',
        answer:
          'Oui. Depuis Düsseldorf (DUS), Cologne (CGN), Luxembourg (LUX) et Maastricht (MST) régulièrement.',
      },
      {
        question: 'Le tarif reste-t-il fixe malgré les embouteillages ?',
        answer:
          'Oui. Tous les transferts course Helicro sont des forfaits fixes — aucun supplément trafic jour de course.',
      },
    ],
    ctaTitle: 'Réservez votre transfert motorsport',
    ctaText: 'Assurez une expérience Grand Prix ou track day fluide du début à la fin.',
    relatedTitle: 'Transferts liés',
    related: [
      { href: '/services/event-transfers', label: 'Tous les transferts événementiels' },
      { href: '/services/event-transfers/tomorrowland', label: 'Tomorrowland' },
      { href: '/services/corporate', label: 'Navette corporate' },
    ],
    defaultEvent: 'spa_f1',
  },
};
