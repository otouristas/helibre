'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import ServiceRequest from '@/components/ServiceRequest';
import EventQuoteCTA from '@/components/EventQuoteCTA';

export default function ContactClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' | 'hr' }) {
  const pathname = usePathname();
  const eventLang = lang === 'nl' || lang === 'fr' ? lang : 'en';

  // Localization Dictionary for Contact
  const ui = {
    en: {
      metaTitle: 'Contact Helicro Transport | Private Driver and Minivan Brussels',
      metaDesc: 'Get in touch with Helicro for booking transfers, sightseeing tours or corporate chauffeur rates. Phone +32 472 35 88 05.',
      title: 'Contact Us',
      subtitle: 'Have an inquiry, booking request, or specific transfer need? Reach out to Gerasimos and the Helicro team. We are available 24/7.',
      coordsTitle: 'Helicro Coordinates',
      officeLabel: 'Office Address',
      phoneLabel: 'Phone & WhatsApp',
      emailLabel: 'Email Support',
      hoursLabel: 'Operating Hours',
      hoursDesc: '24 hours a day, 7 days a week (including bank holidays).',
      licensingDesc: 'Licensed operator under Belgian transport regulations.',
      formTitle: 'Submit an Inquiry',
      formDesc: 'Fill out the form below with your trip details, passenger count, and destinations. We will get back to you with a fixed price quote.'
    },
    nl: {
      metaTitle: 'Contact Helicro Transport | Privéchauffeur & Minivan Brussel',
      metaDesc: 'Neem contact op met Helicro voor boekingen, rondritten of zakelijke offertes. Telefoon +32 472 35 88 05.',
      title: 'Contacteer Ons',
      subtitle: 'Heeft u een vraag, boekingsverzoek of speciale wens? Neem contact op met Gerasimos en het Helicro-team. Wij zijn 24/7 bereikbaar.',
      coordsTitle: 'Helicro Gegevens',
      officeLabel: 'Kantooradres',
      phoneLabel: 'Telefoon & WhatsApp',
      emailLabel: 'E-mail Support',
      hoursLabel: 'Openingstijden',
      hoursDesc: '24 uur per dag, 7 dagen per week (inclusief feestdagen).',
      licensingDesc: 'Gelicentieerde vervoerder onder de Belgische wetgeving.',
      formTitle: 'Dien een Aanvraag in',
      formDesc: 'Vul uw reisgegevens, aantal passagiers en bestemming in. Wij sturen u snel een vaste prijsopgave.'
    },
    fr: {
      metaTitle: 'Contact Helicro Transport | Chauffeur Privé et Minivan Bruxelles',
      metaDesc: 'Contactez Helicro pour réserver un transfert, une excursion ou obtenir un tarif entreprise. Téléphone +32 472 35 88 05.',
      title: 'Contactez-nous',
      subtitle: 'Une question, un projet ou besoin d\'une navette ? Contactez Gerasimos et l\'équipe Helicro. Disponible 24h/24 et 7j/7.',
      coordsTitle: 'Coordonnées Helicro',
      officeLabel: 'Adresse Administrative',
      phoneLabel: 'Téléphone & WhatsApp',
      emailLabel: 'Assistance E-mail',
      hoursLabel: 'Horaires d\'Ouverture',
      hoursDesc: '24 heures sur 24, 7 jours sur 7 (y compris les jours fériés).',
      licensingDesc: 'Opérateur agréé conformément aux lois belges sur le transport.',
      formTitle: 'Envoyez un Message',
      formDesc: 'Indiquez vos détails de trajet, dates, nombre de passagers et destination. Nous vous répondrons avec un tarif fixe.'
    },
        hr: {
      metaTitle: 'Kontaktirajte Helicro Transport | Privatni vozač i minivan u Briselu',
      metaDesc: 'Stupite u kontakt s Helicro radi rezervacije transfera, razgledavanja ili cijena korporativnog prijevoza. Telefon +32 472 35 88 05.',
      title: 'Kontaktirajte nas',
      subtitle: 'Imate li upit, zahtjev za rezervaciju ili posebne potrebe za transferom? Stupite u kontakt s Gerasimosom i timom Helicro. Dostupni smo 24/7.',
      coordsTitle: 'Koordinate Helicro',
      officeLabel: 'Adresa ureda',
      phoneLabel: 'Telefon i WhatsApp',
      emailLabel: 'E-mail podrška',
      hoursLabel: 'Radno vrijeme',
      hoursDesc: '24 sata dnevno, 7 dana u tjednu (uključujući državne praznike).',
      licensingDesc: 'Licencirani prijevoznik prema belgijskim propisima o prijevozu.',
      formTitle: 'Pošaljite upit',
      formDesc: 'Ispunite donji obrazac s detaljima vašeg putovanja, brojem putnika i odredištima. Javit ćemo vam se s fiksnom cijenom.'
    },
    el: {
      metaTitle: 'Επικοινωνία με τη Helicro Transport | Σοφέρ & Minivan Βρυξέλλες',
      metaDesc: 'Επικοινωνήστε με τη Helicro για κρατήσεις, περιηγήσεις ή εταιρικές τιμές. Τηλέφωνο +32 472 35 88 05.',
      title: 'Επικοινωνήστε Μαζί Μας',
      subtitle: 'Έχετε κάποια ερώτηση ή αίτημα μεταφοράς; Επικοινωνήστε με τον Γεράσιμο και την ομάδα της Helicro. Είμαστε διαθέσιμοι 24/7.',
      coordsTitle: 'Στοιχεία Επικοινωνίας',
      officeLabel: 'Διεύθυνση Γραφείου',
      phoneLabel: 'Τηλέφωνο & WhatsApp',
      emailLabel: 'Υποστήριξη Email',
      hoursLabel: 'Ώρες Λειτουργίας',
      hoursDesc: '24 ώρες το 24ωρο, 7 ημέρες την εβδομάδα (συμπεριλαμβανομένων αργιών).',
      licensingDesc: 'Αδειοδοτημένος μεταφορέας βάσει των βελγικών κανονισμών.',
      formTitle: 'Υποβολή Αιτήματος',
      formDesc: 'Συμπληρώστε τις λεπτομέρειες του ταξιδιού, τον αριθμό επιβατών και τον προορισμό. Θα σας στείλουμε σταθερή προσφορά τιμής.'
    }
  }[lang];

  return (
    <div className="section">
      
      

      <div className="container">
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          {ui.title}
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
          {ui.subtitle}
        </p>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.2fr', 
            gap: '50px',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Contact Details Card */}
          <div 
            style={{
              background: 'var(--primary-dark)',
              color: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '40px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '24px' }}>
              {ui.coordsTitle}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>📍</span>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{ui.officeLabel}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: '4px' }}>
                    Braine-l&apos;Alleud, 1420<br />Walloon Brabant, Belgium
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>📞</span>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{ui.phoneLabel}</h3>
                  <p style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <a href="tel:+32472358805" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '15px' }}>
                      🇧🇪 +32 472 35 88 05
                    </a>
                    <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
                      💬 WhatsApp (Belgium)
                    </a>
                    <a href="tel:+306974581706" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '15px', marginTop: '6px' }}>
                      🇬🇷 +30 697 458 1706
                    </a>
                    <a href="https://wa.me/306974581706" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
                      💬 WhatsApp (Greece)
                    </a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>✉️</span>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{ui.emailLabel}</h3>
                  <p style={{ marginTop: '4px' }}>
                    <a href="mailto:helicrotransport@gmail.com" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '14.5px' }}>
                      helicrotransport@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>⏰</span>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{ui.hoursLabel}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: '4px' }}>
                    {ui.hoursDesc}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
              <strong>Helicro SRL</strong><br />
              VAT Registration: BE 0804.095.653<br />
              {ui.licensingDesc}
            </div>
          </div>

          {/* Booking Inquiry Card */}
          <div>
            <div 
              style={{
                background: '#ffffff',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '45px',
                boxShadow: 'var(--shadow)'
              }}
            >
              <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '20px' }}>
                {ui.formTitle}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginBottom: '28px', lineHeight: '1.6' }}>
                {ui.formDesc}
              </p>
              <EventQuoteCTA lang={eventLang} />
              <div style={{ marginTop: 24 }}>
                <ServiceRequest />
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS overrides for mobile grids */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 992px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}} />
      </div>
    </div>
  );
}
