import { FIXED_PRICES } from '@/config/seoFacts';

export type PolicyLang = 'en' | 'nl' | 'fr' | 'el' | 'hr';

/** Cancellations for multi-day bookings must be sent to this address. */
export const CANCELLATION_EMAIL = 'helicrotransport@gmail.com';

const wait = FIXED_PRICES.waitingFreeMinutes;
const per30 = FIXED_PRICES.waitingPer30Min;
const deposit = FIXED_PRICES.multiDayDepositPercent;
const multiDayHours = FIXED_PRICES.multiDayCancelHours;
const standardHours = FIXED_PRICES.cancellationHours;

export interface BookingPolicyCopy {
  sectionTitle: string;
  airportWaitingTitle: string;
  /** Full policy, one paragraph per block, matching the published wording. */
  airportWaiting: string[];
  /** One line for price tables and surcharge lists. */
  airportWaitingShort: string;
  /** Inclusion line for “what is included” lists. */
  includedWaiting: string;
  multiDayTitle: string;
  multiDayIntro: string;
  multiDayFullRefund: string;
  multiDayNoRefund: string;
  multiDayNotes: string[];
  multiDayShort: string;
  /** Standard transfers stay on the 24-hour rule; multi-day bookings use the deposit terms. */
  standardCancel: string;
  flightDelay: string;
}

export const BOOKING_POLICIES: Record<PolicyLang, BookingPolicyCopy> = {
  en: {
    sectionTitle: 'Booking policies',
    airportWaitingTitle: 'Airport Waiting Time Policy',
    airportWaiting: [
      `For all arriving flights, whether within or outside the Schengen Area, we provide ${wait} minutes of complimentary waiting time, starting from the actual landing time of the flight.`,
      `Once the complimentary waiting period has expired, any additional waiting time will be charged at €${per30} per additional 30 minutes, subject to the driver’s availability and prior agreement between the passenger and the driver.`,
      `If additional waiting time is required, the passenger must agree to the applicable charge directly with the driver at that time.`,
      `Please note: The driver reserves the right to leave the airport once the complimentary waiting period has expired in order to attend other scheduled bookings. Additional waiting time is therefore not guaranteed and remains subject to the driver’s availability.`,
    ],
    airportWaitingShort: `All arriving flights: ${wait} minutes complimentary from the actual landing time. Then €${per30} per additional 30 minutes, by prior agreement with the driver and subject to availability. Additional waiting is not guaranteed.`,
    includedWaiting: `Live flight tracking, with ${wait} minutes of complimentary waiting from the actual landing time for all arriving flights`,
    multiDayTitle: 'Multi-Day Bookings – Deposit, Cancellation and Refund Policy',
    multiDayIntro: `For multi-day bookings involving the exclusive use of a vehicle and driver, a ${deposit}% deposit of the total agreed price is required to secure your reservation and the requested dates. We understand that travel plans can change, so we offer the following cancellation terms:`,
    multiDayFullRefund: `${multiDayHours} hours or more before the service begins: full refund of the deposit.`,
    multiDayNoRefund: `Less than ${multiDayHours} hours before the service begins: the deposit is non-refundable.`,
    multiDayNotes: [
      `All cancellations must be communicated by email to ${CANCELLATION_EMAIL}. We will always do our best to accommodate changes to your travel plans, subject to availability.`,
      'The remaining balance and payment arrangements will be confirmed at the time of booking.',
    ],
    multiDayShort: `Multi-day bookings with exclusive use of a vehicle and driver require a ${deposit}% deposit. The deposit is refunded in full if you cancel by email ${multiDayHours} hours or more before the service begins, and it is non-refundable inside ${multiDayHours} hours.`,
    standardCancel: `Changes and cancellations for standard transfers are free of charge up to ${standardHours} hours before your scheduled pickup. For last-minute changes inside ${standardHours} hours, please call us directly. Multi-day bookings with exclusive use of a vehicle and driver require a ${deposit}% deposit. The deposit is refunded in full if you cancel by email ${multiDayHours} hours or more before the service begins, and it is non-refundable inside ${multiDayHours} hours.`,
    flightDelay: `All arriving flights: ${wait} minutes complimentary from the actual landing time. Then €${per30} per additional 30 minutes, by prior agreement with the driver and subject to availability. Additional waiting is not guaranteed.`,
  },
  nl: {
    sectionTitle: 'Boekingsvoorwaarden',
    airportWaitingTitle: 'Wachttijdbeleid op de luchthaven',
    airportWaiting: [
      `Voor alle aankomende vluchten, zowel binnen als buiten het Schengengebied, bieden we ${wait} minuten gratis wachttijd vanaf de werkelijke landingstijd van de vlucht.`,
      `Na afloop van de gratis wachttijd kost extra wachten €${per30} per bijkomende 30 minuten, afhankelijk van de beschikbaarheid van de chauffeur en na voorafgaand akkoord tussen passagier en chauffeur.`,
      `Als u extra wachttijd nodig heeft, moet u de toepasselijke kost op dat moment rechtstreeks met de chauffeur overeenkomen.`,
      `Let op: de chauffeur mag de luchthaven verlaten zodra de gratis wachttijd is verstreken om andere geplande ritten uit te voeren. Extra wachttijd is dus niet gegarandeerd en hangt af van de beschikbaarheid van de chauffeur.`,
    ],
    airportWaitingShort: `Alle aankomende vluchten: ${wait} minuten gratis vanaf de werkelijke landing. Daarna €${per30} per extra 30 minuten, na voorafgaand akkoord met de chauffeur en volgens beschikbaarheid. Extra wachten is niet gegarandeerd.`,
    includedWaiting: `Live vluchtopvolging, met ${wait} minuten gratis wachttijd vanaf de werkelijke landing voor alle aankomende vluchten`,
    multiDayTitle: 'Meerdaagse boekingen – voorschot, annulering en terugbetaling',
    multiDayIntro: `Voor meerdaagse boekingen met exclusief gebruik van een voertuig en chauffeur is een voorschot van ${deposit}% van de totale afgesproken prijs vereist om uw reservatie en de gevraagde data vast te leggen. Reisplannen kunnen wijzigen, daarom gelden deze annuleringsvoorwaarden:`,
    multiDayFullRefund: `${multiDayHours} uur of meer voor aanvang van de dienst: volledige terugbetaling van het voorschot.`,
    multiDayNoRefund: `Minder dan ${multiDayHours} uur voor aanvang van de dienst: het voorschot is niet terugbetaalbaar.`,
    multiDayNotes: [
      `Alle annuleringen moeten per e-mail worden meegedeeld aan ${CANCELLATION_EMAIL}. Wij doen altijd ons best om wijzigingen in uw reisplannen op te vangen, afhankelijk van beschikbaarheid.`,
      'Het resterende saldo en de betalingsafspraken worden bevestigd op het moment van de boeking.',
    ],
    multiDayShort: `Meerdaagse boekingen met exclusief gebruik van een voertuig en chauffeur vragen een voorschot van ${deposit}%. Het voorschot wordt volledig terugbetaald bij annulering per e-mail ${multiDayHours} uur of meer voor aanvang, en is niet terugbetaalbaar binnen ${multiDayHours} uur.`,
    standardCancel: `Wijzigingen en annuleringen van standaardritten zijn gratis tot ${standardHours} uur voor uw geplande ophaaltijd. Voor last-minute wijzigingen binnen ${standardHours} uur belt u ons rechtstreeks. Meerdaagse boekingen met exclusief gebruik van een voertuig en chauffeur vragen een voorschot van ${deposit}%. Het voorschot wordt volledig terugbetaald bij annulering per e-mail ${multiDayHours} uur of meer voor aanvang, en is niet terugbetaalbaar binnen ${multiDayHours} uur.`,
    flightDelay: `Alle aankomende vluchten: ${wait} minuten gratis vanaf de werkelijke landing. Daarna €${per30} per extra 30 minuten, na voorafgaand akkoord met de chauffeur en volgens beschikbaarheid. Extra wachten is niet gegarandeerd.`,
  },
  fr: {
    sectionTitle: 'Conditions de réservation',
    airportWaitingTitle: 'Politique de temps d’attente à l’aéroport',
    airportWaiting: [
      `Pour tous les vols à l’arrivée, dans ou hors de l’espace Schengen, nous offrons ${wait} minutes d’attente gratuite à compter de l’heure réelle d’atterrissage du vol.`,
      `Après ce délai gratuit, toute attente supplémentaire est facturée €${per30} par tranche supplémentaire de 30 minutes, selon la disponibilité du chauffeur et après accord préalable entre le passager et le chauffeur.`,
      `Si vous avez besoin de temps d’attente supplémentaire, vous devez convenir du supplément applicable directement avec le chauffeur à ce moment-là.`,
      `Attention : le chauffeur se réserve le droit de quitter l’aéroport dès la fin du délai gratuit afin d’honorer d’autres réservations. L’attente supplémentaire n’est donc pas garantie et reste soumise à sa disponibilité.`,
    ],
    airportWaitingShort: `Tous les vols à l’arrivée : ${wait} minutes gratuites à compter de l’atterrissage réel. Ensuite €${per30} par tranche de 30 minutes, après accord préalable avec le chauffeur et selon sa disponibilité. L’attente supplémentaire n’est pas garantie.`,
    includedWaiting: `Suivi de vol en direct, avec ${wait} minutes d’attente gratuite à compter de l’atterrissage réel pour tous les vols à l’arrivée`,
    multiDayTitle: 'Réservations de plusieurs jours – acompte, annulation et remboursement',
    multiDayIntro: `Pour les réservations de plusieurs jours impliquant l’usage exclusif d’un véhicule et d’un chauffeur, un acompte de ${deposit} % du prix total convenu est exigé pour garantir votre réservation et les dates demandées. Les projets de voyage peuvent changer ; les conditions d’annulation sont les suivantes :`,
    multiDayFullRefund: `${multiDayHours} heures ou plus avant le début de la prestation : remboursement intégral de l’acompte.`,
    multiDayNoRefund: `Moins de ${multiDayHours} heures avant le début de la prestation : l’acompte n’est pas remboursable.`,
    multiDayNotes: [
      `Toute annulation doit être communiquée par e-mail à ${CANCELLATION_EMAIL}. Nous ferons toujours de notre mieux pour adapter vos projets de voyage, sous réserve de disponibilité.`,
      'Le solde restant et les modalités de paiement sont confirmés au moment de la réservation.',
    ],
    multiDayShort: `Les réservations de plusieurs jours avec usage exclusif d’un véhicule et d’un chauffeur demandent un acompte de ${deposit} %. L’acompte est intégralement remboursé si vous annulez par e-mail ${multiDayHours} heures ou plus avant le début de la prestation, et il n’est pas remboursable en deçà.`,
    standardCancel: `Les modifications et annulations des transferts ordinaires sont gratuites jusqu’à ${standardHours} heures avant la prise en charge prévue. Pour un changement de dernière minute dans les ${standardHours} heures, appelez-nous directement. Les réservations de plusieurs jours avec usage exclusif d’un véhicule et d’un chauffeur demandent un acompte de ${deposit} %. L’acompte est intégralement remboursé en cas d’annulation par e-mail ${multiDayHours} heures ou plus avant le début, et il n’est pas remboursable en deçà.`,
    flightDelay: `Tous les vols à l’arrivée : ${wait} minutes gratuites à compter de l’atterrissage réel. Ensuite €${per30} par tranche de 30 minutes, après accord préalable avec le chauffeur et selon sa disponibilité. L’attente supplémentaire n’est pas garantie.`,
  },
  el: {
    sectionTitle: 'Όροι κράτησης',
    airportWaitingTitle: 'Πολιτική χρόνου αναμονής στο αεροδρόμιο',
    airportWaiting: [
      `Για όλες τις πτήσεις που φθάνουν, εντός ή εκτός του χώρου Σένγκεν, παρέχουμε ${wait} λεπτά δωρεάν αναμονής από την πραγματική ώρα προσγείωσης της πτήσης.`,
      `Μετά τη λήξη του δωρεάν χρόνου, η επιπλέον αναμονή χρεώνεται €${per30} ανά επιπλέον 30 λεπτά, ανάλογα με τη διαθεσιμότητα του οδηγού και κατόπιν προηγούμενης συμφωνίας μεταξύ επιβάτη και οδηγού.`,
      `Αν χρειάζεστε επιπλέον αναμονή, πρέπει να συμφωνήσετε την αντίστοιχη χρέωση απευθείας με τον οδηγό εκείνη τη στιγμή.`,
      `Προσοχή: ο οδηγός διατηρεί το δικαίωμα να αποχωρήσει από το αεροδρόμιο μόλις λήξει ο δωρεάν χρόνος, ώστε να εξυπηρετήσει άλλες προγραμματισμένες κρατήσεις. Η επιπλέον αναμονή δεν είναι εγγυημένη και εξαρτάται από τη διαθεσιμότητα του οδηγού.`,
    ],
    airportWaitingShort: `Όλες οι πτήσεις που φθάνουν: ${wait} λεπτά δωρεάν από την πραγματική προσγείωση. Στη συνέχεια €${per30} ανά επιπλέον 30 λεπτά, με προηγούμενη συμφωνία με τον οδηγό και ανάλογα με τη διαθεσιμότητά του. Η επιπλέον αναμονή δεν είναι εγγυημένη.`,
    includedWaiting: `Ζωντανή παρακολούθηση πτήσης, με ${wait} λεπτά δωρεάν αναμονής από την πραγματική προσγείωση για όλες τις πτήσεις που φθάνουν`,
    multiDayTitle: 'Πολυήμερες κρατήσεις – προκαταβολή, ακύρωση και επιστροφή',
    multiDayIntro: `Για πολυήμερες κρατήσεις με αποκλειστική χρήση οχήματος και οδηγού απαιτείται προκαταβολή ${deposit}% της συνολικής συμφωνημένης τιμής, ώστε να κατοχυρωθεί η κράτηση και οι ζητούμενες ημερομηνίες. Κατανοούμε ότι τα σχέδια ταξιδιού αλλάζουν, γι’ αυτό ισχύουν οι εξής όροι ακύρωσης:`,
    multiDayFullRefund: `${multiDayHours} ώρες ή περισσότερο πριν την έναρξη της υπηρεσίας: πλήρης επιστροφή της προκαταβολής.`,
    multiDayNoRefund: `Λιγότερο από ${multiDayHours} ώρες πριν την έναρξη της υπηρεσίας: η προκαταβολή δεν επιστρέφεται.`,
    multiDayNotes: [
      `Κάθε ακύρωση πρέπει να γνωστοποιείται με email στο ${CANCELLATION_EMAIL}. Κάνουμε πάντα ό,τι μπορούμε για να προσαρμόσουμε τα σχέδιά σας, ανάλογα με τη διαθεσιμότητα.`,
      'Το υπόλοιπο ποσό και οι ρυθμίσεις πληρωμής επιβεβαιώνονται κατά την κράτηση.',
    ],
    multiDayShort: `Οι πολυήμερες κρατήσεις με αποκλειστική χρήση οχήματος και οδηγού απαιτούν προκαταβολή ${deposit}%. Η προκαταβολή επιστρέφεται πλήρως αν ακυρώσετε με email ${multiDayHours} ώρες ή περισσότερο πριν την έναρξη, και δεν επιστρέφεται εντός ${multiDayHours} ωρών.`,
    standardCancel: `Αλλαγές και ακυρώσεις για τις συνηθισμένες μεταφορές είναι δωρεάν έως ${standardHours} ώρες πριν την προγραμματισμένη παραλαβή. Για αλλαγές της τελευταίας στιγμής εντός ${standardHours} ωρών, καλέστε μας απευθείας. Οι πολυήμερες κρατήσεις με αποκλειστική χρήση οχήματος και οδηγού απαιτούν προκαταβολή ${deposit}%. Η προκαταβολή επιστρέφεται πλήρως με ακύρωση μέσω email ${multiDayHours} ώρες ή περισσότερο πριν την έναρξη, και δεν επιστρέφεται εντός ${multiDayHours} ωρών.`,
    flightDelay: `Όλες οι πτήσεις που φθάνουν: ${wait} λεπτά δωρεάν από την πραγματική προσγείωση. Στη συνέχεια €${per30} ανά επιπλέον 30 λεπτά, με προηγούμενη συμφωνία με τον οδηγό και ανάλογα με τη διαθεσιμότητά του. Η επιπλέον αναμονή δεν είναι εγγυημένη.`,
  },
  hr: {
    sectionTitle: 'Uvjeti rezervacije',
    airportWaitingTitle: 'Politika vremena čekanja u zračnoj luci',
    airportWaiting: [
      `Za sve dolazne letove, unutar ili izvan schengenskog prostora, osiguravamo ${wait} minuta besplatnog čekanja od stvarnog vremena slijetanja leta.`,
      `Nakon isteka besplatnog čekanja, dodatno čekanje naplaćuje se €${per30} za svakih dodatnih 30 minuta, ovisno o dostupnosti vozača i uz prethodni dogovor putnika i vozača.`,
      `Ako vam je potrebno dodatno čekanje, morate u tom trenutku izravno s vozačem dogovoriti primjenjivu naknadu.`,
      `Napomena: vozač može napustiti zračnu luku nakon isteka besplatnog čekanja radi drugih zakazanih vožnji. Dodatno čekanje stoga nije zajamčeno i ovisi o dostupnosti vozača.`,
    ],
    airportWaitingShort: `Svi dolazni letovi: ${wait} minuta besplatno od stvarnog slijetanja. Zatim €${per30} za svakih dodatnih 30 minuta, uz prethodni dogovor s vozačem i ovisno o dostupnosti. Dodatno čekanje nije zajamčeno.`,
    includedWaiting: `Praćenje leta uživo, uz ${wait} minuta besplatnog čekanja od stvarnog slijetanja za sve dolazne letove`,
    multiDayTitle: 'Višednevne rezervacije – polog, otkazivanje i povrat',
    multiDayIntro: `Za višednevne rezervacije s isključivom uporabom vozila i vozača potreban je polog od ${deposit}% ukupno dogovorene cijene kako bi se osigurala rezervacija i traženi datumi. Planovi putovanja se mijenjaju, zato vrijede ovi uvjeti otkazivanja:`,
    multiDayFullRefund: `${multiDayHours} sati ili više prije početka usluge: puni povrat pologa.`,
    multiDayNoRefund: `Manje od ${multiDayHours} sati prije početka usluge: polog se ne vraća.`,
    multiDayNotes: [
      `Svako otkazivanje mora se javiti e-poštom na ${CANCELLATION_EMAIL}. Uvijek ćemo nastojati prilagoditi vaše planove putovanja, ovisno o dostupnosti.`,
      'Preostali iznos i način plaćanja potvrđuju se u trenutku rezervacije.',
    ],
    multiDayShort: `Višednevne rezervacije s isključivom uporabom vozila i vozača zahtijevaju polog od ${deposit}%. Polog se vraća u cijelosti ako otkažete e-poštom ${multiDayHours} sati ili više prije početka usluge, a unutar ${multiDayHours} sati se ne vraća.`,
    standardCancel: `Izmjene i otkazivanja standardnih transfera besplatni su do ${standardHours} sata prije zakazanog preuzimanja. Za hitne izmjene unutar ${standardHours} sata nazovite nas izravno. Višednevne rezervacije s isključivom uporabom vozila i vozača zahtijevaju polog od ${deposit}%. Polog se vraća u cijelosti ako otkažete e-poštom ${multiDayHours} sati ili više prije početka, a unutar ${multiDayHours} sati se ne vraća.`,
    flightDelay: `Svi dolazni letovi: ${wait} minuta besplatno od stvarnog slijetanja. Zatim €${per30} za svakih dodatnih 30 minuta, uz prethodni dogovor s vozačem i ovisno o dostupnosti. Dodatno čekanje nije zajamčeno.`,
  },
};

export function multiDayAnswer(lang: PolicyLang): string {
  const policy = BOOKING_POLICIES[lang];
  return [policy.multiDayIntro, policy.multiDayFullRefund, policy.multiDayNoRefund, ...policy.multiDayNotes].join(' ');
}

export function airportWaitingAnswer(lang: PolicyLang): string {
  return BOOKING_POLICIES[lang].airportWaiting.join(' ');
}
