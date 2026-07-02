import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Helicro Blog | Belgian Travel and Transport Guides',
  description: 'Travel tips, airport guides, festival logistics and Belgian sightseeing stories from Helicro Transport.',
};

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
}

export default function BlogHub() {
  const articles: Article[] = [
    {
      title: 'How to get from Brussels Airport (BRU) to the City Centre in 2026',
      excerpt: 'Compare train, taxi, Uber and private minivan transfers for traveling between Zaventem airport and central Brussels addresses.',
      date: 'June 10, 2026',
      readTime: '5 min read',
      slug: '#',
      category: 'Airport Guides'
    },
    {
      title: 'Flibco vs Private Transfer: The Ultimate Brussels to Charleroi Comparison',
      excerpt: 'Is the shuttle bus really your best bet? We break down passenger comfort, hidden waiting times, and costs for groups traveling to Charleroi.',
      date: 'May 24, 2026',
      readTime: '6 min read',
      slug: '#',
      category: 'Charleroi Transfers'
    },
    {
      title: 'Tomorrowland 2026 VIP Group Transport & Shuttle Guide',
      excerpt: 'Everything you need to know about getting your festival group safely to Boom and back with return shuttle planning.',
      date: 'April 15, 2026',
      readTime: '4 min read',
      slug: '#',
      category: 'Festival Logistics'
    },
    {
      title: 'How to Navigate Brussels Airport Strikes Without Missing Your Flight',
      excerpt: 'Airport security strikes can disrupt travel. Learn how to secure priority private transfers and plan contingencies.',
      date: 'March 08, 2026',
      readTime: '5 min read',
      slug: '#',
      category: 'Travel Tips'
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          Helicro Travel Blog
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
          Expert travel tips, route planning, and logistics guides from our experienced drivers on the road.
        </p>

        {/* Blog post grids */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}
        >
          {articles.map((art, i) => (
            <article 
              key={i}
              style={{
                background: '#ffffff',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition)'
              }}
              className="blog-card"
            >
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span 
                  style={{ 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    color: 'var(--primary-light)', 
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '10px',
                    display: 'block'
                  }}
                >
                  {art.category}
                </span>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '12px', lineHeight: '1.3' }}>
                  {art.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', flexGrow: 1, marginBottom: '20px' }}>
                  {art.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--text-muted)', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                  <span>{art.date}</span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom CSS overrides for hover transition */}
        <style dangerouslySetInnerHTML={{__html: `
          .blog-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg) !important;
            border-color: rgba(0, 62, 113, 0.15) !important;
          }
        `}} />
      </div>
    </div>
  );
}
