import React from 'react';
import Link from 'next/link';
import { HUB_LINKS, HUB_SECTION_TITLE } from '@/config/hubLinks';
import type { Locale } from '@/lib/seo';

/** Hub-and-spoke link section for the home page: localized groups of landing pages. */
export default function HubLinks({ lang }: { lang: Locale }) {
  const groups = HUB_LINKS[lang];
  const t = HUB_SECTION_TITLE[lang];
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center text-3xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          {t.title}
        </h2>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">{t.subtitle}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {groups.map((g) => (
            <div key={g.title} style={{ background: '#f8fafc', border: '1px solid var(--card-border)', borderRadius: 'var(--radius)', padding: '20px 22px' }}>
              <h3 style={{ fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)', marginBottom: '12px' }}>
                {g.title}
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ color: 'var(--primary-light)', fontWeight: 600, fontSize: '14px' }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
