import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticle from '@/components/BlogArticle';
import { blogArticlesFor, blogPath, getBlogArticle } from '@/config/blogArticles';
import { pageMetadata } from '@/lib/seo';

const LANG = 'fr' as const;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticlesFor(LANG).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug, LANG);
  if (!article) return {};
  return pageMetadata({
    lang: LANG,
    title: `${article.title} | Helicro Blog`,
    description: article.excerpt,
    alternates: { [LANG]: blogPath(article), ...(article.alternates ?? {}) },
    image: article.image,
    type: 'article',
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug, LANG);
  if (!article) notFound();
  return <BlogArticle article={article} />;
}
