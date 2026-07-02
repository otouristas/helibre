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

export default function GreekHome() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const reviews = [
    {
      image: '/images/reviews/irene-img.png',
      name: 'Irene Arto Escuredo',
      text: "Ο Γεράσιμος παρείχε εξαιρετικές υπηρεσίες. Πάντα στην ώρα του, ευγενικός και χαμογελαστός, οδηγεί με μεγάλη προσοχή κάνοντας το ταξίδι πολύ άνετο. Αυτό που τον ξεχωρίζει είναι η προθυμία του να βοηθήσει και να βρει λύση σε κάθε πρόβλημα. Τον συνιστώ ανεπιφύλακτα!",
    },
    {
      image: '/images/reviews/tania.png',
      name: 'Tania Dimou',
      text: 'Εξαιρετικά επαγγελματικές υπηρεσίες μεταφοράς από/προς τα αεροδρόμια αλλά και εντός των Βρυξελλών. Ο Γεράσιμος είναι ένας απόλυτα αξιόπιστος, ευγενικός και επαγγελματίας άνθρωπος. Θα απολαύσετε μια άνετη διαδρομή στο νέο του minivan. Οδηγεί πολύ προσεκτικά.',
    },
    {
      image: '/images/reviews/tfarrah.png',
      name: 'Tfarrah Hanafi Erguibi',
      text: 'Ταξίδεψα με τον Γεράσιμο και ήταν μια πολύ ευχάριστη εμπειρία. Οδηγεί με ασφάλεια, είναι πολύ ενδιαφέρων άνθρωπος και έχει εξαιρετική μουσική. Μου έδωσε επίσης πολύ χρήσιμες πληροφορίες για την πόλη.',
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'Πώς μπορώ να κάνω κράτηση για μεταφορά;',
      answer: (
        <span>
          Μπορείτε να κάνετε κράτηση συμπληρώνοντας την <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer">Online Φόρμα Κράτησης</a>, 
          να επικοινωνήσετε μαζί μας μέσω <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer">WhatsApp</a>, 
          ή να μας καλέσετε απευθείας στο <a href="tel:+32472358805">+32 472 35 88 05</a>.
        </span>
      ),
    },
    {
      question: 'Ποια είναι η πολιτική ακύρωσης της κράτησης;',
      answer: (
        <span>
          Οι ακυρώσεις και οι αλλαγές στις κρατήσεις είναι 100% δωρεάν έως και 24 ώρες πριν την προγραμματισμένη παραλαβή. 
          Για αλλαγές της τελευταίας στιγμής, παρακαλούμε καλέστε μας απευθείας.
        </span>
      ),
    },
    {
      question: 'Τι συμβαίνει σε περίπτωση καθυστέρησης της πτήσης μου;',
      answer: (
        <span>
          Παρακολουθούμε την πτήση σας σε πραγματικό χρόνο. Εάν η πτήση σας καθυστερήσει, η ώρα παραλαβής θα προσαρμοστεί αυτόματα 
          χωρίς καμία επιπλέον χρέωση αναμονής.
        </span>
      ),
    },
    {
      question: 'Πού θα με περιμένει ο οδηγός στο αεροδρόμιο;',
      answer: (
        <span>
          Στο αεροδρόμιο των Βρυξελλών Zaventem (BRU), ο οδηγός σας θα σας περιμένει στην αίθουσα αφίξεων (κοντά στην καφετέρια) 
          κρατώντας μια πινακίδα με το όνομά σας. Στο αεροδρόμιο Charleroi (CRL), η συνάντηση γίνεται στην επίσημη ζώνη Kiss & Ride.
        </span>
      ),
    },
    {
      question: 'Υπάρχουν επιπλέον χρεώσεις για νυχτερινές μεταφορές;',
      answer: (
        <span>
          Για κρατήσεις ιδιωτικού minivan, οι τιμές μας είναι σταθερές χωρίς καμία νυχτερινή προσαύξηση. 
          Οι κοινόχρηστες μεταφορές (shuttle) έχουν διαφορετικές τιμές ημέρας και νύχτας.
        </span>
      ),
    },
    {
      question: 'Παρέχετε παιδικά καθίσματα ασφαλείας;',
      answer: (
        <span>
          Ναι. Παρέχουμε παιδικά καθίσματα και reboosters εντελώς δωρεάν κατόπιν αιτήματος. Παρακαλούμε να δηλώσετε την ηλικία 
          και τον αριθμό των παιδιών κατά την κράτηση.
        </span>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Photo Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Μεταφορές στις Βρυξέλλες με Ελληνα Οδηγό</h1>
          <p className={styles.heroSubtitle}>
            Σταθερές τιμές από Βρυξέλλες προς Zaventem (40€) & Charleroi (70€). 
            Επαγγελματικές υπηρεσίες σοφέρ με Mercedes minivan και 30+ χρόνια εμπειρίας.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a 
              href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.heroBtn}
            >
              Online Κράτηση
            </a>
            <a 
              href="https://wa.me/32472358805"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.heroBtnSecondary}
            >
              WhatsApp Οδηγός
            </a>
            <a 
              href="tel:+32472358805" 
              className={styles.heroBtnSecondary}
              style={{ background: 'rgba(255, 255, 255, 0.08)' }}
            >
              Καλέστε Μας
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
              <span className={styles.badge}>ΑΔΕΙΟΔΟΤΗΜΕΝΟΣ ΒΕΛΓΟΣ ΜΕΤΑΦΟΡΕΑΣ</span>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: 'var(--primary-dark)' }}>
                Γιατί να επιλέξετε τη Helicro;
              </h2>
              <div className={styles.aboutText}>
                <p className="mb-4">
                  Η Helicro Transport είναι ένας πλήρως αδειοδοτημένος πάροχος ιδιωτικών μεταφορών με έδρα το Braine-l&apos;Alleud, 
                  που εξυπηρετεί τις Βρυξέλλες, τη Βαλονία και τη Φλάνδρα.
                </p>
                <p className="mb-4">
                  Με οδηγό τον Γεράσιμο, ο οποίος διαθέτει <strong>πάνω από 30 χρόνια εμπειρίας</strong> στους βελγικούς δρόμους και 
                  στρατιωτική πειθαρχία, εγγυόμαστε ασφάλεια, απόλυτη συνέπεια και κορυφαία άνεση.
                </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Στρατιωτική Πειθαρχία
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Εμφαση στην ασφάλεια, την οργάνωση και την αμυντική οδήγηση.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Ελληνόφωνος Σοφέρ
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Αμεση επικοινωνία στα Ελληνικά, Αγγλικά, Γαλλικά και Ολλανδικά.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Σταθερές Τιμές
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Καμία κρυφή χρέωση για αποσκευές, κίνηση ή νυχτερινά δρομολόγια.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Live Παρακολούθηση Πτήσεων
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Προσαρμογή της ώρας παραλαβής σε περίπτωση καθυστερήσεων.
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
            Δημοφιλείς Σταθερές Τιμές
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
            Δείτε τις σταθερές τιμές μας για τα άνετα Mercedes-Benz minivan μας (έως 2 επιβάτες).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Βρυξέλλες προς Zaventem (BRU)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                Από 40€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Εως 8 επιβάτες, δωρεάν παιδικά καθίσματα, flight tracking.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Βρυξέλλες προς Charleroi (CRL)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                Από 70€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Απευθείας μεταφορά ιδανική για low-cost πτήσεις.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Μονοήμερες Εκδρομές (Sightseeing)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                Από 450€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Ολοήμερες εκδρομές σε Μπρυζ, Γάνδη ή Ντινάντ με προσωπικό οδηγό.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
            Τι Λένε Οι Πελάτες Μας
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
            Συχνές Ερωτήσεις
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
