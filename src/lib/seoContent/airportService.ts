import { AIRPORTS, FIXED_PRICES, PLACES } from '@/config/seoFacts';
import { metaTranslations } from '@/config/metaTranslations';
import type { Locale } from '@/lib/seo';
import { sharedPathAlternates } from '@/lib/seo';
import { UI, brusselsPriceTable, comparisonSection, howItWorksSection, includedSection, pickFaqs } from './shared';
import type { SeoFaq, SeoLandingContent, SeoLinkGroup, SeoSection } from './types';

const F = FIXED_PRICES;
const B = PLACES.brussels;

interface Copy {
  h1: string;
  lead: string;
  intro: string[];
  airportsH2: string;
  airportsIntro: string;
  airportCols: [string, string, string, string];
  quote: string;
  bruPricesH2: string;
  crlPricesH2: string;
  meetingH2: string;
  beyondH2: string;
  beyondText: string;
  faqs: SeoFaq[];
  related: SeoLinkGroup[];
  crumb: string;
}

const COPY: Record<Locale, Copy> = {
  en: {
    h1: 'Taxi and private transfers to Brussels Airport, Charleroi and Lille',
    lead: `Helicro is a licensed private transfer service that drives you between any address in Belgium and Brussels Airport (Zaventem), Brussels South Charleroi or Lille Airport in a Ford minivan for up to 8 passengers. From Brussels city the fixed price is ${F.brusselsToBRU[0].price}€ to ${F.brusselsToBRU[2].price}€ for Zaventem and ${F.brusselsToCRL[0].price}€ to ${F.brusselsToCRL[7].price}€ for Charleroi per vehicle, with meet and greet, live flight tracking and free child seats included.`,
    intro: [
      'An airport taxi in Brussels normally means a meter that keeps running in traffic, a queue at the rank, or an app whose price doubles at 5:00. Helicro works the other way round: you send your address, flight number and group size, you receive one written price, and a driver with more than 30 years of accident-free experience is at your door 10 minutes early. That is the whole service, 24 hours a day, 7 days a week.',
      'The company is run by Gerasimos from Braine-l’Alleud, south of Brussels, and covers Brussels, Flanders and Wallonia as well as cross-border trips to Lille, Luxembourg, the Netherlands and Germany. He speaks English, French and Greek; quotes and confirmations are also available in Dutch and Croatian.',
    ],
    airportsH2: 'Which airports we serve',
    airportsIntro: 'Three airports cover almost every flight from Belgium. Distances and times below are from Brussels city centre outside peak hours; every other origin is quoted on request.',
    airportCols: ['Airport', 'Distance', 'Typical time', 'Fixed price from Brussels'],
    quote: 'fixed quote',
    bruPricesH2: 'Fixed prices Brussels to Brussels Airport (Zaventem)',
    crlPricesH2: 'Fixed prices Brussels to Charleroi Airport',
    meetingH2: 'Where your driver waits',
    beyondH2: 'Airport transfers from Antwerp, Ghent, Bruges, Leuven and Wallonia',
    beyondText: 'Helicro is not a Brussels-only service. Antwerp to Brussels Airport is 45 km, Ghent 70 km, Leuven 20 km, Bruges 110 km, Liège 95 km, Namur to Charleroi 40 km and Mons to Charleroi 45 km. Each of these routes has its own page with distances, timings and a written fixed price per minivan.',
    faqs: [
      { question: 'How much is a taxi to Brussels Airport?', answer: `From any Brussels address, a Helicro private transfer to Brussels Airport costs ${F.brusselsToBRU[0].price}€ for 1–2 passengers, ${F.brusselsToBRU[1].price}€ for 3–4 and ${F.brusselsToBRU[2].price}€ for 5–8, per vehicle, including luggage and child seats. A metered taxi usually costs 45–60€ for the same trip.` },
      { question: 'How much is a taxi from Brussels to Charleroi Airport?', answer: `${F.brusselsToCRL[0].price}€ for 1 passenger, ${F.brusselsToCRL[1].price}€ for 2, ${F.brusselsToCRL[2].price}€ for 3, ${F.brusselsToCRL[3].price}€ for 4 and up to ${F.brusselsToCRL[7].price}€ for 8, per vehicle, door to door, day or night.` },
      { question: 'Do you drive to airports outside Brussels?', answer: 'Yes. Besides Zaventem and Charleroi we drive to Lille-Lesquin, Liège, Antwerp, Amsterdam Schiphol, Eindhoven, Cologne-Bonn, Düsseldorf and Luxembourg at a fixed price per vehicle.' },
      { question: 'What if my flight lands at 2:00 in the morning?', answer: `The driver tracks the flight and waits in arrivals with a name sign. The first ${F.waitingFreeMinutes} minutes after landing are free and there is no night surcharge.` },
      { question: 'Can I book a return transfer?', answer: 'Yes. Outbound and return can be booked together for one total, and both legs are confirmed in writing with the driver’s phone number.' },
    ],
    related: [
      {
        title: 'Airport transfer pages',
        links: [
          { href: '/en/airport-transfer/brussels-zaventem', label: 'Brussels Airport (Zaventem) transfers' },
          { href: '/en/airport-transfer/brussels-charleroi', label: 'Charleroi Airport transfers' },
          { href: '/en/airport-transfer/lille', label: 'Lille Airport transfers' },
          { href: '/en/route/brussels-zaventem', label: 'Brussels to Zaventem route' },
          { href: '/en/route/brussels-charleroi', label: 'Brussels to Charleroi route' },
        ],
      },
      {
        title: 'From other cities',
        links: [
          { href: '/en/route/antwerp-brussels-airport', label: 'Antwerp to Brussels Airport' },
          { href: '/en/route/ghent-brussels-airport', label: 'Ghent to Brussels Airport' },
          { href: '/en/route/bruges-brussels-airport', label: 'Bruges to Brussels Airport' },
          { href: '/en/route/leuven-brussels-airport', label: 'Leuven to Brussels Airport' },
          { href: '/en/service-area', label: 'All service areas' },
        ],
      },
      {
        title: 'More',
        links: [
          { href: '/pricing', label: 'All fixed prices' },
          { href: '/fleet', label: 'Our Ford minivans' },
          { href: '/en/blog/brussels-airport-to-city-centre', label: 'Guide: Brussels Airport to the city centre' },
          { href: '/en/blog/flibco-vs-private-transfer-charleroi', label: 'Guide: Flibco vs private transfer to Charleroi' },
        ],
      },
    ],
    crumb: 'Services',
  },
  nl: {
    h1: 'Luchthavenvervoer naar Zaventem, Charleroi en Rijsel met vaste prijs',
    lead: `Helicro is een gelicentieerde privé transferdienst die u van elk adres in België naar Brussels Airport (Zaventem), Brussels South Charleroi of de luchthaven van Rijsel brengt in een Ford minivan voor maximaal 8 personen. Vanuit Brussel betaalt u ${F.brusselsToBRU[0].price}€ tot ${F.brusselsToBRU[2].price}€ naar Zaventem en ${F.brusselsToCRL[0].price}€ tot ${F.brusselsToCRL[7].price}€ naar Charleroi per voertuig, inclusief ontvangst in de aankomsthal, vluchtopvolging en gratis kinderzitjes.`,
    intro: [
      'Een luchthaventaxi betekent in België meestal een meter die blijft lopen in de file, een wachtrij aan de standplaats of een app die om 5u ’s ochtends dubbel zo duur is. Helicro werkt omgekeerd: u stuurt uw adres, vluchtnummer en aantal personen, u krijgt één schriftelijke prijs, en een chauffeur met meer dan 30 jaar schadevrije ervaring staat 10 minuten op voorhand voor de deur. Dat is de hele dienst, 24 uur per dag, 7 dagen per week.',
      'Het bedrijf wordt geleid door Gerasimos vanuit Eigenbrakel, ten zuiden van Brussel, en bedient Brussel, Vlaanderen en Wallonië plus grensoverschrijdende ritten naar Rijsel, Luxemburg, Nederland en Duitsland. Hij spreekt Engels, Frans en Grieks; offertes en bevestigingen krijgt u ook in het Nederlands.',
    ],
    airportsH2: 'Welke luchthavens bedienen wij',
    airportsIntro: 'Drie luchthavens dekken bijna elke vlucht vanuit België. Afstanden en tijden hieronder gelden vanuit het centrum van Brussel buiten de spits; elk ander vertrekpunt krijgt een prijs op aanvraag.',
    airportCols: ['Luchthaven', 'Afstand', 'Gemiddelde reistijd', 'Vaste prijs vanuit Brussel'],
    quote: 'vaste offerte',
    bruPricesH2: 'Vaste prijzen Brussel naar Brussels Airport (Zaventem)',
    crlPricesH2: 'Vaste prijzen Brussel naar Charleroi Airport',
    meetingH2: 'Waar uw chauffeur wacht',
    beyondH2: 'Luchthavenvervoer vanuit Antwerpen, Gent, Brugge, Leuven en Wallonië',
    beyondText: 'Helicro rijdt niet alleen vanuit Brussel. Antwerpen naar Brussels Airport is 45 km, Gent 70 km, Leuven 20 km, Brugge 110 km, Luik 95 km, Namen naar Charleroi 40 km en Bergen naar Charleroi 45 km. Elke stad heeft een eigen pagina met afstanden, reistijden en een schriftelijke vaste prijs per minivan.',
    faqs: [
      { question: 'Wat kost een taxi naar Zaventem?', answer: `Vanuit elk Brussels adres kost een Helicro-privétransfer naar Brussels Airport ${F.brusselsToBRU[0].price}€ voor 1–2 passagiers, ${F.brusselsToBRU[1].price}€ voor 3–4 en ${F.brusselsToBRU[2].price}€ voor 5–8, per voertuig, inclusief bagage en kinderzitjes. Een taxi met meter kost doorgaans 45–60€ voor dezelfde rit.` },
      { question: 'Wat kost een taxi van Brussel naar Charleroi Airport?', answer: `${F.brusselsToCRL[0].price}€ voor 1 passagier, ${F.brusselsToCRL[1].price}€ voor 2, ${F.brusselsToCRL[2].price}€ voor 3, ${F.brusselsToCRL[3].price}€ voor 4 en tot ${F.brusselsToCRL[7].price}€ voor 8, per voertuig, van deur tot deur, dag en nacht.` },
      { question: 'Rijden jullie ook naar luchthavens buiten Brussel?', answer: 'Ja. Naast Zaventem en Charleroi rijden we naar Rijsel-Lesquin, Luik, Antwerpen, Amsterdam Schiphol, Eindhoven, Keulen-Bonn, Düsseldorf en Luxemburg tegen een vaste prijs per voertuig.' },
      { question: 'Wat als mijn vlucht om 2u ’s nachts landt?', answer: `De chauffeur volgt de vlucht op en wacht in de aankomsthal met een naambordje. De eerste ${F.waitingFreeMinutes} minuten na de landing zijn gratis en er is geen nachttoeslag.` },
      { question: 'Kan ik een retourrit boeken?', answer: 'Ja. Heen- en terugrit boekt u samen voor één totaalprijs; beide ritten worden schriftelijk bevestigd met het telefoonnummer van de chauffeur.' },
    ],
    related: [
      {
        title: 'Luchthavenvervoer per luchthaven',
        links: [
          { href: '/nl/luchthavenvervoer/zaventem', label: 'Luchthavenvervoer Zaventem' },
          { href: '/nl/luchthavenvervoer/charleroi', label: 'Luchthavenvervoer Charleroi' },
        ],
      },
      {
        title: 'Vanuit uw stad',
        links: [
          { href: '/nl/luchthavenvervoer/gent', label: 'Luchthavenvervoer Gent' },
          { href: '/nl/luchthavenvervoer/antwerpen', label: 'Luchthavenvervoer Antwerpen' },
          { href: '/nl/luchthavenvervoer/leuven', label: 'Luchthavenvervoer Leuven' },
          { href: '/nl/luchthavenvervoer/brugge', label: 'Luchthavenvervoer Brugge' },
        ],
      },
      {
        title: 'Meer',
        links: [
          { href: '/nl/pricing', label: 'Alle vaste prijzen' },
          { href: '/nl/fleet', label: 'Onze Ford minivans' },
          { href: '/nl/blog/wat-kost-een-taxi-naar-zaventem', label: 'Gids: wat kost een taxi naar Zaventem?' },
          { href: '/nl/faq', label: 'Veelgestelde vragen' },
        ],
      },
    ],
    crumb: 'Diensten',
  },
  fr: {
    h1: 'Taxi et navette privée vers les aéroports de Bruxelles, Charleroi et Lille',
    lead: `Helicro est un service de transfert privé agréé qui vous conduit entre toute adresse en Belgique et l’aéroport de Bruxelles (Zaventem), Bruxelles-Sud Charleroi ou Lille en minivan Ford jusqu’à 8 passagers. Depuis Bruxelles, le prix fixe est de ${F.brusselsToBRU[0].price}€ à ${F.brusselsToBRU[2].price}€ pour Zaventem et de ${F.brusselsToCRL[0].price}€ à ${F.brusselsToCRL[7].price}€ pour Charleroi par véhicule, accueil aux arrivées, suivi de vol et sièges enfants gratuits inclus.`,
    intro: [
      'Un taxi aéroport à Bruxelles, c’est souvent un compteur qui tourne dans les embouteillages, une file à la station ou une application dont le prix double à 5h du matin. Helicro fonctionne à l’inverse : vous envoyez votre adresse, votre numéro de vol et le nombre de passagers, vous recevez un seul prix écrit, et un chauffeur avec plus de 30 ans de conduite sans accident est devant votre porte 10 minutes en avance. C’est tout le service, 24 h/24, 7 j/7.',
      'L’entreprise est dirigée par Gerasimos depuis Braine-l’Alleud, au sud de Bruxelles, et couvre Bruxelles, la Flandre et la Wallonie ainsi que les trajets transfrontaliers vers Lille, le Luxembourg, les Pays-Bas et l’Allemagne. Il parle français, anglais et grec ; devis et confirmations existent aussi en néerlandais.',
    ],
    airportsH2: 'Les aéroports que nous desservons',
    airportsIntro: 'Trois aéroports couvrent presque tous les vols au départ de la Belgique. Distances et temps ci-dessous depuis le centre de Bruxelles hors heures de pointe ; tout autre point de départ est chiffré sur demande.',
    airportCols: ['Aéroport', 'Distance', 'Temps habituel', 'Prix fixe depuis Bruxelles'],
    quote: 'devis fixe',
    bruPricesH2: 'Prix fixes Bruxelles vers Brussels Airport (Zaventem)',
    crlPricesH2: 'Prix fixes Bruxelles vers l’aéroport de Charleroi',
    meetingH2: 'Où vous attend votre chauffeur',
    beyondH2: 'Navettes aéroport depuis le Brabant wallon, Namur, Mons et la Flandre',
    beyondText: 'Helicro ne se limite pas à Bruxelles. Braine-l’Alleud, Waterloo, Wavre et Nivelles ont chacune leur page de taxi local ; Namur est à 40 km de Charleroi, Mons à 45 km, Anvers à 45 km de Zaventem et Gand à 70 km. Chaque trajet est chiffré par écrit, par minivan.',
    faqs: [
      { question: 'Combien coûte un taxi pour l’aéroport de Bruxelles ?', answer: `Depuis toute adresse bruxelloise, une navette privée Helicro vers Brussels Airport coûte ${F.brusselsToBRU[0].price}€ pour 1–2 passagers, ${F.brusselsToBRU[1].price}€ pour 3–4 et ${F.brusselsToBRU[2].price}€ pour 5–8, par véhicule, bagages et sièges enfants compris. Un taxi au compteur revient généralement à 45–60€.` },
      { question: 'Combien coûte un taxi de Bruxelles à l’aéroport de Charleroi ?', answer: `${F.brusselsToCRL[0].price}€ pour 1 passager, ${F.brusselsToCRL[1].price}€ pour 2, ${F.brusselsToCRL[2].price}€ pour 3, ${F.brusselsToCRL[3].price}€ pour 4 et jusqu’à ${F.brusselsToCRL[7].price}€ pour 8, par véhicule, porte à porte, de jour comme de nuit.` },
      { question: 'Desservez-vous des aéroports hors de Bruxelles ?', answer: 'Oui. Outre Zaventem et Charleroi, nous desservons Lille-Lesquin, Liège, Anvers, Amsterdam Schiphol, Eindhoven, Cologne-Bonn, Düsseldorf et Luxembourg à prix fixe par véhicule.' },
      { question: 'Et si mon vol atterrit à 2h du matin ?', answer: `Le chauffeur suit le vol et vous attend aux arrivées avec une pancarte. Les ${F.waitingFreeMinutes} premières minutes après l’atterrissage sont gratuites et il n’y a pas de supplément de nuit.` },
      { question: 'Puis-je réserver l’aller-retour ?', answer: 'Oui. L’aller et le retour se réservent ensemble pour un total unique ; les deux trajets sont confirmés par écrit avec le numéro du chauffeur.' },
    ],
    related: [
      {
        title: 'Navettes par aéroport',
        links: [
          { href: '/fr/navette/aeroport-bruxelles', label: 'Navette aéroport Bruxelles (Zaventem)' },
          { href: '/fr/navette/aeroport-charleroi', label: 'Navette aéroport Charleroi' },
          { href: '/fr/navette/charleroi-bruxelles', label: 'Navette Bruxelles – Charleroi' },
        ],
      },
      {
        title: 'Taxi local',
        links: [
          { href: '/fr/local/braine-l-alleud', label: 'Taxi Braine-l’Alleud' },
          { href: '/fr/local/waterloo', label: 'Taxi Waterloo' },
          { href: '/fr/local/wavre', label: 'Taxi Wavre' },
          { href: '/fr/local/nivelles', label: 'Taxi Nivelles' },
        ],
      },
      {
        title: 'Plus',
        links: [
          { href: '/fr/pricing', label: 'Tous les prix fixes' },
          { href: '/fr/fleet', label: 'Nos minivans Ford' },
          { href: '/fr/blog/combien-coute-un-taxi-bruxelles-charleroi', label: 'Guide : combien coûte un taxi Bruxelles – Charleroi ?' },
          { href: '/fr/faq', label: 'Questions fréquentes' },
        ],
      },
    ],
    crumb: 'Services',
  },
  el: {
    h1: 'Ταξί και ιδιωτικές μεταφορές προς τα αεροδρόμια Βρυξελλών, Charleroi και Lille',
    lead: `Η Helicro είναι αδειοδοτημένη υπηρεσία ιδιωτικών μεταφορών που σας μεταφέρει από οποιαδήποτε διεύθυνση στο Βέλγιο προς το αεροδρόμιο Βρυξελλών (Zaventem), το Brussels South Charleroi ή το αεροδρόμιο της Lille με Ford minivan έως 8 επιβατών. Από τις Βρυξέλλες η σταθερή τιμή είναι ${F.brusselsToBRU[0].price}€ έως ${F.brusselsToBRU[2].price}€ για Zaventem και ${F.brusselsToCRL[0].price}€ έως ${F.brusselsToCRL[7].price}€ για Charleroi ανά όχημα, με υποδοχή στις αφίξεις, παρακολούθηση πτήσης και δωρεάν παιδικά καθίσματα.`,
    intro: [
      'Ένα ταξί αεροδρομίου στις Βρυξέλλες σημαίνει συνήθως ταξίμετρο που τρέχει στην κίνηση, ουρά στην πιάτσα ή εφαρμογή που διπλασιάζει την τιμή στις 5 το πρωί. Η Helicro λειτουργεί αντίστροφα: στέλνετε διεύθυνση, αριθμό πτήσης και άτομα, λαμβάνετε μία γραπτή τιμή, και ένας Έλληνας οδηγός με πάνω από 30 χρόνια οδήγησης χωρίς ατύχημα είναι στην πόρτα σας 10 λεπτά νωρίτερα. Αυτή είναι όλη η υπηρεσία, 24 ώρες το 24ωρο, 7 ημέρες την εβδομάδα.',
      'Την εταιρεία διευθύνει ο Γεράσιμος από το Braine-l’Alleud, νότια των Βρυξελλών, και καλύπτει Βρυξέλλες, Φλάνδρα και Βαλλονία καθώς και διασυνοριακές διαδρομές προς Lille, Λουξεμβούργο, Ολλανδία και Γερμανία. Μιλά Ελληνικά, Αγγλικά και Γαλλικά· η επικοινωνία, οι προσφορές και τα τιμολόγια γίνονται στα Ελληνικά.',
    ],
    airportsH2: 'Ποια αεροδρόμια εξυπηρετούμε',
    airportsIntro: 'Τρία αεροδρόμια καλύπτουν σχεδόν κάθε πτήση από το Βέλγιο. Οι αποστάσεις και οι χρόνοι παρακάτω είναι από το κέντρο των Βρυξελλών εκτός ωρών αιχμής· κάθε άλλη αφετηρία τιμολογείται κατόπιν αιτήματος.',
    airportCols: ['Αεροδρόμιο', 'Απόσταση', 'Συνήθης χρόνος', 'Σταθερή τιμή από Βρυξέλλες'],
    quote: 'σταθερή προσφορά',
    bruPricesH2: 'Σταθερές τιμές Βρυξέλλες προς αεροδρόμιο Zaventem',
    crlPricesH2: 'Σταθερές τιμές Βρυξέλλες προς αεροδρόμιο Charleroi',
    meetingH2: 'Πού σας περιμένει ο οδηγός',
    beyondH2: 'Μεταφορές αεροδρομίου από Αμβέρσα, Γάνδη, Μπριζ, Λέουβεν και Βαλλονία',
    beyondText: 'Η Helicro δεν εξυπηρετεί μόνο τις Βρυξέλλες. Αμβέρσα προς Zaventem 45 χλμ., Γάνδη 70 χλμ., Λέουβεν 20 χλμ., Μπριζ 110 χλμ., Λιέγη 95 χλμ., Ναμύρ προς Charleroi 40 χλμ. και Μονς προς Charleroi 45 χλμ. Κάθε διαδρομή τιμολογείται γραπτώς ανά minivan.',
    faqs: [
      { question: 'Πόσο κοστίζει το ταξί για το αεροδρόμιο των Βρυξελλών;', answer: `Από οποιαδήποτε διεύθυνση στις Βρυξέλλες, μια ιδιωτική μεταφορά Helicro προς το Zaventem κοστίζει ${F.brusselsToBRU[0].price}€ για 1–2 άτομα, ${F.brusselsToBRU[1].price}€ για 3–4 και ${F.brusselsToBRU[2].price}€ για 5–8, ανά όχημα, με αποσκευές και παιδικά καθίσματα. Ένα ταξί με ταξίμετρο κοστίζει συνήθως 45–60€.` },
      { question: 'Πόσο κοστίζει το ταξί από Βρυξέλλες προς το αεροδρόμιο Charleroi;', answer: `${F.brusselsToCRL[0].price}€ για 1 άτομο, ${F.brusselsToCRL[1].price}€ για 2, ${F.brusselsToCRL[2].price}€ για 3, ${F.brusselsToCRL[3].price}€ για 4 και έως ${F.brusselsToCRL[7].price}€ για 8, ανά όχημα, πόρτα σε πόρτα, μέρα ή νύχτα.` },
      { question: 'Πηγαίνετε και σε αεροδρόμια εκτός Βρυξελλών;', answer: 'Ναι. Εκτός από Zaventem και Charleroi, εξυπηρετούμε Lille-Lesquin, Λιέγη, Αμβέρσα, Άμστερνταμ Schiphol, Eindhoven, Κολωνία-Βόννη, Ντίσελντορφ και Λουξεμβούργο με σταθερή τιμή ανά όχημα.' },
      { question: 'Τι γίνεται αν η πτήση μου προσγειωθεί στις 2 τα ξημερώματα;', answer: `Ο οδηγός παρακολουθεί την πτήση και περιμένει στις αφίξεις με πινακίδα ονόματος. Τα πρώτα ${F.waitingFreeMinutes} λεπτά μετά την προσγείωση είναι δωρεάν και δεν υπάρχει νυχτερινή χρέωση.` },
      { question: 'Μπορώ να κλείσω και την επιστροφή;', answer: 'Ναι. Μετάβαση και επιστροφή κλείνονται μαζί με μία συνολική τιμή· και οι δύο διαδρομές επιβεβαιώνονται γραπτώς με το τηλέφωνο του οδηγού.' },
    ],
    related: [
      {
        title: 'Σχετικές σελίδες',
        links: [
          { href: '/el/greek-driver-brussels', label: 'Έλληνας οδηγός στις Βρυξέλλες' },
          { href: '/el/pricing', label: 'Όλες οι σταθερές τιμές' },
          { href: '/el/fleet', label: 'Τα Ford minivan μας' },
          { href: '/el/services/sightseeing', label: 'Εκδρομές σε Μπριζ, Γάνδη και Βατερλό' },
          { href: '/el/faq', label: 'Συχνές ερωτήσεις' },
        ],
      },
    ],
    crumb: 'Υπηρεσίες',
  },
  hr: {
    h1: 'Taksi i privatni transferi do zračnih luka Bruxelles, Charleroi i Lille',
    lead: `Helicro je licencirana usluga privatnog prijevoza koja vas vozi između bilo koje adrese u Belgiji i zračne luke Bruxelles (Zaventem), Brussels South Charleroi ili zračne luke Lille u Ford kombiju za do 8 putnika. Iz Bruxellesa fiksna cijena iznosi ${F.brusselsToBRU[0].price}€ do ${F.brusselsToBRU[2].price}€ za Zaventem i ${F.brusselsToCRL[0].price}€ do ${F.brusselsToCRL[7].price}€ za Charleroi po vozilu, uz doček u dolascima, praćenje leta i besplatne dječje sjedalice.`,
    intro: [
      'Taksi do zračne luke u Bruxellesu obično znači taksimetar koji radi u gužvi, red na stajalištu ili aplikaciju čija se cijena udvostruči u 5 ujutro. Helicro radi obrnuto: pošaljete adresu, broj leta i broj putnika, dobijete jednu pisanu cijenu, a vozač s više od 30 godina vožnje bez nezgode stoji pred vašim vratima 10 minuta ranije. To je cijela usluga, 24 sata dnevno, 7 dana u tjednu.',
      'Tvrtku vodi Gerasimos iz Braine-l’Alleuda, južno od Bruxellesa, i pokriva Bruxelles, Flandriju i Valoniju te prekogranične vožnje do Lillea, Luksemburga, Nizozemske i Njemačke. Govori engleski, francuski i grčki; ponude i potvrde dostupne su i na hrvatskom.',
    ],
    airportsH2: 'Koje zračne luke opslužujemo',
    airportsIntro: 'Tri zračne luke pokrivaju gotovo svaki let iz Belgije. Udaljenosti i vremena u nastavku su iz centra Bruxellesa izvan vršnih sati; svako drugo polazište dobiva ponudu na zahtjev.',
    airportCols: ['Zračna luka', 'Udaljenost', 'Uobičajeno vrijeme', 'Fiksna cijena iz Bruxellesa'],
    quote: 'fiksna ponuda',
    bruPricesH2: 'Fiksne cijene Bruxelles – zračna luka Zaventem',
    crlPricesH2: 'Fiksne cijene Bruxelles – zračna luka Charleroi',
    meetingH2: 'Gdje vas čeka vozač',
    beyondH2: 'Transferi do zračne luke iz Antwerpena, Genta, Brugesa, Leuvena i Valonije',
    beyondText: 'Helicro nije usluga samo za Bruxelles. Antwerpen do Zaventema 45 km, Gent 70 km, Leuven 20 km, Bruges 110 km, Liège 95 km, Namur do Charleroia 40 km i Mons do Charleroia 45 km. Svaka ruta dobiva pisanu fiksnu cijenu po kombiju.',
    faqs: [
      { question: 'Koliko košta taksi do zračne luke Bruxelles?', answer: `S bilo koje adrese u Bruxellesu, Helicro privatni transfer do Zaventema košta ${F.brusselsToBRU[0].price}€ za 1–2 putnika, ${F.brusselsToBRU[1].price}€ za 3–4 i ${F.brusselsToBRU[2].price}€ za 5–8, po vozilu, s prtljagom i dječjim sjedalicama. Taksi s taksimetrom obično košta 45–60€.` },
      { question: 'Koliko košta taksi od Bruxellesa do zračne luke Charleroi?', answer: `${F.brusselsToCRL[0].price}€ za 1 putnika, ${F.brusselsToCRL[1].price}€ za 2, ${F.brusselsToCRL[2].price}€ za 3, ${F.brusselsToCRL[3].price}€ za 4 i do ${F.brusselsToCRL[7].price}€ za 8, po vozilu, od vrata do vrata, danju i noću.` },
      { question: 'Vozite li i do zračnih luka izvan Bruxellesa?', answer: 'Da. Osim Zaventema i Charleroia vozimo do Lille-Lesquina, Liègea, Antwerpena, Amsterdama Schiphola, Eindhovena, Kölna-Bonna, Düsseldorfa i Luksemburga po fiksnoj cijeni po vozilu.' },
      { question: 'Što ako moj let slijeće u 2 ujutro?', answer: `Vozač prati let i čeka u dolascima s natpisom vašeg imena. Prvih ${F.waitingFreeMinutes} minuta nakon slijetanja je besplatno i nema noćne doplate.` },
      { question: 'Mogu li rezervirati povratni transfer?', answer: 'Da. Odlazak i povratak rezerviraju se zajedno uz jednu ukupnu cijenu; obje vožnje potvrđuju se pisanim putem s brojem telefona vozača.' },
    ],
    related: [
      {
        title: 'Povezane stranice',
        links: [
          { href: '/hr/croatian-driver-brussels', label: 'Privatni vozač za putnike iz Hrvatske' },
          { href: '/hr/pricing', label: 'Sve fiksne cijene' },
          { href: '/hr/fleet', label: 'Naši Ford kombiji' },
          { href: '/hr/services/sightseeing', label: 'Izleti u Bruges, Gent i Waterloo' },
          { href: '/hr/faq', label: 'Česta pitanja' },
        ],
      },
    ],
    crumb: 'Usluge',
  },
};

export function buildAirportService(lang: Locale): SeoLandingContent {
  const c = COPY[lang];
  const ui = UI[lang];
  const meta = metaTranslations['services/airport'][lang];
  const url = lang === 'en' ? '/services/airport' : `/${lang}/services/airport`;

  const airportsTable: SeoSection = {
    h2: c.airportsH2,
    paragraphs: [c.airportsIntro],
    table: {
      headers: [...c.airportCols],
      rows: [
        [AIRPORTS.BRU.name[lang], `${B.toBRU!.km} km`, `${B.toBRU!.minMin}–${B.toBRU!.maxMin} min`, `${F.brusselsToBRU[0].price}€ – ${F.brusselsToBRU[2].price}€`],
        [AIRPORTS.CRL.name[lang], `${B.toCRL!.km} km`, `${B.toCRL!.minMin}–${B.toCRL!.maxMin} min`, `${F.brusselsToCRL[0].price}€ – ${F.brusselsToCRL[7].price}€`],
        [AIRPORTS.LIL.name[lang], `${B.toLIL!.km} km`, `${B.toLIL!.minMin}–${B.toLIL!.maxMin} min`, c.quote],
      ],
    },
  };

  const bruPrices: SeoSection = { h2: c.bruPricesH2, paragraphs: [ui.perVehicle], table: brusselsPriceTable(lang, 'BRU') };
  const crlPrices: SeoSection = { h2: c.crlPricesH2, table: brusselsPriceTable(lang, 'CRL') };
  const meeting: SeoSection = {
    h2: c.meetingH2,
    bullets: [
      `${AIRPORTS.BRU.shortName[lang]}: ${AIRPORTS.BRU.meetingPoint[lang]}`,
      `${AIRPORTS.CRL.shortName[lang]}: ${AIRPORTS.CRL.meetingPoint[lang]}`,
      `${AIRPORTS.LIL.shortName[lang]}: ${AIRPORTS.LIL.meetingPoint[lang]}`,
    ],
  };
  const beyond: SeoSection = { h2: c.beyondH2, paragraphs: [c.beyondText] };

  return {
    lang,
    url,
    type: 'Service',
    title: meta.title,
    description: meta.description,
    h1: c.h1,
    lead: c.lead,
    intro: c.intro,
    sections: [airportsTable, bruPrices, crlPrices, meeting, howItWorksSection(lang), includedSection(lang), comparisonSection(lang), beyond],
    faqs: [...c.faqs, ...pickFaqs(lang, ['cancel', 'delay', 'seats', 'pay', 'night', 'luggage'])],
    breadcrumbs: [
      { name: ui.home, url: lang === 'en' ? '/' : `/${lang}` },
      { name: c.crumb, url },
    ],
    related: c.related,
    alternates: sharedPathAlternates('/services/airport'),
    schema: {
      serviceName: c.h1,
      serviceType: 'Airport transfer',
      areaServed: [
        { type: 'Country', name: 'Belgium' },
        { type: 'City', name: 'Brussels' },
        { type: 'City', name: 'Zaventem' },
        { type: 'City', name: 'Charleroi' },
        { type: 'City', name: 'Lille' },
      ],
      offers: [
        ...F.brusselsToBRU.map((p) => ({ name: `Brussels to Brussels Airport, ${p.pax} passengers`, price: p.price })),
        ...F.brusselsToCRL.map((p) => ({ name: `Brussels to Charleroi Airport, ${p.pax} passenger(s)`, price: p.price })),
      ],
    },
    cta: { headline: ui.ctaHeadline, text: ui.ctaText },
    image: '/images/airport-2.jpg',
  };
}
