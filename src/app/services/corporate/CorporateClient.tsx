'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import ServiceTemplate from '@/components/ServiceTemplate';
import ServiceRequest from '@/components/ServiceRequest';

export default function CorporateClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' }) {
  const pathname = usePathname();
  

  // Localization Dictionary for Corporate Service
  const ui = {
    en: {
      metaTitle: 'Corporate Shuttle Brussels | Executive Minivan Chauffeurs',
      metaDesc: 'Professional, fixed-price business transfer solutions in Brussels. Group airport arrivals, embassy logistics and private chauffeur hires.',
      title: 'Corporate Shuttle Services',
      p1: 'Professional service for professional people. Allow us to coordinate your large group airport arrivals at a reasonable cost.',
      p2: 'We will handle important details like vehicle size, creating passenger pick up groups, and providing dedicated greeters to escort your guests.',
      p3: 'Our expert dispatch team tracks flights in real-time to ensure that we pull up right on schedule, no matter if your arrival is early or delayed.'
    },
    nl: {
      metaTitle: 'Zakelijk Vervoer Brussel | Executive Chauffeurs & Minivans',
      metaDesc: 'Professionele groepslogistiek en zakelijke shuttles in Brussel. Terminal meet & greet, ambassadetransport en vaste tarieven.',
      title: 'Zakelijk Vervoer & Shuttles',
      p1: 'Professionele service voor professionals. Laat ons uw zakelijke groepsvervoer vanaf de luchthaven coördineren tegen vaste, scherpe tarieven.',
      p2: 'Wij regelen alle details zoals de benodigde wagencapaciteit, groepsindeling en eventueel terminalbegeleiding voor uw gasten.',
      p3: 'Onze dispatching controleert vluchttijden live om ervoor te zorgen dat uw chauffeur stipt op tijd klaarstaat, bij vroege aankomst of vertraging.'
    },
    fr: {
      metaTitle: 'Navette d\'Entreprise Bruxelles | Chauffeur Affaires Minivan',
      metaDesc: 'Services de transport professionnel et logistique événementielle à Bruxelles. Accueil VIP en gare/aéroport, facturation mensuelle.',
      title: 'Services de Navettes d\'Entreprise',
      p1: 'Un service professionnel pour les professionnels. Permettez-nous de coordonner les arrivées de vos groupes à l\'aéroport au meilleur coût.',
      p2: 'Nous gérons tous les détails logistiques : taille des véhicules Mercedes, répartition des passagers et accueil personnalisé pour guider vos invités.',
      p3: 'Notre équipe logistique suit l\'état des vols en direct pour garantir que nos minivans soient sur place à la minute près.'
    },
    el: {
      metaTitle: 'Εταιρικές Μετακινήσεις Βρυξέλλες | Υπηρεσίες VIP Σοφέρ',
      metaDesc: 'Επαγγελματικές λύσεις μετακίνησης στελεχών στις Βρυξέλλες. Υποδοχή συνεργατών, διπλωματικές αποστολές, σταθερές τιμές.',
      title: 'Εταιρικές Υπηρεσίες Shuttle',
      p1: 'Επαγγελματική εξυπηρέτηση για επαγγελματίες. Επιτρέψτε μας να συντονίσουμε τις αφίξεις των συνεργατών σας στο αεροδρόμιο με λογικό κόστος.',
      p2: 'Αναλαμβάνουμε όλες τις λεπτομέρειες, όπως το μέγεθος των οχημάτων, τη δημιουργία ομάδων παραλαβής και την παροχή συνοδών υποδοχής.',
      p3: 'Η έμπειρη ομάδα μας παρακολουθεί τις πτήσεις σε πραγματικό χρόνο για να εξασφαλίσει ότι ο οδηγός θα είναι εκεί ακριβώς στην ώρα του.'
    }
  }[lang];

  return (
    <div className="section">
      
      

      <ServiceTemplate 
        img="/images/coorporation-services.jpg" 
        title={ui.title}
      >
        <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p className="mb-4">
            {ui.p1}
          </p>
          <p className="mb-4">
            {ui.p2}
          </p>
          <p className="mb-6">
            {ui.p3}
          </p>
        </div>

        <ServiceRequest />
      </ServiceTemplate>
    </div>
  );
}
