'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import ServiceTemplate from '@/components/ServiceTemplate';
import ServiceRequest from '@/components/ServiceRequest';

export default function EventsClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' }) {
  const pathname = usePathname();
  

  // Localization Dictionary for Events Service
  const ui = {
    en: {
      metaTitle: 'Events Transportation Belgium | Wedding & Party Shuttles',
      metaDesc: 'Seamless group transfer logistics for weddings, private parties, corporate dinners and events in Belgium. Premium Mercedes minivans.',
      title: 'Personal Events Transportation Services',
      p1: 'An event to organize? A big meeting, special guests, or an end-of-year party? Do you need to move a large number of guests safely?',
      p2: 'Do your guests have to travel to different venues or locations within a strict time frame?',
      p3: 'We know that the success of these events depends on the details. We are experts in organizing seamless transport logistics for events.',
      p4: 'Our event services cover everything from point-to-point shuttle service, driving guests home late at night, or coordinating a simple group excursion somewhere in Belgium.'
    },
    nl: {
      metaTitle: 'Evenementen Vervoer België | Bruiloft & Feest Shuttles',
      metaDesc: 'Groepsvervoer en logistiek voor bruiloften, bedrijfsfeesten en evenementen in België. Luxe Mercedes personenbussen met chauffeur.',
      title: 'Evenementen- & Groepsvervoer',
      p1: 'Heeft u een evenement te organiseren? Een grote vergadering, speciale gasten of een personeelsfeest? Moet u een groter aantal gasten veilig vervoeren?',
      p2: 'Moeten uw gasten binnen een strak tijdschema naar verschillende locaties of hotels worden gebracht?',
      p3: 'Wij begrijpen dat het succes van uw evenement afhangt van de details. Wij zijn experts in het vlekkeloos regelen van transportlogistiek.',
      p4: 'Onze diensten omvatten alles: van directe shuttleverbindingen tot het veilig thuisbrengen van gasten na afloop of een groepsrondrit door België.'
    },
    fr: {
      metaTitle: 'Transport Événementiel Belgique | Navettes Mariage & Soirées',
      metaDesc: 'Logistique de transport sur mesure pour mariages, soirées privées, séminaires ou galas en Belgique. Chauffeur privé et vans Mercedes.',
      title: 'Transport pour Événements Privés & Professionnels',
      p1: 'Un événement à organiser ? Un séminaire d\'entreprise, des invités VIP ou une fête de fin d\'année ? Devez-vous déplacer un grand nombre de personnes en toute sécurité ?',
      p2: 'Vos invités doivent-ils se rendre dans différents lieux de réception selon un timing précis ?',
      p3: 'Nous savons que le succès d\'un événement tient aux détails. Nous sommes experts dans la planification de logistique de transport fluide.',
      p4: 'Nos services couvrent tout type de besoin : navettes de point à point, raccompagnement des invités tard dans la nuit ou excursions touristiques.'
    },
    el: {
      metaTitle: 'Μεταφορές Εκδηλώσεων Βέλγιο | Shuttles για Γάμους & Πάρτι',
      metaDesc: 'Οργάνωση μεταφορών για γάμους, ιδιωτικά πάρτι, εταιρικά δείπνα και εκδηλώσεις στο Βέλγιο. Πολυτελή Mercedes minivans.',
      title: 'Μεταφορές Προσωπικών Εκδηλώσεων',
      p1: 'Εχετε να οργανώσετε κάποια εκδήλωση; Μια μεγάλη συνάντηση, VIP καλεσμένους ή ένα πάρτι; Πρέπει να μετακινήσετε πολλούς καλεσμένους με ασφάλεια;',
      p2: 'Πρέπει οι καλεσμένοι σας να μετακινηθούν σε διαφορετικούς χώρους ή τοποθεσίες εντός αυστηρού χρονικού πλαισίου;',
      p3: 'Γνωρίζουμε ότι η επιτυχία αυτών των εκδηλώσεων εξαρτάται από τις λεπτομέρειες. Είμαστε ειδικοί στην οργάνωση logistics μεταφοράς.',
      p4: 'Οι υπηρεσίες μας καλύπτουν τα πάντα: από μεταφορές shuttle, ασφαλή επιστροφή των καλεσμένων στο σπίτι αργά τη νύχτα, έως ομαδικές εκδρομές στο Βέλγιο.'
    }
  }[lang];

  return (
    <div className="section">
      
      

      <ServiceTemplate 
        img="/images/event-service.jpg" 
        title={ui.title}
      >
        <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p className="mb-4">
            {ui.p1}
          </p>
          <p className="mb-4">
            {ui.p2}
          </p>
          <p className="mb-4">
            {ui.p3}
          </p>
          <p className="mb-6">
            {ui.p4}
          </p>
        </div>

        <ServiceRequest />
      </ServiceTemplate>
    </div>
  );
}
