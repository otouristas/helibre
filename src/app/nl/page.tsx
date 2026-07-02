'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import FareCalculator from '@/components/FareCalculator';
import styles from '../page.module.css';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function DutchHome() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const reviews = [
    {
      image: '/images/reviews/irene-img.png',
      name: 'Irene Arto Escuredo',
      text: "Gerasimos leverde een uitstekende service. Altijd punctueel, vriendelijk en beleefd, hij rijdt met grote zorg, wat de reis soepel en aangenaam maakt. Wat hem echt onderscheidt, is zijn bereidheid om te helpen en oplossingen te vinden voor eventuele problemen. Hij doet consequent dat extra stapje voor zijn klanten en zorgt voor een stressvrije ervaring. Zeer aanbevolen!",
    },
    {
      image: '/images/reviews/tania.png',
      name: 'Tania Dimou',
      text: 'Uiterst professionele transportdiensten van/naar luchthavens maar ook binnen Brussel. Gerasimos is een absoluut betrouwbaar, vriendelijk en professioneel persoon. U ontvangt tijdig en to-the-point informatie. De rit in de nieuwe minivan is comfortabel en veilig. Hij rijdt zeer voorzichtig.',
    },
    {
      image: '/images/reviews/tfarrah.png',
      name: 'Tfarrah Hanafi Erguibi',
      text: 'Ik reisde met Gerasimos en het was een zeer aangename ervaring. Hij rijdt voorzichtig, wat een groot pluspunt is. Hij is ook een interessante gesprekspartner met uitstekende muzieksmaak. Hij maakte mijn reis erg leuk en gaf ook interessante uitleg over de bezienswaardigheden.',
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'Hoe boek ik een luchthaventransfer of chauffeursdienst?',
      answer: (
        <span>
          U kunt een transfer aanvragen via ons <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer">Online Boekingsformulier</a>, 
          direct chatten via <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer">WhatsApp</a>, 
          of bellen naar onze dispatchlijn op <a href="tel:+32472358805">+32 472 35 88 05</a>.
        </span>
      ),
    },
    {
      question: 'Wat is jullie annuleringsbeleid?',
      answer: (
        <span>
          Annuleren of wijzigen van uw boeking is 100% gratis tot 24 uur voor de geplande ophaaltijd. 
          Voor dringende wijzigingen binnen 24 uur kunt u ons direct telefonisch contacteren.
        </span>
      ),
    },
    {
      question: 'Wat gebeurt er als mijn vlucht vertraging heeft?',
      answer: (
        <span>
          Wij monitoren uw vlucht live aan de hand van uw vluchtnummer. Bij vertraging passen wij de ophaaltijd automatisch aan. 
          Hier worden geen extra wachttijd-kosten voor aangerekend.
        </span>
      ),
    },
    {
      question: 'Waar ontmoet ik de chauffeur op de luchthaven?',
      answer: (
        <span>
          Op Brussels Airport (Zaventem) ontmoet de chauffeur u in de Aankomsthal (ter hoogte van het café) met een naambordje. 
          Op Brussels South Charleroi Airport (CRL) ontmoet de chauffeur u bij de officiële kiss & ride ophaalzone.
        </span>
      ),
    },
    {
      question: 'Zijn er extra kosten voor nachttransfers?',
      answer: (
        <span>
          Voor privé minivan boekingen hanteren wij vaste tarieven zonder nachttoeslag. Gedeelde pendeldiensten 
          hebben dag- en nachttarieven zoals aangegeven op onze tariefpagina.
        </span>
      ),
    },
    {
      question: 'Zijn er kinderzitjes beschikbaar?',
      answer: (
        <span>
          Ja. Wij bieden gratis baby- en kinderzitjes aan op aanvraag. Geef bij uw boeking het aantal en de leeftijd van de kinderen door.
        </span>
      ),
    },
    {
      question: 'Wat is de bagagecapaciteit van de minivans?',
      answer: (
        <span>
          Onze Mercedes Vito en V-Klasse minivans zijn geschikt voor maximaal 7 of 8 passagiers en bieden plaats aan 7 tot 8 grote koffers 
          plus handbagage. Ideaal voor gezinnen of groepen.
        </span>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Photo Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Premium Privé Vervoer & Minivans</h1>
          <p className={styles.heroSubtitle}>
            Vaste prijzen van Brussel naar Zaventem (40€) & Charleroi (70€). 
            Gelicentieerde Belgische chauffeursdienst met 30+ jaar ervaring.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a 
              href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.heroBtn}
            >
              Online Boeken
            </a>
            <a 
              href="https://wa.me/32472358805"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.heroBtnSecondary}
            >
              WhatsApp Chauffeur
            </a>
            <a 
              href="tel:+32472358805" 
              className={styles.heroBtnSecondary}
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            >
              Bel Ons Nu
            </a>
          </div>
        </div>
      </section>

      {/* Calculator & Trust Section */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px', alignItems: 'start' }} className="grid-cols-mobile">
            {/* Why Helicro */}
            <div>
              <span className={styles.badge}>GELICENTIEERD OPERATOR</span>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: 'var(--primary-dark)' }}>
                Waarom reizen met Helicro?
              </h2>
              <div className={styles.aboutText}>
                <p className="mb-4">
                  Helicro Transport is een volledig gelicentieerde privévervoerder gevestigd in Braine-l&apos;Alleud, 
                  actief in Brussel, Wallonië en Vlaanderen.
                </p>
                <p className="mb-4">
                  Geleid door Gerasimos, een chauffeur met <strong>meer dan 30 jaar wegervaring</strong> en een gedisciplineerde 
                  militaire achtergrond, garanderen wij veiligheid, stiptheid en comfort.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Militaire Discipline
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Veilige, defensieve en stipt geplande ritten.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Meertalige Service
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Vloeiend in Engels, Nederlands, Frans en Grieks.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Vaste Flat Rates
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Geen extra kosten voor bagage, files of nachtritten.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Vlucht Monitoring
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Real-time updates bij vertraagde vluchten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Calculator Widget */}
            <div>
              <FareCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Live Flat Rates Grid */}
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
            Populaire Tarieven
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
            Bekijk onze vaste tarieven voor onze comfortabele Mercedes-Benz minivans (tot 2 passagiers).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Brussel naar Zaventem (BRU)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                Vanaf 40€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Tot 8 personen, gratis kinderzitjes, vlucht tracking.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Brussel naar Charleroi (CRL)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                Vanaf 70€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Directe ophaalservice voor budgetvluchten.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Privé Sightseeing Tour
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                Vanaf 450€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Volledige dagtochten naar Brugge, Gent of Dinant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
            Wat Onze Klanten Zeggen
          </h2>
          
          <div className={styles.testimonialsGrid}>
            {reviews.map((review, index) => (
              <TestimonialCard 
                key={index}
                image={review.image}
                name={review.name}
                text={review.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-slate-50">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center text-3xl font-extrabold mb-12" style={{ color: 'var(--primary-dark)' }}>
            Veelgestelde Vragen
          </h2>
          
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${openFaqIndex === index ? styles.faqItemOpen : ''}`}>
                <button className={styles.faqHeader} onClick={() => toggleFaq(index)} aria-expanded={openFaqIndex === index}>
                  {faq.question}
                  <svg className={styles.faqIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`${styles.faqContent} ${openFaqIndex === index ? styles.faqContentOpen : ''}`} style={{ maxHeight: openFaqIndex === index ? '300px' : '0' }}>
                  <div style={{ padding: '16px 20px', borderTop: '1px solid #f1f5f9' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .grid-cols-mobile {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}} />
    </div>
  );
}
