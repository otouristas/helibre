'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AVERAGE_RATING, GOOGLE_MAPS_URL, GOOGLE_WRITE_REVIEW_URL, REVIEW_COUNT, googleReviews, reviewsWithText, type GoogleReview } from '@/config/googleReviews';
import type { Locale } from '@/lib/seo';
import styles from './GoogleReviews.module.css';

type Variant = 'full' | 'grid' | 'strip';

const LABELS: Record<Locale, {
  title: string; basedOn: string; write: string; seeAll: string; more: string; less: string; ratingOnly: string; verified: string; allReviews: string;
}> = {
  en: { title: 'Google reviews', basedOn: 'Based on {n} Google reviews', write: 'Write a review', seeAll: 'See all reviews on Google', more: 'Read more', less: 'Show less', ratingOnly: 'Rated 5 stars on Google', verified: 'Google review', allReviews: 'Read all {n} reviews' },
  nl: { title: 'Google-beoordelingen', basedOn: 'Op basis van {n} Google-beoordelingen', write: 'Schrijf een beoordeling', seeAll: 'Alle beoordelingen op Google', more: 'Lees meer', less: 'Minder', ratingOnly: '5 sterren op Google', verified: 'Google-beoordeling', allReviews: 'Lees alle {n} beoordelingen' },
  fr: { title: 'Avis Google', basedOn: 'Basé sur {n} avis Google', write: 'Laisser un avis', seeAll: 'Tous les avis sur Google', more: 'Lire la suite', less: 'Réduire', ratingOnly: '5 étoiles sur Google', verified: 'Avis Google', allReviews: 'Lire les {n} avis' },
  el: { title: 'Κριτικές Google', basedOn: 'Με βάση {n} κριτικές στο Google', write: 'Γράψτε κριτική', seeAll: 'Όλες οι κριτικές στο Google', more: 'Περισσότερα', less: 'Λιγότερα', ratingOnly: '5 αστέρια στο Google', verified: 'Κριτική Google', allReviews: 'Διαβάστε και τις {n} κριτικές' },
  hr: { title: 'Google recenzije', basedOn: 'Na temelju {n} Google recenzija', write: 'Napišite recenziju', seeAll: 'Sve recenzije na Googleu', more: 'Pročitaj više', less: 'Prikaži manje', ratingOnly: '5 zvjezdica na Googleu', verified: 'Google recenzija', allReviews: 'Pročitajte svih {n} recenzija' },
};

const AVATAR_COLORS = ['#1a73e8', '#188038', '#d93025', '#f29900', '#7627bb', '#0b8043', '#e37400', '#c5221f', '#3c4043'];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <span className={styles.stars} aria-label={`${n} / 5`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} />
      ))}
    </span>
  );
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? '';
  const b = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (a + b).toUpperCase();
}

function colorFor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i += 1) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}

function ReviewCard({ r, lang, clamp }: { r: GoogleReview; lang: Locale; clamp: boolean }) {
  const [open, setOpen] = useState(false);
  const t = LABELS[lang];
  const long = (r.text?.length ?? 0) > 320;
  return (
    <article className={styles.card} lang={r.lang}>
      <div className={styles.cardHead}>
        <span className={styles.avatar} style={{ background: colorFor(r.name) }} aria-hidden="true">
          {initials(r.name)}
        </span>
        <div>
          <div className={styles.name}>{r.name}</div>
          <div className={styles.meta}>
            <GoogleG /> <span>{t.verified}</span>
          </div>
        </div>
      </div>
      <Stars n={r.stars} />
      {r.text ? (
        <>
          <p className={`${styles.text} ${clamp && long && !open ? styles.clamp : ''}`}>{r.text}</p>
          {clamp && long && (
            <button type="button" className={styles.more} onClick={() => setOpen((v) => !v)}>
              {open ? t.less : t.more}
            </button>
          )}
        </>
      ) : (
        <p className={styles.ratingOnly}>{t.ratingOnly}</p>
      )}
    </article>
  );
}

export function GoogleRatingBadge({ lang, small }: { lang: Locale; small?: boolean }) {
  const t = LABELS[lang];
  return (
    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${styles.brand} ${small ? styles.small : ''}`} aria-label={t.seeAll}>
      <GoogleG className={styles.gLogo} />
      <span className={styles.score}>
        <span className={styles.scoreNum}>{AVERAGE_RATING.toFixed(1)}</span>
        <Stars n={5} />
        <span className={styles.count}>
          <strong>{REVIEW_COUNT}</strong> {t.title}
        </span>
      </span>
    </a>
  );
}

/**
 * Google-branded reviews block.
 * - full: rating header + every review (text first, rating-only after)
 * - grid: rating header + first `limit` text reviews in a grid with a link to the reviews page
 * - strip: compact header + horizontally scrolling text reviews
 */
export default function GoogleReviews({ lang, variant = 'grid', limit = 6, reviewsHref }: { lang: Locale; variant?: Variant; limit?: number; reviewsHref?: string }) {
  const t = LABELS[lang];
  const preferred = reviewsWithText.filter((r) => r.lang === lang);
  const others = reviewsWithText.filter((r) => r.lang !== lang);
  const ordered = [...preferred, ...others];
  const list: GoogleReview[] = variant === 'full' ? [...ordered, ...googleReviews.filter((r) => !r.text)] : ordered.slice(0, limit);
  const href = reviewsHref ?? (lang === 'en' ? '/reviews' : `/${lang}/reviews`);

  return (
    <section className={styles.block} aria-label={t.title}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <GoogleG className={styles.gLogo} />
          <div>
            <div className={styles.score}>
              <span className={styles.scoreNum}>{AVERAGE_RATING.toFixed(1)}</span>
              <Stars n={5} />
            </div>
            <div className={styles.count}>{t.basedOn.replace('{n}', String(REVIEW_COUNT))}</div>
          </div>
        </div>
        <div className={styles.actions}>
          <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
            <GoogleG /> {t.write}
          </a>
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            {t.seeAll}
          </a>
        </div>
      </div>

      <div className={variant === 'strip' ? styles.strip : styles.grid}>
        {list.map((r) => (
          <ReviewCard r={r} lang={lang} key={r.reviewUrl} clamp={variant !== 'full'} />
        ))}
      </div>

      {variant !== 'full' && (
        <div className={styles.footer}>
          <Link href={href} className={styles.footerLink}>
            {t.allReviews.replace('{n}', String(REVIEW_COUNT))} →
          </Link>
        </div>
      )}
    </section>
  );
}
