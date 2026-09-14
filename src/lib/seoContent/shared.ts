import type { Locale } from '@/lib/seo';
import { FIXED_PRICES } from '@/config/seoFacts';
import type { SeoFaq, SeoSection, SeoStep, SeoTable } from './types';

export interface SharedUi {
  home: string;
  related: string;
  faq: string;
  fixedPrices: string;
  howItWorks: string;
  included: string;
  compare: string;
  otherLanguages: string;
  meetingPoint: string;
  travelInfo: string;
  quote: string;
  ctaHeadline: string;
  ctaText: string;
  perVehicle: string;
  passengers: string;
  price: string;
  distance: string;
  time: string;
  hubs: string;
  routes: string;
  cities: string;
  services: string;
}

export const UI: Record<Locale, SharedUi> = {
  en: {
    home: 'Home',
    related: 'Related pages',
    faq: 'Frequently asked questions',
    fixedPrices: 'Fixed prices',
    howItWorks: 'How booking works',
    included: 'What is included',
    compare: 'Private transfer, train, shuttle bus or ride-hailing app?',
    otherLanguages: 'This page in other languages',
    meetingPoint: 'Meeting point and pickup instructions',
    travelInfo: 'Distance, travel time and traffic',
    quote: 'Get a fixed quote',
    ctaHeadline: 'Ready to book?',
    ctaText: 'Send your date, pickup address, flight number and group size on WhatsApp or through the form. You receive a fixed price within minutes and free cancellation up to 24 hours before pickup.',
    perVehicle: 'Prices are per vehicle, not per person, and include VAT, luggage and child seats.',
    passengers: 'Passengers',
    price: 'Fixed price',
    distance: 'Distance',
    time: 'Typical travel time',
    hubs: 'Airport transfer hubs',
    routes: 'Popular routes',
    cities: 'Service areas',
    services: 'Services',
  },
  nl: {
    home: 'Home',
    related: 'Gerelateerde pagina’s',
    faq: 'Veelgestelde vragen',
    fixedPrices: 'Vaste prijzen',
    howItWorks: 'Zo werkt boeken',
    included: 'Wat is inbegrepen',
    compare: 'Privévervoer, trein, shuttlebus of taxi-app?',
    otherLanguages: 'Deze pagina in andere talen',
    meetingPoint: 'Ontmoetingspunt en ophaalinstructies',
    travelInfo: 'Afstand, reistijd en verkeer',
    quote: 'Vraag een vaste prijs',
    ctaHeadline: 'Klaar om te boeken?',
    ctaText: 'Stuur uw datum, ophaaladres, vluchtnummer en groepsgrootte via WhatsApp of het formulier. U ontvangt binnen enkele minuten een vaste prijs en annuleert gratis tot 24 uur voor de rit.',
    perVehicle: 'Prijzen gelden per voertuig, niet per persoon, en zijn inclusief btw, bagage en kinderzitjes.',
    passengers: 'Passagiers',
    price: 'Vaste prijs',
    distance: 'Afstand',
    time: 'Gemiddelde reistijd',
    hubs: 'Luchthavenvervoer',
    routes: 'Populaire routes',
    cities: 'Regio’s',
    services: 'Diensten',
  },
  fr: {
    home: 'Accueil',
    related: 'Pages liées',
    faq: 'Questions fréquentes',
    fixedPrices: 'Prix fixes',
    howItWorks: 'Comment réserver',
    included: 'Ce qui est inclus',
    compare: 'Navette privée, train, bus navette ou application VTC ?',
    otherLanguages: 'Cette page dans d’autres langues',
    meetingPoint: 'Point de rencontre et prise en charge',
    travelInfo: 'Distance, temps de trajet et trafic',
    quote: 'Obtenir un prix fixe',
    ctaHeadline: 'Prêt à réserver ?',
    ctaText: 'Envoyez votre date, adresse de départ, numéro de vol et nombre de passagers sur WhatsApp ou via le formulaire. Vous recevez un prix fixe en quelques minutes, annulation gratuite jusqu’à 24 h avant.',
    perVehicle: 'Les prix s’entendent par véhicule, pas par personne, TVA, bagages et sièges enfants inclus.',
    passengers: 'Passagers',
    price: 'Prix fixe',
    distance: 'Distance',
    time: 'Temps de trajet habituel',
    hubs: 'Navettes aéroport',
    routes: 'Trajets populaires',
    cities: 'Zones desservies',
    services: 'Services',
  },
  el: {
    home: 'Αρχική',
    related: 'Σχετικές σελίδες',
    faq: 'Συχνές ερωτήσεις',
    fixedPrices: 'Σταθερές τιμές',
    howItWorks: 'Πώς γίνεται η κράτηση',
    included: 'Τι περιλαμβάνεται',
    compare: 'Ιδιωτική μεταφορά, τρένο, shuttle ή εφαρμογή ταξί;',
    otherLanguages: 'Η σελίδα σε άλλες γλώσσες',
    meetingPoint: 'Σημείο συνάντησης και οδηγίες παραλαβής',
    travelInfo: 'Απόσταση, χρόνος διαδρομής και κίνηση',
    quote: 'Ζητήστε σταθερή τιμή',
    ctaHeadline: 'Έτοιμοι για κράτηση;',
    ctaText: 'Στείλτε ημερομηνία, διεύθυνση παραλαβής, αριθμό πτήσης και άτομα μέσω WhatsApp ή της φόρμας. Λαμβάνετε σταθερή τιμή μέσα σε λίγα λεπτά και ακυρώνετε δωρεάν έως 24 ώρες πριν.',
    perVehicle: 'Οι τιμές είναι ανά όχημα, όχι ανά άτομο, και περιλαμβάνουν ΦΠΑ, αποσκευές και παιδικά καθίσματα.',
    passengers: 'Επιβάτες',
    price: 'Σταθερή τιμή',
    distance: 'Απόσταση',
    time: 'Συνήθης χρόνος διαδρομής',
    hubs: 'Μεταφορές αεροδρομίου',
    routes: 'Δημοφιλείς διαδρομές',
    cities: 'Περιοχές εξυπηρέτησης',
    services: 'Υπηρεσίες',
  },
  hr: {
    home: 'Početna',
    related: 'Povezane stranice',
    faq: 'Česta pitanja',
    fixedPrices: 'Fiksne cijene',
    howItWorks: 'Kako funkcionira rezervacija',
    included: 'Što je uključeno',
    compare: 'Privatni prijevoz, vlak, shuttle bus ili taksi aplikacija?',
    otherLanguages: 'Ova stranica na drugim jezicima',
    meetingPoint: 'Mjesto sastanka i upute za preuzimanje',
    travelInfo: 'Udaljenost, vrijeme vožnje i promet',
    quote: 'Zatražite fiksnu cijenu',
    ctaHeadline: 'Spremni za rezervaciju?',
    ctaText: 'Pošaljite datum, adresu preuzimanja, broj leta i broj putnika putem WhatsAppa ili obrasca. Fiksnu cijenu dobivate u nekoliko minuta, a otkazivanje je besplatno do 24 sata prije vožnje.',
    perVehicle: 'Cijene su po vozilu, a ne po osobi, i uključuju PDV, prtljagu i dječje sjedalice.',
    passengers: 'Putnici',
    price: 'Fiksna cijena',
    distance: 'Udaljenost',
    time: 'Uobičajeno vrijeme vožnje',
    hubs: 'Transferi do zračnih luka',
    routes: 'Popularne rute',
    cities: 'Područja usluge',
    services: 'Usluge',
  },
};

export const HOW_IT_WORKS: Record<Locale, SeoStep[]> = {
  en: [
    { title: '1. Send your details', text: 'WhatsApp +32 472 35 88 05 or use the form with your date, pickup address, destination, flight number and number of passengers.' },
    { title: '2. Receive a fixed price', text: 'You get a written quote within minutes. The price you confirm is the price you pay: no meter, no surge, no luggage or night surcharge.' },
    { title: '3. Meet your driver', text: 'Gerasimos or a Helicro driver arrives 10 minutes early, tracks your flight if you are landing, and helps with luggage and child seats.' },
  ],
  nl: [
    { title: '1. Stuur uw gegevens', text: 'WhatsApp +32 472 35 88 05 of vul het formulier in met datum, ophaaladres, bestemming, vluchtnummer en aantal passagiers.' },
    { title: '2. Ontvang een vaste prijs', text: 'U krijgt binnen enkele minuten een schriftelijke offerte. De prijs die u bevestigt is de prijs die u betaalt: geen meter, geen piektarief, geen bagage- of nachttoeslag.' },
    { title: '3. Ontmoet uw chauffeur', text: 'Gerasimos of een Helicro-chauffeur is 10 minuten op voorhand ter plaatse, volgt uw vlucht op en helpt met bagage en kinderzitjes.' },
  ],
  fr: [
    { title: '1. Envoyez vos informations', text: 'WhatsApp +32 472 35 88 05 ou formulaire : date, adresse de départ, destination, numéro de vol et nombre de passagers.' },
    { title: '2. Recevez un prix fixe', text: 'Vous recevez un devis écrit en quelques minutes. Le prix confirmé est le prix payé : pas de compteur, pas de majoration, pas de supplément bagages ou nuit.' },
    { title: '3. Rencontrez votre chauffeur', text: 'Gerasimos ou un chauffeur Helicro arrive 10 minutes en avance, suit votre vol si vous atterrissez et vous aide avec les bagages et les sièges enfants.' },
  ],
  el: [
    { title: '1. Στείλτε τα στοιχεία σας', text: 'WhatsApp +32 472 35 88 05 ή φόρμα με ημερομηνία, διεύθυνση παραλαβής, προορισμό, αριθμό πτήσης και αριθμό επιβατών.' },
    { title: '2. Λάβετε σταθερή τιμή', text: 'Λαμβάνετε γραπτή προσφορά μέσα σε λίγα λεπτά. Η τιμή που επιβεβαιώνετε είναι αυτή που πληρώνετε: χωρίς ταξίμετρο, χωρίς αυξήσεις, χωρίς χρέωση αποσκευών ή νύχτας.' },
    { title: '3. Συναντήστε τον οδηγό σας', text: 'Ο Γεράσιμος ή οδηγός της Helicro είναι εκεί 10 λεπτά νωρίτερα, παρακολουθεί την πτήση σας και βοηθά με αποσκευές και παιδικά καθίσματα.' },
  ],
  hr: [
    { title: '1. Pošaljite podatke', text: 'WhatsApp +32 472 35 88 05 ili obrazac s datumom, adresom preuzimanja, odredištem, brojem leta i brojem putnika.' },
    { title: '2. Primite fiksnu cijenu', text: 'Pisanu ponudu dobivate u nekoliko minuta. Cijena koju potvrdite je cijena koju plaćate: bez taksimetra, bez poskupljenja, bez naknade za prtljagu ili noćnu vožnju.' },
    { title: '3. Upoznajte vozača', text: 'Gerasimos ili Helicro vozač stiže 10 minuta ranije, prati vaš let ako slijećete i pomaže s prtljagom i dječjim sjedalicama.' },
  ],
};

export const INCLUDED: Record<Locale, string[]> = {
  en: [
    'Door-to-door pickup at any address, hotel or terminal, 24 hours a day, 7 days a week',
    'Ford Transit Custom or Tourneo Custom minivan for up to 8 passengers and 8 large suitcases',
    'Live flight tracking and 60 minutes of free waiting time after landing',
    'Meet and greet in the arrivals hall with a name sign',
    'Free infant seats, child seats and booster cushions on request',
    'Driver fluent in English, French and Greek',
    'Payment by card, bank transfer, invoice or cash; VAT invoice on request',
    'Free cancellation or changes up to 24 hours before pickup',
  ],
  nl: [
    'Ophaling aan huis, hotel of terminal, 24 uur per dag, 7 dagen per week',
    'Ford Transit Custom of Tourneo Custom minivan voor maximaal 8 passagiers en 8 grote koffers',
    'Live vluchtopvolging en 60 minuten gratis wachttijd na de landing',
    'Ontvangst in de aankomsthal met naambordje',
    'Gratis babyzitjes, kinderzitjes en verhogers op aanvraag',
    'Chauffeur die vlot Engels, Frans en Grieks spreekt',
    'Betaling per kaart, overschrijving, factuur of cash; btw-factuur op aanvraag',
    'Gratis annuleren of wijzigen tot 24 uur voor de rit',
  ],
  fr: [
    'Prise en charge à domicile, à l’hôtel ou au terminal, 24 h/24 et 7 j/7',
    'Minivan Ford Transit Custom ou Tourneo Custom pour 8 passagers et 8 grandes valises',
    'Suivi de vol en direct et 60 minutes d’attente gratuite après l’atterrissage',
    'Accueil dans le hall des arrivées avec une pancarte à votre nom',
    'Sièges bébé, sièges enfants et rehausseurs gratuits sur demande',
    'Chauffeur parlant couramment français, anglais et grec',
    'Paiement par carte, virement, facture ou espèces ; facture TVA sur demande',
    'Annulation ou modification gratuite jusqu’à 24 h avant le départ',
  ],
  el: [
    'Παραλαβή από οποιαδήποτε διεύθυνση, ξενοδοχείο ή τερματικό, 24 ώρες το 24ωρο, 7 ημέρες την εβδομάδα',
    'Ford Transit Custom ή Tourneo Custom minivan για έως 8 επιβάτες και 8 μεγάλες βαλίτσες',
    'Ζωντανή παρακολούθηση πτήσης και 60 λεπτά δωρεάν αναμονή μετά την προσγείωση',
    'Υποδοχή στην αίθουσα αφίξεων με πινακίδα ονόματος',
    'Δωρεάν βρεφικά και παιδικά καθίσματα και booster κατόπιν αιτήματος',
    'Οδηγός που μιλά άπταιστα Ελληνικά, Αγγλικά και Γαλλικά',
    'Πληρωμή με κάρτα, τραπεζική μεταφορά, τιμολόγιο ή μετρητά',
    'Δωρεάν ακύρωση ή αλλαγή έως 24 ώρες πριν την παραλαβή',
  ],
  hr: [
    'Preuzimanje na bilo kojoj adresi, hotelu ili terminalu, 24 sata dnevno, 7 dana u tjednu',
    'Ford Transit Custom ili Tourneo Custom kombi za do 8 putnika i 8 velikih kovčega',
    'Praćenje leta uživo i 60 minuta besplatnog čekanja nakon slijetanja',
    'Doček u dvorani za dolaske s natpisom vašeg imena',
    'Besplatne sjedalice za bebe, dječje sjedalice i booster jastuci na zahtjev',
    'Vozač koji tečno govori engleski, francuski i grčki',
    'Plaćanje karticom, bankovnim prijenosom, računom ili gotovinom',
    'Besplatno otkazivanje ili izmjena do 24 sata prije preuzimanja',
  ],
};

export const COMPARISON: Record<Locale, SeoTable> = {
  en: {
    caption: 'Typical differences for a group of 4 with luggage between Brussels and the airport',
    headers: ['', 'Helicro private transfer', 'Train (SNCB)', 'Shuttle bus (Flibco type)', 'Taxi meter / ride-hailing app'],
    rows: [
      ['Door-to-door', 'Yes, any address', 'No, station to station', 'No, fixed stops', 'Yes'],
      ['Price known in advance', 'Yes, fixed per vehicle', 'Yes, per person', 'Yes, per person', 'No, meter or surge pricing'],
      ['Luggage and child seats', 'Included, seats free', 'Carry yourself', 'Limited, extra bags may cost more', 'Seats rarely available'],
      ['Waits if your flight is late', 'Yes, tracked live', 'No', 'No, next departure', 'No, new booking'],
      ['Available at night', '24/7', 'Limited after midnight', 'First and last departures only', 'Usually, with night surcharge'],
    ],
  },
  nl: {
    caption: 'Typische verschillen voor een groep van 4 met bagage tussen Brussel en de luchthaven',
    headers: ['', 'Helicro privévervoer', 'Trein (NMBS)', 'Shuttlebus (type Flibco)', 'Taximeter / taxi-app'],
    rows: [
      ['Deur tot deur', 'Ja, elk adres', 'Nee, station tot station', 'Nee, vaste haltes', 'Ja'],
      ['Prijs vooraf gekend', 'Ja, vast per voertuig', 'Ja, per persoon', 'Ja, per persoon', 'Nee, meter of piektarief'],
      ['Bagage en kinderzitjes', 'Inbegrepen, zitjes gratis', 'Zelf dragen', 'Beperkt, extra bagage kost meer', 'Zitjes zelden beschikbaar'],
      ['Wacht bij vertraging', 'Ja, live opgevolgd', 'Nee', 'Nee, volgende vertrek', 'Nee, nieuwe boeking'],
      ['’s Nachts beschikbaar', '24/7', 'Beperkt na middernacht', 'Enkel eerste en laatste ritten', 'Meestal, met nachttoeslag'],
    ],
  },
  fr: {
    caption: 'Différences typiques pour un groupe de 4 avec bagages entre Bruxelles et l’aéroport',
    headers: ['', 'Navette privée Helicro', 'Train (SNCB)', 'Bus navette (type Flibco)', 'Taxi au compteur / appli VTC'],
    rows: [
      ['Porte à porte', 'Oui, toute adresse', 'Non, de gare à gare', 'Non, arrêts fixes', 'Oui'],
      ['Prix connu à l’avance', 'Oui, fixe par véhicule', 'Oui, par personne', 'Oui, par personne', 'Non, compteur ou tarif dynamique'],
      ['Bagages et sièges enfants', 'Inclus, sièges gratuits', 'À porter soi-même', 'Limité, bagages en plus payants', 'Sièges rarement disponibles'],
      ['Attend si le vol est en retard', 'Oui, suivi en direct', 'Non', 'Non, départ suivant', 'Non, nouvelle réservation'],
      ['Disponible la nuit', '24 h/24', 'Limité après minuit', 'Premiers et derniers départs seulement', 'Souvent, avec supplément de nuit'],
    ],
  },
  el: {
    caption: 'Τυπικές διαφορές για παρέα 4 ατόμων με αποσκευές μεταξύ Βρυξελλών και αεροδρομίου',
    headers: ['', 'Ιδιωτική μεταφορά Helicro', 'Τρένο (SNCB)', 'Shuttle bus (τύπου Flibco)', 'Ταξίμετρο / εφαρμογή'],
    rows: [
      ['Πόρτα σε πόρτα', 'Ναι, οποιαδήποτε διεύθυνση', 'Όχι, σταθμό σε σταθμό', 'Όχι, σταθερές στάσεις', 'Ναι'],
      ['Γνωστή τιμή εκ των προτέρων', 'Ναι, σταθερή ανά όχημα', 'Ναι, ανά άτομο', 'Ναι, ανά άτομο', 'Όχι, ταξίμετρο ή δυναμική τιμή'],
      ['Αποσκευές και παιδικά καθίσματα', 'Περιλαμβάνονται, δωρεάν', 'Τα μεταφέρετε μόνοι σας', 'Περιορισμένα, επιπλέον χρέωση', 'Σπάνια διαθέσιμα'],
      ['Περιμένει αν καθυστερήσει η πτήση', 'Ναι, ζωντανή παρακολούθηση', 'Όχι', 'Όχι, επόμενο δρομολόγιο', 'Όχι, νέα κράτηση'],
      ['Διαθέσιμο τη νύχτα', '24/7', 'Περιορισμένα μετά τα μεσάνυχτα', 'Μόνο πρώτα και τελευταία δρομολόγια', 'Συνήθως, με νυχτερινή χρέωση'],
    ],
  },
  hr: {
    caption: 'Tipične razlike za grupu od 4 osobe s prtljagom između Bruxellesa i zračne luke',
    headers: ['', 'Helicro privatni prijevoz', 'Vlak (SNCB)', 'Shuttle bus (tip Flibco)', 'Taksimetar / aplikacija'],
    rows: [
      ['Od vrata do vrata', 'Da, bilo koja adresa', 'Ne, od kolodvora do kolodvora', 'Ne, fiksne stanice', 'Da'],
      ['Cijena poznata unaprijed', 'Da, fiksna po vozilu', 'Da, po osobi', 'Da, po osobi', 'Ne, taksimetar ili dinamična cijena'],
      ['Prtljaga i dječje sjedalice', 'Uključeno, sjedalice besplatne', 'Nosite sami', 'Ograničeno, dodatna prtljaga se plaća', 'Sjedalice rijetko dostupne'],
      ['Čeka ako let kasni', 'Da, praćenje uživo', 'Ne', 'Ne, sljedeći polazak', 'Ne, nova rezervacija'],
      ['Dostupno noću', '24/7', 'Ograničeno nakon ponoći', 'Samo prvi i zadnji polasci', 'Obično, uz noćnu naknadu'],
    ],
  },
};

const F = FIXED_PRICES;

export const GENERIC_FAQS: Record<Locale, Record<string, SeoFaq>> = {
  en: {
    cancel: { question: 'Can I cancel or change my booking for free?', answer: `Yes. Cancellations and changes are free up to ${F.cancellationHours} hours before the scheduled pickup. Inside ${F.cancellationHours} hours, call or WhatsApp +32 472 35 88 05 and we will do our best to rebook you.` },
    delay: { question: 'What happens if my flight is delayed?', answer: `We track every arriving flight live and adjust the pickup time automatically. The first ${F.waitingFreeMinutes} minutes after landing are free; after that, waiting is billed at ${F.waitingPerHour}€ per hour.` },
    seats: { question: 'Do you provide child seats?', answer: 'Yes. Infant seats, child seats and booster cushions are free of charge. Tell us the number and ages of the children when you book so the vehicle is prepared.' },
    pay: { question: 'How can I pay?', answer: 'By debit or credit card, bank transfer, monthly invoice for corporate clients, or cash to the driver. A VAT invoice from Helicro SRL (BE 0804.095.653) is available on request.' },
    night: { question: 'Is there a surcharge for early morning or night transfers?', answer: 'No. Helicro private transfers have one fixed price 24 hours a day. The only extras are an optional P1 drop-off at Brussels Airport (+5€) and additional stops (10€ per stop).' },
    luggage: { question: 'How much luggage fits in the minivan?', answer: 'The Ford Transit Custom and Tourneo Custom carry 8 passengers with 8 large suitcases plus hand luggage. For skis, bikes, prams or festival gear, mention it when booking.' },
    book: { question: 'How far in advance should I book?', answer: 'Most transfers can be confirmed the same day, but early morning airport pickups, festival weekends and 8-passenger groups should be booked a few days ahead. Same-day requests are answered on WhatsApp within minutes.' },
    lang: { question: 'Which languages does the driver speak?', answer: 'Gerasimos speaks English, French and Greek fluently, and the website and quotes are also available in Dutch and Croatian.' },
  },
  nl: {
    cancel: { question: 'Kan ik gratis annuleren of wijzigen?', answer: `Ja. Annuleren en wijzigen is gratis tot ${F.cancellationHours} uur voor de geplande ophaling. Binnen ${F.cancellationHours} uur belt of WhatsAppt u +32 472 35 88 05 en zoeken we samen een oplossing.` },
    delay: { question: 'Wat als mijn vlucht vertraging heeft?', answer: `We volgen elke aankomende vlucht live op en passen de ophaaltijd automatisch aan. De eerste ${F.waitingFreeMinutes} minuten na de landing zijn gratis; daarna rekenen we ${F.waitingPerHour}€ per uur wachttijd.` },
    seats: { question: 'Voorzien jullie kinderzitjes?', answer: 'Ja. Babyzitjes, kinderzitjes en verhogers zijn gratis. Geef bij het boeken het aantal en de leeftijd van de kinderen door, dan staat het voertuig klaar.' },
    pay: { question: 'Hoe kan ik betalen?', answer: 'Met bankkaart of kredietkaart, overschrijving, maandelijkse factuur voor bedrijven of cash aan de chauffeur. Een btw-factuur van Helicro SRL (BE 0804.095.653) is beschikbaar op aanvraag.' },
    night: { question: 'Is er een toeslag voor vroege of nachtelijke ritten?', answer: 'Nee. Privévervoer van Helicro heeft één vaste prijs, 24 uur per dag. De enige extra’s zijn een optionele P1-drop-off op Brussels Airport (+5€) en extra stops (10€ per stop).' },
    luggage: { question: 'Hoeveel bagage past er in de minivan?', answer: 'De Ford Transit Custom en Tourneo Custom vervoeren 8 passagiers met 8 grote koffers plus handbagage. Voor ski’s, fietsen, buggy’s of festivalmateriaal vermeldt u dit best bij de boeking.' },
    book: { question: 'Hoe lang op voorhand moet ik boeken?', answer: 'De meeste ritten bevestigen we dezelfde dag, maar vroege luchthavenritten, festivalweekends en groepen van 8 boekt u best enkele dagen vooraf. Aanvragen voor dezelfde dag beantwoorden we via WhatsApp binnen enkele minuten.' },
    lang: { question: 'Welke talen spreekt de chauffeur?', answer: 'Gerasimos spreekt vlot Engels, Frans en Grieks. Offertes en de website zijn ook in het Nederlands beschikbaar.' },
  },
  fr: {
    cancel: { question: 'Puis-je annuler ou modifier ma réservation gratuitement ?', answer: `Oui. Annulation et modification sont gratuites jusqu’à ${F.cancellationHours} h avant la prise en charge prévue. En deçà, appelez ou écrivez sur WhatsApp au +32 472 35 88 05 et nous trouverons une solution.` },
    delay: { question: 'Que se passe-t-il si mon vol a du retard ?', answer: `Nous suivons chaque vol à l’arrivée en direct et adaptons l’heure de prise en charge automatiquement. Les ${F.waitingFreeMinutes} premières minutes après l’atterrissage sont gratuites ; ensuite l’attente est facturée ${F.waitingPerHour}€ par heure.` },
    seats: { question: 'Fournissez-vous des sièges enfants ?', answer: 'Oui. Sièges bébé, sièges enfants et rehausseurs sont gratuits. Indiquez le nombre et l’âge des enfants lors de la réservation pour que le véhicule soit préparé.' },
    pay: { question: 'Comment puis-je payer ?', answer: 'Par carte de débit ou de crédit, virement, facture mensuelle pour les entreprises ou en espèces au chauffeur. Une facture TVA de Helicro SRL (BE 0804.095.653) est disponible sur demande.' },
    night: { question: 'Y a-t-il un supplément tôt le matin ou la nuit ?', answer: 'Non. Les navettes privées Helicro ont un seul prix fixe, 24 h/24. Les seuls extras sont la dépose optionnelle au P1 de Brussels Airport (+5€) et les arrêts supplémentaires (10€ par arrêt).' },
    luggage: { question: 'Combien de bagages entrent dans le minivan ?', answer: 'Les Ford Transit Custom et Tourneo Custom transportent 8 passagers avec 8 grandes valises et les bagages à main. Pour des skis, vélos, poussettes ou du matériel de festival, précisez-le à la réservation.' },
    book: { question: 'Combien de temps à l’avance faut-il réserver ?', answer: 'La plupart des trajets sont confirmés le jour même, mais les départs très matinaux, les week-ends de festival et les groupes de 8 se réservent quelques jours avant. Les demandes du jour reçoivent une réponse sur WhatsApp en quelques minutes.' },
    lang: { question: 'Quelles langues parle le chauffeur ?', answer: 'Gerasimos parle couramment français, anglais et grec. Le site et les devis existent aussi en néerlandais.' },
  },
  el: {
    cancel: { question: 'Μπορώ να ακυρώσω ή να αλλάξω την κράτηση δωρεάν;', answer: `Ναι. Ακυρώσεις και αλλαγές είναι δωρεάν έως ${F.cancellationHours} ώρες πριν την προγραμματισμένη παραλαβή. Εντός ${F.cancellationHours} ωρών καλέστε ή στείλτε WhatsApp στο +32 472 35 88 05 και θα βρούμε λύση.` },
    delay: { question: 'Τι γίνεται αν καθυστερήσει η πτήση μου;', answer: `Παρακολουθούμε ζωντανά κάθε πτήση άφιξης και προσαρμόζουμε αυτόματα την ώρα παραλαβής. Τα πρώτα ${F.waitingFreeMinutes} λεπτά μετά την προσγείωση είναι δωρεάν· μετά η αναμονή χρεώνεται ${F.waitingPerHour}€ την ώρα.` },
    seats: { question: 'Παρέχετε παιδικά καθίσματα;', answer: 'Ναι. Βρεφικά καθίσματα, παιδικά καθίσματα και booster είναι δωρεάν. Πείτε μας τον αριθμό και τις ηλικίες των παιδιών κατά την κράτηση.' },
    pay: { question: 'Πώς μπορώ να πληρώσω;', answer: 'Με χρεωστική ή πιστωτική κάρτα, τραπεζική μεταφορά, μηνιαίο τιμολόγιο για εταιρείες ή μετρητά στον οδηγό. Τιμολόγιο με ΦΠΑ από την Helicro SRL (BE 0804.095.653) κατόπιν αιτήματος.' },
    night: { question: 'Υπάρχει επιπλέον χρέωση για πρωινές ή νυχτερινές διαδρομές;', answer: 'Όχι. Οι ιδιωτικές μεταφορές της Helicro έχουν μία σταθερή τιμή 24 ώρες το 24ωρο. Τα μόνα έξτρα είναι η προαιρετική αποβίβαση στο P1 του Brussels Airport (+5€) και οι επιπλέον στάσεις (10€ ανά στάση).' },
    luggage: { question: 'Πόσες αποσκευές χωράει το minivan;', answer: 'Τα Ford Transit Custom και Tourneo Custom μεταφέρουν 8 επιβάτες με 8 μεγάλες βαλίτσες και χειραποσκευές. Για σκι, ποδήλατα, καρότσια ή εξοπλισμό φεστιβάλ ενημερώστε μας στην κράτηση.' },
    book: { question: 'Πόσο νωρίς πρέπει να κάνω κράτηση;', answer: 'Οι περισσότερες διαδρομές επιβεβαιώνονται την ίδια μέρα, αλλά για πρωινές παραλαβές αεροδρομίου, φεστιβάλ και ομάδες 8 ατόμων κάντε κράτηση μερικές ημέρες νωρίτερα. Αιτήματα ίδιας ημέρας απαντώνται στο WhatsApp μέσα σε λίγα λεπτά.' },
    lang: { question: 'Ποιες γλώσσες μιλά ο οδηγός;', answer: 'Ο Γεράσιμος μιλά άπταιστα Ελληνικά, Αγγλικά και Γαλλικά. Είναι Έλληνας που ζει δεκαετίες στο Βέλγιο, άρα η επικοινωνία γίνεται στα Ελληνικά από την πρώτη στιγμή.' },
  },
  hr: {
    cancel: { question: 'Mogu li besplatno otkazati ili promijeniti rezervaciju?', answer: `Da. Otkazivanje i izmjene besplatni su do ${F.cancellationHours} sata prije planiranog preuzimanja. Unutar ${F.cancellationHours} sata nazovite ili pošaljite WhatsApp na +32 472 35 88 05 i pronaći ćemo rješenje.` },
    delay: { question: 'Što ako moj let kasni?', answer: `Svaki dolazni let pratimo uživo i automatski prilagođavamo vrijeme preuzimanja. Prvih ${F.waitingFreeMinutes} minuta nakon slijetanja je besplatno; nakon toga čekanje se naplaćuje ${F.waitingPerHour}€ po satu.` },
    seats: { question: 'Imate li dječje sjedalice?', answer: 'Da. Sjedalice za bebe, dječje sjedalice i booster jastuci su besplatni. Navedite broj i dob djece pri rezervaciji kako bi vozilo bilo pripremljeno.' },
    pay: { question: 'Kako mogu platiti?', answer: 'Debitnom ili kreditnom karticom, bankovnim prijenosom, mjesečnim računom za tvrtke ili gotovinom vozaču. Račun s PDV-om tvrtke Helicro SRL (BE 0804.095.653) dostupan je na zahtjev.' },
    night: { question: 'Postoji li doplata za rane jutarnje ili noćne vožnje?', answer: 'Ne. Helicro privatni transferi imaju jednu fiksnu cijenu 24 sata dnevno. Jedini dodaci su opcionalni iskrcaj na P1 u zračnoj luci Bruxelles (+5€) i dodatna stajanja (10€ po stajanju).' },
    luggage: { question: 'Koliko prtljage stane u kombi?', answer: 'Ford Transit Custom i Tourneo Custom prevoze 8 putnika s 8 velikih kovčega i ručnom prtljagom. Za skije, bicikle, kolica ili festivalsku opremu javite nam pri rezervaciji.' },
    book: { question: 'Koliko unaprijed trebam rezervirati?', answer: 'Većina vožnji potvrđuje se isti dan, ali rane jutarnje vožnje do zračne luke, festivalske vikende i grupe od 8 osoba rezervirajte nekoliko dana ranije. Na upite za isti dan odgovaramo putem WhatsAppa u nekoliko minuta.' },
    lang: { question: 'Koje jezike govori vozač?', answer: 'Gerasimos tečno govori engleski, francuski i grčki. Web stranica i ponude dostupne su i na hrvatskom jeziku.' },
  },
};

export function pickFaqs(lang: Locale, keys: string[]): SeoFaq[] {
  return keys.map((k) => GENERIC_FAQS[lang][k]).filter(Boolean);
}

export function howItWorksSection(lang: Locale): SeoSection {
  return { h2: UI[lang].howItWorks, steps: HOW_IT_WORKS[lang] };
}

export function includedSection(lang: Locale): SeoSection {
  return { h2: UI[lang].included, bullets: INCLUDED[lang] };
}

export function comparisonSection(lang: Locale, intro?: string): SeoSection {
  return { h2: UI[lang].compare, paragraphs: intro ? [intro] : undefined, table: COMPARISON[lang] };
}

export function brusselsPriceTable(lang: Locale, airport: 'BRU' | 'CRL'): SeoTable {
  const ui = UI[lang];
  const rows = airport === 'BRU' ? FIXED_PRICES.brusselsToBRU : FIXED_PRICES.brusselsToCRL;
  const suffix = airport === 'BRU' ? '*' : '';
  const captions: Record<Locale, string> = {
    en: airport === 'BRU' ? 'Brussels (any address) to Brussels Airport, Drop-off Area. *P1 drop-off +5€.' : 'Brussels (any address) to Brussels South Charleroi Airport, door to door.',
    nl: airport === 'BRU' ? 'Brussel (elk adres) naar Brussels Airport, Drop-off zone. *P1 drop-off +5€.' : 'Brussel (elk adres) naar Brussels South Charleroi Airport, van deur tot deur.',
    fr: airport === 'BRU' ? 'Bruxelles (toute adresse) vers Brussels Airport, zone Drop-off. *Dépose P1 +5€.' : 'Bruxelles (toute adresse) vers l’aéroport de Charleroi, porte à porte.',
    el: airport === 'BRU' ? 'Βρυξέλλες (οποιαδήποτε διεύθυνση) προς Brussels Airport, ζώνη Drop-off. *Αποβίβαση P1 +5€.' : 'Βρυξέλλες (οποιαδήποτε διεύθυνση) προς αεροδρόμιο Charleroi, πόρτα σε πόρτα.',
    hr: airport === 'BRU' ? 'Bruxelles (bilo koja adresa) do zračne luke Bruxelles, Drop-off zona. *Iskrcaj P1 +5€.' : 'Bruxelles (bilo koja adresa) do zračne luke Charleroi, od vrata do vrata.',
  };
  return {
    caption: captions[lang],
    headers: [ui.passengers, ui.price],
    rows: rows.map((r) => [r.pax, `${r.price}€${suffix}`]),
  };
}

export function legText(lang: Locale, km: number, minMin: number, maxMin: number): string {
  const t: Record<Locale, string> = {
    en: `about ${km} km, typically ${minMin} to ${maxMin} minutes outside peak hours`,
    nl: `ongeveer ${km} km, meestal ${minMin} tot ${maxMin} minuten buiten de spits`,
    fr: `environ ${km} km, généralement ${minMin} à ${maxMin} minutes hors heures de pointe`,
    el: `περίπου ${km} χλμ., συνήθως ${minMin} έως ${maxMin} λεπτά εκτός ωρών αιχμής`,
    hr: `oko ${km} km, obično ${minMin} do ${maxMin} minuta izvan vršnih sati`,
  };
  return t[lang];
}
