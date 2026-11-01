'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRUSSELS_AIRPORT_NAV } from '@/config/hubLinks';
import { MOBILE_MENU_COPY, type MenuFacts } from '@/config/mobileMenu';
import { AIRPORT_BOOKING_URL, getLangFromPath, isPriceListPath, OTHER_SERVICES_BOOKING_URL, priceListHref, translations } from '@/config/translations';
import styles from './MobileDrawer.module.css';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  facts: MenuFacts;
}

type BadgeTone = 'accent' | 'price' | 'rating' | 'muted' | 'live';

interface MenuRow {
  href: string;
  label: string;
  active: boolean;
  badge?: { text: string; tone: BadgeTone };
}

interface MenuGroup {
  title?: string;
  rows: MenuRow[];
}

const LANGS = [
  { code: 'en', href: '/' },
  { code: 'nl', href: '/nl' },
  { code: 'fr', href: '/fr' },
  { code: 'el', href: '/el' },
  { code: 'hr', href: '/hr' },
] as const;

const PHONE_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function MobileDrawer({ isOpen, onClose, facts }: MobileDrawerProps) {
  const pathname = usePathname();

  const lang = getLangFromPath(pathname);
  const t = translations[lang];
  const m = MOBILE_MENU_COPY[lang];
  const brusselsAirportNav = BRUSSELS_AIRPORT_NAV[lang];

  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  const localizePath = (path: string) => {
    if (lang === 'en') return path;
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  const isHome = ['/', '/nl', '/fr', '/el', '/hr'].includes(pathname);
  const isOn = (path: string) => pathname.includes(path);
  const isLangActive = (code: string) =>
    code === 'en' ? !/^\/(nl|fr|el|hr)(\/|$)/.test(pathname) : new RegExp(`^/${code}(/|$)`).test(pathname);

  const rating = facts.rating.toLocaleString(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  const groups: MenuGroup[] = [
    {
      rows: [{ href: localizePath('/'), label: t.home, active: isHome }],
    },
    {
      title: t.pricing,
      rows: [
        { href: localizePath('/pricing'), label: t.ratesOverview, active: isOn('/pricing'), badge: { text: m.badgeInstant, tone: 'muted' } },
        { href: priceListHref(lang), label: t.priceList, active: isPriceListPath(pathname), badge: { text: '2026', tone: 'muted' } },
      ],
    },
    {
      title: t.services,
      rows: [
        { href: localizePath('/services/airport'), label: t.airportTransfers, active: isOn('/services/airport'), badge: { text: m.badgePopular, tone: 'accent' } },
        ...(brusselsAirportNav
          ? [{ href: brusselsAirportNav.href, label: brusselsAirportNav.label, active: isOn(brusselsAirportNav.href), badge: { text: m.badgeFrom(facts.airportFrom), tone: 'price' as const } }]
          : []),
        { href: localizePath('/services/sightseeing'), label: t.sightseeing, active: isOn('/services/sightseeing') },
        { href: localizePath('/services/corporate'), label: t.corporateShuttle, active: isOn('/services/corporate') },
        { href: localizePath('/services/event-transfers'), label: t.eventTransfers, active: isOn('/services/event-transfers') },
        { href: localizePath('/services/events'), label: t.eventTransport, active: isOn('/services/events') },
        { href: localizePath('/services/parcel'), label: t.parcelDelivery, active: isOn('/services/parcel') },
      ],
    },
    {
      title: m.groupCompany,
      rows: [
        { href: localizePath('/reviews'), label: t.reviews, active: isOn('/reviews'), badge: { text: `★ ${rating}`, tone: 'rating' } },
        { href: localizePath('/fleet'), label: t.fleet, active: isOn('/fleet'), badge: { text: m.badgeSeats, tone: 'muted' } },
        { href: localizePath('/about-us'), label: t.aboutUs, active: isOn('/about-us') },
        { href: localizePath('/faq'), label: t.faq, active: isOn('/faq') },
        { href: localizePath('/contact'), label: t.contact, active: isOn('/contact'), badge: { text: '24/7', tone: 'live' } },
      ],
    },
  ];

  const indicators = [
    { value: `★ ${rating}`, label: m.reviewsLabel(facts.reviewCount), href: localizePath('/reviews') },
    { value: m.badgeFrom(facts.airportFrom), label: m.fixedFromLabel, href: priceListHref(lang) },
    { value: m.freeWaitValue(facts.waitSchengen), label: m.freeWaitLabel, href: localizePath('/pricing') },
    { value: '0€', label: m.childSeatsLabel, href: localizePath('/fleet') },
  ];

  // Running index across groups, used for the staggered row entrance.
  const groupOffsets = groups.map((_, gi) => groups.slice(0, gi).reduce((n, g) => n + g.rows.length, 0));

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.menu}
        inert={!isOpen}
      >
        {/* Header */}
        <div className={styles.header}>
          <Link href={localizePath('/')} onClick={onClose} className={styles.logoLink}>
            <img src="/images/logo-2.png" alt={t.logoAlt} className={styles.logo} />
          </Link>
          <span className={styles.livePill}>
            <span className={styles.liveDot} aria-hidden="true" />
            {m.available}
          </span>
          <button className={styles.closeBtn} onClick={onClose} aria-label={t.closeMenu}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.scroll}>
          {/* Marketing indicators, edge to edge */}
          <div className={styles.indicators}>
            {indicators.map((item) => (
              <Link key={item.label} href={item.href} className={styles.indicator} onClick={onClose}>
                <span className={styles.indicatorValue}>{item.value}</span>
                <span className={styles.indicatorLabel}>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Language switcher */}
          <div className={styles.langBar} role="group" aria-label={t.selectLanguage}>
            {LANGS.map(({ code, href }) => {
              const active = isLangActive(code);
              return (
                <Link
                  key={code}
                  href={href}
                  hrefLang={code}
                  className={`${styles.langBtn} ${active ? styles.langBtnActive : ''}`}
                  aria-current={active ? 'true' : undefined}
                  onClick={onClose}
                >
                  {code.toUpperCase()}
                </Link>
              );
            })}
          </div>

          {/* Navigation */}
          <nav className={styles.nav} aria-label={t.menu}>
            {groups.map((group, gi) => (
              <div key={group.title ?? `group-${gi}`} className={styles.group}>
                {group.title && <div className={styles.groupTitle}>{group.title}</div>}
                {group.rows.map((row, ri) => {
                  const i = groupOffsets[gi] + ri;
                  return (
                    <Link
                      key={row.href}
                      href={row.href}
                      className={`${styles.row} ${row.active ? styles.rowActive : ''}`}
                      aria-current={row.active ? 'page' : undefined}
                      onClick={onClose}
                      style={{ '--i': i } as React.CSSProperties}
                    >
                      <span className={styles.rowLabel}>{row.label}</span>
                      {row.badge && (
                        <span className={`${styles.badge} ${styles[`badge_${row.badge.tone}`]}`}>
                          {row.badge.tone === 'live' && <span className={styles.liveDot} aria-hidden="true" />}
                          {row.badge.text}
                        </span>
                      )}
                      <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>

        {/* Sticky footer: quick contact + booking */}
        <div className={styles.footer}>
          <div className={styles.quickBar}>
            <a href="tel:+32472358805" className={styles.quickBtn}>
              {PHONE_ICON}
              <span>🇧🇪 {m.call}</span>
            </a>
            <a href="tel:+306974581706" className={styles.quickBtn}>
              {PHONE_ICON}
              <span>🇬🇷 {m.call}</span>
            </a>
            <a href="https://wa.me/32472358805" target="_blank" rel="noopener noreferrer" className={`${styles.quickBtn} ${styles.quickBtnWa}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.23-4.25 9.46-9.47 9.46zm8.06-17.53A11.33 11.33 0 0 0 12.04.62C5.77.62.66 5.73.66 12c0 2 .52 3.96 1.52 5.69L.57 23.38l5.82-1.53a11.36 11.36 0 0 0 5.65 1.44h.01c6.27 0 11.38-5.11 11.38-11.38 0-3.04-1.18-5.9-3.33-8.05z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <a
            href={OTHER_SERVICES_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
            onClick={onClose}
          >
            <span>{t.bookOther}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href={AIRPORT_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
            onClick={onClose}
          >
            <span className={styles.ctaText}>
              <span className={styles.ctaTitle}>{t.bookAirport}</span>
              <span className={styles.ctaNote}>{m.ctaNote}</span>
            </span>
            <span className={styles.ctaArrow} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
