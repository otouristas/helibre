'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import ServiceTemplate from '@/components/ServiceTemplate';
import ServiceRequest from '@/components/ServiceRequest';

export default function ParcelService() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname);

  // Localization Dictionary for Parcel Service
  const ui = {
    en: {
      metaTitle: 'Parcel Delivery Belgium | Secure Van Courier Service',
      metaDesc: 'Same-day parcel collection and direct delivery in Belgium. Ideal for fragile, high-value or unboxed cargo. Available 24/7.',
      title: 'Parcels Within Belgium Service',
      p1: 'In case you need parcel delivery service within Belgium, our dedicated van delivery service is the ideal solution.',
      advantages: 'Key Advantages:',
      adv1: 'Customized pick-up and delivery times tailored to your schedule.',
      adv2: 'Collections and deliveries on weekends, day and night.',
      adv3: 'Same-day collection available for urgent, time-sensitive cargo.',
      adv4: 'Perfect for transporting fragile, high-value, or unboxed items.',
      footerNote: 'No special packaging or boxing is required. We handle each parcel with absolute care.'
    },
    nl: {
      metaTitle: 'Pakketbezorging België | Snel & Veilig Minivan Koerier',
      metaDesc: 'Zelfde dag bezorging en spoedtransport van pakketten in België. Ideaal voor breekbare, kostbare of onverpakte goederen.',
      title: 'Pakketservice binnen België',
      p1: 'Als u behoefte heeft aan snelle en directe pakketbezorging binnen België, is onze toegewijde minivanservice de ideale oplossing.',
      advantages: 'Belangrijkste Voordelen:',
      adv1: 'Gepersonaliseerde ophaal- en aflevertijden afgestemd op uw schema.',
      adv2: 'Ophalen en bezorgen in het weekend, overdag én &apos;s nachts.',
      adv3: 'Zelfde dag levering mogelijk voor dringende, tijdgevoelige zendingen.',
      adv4: 'Uiterst geschikt voor breekbare, waardevolle of onverpakte items.',
      footerNote: 'Er is geen speciale verpakking of kartonnen doos vereist. Wij behandelen elk pakket met uiterste zorg.'
    },
    fr: {
      metaTitle: 'Livraison de Colis Belgique | Transport Urgent Minivan',
      metaDesc: 'Service de coursier et transport de colis express en Belgique. Idéal pour objets fragiles, de valeur ou non emballés.',
      title: 'Transport de Colis Express en Belgique',
      p1: 'Si vous avez besoin d\'un service de livraison de colis en Belgique, notre service de transport dédié par monospace est la solution idéale.',
      advantages: 'Principaux Avantages :',
      adv1: 'Horaires d\'enlèvement et de livraison sur mesure, adaptés à votre planning.',
      adv2: 'Collecte et distribution le week-end, de jour comme de nuit.',
      adv3: 'Livraison le jour même pour les cargaisons urgentes.',
      adv4: 'Idéal pour le transport d\'objets fragiles, de valeur ou sans emballage karton.',
      footerNote: 'Aucun emballage ou conditionnement spécifique n\'est requis. Nous manipulons chaque envoi avec le plus grand soin.'
    },
    el: {
      metaTitle: 'Μεταφορά Δεμάτων Βέλγιο | Ασφαλείς Ταχυμεταφορές',
      metaDesc: 'Αυθημερόν παραλαβή και παράδοση δεμάτων στο Βέλγιο. Ιδανικό για εύθραυστα, πολύτιμα ή μη συσκευασμένα αντικείμενα.',
      title: 'Υπηρεσία Μεταφοράς Δεμάτων στο Βέλγιο',
      p1: 'Σε περίπτωση που χρειάζεστε υπηρεσία παράδοσης δεμάτων εντός Βελγίου, η ειδική υπηρεσία παράδοσης με minivan είναι η ιδανική λύση.',
      advantages: 'Βασικά Πλεονεκτήματα:',
      adv1: 'Προσαρμοσμένες ώρες παραλαβής και παράδοσης σύμφωνα με το πρόγραμμά σας.',
      adv2: 'Παραλαβές και παραδόσεις τα Σαββατοκύριακα, μέρα και νύχτα.',
      adv3: 'Δυνατότητα αυθημερόν παραλαβής για επείγοντα φορτία.',
      adv4: 'Ιδανικό για τη μεταφορά εύθραυστων, πολύτιμων ή μη συσκευασμένων αντικειμένων.',
      footerNote: 'Δεν απαιτείται ειδική συσκευασία ή κιβώτιο. Χειριζόμαστε κάθε δέμα με απόλυτη προσοχή.'
    }
  }[lang];

  return (
    <div className="section">
      <title>{ui.metaTitle}</title>
      <meta name="description" content={ui.metaDesc} />

      <ServiceTemplate 
        img="/images/photo-deliver-service.png" 
        title={ui.title}
      >
        <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p className="mb-4">
            {ui.p1}
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-4" style={{ color: 'var(--primary-dark)' }}>
            {ui.advantages}
          </h3>
          
          <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>{ui.adv1}</li>
            <li>{ui.adv2}</li>
            <li>{ui.adv3}</li>
            <li>{ui.adv4}</li>
          </ul>
          
          <p className="font-semibold" style={{ color: 'var(--primary)' }}>
            {ui.footerNote}
          </p>
        </div>

        <ServiceRequest />
      </ServiceTemplate>
    </div>
  );
}
