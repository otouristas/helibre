import type { Metadata } from 'next';

export type Locale = 'en' | 'nl' | 'fr' | 'el' | 'hr';

export const LOCALES: Locale[] = ['en', 'nl', 'fr', 'el', 'hr'];
export const DEFAULT_LOCALE: Locale = 'en';
export const SITE_URL = 'https://helicro.be';
export const SITE_NAME = 'Helicro Transport';
export const DEFAULT_OG_IMAGE = '/images/brussels-must-see-travelstyle.jpg';

export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_BE',
  nl: 'nl_BE',
  fr: 'fr_BE',
  el: 'el_GR',
  hr: 'hr_HR',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands',
  fr: 'Français',
  el: 'Ελληνικά',
  hr: 'Hrvatski',
};

/** Prefix a locale-neutral path ('/pricing', '/') with the locale segment. English has no prefix. */
export function localizePath(path: string, lang: Locale): string {
  const clean = path === '/' ? '' : path;
  if (lang === 'en') return clean === '' ? '/' : clean;
  return `/${lang}${clean}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

/** Map of locale -> path for one piece of content. Only locales that really exist should be listed. */
export type AlternateMap = Partial<Record<Locale, string>>;

/** Alternates for a path that is mirrored 1:1 across locales (e.g. /pricing -> /nl/pricing). */
export function sharedPathAlternates(path: string, locales: Locale[] = LOCALES): AlternateMap {
  const map: AlternateMap = {};
  locales.forEach((l) => {
    map[l] = localizePath(path, l);
  });
  return map;
}

type LanguageMap = Partial<Record<Locale | 'x-default', string>>;

/** Convert an alternate map into Next.js metadata alternates: canonical + hreflang + x-default. */
export function buildAlternates(current: Locale, map: AlternateMap): NonNullable<Metadata['alternates']> {
  const languages: LanguageMap = {};
  (Object.keys(map) as Locale[]).forEach((l) => {
    const p = map[l];
    if (p) languages[l] = absoluteUrl(p);
  });
  const xDefault = map.en ?? map[current];
  if (xDefault) languages['x-default'] = absoluteUrl(xDefault);
  const canonicalPath = map[current];
  return {
    canonical: canonicalPath ? absoluteUrl(canonicalPath) : undefined,
    languages,
  };
}

export interface PageMetaInput {
  lang: Locale;
  title: string;
  description: string;
  /** Locale -> path map. Must include the current locale. */
  alternates: AlternateMap;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

/** Complete, consistent metadata for a page: title, description, canonical, hreflang, Open Graph, Twitter. */
export function pageMetadata(input: PageMetaInput): Metadata {
  const canonical = input.alternates[input.lang];
  const url = canonical ? absoluteUrl(canonical) : SITE_URL;
  const image = absoluteUrl(input.image ?? DEFAULT_OG_IMAGE);
  const og: NonNullable<Metadata['openGraph']> = {
    title: input.title,
    description: input.description,
    url,
    siteName: SITE_NAME,
    locale: OG_LOCALE[input.lang],
    type: input.type ?? 'website',
    images: [{ url: image, width: 1200, height: 630, alt: input.title }],
  };
  if (input.type === 'article') {
    Object.assign(og, {
      publishedTime: input.publishedTime,
      modifiedTime: input.modifiedTime ?? input.publishedTime,
      authors: ['Helicro Transport'],
    });
  }
  return {
    title: input.title,
    description: input.description,
    alternates: buildAlternates(input.lang, input.alternates),
    robots: input.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: og,
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}

const LAYOUT_DEFAULTS: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Helicro | Brussels Airport Taxi & Private Transfers in Belgium',
    description:
      'Private airport transfers in Brussels with an English-speaking driver, Ford minivans for up to 8 passengers and fixed prices to Zaventem, Charleroi and Lille. Book online with Helicro.',
  },
  nl: {
    title: 'Helicro | Luchthavenvervoer Zaventem & Charleroi met vaste prijzen',
    description:
      'Privé luchthavenvervoer in België met ervaren chauffeur. Vaste prijzen naar Zaventem en Charleroi, Ford minivans tot 8 personen, gratis kinderzitjes. Boek online bij Helicro.',
  },
  fr: {
    title: 'Helicro | Navette aéroport Bruxelles, Charleroi & chauffeur privé',
    description:
      'Navette aéroport privée en Belgique avec chauffeur expérimenté. Prix fixes vers Zaventem et Charleroi, minivans Ford jusqu’à 8 passagers, sièges enfants gratuits. Réservez en ligne.',
  },
  el: {
    title: 'Helicro | Ταξί αεροδρομίου Βρυξέλλες & ιδιωτικές μεταφορές με Έλληνα οδηγό',
    description:
      'Ιδιωτικές μεταφορές αεροδρομίου στις Βρυξέλλες με Έλληνα οδηγό. Σταθερές τιμές για Zaventem και Charleroi, minivan έως 8 επιβάτες, δωρεάν παιδικά καθίσματα.',
  },
  hr: {
    title: 'Helicro | Privatni transferi zračna luka Bruxelles i Charleroi',
    description:
      'Privatni transferi do zračnih luka Bruxelles Zaventem i Charleroi po fiksnim cijenama. Ford kombi do 8 putnika, besplatne dječje sjedalice, rezervacija online.',
  },
};

/** Site-wide defaults for a locale root layout. Pages override title/description/alternates. */
export function localeLayoutMetadata(lang: Locale): Metadata {
  const d = LAYOUT_DEFAULTS[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: d.title,
    description: d.description,
    applicationName: SITE_NAME,
    openGraph: {
      title: d.title,
      description: d.description,
      url: absoluteUrl(localizePath('/', lang)),
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      type: 'website',
      images: [{ url: absoluteUrl(DEFAULT_OG_IMAGE), width: 1200, height: 630, alt: 'Helicro Brussels Airport Transfers' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.title,
      description: d.description,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
    verification: { google: 'DoWNzpRLYyxM5JL2LsOmLQGOqg2QoAj6ggxCI6LGZPg' },
    appleWebApp: { title: 'Helicro Transport' },
    robots: { index: true, follow: true },
  };
}
