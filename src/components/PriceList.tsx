import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import GoogleReviews from '@/components/GoogleReviews';
import { DESTINATIONS, FIXED_PRICES, PRICED_ROUTES, SHARED_SHUTTLE, SPA_F1, type DestinationCountry } from '@/config/seoFacts';
import { BOOKING_POLICIES } from '@/config/bookingPolicies';
import { PRICED_ROUTE_URLS, SHARED_SHUTTLE_URLS, type PricedLang } from '@/config/pricedRoutePages';
import { PRICE_LIST_PATHS, translations } from '@/config/translations';
import { breadcrumbSchema, faqSchema, priceCatalogSchema } from '@/lib/schema';
import { LOCALE_NAMES, type Locale } from '@/lib/seo';
import styles from './SeoLanding.module.css';

const WA = 'https://wa.me/32472358805';
const BOOK = 'https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM';

const T: Record<Locale, Record<string, string>> = {
  en: {
    home: 'Home',
    pricing: 'Pricing',
    h1: 'Helicro price list 2026: every fixed price per minivan',
    lead: 'Private transfer prices are per vehicle (up to 8 passengers), VAT included and confirmed in writing before travel. Brussels–Zaventem is 35–45€ for 1–3 passengers or 45–60€ for 4–8; the exact fare is confirmed at booking. Other private fares are fixed and the same by day and night. Shared shuttles have separate day, night and group tariffs. Luggage, child seats and flight tracking are included. All arriving flights receive 60 minutes of complimentary waiting from the actual landing time.',
    zaventem: 'Brussels to Brussels Airport (Zaventem)',
    zaventemFromNotice: 'Published price range; the exact fare is confirmed at booking.',
    fromWord: 'from',
    priceFrom: 'Price range',
    zaventemNote: 'Any Brussels address to the Drop-off Area in front of departures. P1 drop-off +5€. The amount goes up with the number of passengers and the exact address. Brussels city and the airport are 14 km apart, 20 to 35 minutes outside peak hours.',
    charleroi: 'Brussels to Charleroi Airport, private transfer',
    charleroiNote: 'Any Brussels address to the Kiss & Ride in front of the Charleroi terminal, door to door, 60 km in 55 to 70 minutes. The same price applies in the other direction.',
    shared: 'Brussels to Charleroi Airport, shared shuttle',
    sharedNote: `Seat-in-van shuttle, pickup at your door, maximum ${SHARED_SHUTTLE.maxPassengers} passengers per van. Day 06:00 to 22:00, night 22:00 to 06:00.`,
    belgium: 'Belgium: other destinations',
    france: 'France',
    netherlands: 'The Netherlands',
    germany: 'Germany',
    luxembourg: 'Luxembourg',
    routeNote: 'From Brussels (any address) or Brussels Airport, per vehicle, in either direction. Charleroi Airport rows start at the Charleroi terminal.',
    events: 'Events',
    passengers: 'Passengers',
    price: 'Fixed price',
    route: 'Route',
    p13: '1–3 passengers',
    p48: '4–8 passengers',
    perPerson: 'Per person',
    day: 'Day',
    night: 'Night',
    tomorrowland: 'Brussels to Tomorrowland (Boom)',
    spa: 'Spa-Francorchamps race weekend (F1, WEC, 24 Hours): chauffeur and 8-seat minivan',
    spaPrice: `${SPA_F1.perDay}€ per day, return trips included, usually booked for ${SPA_F1.typicalDays} days`,
    dayTour: 'Private full-day sightseeing tour (Bruges, Ghent, Durbuy, Waterloo), up to 8 passengers',
    dayTourPrice: `from ${FIXED_PRICES.dayTourFrom}€ per vehicle`,
    extras: 'Extras and conditions',
    faq: 'Frequently asked questions',
    cta: 'Book your fixed-price transfer',
    ctaText: 'Send your date, pickup address, destination, flight number and number of passengers on WhatsApp or through the form. You receive the fixed price in writing within minutes.',
    wa: 'WhatsApp a quote request',
    book: 'Book online',
    other: 'This page in other languages',
    seeRoute: 'route page',
  },
  nl: {
    home: 'Home',
    pricing: 'Prijzen',
    h1: 'Prijslijst Helicro 2026: alle vaste prijzen per minivan',
    lead: 'Privétransfers worden per voertuig geprijsd (tot 8 passagiers), inclusief btw, en vooraf schriftelijk bevestigd. Brussel–Zaventem kost 35–45€ voor 1–3 passagiers of 45–60€ voor 4–8; de exacte prijs wordt bij boeking bevestigd. Andere privétarieven zijn vast en gelijk overdag en ’s nachts. Gedeelde shuttles hebben aparte dag-, nacht- en groepstarieven. Bagage, kinderzitjes en vluchtopvolging zijn inbegrepen. Alle aankomende vluchten krijgen 60 minuten gratis wachttijd vanaf de werkelijke landing.',
    zaventem: 'Brussel naar Brussels Airport (Zaventem)',
    zaventemFromNotice: 'Gepubliceerde prijsklasse; de exacte prijs wordt bij boeking bevestigd.',
    fromWord: 'vanaf',
    priceFrom: 'Prijsklasse',
    zaventemNote: 'Elk Brussels adres naar de Drop-off zone voor de vertrekhal. P1 drop-off +5€. Het bedrag stijgt met het aantal passagiers en het exacte adres. Brussel en de luchthaven liggen 14 km uit elkaar, 20 tot 35 minuten buiten de spits.',
    charleroi: 'Brussel naar Charleroi Airport, privétransfer',
    charleroiNote: 'Elk Brussels adres naar de Kiss & Ride voor de terminal van Charleroi, van deur tot deur, 60 km in 55 tot 70 minuten. Dezelfde prijs geldt in de andere richting.',
    shared: 'Brussel naar Charleroi Airport, gedeelde shuttle',
    sharedNote: `Shuttle met gedeelde minivan, ophaling aan huis, maximaal ${SHARED_SHUTTLE.maxPassengers} passagiers per wagen. Dag 06:00 tot 22:00, nacht 22:00 tot 06:00.`,
    belgium: 'België: andere bestemmingen',
    france: 'Frankrijk',
    netherlands: 'Nederland',
    germany: 'Duitsland',
    luxembourg: 'Luxemburg',
    routeNote: 'Vanuit Brussel (elk adres) of Brussels Airport, per voertuig, in beide richtingen. De rijen vanaf Charleroi Airport starten aan de terminal van Charleroi.',
    events: 'Evenementen',
    passengers: 'Passagiers',
    price: 'Vaste prijs',
    route: 'Route',
    p13: '1–3 passagiers',
    p48: '4–8 passagiers',
    perPerson: 'Per persoon',
    day: 'Dag',
    night: 'Nacht',
    tomorrowland: 'Brussel naar Tomorrowland (Boom)',
    spa: 'Raceweekend Spa-Francorchamps (F1, WEC, 24 uur): chauffeur en 8-persoons minivan',
    spaPrice: `${SPA_F1.perDay}€ per dag, heen- en terugritten inbegrepen, meestal ${SPA_F1.typicalDays} dagen`,
    dayTour: 'Privé dagtocht (Brugge, Gent, Durbuy, Waterloo), tot 8 passagiers',
    dayTourPrice: `vanaf ${FIXED_PRICES.dayTourFrom}€ per voertuig`,
    extras: 'Extra’s en voorwaarden',
    faq: 'Veelgestelde vragen',
    cta: 'Boek uw rit met vaste prijs',
    ctaText: 'Stuur uw datum, ophaaladres, bestemming, vluchtnummer en aantal passagiers via WhatsApp of het formulier. U ontvangt de vaste prijs binnen enkele minuten op papier.',
    wa: 'Offerte via WhatsApp',
    book: 'Online boeken',
    other: 'Deze pagina in andere talen',
    seeRoute: 'routepagina',
  },
  fr: {
    home: 'Accueil',
    pricing: 'Tarifs',
    h1: 'Tarifs Helicro 2026 : tous les prix fixes par minivan',
    lead: 'Les transferts privés sont facturés par véhicule (jusqu’à 8 passagers), TVA comprise, et confirmés par écrit avant le départ. Bruxelles–Zaventem coûte 35–45€ pour 1–3 passagers ou 45–60€ pour 4–8 ; le prix exact est confirmé à la réservation. Les autres tarifs privés sont fixes et identiques de jour comme de nuit. Les navettes partagées ont des tarifs distincts de jour, de nuit et de groupe. Bagages, sièges enfants et suivi de vol sont inclus. Tous les vols à l’arrivée bénéficient de 60 minutes d’attente gratuite à compter de l’atterrissage réel.',
    zaventem: 'Bruxelles vers Brussels Airport (Zaventem)',
    zaventemFromNotice: 'Fourchette publiée ; le prix exact est confirmé à la réservation.',
    fromWord: 'dès',
    priceFrom: 'Fourchette de prix',
    zaventemNote: 'Toute adresse bruxelloise vers la zone Drop-off devant les départs. Dépose P1 +5€. Le montant augmente avec le nombre de passagers et l’adresse exacte. Bruxelles et l’aéroport sont à 14 km, soit 20 à 35 minutes hors heures de pointe.',
    charleroi: 'Bruxelles vers l’aéroport de Charleroi, navette privée',
    charleroiNote: 'Toute adresse bruxelloise vers le Kiss & Ride devant le terminal de Charleroi, porte à porte, 60 km en 55 à 70 minutes. Le même prix s’applique dans l’autre sens.',
    shared: 'Bruxelles vers l’aéroport de Charleroi, navette partagée',
    sharedNote: `Minivan partagé, prise en charge à domicile, ${SHARED_SHUTTLE.maxPassengers} passagers maximum par van. Jour 06h00 à 22h00, nuit 22h00 à 06h00.`,
    belgium: 'Belgique : autres destinations',
    france: 'France',
    netherlands: 'Pays-Bas',
    germany: 'Allemagne',
    luxembourg: 'Luxembourg',
    routeNote: 'Depuis Bruxelles (toute adresse) ou Brussels Airport, par véhicule, dans les deux sens. Les lignes depuis l’aéroport de Charleroi partent du terminal de Charleroi.',
    events: 'Événements',
    passengers: 'Passagers',
    price: 'Prix fixe',
    route: 'Trajet',
    p13: '1–3 passagers',
    p48: '4–8 passagers',
    perPerson: 'Par personne',
    day: 'Jour',
    night: 'Nuit',
    tomorrowland: 'Bruxelles vers Tomorrowland (Boom)',
    spa: 'Week-end de course à Spa-Francorchamps (F1, WEC, 24 Heures) : chauffeur et minivan 8 places',
    spaPrice: `${SPA_F1.perDay}€ par jour, allers-retours compris, généralement ${SPA_F1.typicalDays} jours`,
    dayTour: 'Excursion privée d’une journée (Bruges, Gand, Durbuy, Waterloo), jusqu’à 8 passagers',
    dayTourPrice: `dès ${FIXED_PRICES.dayTourFrom}€ par véhicule`,
    extras: 'Suppléments et conditions',
    faq: 'Questions fréquentes',
    cta: 'Réservez votre trajet à prix fixe',
    ctaText: 'Envoyez votre date, adresse de départ, destination, numéro de vol et nombre de passagers sur WhatsApp ou via le formulaire. Vous recevez le prix fixe par écrit en quelques minutes.',
    wa: 'Devis via WhatsApp',
    book: 'Réserver en ligne',
    other: 'Cette page dans d’autres langues',
    seeRoute: 'page du trajet',
  },
  el: {
    home: 'Αρχική',
    pricing: 'Τιμές',
    h1: 'Τιμοκατάλογος Helicro 2026: κάθε σταθερή τιμή ανά minivan',
    lead: 'Οι ιδιωτικές μεταφορές τιμολογούνται ανά όχημα (έως 8 επιβάτες), με ΦΠΑ, και επιβεβαιώνονται γραπτώς πριν το ταξίδι. Βρυξέλλες–Zaventem: 35–45€ για 1–3 επιβάτες ή 45–60€ για 4–8· η ακριβής τιμή επιβεβαιώνεται στην κράτηση. Οι υπόλοιπες ιδιωτικές τιμές είναι σταθερές, ίδιες μέρα και νύχτα. Οι κοινόχρηστες μεταφορές έχουν ξεχωριστές ημερήσιες, νυχτερινές και ομαδικές χρεώσεις. Περιλαμβάνονται αποσκευές, παιδικά καθίσματα και παρακολούθηση πτήσης. Όλες οι αφίξεις έχουν 60 λεπτά δωρεάν αναμονής από την πραγματική προσγείωση.',
    zaventem: 'Βρυξέλλες προς αεροδρόμιο Βρυξελλών (Zaventem)',
    zaventemFromNotice: 'Δημοσιευμένο εύρος τιμών· η ακριβής τιμή επιβεβαιώνεται στην κράτηση.',
    fromWord: 'από',
    priceFrom: 'Εύρος τιμών',
    zaventemNote: 'Οποιαδήποτε διεύθυνση στις Βρυξέλλες προς τη ζώνη Drop-off μπροστά από τις αναχωρήσεις. Αποβίβαση στο P1 +5€. Το ποσό αυξάνεται με τους επιβάτες και την ακριβή διεύθυνση. Η πόλη και το αεροδρόμιο απέχουν 14 χλμ, 20 έως 35 λεπτά εκτός αιχμής.',
    charleroi: 'Βρυξέλλες προς αεροδρόμιο Charleroi, ιδιωτική μεταφορά',
    charleroiNote: 'Οποιαδήποτε διεύθυνση στις Βρυξέλλες προς το Kiss & Ride μπροστά από τον τερματικό σταθμό Charleroi, από πόρτα σε πόρτα, 60 χλμ σε 55 έως 70 λεπτά. Η ίδια τιμή ισχύει και στην αντίθετη κατεύθυνση.',
    shared: 'Βρυξέλλες προς αεροδρόμιο Charleroi, κοινόχρηστο λεωφορείο',
    sharedNote: `Θέση σε minivan, παραλαβή στην πόρτα σας, έως ${SHARED_SHUTTLE.maxPassengers} επιβάτες ανά όχημα. Ημέρα 06:00 έως 22:00, νύχτα 22:00 έως 06:00.`,
    belgium: 'Βέλγιο: άλλοι προορισμοί',
    france: 'Γαλλία',
    netherlands: 'Ολλανδία',
    germany: 'Γερμανία',
    luxembourg: 'Λουξεμβούργο',
    routeNote: 'Από τις Βρυξέλλες (οποιαδήποτε διεύθυνση) ή το αεροδρόμιο Βρυξελλών, ανά όχημα, και προς τις δύο κατευθύνσεις. Οι γραμμές από το αεροδρόμιο Charleroi ξεκινούν από τον τερματικό σταθμό.',
    events: 'Εκδηλώσεις',
    passengers: 'Επιβάτες',
    price: 'Σταθερή τιμή',
    route: 'Διαδρομή',
    p13: '1–3 επιβάτες',
    p48: '4–8 επιβάτες',
    perPerson: 'Ανά άτομο',
    day: 'Ημέρα',
    night: 'Νύχτα',
    tomorrowland: 'Βρυξέλλες προς Tomorrowland (Boom)',
    spa: 'Σαββατοκύριακο αγώνων Spa-Francorchamps (F1, WEC, 24 Ώρες): σοφέρ και minivan 8 θέσεων',
    spaPrice: `${SPA_F1.perDay}€ την ημέρα, με επιστροφή, συνήθως για ${SPA_F1.typicalDays} ημέρες`,
    dayTour: 'Ιδιωτική ολοήμερη περιήγηση (Μπρυζ, Γάνδη, Durbuy, Waterloo), έως 8 επιβάτες',
    dayTourPrice: `από ${FIXED_PRICES.dayTourFrom}€ ανά όχημα`,
    extras: 'Επιπλέον χρεώσεις και όροι',
    faq: 'Συχνές ερωτήσεις',
    cta: 'Κλείστε τη μεταφορά σας σε σταθερή τιμή',
    ctaText: 'Στείλτε ημερομηνία, διεύθυνση παραλαβής, προορισμό, αριθμό πτήσης και επιβάτες στο WhatsApp ή μέσω της φόρμας. Λαμβάνετε τη σταθερή τιμή γραπτώς μέσα σε λίγα λεπτά.',
    wa: 'Προσφορά μέσω WhatsApp',
    book: 'Online κράτηση',
    other: 'Αυτή η σελίδα σε άλλες γλώσσες',
    seeRoute: 'σελίδα διαδρομής',
  },
  hr: {
    home: 'Početna',
    pricing: 'Cijene',
    h1: 'Cjenik Helicro 2026: svaka fiksna cijena po kombiju',
    lead: 'Privatni transferi naplaćuju se po vozilu (do 8 putnika), s PDV-om, i potvrđuju se pismeno prije putovanja. Bruxelles–Zaventem: 35–45€ za 1–3 putnika ili 45–60€ za 4–8; točna cijena potvrđuje se pri rezervaciji. Ostale privatne cijene su fiksne i jednake danju i noću. Dijeljeni prijevoz ima zasebne dnevne, noćne i grupne tarife. Prtljaga, dječje sjedalice i praćenje leta su uključeni. Svi dolazni letovi imaju 60 minuta besplatnog čekanja od stvarnog slijetanja.',
    zaventem: 'Bruxelles do zračne luke Bruxelles (Zaventem)',
    zaventemFromNotice: 'Objavljeni raspon cijena; točna cijena potvrđuje se pri rezervaciji.',
    fromWord: 'od',
    priceFrom: 'Raspon cijena',
    zaventemNote: 'Bilo koja adresa u Bruxellesu do Drop-off zone ispred odlazaka. Iskrcaj na P1 +5€. Iznos raste s brojem putnika i točnom adresom. Grad i zračna luka su udaljeni 14 km, 20 do 35 minuta izvan špice.',
    charleroi: 'Bruxelles do zračne luke Charleroi, privatni transfer',
    charleroiNote: 'Bilo koja adresa u Bruxellesu do Kiss & Ride zone ispred terminala Charleroi, od vrata do vrata, 60 km u 55 do 70 minuta. Ista cijena vrijedi i u suprotnom smjeru.',
    shared: 'Bruxelles do zračne luke Charleroi, dijeljeni shuttle',
    sharedNote: `Sjedalo u kombiju, preuzimanje na vašoj adresi, najviše ${SHARED_SHUTTLE.maxPassengers} putnika po vozilu. Dan 06:00 do 22:00, noć 22:00 do 06:00.`,
    belgium: 'Belgija: ostala odredišta',
    france: 'Francuska',
    netherlands: 'Nizozemska',
    germany: 'Njemačka',
    luxembourg: 'Luksemburg',
    routeNote: 'Iz Bruxellesa (bilo koja adresa) ili zračne luke Bruxelles, po vozilu, u oba smjera. Redovi iz zračne luke Charleroi kreću od terminala.',
    events: 'Događaji',
    passengers: 'Putnici',
    price: 'Fiksna cijena',
    route: 'Ruta',
    p13: '1–3 putnika',
    p48: '4–8 putnika',
    perPerson: 'Po osobi',
    day: 'Dan',
    night: 'Noć',
    tomorrowland: 'Bruxelles do Tomorrowlanda (Boom)',
    spa: 'Vikend utrka Spa-Francorchamps (F1, WEC, 24 sata): vozač i kombi s 8 sjedala',
    spaPrice: `${SPA_F1.perDay}€ po danu, povrat uključen, obično ${SPA_F1.typicalDays} dana`,
    dayTour: 'Privatni cjelodnevni razgled (Bruges, Ghent, Durbuy, Waterloo), do 8 putnika',
    dayTourPrice: `od ${FIXED_PRICES.dayTourFrom}€ po vozilu`,
    extras: 'Dodaci i uvjeti',
    faq: 'Česta pitanja',
    cta: 'Rezervirajte transfer po fiksnoj cijeni',
    ctaText: 'Pošaljite datum, adresu preuzimanja, odredište, broj leta i broj putnika putem WhatsAppa ili obrasca. Fiksnu cijenu dobivate pismeno u nekoliko minuta.',
    wa: 'Ponuda putem WhatsAppa',
    book: 'Rezervirajte online',
    other: 'Ova stranica na drugim jezicima',
    seeRoute: 'stranica rute',
  },
};

const EXTRAS: Record<Locale, string[]> = {
  en: [
      `P1 drop-off at Brussels Airport: +${FIXED_PRICES.bruP1Surcharge}€`,
      BOOKING_POLICIES.en.airportWaitingShort,
      `Extra stop on the route: ${FIXED_PRICES.extraStop}€ per stop`,
      'No night surcharge on private transfers',
      `Free cancellation or changes up to ${FIXED_PRICES.cancellationHours} hours before pickup for standard transfers`,
      BOOKING_POLICIES.en.multiDayShort,
      'Payment by card, bank transfer, invoice or cash; VAT invoice from Helicro SRL on request',
      'Any other origin or destination in Belgium and neighbouring countries: fixed written quote within minutes',
  ],
  nl: [
      `P1 drop-off op Brussels Airport: +${FIXED_PRICES.bruP1Surcharge}€`,
      BOOKING_POLICIES.nl.airportWaitingShort,
      `Extra stop onderweg: ${FIXED_PRICES.extraStop}€ per stop`,
      'Geen nachttoeslag op privétransfers',
      `Gratis annuleren of wijzigen tot ${FIXED_PRICES.cancellationHours} uur voor de rit bij standaardtransfers`,
      BOOKING_POLICIES.nl.multiDayShort,
      'Betaling per kaart, overschrijving, factuur of cash; btw-factuur van Helicro SRL op aanvraag',
      'Elk ander vertrekpunt of elke andere bestemming in België en de buurlanden: vaste schriftelijke prijs binnen enkele minuten',
  ],
  fr: [
      `Dépose P1 à Brussels Airport : +${FIXED_PRICES.bruP1Surcharge}€`,
      BOOKING_POLICIES.fr.airportWaitingShort,
      `Arrêt supplémentaire en route : ${FIXED_PRICES.extraStop}€ par arrêt`,
      'Pas de supplément de nuit sur les navettes privées',
      `Annulation ou modification gratuite jusqu’à ${FIXED_PRICES.cancellationHours} h avant la prise en charge pour les transferts ordinaires`,
      BOOKING_POLICIES.fr.multiDayShort,
      'Paiement par carte, virement, facture ou espèces ; facture TVA de Helicro SRL sur demande',
      'Tout autre point de départ ou destination en Belgique et dans les pays voisins : devis fixe écrit en quelques minutes',
  ],
  el: [
      `Αποβίβαση στο P1 στο αεροδρόμιο Βρυξελλών: +${FIXED_PRICES.bruP1Surcharge}€`,
      BOOKING_POLICIES.el.airportWaitingShort,
      `Επιπλέον στάση στη διαδρομή: ${FIXED_PRICES.extraStop}€ ανά στάση`,
      'Χωρίς νυχτερινή προσαύξηση στις ιδιωτικές μεταφορές',
      `Δωρεάν ακύρωση ή αλλαγή έως ${FIXED_PRICES.cancellationHours} ώρες πριν την παραλαβή για τις συνηθισμένες μεταφορές`,
      BOOKING_POLICIES.el.multiDayShort,
      'Πληρωμή με κάρτα, έμβασμα, τιμολόγιο ή μετρητά· τιμολόγιο ΦΠΑ από τη Helicro SRL κατόπιν αιτήματος',
      'Οποιαδήποτε άλλη αφετηρία ή προορισμός στο Βέλγιο και τις γειτονικές χώρες: σταθερή γραπτή τιμή μέσα σε λίγα λεπτά',
  ],
  hr: [
      `Iskrcaj na P1 u zračnoj luci Bruxelles: +${FIXED_PRICES.bruP1Surcharge}€`,
      BOOKING_POLICIES.hr.airportWaitingShort,
      `Dodatno zaustavljanje na ruti: ${FIXED_PRICES.extraStop}€ po zaustavljanju`,
      'Nema noćne doplati na privatnim transferima',
      `Besplatno otkazivanje ili izmjena do ${FIXED_PRICES.cancellationHours} sati prije preuzimanja za standardne transfere`,
      BOOKING_POLICIES.hr.multiDayShort,
      'Plaćanje karticom, bankovnim transferom, računom ili gotovinom; PDV račun Helicro SRL na zahtjev',
      'Bilo koje drugo polazište ili odredište u Belgiji i susjednim zemljama: fiksna pismena cijena u nekoliko minuta',
  ],
};

const FAQS: Record<Locale, { question: string; answer: string }[]> = {
  en: [
    { question: 'Are Helicro prices per person or per vehicle?', answer: 'Per vehicle, except the shared shuttle to Charleroi Airport which is per person. A private minivan price covers everyone on board, up to 8 passengers, with luggage and child seats.' },
    { question: 'Do prices from Brussels also apply from Brussels Airport?', answer: 'Yes. Every route listed from Brussels can start or end at Brussels Airport (Zaventem) for the same fixed price.' },
    { question: 'Is there a night surcharge?', answer: `No. Private transfers cost the same 24 hours a day. Only the shared shuttle has a night rate of ${SHARED_SHUTTLE.perPassengerNight}€ per person between 22:00 and 06:00.` },
    { question: 'What if my city is not in the list?', answer: 'Send your pickup address and destination on WhatsApp and you receive a fixed price per minivan within minutes. Helicro drives anywhere in Belgium and to France, the Netherlands, Germany and Luxembourg.' },
    { question: 'Are tolls included on trips to France, the Netherlands, Germany or Luxembourg?', answer: 'Yes. Cross-border prices include motorway tolls, fuel and the driver’s return; there is nothing to add at the destination.' },
  ],
  nl: [
    { question: 'Zijn de prijzen van Helicro per persoon of per voertuig?', answer: 'Per voertuig, behalve de gedeelde shuttle naar Charleroi Airport, die per persoon is. Een privé minivanprijs geldt voor iedereen aan boord, tot 8 passagiers, inclusief bagage en kinderzitjes.' },
    { question: 'Gelden de prijzen vanuit Brussel ook vanaf Brussels Airport?', answer: 'Ja. Elke route vanuit Brussel kan starten of eindigen op Brussels Airport (Zaventem) voor dezelfde vaste prijs.' },
    { question: 'Is er een nachttoeslag?', answer: `Nee. Privétransfers kosten 24 uur per dag hetzelfde. Enkel de gedeelde shuttle heeft een nachttarief van ${SHARED_SHUTTLE.perPassengerNight}€ per persoon tussen 22u en 6u.` },
    { question: 'Wat als mijn stad niet in de lijst staat?', answer: 'Stuur uw ophaaladres en bestemming via WhatsApp en u krijgt binnen enkele minuten een vaste prijs per minivan. Helicro rijdt overal in België en naar Frankrijk, Nederland, Duitsland en Luxemburg.' },
    { question: 'Is tol inbegrepen op ritten naar Frankrijk, Nederland, Duitsland of Luxemburg?', answer: 'Ja. De grensoverschrijdende prijzen omvatten tol, brandstof en de terugrit van de chauffeur; op de bestemming komt er niets bij.' },
  ],
  fr: [
    { question: 'Les prix Helicro sont-ils par personne ou par véhicule ?', answer: 'Par véhicule, sauf la navette partagée vers l’aéroport de Charleroi, qui est par personne. Le prix d’un minivan privé couvre tous les passagers à bord, jusqu’à 8, bagages et sièges enfants compris.' },
    { question: 'Les prix depuis Bruxelles s’appliquent-ils aussi depuis Brussels Airport ?', answer: 'Oui. Chaque trajet listé depuis Bruxelles peut commencer ou se terminer à Brussels Airport (Zaventem) au même prix fixe.' },
    { question: 'Y a-t-il un supplément de nuit ?', answer: `Non. Les navettes privées coûtent le même prix 24 h/24. Seule la navette partagée a un tarif de nuit de ${SHARED_SHUTTLE.perPassengerNight}€ par personne entre 22h et 6h.` },
    { question: 'Et si ma ville n’est pas dans la liste ?', answer: 'Envoyez votre adresse de départ et votre destination sur WhatsApp et vous recevez un prix fixe par minivan en quelques minutes. Helicro roule partout en Belgique et vers la France, les Pays-Bas, l’Allemagne et le Luxembourg.' },
    { question: 'Les péages sont-ils compris vers la France, les Pays-Bas, l’Allemagne ou le Luxembourg ?', answer: 'Oui. Les prix transfrontaliers comprennent les péages, le carburant et le retour du chauffeur ; rien à ajouter à destination.' },
  ],
  el: [
    { question: 'Οι τιμές της Helicro είναι ανά άτομο ή ανά όχημα;', answer: 'Ανά όχημα, εκτός από το κοινόχρηστο λεωφορείο προς το αεροδρόμιο Charleroi που είναι ανά άτομο. Η τιμή του ιδιωτικού minivan καλύπτει όλους τους επιβάτες, έως 8, με αποσκευές και παιδικά καθίσματα.' },
    { question: 'Οι τιμές από τις Βρυξέλλες ισχύουν και από το αεροδρόμιο Βρυξελλών;', answer: 'Ναι. Κάθε διαδρομή από τις Βρυξέλλες μπορεί να ξεκινά ή να τελειώνει στο αεροδρόμιο Βρυξελλών (Zaventem) στην ίδια σταθερή τιμή.' },
    { question: 'Υπάρχει νυχτερινή προσαύξηση;', answer: `Όχι. Οι ιδιωτικές μεταφορές κοστίζουν το ίδιο 24 ώρες το 24ωρο. Μόνο το κοινόχρηστο λεωφορείο έχει νυχτερινή τιμή ${SHARED_SHUTTLE.perPassengerNight}€ ανά άτομο μεταξύ 22:00 και 06:00.` },
    { question: 'Τι γίνεται αν η πόλη μου δεν είναι στη λίστα;', answer: 'Στείλτε τη διεύθυνση παραλαβής και τον προορισμό στο WhatsApp και λαμβάνετε σταθερή τιμή ανά minivan μέσα σε λίγα λεπτά. Η Helicro οδηγεί παντού στο Βέλγιο και προς Γαλλία, Ολλανδία, Γερμανία και Λουξεμβούργο.' },
    { question: 'Περιλαμβάνονται τα διόδια προς Γαλλία, Ολλανδία, Γερμανία ή Λουξεμβούργο;', answer: 'Ναι. Οι διασυνοριακές τιμές περιλαμβάνουν διόδια, καύσιμα και την επιστροφή του οδηγού. Στον προορισμό δεν προστίθεται τίποτα.' },
  ],
  hr: [
    { question: 'Jesu li cijene Helicra po osobi ili po vozilu?', answer: 'Po vozilu, osim dijeljenog shuttlea do zračne luke Charleroi koji je po osobi. Cijena privatnog kombija pokriva sve putnike, do 8, s prtljagom i dječjim sjedalicama.' },
    { question: 'Vrijede li cijene iz Bruxellesa i iz zračne luke Bruxelles?', answer: 'Da. Svaka ruta iz Bruxellesa može početi ili završiti u zračnoj luci Bruxelles (Zaventem) po istoj fiksnoj cijeni.' },
    { question: 'Postoji li noćna doplata?', answer: `Ne. Privatni transferi koštaju isto 24 sata dnevno. Samo dijeljeni shuttle ima noćnu cijenu od ${SHARED_SHUTTLE.perPassengerNight}€ po osobi između 22:00 i 06:00.` },
    { question: 'Što ako mog grada nema na popisu?', answer: 'Pošaljite adresu preuzimanja i odredište putem WhatsAppa i u nekoliko minuta dobivate fiksnu cijenu po kombiju. Helicro vozi po cijeloj Belgiji te u Francusku, Nizozemsku, Njemačku i Luksemburg.' },
    { question: 'Jesu li cestarine uključene na putovanjima u Francusku, Nizozemsku, Njemačku ili Luksemburg?', answer: 'Da. Prekogranične cijene uključuju cestarine, gorivo i povratak vozača. Na odredištu se ništa ne dodaje.' },
  ],
};

function Table({ headers, rows, caption }: { headers: string[]; rows: React.ReactNode[][]; caption?: string }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <div className={styles.caption}>{caption}</div>}
    </div>
  );
}

const SHARED_DAY = [25, 50, 75, 90, 110, 120, 130];
const SHARED_NIGHT = [30, 60, 80, 100, 115, 125, 135];

const ORIGIN: Record<Locale, { brussels: string; crl: string }> = {
  en: { brussels: 'Brussels', crl: 'Charleroi Airport' },
  nl: { brussels: 'Brussel', crl: 'Charleroi Airport' },
  fr: { brussels: 'Bruxelles', crl: 'Aéroport de Charleroi' },
  el: { brussels: 'Βρυξέλλες', crl: 'Αεροδρόμιο Charleroi' },
  hr: { brussels: 'Bruxelles', crl: 'Zračna luka Charleroi' },
};

function isPricedLang(lang: Locale): lang is PricedLang {
  return lang === 'en' || lang === 'nl' || lang === 'fr';
}

export default function PriceList({ lang }: { lang: Locale }) {
  const t = T[lang];
  const url = PRICE_LIST_PATHS[lang];
  const home = lang === 'en' ? '/' : `/${lang}`;
  const pricing = lang === 'en' ? '/pricing' : `/${lang}/pricing`;
  const F = FIXED_PRICES;
  const pricedLang = isPricedLang(lang) ? lang : null;

  const routeRows = (from: 'brussels' | 'crl', country: DestinationCountry, exclude: string[] = []) =>
    PRICED_ROUTES.filter((r) => r.from === from && DESTINATIONS[r.to].country === country && !exclude.includes(r.to)).map((r) => {
      const d = DESTINATIONS[r.to];
      const href = pricedLang ? PRICED_ROUTE_URLS[r.key]?.[pricedLang] : undefined;
      const label = `${ORIGIN[lang][from]} – ${d.name[lang]}`;
      return [href ? <Link key={r.key} href={href}>{label}</Link> : label, `${r.tiers[0].price}€`, `${r.tiers[1].price}€`];
    });

  const schema = [
    priceCatalogSchema(lang),
    faqSchema(FAQS[lang]),
    breadcrumbSchema([
      { name: t.home, url: home },
      { name: t.pricing, url: pricing },
      { name: t.h1, url },
    ]),
  ];

  const otherLangs = (Object.keys(PRICE_LIST_PATHS) as Locale[]).filter((l) => l !== lang);
  const shuttleHref = pricedLang ? SHARED_SHUTTLE_URLS[pricedLang] : undefined;

  return (
    <div className="section">
      <div className="container">
        <JsonLd data={schema} />
        <nav className={styles.breadcrumbs} aria-label={translations[lang].breadcrumb}>
          <Link href={home}>{t.home}</Link>
          <span>/</span>
          <Link href={pricing}>{t.pricing}</Link>
          <span>/</span>
          <span>{t.h1}</span>
        </nav>
        <h1 className={styles.h1}>{t.h1}</h1>
        <div className={styles.wrap}>
          <article className={styles.body}>
            <p className={styles.lead}>{t.lead}</p>

            <h2 className={styles.h2}>{t.zaventem}</h2>
            <p style={{ fontWeight: 800 }}>{t.zaventemFromNotice}</p>
            <p>{t.zaventemNote}</p>
            <Table headers={[t.passengers, t.priceFrom]} rows={F.brusselsToBRU.map((r) => [r.pax, `${r.price}–${r.maxPrice}€`])} />

            <h2 className={styles.h2}>{t.charleroi}</h2>
            <p>{t.charleroiNote}</p>
            <Table headers={[t.passengers, t.price]} rows={F.brusselsToCRL.map((r) => [r.pax, `${r.price}€`])} />

            <h2 className={styles.h2}>{t.shared}</h2>
            <p>
              {t.sharedNote}{shuttleHref ? <> <Link href={shuttleHref}>{t.seeRoute}</Link></> : null}
            </p>
            <Table headers={[t.passengers, t.day, t.night]} rows={SHARED_DAY.map((p, i) => [`${i + 1}`, `${p}€`, `${SHARED_NIGHT[i]}€`])} />

            <h2 className={styles.h2}>{t.belgium}</h2>
            <p>{t.routeNote}</p>
            <Table headers={[t.route, t.p13, t.p48]} rows={[...routeRows('brussels', 'BE', ['tomorrowland']), ...routeRows('crl', 'BE')]} />

            <h2 className={styles.h2}>{t.france}</h2>
            <Table headers={[t.route, t.p13, t.p48]} rows={routeRows('brussels', 'FR')} />

            <h2 className={styles.h2}>{t.netherlands}</h2>
            <Table headers={[t.route, t.p13, t.p48]} rows={routeRows('brussels', 'NL')} />

            <h2 className={styles.h2}>{t.germany}</h2>
            <Table headers={[t.route, t.p13, t.p48]} rows={routeRows('brussels', 'DE')} />

            <h2 className={styles.h2}>{t.luxembourg}</h2>
            <Table headers={[t.route, t.p13, t.p48]} rows={routeRows('brussels', 'LU')} />

            <h2 className={styles.h2}>{t.events}</h2>
            <Table
              headers={[t.route, t.p13, t.p48]}
              rows={[
                [<Link key="tomorrowland" href={lang === 'en' ? '/services/event-transfers/tomorrowland' : `/${lang}/services/event-transfers/tomorrowland`}>{t.tomorrowland}</Link>, `${PRICED_ROUTES.find((r) => r.key === 'brussels-tomorrowland')!.tiers[0].price}€`, `${PRICED_ROUTES.find((r) => r.key === 'brussels-tomorrowland')!.tiers[1].price}€`],
              ]}
            />
            <ul className={styles.ul}>
              <li>
                <Link href={lang === 'en' ? '/services/event-transfers/formula-1-spa-francorchamps' : `/${lang}/services/event-transfers/formula-1-spa-francorchamps`}>{t.spa}</Link>: {t.spaPrice}
              </li>
              <li>
                <Link href={lang === 'en' ? '/services/sightseeing' : `/${lang}/services/sightseeing`}>{t.dayTour}</Link>: {t.dayTourPrice}
              </li>
            </ul>

            <h2 className={styles.h2}>{t.extras}</h2>
            <ul className={styles.ul}>
              {EXTRAS[lang].map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>

            <GoogleReviews lang={lang} variant="strip" limit={4} />

            <h2 className={styles.h2}>{t.faq}</h2>
            {FAQS[lang].map((f, i) => (
              <details className={styles.faq} key={i} open={i < 2}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}

            <div className={styles.cta}>
              <h2>{t.cta}</h2>
              <p>{t.ctaText}</p>
              <div className={styles.ctaBtns}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                  {t.wa}
                </a>
                <a href={BOOK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtnAlt}>
                  {t.book}
                </a>
              </div>
            </div>

            <p className={styles.langs}>
              {t.other}:{' '}
              {otherLangs.map((l) => (
                <Link href={PRICE_LIST_PATHS[l]} key={l} hrefLang={l}>
                  {LOCALE_NAMES[l]}
                </Link>
              ))}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
