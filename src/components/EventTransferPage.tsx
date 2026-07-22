'use client';

import React from 'react';
import Link from 'next/link';
import ServiceTemplate from '@/components/ServiceTemplate';
import EventQuoteCTA, { EventType } from '@/components/EventQuoteCTA';
import styles from './EventTransferPage.module.css';

export type EventLang = 'en' | 'nl' | 'fr';

export interface EventFaq {
  question: string;
  answer: string;
}

export interface EventFeature {
  title: string;
  text: string;
}

export interface EventCard {
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

export interface PackageRow {
  name: string;
  idealFor: string;
  includes: string;
}

export interface EventTransferContent {
  title: string;
  intro: string[];
  whyTitle: string;
  features: EventFeature[];
  sectionTitle?: string;
  cards?: EventCard[];
  packagesTitle?: string;
  packageHeaders?: [string, string, string];
  packages?: PackageRow[];
  packageBlocks?: { title: string; bullets: string[] }[];
  timesTitle?: string;
  times?: string[];
  timesNote?: string;
  faqTitle: string;
  faqs: EventFaq[];
  ctaTitle: string;
  ctaText: string;
  relatedTitle?: string;
  related?: { href: string; label: string }[];
  defaultEvent: EventType;
  img: string;
}

function localizePath(path: string, lang: EventLang) {
  if (lang === 'en') return path;
  return `/${lang}${path}`;
}

export default function EventTransferPage({
  lang,
  content,
}: {
  lang: EventLang;
  content: EventTransferContent;
}) {
  return (
    <div className="section">
      <ServiceTemplate img={content.img} title={content.title}>
        <div className={styles.eventPage}>
          {content.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h2>{content.whyTitle}</h2>
          <ul className={styles.featureList}>
            {content.features.map((f, i) => (
              <li key={i}>
                <strong>{f.title}</strong>: {f.text}
              </li>
            ))}
          </ul>

          {content.sectionTitle && content.cards && (
            <>
              <h2>{content.sectionTitle}</h2>
              {content.cards.map((card, i) => (
                <div className={styles.eventCard} key={i}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  {card.href && card.linkLabel && (
                    <Link href={localizePath(card.href, lang)}>{card.linkLabel}</Link>
                  )}
                </div>
              ))}
            </>
          )}

          {content.packagesTitle && content.packages && content.packageHeaders && (
            <>
              <h2>{content.packagesTitle}</h2>
              <table className={styles.packageTable}>
                <thead>
                  <tr>
                    <th>{content.packageHeaders[0]}</th>
                    <th>{content.packageHeaders[1]}</th>
                    <th>{content.packageHeaders[2]}</th>
                  </tr>
                </thead>
                <tbody>
                  {content.packages.map((row, i) => (
                    <tr key={i}>
                      <td>
                        <strong>{row.name}</strong>
                      </td>
                      <td>{row.idealFor}</td>
                      <td>{row.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {content.packagesTitle && content.packageBlocks && (
            <>
              <h2>{content.packagesTitle}</h2>
              {content.packageBlocks.map((block, i) => (
                <div key={i}>
                  <h3>
                    {i + 1}. {block.title}
                  </h3>
                  <ul>
                    {block.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}

          {content.timesTitle && content.times && (
            <>
              <h2>{content.timesTitle}</h2>
              <ul>
                {content.times.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              {content.timesNote && <p className={styles.note}>{content.timesNote}</p>}
            </>
          )}

          {content.related && content.related.length > 0 && (
            <>
              <h2>{content.relatedTitle || 'Related services'}</h2>
              <div className={styles.relatedLinks}>
                {content.related.map((r, i) => (
                  <Link key={i} href={localizePath(r.href, lang)}>
                    {r.label}
                  </Link>
                ))}
              </div>
            </>
          )}

          <h2>{content.faqTitle}</h2>
          {content.faqs.map((faq, i) => (
            <div className={styles.faqItem} key={i}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}

          <h2>{content.ctaTitle}</h2>
          <p>{content.ctaText}</p>

          <EventQuoteCTA lang={lang} defaultEvent={content.defaultEvent} />
        </div>
      </ServiceTemplate>
    </div>
  );
}
