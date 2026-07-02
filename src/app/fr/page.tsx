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

export default function FrenchHome() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const reviews = [
    {
      image: '/images/reviews/irene-img.png',
      name: 'Irene Arto Escuredo',
      text: "Gerasimos a fourni un service exceptionnel. Toujours ponctuel, agréable et poli, il conduit avec grand soin, rendant le voyage fluide et serein. Ce qui le distingue vraiment, c'est sa volonté d'aider et de trouver des solutions aux imprévus. Il fait toujours le maximum pour ses clients. Hautement recommandé !",
    },
    {
      image: '/images/reviews/tania.png',
      name: 'Tania Dimou',
      text: 'Des services de transport extrêmement professionnels depuis/vers les aéroports ainsi que dans Bruxelles. Gerasimos est un chauffeur fiable, aimable et dévoué. Les informations de prise en charge sont claires. Le trajet à bord de la nouvelle Mercedes Vito est très agréable.',
    },
    {
      image: '/images/reviews/tfarrah.png',
      name: 'Tfarrah Hanafi Erguibi',
      text: 'J\'ai voyagé avec Gerasimos et ce fut une expérience mémorable. Il conduit très prudemment. En plus, c\'est une personne très intéressante avec d\'excellents goûts musicaux. Il a agi comme guide en m\'expliquant les points d\'intérêt en Belgique.',
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'Comment réserver un transfert aéroport ou un chauffeur privé ?',
      answer: (
        <span>
          Vous pouvez soumettre une demande via notre <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer">Formulaire de Réservation</a>, 
          nous écrire directement sur <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer">WhatsApp</a>, 
          ou appeler notre ligne d&apos;urgence au <a href="tel:+32472358805">+32 472 35 88 05</a>.
        </span>
      ),
    },
    {
      question: 'Quelles sont vos conditions d&apos;annulation et de modification ?',
      answer: (
        <span>
          Les modifications et annulations sont 100% gratuites jusqu&apos;à 24 heures avant l&apos;heure de prise en charge prévue. 
          Pour toute urgence de dernière minute, veuillez nous appeler directement.
        </span>
      ),
    },
    {
      question: 'Que se passe-t-il si mon vol de retour a du retard ?',
      answer: (
        <span>
          Nous suivons l&apos;état de vos vols en temps réel. Si votre vol est retardé ou en avance, le chauffeur adapte 
          gratuitement l&apos;heure de rendez-vous. Aucun frais d&apos;attente n&apos;est facturé pour les retards de vol.
        </span>
      ),
    },
    {
      question: 'Où le chauffeur m&apos;attend-il à l&apos;aéroport ?',
      answer: (
        <span>
          À Bruxelles Zaventem (BRU), le chauffeur vous attend dans le hall des arrivées (près du café) avec un panneau à votre nom. 
          À l&apos;aéroport de Charleroi (CRL), le rendez-vous a lieu à la zone de dépose-minute officielle.
        </span>
      ),
    },
    {
      question: 'Y a-t-il des suppléments pour les trajets de nuit ?',
      answer: (
        <span>
          Pour les réservations de minivan privé, nos prix sont fixes sans majoration nocturne. Les navettes partagées 
          ont des tarifs de jour et de nuit distincts, visibles sur notre grille tarifaire.
        </span>
      ),
    },
    {
      question: 'Fournissez-vous des sièges bébés et rehausseurs ?',
      answer: (
        <span>
          Oui. Nous mettons à disposition des sièges adaptés gratuitement sur demande. Merci d&apos;indiquer l&apos;âge et le nombre 
          d&apos;enfants lors de votre réservation.
        </span>
      ),
    },
    {
      question: 'Quelle est la capacité de bagages des minivans ?',
      answer: (
        <span>
          Nos minivans Mercedes Vito et Classe V accueillent jusqu&apos;à 7 ou 8 passagers et transportent aisément 7 à 8 grandes valises 
          ainsi que des bagages à main.
        </span>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Photo Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Navette Aéroport & Chauffeur Privé</h1>
          <p className={styles.heroSubtitle}>
            Tarifs fixes de Bruxelles vers Zaventem (40€) et Charleroi (70€). 
            Service de chauffeur agréé avec 30+ ans d&apos;expérience.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a 
              href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.heroBtn}
            >
              Réserver en Ligne
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
              Appeler Maintenant
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
              <span className={styles.badge}>OPÉRATEUR BELGE AGRÉÉ</span>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: 'var(--primary-dark)' }}>
                Pourquoi voyager avec Helicro ?
              </h2>
              <div className={styles.aboutText}>
                <p className="mb-4">
                  Helicro Transport est un exploitant de transport privé titulaire d&apos;une licence officielle de l&apos;État belge, 
                  basé à Braine-l&apos;Alleud et desservant Bruxelles, la Wallonie et la Flandre.
                </p>
                <p className="mb-4">
                  Géré par Gerasimos, un chauffeur fort de <strong>plus de 30 ans d&apos;expérience sur route</strong> et d&apos;une discipline 
                  militaire rigoureuse, nous garantissons sécurité, ponctualité et confort haut de gamme.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Rigueur Militaire
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Sécurité renforcée et conduite défensive de confiance.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Service Multilingue
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Chauffeur parlant couramment Anglais, Français, Néerlandais et Grec.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Tarifs Fixes & Nets
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Aucun supplément bagages ou tarif de nuit caché.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Suivi de Vol Actif
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Ajustement automatique en temps réel de votre prise en charge.
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
            Tarifs Fixes Populaires
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
            Profitez de nos prix fixes vers les aéroports dans nos minivans Mercedes-Benz spacieux (pour 1 à 2 passagers).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Bruxelles vers Zaventem (BRU)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                À partir de 40€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Jusqu&apos;à 8 passagers, sièges auto gratuits, suivi des vols.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Bruxelles vers Charleroi (CRL)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                À partir de 70€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Transfert direct adapté aux horaires des vols low-cost.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Excursions de Chasse d&apos;Eau (Sightseeing)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                À partir de 450€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Journée complète à Bruges, Gand ou Dinant avec chauffeur privé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
            Ce Que Disent Nos Clients
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
            Questions Fréquentes
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
