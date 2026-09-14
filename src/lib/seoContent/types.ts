import type { AlternateMap, Locale } from '@/lib/seo';
import type { AirportCode } from '@/config/seoFacts';

export interface SeoTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface SeoStep {
  title: string;
  text: string;
}

export interface SeoSection {
  h2: string;
  /** First paragraph should answer the H2 directly (answer-first for AI extraction). */
  paragraphs?: string[];
  bullets?: string[];
  table?: SeoTable;
  steps?: SeoStep[];
}

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoLink {
  href: string;
  label: string;
}

export interface SeoLinkGroup {
  title: string;
  links: SeoLink[];
}

export interface SeoOffer {
  name: string;
  price: number;
}

export interface SeoLandingContent {
  lang: Locale;
  url: string;
  type: string;
  title: string;
  description: string;
  h1: string;
  /** One or two sentences that fully answer the page intent. Rendered as the lead paragraph. */
  lead: string;
  intro: string[];
  sections: SeoSection[];
  faqs: SeoFaq[];
  breadcrumbs: { name: string; url: string }[];
  related: SeoLinkGroup[];
  alternates: AlternateMap;
  schema: {
    serviceName: string;
    serviceType: string;
    areaServed: { type: 'City' | 'Country'; name: string }[];
    airport?: AirportCode;
    offers?: SeoOffer[];
  };
  cta: { headline: string; text: string };
  image: string;
}
