'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLangFromPath, translations } from '@/config/translations';
import styles from './MobileDrawer.module.css';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  const lang = getLangFromPath(pathname);
  const t = translations[lang];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' || pathname === '/nl' || pathname === '/fr' || pathname === '/el'
        ? `${styles.link} ${styles.active}`
        : styles.link;
    }
    return pathname.includes(path) ? `${styles.link} ${styles.active}` : styles.link;
  };

  const isServiceActive = (path: string) => {
    return pathname.includes(path) ? `${styles.serviceLink} ${styles.serviceActive}` : styles.serviceLink;
  };

  const isLangActive = (langPrefix: string) => {
    if (langPrefix === 'en') {
      return !pathname.startsWith('/nl') && !pathname.startsWith('/fr') && !pathname.startsWith('/el')
        ? `${styles.langBtn} ${styles.langBtnActive}`
        : styles.langBtn;
    }
    return pathname.startsWith(`/${langPrefix}`) ? `${styles.langBtn} ${styles.langBtnActive}` : styles.langBtn;
  };

  // Helper to localize link paths
  const localizePath = (path: string) => {
    if (lang === 'en') return path;
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} 
        onClick={onClose} 
      />

      {/* Slide-out Drawer */}
      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.header}>
          <img src="/images/logo-2.png" alt="Helicro Logo" className={styles.logo} />
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Language Grid */}
        <div className={styles.sectionTitle}>Select Language</div>
        <div className={styles.langGrid}>
          <Link href="/" className={isLangActive('en')} onClick={onClose}>EN</Link>
          <Link href="/nl" className={isLangActive('nl')} onClick={onClose}>NL</Link>
          <Link href="/fr" className={isLangActive('fr')} onClick={onClose}>FR</Link>
          <Link href="/el" className={isLangActive('el')} onClick={onClose}>EL</Link>
          <Link href="/hr" className={isLangActive('hr')} onClick={onClose}>HR</Link>
        </div>

        <div className={styles.divider} />

        <nav className={styles.list}>
          <Link href={localizePath('/')} className={isActive('/')} onClick={onClose}>
            {t.home}
          </Link>
          <Link href={localizePath('/pricing')} className={isActive('/pricing')} onClick={onClose}>
            {t.pricing}
          </Link>
          <Link href={localizePath('/about-us')} className={isActive('/about-us')} onClick={onClose}>
            {t.aboutUs}
          </Link>
          <Link href={localizePath('/reviews')} className={isActive('/reviews')} onClick={onClose}>
            {t.reviews}
          </Link>
          <Link href={localizePath('/fleet')} className={isActive('/fleet')} onClick={onClose}>
            {t.fleet}
          </Link>
          <Link href={localizePath('/faq')} className={isActive('/faq')} onClick={onClose}>
            {t.faq}
          </Link>
          <Link href={localizePath('/contact')} className={isActive('/contact')} onClick={onClose}>
            {t.contact}
          </Link>
          
          <div className={styles.divider} />
          
          <div className={styles.sectionTitle}>{t.services}</div>
          <div className={styles.servicesList}>
            <Link href={localizePath('/services/sightseeing')} className={isServiceActive('/services/sightseeing')} onClick={onClose}>
              {t.sightseeing}
            </Link>
            <Link href={localizePath('/services/airport')} className={isServiceActive('/services/airport')} onClick={onClose}>
              {t.airportTransfers}
            </Link>
            <Link href={localizePath('/services/corporate')} className={isServiceActive('/services/corporate')} onClick={onClose}>
              {t.corporateShuttle}
            </Link>
            <Link href={localizePath('/services/parcel')} className={isServiceActive('/services/parcel')} onClick={onClose}>
              {t.parcelDelivery}
            </Link>
            <Link href={localizePath('/services/events')} className={isServiceActive('/services/events')} onClick={onClose}>
              {t.eventTransport}
            </Link>
          </div>
        </nav>

        <div className={styles.footer}>
          <div className={styles.divider} />
          
          <a href="tel:+32472358805" className={styles.contactInfo}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>🇧🇪 +32 472 35 88 05</span>
          </a>
          <a href="tel:+306974581706" className={styles.contactInfo}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>🇬🇷 +30 697 458 1706</span>
          </a>
          
          <a 
            href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            onClick={onClose}
          >
            <span>{t.bookOnline}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}
