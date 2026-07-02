'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import VimeoPlayer from '@/components/VimeoPlayer';
import TestimonialCard from '@/components/TestimonialCard';
import FareCalculator from '@/components/FareCalculator';
import styles from './page.module.css';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const reviews = [
    {
      image: '/images/reviews/irene-img.png',
      name: 'Irene Arto Escuredo',
      text: "Gerasimos provided an outstanding service. Always punctual, pleasant and kind, he drives with great care, making the journey smooth and enjoyable. What truly sets him apart is his willingness to help and to find solutions to any issue that might arise. He consistently goes the extra mile for his clients, ensuring a stress-free experience. He also gave me some great tips for exploring Brussels, which was much appreciated! Gerasimos is not only reliable but also engaging, with a friendly conversation that adds to the overall comfort of the trip. I can't recommend his services enough!",
    },
    {
      image: '/images/reviews/tania.png',
      name: 'Tania Dimou',
      text: 'Extremely professional transport services from/to airports but also within Brussels. Gerasimos is an absolutely reliable, kind and professional person. You are going to receive timely and to the point information about the pick-up time and the other information related with the transport. On the date of the transport, he is perfectly on time. You are going to enjoy a comfortable ride in the new van. Gerasimos drives very carefully and smoothly. It is highly recommended.',
    },
    {
      image: '/images/reviews/tfarrah.png',
      name: 'Tfarrah Hanafi Erguibi',
      text: 'I traveled with Gerasimos and it has been a very pleasant experience. He is careful driving, so that is a plus, but on top of that, he is an interesting person and his music is excellent. He made my trip very enjoyable, without a doubt, I recommend it, and I\'ll call him for my next trips. He also acted as a guide for me, explaining interesting things about the country.',
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'How do I book an airport transfer or driver service?',
      answer: (
        <span>
          You can request a ride using our <a href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM" target="_blank" rel="noopener noreferrer">Online Booking Form</a>, 
          chat with us directly on <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer">WhatsApp</a>, 
          or call our emergency dispatch line at <a href="tel:+32472358805">+32 472 35 88 05</a>.
        </span>
      ),
    },
    {
      question: 'What is your cancellation and booking change policy?',
      answer: (
        <span>
          Changes and cancellations are 100% free of charge up to 24 hours prior to your scheduled pickup time. 
          For last-minute emergency adjustments within 24 hours, please call us directly.
        </span>
      ),
    },
    {
      question: 'What happens if my incoming flight is delayed?',
      answer: (
        <span>
          We track your flight in real time using flight numbers. If your flight is delayed or arriving early, 
          your driver will automatically adjust the pickup time. There are no waiting time surcharges for delayed flights.
        </span>
      ),
    },
    {
      question: 'Where will the driver meet me at Brussels Zaventem and Charleroi airports?',
      answer: (
        <span>
          At Brussels Zaventem (BRU), your driver will meet you in the Arrivals Hall (by the café outlet) holding a sign with your name. 
          At Brussels South Charleroi (CRL), the driver will meet you at the official passenger drop-off/pick-up zone.
        </span>
      ),
    },
    {
      question: 'Do you charge extra for night transfers or early morning pickups?',
      answer: (
        <span>
          For private minivan bookings, our quoted prices are flat rates and do not change. Shared shuttle transfers 
          have separate day and night tariffs as detailed in our price lists.
        </span>
      ),
    },
    {
      question: 'Are booster and infant child safety seats available?',
      answer: (
        <span>
          Yes. We provide child and baby seats free of charge on request. Please indicate the ages and number of seats 
          required when completing your booking request.
        </span>
      ),
    },
    {
      question: 'What is the luggage capacity of the Mercedes minivans?',
      answer: (
        <span>
          Our Mercedes Vito and V-Class minivans carry up to 7 or 8 passengers and easily fit 7 to 8 large suitcases 
          along with hand luggage. They are perfect for families, ski trips, or festival groups.
        </span>
      ),
    },
    {
      question: 'Can I book a sightseeing tour or day trip in Belgium?',
      answer: (
        <span>
          Yes. We offer tailored private day trips to Bruges, Ghent, Waterloo battlefield, and Dinant. 
          Your driver stays with you throughout the day and accommodates any route adjustments.
        </span>
      ),
    },
    {
      question: 'How and when do I pay for my transfer?',
      answer: (
        <span>
          We accept secure online card payments, direct bank transfers, corporate invoices, or cash directly 
          to the driver at the end of your trip.
        </span>
      ),
    },
    {
      question: 'Why is Helicro different from standard taxis or Uber?',
      answer: (
        <span>
          Helicro is a licensed, family-operated service run by Gerasimos, an expat driver with a military safety background 
          and 30+ years of road experience in Belgium. We offer first-name reliability, clean Mercedes vehicles, 
          and multi-lingual support (English, Greek, Dutch, French).
        </span>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Photo Section */}
      <section className={styles.hero}>
        {/* Floating Hero Text overlay */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Premium Private Transfers & Minivans</h1>
          <p className={styles.heroSubtitle}>
            Fixed prices from Brussels to Zaventem (40€) & Charleroi (70€). 
            Licensed Belgian chauffeur service with 30+ years of professional experience.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a 
              href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM"
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.heroBtn}
            >
              Book Online
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
              Call Us Now
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
              <span className={styles.badge}>TRUSTED BELGIAN OPERATOR</span>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: 'var(--primary-dark)' }}>
                Why travel with Helicro?
              </h2>
              <div className={styles.aboutText}>
                <p className="mb-4">
                  Helicro Transport is a fully licensed private passenger transfer operator based in Braine-l&apos;Alleud, 
                  servicing Brussels, Wallonia, and Flanders.
                </p>
                <p className="mb-4">
                  Run by Gerasimos, a driver with <strong>over 30 years of experience</strong> and a disciplined 
                  military background, we ensure safety, absolute punctuality, and high comfort for your family or corporate group.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Vetted Safety
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Military background driver, safe, defensive driving style.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Multi-lingual
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Fluent in English, Greek, French, and Dutch.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Fixed Pricing
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Flat-rate quotes. No hidden luggage, traffic, or night fees.
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '15px', marginBottom: '6px' }}>
                      ✓ Free Flight Tracking
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                      Real-time arrivals monitoring to adjust pick-up times.
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
            Popular Flat Rates
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
            Check out our fixed flat rates for our spacious Mercedes-Benz minivans (for up to 2 passengers). 
            Perfect for families or business groups.
          </p>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '24px' 
            }}
          >
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Brussels to Zaventem (BRU)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                From 40€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Up to 8 passengers, free child booster seats, flight tracking.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Brussels to Charleroi (CRL)
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                From 70€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Direct minivan transfer, door-to-door, fits budget arrivals.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 800, fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Private Sightseeing Tour
              </h3>
              <p style={{ color: 'var(--primary-light)', fontSize: '28px', fontWeight: 800, margin: '12px 0' }}>
                From 450€
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Full day tours to Bruges, Ghent or Dinant with personal driver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Driver Section */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center' }} className="grid-cols-mobile">
            <div>
              <span className={styles.badge}>MEET GERASIMOS</span>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: 'var(--primary-dark)' }}>
                Your Professional Chauffeur
              </h2>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                Helicro is not a faceless booking aggregator or taxi template site. Every transfer is managed or executed 
                by Gerasimos, an experienced Greek-Belgian driver.
              </p>
              <p className="mb-4" style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                With a background in safety logistics and decades of driving on Belgian roads, Gerasimos offers a high 
                level of professional protocol, helping with luggage, child safety seating, and recommending local landmarks 
                and attractions along your route.
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <a href="tel:+32472358805" className="btn btn-primary">Call Gerasimos</a>
                <Link href="/about-us" className="btn btn-outline">Read Our Story</Link>
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img 
                src="/images/photo to the bottom of the opening page.jpg" 
                alt="Helicro Mercedes Chauffeur Gerasimos" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
            Services Overview
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            We cover a broad range of passenger transportation and logistics needs across Belgium.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontWeight: 800, fontSize: '15px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Airport Transfers
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Door-to-door minivans to Zaventem, Charleroi, and Lille airports.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontWeight: 800, fontSize: '15px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Sightseeing Tours
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Explore Bruges, Ghent or Dinant in a private comfortable vehicle.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontWeight: 800, fontSize: '15px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Corporate Shuttles
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Executive transport for diplomatic staff and business groups.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontWeight: 800, fontSize: '15px', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                Parcel Delivery
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Fast, secure local and cross-border package and document logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
            What Our Customers Say
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            Read verified experiences from our passengers and why they recommend Helicro for travel in Belgium.
          </p>
          
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
            Frequently Asked Questions
          </h2>
          
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openFaqIndex === index ? styles.faqItemOpen : ''}`}
              >
                <button 
                  className={styles.faqHeader} 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  {faq.question}
                  <svg 
                    className={styles.faqIcon} 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div 
                  className={`${styles.faqContent} ${openFaqIndex === index ? styles.faqContentOpen : ''}`}
                  style={{ maxHeight: openFaqIndex === index ? '300px' : '0' }}
                >
                  <div style={{ padding: '16px 20px', borderTop: '1px solid #f1f5f9' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS overrides for mobile grids */}
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
