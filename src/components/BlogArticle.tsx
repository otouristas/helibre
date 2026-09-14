import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import EventQuoteCTA from '@/components/EventQuoteCTA';
import GoogleReviews from '@/components/GoogleReviews';
import { blogPath, type BlogArticle as Article } from '@/config/blogArticles';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import type { Locale } from '@/lib/seo';

const LABELS: Record<Locale, { blog: string; faq: string; home: string; more: string }> = {
  en: { blog: 'Blog', faq: 'Frequently asked questions', home: 'Home', more: 'More guides' },
  nl: { blog: 'Blog', faq: 'Veelgestelde vragen', home: 'Home', more: 'Meer gidsen' },
  fr: { blog: 'Blog', faq: 'Questions fréquentes', home: 'Accueil', more: 'Plus de guides' },
  el: { blog: 'Blog', faq: 'Συχνές ερωτήσεις', home: 'Αρχική', more: 'Περισσότεροι οδηγοί' },
  hr: { blog: 'Blog', faq: 'Česta pitanja', home: 'Početna', more: 'Više vodiča' },
};

function renderContent(content: string[]) {
  const out: React.ReactNode[] = [];
  let bullets: string[] = [];
  const flush = (key: string) => {
    if (bullets.length) {
      out.push(
        <ul key={key} style={{ paddingLeft: 22, marginBottom: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      );
      bullets = [];
    }
  };
  content.forEach((p, i) => {
    if (p.startsWith('- ')) {
      bullets.push(p.slice(2));
      return;
    }
    flush(`ul-${i}`);
    if (p.startsWith('## ')) {
      out.push(
        <h2 key={i} style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-dark)', margin: '28px 0 12px' }}>
          {p.slice(3)}
        </h2>
      );
    } else {
      out.push(
        <p key={i} style={{ marginBottom: 18 }}>
          {p}
        </p>
      );
    }
  });
  flush('ul-end');
  return out;
}

export default function BlogArticle({ article }: { article: Article }) {
  const lang = article.lang;
  const t = LABELS[lang];
  const path = blogPath(article);
  const blogHub = lang === 'en' ? '/en/blog' : `/${lang}/blog`;
  const defaultEvent = article.slug.includes('tomorrowland') ? 'tomorrowland' : article.slug.includes('spa') ? 'spa_f1' : 'general';
  const eventLang = (['en', 'nl', 'fr'] as const).includes(lang as 'en' | 'nl' | 'fr') ? (lang as 'en' | 'nl' | 'fr') : 'en';

  const schema: Record<string, unknown>[] = [
    articleSchema({ headline: article.title, description: article.excerpt, url: path, datePublished: article.datePublished, dateModified: article.dateModified, lang, image: article.image }),
    breadcrumbSchema([
      { name: t.home, url: lang === 'en' ? '/' : `/${lang}` },
      { name: t.blog, url: blogHub },
      { name: article.title, url: path },
    ]),
  ];
  if (article.faqs?.length) schema.push(faqSchema(article.faqs));

  return (
    <>
      <JsonLd data={schema} />
      <div className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>
            <Link href={blogHub}>{t.blog}</Link>
            {' / '}
            <span>{article.category}</span>
          </p>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-dark)', lineHeight: 1.25, marginBottom: 12 }}>{article.title}</h1>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20 }}>
            {article.date} · {article.readTime} · Gerasimos, Helicro Transport
          </p>
          {article.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={article.image} alt={article.title} width={1200} height={300} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 'var(--radius)', marginBottom: 24 }} />
          )}
          <div style={{ fontSize: 16.5, lineHeight: 1.85, color: 'var(--text-secondary)' }}>
            <p style={{ fontSize: 18, color: 'var(--text-primary)', background: '#f1f7ff', borderLeft: '4px solid var(--primary)', padding: '14px 18px', borderRadius: 'var(--radius-sm)', marginBottom: 20 }}>
              {article.excerpt}
            </p>
            {renderContent(article.content)}
          </div>

          {article.faqs && article.faqs.length > 0 && (
            <section style={{ marginTop: 28 }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: 12 }}>{t.faq}</h2>
              {article.faqs.map((f, i) => (
                <details key={i} open={i === 0} style={{ border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', background: '#fff', marginBottom: 10, padding: '0 16px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--primary-dark)', padding: '14px 0' }}>{f.question}</summary>
                  <p style={{ paddingBottom: 14, margin: 0, color: 'var(--text-secondary)' }}>{f.answer}</p>
                </details>
              ))}
            </section>
          )}

          <p style={{ marginTop: 28, marginBottom: 8 }}>
            <Link href={article.ctaHref} style={{ fontWeight: 700, color: 'var(--primary-dark)', fontSize: 17 }}>
              {article.ctaLabel}
            </Link>
          </p>
          <EventQuoteCTA lang={eventLang} defaultEvent={defaultEvent} />
          <GoogleReviews lang={lang} variant="strip" limit={4} />
        </div>
      </div>
    </>
  );
}
