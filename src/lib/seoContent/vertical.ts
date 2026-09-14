import { FIXED_PRICES } from '@/config/seoFacts';
import type { SEOPage } from '@/config/seoPages';
import { UI, howItWorksSection, includedSection, pickFaqs } from './shared';
import type { SeoFaq, SeoLandingContent, SeoLinkGroup, SeoSection } from './types';
import type { AlternateMap, Locale } from '@/lib/seo';

interface VerticalSpec {
  lang: Locale;
  lead: string;
  intro: string[];
  sections: SeoSection[];
  faqs: SeoFaq[];
  genericFaqKeys: string[];
  related: SeoLinkGroup[];
  alternates: AlternateMap;
  serviceType: string;
  areaServed: { type: 'City' | 'Country'; name: string }[];
  crumb: { name: string; url: string };
  cta: { headline: string; text: string };
  image: string;
}

const F = FIXED_PRICES;

const VERTICALS: Record<string, VerticalSpec> = {
  '/en/wedding-transport-belgium': {
    lang: 'en',
    lead: 'Helicro organises wedding transport across Belgium with 8-seat Ford minivans: guest shuttles between hotels, ceremony and venue, a dedicated vehicle for the couple and family, and late-night returns at a fixed price per vehicle agreed months in advance.',
    intro: [
      'Belgian weddings often spread across three locations: a town hall ceremony, a church or outdoor venue, and a reception in a castle, farm or event hall in Walloon Brabant, Flanders or the Ardennes. Getting 40 guests, half of them arriving from Brussels Airport, between those points on time is a logistics job, and it is the job Helicro takes off the couple’s hands.',
      'Gerasimos has driven wedding parties across Belgium for years: he arrives early, keeps the vehicle spotless, coordinates pickup waves with your planner or a designated family member, and stays discreetly available until the last guest is home. For larger weddings, additional licensed minivans are coordinated under one contact and one invoice.',
    ],
    sections: [
      {
        h2: 'Wedding transport options',
        bullets: [
          'Guest shuttle loop: repeated runs between hotel, ceremony and reception, timed to the programme',
          'Bride, groom and close family: a reserved minivan with a dedicated driver for the whole day',
          'Airport waves: collecting international guests at Brussels or Charleroi Airport in the days before the wedding',
          'Night returns: a driver on standby from midnight to the end of the party, fixed price, no meter',
          'Multi-vehicle coordination: two to four minivans for 16 to 32 guests per wave, one point of contact',
        ],
      },
      {
        h2: 'How wedding pricing works',
        paragraphs: [
          `Wedding transport is quoted as a fixed package based on the number of vehicles, the hours of standby and the distances involved, confirmed in writing after a short call. A single-vehicle full day starts at ${F.dayTourFrom}€; guest shuttle loops and multi-vehicle packages are priced per plan. ${F.cancellationHours}-hour free cancellation applies to individual rides; wedding packages have their own written terms.`,
        ],
      },
      {
        h2: 'Where we cover',
        paragraphs: ['The whole of Belgium: Brussels and its castles and event venues, Walloon Brabant (Waterloo, La Hulpe, Genval), the Ardennes (Durbuy, Spa, Dinant), Flanders (Bruges, Ghent, Antwerp, Leuven) and cross-border venues in Luxembourg and northern France.'],
      },
    ],
    faqs: [
      { question: 'How many guests can one vehicle carry?', answer: 'Each Ford Transit Custom or Tourneo Custom seats 8 passengers. A shuttle loop with one vehicle moves 8 guests every 15 to 30 minutes depending on distance; for 40 guests in one wave we coordinate several minivans.' },
      { question: 'Can the vehicle be decorated?', answer: 'Yes. Ribbons, flowers and a “Just Married” sign are welcome; we prepare the vehicle with you or your florist before the ceremony at no extra cost.' },
      { question: 'Do you stay until the end of the party?', answer: 'Yes. A standby driver waits at the venue for the agreed period and drives guests home in waves at a fixed price. Late-night standby is booked by the hour block, with no night surcharge.' },
    ],
    genericFaqKeys: ['pay', 'seats', 'lang'],
    related: [
      {
        title: 'Related services',
        links: [
          { href: '/services/events', label: 'Weddings and private parties' },
          { href: '/services/event-transfers', label: 'Event transfers' },
          { href: '/fleet', label: 'See the wedding fleet' },
          { href: '/en/airport-transfer/brussels-zaventem', label: 'Airport pickups for guests' },
        ],
      },
    ],
    alternates: { en: '/en/wedding-transport-belgium' },
    serviceType: 'Wedding transport',
    areaServed: [{ type: 'Country', name: 'Belgium' }],
    crumb: { name: 'Weddings and private parties', url: '/services/events' },
    cta: { headline: 'Plan your wedding transport', text: 'Send the date, venues, guest count and where guests are staying. You receive a written plan and fixed price within 48 hours.' },
    image: '/images/event-service.jpg',
  },
  '/en/corporate-shuttle-brussels': {
    lang: 'en',
    lead: 'Helicro provides a corporate shuttle and executive chauffeur service in Brussels for companies, EU institutions, NATO-related organisations and embassies: recurring airport runs, hourly hire for meetings, conference shuttles and roadshows, with monthly VAT invoicing and one fixed price per ride.',
    intro: [
      'Brussels hosts more international meetings than almost any other city, and the people attending them do not want to think about transport. Helicro replaces the app lottery with a named driver, a clean 8-seat Ford minivan, and a rate card agreed once for the year, so travel managers, executive assistants and protocol officers can book in one WhatsApp message.',
      'Gerasimos comes from a 30-year military background: punctuality, discretion and route preparation are habits, not promises. He speaks English, French and Greek, dresses formally for corporate work and has driven delegations to the European Quarter, NATO in Evere, Brussels Expo and the SQUARE convention centre.',
    ],
    sections: [
      {
        h2: 'Corporate services',
        bullets: [
          'Executive airport transfers: Brussels Airport, Charleroi, Lille and Brussels-Midi Eurostar, meet and greet with a company sign',
          'Hourly hire: a driver and minivan at your disposal for meetings across Brussels, from 3 hours',
          'Conference and event shuttles: hotel to venue loops for delegations of 8 to 40 people',
          'Roadshows and multi-city days: Brussels, Antwerp, Luxembourg, Lille or Amsterdam in one vehicle',
          'Recurring contracts: weekly staff shuttles and embassy runs at a fixed annual rate card',
        ],
      },
      {
        h2: 'Billing and administration',
        paragraphs: [
          'Corporate clients receive a monthly invoice from Helicro SRL (VAT BE 0804.095.653) listing every ride with date, passenger reference and cost centre, payable by transfer. Purchase orders, cost-centre codes and travel-policy caps can be applied per booking. Individual rides can still be paid by card or cash when needed.',
        ],
      },
      {
        h2: 'Discretion and reliability',
        paragraphs: [
          'Passenger names, itineraries and conversations stay in the vehicle. Drivers arrive 10 minutes early, monitor flights and traffic, and confirm each pickup by message. For sensitive movements, unmarked vehicles and a single dedicated driver can be arranged.',
        ],
      },
    ],
    faqs: [
      { question: 'Can we set up a corporate account?', answer: 'Yes. After a short call we agree a rate card for your usual routes, a booking channel (WhatsApp, email or a shared form) and monthly invoicing with the references your finance team needs.' },
      { question: 'How is hourly hire priced?', answer: 'Hourly hire is quoted per block of hours with the vehicle and driver at your disposal, kilometres within Brussels included. Half-day and full-day rates are fixed in advance; waiting time is never charged by the meter.' },
      { question: 'Do you handle groups larger than 8?', answer: 'Yes. For delegations of 9 to 40 people we coordinate several licensed minivans under one contact, one schedule and one invoice.' },
    ],
    genericFaqKeys: ['cancel', 'lang'],
    related: [
      {
        title: 'Related services',
        links: [
          { href: '/services/corporate', label: 'Corporate chauffeur service' },
          { href: '/en/embassy-transport-brussels', label: 'Embassy and diplomatic transport' },
          { href: '/en/airport-transfer/brussels-zaventem', label: 'Brussels Airport transfers' },
          { href: '/services/event-transfers', label: 'Conference and event transfers' },
        ],
      },
    ],
    alternates: { en: '/en/corporate-shuttle-brussels' },
    serviceType: 'Corporate chauffeur and shuttle service',
    areaServed: [{ type: 'City', name: 'Brussels' }, { type: 'Country', name: 'Belgium' }],
    crumb: { name: 'Corporate shuttle', url: '/services/corporate' },
    cta: { headline: 'Request a corporate quote', text: 'Tell us your typical routes, volumes and billing requirements. You receive a rate card proposal within one working day.' },
    image: '/images/coorporation-services.jpg',
  },
  '/en/embassy-transport-brussels': {
    lang: 'en',
    lead: 'Helicro provides discreet embassy and diplomatic transport in Brussels: airport meet and greet for arriving diplomats and families, daily staff runs, delegation shuttles during summits and hourly chauffeur hire, with a vetted driver of military background and fixed pricing.',
    intro: [
      'Brussels is home to more than 180 embassies and missions plus the EU institutions and NATO, and their staff move constantly between the airport, the European Quarter, Evere and residential districts such as Uccle, Woluwe and Tervuren. Helicro serves this community with a driver who understands protocol, timing and confidentiality.',
      'Gerasimos spent three decades in the Greek military before becoming a professional chauffeur in Belgium. He is used to precise schedules, waiting without being asked twice and keeping what he hears to himself. He speaks English, French and Greek and has driven for Greek and international diplomatic families across Brussels.',
    ],
    sections: [
      {
        h2: 'Diplomatic transport services',
        bullets: [
          'Airport meet and greet for arriving and departing diplomats, families and visiting officials',
          'Delegation shuttles during EU Councils, NATO summits and ministerial visits',
          'Daily or weekly staff runs between residences, the embassy and the institutions',
          'Hourly chauffeur hire for official programmes, receptions and national-day events',
          'Discreet unmarked minivan, formal dress, no third-party subcontracting without agreement',
        ],
      },
      {
        h2: 'Working with missions',
        paragraphs: [
          'Bookings come from the protocol or administrative officer by WhatsApp or email; a written confirmation with driver name and vehicle plate follows. Monthly invoicing from Helicro SRL with VAT details, cost references and the mission’s purchase order number is standard. Rides are fixed price, so budgets are predictable across the year.',
        ],
      },
    ],
    faqs: [
      { question: 'Is the driver vetted?', answer: 'Gerasimos is the owner-driver with a 30-year military service record and a clean Belgian professional driving licence. Identity documents and references are provided to missions on request.' },
      { question: 'Can you provide the same driver every time?', answer: 'Yes. Missions with recurring needs get Gerasimos as their dedicated driver and a named backup for absences, both briefed on your protocol.' },
      { question: 'Do you drive to other capitals?', answer: 'Yes. Luxembourg, The Hague, Paris, Strasbourg and Cologne are regular one-day or overnight destinations at a fixed price per journey.' },
    ],
    genericFaqKeys: ['pay', 'cancel', 'lang'],
    related: [
      {
        title: 'Related services',
        links: [
          { href: '/en/corporate-shuttle-brussels', label: 'Corporate shuttle service' },
          { href: '/services/corporate', label: 'Corporate chauffeur' },
          { href: '/en/greek-speaking-driver-brussels', label: 'Greek-speaking driver' },
          { href: '/en/airport-transfer/brussels-zaventem', label: 'Brussels Airport transfers' },
        ],
      },
    ],
    alternates: { en: '/en/embassy-transport-brussels' },
    serviceType: 'Diplomatic and embassy transport',
    areaServed: [{ type: 'City', name: 'Brussels' }],
    crumb: { name: 'Corporate shuttle', url: '/services/corporate' },
    cta: { headline: 'Contact us for embassy transport', text: 'Send your requirements by WhatsApp or email and receive a written proposal with rates and driver details.' },
    image: '/images/coorporation-services.jpg',
  },
  '/en/cruise-transfer/zeebrugge': {
    lang: 'en',
    lead: 'Helicro drives cruise passengers between Zeebrugge or Antwerp cruise terminals and Brussels Airport, Brussels city hotels or Bruges at a fixed price per minivan for up to 8 passengers. Zeebrugge to Brussels Airport is about 115 km and 80 to 95 minutes; Zeebrugge to Bruges is 15 km.',
    intro: [
      'Zeebrugge is the Belgian port of call for most North Sea and Northern Europe cruises, but it has no rail link from the terminal and the shuttle buses only run to Bruges or Blankenberge. Passengers flying out of Brussels the same day, or arriving the day before to board, need a reliable door-to-door connection with room for cruise luggage.',
      'Helicro meets you at the terminal exit with a name sign, loads the suitcases, and drives straight to Brussels Airport, a Brussels hotel or a Bruges hotel. For port days, a private Bruges or Ghent tour from the ship is also possible with a guaranteed return before all-aboard.',
    ],
    sections: [
      {
        h2: 'Cruise transfer routes',
        table: {
          headers: ['Route', 'Distance', 'Typical time'],
          rows: [
            ['Zeebrugge cruise terminal to Brussels Airport (BRU)', '115 km', '80–95 min'],
            ['Zeebrugge cruise terminal to Brussels city centre', '110 km', '75–90 min'],
            ['Zeebrugge cruise terminal to Bruges', '15 km', '20–30 min'],
            ['Antwerp cruise terminal to Brussels Airport (BRU)', '45 km', '40–55 min'],
            ['Brussels Airport to Zeebrugge (pre-cruise)', '115 km', '80–95 min'],
          ],
        },
        paragraphs: ['Fixed price per vehicle for up to 8 passengers with cruise luggage, quoted in writing. Timings exclude port security queues on disembarkation days.'],
      },
      {
        h2: 'Port-day tours from the ship',
        paragraphs: ['With 8 to 10 hours in port, a private minivan lets a group see Bruges in the morning and Ghent or the Flanders Fields in the afternoon, with the driver tracking the all-aboard time. Tours start at the terminal and end at the terminal.'],
      },
    ],
    faqs: [
      { question: 'Where does the driver wait at Zeebrugge cruise terminal?', answer: 'At the passenger exit of the terminal building with a name sign. Send us your ship name and disembarkation time; we monitor port arrivals and adjust if the ship docks late.' },
      { question: 'How early should I leave Zeebrugge for a flight from Brussels?', answer: 'Allow 90 minutes of driving plus 2 to 3 hours at the airport. For a 13:00 European flight, disembarking by 8:30 and leaving the port by 9:00 is comfortable.' },
      { question: 'Can you store luggage during a port-day tour?', answer: 'Yes. Luggage stays locked in the vehicle while you visit Bruges or Ghent, and the driver returns you to the terminal before all-aboard.' },
    ],
    genericFaqKeys: ['cancel', 'seats', 'pay', 'luggage'],
    related: [
      {
        title: 'Related pages',
        links: [
          { href: '/en/route/bruges-brussels-airport', label: 'Bruges to Brussels Airport' },
          { href: '/en/service-area/bruges', label: 'Private driver in Bruges' },
          { href: '/en/day-trip/bruges', label: 'Private Bruges day trip' },
          { href: '/en/airport-transfer/brussels-zaventem', label: 'Brussels Airport transfers' },
        ],
      },
    ],
    alternates: { en: '/en/cruise-transfer/zeebrugge' },
    serviceType: 'Cruise port transfer',
    areaServed: [{ type: 'City', name: 'Zeebrugge' }, { type: 'City', name: 'Bruges' }, { type: 'City', name: 'Antwerp' }],
    crumb: { name: 'Airport transfers', url: '/services/airport' },
    cta: { headline: 'Book your cruise transfer', text: 'Send your ship, date, disembarkation time and flight. You receive a fixed price within minutes.' },
    image: '/images/door-to-door-transport.jpg',
  },
  '/en/greek-speaking-driver-brussels': {
    lang: 'en',
    lead: 'Helicro is run by Gerasimos, a Greek professional driver who has lived in Belgium for decades. Greek travellers, families, students and diaspora visitors get a Greek-speaking driver in Brussels for airport transfers, day trips and business rides at a fixed price per minivan.',
    intro: [
      'Around 25,000 Greeks live in Belgium, most of them in Brussels, and thousands more arrive every year for the EU institutions, Erasmus, medical appointments and family visits. Arriving at Zaventem or Charleroi and being greeted in Greek, with the pickup, prices and receipts explained in your own language, removes the last bit of friction from the trip.',
      'Gerasimos also speaks English and French, so mixed groups and Belgian relatives are covered in the same vehicle. He knows the Greek community’s addresses: the Orthodox cathedral on Avenue de Stalingrad, the Greek school, the Permanent Representation, and the tavernas of Ixelles.',
    ],
    sections: [
      {
        h2: 'Services for Greek travellers in Belgium',
        bullets: [
          `Airport transfers from Brussels Airport and Charleroi at the fixed Brussels rates: ${F.brusselsToBRU[0].price}€ to ${F.brusselsToBRU[2].price}€ for Zaventem, ${F.brusselsToCRL[0].price}€ to ${F.brusselsToCRL[7].price}€ for Charleroi`,
          'Rides to hospitals, universities, the Permanent Representation and the European Parliament with a driver who can translate at reception',
          'Day trips to Bruges, Ghent, Waterloo and the Ardennes with commentary in Greek',
          'Transfers for Greek weddings, baptisms and community events across Belgium',
          'Trips to Luxembourg, Paris, Amsterdam and Cologne for visiting families',
        ],
      },
      {
        h2: 'Contact in Greek',
        paragraphs: ['Call or WhatsApp the Belgian number +32 472 35 88 05 or the Greek number +30 697 458 1706 and you will be answered in Greek. Quotes, confirmations and invoices are sent in Greek or English as you prefer. The full website is also available in Greek.'],
      },
    ],
    faqs: [
      { question: 'Does the driver really speak Greek?', answer: 'Yes. Gerasimos is Greek, born and raised in Greece, and has lived in Belgium for decades. Greek is his native language; he also speaks English and French fluently.' },
      { question: 'Can I pay in a Greek bank account or with a Greek card?', answer: 'Any EU card is accepted, as are SEPA bank transfers from Greek accounts. Cash to the driver is also possible.' },
      { question: 'Is there a Greek phone number?', answer: 'Yes, +30 697 458 1706 on WhatsApp and calls, in addition to the Belgian number +32 472 35 88 05.' },
    ],
    genericFaqKeys: ['cancel', 'seats', 'delay'],
    related: [
      {
        title: 'Related pages',
        links: [
          { href: '/el/greek-driver-brussels', label: 'Έλληνας οδηγός στις Βρυξέλλες (ελληνική σελίδα)' },
          { href: '/el', label: 'Helicro στα Ελληνικά' },
          { href: '/en/airport-transfer/brussels-zaventem', label: 'Brussels Airport transfers' },
          { href: '/en/embassy-transport-brussels', label: 'Embassy and diplomatic transport' },
        ],
      },
    ],
    alternates: { en: '/en/greek-speaking-driver-brussels', el: '/el/greek-driver-brussels' },
    serviceType: 'Greek-speaking private driver',
    areaServed: [{ type: 'City', name: 'Brussels' }, { type: 'Country', name: 'Belgium' }],
    crumb: { name: 'Private driver Brussels', url: '/en/service-area/brussels' },
    cta: { headline: 'Book in Greek', text: 'Στείλτε μήνυμα στο WhatsApp στα Ελληνικά με ημερομηνία, πτήση και άτομα. Απαντάμε μέσα σε λίγα λεπτά με σταθερή τιμή.' },
    image: '/images/gerasimos-portrait.jpg',
  },
  '/el/greek-driver-brussels': {
    lang: 'el',
    lead: `Η Helicro ανήκει στον Γεράσιμο, Έλληνα επαγγελματία οδηγό που ζει δεκαετίες στο Βέλγιο. Έλληνες ταξιδιώτες, οικογένειες, φοιτητές και ομογενείς έχουν Έλληνα οδηγό στις Βρυξέλλες για μεταφορές αεροδρομίου, εκδρομές και επαγγελματικές διαδρομές με σταθερή τιμή ανά minivan: ${F.brusselsToBRU[0].price}€ έως ${F.brusselsToBRU[2].price}€ για Zaventem και ${F.brusselsToCRL[0].price}€ έως ${F.brusselsToCRL[7].price}€ για Charleroi από τις Βρυξέλλες.`,
    intro: [
      'Περίπου 25.000 Έλληνες ζουν στο Βέλγιο, οι περισσότεροι στις Βρυξέλλες, και χιλιάδες ακόμη έρχονται κάθε χρόνο για τα ευρωπαϊκά όργανα, το Erasmus, ιατρικά ραντεβού και οικογενειακές επισκέψεις. Το να σας υποδέχονται στα Ελληνικά στο Zaventem ή στο Charleroi, με την παραλαβή, τις τιμές και τις αποδείξεις εξηγημένες στη γλώσσα σας, αφαιρεί το τελευταίο άγχος του ταξιδιού.',
      'Ο Γεράσιμος μιλά επίσης Αγγλικά και Γαλλικά, οπότε μικτές παρέες και Βέλγοι συγγενείς εξυπηρετούνται στο ίδιο όχημα. Γνωρίζει τις διευθύνσεις της ελληνικής κοινότητας: τον Καθεδρικό των Παμμεγίστων Ταξιαρχών, το ελληνικό σχολείο, τη Μόνιμη Αντιπροσωπεία και τις ταβέρνες της Ixelles.',
    ],
    sections: [
      {
        h2: 'Υπηρεσίες για Έλληνες ταξιδιώτες στο Βέλγιο',
        bullets: [
          `Μεταφορές αεροδρομίου από Zaventem και Charleroi με τις σταθερές τιμές Βρυξελλών: ${F.brusselsToBRU[0].price}€ έως ${F.brusselsToBRU[2].price}€ για Zaventem, ${F.brusselsToCRL[0].price}€ έως ${F.brusselsToCRL[7].price}€ για Charleroi, ανά όχημα`,
          'Διαδρομές σε νοσοκομεία, πανεπιστήμια, τη Μόνιμη Αντιπροσωπεία και το Ευρωπαϊκό Κοινοβούλιο με οδηγό που μεταφράζει στην υποδοχή',
          'Ημερήσιες εκδρομές σε Μπριζ, Γάνδη, Βατερλό και Αρδέννες με σχόλια στα Ελληνικά',
          'Μεταφορές για ελληνικούς γάμους, βαπτίσεις και εκδηλώσεις της κοινότητας σε όλο το Βέλγιο',
          'Ταξίδια σε Λουξεμβούργο, Παρίσι, Άμστερνταμ και Κολωνία για οικογένειες που επισκέπτονται',
        ],
      },
      {
        h2: 'Πώς γίνεται η κράτηση στα Ελληνικά',
        paragraphs: ['Καλέστε ή στείλτε WhatsApp στο βελγικό +32 472 35 88 05 ή στο ελληνικό +30 697 458 1706 και θα σας απαντήσουν στα Ελληνικά. Προσφορές, επιβεβαιώσεις και τιμολόγια αποστέλλονται στα Ελληνικά ή στα Αγγλικά, όπως προτιμάτε. Ακύρωση δωρεάν έως 24 ώρες πριν.'],
      },
      {
        h2: 'Σημείο συνάντησης στα αεροδρόμια',
        bullets: [
          'Zaventem: ο οδηγός σας περιμένει στην αίθουσα αφίξεων, μπροστά από το καφέ, με πινακίδα με το όνομά σας· 60 λεπτά δωρεάν αναμονή μετά την προσγείωση',
          'Charleroi: ο οδηγός σας περιμένει στη ζώνη Kiss & Ride ή μέσα στον τερματικό με πινακίδα Helicro· παρακολουθούμε ζωντανά τις καθυστερήσεις των Aegean, Ryanair και Wizz Air',
        ],
      },
    ],
    faqs: [
      { question: 'Μιλάει πραγματικά Ελληνικά ο οδηγός;', answer: 'Ναι. Ο Γεράσιμος είναι Έλληνας, γεννημένος και μεγαλωμένος στην Ελλάδα, και ζει δεκαετίες στο Βέλγιο. Τα Ελληνικά είναι η μητρική του γλώσσα· μιλά επίσης άπταιστα Αγγλικά και Γαλλικά.' },
      { question: 'Πόσο κοστίζει η μεταφορά από το αεροδρόμιο στις Βρυξέλλες;', answer: `Από το Zaventem προς οποιαδήποτε διεύθυνση στις Βρυξέλλες: ${F.brusselsToBRU[0].price}€ για 1–2 άτομα, ${F.brusselsToBRU[1].price}€ για 3–4 και ${F.brusselsToBRU[2].price}€ για 5–8. Από το Charleroi: ${F.brusselsToCRL[0].price}€ για 1 άτομο έως ${F.brusselsToCRL[7].price}€ για 8. Οι τιμές είναι ανά όχημα, με αποσκευές και παιδικά καθίσματα.` },
      { question: 'Μπορώ να πληρώσω με ελληνική κάρτα ή τραπεζική μεταφορά;', answer: 'Ναι. Δεκτές όλες οι κάρτες της ΕΕ και μεταφορές SEPA από ελληνικούς λογαριασμούς. Μετρητά στον οδηγό επίσης δυνατά.' },
      { question: 'Υπάρχει ελληνικό τηλέφωνο;', answer: 'Ναι, +30 697 458 1706 για WhatsApp και κλήσεις, μαζί με το βελγικό +32 472 35 88 05.' },
    ],
    genericFaqKeys: ['cancel', 'seats', 'delay'],
    related: [
      {
        title: 'Σχετικές σελίδες',
        links: [
          { href: '/el/services/airport', label: 'Μεταφορές αεροδρομίου' },
          { href: '/el/pricing', label: 'Σταθερές τιμές' },
          { href: '/el/services/sightseeing', label: 'Ιδιωτικές εκδρομές' },
          { href: '/el/about-us', label: 'Ο Γεράσιμος και η Helicro' },
          { href: '/en/greek-speaking-driver-brussels', label: 'Greek-speaking driver (English page)' },
        ],
      },
    ],
    alternates: { el: '/el/greek-driver-brussels', en: '/en/greek-speaking-driver-brussels' },
    serviceType: 'Greek-speaking private driver',
    areaServed: [{ type: 'City', name: 'Brussels' }, { type: 'Country', name: 'Belgium' }],
    crumb: { name: 'Μεταφορές αεροδρομίου', url: '/el/services/airport' },
    cta: { headline: 'Κράτηση στα Ελληνικά', text: 'Στείλτε μήνυμα στο WhatsApp με ημερομηνία, πτήση, διεύθυνση και άτομα. Απαντάμε μέσα σε λίγα λεπτά με σταθερή τιμή.' },
    image: '/images/gerasimos-portrait.jpg',
  },
  '/hr/croatian-driver-brussels': {
    lang: 'hr',
    lead: `Helicro nudi privatni prijevoz u Bruxellesu za putnike iz Hrvatske: transferi iz zračnih luka Zaventem i Charleroi, izleti i poslovne vožnje u Ford kombiju za 8 osoba po fiksnoj cijeni. Od Bruxellesa do Zaventema ${F.brusselsToBRU[0].price}€ do ${F.brusselsToBRU[2].price}€, do Charleroia ${F.brusselsToCRL[0].price}€ do ${F.brusselsToCRL[7].price}€ po vozilu. Vozač govori engleski, francuski i grčki; rezervacija i ponuda na hrvatskom.`,
    intro: [
      'Hrvati u Bruxellesu rade u EU institucijama, Stalnom predstavništvu, NATO-u i međunarodnim tvrtkama, a obitelji i prijatelji dolaze u posjet Croatia Airlinesom i Ryanairom preko Zaventema i Charleroia. Helicro je izbor mnogih hrvatskih putnika jer je cijena poznata unaprijed, vozač čeka i kad let kasni, a rezervacija se rješava jednom WhatsApp porukom.',
      'Vlasnik i vozač Gerasimos ima više od 30 godina vožnje bez nezgode u Belgiji i vojnu disciplinu koju putnici iz Hrvatske redovito spominju u recenzijama. Komunikacija tijekom vožnje je na engleskom; web stranica, ponude i potvrde dostupne su na hrvatskom.',
    ],
    sections: [
      {
        h2: 'Usluge za putnike iz Hrvatske',
        bullets: [
          `Transferi iz zračnih luka Zaventem i Charleroi po fiksnim cijenama: ${F.brusselsToBRU[0].price}€ do ${F.brusselsToBRU[2].price}€ za Zaventem, ${F.brusselsToCRL[0].price}€ do ${F.brusselsToCRL[7].price}€ za Charleroi, po vozilu`,
          'Vožnje do Europskog parlamenta, Vijeća, Stalnog predstavništva i NATO-a za službena putovanja',
          'Jednodnevni izleti u Bruges, Gent, Waterloo i Ardene s vozačem',
          'Prijevoz gostiju za vjenčanja, krštenja i proslave hrvatske zajednice u Belgiji',
          'Putovanja u Luksemburg, Pariz, Amsterdam i Köln za obitelji u posjetu',
        ],
      },
      {
        h2: 'Mjesto sastanka u zračnim lukama',
        bullets: [
          'Zaventem: vozač vas čeka u dvorani za dolaske, ispred kafića, s natpisom vašeg imena; 60 minuta besplatnog čekanja nakon slijetanja',
          'Charleroi: vozač vas čeka na Kiss & Ride zoni ili unutar terminala s natpisom Helicro; kašnjenja Ryanaira pratimo uživo',
        ],
      },
      {
        h2: 'Kako rezervirati',
        paragraphs: ['Pošaljite WhatsApp poruku na +32 472 35 88 05 s datumom, brojem leta, adresom i brojem putnika. Fiksnu cijenu dobivate u nekoliko minuta, plaćanje je karticom, bankovnim prijenosom ili gotovinom, a otkazivanje je besplatno do 24 sata prije vožnje.'],
      },
    ],
    faqs: [
      { question: 'Govori li vozač hrvatski?', answer: 'Ne. Gerasimos govori engleski, francuski i grčki. Web stranica, ponude i potvrde rezervacije dostupne su na hrvatskom, a mnogi hrvatski putnici koriste Helicro godinama i ostavljaju recenzije na hrvatskom.' },
      { question: 'Koliko košta transfer iz zračne luke do Bruxellesa?', answer: `Iz Zaventema do bilo koje adrese u Bruxellesu: ${F.brusselsToBRU[0].price}€ za 1–2 osobe, ${F.brusselsToBRU[1].price}€ za 3–4 i ${F.brusselsToBRU[2].price}€ za 5–8. Iz Charleroia: ${F.brusselsToCRL[0].price}€ za 1 osobu do ${F.brusselsToCRL[7].price}€ za 8. Cijene su po vozilu, s prtljagom i dječjim sjedalicama.` },
      { question: 'Mogu li platiti hrvatskom karticom?', answer: 'Da. Prihvaćaju se sve EU kartice i SEPA prijenosi s hrvatskih računa. Moguće je i plaćanje gotovinom vozaču.' },
    ],
    genericFaqKeys: ['cancel', 'seats', 'delay'],
    related: [
      {
        title: 'Povezane stranice',
        links: [
          { href: '/hr/services/airport', label: 'Transferi do zračne luke' },
          { href: '/hr/pricing', label: 'Fiksne cijene' },
          { href: '/hr/services/sightseeing', label: 'Privatni izleti' },
          { href: '/hr/reviews', label: 'Recenzije putnika' },
          { href: '/hr/about-us', label: 'O Gerasimosu i Helicru' },
        ],
      },
    ],
    alternates: { hr: '/hr/croatian-driver-brussels', en: '/en/service-area/brussels' },
    serviceType: 'Private driver for Croatian travellers',
    areaServed: [{ type: 'City', name: 'Brussels' }, { type: 'Country', name: 'Belgium' }],
    crumb: { name: 'Transferi do zračne luke', url: '/hr/services/airport' },
    cta: { headline: 'Rezervirajte na hrvatskom', text: 'Pošaljite WhatsApp poruku s datumom, letom, adresom i brojem putnika. Odgovaramo u nekoliko minuta s fiksnom cijenom.' },
    image: '/images/gerasimos-portrait.jpg',
  },
};

export function hasVertical(url: string): boolean {
  return Boolean(VERTICALS[url]);
}

export function buildVertical(page: SEOPage): SeoLandingContent {
  const v = VERTICALS[page.url];
  const ui = UI[v.lang];
  return {
    lang: v.lang,
    url: page.url,
    type: page.type,
    title: page.title,
    description: page.description,
    h1: page.h1,
    lead: v.lead,
    intro: v.intro,
    sections: [...v.sections, howItWorksSection(v.lang), includedSection(v.lang)],
    faqs: [...v.faqs, ...pickFaqs(v.lang, v.genericFaqKeys)],
    breadcrumbs: [
      { name: ui.home, url: v.lang === 'en' ? '/' : `/${v.lang}` },
      v.crumb,
      { name: page.h1, url: page.url },
    ],
    related: v.related,
    alternates: v.alternates,
    schema: { serviceName: page.h1, serviceType: v.serviceType, areaServed: v.areaServed },
    cta: v.cta,
    image: v.image,
  };
}
