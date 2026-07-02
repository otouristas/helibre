export interface PageMeta {
  title: string;
  description: string;
}

export const metaTranslations: Record<string, Record<'en' | 'nl' | 'fr' | 'el', PageMeta>> = {
  'about-us': {
    en: {
      title: 'About Helicro | Greek-Belgian Private Driver in Brussels',
      description: 'Meet Gerasimos, the professional chauffeur behind Helicro. Over 30 years of safe driving experience with a military background based in Belgium.'
    },
    nl: {
      title: 'Over Helicro | Grieks-Belgische Privéchauffeur in Brussel',
      description: 'Ontmoet Gerasimos, de professionele chauffeur achter Helicro. Meer dan 30 jaar veilige rijervaring met een militaire achtergrond in België.'
    },
    fr: {
      title: 'À propos de Helicro | Chauffeur Privé Belgo-Grec à Bruxelles',
      description: 'Rencontrez Gerasimos, le chauffeur professionnel d\'Helicro. Plus de 30 ans d\'expérience de conduite avec un parcours militaire en Belgique.'
    },
    el: {
      title: 'ΣΧΕΤΙΚΑ ΜΕ ΤΗ HELICRO | ΕΛΛΗΝΟ-ΒΕΛΓΟΣ ΣΟΦΕΡ ΣΤΙΣ ΒΡΥΞΕΛΛΕΣ',
      description: 'Γνωρίστε τον Γεράσιμο, τον επαγγελματία οδηγό της Helicro. Πάνω από 30 χρόνια εμπειρίας με στρατιωτικό υπόβαθρο στο Βέλγιο.'
    }
  },
  'pricing': {
    en: {
      title: 'Helicro Pricing | Brussels Airport Taxi & Private Chauffeur Rates',
      description: 'Completely transparent flat rates with no hidden fees for Brussels Zaventem and Charleroi airport transfers. Book your Mercedes minivan online.'
    },
    nl: {
      title: 'Helicro Tarieven | Luchthavenvervoer Brussel & Privéchauffeur Vaste Prijzen',
      description: 'Volledig transparante vaste tarieven zonder verborgen kosten voor Brussels Zaventem en Charleroi luchthavenvervoer. Boek uw Mercedes minivan online.'
    },
    fr: {
      title: 'Tarifs Helicro | Navette Aéroport Bruxelles & Chauffeur Privé Prix Fixes',
      description: 'Des tarifs forfaitaires transparents, sans frais cachés pour vos transferts aéroports de Zaventem et Charleroi. Réservez votre van Mercedes en ligne.'
    },
    el: {
      title: 'ΤΙΜΟΛΟΓΙΑΚΗ ΠΟΛΙΤΙΚΗ HELICRO | ΤΑΞΙ ΑΕΡΟΔΡΟΜΙΟΥ & ΣΤΑΘΕΡΕΣ ΤΙΜΕΣ ΣΟΦΕΡ',
      description: 'Απόλυτα διαφανείς σταθερές τιμές χωρίς κρυφές χρεώσεις για μεταφορές αεροδρομίου Zaventem και Charleroi. Κάντε online κράτηση.'
    }
  },
  'reviews': {
    en: {
      title: 'Customer Reviews | Helicro Chauffeur & Private Transfers',
      description: 'Read verified customer feedback from families, corporate professionals, and tourists who traveled with Helicro minivan transfers in Belgium.'
    },
    nl: {
      title: 'Klantbeoordelingen | Helicro Chauffeur & Privé Transfers',
      description: 'Lees geverifieerde recensies van reizigers die met Helicro minivans hebben gereist in Brussel en België. Ontdek onze stiptheid en uitstekende service.'
    },
    fr: {
      title: 'Avis Clients | Helicro Chauffeur & Transferts Privés',
      description: 'Découvrez les avis de nos clients sur nos services de navettes et de chauffeurs privés en Belgique. Ponctualité, sécurité et confort de haut standing.'
    },
    el: {
      title: 'ΑΞΙΟΛΟΓΗΣΕΙΣ ΠΕΛΑΤΩΝ | HELICRO ΣΟΦΕΡ & ΙΔΙΩΤΙΚΕΣ ΜΕΤΑΦΟΡΕΣ',
      description: 'Διαβάστε κριτικές από πελάτες που ταξίδεψαν με τα Mercedes minivans της Helicro στο Βέλγιο. Ασφάλεια, συνέπεια και άριστη εξυπηρέτηση.'
    }
  },
  'fleet': {
    en: {
      title: 'Our Fleet | Mercedes Vito & V-Class Minivans in Brussels',
      description: 'Explore our premium Mercedes-Benz minivan fleet. Fully sanitized, air-conditioned vehicles fitting up to 8 passengers with generous luggage storage.'
    },
    nl: {
      title: 'Ons Wagenpark | Mercedes Vito & V-Klasse Minivans in Brussel',
      description: 'Bekijk onze Mercedes-Benz minivans. Luxe wagens, perfect schoon, voorzien van airconditioning, geschikt voor maximaal 8 personen met veel bagageruimte.'
    },
    fr: {
      title: 'Notre Flotte | Minivans Mercedes Vito & Classe V à Bruxelles',
      description: 'Découvrez nos vans haut de gamme Mercedes-Benz. Véhicules climatisés et désinfectés, accueillant jusqu\'à 8 passagers et de nombreuses valises.'
    },
    el: {
      title: 'Ο ΣΤΟΛΟΣ ΜΑΣ | MERCEDES VITO & V-CLASS MINIVANS ΣΤΙΣ ΒΡΥΞΕΛΛΕΣ',
      description: 'Γνωρίστε τον στόλο μας από Mercedes-Benz minivans. Κλιματιζόμενα, πεντακάθαρα οχήματα έως 8 θέσεων με μεγάλους χώρους αποσκευών.'
    }
  },
  'faq': {
    en: {
      title: 'Frequently Asked Questions | Helicro Private Transfers',
      description: 'Find answers to common questions about booking, flight delays, meeting points at Brussels and Charleroi airports, payment methods, and child seats.'
    },
    nl: {
      title: 'Veelgestelde Vragen | Helicro Privé Transfers & Shuttles',
      description: 'Vind antwoorden op veelgestelde vragen over boekingen, vluchtvertragingen, ophaallocaties, betaalmethoden en kinderzitjes.'
    },
    fr: {
      title: 'Questions Fréquentes | Helicro Chauffeur Privé & Navettes',
      description: 'Trouvez les réponses à vos questions concernant les réservations, les retards de vol, les points de rencontre aux aéroports et les sièges bébés.'
    },
    el: {
      title: 'ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ | HELICRO ΙΔΙΩΤΙΚΕΣ ΜΕΤΑΦΟΡΕΣ',
      description: 'Βρείτε απαντήσεις για κρατήσεις, καθυστερήσεις πτήσεων, σημεία συνάντησης στα αεροδρόμια, τρόπους πληρωμής και παιδικά καθίσματα.'
    }
  },
  'contact': {
    en: {
      title: 'Contact Us | Book Chauffeur & Airport Transfer in Brussels',
      description: 'Get in touch with Gerasimos at Helicro. Call or message via WhatsApp at +32 472 35 88 05 to book your private minivan transfer in Belgium.'
    },
    nl: {
      title: 'Contact Opnemen | Boek Chauffeur & Luchthavenvervoer Brussel',
      description: 'Neem contact op met Gerasimos van Helicro. Bel of WhatsApp +32 472 35 88 05 voor al uw privé transfers en groepsvervoer in België.'
    },
    fr: {
      title: 'Contactez-nous | Réserver Chauffeur & Navette Bruxelles',
      description: 'Contactez Gerasimos chez Helicro. Appelez ou écrivez sur WhatsApp au +32 472 35 88 05 pour vos demandes de transfert en Belgique.'
    },
    el: {
      title: 'ΕΠΙΚΟΙΝΩΝΙΑ | ΚΡΑΤΗΣΗ ΣΟΦΕΡ & ΜΕΤΑΦΟΡΑΣ ΑΕΡΟΔΡΟΜΙΟΥ',
      description: 'Επικοινωνήστε με τον Γεράσιμο στη Helicro. Καλέστε ή στείλτε μήνυμα στο WhatsApp +32 472 35 88 05 για ιδιωτικές μεταφορές στο Βέλγιο.'
    }
  },
  'special-offers': {
    en: {
      title: 'Special Offers & Flat Rates | Helicro Private Transport',
      description: 'Check our latest special flat rates, airport deals, day-trip packages, and custom group discounts for private minivan rides in Belgium.'
    },
    nl: {
      title: 'Speciale Aanbiedingen & Vaste Prijzen | Helicro Vervoer',
      description: 'Bekijk onze laatste aanbiedingen, vaste tarieven, kortingspakketten voor dagtochten en speciale tarieven voor luchthavenvervoer.'
    },
    fr: {
      title: 'Offres Spéciales & Tarifs Forfaits | Transferts Helicro',
      description: 'Consultez nos forfaits spéciaux, offres aéroports, circuits touristiques et réductions de groupe pour vos déplacements en van en Belgique.'
    },
    el: {
      title: 'ΕΙΔΙΚΕΣ ΠΡΟΣΦΟΡΕΣ & ΣΤΑΘΕΡΕΣ ΤΙΜΕΣ | HELICRO ΙΔΙΩΤΙΚΕΣ ΜΕΤΑΦΟΡΕΣ',
      description: 'Δείτε τις ειδικές προσφορές μας, πακέτα εκδρομών και εκπτώσεις για μεταφορές με minivans στο Βέλγιο.'
    }
  },
  'services/airport': {
    en: {
      title: 'Airport Transfers Brussels | Fixed-Price Minivan Services',
      description: 'Reliable airport transfers to and from Brussels Zaventem (BRU), Charleroi (CRL), and Lille airports. Professional meet & greet and live flight tracking.'
    },
    nl: {
      title: 'Luchthavenvervoer Brussel | Vaste Prijzen & Minivans',
      description: 'Comfortabele luchthaventransfers naar Brussels Airport en Charleroi. Vriendelijke chauffeurs, live vlucht tracking en ruime Mercedes minivans.'
    },
    fr: {
      title: 'Navette Aéroport Bruxelles | Chauffeur & Prix Fixes',
      description: 'Service de navette aéroport vers Zaventem et Charleroi. Accueil personnalisé, suivi de vol et minivans Mercedes de haut standing.'
    },
    el: {
      title: 'ΜΕΤΑΦΟΡΕΣ ΑΕΡΟΔΡΟΜΙΟΥ ΒΡΥΞΕΛΛΕΣ | ΣΤΑΘΕΡΕΣ ΤΙΜΕΣ MINIVAN',
      description: 'Αξιόπιστες μεταφορές αεροδρομίου από/προς Zaventem, Charleroi και Lille. Παρακολούθηση πτήσεων και υποδοχή στην έξοδο με πινακίδα.'
    }
  },
  'services/corporate': {
    en: {
      title: 'Corporate Chauffeur Service Brussels | Executive Minivans',
      description: 'Premium corporate and diplomatic chauffeur services in Brussels. Vetted drivers, hourly hires, and luxury Mercedes minivans for roadshows.'
    },
    nl: {
      title: 'Zakelijk Vervoer Brussel | Luxe Mercedes Minivans',
      description: 'Professionele chauffeursdienst voor bedrijven en ambassades in Brussel. Mercedes minivans, uurtarief-verhuur en discrete, ervaren chauffeurs.'
    },
    fr: {
      title: 'Chauffeur Professionnel & Diplomatique | Bruxelles Executive',
      description: 'Services de chauffeur haut de gamme pour entreprises et délégations diplomatiques à Bruxelles. Vans de standing Classe V et discrétion garantie.'
    },
    el: {
      title: 'ΕΤΑΙΡΙΚΕΣ ΥΠΗΡΕΣΙΕΣ ΣΟΦΕΡ ΒΡΥΞΕΛΛΕΣ | EXECUTIVE MINIVANS',
      description: 'Premium μετακινήσεις στελεχών και διπλωματικών αποστολών. Επαγγελματίες οδηγοί και πολυτελή Mercedes minivans για εταιρικές ανάγκες.'
    }
  },
  'services/events': {
    en: {
      title: 'Event & Wedding Transportation Belgium | Group Minivans',
      description: 'Stress-free group and guest transportation for weddings, concerts, corporate events, and parties. Mercedes minivans and professional organization.'
    },
    nl: {
      title: 'Evenementen & Trouwvervoer België | Groepsvervoer Minivans',
      description: 'Zorgeloos groepsvervoer voor huwelijken, evenementen, congressen en privéfeesten. Comfortabele Mercedes minivans en flexibele shuttles.'
    },
    fr: {
      title: 'Navette Événements & Mariage Belgique | Vans de Groupe',
      description: 'Organisation de transferts de groupe pour mariages, soirées d\'entreprise et événements culturels. Flotte Mercedes avec chauffeurs coordonnés.'
    },
    el: {
      title: 'ΜΕΤΑΦΟΡΑ ΣΕ ΕΚΔΗΛΩΣΕΙΣ & ΓΑΜΟΥΣ | MINIVANS ΟΜΑΔΩΝ ΒΕΛΓΙΟ',
      description: 'Μετακίνηση καλεσμένων για γάμους, συνέδρια, πάρτι και συναυλίες. Mercedes minivans και επαγγελματικός συντονισμός για κάθε εκδήλωση.'
    }
  },
  'services/parcel': {
    en: {
      title: 'Express Parcel & Document Delivery Belgium | Safe Cargo',
      description: 'Time-critical, secure courier and express document delivery across Belgium and neighboring countries. Secure, direct door-to-door transit.'
    },
    nl: {
      title: 'Snelkoerier & Express Pakketbezorging België | Veilig Transport',
      description: 'Spoedbezorging van documenten en kritieke pakketten in België en Europa. Directe deur-tot-deur levering met betrouwbare opvolging.'
    },
    fr: {
      title: 'Livraison Express de Colis & Documents | Transport Sécurisé',
      description: 'Service de coursier rapide pour plis et colis urgents en Belgique et pays limitrophes. Transport direct et sécurisé sans intermédiaire.'
    },
    el: {
      title: 'ΕΠΕΙΓΟΥΣΑ ΜΕΤΑΦΟΡΑ ΔΕΜΑΤΩΝ & ΕΓΓΡΑΦΩΝ | ΑΣΦΑΛΗΣ ΠΑΡΑΔΟΣΗ',
      description: 'Αμεση μεταφορά εγγράφων και κρίσιμων δεμάτων στο Βέλγιο και τις γειτονικές χώρες. Απευθείας παράδοση από πόρτα σε πόρτα.'
    }
  },
  'services/sightseeing': {
    en: {
      title: 'Private Sightseeing Day Trips from Brussels | Bruges, Ghent',
      description: 'Tailored day tours to Bruges, Ghent, Durbuy, and Dinant. Air-conditioned Mercedes minivans with a personal driver at your disposal.'
    },
    nl: {
      title: 'Privé Sightseeing Dagtochten vanuit Brussel | Brugge, Gent',
      description: 'Individuele dagtochten naar Brugge, Gent of Dinant met privéchauffeur. Comfortabele Mercedes minivans en flexibele reisroutes.'
    },
    fr: {
      title: 'Excursions d\'une Journée depuis Bruxelles | Bruges, Gand',
      description: 'Circuits touristiques privés vers Bruges, Gand, Durbuy et Dinant. Voyagez dans des vans de standing avec un chauffeur à votre écoute.'
    },
    el: {
      title: 'ΙΔΙΩΤΙΚΕΣ ΗΜΕΡΗΣΙΕΣ ΕΚΔΡΟΜΕΣ ΑΠΟ ΒΡΥΞΕΛΛΕΣ | ΜΠΡΥΖ, ΓΑΝΔΗ',
      description: 'Εξατομικευμένες εκδρομές σε Μπρυζ, Γάνδη, Ντινάντ και Ντυρμπουί. Mercedes minivans με προσωπικό σοφέρ στη διάθεσή σας όλη τη μέρα.'
    }
  }
};
