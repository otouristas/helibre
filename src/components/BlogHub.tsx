import React from 'react';
import Link from 'next/link';
import GoogleReviews from '@/components/GoogleReviews';
import { blogArticlesFor, blogPath } from '@/config/blogArticles';
import type { Locale } from '@/lib/seo';

const LABELS: Record<Locale, { h1: string; intro: string; read: string }> = {
  en: { h1: 'Helicro blog: airport, festival and day-trip guides for Belgium', intro: 'Practical guides written by the driver who does these routes every week: how to get to and from Brussels and Charleroi airports, what things really cost, and how to plan festival and race weekends.', read: 'Read the guide' },
  nl: { h1: 'Helicro blog: gidsen over luchthavenvervoer en reizen in België', intro: 'Praktische gidsen van de chauffeur die deze ritten elke week rijdt: hoe u naar Zaventem en Charleroi geraakt, wat het echt kost en hoe u festivals en dagtochten plant.', read: 'Lees de gids' },
  fr: { h1: 'Blog Helicro : guides navettes aéroport et voyages en Belgique', intro: 'Des guides pratiques rédigés par le chauffeur qui fait ces trajets chaque semaine : comment rejoindre Zaventem et Charleroi, ce que ça coûte vraiment, et comment organiser festivals et excursions.', read: 'Lire le guide' },
  el: { h1: 'Helicro blog', intro: 'Οδηγοί για μεταφορές αεροδρομίου και ταξίδια στο Βέλγιο.', read: 'Διαβάστε' },
  hr: { h1: 'Helicro blog', intro: 'Vodiči za transfere do zračne luke i putovanja po Belgiji.', read: 'Pročitajte' },
};

export default function BlogHub({ lang }: { lang: Locale }) {
  const t = LABELS[lang];
  const articles = blogArticlesFor(lang);
  return (
    <div className="section">
      <div className="container">
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          {t.h1}
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">{t.intro}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {articles.map((a) => (
            <article key={a.slug} style={{ background: '#fff', border: '1px solid var(--card-border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
              {a.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={a.image} alt={a.title} width={600} height={180} style={{ width: '100%', height: 180, objectFit: 'cover' }} loading="lazy" />
              )}
              <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1 }}>
                <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--primary-light)' }}>{a.category}</span>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--primary-dark)', lineHeight: 1.3 }}>
                  <Link href={blogPath(a)}>{a.title}</Link>
                </h2>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1 }}>{a.excerpt}</p>
                <p style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>
                  {a.date} · {a.readTime}
                </p>
                <Link href={blogPath(a)} style={{ fontWeight: 700, color: 'var(--primary-light)', fontSize: 14 }}>
                  {t.read} →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <GoogleReviews lang={lang} variant="strip" limit={4} />
        </div>
      </div>
    </div>
  );
}
