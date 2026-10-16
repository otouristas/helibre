import { FIXED_PRICES } from '@/config/seoFacts';

export type PolicyLang = 'en' | 'nl' | 'fr' | 'el' | 'hr';

/** Cancellations for multi-day bookings must be sent to this address. */
export const CANCELLATION_EMAIL = 'helicrotransport@gmail.com';

const schengen = FIXED_PRICES.waitingFreeMinutes;
const outside = FIXED_PRICES.waitingFreeMinutesNonSchengen;
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
      `For flights within the Schengen Area, we provide ${schengen} minutes of complimentary waiting time from the actual landing time of your flight. For flights arriving from outside the Schengen Area, we provide ${outside} minutes of complimentary waiting time to allow additional time for passport control and baggage collection.`,
      `After the complimentary waiting period has elapsed, additional waiting time is subject to the driver’s availability and will be charged at ${per30}€ per additional 30 minutes, subject to prior agreement between the passenger and the driver.`,
      'If the passenger requires additional waiting time, the driver and passenger must agree on the additional charge at that time. The driver reserves the right to leave the airport once the complimentary waiting period has expired in order to attend to other scheduled bookings.',
    ],
    airportWaitingShort: `Schengen flights: ${schengen} minutes complimentary from the actual landing time. Flights from outside the Schengen Area: ${outside} minutes. After that, ${per30}€ per additional 30 minutes, by prior agreement and subject to the driver’s availability.`,
    includedWaiting: `Live flight tracking, with ${schengen} minutes of complimentary waiting after landing for Schengen flights and ${outside} minutes for flights from outside Schengen`,
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
    flightDelay: `We track your flight in real time and the complimentary waiting time starts from the actual landing time: ${schengen} minutes for flights within the Schengen Area, and ${outside} minutes for flights arriving from outside Schengen, to allow for passport control and baggage collection. After that, extra waiting is subject to the driver’s availability and costs ${per30}€ per additional 30 minutes, agreed between you and the driver at the time. The driver may leave once the complimentary period has ended in order to attend other scheduled bookings.`,
  },
  nl: {
    sectionTitle: 'Boekingsvoorwaarden',
    airportWaitingTitle: 'Wachttijdbeleid op de luchthaven',
    airportWaiting: [
      `Voor vluchten binnen het Schengengebied voorzien we ${schengen} minuten gratis wachttijd vanaf de werkelijke landingstijd van uw vlucht. Voor vluchten die van buiten het Schengengebied aankomen, voorzien we ${outside} minuten gratis wachttijd, zodat er extra tijd is voor paspoortcontrole en bagageafhandeling.`,
      `Nadat de gratis wachttijd verstreken is, is extra wachttijd afhankelijk van de beschikbaarheid van de chauffeur en wordt die aangerekend aan ${per30}€ per extra 30 minuten, na voorafgaand akkoord tussen de passagier en de chauffeur.`,
      'Als de passagier extra wachttijd nodig heeft, moeten chauffeur en passagier op dat moment de extra kost overeenkomen. De chauffeur behoudt zich het recht voor de luchthaven te verlaten zodra de gratis wachttijd verstreken is, om andere geplande ritten te kunnen uitvoeren.',
    ],
    airportWaitingShort: `Schengenvluchten: ${schengen} minuten gratis vanaf de werkelijke landing. Vluchten van buiten Schengen: ${outside} minuten. Daarna ${per30}€ per extra 30 minuten, na voorafgaand akkoord en afhankelijk van de beschikbaarheid van de chauffeur.`,
    includedWaiting: `Live vluchtopvolging, met ${schengen} minuten gratis wachttijd na de landing voor Schengenvluchten en ${outside} minuten voor vluchten van buiten Schengen`,
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
    flightDelay: `We volgen uw vlucht in realtime. De gratis wachttijd begint bij de werkelijke landing: ${schengen} minuten voor vluchten binnen Schengen en ${outside} minuten voor vluchten van buiten Schengen, voor paspoortcontrole en bagage. Daarna is extra wachttijd afhankelijk van de beschikbaarheid van de chauffeur en kost ${per30}€ per extra 30 minuten, in onderling akkoord. De chauffeur mag vertrekken zodra de gratis periode voorbij is om andere geplande ritten te doen.`,
  },
  fr: {
    sectionTitle: 'Conditions de réservation',
    airportWaitingTitle: 'Politique de temps d’attente à l’aéroport',
    airportWaiting: [
      `Pour les vols à l’intérieur de l’espace Schengen, nous offrons ${schengen} minutes d’attente gratuite à compter de l’heure réelle d’atterrissage de votre vol. Pour les vols en provenance de l’extérieur de l’espace Schengen, nous offrons ${outside} minutes d’attente gratuite afin de laisser le temps du contrôle des passeports et de la récupération des bagages.`,
      `Une fois ce délai gratuit écoulé, toute attente supplémentaire dépend de la disponibilité du chauffeur et est facturée ${per30}€ par tranche supplémentaire de 30 minutes, sous réserve d’un accord préalable entre le passager et le chauffeur.`,
      'Si le passager a besoin d’un temps d’attente supplémentaire, le chauffeur et le passager doivent convenir du supplément à ce moment-là. Le chauffeur se réserve le droit de quitter l’aéroport dès que le délai d’attente gratuit est écoulé, afin d’honorer d’autres réservations prévues.',
    ],
    airportWaitingShort: `Vols Schengen : ${schengen} minutes gratuites à compter de l’atterrissage réel. Vols hors Schengen : ${outside} minutes. Ensuite, ${per30}€ par tranche supplémentaire de 30 minutes, après accord préalable et selon la disponibilité du chauffeur.`,
    includedWaiting: `Suivi de vol en direct, avec ${schengen} minutes d’attente gratuite après l’atterrissage pour les vols Schengen et ${outside} minutes pour les vols en provenance de l’extérieur de Schengen`,
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
    flightDelay: `Nous suivons votre vol en temps réel. L’attente gratuite part de l’heure réelle d’atterrissage : ${schengen} minutes pour un vol à l’intérieur de Schengen, et ${outside} minutes pour un vol en provenance de l’extérieur de Schengen, afin de couvrir le contrôle des passeports et les bagages. Au-delà, l’attente supplémentaire dépend de la disponibilité du chauffeur et coûte ${per30}€ par tranche de 30 minutes, convenue sur place. Le chauffeur peut quitter l’aéroport une fois le délai gratuit écoulé afin d’honorer d’autres réservations.`,
  },
  el: {
    sectionTitle: 'Όροι κράτησης',
    airportWaitingTitle: 'Πολιτική χρόνου αναμονής στο αεροδρόμιο',
    airportWaiting: [
      `Για πτήσεις εντός του χώρου Σένγκεν παρέχουμε ${schengen} λεπτά δωρεάν αναμονής από την πραγματική ώρα προσγείωσης της πτήσης σας. Για πτήσεις που φθάνουν από εκτός χώρου Σένγκεν παρέχουμε ${outside} λεπτά δωρεάν αναμονής, ώστε να υπάρχει επιπλέον χρόνος για έλεγχο διαβατηρίων και παραλαβή αποσκευών.`,
      `Μετά τη λήξη του δωρεάν χρόνου, η επιπλέον αναμονή εξαρτάται από τη διαθεσιμότητα του οδηγού και χρεώνεται ${per30}€ για κάθε επιπλέον 30 λεπτά, κατόπιν προηγούμενης συμφωνίας μεταξύ επιβάτη και οδηγού.`,
      'Αν ο επιβάτης χρειάζεται επιπλέον αναμονή, οδηγός και επιβάτης πρέπει να συμφωνήσουν τη χρέωση εκείνη τη στιγμή. Ο οδηγός διατηρεί το δικαίωμα να αποχωρήσει από το αεροδρόμιο μόλις λήξει ο δωρεάν χρόνος αναμονής, ώστε να εξυπηρετήσει άλλες προγραμματισμένες κρατήσεις.',
    ],
    airportWaitingShort: `Πτήσεις Σένγκεν: ${schengen} λεπτά δωρεάν από την πραγματική προσγείωση. Πτήσεις εκτός Σένγκεν: ${outside} λεπτά. Μετά, ${per30}€ για κάθε επιπλέον 30 λεπτά, με προηγούμενη συμφωνία και ανάλογα με τη διαθεσιμότητα του οδηγού.`,
    includedWaiting: `Ζωντανή παρακολούθηση πτήσης, με ${schengen} λεπτά δωρεάν αναμονή μετά την προσγείωση για πτήσεις Σένγκεν και ${outside} λεπτά για πτήσεις εκτός Σένγκεν`,
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
    flightDelay: `Παρακολουθούμε την πτήση σας σε πραγματικό χρόνο. Η δωρεάν αναμονή ξεκινά από την πραγματική προσγείωση: ${schengen} λεπτά για πτήσεις εντός Σένγκεν και ${outside} λεπτά για πτήσεις εκτός Σένγκεν, για διαβατήρια και αποσκευές. Μετά, η επιπλέον αναμονή εξαρτάται από τη διαθεσιμότητα του οδηγού και κοστίζει ${per30}€ για κάθε 30 λεπτά, με συμφωνία εκείνη τη στιγμή. Ο οδηγός μπορεί να αποχωρήσει μόλις λήξει ο δωρεάν χρόνος, για άλλες προγραμματισμένες κρατήσεις.`,
  },
  hr: {
    sectionTitle: 'Uvjeti rezervacije',
    airportWaitingTitle: 'Politika vremena čekanja u zračnoj luci',
    airportWaiting: [
      `Za letove unutar schengenskog prostora osiguravamo ${schengen} minuta besplatnog čekanja od stvarnog vremena slijetanja vašeg leta. Za letove koji dolaze izvan schengenskog prostora osiguravamo ${outside} minuta besplatnog čekanja, kako bi bilo dovoljno vremena za kontrolu putovnica i preuzimanje prtljage.`,
      `Nakon isteka besplatnog čekanja, dodatno čekanje ovisi o dostupnosti vozača i naplaćuje se ${per30}€ za svakih dodatnih 30 minuta, uz prethodni dogovor putnika i vozača.`,
      'Ako putnik treba dodatno čekanje, vozač i putnik moraju se tada dogovoriti o naknadi. Vozač zadržava pravo napustiti zračnu luku čim istekne besplatno čekanje, kako bi stigao na druge zakazane vožnje.',
    ],
    airportWaitingShort: `Letovi unutar Schengena: ${schengen} minuta besplatno od stvarnog slijetanja. Letovi izvan Schengena: ${outside} minuta. Nakon toga ${per30}€ za svakih dodatnih 30 minuta, uz prethodni dogovor i ovisno o dostupnosti vozača.`,
    includedWaiting: `Praćenje leta uživo, s ${schengen} minuta besplatnog čekanja nakon slijetanja za letove unutar Schengena i ${outside} minuta za letove izvan Schengena`,
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
    flightDelay: `Pratimo vaš let u stvarnom vremenu. Besplatno čekanje kreće od stvarnog slijetanja: ${schengen} minuta za letove unutar Schengena i ${outside} minuta za letove izvan Schengena, zbog putovnica i prtljage. Nakon toga dodatno čekanje ovisi o dostupnosti vozača i košta ${per30}€ za svakih 30 minuta, uz dogovor u tom trenutku. Vozač može otići kad besplatno razdoblje istekne kako bi stigao na druge zakazane vožnje.`,
  },
};

export function multiDayAnswer(lang: PolicyLang): string {
  const policy = BOOKING_POLICIES[lang];
  return [policy.multiDayIntro, policy.multiDayFullRefund, policy.multiDayNoRefund, ...policy.multiDayNotes].join(' ');
}

export function airportWaitingAnswer(lang: PolicyLang): string {
  return BOOKING_POLICIES[lang].airportWaiting.join(' ');
}
