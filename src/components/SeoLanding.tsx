import React from 'react';
import Link from 'next/link';
import FareCalculator from '@/components/FareCalculator';
import ServiceRequest from '@/components/ServiceRequest';
import JsonLd from '@/components/JsonLd';
import GoogleReviews from '@/components/GoogleReviews';
import { airportSchema, breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { LOCALES, LOCALE_NAMES, type Locale } from '@/lib/seo';
import { UI } from '@/lib/seoContent/shared';
import type { SeoLandingContent, SeoSection } from '@/lib/seoContent/types';
import styles from './SeoLanding.module.css';

const WA = 'https://wa.me/32472358805';
const BOOK = 'https://forms.clickup.com/9015129384/f/8cnfx98-175/SKJIT18IKSAAZXY7UM';

const CTA_LABELS: Record<Locale, { wa: string; book: string }> = {
  en: { wa: 'WhatsApp a quote request', book: 'Book online' },
  nl: { wa: 'Offerte via WhatsApp', book: 'Online boeken' },
  fr: { wa: 'Devis via WhatsApp', book: 'Réserver en ligne' },
  el: { wa: 'Προσφορά μέσω WhatsApp', book: 'Online κράτηση' },
  hr: { wa: 'Ponuda putem WhatsAppa', book: 'Rezerviraj online' },
};

function Section({ s }: { s: SeoSection }) {
  return (
    <section>
      <h2 className={styles.h2}>{s.h2}</h2>
      {s.paragraphs?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {s.steps && (
        <div className={styles.steps}>
          {s.steps.map((st, i) => (
            <div className={styles.step} key={i}>
              <strong>{st.title}</strong>
              <span>{st.text}</span>
            </div>
          ))}
        </div>
      )}
      {s.bullets && (
        <ul className={styles.ul}>
          {s.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {s.table && (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {s.table.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td key={j}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {s.table.caption && <div className={styles.caption}>{s.table.caption}</div>}
        </div>
      )}
    </section>
  );
}

/**
 * Server-rendered SEO landing page: answer-first lead, structured sections, FAQ with schema,
 * hub/sibling/cross-language links and a sticky quote sidebar.
 */
export default function SeoLanding({ content, children }: { content: SeoLandingContent; children?: React.ReactNode }) {
  const c = content;
  const ui = UI[c.lang];
  const cta = CTA_LABELS[c.lang];
  const otherLangs = LOCALES.filter((l) => l !== c.lang && c.alternates[l]);

  const schema: Record<string, unknown>[] = [
    breadcrumbSchema(c.breadcrumbs),
    serviceSchema({
      name: c.schema.serviceName,
      description: c.description,
      serviceType: c.schema.serviceType,
      url: c.url,
      areaServed: c.schema.areaServed,
      offers: c.schema.offers,
      lang: c.lang,
    }),
    faqSchema(c.faqs),
  ];
  if (c.schema.airport) schema.push(airportSchema(c.schema.airport));

  return (
    <div className="section">
      <div className="container">
        <JsonLd data={schema} />
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          {c.breadcrumbs.map((b, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span>/</span>}
              {i < c.breadcrumbs.length - 1 ? <Link href={b.url}>{b.name}</Link> : <span>{b.name}</span>}
            </React.Fragment>
          ))}
        </nav>

        <h1 className={styles.h1}>{c.h1}</h1>

        <div className={styles.wrap}>
          <article className={styles.body}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt={c.h1} className={styles.hero} width={1200} height={260} loading="eager" />
            <p className={styles.lead}>{c.lead}</p>
            {c.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {c.sections.map((s, i) => (
              <Section s={s} key={i} />
            ))}

            {children}

            <GoogleReviews lang={c.lang} variant="strip" limit={4} />

            <h2 className={styles.h2}>{ui.faq}</h2>
            {c.faqs.map((f, i) => (
              <details className={styles.faq} key={i} open={i < 2}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}

            <div className={styles.cta}>
              <h2>{c.cta.headline}</h2>
              <p>{c.cta.text}</p>
              <div className={styles.ctaBtns}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                  {cta.wa}
                </a>
                <a href={BOOK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtnAlt}>
                  {cta.book}
                </a>
              </div>
            </div>

            {c.related.length > 0 && (
              <div className={styles.related}>
                {c.related.map((g, i) => (
                  <div className={styles.relatedGroup} key={i}>
                    <h3>{g.title}</h3>
                    {g.links.map((l, j) => (
                      <Link href={l.href} key={j}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {otherLangs.length > 0 && (
              <p className={styles.langs}>
                {ui.otherLanguages}:{' '}
                {otherLangs.map((l) => (
                  <Link href={c.alternates[l]!} key={l} hrefLang={l}>
                    {LOCALE_NAMES[l]}
                  </Link>
                ))}
              </p>
            )}
          </article>

          <aside className={styles.sidebar}>
            <FareCalculator />
            <ServiceRequest />
          </aside>
        </div>
      </div>
    </div>
  );
}
