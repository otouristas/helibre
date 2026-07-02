'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';

interface Vehicle {
  name: string;
  img: string;
  capacity: string;
  luggage: string;
  amenities: string[];
  useCase: string;
}

export default function FleetPage() {
  const pathname = usePathname();
  const lang = getLangFromPath(pathname);

  // Localization Dictionary for Fleet
  const ui = {
    en: {
      metaTitle: 'Helicro Fleet | Premium Mercedes Minivans and Chauffeur Rides',
      metaDesc: 'Comfortable air-conditioned Mercedes minivans up to 8 passengers, with large luggage space. Vetted drivers, child seats on request.',
      title: 'Our Fleet',
      subtitle: 'Experience premium travel in Belgium with our executive Mercedes-Benz minivans, clean, comfortable and ready for any destination.',
      capacity: 'Capacity:',
      luggage: 'Luggage:',
      bestFor: 'Best For:',
      seatsTitle: 'Child & Safety Seats',
      seatsDesc: 'Your family\'s safety is our topmost priority. We provide secure infant seats, toddler car seats, and booster cushions completely free of charge. Please mention the quantities and ages of your children during the online request so we can prepare the vehicle.',
      sanTitle: 'Sanitization & Quality Standards',
      sanDesc: 'Every Mercedes vehicle undergoes a rigorous cleaning and interior sanitization process before and after each transfer. Our drivers are non-smokers, vetted professionals, and follow strict Belgian transport regulations.',
      
      // Vito specs
      vitoCap: 'Up to 8 Passengers',
      vitoLug: '8 Large Bags + Hand Luggage',
      vitoUse: 'Perfect for airport transfers, budget group festival shuttles, parcel carriage, and sports equipment transfers.',
      vitoAm: ['Dual-zone Air Conditioning', 'Privacy Glass', 'USB Charging Ports', 'Adjustable Seats'],

      // VClass specs
      vClassCap: 'Up to 7 Passengers',
      vClassLug: '7 Large Bags + Hand Luggage',
      vClassUse: 'The ideal premium option for corporate shuttles, diplomatic embassy rides, wedding parties, and luxury sightseeing tours.',
      vClassAm: ['Leather Conference Seating', 'Individual Climate Controls', 'Premium Sound System', 'Panoramic Roof']
    },
    nl: {
      metaTitle: 'Wagenpark van Helicro | Luxe Mercedes Minivans & Chauffeurs',
      metaDesc: 'Comfortabele Mercedes minivans met airco voor maximaal 8 personen. Ruime kofferbak, ervaren chauffeurs en gratis kinderzitjes.',
      title: 'Ons Wagenpark',
      subtitle: 'Ervaar luxe reizen in België met onze executive Mercedes-Benz minivans. Altijd schoon, ruim en comfortabel.',
      capacity: 'Capaciteit:',
      luggage: 'Bagage:',
      bestFor: 'Ideaal Voor:',
      seatsTitle: 'Kinderzitjes & Veiligheid',
      seatsDesc: 'De veiligheid van uw gezin is onze hoogste prioriteit. Wij leveren gratis babystoeltjes en verhogers. Geef de leeftijd en het aantal kinderen op bij uw boeking zodat wij het voertuig kunnen inrichten.',
      sanTitle: 'Hygiëne & Kwaliteitseisen',
      sanDesc: 'Elk voertuig ondergaat een grondige reiniging en desinfectie voor en na elke rit. Onze chauffeurs zijn niet-rokers, gecertificeerd en rijden strikt volgens de Belgische wetgeving.',
      
      vitoCap: 'Tot 8 Passagiers',
      vitoLug: '8 Grote Koffers + Handbagage',
      vitoUse: 'Uitstekend geschikt voor luchthavenvervoer, festival shuttles voor vriendengroepen, pakketdienst en sportuitrusting.',
      vitoAm: ['Dual-zone Airconditioning', 'Privacy Glass', 'USB Oplaadpunten', 'Verstelbare Stoelen'],

      vClassCap: 'Tot 7 Passagiers',
      vClassLug: '7 Grote Koffers + Handbagage',
      vClassUse: 'De ideale premium optie voor zakelijke shuttles, diplomatiek vervoer, trouwpartijen en luxe rondritten.',
      vClassAm: ['Lederen Conferentiestoelen', 'Individuele Klimaatregeling', 'Premium Geluidssysteem', 'Panoramadak']
    },
    fr: {
      metaTitle: 'Flotte Helicro | Monospaces Mercedes Premium avec Chauffeur',
      metaDesc: 'Monospaces Mercedes climatisés confortables jusqu\'à 8 passagers, grand coffre. Chauffeurs agréés, sièges enfants sur demande.',
      title: 'Notre Flotte',
      subtitle: 'Voyagez de façon premium en Belgique à bord de nos minivans Mercedes-Benz haut de gamme, propres et spacieux.',
      capacity: 'Capacité :',
      luggage: 'Bagages :',
      bestFor: 'Idéal Pour :',
      seatsTitle: 'Sièges Enfants & Sécurité',
      seatsDesc: 'La sécurité de votre famille est notre priorité absolue. Nous fournissons des sièges auto et rehausseurs adaptés gratuitement. Veuillez préciser l\'âge des enfants lors de votre demande.',
      sanTitle: 'Désinfection & Charte Qualité',
      sanDesc: 'Chaque monospace Mercedes fait l\'objet d\'un nettoyage et d\'une désinfection rigoureuse de l\'habitacle avant et après chaque trajet. Chauffeurs non-fumeurs et discrets.',
      
      vitoCap: 'Jusqu\'à 8 Passagers',
      vitoLug: '8 Grandes Valises + Bagages à Main',
      vitoUse: 'Parfait pour les navettes aéroport, les transferts de festival en groupe, le transport de colis et de matériel de sport.',
      vitoAm: ['Climatisation Bi-zone', 'Vitrages Teintés', 'Prises de Recharge USB', 'Sièges Ajustables'],

      vClassCap: 'Jusqu\'à 7 Passagers',
      vClassLug: '7 Grandes Valises + Bagages à Main',
      vClassUse: 'L\'option premium idéale pour les navettes d\'affaires, les délégations diplomatiques, mariages et excursions touristiques de standing.',
      vClassAm: ['Salon en Cuir Face-à-Face', 'Climatisation Individuelle', 'Système Audio Premium', 'Toit Panoramique']
    },
    el: {
      metaTitle: 'Ο Στόλος της Helicro | Mercedes Minivans & Υπηρεσίες Σοφέρ',
      metaDesc: 'Ανετα κλιματιζόμενα Mercedes minivans έως 8 επιβατών, με μεγάλους χώρους αποσκευών. Εμπειροι οδηγοί, παιδικά καθίσματα δωρεάν.',
      title: 'Ο Στόλος μας',
      subtitle: 'Απολαύστε premium μετακινήσεις στο Βέλγιο με τα πολυτελή minivans Mercedes-Benz, καθαρά και έτοιμα για κάθε προορισμό.',
      capacity: 'Χωρητικότητα:',
      luggage: 'Αποσκευές:',
      bestFor: 'Ιδανικό για:',
      seatsTitle: 'Παιδικά Καθίσματα Ασφαλείας',
      seatsDesc: 'Η ασφάλεια της οικογένειάς σας είναι η προτεραιότητά μας. Παρέχουμε βρεφικά και παιδικά καθίσματα εντελώς δωρεάν. Παρακαλούμε αναφέρετε την ηλικία των παιδιών κατά την κράτηση.',
      sanTitle: 'Υγιεινή & Πρότυπα Ποιότητας',
      sanDesc: 'Κάθε όχημα Mercedes απολυμαίνεται σχολαστικά πριν και μετά από κάθε μεταφορά. Οι οδηγοί μας είναι μη καπνιστές, πιστοποιημένοι επαγγελματίες.',
      
      vitoCap: 'Εως 8 Επιβάτες',
      vitoLug: '8 Μεγάλες Αποσκευές + Χειραποσκευές',
      vitoUse: 'Ιδανικό για μεταφορές αεροδρομίου, ομαδικές μεταφορές σε φεστιβάλ, μεταφορές δεμάτων και αθλητικού εξοπλισμού.',
      vitoAm: ['Κλιματισμός Dual-zone', 'Φιμέ Τζάμια', 'Θύρες Φόρτισης USB', 'Ρυθμιζόμενα Καθίσματα'],
 
      vClassCap: 'Εως 7 Επιβάτες',
      vClassLug: '7 Μεγάλες Αποσκευές + Χειραποσκευές',
      vClassUse: 'Η ιδανική premium επιλογή για εταιρικές μετακινήσεις, διπλωματικές αποστολές, γάμους και πολυτελείς περιηγήσεις.',
      vClassAm: ['Δερμάτινα Καθίσματα Συνεδριάσεων', 'Ατομικός Κλιματισμός', 'Premium Ηχοσύστημα', 'Πανοραμική Οροφή']
    }
  }[lang];

  const vehicles: Vehicle[] = [
    {
      name: 'Mercedes-Benz Vito Tourer',
      img: '/images/car-1.jpg',
      capacity: ui.vitoCap,
      luggage: ui.vitoLug,
      amenities: ui.vitoAm,
      useCase: ui.vitoUse
    },
    {
      name: 'Mercedes-Benz V-Class',
      img: '/images/car-3.jpg',
      capacity: ui.vClassCap,
      luggage: ui.vClassLug,
      amenities: ui.vClassAm,
      useCase: ui.vClassUse
    }
  ];

  return (
    <div className="section">
      <title>{ui.metaTitle}</title>
      <meta name="description" content={ui.metaDesc} />

      <div className="container">
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          {ui.title}
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
          {ui.subtitle}
        </p>

        {/* Vehicles List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginBottom: '60px' }}>
          {vehicles.map((v, idx) => (
            <div 
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1.2fr 0.8fr' : '0.8fr 1.2fr',
                gap: '40px',
                alignItems: 'center',
                background: '#ffffff',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '30px',
                boxShadow: 'var(--shadow)'
              }}
              className="fleet-grid"
            >
              {idx % 2 === 0 ? (
                <>
                  <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                    <img src={v.img} alt={v.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '16px' }}>
                      {v.name}
                    </h2>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      <li><strong>{ui.capacity}</strong> {v.capacity}</li>
                      <li><strong>{ui.luggage}</strong> {v.luggage}</li>
                      <li><strong>{ui.bestFor}</strong> {v.useCase}</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {v.amenities.map((am, i) => (
                        <span 
                          key={i} 
                          style={{ 
                            fontSize: '11px', 
                            fontWeight: 700, 
                            background: 'rgba(0, 62, 113, 0.05)', 
                            color: 'var(--primary)', 
                            padding: '6px 12px', 
                            borderRadius: 'var(--radius-full)' 
                          }}
                        >
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '16px' }}>
                      {v.name}
                    </h2>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      <li><strong>{ui.capacity}</strong> {v.capacity}</li>
                      <li><strong>{ui.luggage}</strong> {v.luggage}</li>
                      <li><strong>{ui.bestFor}</strong> {v.useCase}</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {v.amenities.map((am, i) => (
                        <span 
                          key={i} 
                          style={{ 
                            fontSize: '11px', 
                            fontWeight: 700, 
                            background: 'rgba(0, 62, 113, 0.05)', 
                            color: 'var(--primary)', 
                            padding: '6px 12px', 
                            borderRadius: 'var(--radius-full)' 
                          }}
                        >
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                    <img src={v.img} alt={v.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Cleaning & Baby Seat Policy banner */}
        <div 
          style={{ 
            background: 'var(--primary-dark)', 
            color: '#ffffff', 
            borderRadius: 'var(--radius-lg)', 
            padding: '40px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
          className="policy-grid"
        >
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '40px' 
            }}
            className="grid-cols-mobile"
          >
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '12px' }}>
                {ui.seatsTitle}
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)' }}>
                {ui.seatsDesc}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '12px' }}>
                {ui.sanTitle}
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)' }}>
                {ui.sanDesc}
              </p>
            </div>
          </div>
        </div>

        {/* CSS workaround for mobile grids */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .fleet-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              padding: 20px !important;
            }
            .grid-cols-mobile {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }
          }
        `}} />
      </div>
    </div>
  );
}
