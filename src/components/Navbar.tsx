'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLangFromPath, translations } from '@/config/translations';
import styles from './Navbar.module.css';

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

export default function Navbar({ onOpenMobileMenu }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const lang = getLangFromPath(pathname);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' || pathname === '/nl' || pathname === '/fr' || pathname === '/el'
        ? `${styles.navItem} ${styles.active}`
        : styles.navItem;
    }
    return pathname.includes(path) ? `${styles.navItem} ${styles.active}` : styles.navItem;
  };

  const isLangActive = (langPrefix: string) => {
    if (langPrefix === 'en') {
      return !pathname.startsWith('/nl') && !pathname.startsWith('/fr') && !pathname.startsWith('/el')
        ? `${styles.langLink} ${styles.langActive}`
        : styles.langLink;
    }
    return pathname.startsWith(`/${langPrefix}`) ? `${styles.langLink} ${styles.langActive}` : styles.langLink;
  };

  // Helper to localize link paths
  const localizePath = (path: string) => {
    if (lang === 'en') return path;
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  return (
    <div className={styles.headerWrapper}>
      {/* 1. Slim Topbar */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <div className={styles.topbarContacts}>
            <a href="tel:+32472358805" className={styles.topbarLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>🇧🇪 +32 472 35 88 05</span>
            </a>
            <a href="tel:+306974581706" className={styles.topbarLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>🇬🇷 +30 697 458 1706</span>
            </a>
            <a href="mailto:helicrotransport@gmail.com" className={styles.topbarLink}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>helicrotransport@gmail.com</span>
            </a>
          </div>
          
          <div className={styles.topbarLanguages}>
            <Link href="/" className={isLangActive('en')}>EN</Link>
            <Link href="/nl" className={isLangActive('nl')}>NL</Link>
            <Link href="/fr" className={isLangActive('fr')}>FR</Link>
            <Link href="/el" className={isLangActive('el')}>EL</Link>
            <Link href="/hr" className={isLangActive('hr')}>HR</Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar */}
      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo emblem */}
          <Link href={localizePath('/')} className={styles.logo}>
            <img src="/images/logo-2.png" alt="Helicro Logo" className={styles.logoImg} />
          </Link>

          {/* Hamburger menu */}
          <button className={styles.hamburger} onClick={onOpenMobileMenu} aria-label="Open navigation menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <span>Menu</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className={styles.navLinks}>
            <Link href={localizePath('/')} className={isActive('/')}>{t.home}</Link>
            <Link href={localizePath('/pricing')} className={isActive('/pricing')}>{t.pricing}</Link>
            <Link href={localizePath('/about-us')} className={isActive('/about-us')}>{t.aboutUs}</Link>
            <Link href={localizePath('/reviews')} className={isActive('/reviews')}>{t.reviews}</Link>
            
            {/* Services Dropdown */}
            <div className={styles.dropdownContainer}>
              <span className={`${styles.navItem} ${pathname.includes('/services') || pathname.includes('/day-trip') ? styles.active : ''} flex items-center`}>
                {t.services}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
              <div className={styles.dropdown}>
                <Link href={localizePath('/services/sightseeing')} className={styles.dropdownItem}>{t.sightseeing}</Link>
                <Link href={localizePath('/services/airport')} className={styles.dropdownItem}>{t.airportTransfers}</Link>
                <Link href={localizePath('/services/corporate')} className={styles.dropdownItem}>{t.corporateShuttle}</Link>
                <Link href={localizePath('/services/parcel')} className={styles.dropdownItem}>{t.parcelDelivery}</Link>
                <Link href={localizePath('/services/event-transfers')} className={styles.dropdownItem}>{t.eventTransfers}</Link>
                <Link href={localizePath('/services/events')} className={styles.dropdownItem}>{t.eventTransport}</Link>
              </div>
            </div>

            <Link href={localizePath('/fleet')} className={isActive('/fleet')}>{t.fleet}</Link>
            <Link href={localizePath('/faq')} className={isActive('/faq')}>{t.faq}</Link>
            <Link href={localizePath('/contact')} className={isActive('/contact')}>{t.contact}</Link>
          </nav>

          {/* Right section: Booking CTA button */}
          <div className={styles.rightSection}>
            <a 
              href="https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <span>{t.bookOnline}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
