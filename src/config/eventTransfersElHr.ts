import type { EventTransferContent } from '@/components/EventTransferPage';

export const eventHubElHr: Record<'el' | 'hr', EventTransferContent> = {
  el: {
    img: '/images/event-service.jpg',
    title: 'Μεταφορές εκδηλώσεων και υπηρεσίες σοφέρ στο Βέλγιο',
    intro: [
      'Είτε πηγαίνετε σε μεγάλα μουσικά φεστιβάλ, είτε σε αγώνες, είτε σε εταιρικές συνόδους, η Helicro αναλαμβάνει ιδιωτική ομαδική μεταφορά στο Βέλγιο και τις γειτονικές περιοχές.',
      'Χωρίς ουρές, χωρίς απρόβλεπτες χρεώσεις εφαρμογών ταξί. Το minivan έως 8 επιβατών και ο σοφέρ σας φτάνουν στην ώρα τους, με σύνδεση στις μεταφορές αεροδρομίου και τις εταιρικές μετακινήσεις.',
    ],
    whyTitle: 'Γιατί Helicro για τη μεταφορά της εκδήλωσής σας',
    features: [
      {
        title: 'Ευρύχωρο minivan έως 8 επιβατών',
        text: 'Για παρέες, καλεσμένους, ομάδες αγώνων και εταιρικές αποστολές, με χώρο για αποσκευές.',
      },
      {
        title: 'Εγγυημένη επιστροφή αργά το βράδυ',
        text: 'Αν το πρόγραμμα ξεπεράσει την ώρα του, ο οδηγός παραμένει στη διάθεσή σας για την επιστροφή.',
      },
      {
        title: 'Σταθερή, ξεκάθαρη τιμή',
        text: 'Χωρίς κρυφές χρεώσεις, χωρίς προσαύξηση κίνησης. Η τιμή είναι γνωστή πριν την αναχώρηση.',
      },
      {
        title: 'Παραλαβή από αεροδρόμιο και ξενοδοχείο',
        text: 'Από πόρτα σε πόρτα από Zaventem (BRU), Charleroi (CRL), Αμβέρσα ή οποιοδήποτε ξενοδοχείο στο Βέλγιο.',
      },
      {
        title: 'Πολύγλωσσος σοφέρ',
        text: 'Αγγλικά, γαλλικά και ελληνικά, με διακριτική και ασφαλή οδήγηση.',
      },
    ],
    sectionTitle: 'Εκδηλώσεις που καλύπτουμε',
    cards: [
      {
        title: '1. Tomorrowland (Boom)',
        text: 'Απευθείας μεταφορά από αεροδρόμια ή ξενοδοχεία των Βρυξελλών προς τον χώρο στο Boom, με ευέλικτη νυχτερινή επιστροφή.',
        href: '/services/event-transfers/tomorrowland',
        linkLabel: 'Μεταφορές Tomorrowland →',
      },
      {
        title: '2. Formula 1 και αγώνες στο Spa-Francorchamps',
        text: 'Αποφύγετε την κίνηση γύρω από την πίστα. Οδηγός για Grand Prix, ημέρες πίστας Ferrari και 24 Ώρες του Spa.',
        href: '/services/event-transfers/formula-1-spa-francorchamps',
        linkLabel: 'Μεταφορές αγώνων →',
      },
      {
        title: '3. Μουσικά φεστιβάλ και πολιτιστικές εκδηλώσεις',
        text: 'Ομαδικές μεταφορές για Rock Werchter, Graspop, Dour, TEFAF Maastricht και Gentse Feesten.',
      },
      {
        title: '4. Σύνοδοι ΕΕ και επαγγελματικές εκθέσεις',
        text: 'Μεταφορά αντιπροσωπειών στις Βρυξέλλες, στο SQUARE ή στο Brussels Expo στο Heysel.',
      },
    ],
    faqTitle: 'Συχνές ερωτήσεις',
    faqs: [
      {
        question: 'Πόσο νωρίς πρέπει να κλείσω για Tomorrowland ή Formula 1;',
        answer:
          'Τα Σαββατοκύριακα μεγάλης ζήτησης γεμίζουν. Κλείστε 4 έως 8 εβδομάδες νωρίτερα για να εξασφαλίσετε όχημα και οδηγό.',
      },
      {
        question: 'Τι γίνεται αν η εκδήλωση τελειώσει αργότερα;',
        answer:
          'Στα πακέτα αναμονής και μετ’ επιστροφής ο σοφέρ παρακολουθεί το πρόγραμμα και σας παραλαμβάνει ακόμη κι αν υπάρξει καθυστέρηση.',
      },
    ],
    ctaTitle: 'Έτοιμοι να κλείσετε τη μεταφορά της εκδήλωσης;',
    ctaText: 'Πείτε μας ημερομηνία, αριθμό ατόμων και σημείο παραλαβής για σταθερή τιμή.',
    relatedTitle: 'Δείτε επίσης',
    related: [
      { href: '/services/airport', label: 'Μεταφορές αεροδρομίου' },
      { href: '/services/corporate', label: 'Εταιρικές μετακινήσεις' },
      { href: '/services/events', label: 'Γάμοι και ιδιωτικές εκδηλώσεις' },
      { href: '/fleet', label: 'Στόλος' },
    ],
    defaultEvent: 'general',
  },
  hr: {
    img: '/images/event-service.jpg',
    title: 'Prijevoz na događaje i usluge vozača u Belgiji',
    intro: [
      'Bilo da idete na velike glazbene festivale, utrke ili poslovne sastanke, Helicro organizira privatni grupni prijevoz po Belgiji i susjednim regijama.',
      'Bez redova i bez nepredvidivih cijena aplikacija. Kombi do 8 putnika i vozač stižu na vrijeme, uz povezivanje s aerodromskim i poslovnim transferima.',
    ],
    whyTitle: 'Zašto Helicro za prijevoz na događaj',
    features: [
      {
        title: 'Prostrani kombi do 8 putnika',
        text: 'Za grupe prijatelja, goste, ekipe i poslovne delegacije, s mjestom za prtljagu.',
      },
      {
        title: 'Zajamčeni kasni povratak',
        text: 'Ako program kasni, vozač ostaje dodijeljen vašoj grupi za povratak.',
      },
      {
        title: 'Fiksna, jasna cijena',
        text: 'Nema skrivenih naknada ni doplate za gužvu. Cijenu znate prije polaska.',
      },
      {
        title: 'Preuzimanje u zračnoj luci i hotelu',
        text: 'Od vrata do vrata iz Zaventema (BRU), Charleroija (CRL), Antwerpena ili bilo kojeg hotela u Belgiji.',
      },
      {
        title: 'Višejezični vozač',
        text: 'Engleski, francuski i grčki, uz diskretnu i sigurnu vožnju.',
      },
    ],
    sectionTitle: 'Događaji koje pokrivamo',
    cards: [
      {
        title: '1. Tomorrowland (Boom)',
        text: 'Izravan transfer iz zračnih luka ili hotela u Bruxellesu do festivala u Boomu, s fleksibilnim noćnim povratkom.',
        href: '/services/event-transfers/tomorrowland',
        linkLabel: 'Transferi za Tomorrowland →',
      },
      {
        title: '2. Formula 1 i utrke u Spa-Francorchampsu',
        text: 'Izbjegnite gužvu oko staze. Vozač za Grand Prix, Ferrari dane na stazi i 24 sata Spa.',
        href: '/services/event-transfers/formula-1-spa-francorchamps',
        linkLabel: 'Transferi za utrke →',
      },
      {
        title: '3. Glazbeni festivali i kulturna događanja',
        text: 'Grupni prijevoz za Rock Werchter, Graspop, Dour, TEFAF Maastricht i Gentse Feesten.',
      },
      {
        title: '4. Sastanci EU i sajmovi',
        text: 'Prijevoz delegacija u Bruxellesu, u SQUARE ili na Brussels Expo u Heyselu.',
      },
    ],
    faqTitle: 'Česta pitanja',
    faqs: [
      {
        question: 'Koliko unaprijed trebam rezervirati Tomorrowland ili Formulu 1?',
        answer:
          'Vikendi velike potražnje se popune. Rezervirajte 4 do 8 tjedana ranije kako biste osigurali vozilo i vozača.',
      },
      {
        question: 'Što ako događaj završi kasnije?',
        answer:
          'Kod paketa s čekanjem i povratkom vozač prati raspored i preuzima vas i ako program kasni.',
      },
    ],
    ctaTitle: 'Spremni rezervirati prijevoz na događaj?',
    ctaText: 'Javite datum, broj putnika i mjesto preuzimanja za fiksnu cijenu.',
    relatedTitle: 'Pogledajte i',
    related: [
      { href: '/services/airport', label: 'Transferi do zračne luke' },
      { href: '/services/corporate', label: 'Poslovni prijevoz' },
      { href: '/services/events', label: 'Vjenčanja i privatne zabave' },
      { href: '/fleet', label: 'Vozni park' },
    ],
    defaultEvent: 'general',
  },
};

export const tomorrowlandElHr: Record<'el' | 'hr', EventTransferContent> = {
  el: {
    img: '/images/event-service.jpg',
    title: 'Ιδιωτικές μεταφορές VIP για το Tomorrowland',
    intro: [
      'Φτάστε στο Tomorrowland στο Boom χωρίς την ταλαιπωρία των λεωφορείων. Η Helicro κάνει ιδιωτική μεταφορά από πόρτα σε πόρτα μεταξύ αεροδρομίων, ξενοδοχείων και του φεστιβάλ, για ομάδες έως 8 ατόμων.',
      'Τα δημόσια λεωφορεία σημαίνουν ουρές και οι εφαρμογές ταξί ακυρώσεις ή απότομες αυξήσεις τιμής. Το minivan και ο σοφέρ κρατούνται μόνο για την ομάδα σας.',
    ],
    whyTitle: 'Γιατί οι ομάδες του φεστιβάλ επιλέγουν Helicro',
    features: [
      { title: 'Έως 8 επιβάτες και εξοπλισμός', text: 'Χώρος για αποσκευές, σκηνές και εξοπλισμό φεστιβάλ.' },
      { title: 'Αποβίβαση στις επίσημες ζώνες', text: 'Σας αφήνουμε όσο κοντά στις πύλες επιτρέπουν οι κανόνες.' },
      { title: 'Εγγυημένη επιστροφή όλο το 24ωρο', text: 'Χωρίς αναμονή στη 1 τα ξημερώματα για το πώς θα γυρίσετε στο ξενοδοχείο.' },
      { title: 'Μεταφορές αεροδρομίου', text: 'Παραλαβή από BRU, CRL ή Schiphol κατευθείαν στο DreamVille ή στο ξενοδοχείο σας.' },
    ],
    packagesTitle: 'Επιλογές μεταφοράς για το Tomorrowland',
    packageHeaders: ['Πακέτο', 'Για ποιον', 'Τι περιλαμβάνει'],
    packages: [
      { name: 'Αεροδρόμιο / ξενοδοχείο απλή μετάβαση', idealFor: 'Μεμονωμένες αφίξεις', includes: 'Απευθείας παραλαβή από BRU/CRL προς Boom ή ξενοδοχείο, με βοήθεια στις αποσκευές.' },
      { name: 'Ημερήσια μετάβαση με επιστροφή', idealFor: 'Διαμονή σε ξενοδοχείο στις Βρυξέλλες', includes: 'Πρωινή μεταφορά στο Boom και εγγυημένη επιστροφή μετά το τελευταίο σετ.' },
      { name: 'VIP όλου του Σαββατοκύριακου', idealFor: 'Ομάδες VIP', includes: 'Αποκλειστικός οδηγός και minivan 8 θέσεων για 3 ή 4 ημέρες.' },
    ],
    timesTitle: 'Χρόνοι προς το Tomorrowland (Boom)',
    times: [
      'Αεροδρόμιο Βρυξελλών (BRU) → Boom: περίπου 30 λεπτά',
      'Κέντρο Βρυξελλών → Boom: περίπου 35 λεπτά',
      'Αεροδρόμιο Charleroi (CRL) → Boom: περίπου 1 ώρα και 10 λεπτά',
      'Κέντρο Αμβέρσας → Boom: περίπου 20 λεπτά',
    ],
    timesNote: 'Οι χρόνοι μπορεί να αλλάξουν ελαφρά λόγω της κίνησης του φεστιβάλ.',
    faqTitle: 'Συχνές ερωτήσεις',
    faqs: [
      {
        question: 'Πού μας παραλαμβάνει ο οδηγός μετά το τέλος;',
        answer: 'Συμφωνούμε εκ των προτέρων ένα σαφές σημείο συνάντησης κοντά στις επίσημες ζώνες παραλαβής στο Boom.',
      },
      {
        question: 'Μπορούμε να κλείσουμε επιστροφή στις 2 τα ξημερώματα;',
        answer: 'Ναι. Οι νυχτερινές παραλαβές προγραμματίζονται. Ο οδηγός είναι σταθμευμένος την ώρα που συμφωνείτε.',
      },
    ],
    ctaTitle: 'Κλείστε σοφέρ για το Tomorrowland',
    ctaText: 'Τα Σαββατοκύριακα του φεστιβάλ τα οχήματα εξαντλούνται. Κλείστε νωρίς για σταθερή τιμή.',
    relatedTitle: 'Σχετικές μεταφορές',
    related: [
      { href: '/services/event-transfers', label: 'Όλες οι μεταφορές εκδηλώσεων' },
      { href: '/services/event-transfers/formula-1-spa-francorchamps', label: 'Spa-Francorchamps F1' },
      { href: '/services/airport', label: 'Μεταφορές αεροδρομίου' },
    ],
    defaultEvent: 'tomorrowland',
  },
  hr: {
    img: '/images/event-service.jpg',
    title: 'Privatni VIP transferi za Tomorrowland',
    intro: [
      'Dođite na Tomorrowland u Boomu bez čekanja na shuttle. Helicro vozi od vrata do vrata između zračnih luka, hotela i festivala, za grupe do 8 putnika.',
      'Javni shuttle znači redove, a aplikacije otkazivanja ili nagli rast cijene. Kombi i vozač rezervirani su samo za vašu grupu.',
    ],
    whyTitle: 'Zašto festivalske grupe biraju Helicro',
    features: [
      { title: 'Do 8 putnika i oprema', text: 'Mjesta za prtljagu, šatore i festivalsku opremu.' },
      { title: 'Iskrcaj u službenim zonama', text: 'Ostajemo što bliže vratima koliko pravila dopuštaju.' },
      { title: 'Zajamčeni povratak cijelu noć', text: 'Bez čekanja u 1 ujutro kako ćete se vratiti u hotel.' },
      { title: 'Transferi iz zračne luke', text: 'Preuzimanje na BRU, CRL ili Schipholu izravno do DreamVillea ili hotela.' },
    ],
    packagesTitle: 'Opcije transfera za Tomorrowland',
    packageHeaders: ['Paket', 'Za koga', 'Što uključuje'],
    packages: [
      { name: 'Zračna luka / hotel u jednom smjeru', idealFor: 'Pojedinačni dolasci', includes: 'Izravno preuzimanje s BRU/CRL do Booma ili hotela, uz pomoć s prtljagom.' },
      { name: 'Dnevni odlazak i povratak', idealFor: 'Gosti hotela u Bruxellesu', includes: 'Jutarnji prijevoz do Booma i zajamčeni povratak nakon zadnjeg nastupa.' },
      { name: 'VIP cijelog vikenda', idealFor: 'VIP grupe', includes: 'Namjenski vozač i kombi s 8 sjedala za 3 ili 4 dana.' },
    ],
    timesTitle: 'Vremena do Tomorrowlanda (Boom)',
    times: [
      'Zračna luka Bruxelles (BRU) → Boom: oko 30 minuta',
      'Centar Bruxellesa → Boom: oko 35 minuta',
      'Zračna luka Charleroi (CRL) → Boom: oko 1 sat i 10 minuta',
      'Centar Antwerpena → Boom: oko 20 minuta',
    ],
    timesNote: 'Vremena se mogu malo promijeniti zbog festivalskog prometa.',
    faqTitle: 'Česta pitanja',
    faqs: [
      {
        question: 'Gdje nas vozač preuzima nakon završetka?',
        answer: 'Unaprijed dogovaramo jasno mjesto sastanka blizu službenih zona preuzimanja u Boomu.',
      },
      {
        question: 'Možemo li rezervirati povratak u 2 ujutro?',
        answer: 'Da. Noćna preuzimanja se unaprijed dogovaraju. Vozač je parkiran u dogovoreno vrijeme.',
      },
    ],
    ctaTitle: 'Rezervirajte vozača za Tomorrowland',
    ctaText: 'Festivalni vikendi brzo se popune. Rezervirajte rano za fiksnu cijenu.',
    relatedTitle: 'Povezani transferi',
    related: [
      { href: '/services/event-transfers', label: 'Svi transferi za događaje' },
      { href: '/services/event-transfers/formula-1-spa-francorchamps', label: 'Spa-Francorchamps F1' },
      { href: '/services/airport', label: 'Transferi do zračne luke' },
    ],
    defaultEvent: 'tomorrowland',
  },
};

export const spaElHr: Record<'el' | 'hr', EventTransferContent> = {
  el: {
    img: '/images/event-service.jpg',
    title: 'Ιδιωτικός σοφέρ για το Spa-Francorchamps',
    intro: [
      'Πηγαίνετε στο Grand Prix του Βελγίου, σε ημέρα πίστας Ferrari, στο Spa Six Hours ή στις 24 Ώρες του Spa; Η Helicro συνδέει Βρυξέλλες, αεροδρόμια και ξενοδοχεία με την πίστα στις Αρδέννες, με minivan έως 8 επιβατών.',
      'Τα Σαββατοκύριακα αγώνων οι δρόμοι γύρω από το Spa γεμίζουν. Χρειάζεται οδηγός που γνωρίζει τη διαδρομή και τηρεί το πρόγραμμα.',
    ],
    whyTitle: 'Γιατί ομάδες, χορηγοί και θεατές επιλέγουν Helicro',
    features: [
      { title: 'Ευρύχωρο minivan', text: 'Έως 8 επιβάτες και χώρος για αποσκευές και εξοπλισμό φιλοξενίας.' },
      { title: 'Οδηγός σε αναμονή όλη την ημέρα', text: 'Ο οδηγός προσαρμόζεται σε καθυστερήσεις δοκιμών ή βραδινών εκδηλώσεων.' },
      { title: 'Αποβίβαση κοντά στην πίστα', text: 'Στα καθορισμένα πάρκινγκ, στις εισόδους VIP ή σε ξενοδοχεία σε Spa, Malmedy και Stavelot.' },
      { title: 'Διασυνοριακή εξυπηρέτηση', text: 'Μεταφορές από και προς Maastricht, Λιέγη, Κολωνία και Λουξεμβούργο.' },
    ],
    packagesTitle: 'Πακέτα για αγώνες',
    packageBlocks: [
      {
        title: 'Ημερήσιο Grand Prix (μετάβαση και επιστροφή)',
        bullets: [
          'Παραλαβή το πρωί από ξενοδοχείο ή αεροδρόμιο στις Βρυξέλλες.',
          'Απευθείας μεταφορά στο Spa-Francorchamps.',
          'Ο οδηγός περιμένει κατά τη διάρκεια του αγώνα.',
          'Βραδινή επιστροφή στις Βρυξέλλες ή στο ξενοδοχείο.',
        ],
      },
      {
        title: 'Σοφέρ όλου του Σαββατοκύριακου (3 ημέρες)',
        bullets: [
          'Αποκλειστικό minivan από τις δοκιμές της Παρασκευής έως μετά τον αγώνα της Κυριακής.',
          'Καθημερινές μεταφορές μεταξύ ξενοδοχείου (Λιέγη, Βρυξέλλες ή περιοχή Spa) και πίστας.',
        ],
      },
      {
        title: 'Ημέρες πίστας και εταιρική φιλοξενία',
        bullets: [
          'Οργάνωση για ιδιώτες οδηγούς, συλλόγους Ferrari και ομάδες χορηγών με παραλαβές από πολλά σημεία.',
        ],
      },
    ],
    faqTitle: 'Συχνές ερωτήσεις',
    faqs: [
      {
        question: 'Κάνετε παραλαβές από αεροδρόμια εκτός Βελγίου;',
        answer: 'Ναι. Παραλαμβάνουμε τακτικά από Ντίσελντορφ, Κολωνία, Λουξεμβούργο και Maastricht για απευθείας μεταφορά στο Spa-Francorchamps.',
      },
      {
        question: 'Η τιμή μένει σταθερή παρά την κίνηση γύρω από το Spa;',
        answer: 'Ναι. Οι μεταφορές αγώνων συμφωνούνται εκ των προτέρων σε σταθερή τιμή. Η κίνηση της ημέρας δεν προστίθεται.',
      },
    ],
    ctaTitle: 'Κλείστε τη μεταφορά για τον αγώνα',
    ctaText: 'Το Grand Prix ή η ημέρα πίστας ξεκινά από τη στιγμή που φεύγετε από το ξενοδοχείο.',
    relatedTitle: 'Σχετικές μεταφορές',
    related: [
      { href: '/services/event-transfers', label: 'Όλες οι μεταφορές εκδηλώσεων' },
      { href: '/services/event-transfers/tomorrowland', label: 'Tomorrowland' },
      { href: '/services/corporate', label: 'Εταιρικές μετακινήσεις' },
    ],
    defaultEvent: 'spa_f1',
  },
  hr: {
    img: '/images/event-service.jpg',
    title: 'Privatni vozač za Spa-Francorchamps',
    intro: [
      'Idete na belgijski Grand Prix, Ferrari dan na stazi, Spa Six Hours ili 24 sata Spa? Helicro spaja Bruxelles, zračne luke i hotele sa stazom u Ardenima, kombijem do 8 putnika.',
      'Vikendom utrka ceste oko Spaa su pune. Treba vozač koji poznaje rutu i drži se rasporeda.',
    ],
    whyTitle: 'Zašto ekipe, sponzori i gledatelji biraju Helicro',
    features: [
      { title: 'Prostrani kombi', text: 'Do 8 putnika i prostor za prtljagu i opremu ugostiteljstva.' },
      { title: 'Vozač na čekanju cijeli dan', text: 'Vozač se prilagođava kašnjenju treninga ili večernjih događaja.' },
      { title: 'Iskrcaj blizu staze', text: 'Na predviđenim parkiralištima, VIP ulazima ili u hotelima u Spau, Malmedyju i Stavelotu.' },
      { title: 'Prekogranična usluga', text: 'Transferi iz i prema Maastrichtu, Liègeu, Kölnu i Luksemburgu.' },
    ],
    packagesTitle: 'Paketi za utrke',
    packageBlocks: [
      {
        title: 'Jednodnevni Grand Prix (odlazak i povratak)',
        bullets: [
          'Jutarnje preuzimanje u hotelu ili zračnoj luci u Bruxellesu.',
          'Izravan transfer do Spa-Francorchampsa.',
          'Vozač čeka tijekom utrke.',
          'Večernji povratak u Bruxelles ili hotel.',
        ],
      },
      {
        title: 'Vozač cijelog vikenda (3 dana)',
        bullets: [
          'Namjenski kombi od petka do nakon nedjeljne utrke.',
          'Dnevni transferi između hotela (Liège, Bruxelles ili regija Spa) i staze.',
        ],
      },
      {
        title: 'Dani na stazi i poslovno ugostiteljstvo',
        bullets: [
          'Organizacija za privatne vozače, Ferrari klubove i sponzorske grupe s više mjesta preuzimanja.',
        ],
      },
    ],
    faqTitle: 'Česta pitanja',
    faqs: [
      {
        question: 'Preuzimate li goste iz zračnih luka izvan Belgije?',
        answer: 'Da. Redovito preuzimamo iz Düsseldorfa, Kölna, Luksemburga i Maastrichta za izravan transfer do Spa-Francorchampsa.',
      },
      {
        question: 'Ostaje li cijena fiksna unatoč gužvi oko Spaa?',
        answer: 'Da. Transferi za utrke dogovaraju se unaprijed po fiksnoj cijeni. Promet na dan utrke se ne dodaje.',
      },
    ],
    ctaTitle: 'Rezervirajte prijevoz za utrku',
    ctaText: 'Grand Prix ili dan na stazi počinje čim krenete iz hotela.',
    relatedTitle: 'Povezani transferi',
    related: [
      { href: '/services/event-transfers', label: 'Svi transferi za događaje' },
      { href: '/services/event-transfers/tomorrowland', label: 'Tomorrowland' },
      { href: '/services/corporate', label: 'Poslovni prijevoz' },
    ],
    defaultEvent: 'spa_f1',
  },
};
