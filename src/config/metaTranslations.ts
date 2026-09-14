export interface PageMeta {
  title: string;
  description: string;
}

type Locale = 'en' | 'nl' | 'fr' | 'el' | 'hr';

/**
 * Title and description per shared page and locale.
 * Titles lead with the primary keyword for that market (Ahrefs BE, 2026) and stay under ~65 characters
 * where possible; descriptions state price, USP and CTA in 140-160 characters.
 */
export const metaTranslations: Record<string, Record<Locale, PageMeta>> = {
  home: {
    en: {
      title: 'Brussels Airport Transfer & Private Chauffeur in Belgium | Helicro',
      description:
        'Pre-booked private minivan transfers from Brussels, Antwerp, Ghent or Wallonia to Zaventem, Charleroi or Lille airport. Fixed prices from 35€, English-speaking driver, 24/7.',
    },
    nl: {
      title: 'Luchthavenvervoer Zaventem & Charleroi | Privéchauffeur | Helicro',
      description:
        'Privé minivan van Brussel, Antwerpen, Gent of Wallonië naar Zaventem, Charleroi of Lille. Vaste prijzen vanaf 35€, ervaren chauffeur, gratis kinderzitjes, 24/7 beschikbaar.',
    },
    fr: {
      title: 'Navette aéroport Bruxelles & Charleroi | Chauffeur privé | Helicro',
      description:
        'Minivan privé depuis Bruxelles, Anvers, Gand ou la Wallonie vers Zaventem, Charleroi ou Lille. Prix fixes dès 35€, chauffeur multilingue, sièges enfants gratuits, 24/7.',
    },
    el: {
      title: 'Ταξί αεροδρομίου Βρυξέλλες & ιδιωτικές μεταφορές με Έλληνα οδηγό | Helicro',
      description:
        'Ιδιωτικές μεταφορές αεροδρομίου στις Βρυξέλλες με Έλληνα οδηγό. Σταθερές τιμές από 35€ για Zaventem και Charleroi, minivan έως 8 άτομα, δωρεάν παιδικά καθίσματα, 24/7.',
    },
    hr: {
      title: 'Taksi zračna luka Bruxelles i privatni transferi | Helicro',
      description:
        'Privatni transferi do zračnih luka Zaventem i Charleroi po fiksnim cijenama od 35€. Ford kombi do 8 putnika, besplatne dječje sjedalice, dostupno 24/7. Rezervirajte online.',
    },
  },
  'about-us': {
    en: {
      title: 'About Helicro | Greek-Belgian Private Driver in Brussels',
      description:
        'Meet Gerasimos, the professional chauffeur behind Helicro. Over 30 years of safe driving with a military background, based in Braine-l’Alleud near Brussels.',
    },
    nl: {
      title: 'Over Helicro | Grieks-Belgische privéchauffeur in Brussel',
      description:
        'Ontmoet Gerasimos, de professionele chauffeur achter Helicro. Meer dan 30 jaar veilige rijervaring met een militaire achtergrond, gevestigd in Eigenbrakel bij Brussel.',
    },
    fr: {
      title: 'À propos de Helicro | Chauffeur privé belgo-grec à Bruxelles',
      description:
        'Rencontrez Gerasimos, le chauffeur professionnel d’Helicro. Plus de 30 ans de conduite sûre avec un parcours militaire, basé à Braine-l’Alleud près de Bruxelles.',
    },
    el: {
      title: 'Σχετικά με τη Helicro | Ελληνοβέλγος σοφέρ στις Βρυξέλλες',
      description:
        'Γνωρίστε τον Γεράσιμο, τον επαγγελματία οδηγό της Helicro. Πάνω από 30 χρόνια ασφαλούς οδήγησης με στρατιωτικό υπόβαθρο, με έδρα το Braine-l’Alleud κοντά στις Βρυξέλλες.',
    },
    hr: {
      title: 'O Helicru | Grčko-belgijski privatni vozač u Bruxellesu',
      description:
        'Upoznajte Gerasimosa, profesionalnog vozača iza Helicra. Više od 30 godina sigurne vožnje s vojnom pozadinom, sa sjedištem u Braine-l’Alleudu kraj Bruxellesa.',
    },
  },
  pricing: {
    en: {
      title: 'Airport Transfer Prices Brussels | Fixed Rates Zaventem & Charleroi | Helicro',
      description:
        'Transparent fixed prices: Brussels to Zaventem from 35€, Brussels to Charleroi from 65€. No hidden fees, free child seats and 60 minutes of free waiting after landing.',
    },
    nl: {
      title: 'Prijzen luchthavenvervoer | Vaste tarieven Zaventem & Charleroi | Helicro',
      description:
        'Wat kost een taxi naar Zaventem? Vaste prijzen: Brussel–Zaventem vanaf 35€, Brussel–Charleroi vanaf 65€. Geen verborgen kosten, gratis kinderzitjes en wachttijd.',
    },
    fr: {
      title: 'Prix navette aéroport Bruxelles | Tarifs fixes Zaventem & Charleroi | Helicro',
      description:
        'Combien coûte un taxi vers Zaventem ? Prix fixes : Bruxelles–Zaventem dès 35€, Bruxelles–Charleroi dès 65€. Sans frais cachés, sièges enfants et attente gratuits.',
    },
    el: {
      title: 'Τιμές μεταφορών αεροδρομίου Βρυξέλλες | Σταθερές τιμές | Helicro',
      description:
        'Διαφανείς σταθερές τιμές: Βρυξέλλες–Zaventem από 35€, Βρυξέλλες–Charleroi από 65€. Χωρίς κρυφές χρεώσεις, δωρεάν παιδικά καθίσματα και 60 λεπτά αναμονή μετά την προσγείωση.',
    },
    hr: {
      title: 'Cijene prijevoza do zračne luke | Fiksne cijene Zaventem i Charleroi | Helicro',
      description:
        'Transparentne fiksne cijene: Bruxelles–Zaventem od 35€, Bruxelles–Charleroi od 65€. Bez skrivenih naknada, besplatne dječje sjedalice i 60 minuta čekanja nakon slijetanja.',
    },
  },
  reviews: {
    en: {
      title: 'Customer Reviews | Helicro Private Transfers Belgium',
      description:
        'Verified reviews from families, expats, corporate clients and tourists who travelled with Helicro minivan transfers to Brussels and Charleroi airports and across Belgium.',
    },
    nl: {
      title: 'Klantbeoordelingen | Helicro luchthavenvervoer België',
      description:
        'Lees geverifieerde recensies van reizigers die met Helicro naar Zaventem, Charleroi en door heel België reisden. Stiptheid, veiligheid en persoonlijke service.',
    },
    fr: {
      title: 'Avis clients | Helicro navettes et chauffeur privé Belgique',
      description:
        'Découvrez les avis vérifiés de nos passagers sur nos navettes aéroport et notre service de chauffeur privé en Belgique. Ponctualité, sécurité et confort.',
    },
    el: {
      title: 'Αξιολογήσεις πελατών | Helicro ιδιωτικές μεταφορές Βέλγιο',
      description:
        'Διαβάστε κριτικές από πελάτες που ταξίδεψαν με τα Ford minivan της Helicro στο Βέλγιο. Ασφάλεια, συνέπεια και άριστη εξυπηρέτηση από Έλληνα οδηγό.',
    },
    hr: {
      title: 'Recenzije putnika | Helicro privatni transferi Belgija',
      description:
        'Pročitajte provjerene recenzije obitelji, poslovnih putnika i turista koji su putovali s Helicro transferima do zračnih luka Bruxelles i Charleroi.',
    },
  },
  fleet: {
    en: {
      title: 'Our Fleet | Ford Transit Custom & Tourneo Custom Minivans, 8 Seats | Helicro',
      description:
        'Explore our Ford minivan fleet: air-conditioned, sanitised vehicles for up to 8 passengers with room for 8 large suitcases. Free child and booster seats on request.',
    },
    nl: {
      title: 'Ons wagenpark | Ford Transit Custom & Tourneo Custom minivans, 8 zitplaatsen | Helicro',
      description:
        'Bekijk onze Ford minivans: geklimatiseerde, schone wagens voor maximaal 8 personen met plaats voor 8 grote koffers. Gratis kinderzitjes en verhogers op aanvraag.',
    },
    fr: {
      title: 'Notre flotte | Minivans Ford Transit Custom & Tourneo Custom, 8 places | Helicro',
      description:
        'Découvrez nos minivans Ford climatisés et désinfectés pour 8 passagers, avec place pour 8 grandes valises. Sièges bébé et rehausseurs gratuits sur demande.',
    },
    el: {
      title: 'Ο στόλος μας | Ford Transit Custom & Tourneo Custom minivan 8 θέσεων | Helicro',
      description:
        'Γνωρίστε τον στόλο μας από Ford minivan: κλιματιζόμενα, πεντακάθαρα οχήματα έως 8 θέσεων με χώρο για 8 μεγάλες βαλίτσες. Δωρεάν παιδικά καθίσματα.',
    },
    hr: {
      title: 'Naš vozni park | Ford Transit Custom i Tourneo Custom kombiji, 8 sjedala | Helicro',
      description:
        'Istražite našu flotu Ford kombija: klimatizirana, dezinficirana vozila za do 8 putnika s prostorom za 8 velikih kovčega. Besplatne dječje sjedalice na zahtjev.',
    },
  },
  faq: {
    en: {
      title: 'FAQ | Brussels Airport Transfers & Private Driver Belgium | Helicro',
      description:
        'Answers about booking, fixed prices, flight delays, meeting points at Brussels and Charleroi airports, payment methods, cancellation and free child seats.',
    },
    nl: {
      title: 'Veelgestelde vragen | Luchthavenvervoer & privéchauffeur | Helicro',
      description:
        'Antwoorden over boeken, vaste prijzen, vluchtvertragingen, ophaalpunten op Zaventem en Charleroi, betaalmethoden, annulering en gratis kinderzitjes.',
    },
    fr: {
      title: 'FAQ | Navette aéroport & chauffeur privé Belgique | Helicro',
      description:
        'Réponses sur la réservation, les prix fixes, les retards de vol, les points de rencontre à Zaventem et Charleroi, le paiement, l’annulation et les sièges enfants.',
    },
    el: {
      title: 'Συχνές ερωτήσεις | Μεταφορές αεροδρομίου Βρυξέλλες | Helicro',
      description:
        'Απαντήσεις για κρατήσεις, σταθερές τιμές, καθυστερήσεις πτήσεων, σημεία συνάντησης σε Zaventem και Charleroi, τρόπους πληρωμής, ακυρώσεις και παιδικά καθίσματα.',
    },
    hr: {
      title: 'Česta pitanja | Transferi do zračne luke Bruxelles | Helicro',
      description:
        'Odgovori o rezervacijama, fiksnim cijenama, kašnjenju letova, mjestima sastanka u zračnim lukama Zaventem i Charleroi, plaćanju, otkazivanju i dječjim sjedalicama.',
    },
  },
  contact: {
    en: {
      title: 'Contact Helicro | Book a Private Driver or Airport Transfer in Brussels',
      description:
        'Call or WhatsApp Gerasimos at +32 472 35 88 05 to book a private minivan transfer, day trip or corporate ride anywhere in Belgium. Based in Braine-l’Alleud, available 24/7.',
    },
    nl: {
      title: 'Contact Helicro | Boek luchthavenvervoer of privéchauffeur Brussel',
      description:
        'Bel of WhatsApp Gerasimos op +32 472 35 88 05 voor luchthavenvervoer, dagtochten en zakelijke ritten in heel België. Gevestigd in Eigenbrakel, 24/7 bereikbaar.',
    },
    fr: {
      title: 'Contact Helicro | Réserver une navette aéroport ou un chauffeur privé',
      description:
        'Appelez ou écrivez sur WhatsApp au +32 472 35 88 05 pour une navette aéroport, une excursion ou un trajet d’affaires partout en Belgique. Basé à Braine-l’Alleud, 24/7.',
    },
    el: {
      title: 'Επικοινωνία Helicro | Κράτηση μεταφοράς αεροδρομίου Βρυξέλλες',
      description:
        'Καλέστε ή στείλτε WhatsApp στον Γεράσιμο στο +32 472 35 88 05 για ιδιωτικές μεταφορές, εκδρομές και εταιρικές διαδρομές σε όλο το Βέλγιο. Διαθέσιμοι 24/7.',
    },
    hr: {
      title: 'Kontakt Helicro | Rezervirajte transfer do zračne luke u Bruxellesu',
      description:
        'Nazovite ili pošaljite WhatsApp poruku Gerasimosu na +32 472 35 88 05 za privatni prijevoz, izlete i poslovne vožnje diljem Belgije. Dostupni 24/7.',
    },
  },
  'special-offers': {
    en: {
      title: 'Special Offers | Loyalty Rides & Group Transfer Discounts | Helicro',
      description:
        'Seasonal packages, a loyalty programme with free rides, referral rewards and group discounts for Tomorrowland, weddings and corporate transfers in Belgium.',
    },
    nl: {
      title: 'Speciale aanbiedingen | Gratis ritten & groepskortingen | Helicro',
      description:
        'Seizoenspakketten, een loyaliteitsprogramma met gratis ritten, doorverwijsbeloningen en groepskortingen voor Tomorrowland, trouwfeesten en zakelijk vervoer.',
    },
    fr: {
      title: 'Offres spéciales | Trajets fidélité & remises de groupe | Helicro',
      description:
        'Forfaits saisonniers, programme de fidélité avec trajets offerts, parrainage et remises de groupe pour Tomorrowland, mariages et transferts d’entreprise.',
    },
    el: {
      title: 'Ειδικές προσφορές | Δωρεάν διαδρομές & εκπτώσεις ομάδων | Helicro',
      description:
        'Εποχιακά πακέτα, πρόγραμμα επιβράβευσης με δωρεάν διαδρομές, ανταμοιβές συστάσεων και εκπτώσεις ομάδων για Tomorrowland, γάμους και εταιρικές μεταφορές.',
    },
    hr: {
      title: 'Posebne ponude | Besplatne vožnje i grupni popusti | Helicro',
      description:
        'Sezonski paketi, program vjernosti s besplatnim vožnjama, nagrade za preporuke i grupni popusti za Tomorrowland, vjenčanja i korporativne transfere.',
    },
  },
  'services/airport': {
    en: {
      title: 'Taxi Brussels Airport & Charleroi | Private Transfers, Fixed Price | Helicro',
      description:
        'Private taxi and minivan transfers to Brussels Airport (Zaventem), Charleroi and Lille. Fixed prices from 35€, free flight tracking, meet and greet, child seats, 24/7.',
    },
    nl: {
      title: 'Luchthavenvervoer Zaventem & Charleroi | Taxi met vaste prijs | Helicro',
      description:
        'Privé luchthaventaxi en minivan naar Brussels Airport (Zaventem), Charleroi en Lille. Vaste prijzen vanaf 35€, gratis vluchtopvolging, ontvangst in de aankomsthal, 24/7.',
    },
    fr: {
      title: 'Taxi aéroport Bruxelles & Charleroi | Navette privée à prix fixe | Helicro',
      description:
        'Taxi et minivan privés vers l’aéroport de Bruxelles (Zaventem), Charleroi et Lille. Prix fixes dès 35€, suivi de vol gratuit, accueil en salle d’arrivée, 24/7.',
    },
    el: {
      title: 'Μεταφορές αεροδρομίου Βρυξέλλες & Charleroi | Σταθερές τιμές | Helicro',
      description:
        'Ιδιωτικό ταξί και minivan προς τα αεροδρόμια Zaventem, Charleroi και Lille. Σταθερές τιμές από 35€, δωρεάν παρακολούθηση πτήσης, υποδοχή στις αφίξεις, 24/7.',
    },
    hr: {
      title: 'Prijevoz do zračne luke Bruxelles i Charleroi | Fiksna cijena | Helicro',
      description:
        'Privatni taksi i kombi prijevoz do zračnih luka Zaventem, Charleroi i Lille. Fiksne cijene od 35€, besplatno praćenje leta, doček u dvorani za dolaske, 24/7.',
    },
  },
  'services/corporate': {
    en: {
      title: 'Corporate Chauffeur & Shuttle Service Brussels | Embassies & Business | Helicro',
      description:
        'Executive minivan chauffeur service for companies, EU institutions and embassies in Brussels. Hourly hire, recurring shuttles, monthly invoicing and discreet drivers.',
    },
    nl: {
      title: 'Zakelijk vervoer & bedrijfsshuttle Brussel | Ambassades & business | Helicro',
      description:
        'Executive chauffeursdienst voor bedrijven, EU-instellingen en ambassades in Brussel. Uurtarief, terugkerende shuttles, maandelijkse facturatie en discrete chauffeurs.',
    },
    fr: {
      title: 'Chauffeur d’entreprise & navette corporate Bruxelles | Ambassades | Helicro',
      description:
        'Service de chauffeur executive pour entreprises, institutions européennes et ambassades à Bruxelles. Mise à disposition horaire, navettes récurrentes, facturation mensuelle.',
    },
    el: {
      title: 'Εταιρικές μεταφορές & σοφέρ Βρυξέλλες | Πρεσβείες & επιχειρήσεις | Helicro',
      description:
        'Υπηρεσία σοφέρ για εταιρείες, ευρωπαϊκά όργανα και πρεσβείες στις Βρυξέλλες. Ωριαία διάθεση, επαναλαμβανόμενα shuttle, μηνιαία τιμολόγηση και διακριτικοί οδηγοί.',
    },
    hr: {
      title: 'Korporativni prijevoz i poslovni shuttle Bruxelles | Veleposlanstva | Helicro',
      description:
        'Usluga vozača za tvrtke, EU institucije i veleposlanstva u Bruxellesu. Najam po satu, redoviti shuttle prijevoz, mjesečno fakturiranje i diskretni vozači.',
    },
  },
  'services/events': {
    en: {
      title: 'Wedding & Private Party Transport Belgium | Guest Shuttles | Helicro',
      description:
        'Guest shuttles and bridal transport for weddings and private celebrations across Belgium. Comfortable 8-seat minivans, coordinated pickup waves, fixed quotes.',
    },
    nl: {
      title: 'Trouwvervoer & feestvervoer België | Gastenshuttles | Helicro',
      description:
        'Gastenshuttles en bruidsvervoer voor huwelijken en privéfeesten in heel België. Comfortabele minivans met 8 zitplaatsen, gecoördineerde ophaalrondes, vaste offertes.',
    },
    fr: {
      title: 'Transport mariage & soirées privées Belgique | Navettes invités | Helicro',
      description:
        'Navettes invités et transport des mariés pour mariages et fêtes privées partout en Belgique. Minivans confortables 8 places, prises en charge coordonnées, devis fixes.',
    },
    el: {
      title: 'Μεταφορές γάμων & ιδιωτικών εκδηλώσεων Βέλγιο | Helicro',
      description:
        'Μετακίνηση καλεσμένων και ζευγαριού για γάμους και ιδιωτικές εκδηλώσεις στο Βέλγιο. Άνετα minivan 8 θέσεων, συντονισμένες παραλαβές, σταθερές προσφορές.',
    },
    hr: {
      title: 'Prijevoz za vjenčanja i privatne zabave Belgija | Helicro',
      description:
        'Prijevoz gostiju i mladenaca za vjenčanja i privatne proslave diljem Belgije. Udobni kombiji s 8 sjedala, koordinirani prijevoz u više krugova, fiksne ponude.',
    },
  },
  'services/event-transfers': {
    en: {
      title: 'Private Event Transfers Belgium | Luxury 8-Seater Chauffeur | Helicro',
      description:
        'Premium private transfers to Belgium’s top festivals, Formula 1 at Spa, Ferrari track days and corporate summits. Fixed flat rates, up to 8 passengers, late-night returns.',
    },
    nl: {
      title: 'Privé evenemententransfers België | Luxe 8-zitter met chauffeur | Helicro',
      description:
        'Premium privétransfers naar festivals, Formule 1 in Spa, Ferrari track days en bedrijfstoppen. Vaste tarieven, tot 8 passagiers, gegarandeerde late retourritten.',
    },
    fr: {
      title: 'Transferts événementiels Belgique | Minivan 8 places avec chauffeur | Helicro',
      description:
        'Transferts privés premium vers les festivals, la Formule 1 à Spa, les Ferrari track days et les sommets corporate. Tarifs forfaitaires, 8 passagers, retours de nuit garantis.',
    },
    el: {
      title: 'Μεταφορές εκδηλώσεων Βέλγιο | Minivan 8 θέσεων με σοφέρ | Helicro',
      description:
        'Ιδιωτικές μεταφορές για φεστιβάλ, Formula 1 στο Spa και εταιρικές εκδηλώσεις στο Βέλγιο. Σταθερές τιμές, έως 8 επιβάτες, εγγυημένες νυχτερινές επιστροφές.',
    },
    hr: {
      title: 'Prijevoz za događaje Belgija | Kombi s 8 sjedala i vozačem | Helicro',
      description:
        'Privatni transferi za festivale, Formulu 1 u Spa i korporativne događaje u Belgiji. Fiksne cijene, do 8 putnika, zajamčeni noćni povratak.',
    },
  },
  'services/parcel': {
    en: {
      title: 'Same-Day Parcel & Document Courier Belgium | Direct Delivery | Helicro',
      description:
        'Time-critical courier service for documents and parcels across Belgium and to Lille, Luxembourg, the Netherlands and Germany. Direct door-to-door transit, signed proof of delivery.',
    },
    nl: {
      title: 'Koerier & pakketdienst België same-day | Directe levering | Helicro',
      description:
        'Spoedkoerier voor documenten en pakketten in heel België en naar Rijsel, Luxemburg, Nederland en Duitsland. Directe deur-tot-deurlevering met getekend ontvangstbewijs.',
    },
    fr: {
      title: 'Coursier & livraison de colis Belgique le jour même | Helicro',
      description:
        'Service de coursier urgent pour documents et colis partout en Belgique et vers Lille, le Luxembourg, les Pays-Bas et l’Allemagne. Livraison directe de porte à porte.',
    },
    el: {
      title: 'Επείγουσα μεταφορά δεμάτων & εγγράφων Βέλγιο | Helicro',
      description:
        'Άμεση μεταφορά εγγράφων και δεμάτων σε όλο το Βέλγιο και προς Lille, Λουξεμβούργο, Ολλανδία και Γερμανία. Απευθείας παράδοση από πόρτα σε πόρτα με υπογραφή παραλαβής.',
    },
    hr: {
      title: 'Brza dostava paketa i dokumenata Belgija | Helicro',
      description:
        'Hitna kurirska usluga za dokumente i pakete diljem Belgije te prema Lilleu, Luksemburgu, Nizozemskoj i Njemačkoj. Izravna dostava od vrata do vrata s potvrdom primitka.',
    },
  },
  'services/sightseeing': {
    en: {
      title: 'Private Day Trips from Brussels | Bruges, Ghent, Durbuy, Waterloo | Helicro',
      description:
        'Tailored private day tours from Brussels to Bruges, Ghent, Durbuy and Waterloo with an English- or Greek-speaking driver. Air-conditioned minivan, fixed price, your own pace.',
    },
    nl: {
      title: 'Privé dagtochten vanuit Brussel | Brugge, Gent, Durbuy, Waterloo | Helicro',
      description:
        'Dagtochten op maat vanuit Brussel naar Brugge, Gent, Durbuy en Waterloo met privéchauffeur. Comfortabele minivan, vaste prijs en uw eigen tempo.',
    },
    fr: {
      title: 'Excursions privées depuis Bruxelles | Bruges, Gand, Durbuy, Waterloo | Helicro',
      description:
        'Excursions privées d’une journée depuis Bruxelles vers Bruges, Gand, Durbuy et Waterloo avec chauffeur. Minivan climatisé, prix fixe, à votre rythme.',
    },
    el: {
      title: 'Ιδιωτικές ημερήσιες εκδρομές από Βρυξέλλες | Μπριζ, Γάνδη, Durbuy | Helicro',
      description:
        'Εξατομικευμένες εκδρομές από τις Βρυξέλλες σε Μπριζ, Γάνδη, Durbuy και Βατερλό με Έλληνα οδηγό. Κλιματιζόμενο minivan, σταθερή τιμή, στον δικό σας ρυθμό.',
    },
    hr: {
      title: 'Privatni izleti iz Bruxellesa | Bruges, Gent, Durbuy, Waterloo | Helicro',
      description:
        'Prilagođeni jednodnevni izleti iz Bruxellesa u Bruges, Gent, Durbuy i Waterloo s privatnim vozačem. Klimatizirani kombi, fiksna cijena, vaš vlastiti tempo.',
    },
  },
};
