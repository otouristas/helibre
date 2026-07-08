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

export default function FleetClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' | 'hr' }) {
  const pathname = usePathname();
  

  // Localization Dictionary for Fleet
  const ui = {
    en: {
      metaTitle: 'Helicro Fleet | Premium Ford Minivans and Chauffeur Rides',
      metaDesc: 'Comfortable air-conditioned Ford minivans up to 8 passengers, with large luggage space. Vetted drivers, child seats on request.',
      title: 'Our Fleet',
      subtitle: 'Experience premium travel in Belgium with our executive Ford minivans, clean, comfortable and ready for any destination.',
      capacity: 'Capacity:',
      luggage: 'Luggage:',
      bestFor: 'Best For:',
      seatsTitle: 'Child & Safety Seats',
      seatsDesc: 'Your family\'s safety is our topmost priority. We provide secure infant seats, toddler car seats, and booster cushions completely free of charge. Please mention the quantities and ages of your children during the online request so we can prepare the vehicle.',
      seatsGalleryTitle: 'Our Free Child Seats & Booster Cushions',
      sanTitle: 'Sanitization & Quality Standards',
      sanDesc: 'Every Ford vehicle undergoes a rigorous cleaning and interior sanitization process before and after each transfer. Our drivers are non-smokers, vetted professionals, and follow strict Belgian transport regulations.',
      
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
      metaTitle: 'Wagenpark van Helicro | Luxe Ford Minivans & Chauffeurs',
      metaDesc: 'Comfortabele Ford minivans met airco voor maximaal 8 personen. Ruime kofferbak, ervaren chauffeurs en gratis kinderzitjes.',
      title: 'Ons Wagenpark',
      subtitle: 'Ervaar luxe reizen in België met onze executive Ford minivans. Altijd schoon, ruim en comfortabel.',
      capacity: 'Capaciteit:',
      luggage: 'Bagage:',
      bestFor: 'Ideaal Voor:',
      seatsTitle: 'Kinderzitjes & Veiligheid',
      seatsDesc: 'De veiligheid van uw gezin is onze hoogste prioriteit. Wij leveren gratis babystoeltjes en verhogers. Geef de leeftijd en het aantal kinderen op bij uw boeking zodat wij het voertuig kunnen inrichten.',
      seatsGalleryTitle: 'Onze Gratis Kinderzitjes & Veiligheidsstoeltjes',
      sanTitle: 'Schoonmaak- & Kwaliteitsnormen',
      sanDesc: 'Elke Ford wordt voor en na elke rit grondig gereinigd en ontsmet. Onze chauffeurs zijn professioneel, niet-rokend en rijden volgens de Belgische transportregels.',
      
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
      metaTitle: 'Flotte Helicro | Monospaces Ford Premium avec Chauffeur',
      metaDesc: 'Monospaces Ford climatisés confortables jusqu\'à 8 passagers, grand coffre. Chauffeurs agréés, sièges enfants sur demande.',
      title: 'Notre Flotte',
      subtitle: 'Voyagez de façon premium en Belgique à bord de nos minivans Ford-Benz haut de gamme, propres et spacieux.',
      capacity: 'Capacité :',
      luggage: 'Bagages :',
      bestFor: 'Idéal Pour :',
      seatsTitle: 'Sièges Enfants & Sécurité',
      seatsDesc: 'La sécurité de votre famille est notre priorité absolue. Nous fournissons des sièges auto et rehausseurs adaptés gratuitement. Veuillez préciser l\'âge des enfants lors de votre demande.',
      seatsGalleryTitle: 'Nos Sièges Bébé & Rehausseurs Gratuits',
      sanTitle: 'Normes de Propreté & Qualité',
      sanDesc: 'Chaque véhicule Ford fait l\'objet d\'un nettoyage et d\'une désinfection minutieuse de l\'habitacle avant et après chaque trajet. Nos chauffeurs sont professionnels et non-fumeurs.',
      
      vitoCap: 'Jusqu\'à 8 Passagers',
      vitoLug: '8 Grandes Valises + Bagages à Main',
      vitoUse: 'Parfait pour les navettes aéroport, les transferts de festival en groupe, le transport de colis et de matériel de sport.',
      vitoAm: ['Climatisation Bi-zone', 'Vitrages Teintés', 'Prises de Recharge USB', 'Sièges Ajustables'],

      vClassCap: 'Jusqu\'à 7 Passagers',
      vClassLug: '7 Grandes Valises + Bagages à Main',
      vClassUse: 'L\'option premium idéale pour les navettes d\'affaires, les délégations diplomatiques, mariages et excursions touristiques de standing.',
      vClassAm: ['Salon en Cuir Face-à-Face', 'Climatisation Individuelle', 'Système Audio Premium', 'Toit Panoramique']
    },
    hr: {
      metaTitle: 'Naš vozni park | Ford Transit i Tourneo Custom kombiji',
      metaDesc: 'Istražite našu flotu Ford minivana. Potpuno dezinficirana i klimatizirana vozila za do 8 putnika s velikim prostorom za prtljagu.',
      title: 'Naš vozni park',
      subtitle: 'Doživite vrhunsko putovanje u Belgiji s našim Ford minivanima, čistim, udobnim i spremnima za svako odredište.',
      capacity: 'Kapacitet:',
      luggage: 'Prtljaga:',
      bestFor: 'Najbolje za:',
      seatsTitle: 'Dječje i sigurnosne sjedalice',
      seatsDesc: 'Sigurnost vaše obitelji naš je najveći prioritet. Pružamo sigurne dječje sjedalice, autosjedalice za malu djecu i booster jastuke potpuno besplatno. Molimo navedite količinu i dob djece prilikom rezervacije.',
      seatsGalleryTitle: 'Naše besplatne dječje sjedalice i boosteri',
      sanTitle: 'Standardi higijene i čišćenja',
      sanDesc: 'Svako Ford vozilo prolazi kroz rigorozan postupak čišćenja i dezinfekcije unutrašnjosti prije i nakon svakog transfera. Naši vozači su profesionalci, nepušači i poštuju belgijske propise.',
      vitoCap: 'Do 8 putnika',
      vitoLug: '8 velikih kovčega + ručna prtljaga',
      vitoUse: 'Savršeno za transfere do zračne luke, povoljne grupne festivalske prijevoze, prijevoz paketa i sportske opreme.',
      vitoAm: ['Dvo-zonska klimatizacija', 'Zatamnjena stakla', 'USB priključci', 'Podesiva sjedala'],
      vClassCap: 'Do 7 putnika',
      vClassLug: '7 velikih kovčega + ručna prtljaga',
      vClassUse: 'Idealan premium izbor za korporativne prijevoze, diplomatska veleposlanstva, vjenčanja i luksuzne izlete.',
      vClassAm: ['Kožna sjedala u obliku konferencije', 'Pojedinačne kontrole klime', 'Vrhunski audio sustav', 'Panoramski krov']
    },
    el: {
      metaTitle: 'Ο Στόλος της Helicro | Ford Minivans & Υπηρεσίες Σοφέρ',
      metaDesc: 'Ανετα κλιματιζόμενα Ford minivans έως 8 επιβατών, με μεγάλους χώρους αποσκευών. Εμπειροι οδηγοί, παιδικά καθίσματα δωρεάν.',
      title: 'Ο Στόλος μας',
      subtitle: 'Απολαύστε premium μετακινήσεις στο Βέλγιο με τα πολυτελή Ford minivans, καθαρά και έτοιμα για κάθε προορισμό.',
      capacity: 'Χωρητικότητα:',
      luggage: 'Αποσκευές:',
      bestFor: 'Ιδανικό για:',
      seatsTitle: 'Παιδικά Καθίσματα Ασφαλείας',
      seatsDesc: 'Η ασφάλεια της οικογένειάς σας είναι η προτεραιότητά μας. Παρέχουμε βρεφικά και παιδικά καθίσματα εντελώς δωρεάν. Παρακαλούμε αναφέρετε την ηλικία των παιδιών κατά την κράτηση.',
      seatsGalleryTitle: 'Τα Δωρεάν Παιδικά Καθίσματα & Booster',
      sanTitle: 'Πρότυπα Υγιεινής & Καθαριότητας',
      sanDesc: 'Κάθε όχημα Ford υποβάλλεται σε σχολαστικό καθαρισμό και απολύμανση πριν και μετά από κάθε μεταφορά. Οι οδηγοί μας είναι μη καπνιστές, επαγγελματίες.',
      
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
      name: 'Ford Transit Custom',
      img: '/images/car-1.jpg',
      capacity: ui.vitoCap,
      luggage: ui.vitoLug,
      amenities: ui.vitoAm,
      useCase: ui.vitoUse
    },
    {
      name: 'Ford Tourneo Custom',
      img: '/images/car-3.jpg',
      capacity: ui.vClassCap,
      luggage: ui.vClassLug,
      amenities: ui.vClassAm,
      useCase: ui.vClassUse
    }
  ];

  return (
    <div className="section">
      
      

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

        {/* Child Seat Photo Gallery */}
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '20px', textAlign: 'center' }}>
            {ui.seatsGalleryTitle}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { src: '/images/child-seat-1.jpg', title: lang === 'el' ? 'Παιδικό Κάθισμα (Kinderkraft)' : (lang === 'fr' ? 'Siège Enfant (Kinderkraft)' : (lang === 'nl' ? 'Kinderzitje (Kinderkraft)' : (lang === 'hr' ? 'Dječja sjedalica (Kinderkraft)' : 'Child Seat (Kinderkraft)'))) },
              { src: '/images/child-seat-2.jpg', title: lang === 'el' ? 'Βρεφικό Κάθισμα (Joie)' : (lang === 'fr' ? 'Siège Bébé (Joie)' : (lang === 'nl' ? 'Babystoeltje (Joie)' : (lang === 'hr' ? 'Sjedalica za bebe (Joie)' : 'Infant Seat (Joie)'))) },
              { src: '/images/child-seat-3.jpg', title: lang === 'el' ? 'Booster Κάθισμα' : (lang === 'fr' ? 'Rehausseur Simple' : (lang === 'nl' ? 'Verhogingskussen' : (lang === 'hr' ? 'Booster sjedalica' : 'Booster Seat'))) },
              { src: '/images/child-seat-4.jpg', title: lang === 'el' ? 'Παιδικό Κάθισμα (Mickey Mouse)' : (lang === 'fr' ? 'Siège Enfant (Mickey)' : (lang === 'nl' ? 'Kinderzitje (Mickey)' : (lang === 'hr' ? 'Dječja sjedalica (Mickey Mouse)' : 'Child Seat (Mickey Mouse)'))) }
            ].map((img, i) => (
              <div key={i} style={{ background: '#ffffff', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--card-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ height: '240px', width: '100%', overflow: 'hidden' }}>
                  <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '12px', textAlign: 'center', fontSize: '13.5px', fontWeight: 600, color: 'var(--primary-dark)' }}>
                  {img.title}
                </div>
              </div>
            ))}
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
