'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLangFromPath, translations } from '@/config/translations';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const lang = getLangFromPath(pathname);
  const t = translations[lang];

  // Helper to localize link paths
  const localizePath = (path: string) => {
    if (lang === 'en') return path;
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Column 1: Brand description */}
        <div className={styles.col}>
          <img src="/images/logo-2.png" alt="Helicro Logo" className={styles.footerLogo} />
          <div className={styles.title}>Helicro Transport</div>
          <p className={styles.description}>
            {t.profileDesc}
          </p>
          <p className={styles.description} style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)' }}>
            {t.profileLang}
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.col}>
          <div className={styles.title}>{t.quickLinks}</div>
          <ul className={styles.list}>
            <li><Link href={localizePath('/')} className={styles.link}>{t.home}</Link></li>
            <li><Link href={localizePath('/pricing')} className={styles.link}>{t.pricing}</Link></li>
            <li><Link href={localizePath('/about-us')} className={styles.link}>{t.aboutUs}</Link></li>
            <li><Link href={localizePath('/reviews')} className={styles.link}>{t.reviews}</Link></li>
            <li><Link href={localizePath('/fleet')} className={styles.link}>{t.fleet}</Link></li>
            <li><Link href={localizePath('/faq')} className={styles.link}>{t.faq}</Link></li>
            <li><Link href={localizePath('/contact')} className={styles.link}>{t.contact}</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className={styles.col}>
          <div className={styles.title}>{t.services}</div>
          <ul className={styles.list}>
            <li><Link href={localizePath('/services/airport')} className={styles.link}>{t.airportTransfers}</Link></li>
            <li><Link href={localizePath('/services/sightseeing')} className={styles.link}>{t.sightseeing}</Link></li>
            <li><Link href={localizePath('/services/corporate')} className={styles.link}>{t.corporateShuttle}</Link></li>
            <li><Link href={localizePath('/services/parcel')} className={styles.link}>{t.parcelDelivery}</Link></li>
            <li><Link href={localizePath('/services/event-transfers')} className={styles.link}>{t.eventTransfers}</Link></li>
            <li><Link href={localizePath('/services/events')} className={styles.link}>{t.eventTransport}</Link></li>
          </ul>
        </div>

        {/* Column 4: Popular SEO landings */}
        <div className={styles.col}>
          <div className={styles.title}>{t.popularTransfers}</div>
          <ul className={styles.list}>
            <li><Link href="/en/airport-transfer/brussels-charleroi" className={styles.link}>Charleroi Airport (CRL)</Link></li>
            <li><Link href="/en/airport-transfer/lille" className={styles.link}>Lille Airport</Link></li>
            <li><Link href="/en/route/brussels-zaventem" className={styles.link}>Brussels ↔ Zaventem</Link></li>
            <li><Link href="/en/service-area" className={styles.link}>Service areas</Link></li>
            <li><Link href={localizePath('/services/event-transfers')} className={styles.link}>{t.eventTransfers}</Link></li>
            <li><Link href="/en/blog" className={styles.link}>Travel blog</Link></li>
          </ul>
        </div>

        {/* Column 5: Contact & Registration */}
        <div className={styles.col}>
          <div className={styles.title}>{t.contactRegistry}</div>
          
          <div className={styles.contactItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Braine-l&apos;Alleud, 1420<br />Walloon Brabant, Belgium</span>
          </div>

          <div className={styles.contactItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a href="tel:+32472358805" className={styles.contactLink}>🇧🇪 +32 472 35 88 05</a>
            <a href="tel:+306974581706" className={styles.contactLink} style={{ marginTop: '4px' }}>🇬🇷 +30 697 458 1706</a>
          </div>

          <div className={styles.contactItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:helicrotransport@gmail.com" className={styles.contactLink}>helicrotransport@gmail.com</a>
          </div>

          <div className={styles.contactItem} style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '8px' }}>
            <span>VAT ID: BE 0804.095.653<br />Helicro SRL</span>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          &copy; {currentYear} Helicro Transport. {t.copyright}
        </div>
        <div className={styles.bottomLinks}>
          <Link href="/" className={styles.bottomLink}>English</Link>
          <Link href="/nl" className={styles.bottomLink}>Nederlands</Link>
          <Link href="/fr" className={styles.bottomLink}>Français</Link>
          <Link href="/el" className={styles.bottomLink}>Ελληνικά</Link>
        </div>
      </div>
    </footer>
  );
}
