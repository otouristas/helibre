import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import EventQuoteCTA from '@/components/EventQuoteCTA';
import { blogArticles, getBlogArticle } from '@/config/blogArticles';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) {
    return { title: 'Article | Helicro Blog' };
  }
  return {
    title: `${article.title} | Helicro Blog`,
    description: article.excerpt,
    alternates: {
      canonical: `https://helicro.be/en/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://helicro.be/en/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.datePublished,
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  const defaultEvent =
    article.slug.includes('tomorrowland')
      ? 'tomorrowland'
      : article.slug.includes('spa')
        ? 'spa_f1'
        : 'general';

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: article.title,
            description: article.excerpt,
            url: `/en/blog/${article.slug}`,
            datePublished: article.datePublished,
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/en/blog' },
            { name: article.title, url: `/en/blog/${article.slug}` },
          ]),
        ]}
      />
      <div className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>
            <Link href="/en/blog">Blog</Link>
            {' / '}
            <span>{article.category}</span>
          </p>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--primary-dark)',
              lineHeight: 1.25,
              marginBottom: 12,
            }}
          >
            {article.title}
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 28 }}>
            {article.date} · {article.readTime}
          </p>
          <div style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-secondary)' }}>
            {article.content.map((p, i) => (
              <p key={i} style={{ marginBottom: 18 }}>
                {p}
              </p>
            ))}
          </div>
          <p style={{ marginTop: 28, marginBottom: 8 }}>
            <Link
              href={article.ctaHref}
              style={{ fontWeight: 700, color: 'var(--primary-dark)', fontSize: 17 }}
            >
              {article.ctaLabel}
            </Link>
          </p>
          <EventQuoteCTA lang="en" defaultEvent={defaultEvent} />
        </div>
      </div>
    </>
  );
}
