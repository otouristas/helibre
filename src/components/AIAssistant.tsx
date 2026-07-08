'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath, Locale } from '@/config/translations';
import styles from './AIAssistant.module.css';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  cta?: {
    label: string;
    url: string;
    type: 'whatsapp' | 'book' | 'phone';
  }[];
}

export default function AIAssistant() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname) as Locale;
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // UI labels based on active language
  const ui = {
    en: {
      launcherTooltip: 'Chat with Touristas AI',
      headerTitle: 'Touristas AI',
      headerSubtitle: 'Online • Helicro Smart Agent',
      inputPlaceholder: 'Ask about rates, fleet, child seats...',
      suggestTitle: 'Suggested Questions:',
      suggestRates: '✈️ Airport transfer rates?',
      suggestFleet: '🚗 What minivans do you have?',
      suggestSeats: '👶 Are child seats free?',
      suggestLang: '🌍 What languages do you speak?',
      suggestDriver: '👨 Who is the driver?',
      botGreeting: 'Hello! I am Touristas AI, the virtual assistant for Helicro. Ask me anything about our private transfers, Ford minivans, fixed rates, child seats, or day trips in Belgium!',
      whatsappCta: '💬 Message on WhatsApp',
      bookCta: '📅 Book Transfer Online',
      phoneCta: '📞 Call Chauffeur Direct',
      disclaimer: 'Disclaimer: This is an AI assistant. Please double check final rates and routes with our dispatch.',
      poweredBy: 'Powered by Touristas Technologies'
    },
    nl: {
      launcherTooltip: 'Chat met Touristas AI',
      headerTitle: 'Touristas AI',
      headerSubtitle: 'Online • Helicro Smart Agent',
      inputPlaceholder: 'Vraag naar tarieven, wagens, kinderzitjes...',
      suggestTitle: 'Voorgestelde Vragen:',
      suggestRates: '✈️ Luchthaven tarieven?',
      suggestFleet: '🚗 Welke minivans zijn er?',
      suggestSeats: '👶 Zijn kinderzitjes gratis?',
      suggestLang: '🌍 Welke talen spreekt u?',
      suggestDriver: '👨 Wie is de chauffeur?',
      botGreeting: 'Hallo! Ik ben Touristas AI, de virtuele assistent voor Helicro. Vraag me alles over onze privé-transfers, Ford minivans, vaste tarieven, kinderzitjes of dagtochten in België!',
      whatsappCta: '💬 Stuur een WhatsApp',
      bookCta: '📅 Online Rit Boeken',
      phoneCta: '📞 Direct Chauffeur Bellen',
      disclaimer: 'Disclaimer: Dit is een AI-assistent. Controleer definitieve tarieven en ritten met onze planning.',
      poweredBy: 'Aangedreven door Touristas Technologies'
    },
    fr: {
      launcherTooltip: 'Discutez avec Touristas AI',
      headerTitle: 'Touristas AI',
      headerSubtitle: 'En ligne • Agent Intelligent Helicro',
      inputPlaceholder: 'Tarifs, flotte, sièges enfants...',
      suggestTitle: 'Suggestions :',
      suggestRates: '✈️ Tarifs navette aéroport ?',
      suggestFleet: '🚗 Quels minivans proposez-vous ?',
      suggestSeats: '👶 Sièges enfants gratuits ?',
      suggestLang: '🌍 Quelles langues parlez-vous ?',
      suggestDriver: '👨 Qui est le chauffeur ?',
      botGreeting: 'Bonjour ! Je suis Touristas AI, l\'assistant virtuel de Helicro. Posez-moi vos questions sur nos transferts privés, nos minivans Ford, nos prix fixes, nos sièges enfants ou nos excursions en Belgique !',
      whatsappCta: 'Contacter Gerasimos sur WhatsApp',
      bookCta: 'Réserver en ligne',
      phoneCta: 'Appeler le Chauffeur Direct',
      disclaimer: 'Avertissement : Ceci est un assistant IA. Veuillez valider les tarifs et trajets définitifs auprès de notre répartition.',
      poweredBy: 'Propulsé par Touristas Technologies'
    },
    el: {
      launcherTooltip: 'Συνομιλία με Touristas AI',
      headerTitle: 'Touristas AI',
      headerSubtitle: 'Συνδεδεμένος • Εκπρόσωπος Helicro',
      inputPlaceholder: 'Ρωτήστε για τιμές, στόλο, παιδικά καθίσματα...',
      suggestTitle: 'Προτεινόμενες Ερωτήσεις:',
      suggestRates: '✈️ Τιμές για αεροδρόμια;',
      suggestFleet: '🚗 Τι minivans διαθέτετε;',
      suggestSeats: '👶 Είναι δωρεάν τα παιδικά καθίσματα;',
      suggestLang: '🌍 Ποιες γλώσσες μιλάτε;',
      suggestDriver: '👨 Ποιος είναι ο οδηγός;',
      botGreeting: 'Γεια σας! Είμαι ο Touristas AI, ο εικονικός βοηθός της Helicro. Ρωτήστε με ό,τι θέλετε για τις ιδιωτικές μεταφορές, τα Ford minivans, τις σταθερές τιμές, τα παιδικά καθίσματα ή τις εκδρομές μας στο Βέλγιο!',
      whatsappCta: '💬 Μήνυμα στο WhatsApp',
      bookCta: '📅 Online Κράτηση Μεταφοράς',
      phoneCta: '📞 Καλέστε τον Οδηγό Απευθείας',
      disclaimer: 'Αποποίηση ευθύνης: Αυτός είναι ένας AI βοηθός. Παρακαλούμε επιβεβαιώστε τις τελικές τιμές και διαδρομές με το κέντρο κρατήσεων.',
      poweredBy: 'Powered by Touristas Technologies'
    },
    hr: {
      launcherTooltip: 'Razgovarajte s Touristas AI',
      headerTitle: 'Touristas AI',
      headerSubtitle: 'Online • Helicro Smart Agent',
      inputPlaceholder: 'Pitajte o cijenama, vozilima, dječjim sjedalicama...',
      suggestTitle: 'Predložena pitanja:',
      suggestRates: '✈️ Cijene zračnog transfera?',
      suggestFleet: '🚗 Koje kombi vozila imate?',
      suggestSeats: '👶 Jesu li dječje sjedalice besplatne?',
      suggestLang: '🌍 Koje jezike govorite?',
      suggestDriver: '👨 Tko je vozač?',
      botGreeting: 'Pozdrav! Ja sam Touristas AI, virtualni asistent za Helicro. Pitajte me o privatnim transferima, Ford kombi vozilima, fiksnim cijenama, dječjim sjedalicama ili jednodnevnim izletima po Belgiji!',
      whatsappCta: '💬 Poruka na WhatsApp',
      bookCta: '📅 Rezervirajte transfer online',
      phoneCta: '📞 Nazovite vozača izravno',
      disclaimer: 'Odricanje od odgovornosti: Ovo je AI asistent. Molimo potvrdite konačne cijene i rute s našom dispečerskom službom.',
      poweredBy: 'Powered by Touristas Technologies'
    }
  }[lang];

  // Helper links
  const links = {
    whatsapp: 'https://wa.me/32472358805',
    book: 'https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM',
    phone: 'tel:+32472358805'
  };

  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: ui.botGreeting
      }
    ]);

    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    setTimeout(() => {
      const reply = generateAIResponse(text.toLowerCase());
      setMessages((prev) => [...prev, reply]);
    }, 600);
  };

  // Custom rich text / basic markdown parser
  const renderMessageContent = (text: string, isBot: boolean) => {
    const lines = text.split('\n');
    let inList = false;
    const listItems: React.ReactNode[] = [];
    const elements: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      const isBullet = trimmedLine.startsWith('•') || trimmedLine.startsWith('-');
      
      // If it is a bullet point, extract the content
      let content = isBullet ? trimmedLine.substring(1).trim() : line;

      // Parse bold elements **bold text**
      const parts = content.split('**');
      const parsedLine = parts.map((part, i) => {
        if (i % 2 === 1) {
          return (
            <strong 
              key={i} 
              className={styles.boldText}
              style={!isBot ? { color: '#000000', fontWeight: 800 } : undefined}
            >
              {part}
            </strong>
          );
        }
        return part;
      });

      if (isBullet) {
        if (!inList) {
          inList = true;
        }
        listItems.push(
          <li key={`li-${index}`} className={styles.listItem}>
            {parsedLine}
          </li>
        );
      } else {
        if (inList) {
          elements.push(
            <ul key={`ul-${index}`} className={styles.list}>
              {[...listItems]}
            </ul>
          );
          listItems.length = 0;
          inList = false;
        }
        if (trimmedLine) {
          elements.push(
            <p key={`p-${index}`} className={styles.paragraph}>
              {parsedLine}
            </p>
          );
        }
      }
    });

    if (inList) {
      elements.push(
        <ul key="ul-final" className={styles.list}>
          {[...listItems]}
        </ul>
      );
    }

    return elements;
  };

  const generateAIResponse = (query: string): Message => {
    const id = Date.now().toString();
    const defaultCtas: Message['cta'] = [
      { label: ui.bookCta, url: links.book, type: 'book' },
      { label: ui.whatsappCta, url: links.whatsapp, type: 'whatsapp' }
    ];

    if (
      query.includes('rate') || query.includes('price') || query.includes('fare') || query.includes('cost') ||
      query.includes('tarief') || query.includes('tarif') || query.includes('harga') ||
      query.includes('τιμη') || query.includes('τιμες') || query.includes('κοστος') ||
      query.includes('charleroi') || query.includes('zaventem') || query.includes('bru') || query.includes('crl')
    ) {
      const texts = {
        en: "Our private minivan airport transfers from Brussels are strictly flat-rate with no night or luggage surcharges:\n• **Brussels to Zaventem (BRU):** From 35€* (1-2 pax), 45€* (3-4 pax), 55€* (5-8 pax)\n• **Brussels to Charleroi (CRL):** 1 pax: 60€ • 2 pax: 70€ • 3 pax: 90€ • 4 pax: 110€ • 5 pax: 130€ • 6 pax: 150€ • 7 pax: 170€ • 8 pax: 190€\n• **Day Trips (Bruges, Ghent):** From 380€\n\n* Zaventem prices are from the Drop-off Area (extra 5€ for P1 Drop-off).\nInfant & child booster seats are provided completely free of charge upon request.",
        nl: "Onze privé minivan luchthaventransfers vanuit Brussel hebben vaste all-in tarieven:\n• **Brussel naar Zaventem (BRU):** Vanaf 35€* (1-2 pers), 45€* (3-4 pers), 55€* (5-8 pers)\n• **Brussel naar Charleroi (CRL):** 1 pers: 60€ • 2 pers: 70€ • 3 pers: 90€ • 4 pers: 110€ • 5 pers: 130€ • 6 pers: 150€ • 7 pers: 170€ • 8 pers: 190€\n• **Dagtochten (Brugge, Gent):** Vanaf 380€\n\n* Zaventem prijzen gelden vanaf de Drop-off Area (toeslag van 5€ voor P1).\nKinderzitjes en Maxi-Cosi's zijn geheel gratis op aanvraag bij uw boeking.",
        fr: "Nos navettes aéroport privées en minivan au départ de Bruxelles sont à tarifs fixes :\n• **Bruxelles vers Zaventem (BRU) :** À partir de 35€* (1-2 pax), 45€* (3-4 pax), 55€* (5-8 pax)\n• **Bruxelles vers Charleroi (CRL) :** 1 pax : 60€ • 2 pax : 70€ • 3 pax : 90€ • 4 pax : 110€ • 5 pax : 130€ • 6 pax : 150€ • 7 pax : 170€ • 8 pax : 190€\n• **Excursions (Bruges, Gand) :** À partir de 380€\n\n* Les tarifs pour Zaventem s'entendent depuis la dépose-minute (supplément de 5€ pour dépose au P1).\nLes sièges bébés et rehausseurs sont installés gratuitement sur simple demande.",
        el: "Οι ιδιωτικές μεταφορές με minivan από τις Βρυξέλλες προς τα αεροδρόμια είναι με σταθερές τιμές, χωρίς νυχτερινές χρεώσεις:\n• **Βρυξέλλες προς Zaventem (BRU):** Από 35€* (1-2 άτομα), 45€* (3-4 άτομα), 55€* (5-8 άτομα)\n• **Βρυξέλλες προς Charleroi (CRL):** 1 άτομο: 60€ • 2 άτομα: 70€ • 3 άτομα: 90€ • 4 άτομα: 110€ • 5 άτομα: 130€ • 6 άτομα: 150€ • 7 άτομα: 170€ • 8 άτομα: 190€\n• **Ημερήσιες Εκδρομές (Μπρυζ, Γάνδη):** Από 380€\n\n* Οι τιμές για Zaventem αφορούν τη ζώνη αποβίβασης Drop-off (επιπλέον χρέωση 5€ για P1).\nΤα παιδικά καθίσματα παρέχονται εντελώς δωρεάν κατόπιν αιτήματος.",
        hr: "Naši privatni transferi minivanom iz Bruxellesa do zračnih luka imaju fiksne cijene bez noćnih doplataka:\n• **Bruxelles do Zaventem (BRU):** Od 35€* (1-2 osobe), 45€* (3-4 osobe), 55€* (5-8 osoba)\n• **Bruxelles do Charleroi (CRL):** 1 osoba: 60€ • 2 osobe: 70€ • 3 osobe: 90€ • 4 osobe: 110€ • 5 osoba: 130€ • 6 osoba: 150€ • 7 osoba: 170€ • 8 osoba: 190€\n• **Jednodnevni izleti (Bruges, Ghent):** Od 380€\n\n* Cijene za Zaventem vrijede od Drop-off zone (dodatnih 5€ za P1).\nDječje sjedalice i boosteri su potpuno besplatni na zahtjev."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    if (
      query.includes('child') || query.includes('baby') || query.includes('booster') || query.includes('seat') ||
      query.includes('infant') || query.includes('maxi') || query.includes('kinderzitje') ||
      query.includes('siege') || query.includes('rehausseur') || query.includes('παιδικο') || query.includes('καθισμα')
    ) {
      const texts = {
        en: "Yes, we provide premium baby car seats and child safety booster seats **completely free of charge**! Please specify the number and ages of children when making your online booking so Gerasimos can prepare them in the Ford minivan.",
        nl: "Ja! Wij verstrekken babyzitjes en kinderboosterzitjes **geheel gratis**! Geef de leeftijden en het aantal kinderen door bij uw reservering, zodat Gerasimos de Ford minivan hierop kan voorbereiden.",
        fr: "Oui ! Nous fournissons des sièges bébés et rehausseurs adaptés **entièrement gratuitement**. Veuillez préciser le nombre et l'âge des enfants lors de votre réservation afin que Gerasimos puisse les installer dans le van Ford.",
        el: "Ναι, παρέχουμε εγκεκριμένα παιδικά καθίσματα και booster **εντελώς δωρεάν**! Παρακαλούμε δηλώστε την ηλικία και τον αριθμό των παιδιών κατά την κράτηση, ώστε ο Γεράσιμος να τα προετοιμάσει στο Ford minivan.",
        hr: "Da, nudimo premium dječje autosjedalice i booster sjedalice **potpuno besplatno**! Molimo navedite broj i dob djece pri online rezervaciji kako bi Gerasimos mogao pripremiti Ford kombi."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    if (
      query.includes('fleet') || query.includes('car') || query.includes('vehicle') || query.includes('ford') ||
      query.includes('transit') || query.includes('tourneo') || query.includes('pax') || query.includes('passenger') ||
      query.includes('bag') || query.includes('suitcase') || query.includes('wagenpark') || query.includes('flotte') ||
      query.includes('στολος') || query.includes('οχηματα') || query.includes('αυτοκινητα') || query.includes('βαν')
    ) {
      const texts = {
        en: "We operate a high-quality fleet of professional Ford minivans:\n• **Ford Transit Custom:** Fits up to 8 passengers and 8 large suitcases. Ideal for families and festival groups.\n• **Ford Tourneo Custom:** Fits up to 7 passengers and 7 large suitcases. Features premium face-to-face leather seats, perfect for business meetings, diplomatic transport, and premium tours.\n\nBoth vehicles are fully air-conditioned, clean, and equipped with phone chargers.",
        nl: "Wij rijden met jonge en professionele Ford minivans:\n• **Ford Transit Custom:** Tot 8 passagiers en 8 grote koffers. Ideaal voor gezinnen en festivalgroepen.\n• **Ford Tourneo Custom:** Tot 7 passagiers en 7 grote koffers. Uitgerust met luxe lederen stoelen tegenover elkaar, ideaal voor VIP's, diplomaten en zakelijk vervoer.\n\nAl onze voertuigen hebben airco en USB-oplaadpunten.",
        fr: "Nous disposons d'une flotte moderne de minivans Ford :\n• **Ford Transit Custom :** Jusqu'à 8 passagers et 8 grandes valises. Parfait pour les familles et groupes de festivals.\n• **Ford Tourneo Custom :** Jusqu'à 7 passagers et 7 grandes valises. Équipé de sièges en cuir en salon face-à-face, parfait pour les rendez-vous professionnels, délégations et voyages VIP.\n\nTous nos vans sont climatisés, nettoyés et équipés de prises de recharge.",
        el: "Διαθέτουμε έναν εξαιρετικό στόλο από Ford minivans:\n• **Ford Transit Custom:** Έως 8 επιβάτες και 8 μεγάλες αποσκευές. Ιδανικό για οικογένειες και παρέες.\n• **Ford Tourneo Custom:** Έως 7 επιβάτες και 7 μεγάλες αποσκευές. Διαθέτει πολυτελή δερμάτινα καθίσματα συνεδριάσεων (αντιμέτωπα), ιδανικό για VIP, διπλωμάτες και εταιρικές μετακινήσεις.\n\nΚαι τα δύο οχήματα είναι κλιματιζόμενα, καθαρά και διαθέτουν φορτιστές USB.",
        hr: "Upravljamo visokokvalitetnom flotom profesionalnih Ford kombija:\n• **Ford Transit Custom:** Do 8 putnika i 8 velikih kofera. Idealan za obitelji i festivalske grupe.\n• **Ford Tourneo Custom:** Do 7 putnika i 7 velikih kofera. Opremljen premium kožnim sjedalima licem u lice, savršen za poslovne sastanke i VIP prijevoz.\n\nOba vozila su potpuno klimatizirana, čista i opremljena USB punjačima."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    if (
      query.includes('lang') || query.includes('speak') || query.includes('greek') || query.includes('french') ||
      query.includes('english') || query.includes('taal') || query.includes('talen') ||
      query.includes('langue') || query.includes('parle') || query.includes('γλωσσα') || query.includes('ελληνικα') || query.includes('γλωσσες')
    ) {
      const texts = {
        en: "Gerasimos (Jerry) and his driving team provide full multilingual chauffeur support. We speak fluent **English, Greek, and French**, making your communication during booking and travel completely stress-free.",
        nl: "Gerasimos (Jerry) en zijn team bieden volledige meertalige ondersteuning. Wij spreken vloeiend **Engels, Frans en Grieks**, waardoor de communicatie tijdens uw reis vlekkeloos verloopt.",
        fr: "Gerasimos (Jerry) et son équipe de chauffeurs parlent couramment **Français, Anglais et Grec** afin de faciliter tous vos échanges et de rendre votre voyage agréable.",
        el: "Ο Γεράσιμος (Jerry) και οι συνεργάτες του παρέχουν πλήρη υποστήριξη σε πολλές γλώσσες. Μιλάμε άπταιστα **Ελληνικά, Αγγλικά και Γαλλικά**, εξασφαλίζοντας άνετη επικοινωνία.",
        hr: "Gerasimos (Jerry) i njegov vozački tim pružaju potpunu višejezičnu podršku. Govorimo tečno **engleski, grčki i francuski**, čineći vašu komunikaciju tijekom rezervacije i putovanja potpuno bezbrižnom."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    if (
      query.includes('driver') || query.includes('gerasimos') || query.includes('jerry') || query.includes('who') ||
      query.includes('experience') || query.includes('military') || query.includes('background') ||
      query.includes('chauffeur') || query.includes('οδηγος') || query.includes('γερασιμος') || query.includes('ποιος')
    ) {
      const texts = {
        en: "Your driver is **Gerasimos (Jerry)**, a licensed private transfer operator based in Braine-l'Alleud. Gerasimos has a disciplined military background, specializing in logistics and driving safety. With **over 30 years of accident-free driving** on Belgian and European roads, you are in exceptionally safe hands.",
        nl: "Uw chauffeur is **Gerasimos (Jerry)**, een erkende privévervoerder gevestigd in Braine-l'Alleud. Gerasimos heeft een gedisciplineerde militaire achtergrond en is gespecialiseerd in defensief rijden. Met **meer dan 30 jaar ongevalvrije wegerijervaring** in België reist u in alle veiligheid.",
        fr: "Votre chauffeur est **Gerasimos (Jerry)**, exploitant de transport privé agréé basé à Braine-l'Alleud. Gerasimos a une solide formation militaire, spécialisé dans la logistique de sécurité et la conduite préventive. Fort de **plus de 30 ans de conduite sans accident**, il vous garantit un trajet serein.",
        el: "Ο οδηγός σας είναι ο **Γεράσιμος (Jerry)**, αδειοδοτημένος οδηγός ιδιωτικών μεταφορών με έδρα το Braine-l'Alleud. Ο Γεράσιμος έχει στρατιωτικό υπόβαθρο, με ειδίκευση στην ασφαλή επιμελητεία και την αμυντική οδήγηση. Με **πάνω από 30 χρόνια εμπειρίας χωρίς ατυχήματα** στους ευρωπαϊκούς δρόμους, είστε σε απόλυτα ασφαλή χέρια.",
        hr: "Vaš vozač je **Gerasimos (Jerry)**, licencirani operater privatnog prijevoza sa sjedištem u Braine-l'Alleudu. Gerasimos ima discipliniranu vojnu pozadinu, specijaliziran za logistiku i sigurnost vožnje. S **više od 30 godina vožnje bez nesreća** na belgijskim i europskim cestama, u iznimno ste sigurnim rukama."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    if (
      query.includes('sight') || query.includes('tour') || query.includes('trip') || query.includes('bruges') ||
      query.includes('ghent') || query.includes('durbuy') || query.includes('daytrip') ||
      query.includes('excursion') || query.includes('εκδρομη') || query.includes('εκδρομες') || query.includes('μπρυζ') || query.includes('γανδη')
    ) {
      const texts = {
        en: "We arrange premium private day trips from Brussels starting from 380€, with a dedicated minivan and driver at your disposal for the whole day:\n• **Bruges Tour:** Medieval belfry, Lake of Love, canals.\n• **Ghent Tour:** Gravensteen castle, St. Bavo Cathedral.\n• **Durbuy Tour:** The smallest city in the world nestled in Ardennes.\n\nYou can set your own pace and route stops as you travel.",
        nl: "Wij organiseren luxe privédagtochten vanuit Brussel vanaf 380€, waarbij de minivan en chauffeur de hele dag tot uw beschikking staan:\n• **Brugge Tour:** Middeleeuws belfort, Minnewater, grachten.\n• **Gent Tour:** Gravensteen kasteel, Sint-Baafskathedraal.\n• **Durbuy Tour:** Het kleinste stadje ter wereld in de Ardennen.\n\nU kunt uw eigen tempo bepalen en tussenstops in overleg plannen.",
        fr: "Nous organisons des excursions privées d'une journée au départ de Bruxelles à partir de 380€, avec véhicule et chauffeur à votre entière disposition :\n• **Circuit Bruges :** Beffroi médiéval, lac d'Amour, canaux.\n• **Circuit Gand :** Château des Comtes, Cathédrale Saint-Bavon.\n• **Circuit Durbuy :** La plus petite ville du monde dans les Ardennes.\n\nVous êtes libre de définir vos escales et votre rythme de visite.",
        el: "Διοργανώνουμε ιδιωτικές ημερήσιες εκδρομές από τις Βρυξέλλες από 380€, με το minivan και τον οδηγό στη διάθεσή σας για όλη τη μέρα:\n• **Εκδρομή στη Μπρυζ:** Μεσαιωνικό καμπαναριό, Λίμνη της Αγάπης, κανάλια.\n• **Εκδρομή στη Γάνδη:** Κάστρο Gravensteen, Καθεδρικός Ναός Αγίου Βονιφατίου.\n• **Εκδρομή στο Ντυρμπουί:** Η μικρότερη πόλη του κόσμου στις Αρδέννες.\n\nΜπορείτε να ορίσετε τον δικό σας ρυθμό και τις στάσεις σας.",
        hr: "Organiziramo premium privatne jednodnevne izlete iz Bruxellesa od 380€, s posvećenim minivanom i vozačem na raspolaganju cijeli dan:\n• **Izlet u Bruges:** Srednjovjekovni zvonik, Jezero ljubavi, kanali.\n• **Izlet u Ghent:** Dvorac Gravensteen, Katedrala svetog Bava.\n• **Izlet u Durbuy:** Najmanji grad na svijetu u Ardenima.\n\nMožete odrediti vlastiti tempo i zaustavljanja na ruti."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    if (
      query.includes('cancel') || query.includes('refund') || query.includes('change') || query.includes('policy') ||
      query.includes('pay') || query.includes('card') || query.includes('cash') || query.includes('invoice') ||
      query.includes('ακυρωση') || query.includes('πληρωμη') || query.includes('καρτα') || query.includes('μετρητα')
    ) {
      const texts = {
        en: "• **Cancellation Policy:** 100% free cancellation or booking changes up to 24 hours prior to the transfer.\n• **Payment Methods:** We accept secure online credit/debit card payments, bank transfers, corporate invoices, or cash directly to the driver at the end of the trip.",
        nl: "• **Annuleringsvoorwaarden:** 100% gratis annuleren of wijzigen tot 24 uur voor aanvang.\n• **Betaalwijzen:** Wij accepteren beveiligde online kaartbetalingen, bankoverschrijvingen, facturen of contant geld rechtstreeks aan de chauffeur bij aankomst.",
        fr: "• **Conditions d'annulation :** Modifications et annulations 100% gratuites jusqu'à 24 heures avant la prise en charge.\n• **Moyens de paiement :** Paiement en ligne sécurisé par carte, virement bancaire, facturation d'entreprise ou espèces directement au chauffeur.",
        el: "• **Πολιτική Ακύρωσης:** 100% δωρεάν ακύρωση ή αλλαγές έως και 24 ώρες πριν την παραλαβή.\n• **Τρόποι Πληρωμής:** Δεχόμαστε online πληρωμές με κάρτα, τραπεζικά εμβάσματα, εταιρικά τιμολόγια ή μετρητά απευθείας στον οδηγό στο τέλος της διαδρομής.",
        hr: "• **Politika otkazivanja:** 100% besplatno otkazivanje ili promjene do 24 sata prije transfera.\n• **Načini plaćanja:** Prihvaćamo sigurna online plaćanja karticom, bankovne transfere, korporativne račune ili gotovinu izravno vozaču na kraju vožnje."
      }[lang];

      return { id, sender: 'bot', text: texts, cta: defaultCtas };
    }

    const fallbackTexts = {
      en: "I'm not sure about that detail, but Gerasimos or our dispatch team can answer you directly! Please message us on WhatsApp or call us right now.",
      nl: "Ik ben niet helemaal zeker over dit specifieke detail, maar Gerasimos of onze planning kan u direct antwoorden! Stuur ons een WhatsApp of bel ons nu.",
      fr: "Je ne suis pas certain de ce détail, mais Gerasimos ou notre équipe de répartition peuvent vous répondre directement ! Écrivez-nous sur WhatsApp ou appelez-nous.",
      el: "Δεν είμαι απόλυτα σίγουρος για αυτή τη λεπτομέρεια, αλλά ο Γεράσιμος ή η ομάδα μας μπορεί να σας απαντήσει αμέσως! Στείλτε μας μήνυμα στο WhatsApp ή καλέστε μας τώρα.",
      hr: "Nisam potpuno siguran za taj detalj, ali Gerasimos ili naš dispečerski tim mogu vam izravno odgovoriti! Pošaljite nam poruku na WhatsApp ili nas nazovite odmah."
    }[lang];

    const fallbackCtas: Message['cta'] = [
      { label: ui.whatsappCta, url: links.whatsapp, type: 'whatsapp' },
      { label: ui.phoneCta, url: links.phone, type: 'phone' }
    ];

    return { id, sender: 'bot', text: fallbackTexts, cta: fallbackCtas };
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button 
        className={`${styles.launcher} ${isOpen ? styles.launcherOpen : ''}`} 
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        aria-label="Toggle AI assistant"
      >
        {isOpen ? (
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <div className={styles.aiBadgeGlow}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className={styles.pulseDot}></span>
          </div>
        )}
      </button>

      {/* Floating Tooltip Alert */}
      {showTooltip && !isOpen && (
        <div className={styles.tooltip} onClick={() => {
          setIsOpen(true);
          setShowTooltip(false);
        }}>
          <span className={styles.tooltipClose} onClick={(e) => {
            e.stopPropagation();
            setShowTooltip(false);
          }}>&times;</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className={styles.tooltipDot}></span>
            <span>{ui.launcherTooltip}</span>
          </div>
        </div>
      )}

      {/* Assistant Chat Panel */}
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        {/* Header */}
        <div className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className={styles.avatarContainer}>
              <div className={styles.aiAvatar}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.aiAvatarSvg}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <span className={styles.onlineBadge}></span>
            </div>
            <div>
              <h3 className={styles.headerTitle}>{ui.headerTitle}</h3>
              <p className={styles.headerSubtitle}>{ui.headerSubtitle}</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Message Feed */}
        <div className={styles.feed}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.bubbleWrapper} ${msg.sender === 'user' ? styles.bubbleUserWrapper : styles.bubbleBotWrapper}`}>
              <div className={`${styles.bubble} ${msg.sender === 'user' ? styles.bubbleUser : styles.bubbleBot}`}>
                {renderMessageContent(msg.text, msg.sender === 'bot')}
                
                {/* Embedded CTAs */}
                {msg.cta && msg.cta.length > 0 && (
                  <div className={styles.ctaContainer}>
                    {msg.cta.map((c, i) => (
                      <a 
                        key={i} 
                        href={c.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles.ctaBtn} ${styles[`ctaBtn_${c.type}`]}`}
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className={styles.suggestionsBlock}>
          <p className={styles.suggestLabel}>{ui.suggestTitle}</p>
          <div className={styles.suggestionsList}>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestRates)}>{ui.suggestRates}</button>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestFleet)}>{ui.suggestFleet}</button>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestSeats)}>{ui.suggestSeats}</button>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestLang)}>{ui.suggestLang}</button>
            <button className={styles.chip} onClick={() => handleSend(ui.suggestDriver)}>{ui.suggestDriver}</button>
          </div>
        </div>

        {/* Input Form & Footer branding */}
        <div className={styles.inputContainer}>
          <form 
            className={styles.inputArea} 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputValue);
            }}
          >
            <input 
              type="text" 
              className={styles.input} 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={ui.inputPlaceholder}
              aria-label="Message to AI assistant"
            />
            <button type="submit" className={styles.sendBtn} aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
          
          {/* Disclaimer & Powered By Footer */}
          <div className={styles.disclaimerBlock}>
            <p className={styles.disclaimerText}>{ui.disclaimer}</p>
            <p className={styles.poweredByText}>
              {ui.poweredBy} <span className={styles.brandAccent}>Touristas Technologies</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
