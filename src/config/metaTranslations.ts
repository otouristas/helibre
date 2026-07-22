export interface PageMeta {
  title: string;
  description: string;
}

export const metaTranslations: Record<string, Record<'en' | 'nl' | 'fr' | 'el' | 'hr', PageMeta>> = {
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
    },
    hr: {
      title: 'O Helicro | Grčko-belgijski privatni vozač u Briselu',
      description: 'Upoznajte Gerasimosa, profesionalnog vozača Helicro. Više od 30 godina iskustva u sigurnoj vožnji s vojnom pozadinom u Belgiji.'
    }
  },
  'pricing': {
    en: {
      title: 'Helicro Pricing | Brussels Airport Taxi & Private Chauffeur Rates',
      description: 'Completely transparent flat rates with no hidden fees for Brussels Zaventem and Charleroi airport transfers. Book your Ford minivan online.'
    },
    nl: {
      title: 'Helicro Tarieven | Luchthavenvervoer Brussel & Privéchauffeur Vaste Prijzen',
      description: 'Volledig transparante vaste tarieven zonder verborgen kosten voor Brussels Zaventem en Charleroi luchthavenvervoer. Boek uw Ford minivan online.'
    },
    fr: {
      title: 'Tarifs Helicro | Navette Aéroport Bruxelles & Chauffeur Privé Prix Fixes',
      description: 'Des tarifs forfaitaires transparents, sans frais cachés pour vos transferts aéroports de Zaventem et Charleroi. Réservez votre van Ford en ligne.'
    },
    el: {
      title: 'ΤΙΜΟΛΟΓΙΑΚΗ ΠΟΛΙΤΙΚΗ HELICRO | ΤΑΞΙ ΑΕΡΟΔΡΟΜΙΟΥ & ΣΤΑΘΕΡΕΣ ΤΙΜΕΣ ΣΟΦΕΡ',
      description: 'Απόλυτα διαφανείς σταθερές τιμές χωρίς κρυφές χρεώσεις για μεταφορές αεροδρομίου Zaventem και Charleroi. Κάντε online κράτηση.'
    },
    hr: {
      title: 'Cijene Helicro | Cijene taksija zračne luke u Briselu i privatnih vozača',
      description: 'Potpuno transparentne fiksne cijene bez skrivenih naknada za transfere do zračne luke u Briselu Zaventem i Charleroi. Rezervirajte Ford kombi online.'
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
      description: 'Διαβάστε κριτικές από πελάτες που ταξίδεψαν με τα Ford minivans της Helicro στο Βέλγιο. Ασφάλεια, συνέπεια και άριστη εξυπηρέτηση.'
    },
    hr: {
      title: 'Recenzije kupaca | Helicro vozač i privatni transferi',
      description: 'Pročitajte provjerene recenzije obitelji, poslovnih ljudi i turista koji su putovali s Helicro minivan transferima u Belgiji.'
    }
  },
  'fleet': {
    en: {
      title: 'Our Fleet | Ford Transit Custom & Tourneo Custom Minivans in Brussels',
      description: 'Explore our premium Ford minivan fleet. Fully sanitized, air-conditioned vehicles fitting up to 8 passengers with generous luggage storage.'
    },
    nl: {
      title: 'Ons Wagenpark | Ford Transit Custom & Tourneo Custom Minivans in Brussel',
      description: 'Bekijk onze Ford minivans. Luxe wagens, perfect schoon, voorzien van airconditioning, geschikt voor maximaal 8 personen met veel bagageruimte.'
    },
    fr: {
      title: 'Notre Flotte | Minivans Ford Transit Custom & Classe V à Bruxelles',
      description: 'Découvrez nos vans haut de gamme Ford. Véhicules climatisés et désinfectés, accueillant jusqu\'à 8 passagers et de nombreuses valises.'
    },
    el: {
      title: 'Ο ΣΤΟΛΟΣ ΜΑΣ | MERCEDES VITO & V-CLASS MINIVANS ΣΤΙΣ ΒΡΥΞΕΛΛΕΣ',
      description: 'Γνωρίστε τον στόλο μας από Ford minivans. Κλιματιζόμενα, πεντακάθαρα οχήματα έως 8 θέσεων με μεγάλους χώρους αποσκευών.'
    },
    hr: {
      title: 'Naš vozni park | Ford Transit Custom i Tourneo Custom kombiji u Briselu',
      description: 'Istražite našu flotu Ford minivana. Potpuno dezinficirana i klimatizirana vozila za do 8 putnika s velikim prostorom za prtljagu.'
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
    },
    hr: {
      title: 'Često postavljana pitanja | Helicro privatni transferi',
      description: 'Pronađite odgovore na uobičajena pitanja o rezervacijama, kašnjenjima letova, sastajalištima u zračnim lukama u Briselu i Charleroi, načinima plaćanja i dječjim sjedalicama.'
    }
  },
  'contact': {
    en: {
      title: 'Contact Us | Book Chauffeur & Airport Transfer in Brussels',
      description: 'Get in touch with Gerasimos at Helicro. Call or message via WhatsApp at +32 472 35 88 05 to book your private minivan transfer in Belgium.'
    },
    nl: {
      title: 'Contact Helicro Transport | Privéchauffeur & Minivan Brussel',
      description: 'Neem contact op met Gerasimos van Helicro. Bel of WhatsApp +32 472 35 88 05 voor al uw privé transfers en groepsvervoer in België.'
    },
    fr: {
      title: 'Contact Helicro Transport | Chauffeur Privé et Minivan Bruxelles',
      description: 'Contactez Gerasimos chez Helicro. Appelez ou écrivez sur WhatsApp au +32 472 35 88 05 pour vos demandes de transfert en Belgique.'
    },
    el: {
      title: 'Επικοινωνία με τη Helicro Transport | Σοφέρ & Minivan Βρυξέλλες',
      description: 'Επικοινωνήστε με τον Γεράσιμο στη Helicro. Καλέστε ή στείλτε μήνυμα στο WhatsApp +32 472 35 88 05 για ιδιωτικές μεταφορές στο Βέλγιο.'
    },
    hr: {
      title: 'Kontaktirajte nas | Rezervirajte vozača i transfer u Briselu',
      description: 'Stupite u kontakt s Gerasimosom u Helicro. Nazovite ili pošaljite poruku putem WhatsAppa na +32 472 35 88 05 kako biste rezervirali privatni prijevoz u Belgiji.'
    }
  },
  'special-offers': {
    en: {
      title: 'Special Chauffeur Offers Brussels | Flat Rate Airport Discounts',
      description: 'Check out our seasonal packages, corporate loyalty program benefits, and group transfer discounts for Tomorrowland and other major events.'
    },
    nl: {
      title: 'Speciale Aanbiedingen Chauffeursdienst Brussel | Vaste Kortingen',
      description: 'Ontdek onze speciale tarieven, voordelen van het loyaliteitsprogramma voor bedrijven en kortingen voor Tomorrowland en groepsvervoer.'
    },
    fr: {
      title: 'Offres Spéciales Navette Bruxelles | Remises Transfert Groupe',
      description: 'Profitez de nos offres sur les transferts aller-retour, notre programme de fidélité entreprise et nos réductions pour les festivals comme Tomorrowland.'
    },
    el: {
      title: 'ΕΙΔΙΚΕΣ ΠΡΟΣΦΟΡΕΣ HELICRO | ΕΚΠΤΩΣΕΙΣ ΜΕΤΑΦΟΡΑΣ & SHUTTLES',
      description: 'Δείτε τις προσφορές μας για Tomorrowland, εταιρικές εκπτώσεις και ειδικά πακέτα για συχνούς ταξιδιώτες στο Βέλγιο.'
    },
    hr: {
      title: 'Posebne ponude | Popusti na prijevoz u Briselu - Helicro',
      description: 'Iskoristite posebne ponude i popuste za povratne transfere, korporativne klijente i grupna putovanja s Helicro privatnim prijevozom.'
    }
  },
  'services/airport': {
    en: {
      title: 'Brussels Airport Minivan Transfers | Fixed Flat Fares',
      description: 'Pre-book a private Ford minivan transfer to Brussels Zaventem (BRU) or Charleroi (CRL). Vetted drivers, 24/7 dispatcher, child seats included.'
    },
    nl: {
      title: 'Luchthavenvervoer Brussel Minivan | Vaste Tarieven Zaventem & Charleroi',
      description: 'Reserveer uw Ford minivan van of naar Brussel Zaventem (BRU) of Charleroi (CRL). Betrouwbare chauffeurs, 24/7 bereikbaar en gratis kinderzitjes.'
    },
    fr: {
      title: 'Navette Aéroport Bruxelles Minivan | Prix Fixes Zaventem & Charleroi',
      description: 'Réservez votre transfert privé en van vers l\'aéroport de Zaventem (BRU) ou Charleroi (CRL). Chauffeur professionnel, service 24/7 et sièges enfants.'
    },
    el: {
      title: 'ΜΕΤΑΦΟΡΕΣ ΑΕΡΟΔΡΟΜΙΟΥ ΒΡΥΞΕΛΛΩΝ | ΣΤΑΘΕΡΕΣ ΤΙΜΕΣ ZAVENTEM & CHARLEROI',
      description: 'Ιδιωτικό Ford minivan από/προς αεροδρόμια Zaventem (BRU) και Charleroi (CRL). Έμπειρος οδηγός, 24/7 εξυπηρέτηση και παιδικά καθίσματα.'
    },
    hr: {
      title: 'Transferi do zračne luke u Briselu | Privatni Ford kombi',
      description: 'Pouzdan prijevoz do zračnih luka Zaventem (BRU) i Charleroi (CRL). Profesionalni vozač, fiksne cijene, dječje sjedalice uključene.'
    }
  },
  'services/corporate': {
    en: {
      title: 'Corporate Chauffeur Service Brussels | Executive Minivans',
      description: 'Premium corporate and diplomatic chauffeur services in Brussels. Vetted drivers, hourly hires, and luxury Ford minivans for roadshows.'
    },
    nl: {
      title: 'Zakelijk Vervoer Brussel | Luxe Ford Minivans',
      description: 'Professionele chauffeursdienst voor bedrijven en ambassades in Brussel. Ford minivans, uurtarief-verhuur en discrete, ervaren chauffeurs.'
    },
    fr: {
      title: 'Chauffeur Professionnel & Diplomatique | Bruxelles Executive',
      description: 'Services de chauffeur haut de gamme pour entreprises et délégations diplomatiques à Bruxelles. Vans de standing Classe V et discrétion garantie.'
    },
    el: {
      title: 'ΕΤΑΙΡΙΚΕΣ ΥΠΗΡΕΣΙΕΣ ΣΟΦΕΡ ΒΡΥΞΕΛΛΕΣ | EXECUTIVE MINIVANS',
      description: 'Premium μετακινήσεις στελεχών και διπλωματικών αποστολών. Επαγγελματίες οδηγοί και πολυτελή Ford minivans για εταιρικές ανάγκες.'
    },
    hr: {
      title: 'Korporativni prijevoz u Briselu | Usluge privatnog vozača',
      description: 'Profesionalne usluge prijevoza za tvrtke, diplomatske misije i veleposlanstva u Briselu. Pouzdan i diskretan vozač.'
    }
  },
  'services/events': {
    en: {
      title: 'Wedding & Private Party Transport Belgium | Helicro',
      description: 'Guest fleet and private party shuttles for weddings and celebrations across Belgium. Comfortable minivans for up to 8 passengers.'
    },
    nl: {
      title: 'Trouw- & Privéfeestvervoer België | Helicro',
      description: 'Gastenvloten en shuttles voor huwelijken en privéfeesten in België. Comfortabele minivans tot 8 personen.'
    },
    fr: {
      title: 'Transport Mariage & Soirées Privées Belgique | Helicro',
      description: 'Navettes invités et flotte pour mariages et soirées privées en Belgique. Minivans confortables jusqu’à 8 places.'
    },
    el: {
      title: 'ΜΕΤΑΦΟΡΑ ΓΑΜΩΝ & ΙΔΙΩΤΙΚΩΝ ΕΚΔΗΛΩΣΕΩΝ | HELICRO',
      description: 'Μετακίνηση καλεσμένων για γάμους και ιδιωτικά πάρτι στο Βέλγιο. Άνετα minivans έως 8 επιβάτες.'
    },
    hr: {
      title: 'Prijevoz za vjenčanja i privatne zabave | Helicro',
      description: 'Prijevoz gostiju za vjenčanja i privatne zabave u Belgiji. Udobni kombiji do 8 putnika.'
    }
  },
  'services/event-transfers': {
    en: {
      title: 'Private Event Transfers Belgium | Luxury 8-Seater Chauffeur | Helicro',
      description: 'Premium private transfers to Belgium’s top festivals, Formula 1, Ferrari track days, and corporate summits. Fixed flat rates, up to 8 passengers.'
    },
    nl: {
      title: 'Privé Evenemententransfers België | Luxe 8-Zitter Chauffeur | Helicro',
      description: 'Premium privétransfers naar festivals, Formule 1, Ferrari track days en bedrijfstoppen. Vaste tarieven, tot 8 passagiers.'
    },
    fr: {
      title: 'Transferts Événementiels Belgique | Chauffeur Minivan 8 Places | Helicro',
      description: 'Transferts privés premium vers festivals, Formule 1, Ferrari track days et sommets corporate. Tarifs forfaitaires, jusqu’à 8 passagers.'
    },
    el: {
      title: 'Μεταφορές Εκδηλώσεων Βέλγιο | Helicro',
      description: 'Ιδιωτικές μεταφορές για φεστιβάλ, F1 και εταιρικές εκδηλώσεις στο Βέλγιο.'
    },
    hr: {
      title: 'Prijevoz za događaje Belgija | Helicro',
      description: 'Privatni transferi za festivale, F1 i korporativne događaje u Belgiji.'
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
    },
    hr: {
      title: 'Brza dostava paketa u Belgiji i Europi | Helicro',
      description: 'Pouzdana i sigurna ekspresna dostava paketa, dokumenata i prtljage. Dostupno 24/7 za lokalne i međunarodne pošiljke.'
    }
  },
  'services/sightseeing': {
    en: {
      title: 'Private Sightseeing Day Trips from Brussels | Bruges, Ghent',
      description: 'Tailored day tours to Bruges, Ghent, and Durbuy. Air-conditioned Ford minivans with a personal driver at your disposal.'
    },
    nl: {
      title: 'Privé Sightseeing Dagtochten vanuit Brussel | Brugge, Gent',
      description: 'Individuele dagtochten naar Brugge, Gent of Durbuy met privéchauffeur. Comfortabele Ford minivans en flexibele reisroutes.'
    },
    fr: {
      title: 'Excursions d\'une Journée depuis Bruxelles | Bruges, Gand',
      description: 'Circuits touristiques privés vers Bruges, Gand et Durbuy. Voyagez dans des vans de standing avec un chauffeur à votre écoute.'
    },
    el: {
      title: 'ΙΔΙΩΤΙΚΕΣ ΗΜΕΡΗΣΙΕΣ ΕΚΔΡΟΜΕΣ ΑΠΟ ΒΡΥΞΕΛΛΕΣ | ΜΠΡΥΖ, ΓΑΝΔΗ',
      description: 'Εξατομικευμένες εκδρομές σε Μπρυζ, Γάνδη και Ντυρμπουί. Ford minivans με προσωπικό σοφέρ στη διάθεσή σας όλη τη μέρα.'
    },
    hr: {
      title: 'Privatni izleti i razgledavanje u Belgiji | Helicro',
      description: 'Istražite Bruges, Ghent, Durbuy i druge belgijske gradove u udobnom privatnom Ford kombiju s osobnim vozačem.'
    }
  }
};
