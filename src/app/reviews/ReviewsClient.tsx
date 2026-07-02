'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPath } from '@/config/translations';
import TestimonialCard from '@/components/TestimonialCard';

export default function ReviewsClient({ lang }: { lang: 'en' | 'nl' | 'fr' | 'el' }) {
  const pathname = usePathname();
  

  const ui = {
    en: {
      title: 'Customer Reviews',
      subtitle: 'Read verified experiences from our passengers and why they recommend Helicro for travel in Belgium.',
      invite: 'Your reviews are highly appreciated. They help our company to grow and improve our services.',
      btn: 'Rate Us on Google Maps'
    },
    nl: {
      title: 'Klantbeoordelingen',
      subtitle: 'Lees geverifieerde ervaringen van onze passagiers en waarom zij Helicro aanbevelen.',
      invite: 'Uw recensies worden zeer op prijs gesteld. Ze helpen ons bedrijf te groeien en onze diensten te verbeteren.',
      btn: 'Beoordeel ons op Google Maps'
    },
    fr: {
      title: 'Avis Clients',
      subtitle: 'Découvrez les témoignages de nos passagers et pourquoi ils recommandent Helicro en Belgique.',
      invite: 'Vos avis sont précieux. Ils nous aident à grandir et à perfectionner nos services.',
      btn: 'Laissez un avis sur Google Maps'
    },
    el: {
      title: 'Αξιολογήσεις Πελατών',
      subtitle: 'Διαβάστε επιβεβαιωμένες εμπειρίες από τους επιβάτες μας και γιατί επιλέγουν τη Helicro.',
      invite: 'Η κριτική σας είναι πολύτιμη. Μας βοηθά να βελτιώνουμε τις υπηρεσίες μας.',
      btn: 'Βαθμολογήστε μας στο Google Maps'
    }
  }[lang];

  // Reviews text in their original language
  const reviews = [
    {
      image: '/images/reviews/irene-img.png',
      name: 'Irene Arto Escuredo',
      text: lang === 'fr' 
        ? "Gerasimos a fourni un service exceptionnel. Toujours ponctuel, agréable et poli, il conduit avec grand soin, rendant le voyage fluide et serein. Ce qui le distingue vraiment, c'est sa volonté d'aider et de trouver des solutions aux imprévus. Il fait toujours le maximum pour ses clients."
        : (lang === 'nl' 
          ? "Gerasimos leverde een uitstekende service. Altijd punctueel, vriendelijk en beleefd, hij rijdt met grote zorg, wat de reis soepel en aangenaam maakt. Wat hem echt onderscheidt, is zijn bereidheid om te helpen. Zeer aanbevolen!" 
          : "Gerasimos provided an outstanding service. Always punctual, pleasant and kind, he drives with great care, making the journey smooth and enjoyable. What truly sets him apart is his willingness to help and to find solutions to any issue that might arise. He consistently goes the extra mile for his clients, ensuring a stress-free experience. He also gave me some great tips for exploring Brussels, which was much appreciated! Gerasimos is not only reliable but also engaging, with a friendly conversation that adds to the overall comfort of the trip. I can't recommend his services enough!"),
    },
    {
      image: '/images/reviews/tania.png',
      name: 'Tania Dimou',
      text: lang === 'el'
        ? "Εξαιρετικά επαγγελματικές υπηρεσίες μεταφοράς από/προς τα αεροδρόμια αλλά και εντός των Βρυξελλών. Ο Γεράσιμος είναι ένας απόλυτα αξιόπιστος, ευγενικός και επαγγελματίας άνθρωπος. Θα απολαύσετε μια άνετη διαδρομή στο νέο του minivan. Οδηγεί πολύ προσεκτικά."
        : "Extremely professional transport services from/to airports but also within Brussels. Gerasimos is an absolutely reliable, kind and professional person. You are going to receive timely and to the point information about the pick-up time. Gerasimos drives very carefully and smoothly.",
    },
    {
      image: '/images/reviews/tfarrah.png',
      name: 'Tfarrah Hanafi Erguibi',
      text: "I traveled with Gerasimos and it has been a very pleasant experience. He is careful driving, so that is a plus, but on top of that, he is an interesting person and his music es excelent. He made my trip very enjoyable, without a doubt, I recommend it, and I'll call him for my next trips:). He also acted as a guide for me, explaining interesting things about the country.",
    },
    {
      image: '/images/reviews/igrid.png',
      name: 'Ingrid Bozin',
      text: 'HELICRO transport is the best door-to-door transport service I ever used. The owner is extremly professional and responsive, yet very human and attentive to particular needs. The cars/vans are of high standard and the communication is flawless. I can certainly recommend it to anyone.',
    },
    {
      image: '/images/reviews/ivana.png',
      name: 'Ivana Rudic Burcul',
      text: 'Very kind and professional. They provided a solution for a transfer from CRL airport to Brussels even the flight was delayed for few hours.',
    },
    {
      image: '/images/reviews/elisa.png',
      name: 'Elisa Aonzo',
      text: 'I use Helicro to get to and from Charleroi Airport. Gerasimos is the most professional driver in Brussels. Always on time and with good quality vehicles.',
    }
  ];

  const googleMapsUrl = "https://www.google.com/maps/place/HELICRO/@50.0072592,-6.0689942,5z/data=!4m10!1m2!2m1!1shelicro+!3m6!1s0x26d17fb3b86916b3:0x462f2f27ae22f5b1!8m2!3d50.501038!4d4.4661!15sCgdoZWxpY3JvWgkiB2hlbGljcm-SARZ0cmFuc3BvcnRhdGlvbl9zZXJ2aWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU51Tmt4SUxXaEJSUkFC4AEA-gEECCQQLQ!16s%2Fg%2F11y54kmssb?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '1440px' }}>
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          {ui.title}
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
          {ui.subtitle}
        </p>

        {/* Review Invite Block */}
        <div 
          style={{ 
            background: 'var(--accent)', 
            color: 'var(--primary-dark)', 
            padding: '24px', 
            borderRadius: 'var(--radius-lg)', 
            maxWidth: '560px', 
            margin: '0 auto 50px auto',
            textAlign: 'center',
            boxShadow: 'var(--shadow)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <p style={{ fontWeight: 600, fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
            {ui.invite}
          </p>
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ 
              background: 'var(--primary-dark)', 
              color: '#ffffff',
              display: 'inline-flex',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: 700,
              gap: '6px'
            }}
          >
            <span>{ui.btn}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </a>
        </div>

        {/* Reviews Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}
        >
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
    </div>
  );
}
