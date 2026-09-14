import type { Metadata } from 'next';
import { seoPages, type SEOPage } from '@/config/seoPages';
import { pageMetadata, type Locale } from '@/lib/seo';
import { buildAirportHub } from './airportHub';
import { buildCityAirportNl } from './cityAirport';
import { buildCity } from './city';
import { buildCommune } from './commune';
import { buildDayTrip } from './dayTrip';
import { buildFestival } from './festival';
import { buildRoute, ROUTES } from './route';
import { buildVertical, hasVertical } from './vertical';
import type { SeoLandingContent } from './types';

export type { SeoLandingContent } from './types';

const AIRPORT_HUBS: Record<string, { lang: 'en' | 'nl' | 'fr'; code: 'BRU' | 'CRL' | 'LIL' }> = {
  '/en/airport-transfer/brussels-zaventem': { lang: 'en', code: 'BRU' },
  '/en/airport-transfer/brussels-charleroi': { lang: 'en', code: 'CRL' },
  '/en/airport-transfer/lille': { lang: 'en', code: 'LIL' },
  '/nl/luchthavenvervoer/zaventem': { lang: 'nl', code: 'BRU' },
  '/nl/luchthavenvervoer/charleroi': { lang: 'nl', code: 'CRL' },
  '/fr/navette/aeroport-bruxelles': { lang: 'fr', code: 'BRU' },
  '/fr/navette/aeroport-charleroi': { lang: 'fr', code: 'CRL' },
};

const NL_CITY_AIRPORT: Record<string, string> = {
  '/nl/luchthavenvervoer/gent': 'ghent',
  '/nl/luchthavenvervoer/antwerpen': 'antwerp',
  '/nl/luchthavenvervoer/leuven': 'leuven',
  '/nl/luchthavenvervoer/brugge': 'bruges',
};

const CITY_KEYS: Record<string, string> = {
  brussels: 'brussels', antwerp: 'antwerp', ghent: 'ghent', bruges: 'bruges', leuven: 'leuven', mechelen: 'mechelen',
  liege: 'liege', namur: 'namur', charleroi: 'charleroi', mons: 'mons', hasselt: 'hasselt', ostend: 'ostend',
};

function lastSegment(url: string): string {
  const parts = url.split('/');
  return parts[parts.length - 1];
}

/** Build the full localized landing content for a registered SEO page URL, or null if unknown. */
export function getSeoLanding(url: string): SeoLandingContent | null {
  const page: SEOPage | undefined = seoPages.find((p) => p.url === url);
  if (!page) return null;

  if (AIRPORT_HUBS[url]) {
    const { lang, code } = AIRPORT_HUBS[url];
    return buildAirportHub(page, lang, code);
  }
  if (NL_CITY_AIRPORT[url]) return buildCityAirportNl(page, NL_CITY_AIRPORT[url]);
  if (ROUTES[url]) return buildRoute(page, url.startsWith('/fr/') ? 'fr' : 'en', ROUTES[url]);
  if (url.startsWith('/en/service-area/') && CITY_KEYS[lastSegment(url)]) return buildCity(page, CITY_KEYS[lastSegment(url)]);
  if (url.startsWith('/fr/local/')) return buildCommune(page, lastSegment(url));
  if (url.startsWith('/en/day-trip/')) return buildDayTrip(page, lastSegment(url));
  if (url.startsWith('/en/festival/')) return buildFestival(page, lastSegment(url));
  if (hasVertical(url)) return buildVertical(page);
  return null;
}

/** Next.js metadata for a landing page built by getSeoLanding. */
export function seoLandingMetadata(content: SeoLandingContent): Metadata {
  return pageMetadata({
    lang: content.lang as Locale,
    title: content.title,
    description: content.description,
    alternates: content.alternates,
    image: content.image,
  });
}

/** All registered landing URLs handled by the engine (used by sitemap and static params). */
export function seoLandingUrls(prefix?: string): string[] {
  return seoPages
    .map((p) => p.url)
    .filter((u) => (prefix ? u.startsWith(prefix) : true))
    .filter((u) => getSeoLanding(u) !== null);
}

/** Same as getSeoLanding but throws at build time when a static page references an unregistered URL. */
export function requireSeoLanding(url: string): SeoLandingContent {
  const content = getSeoLanding(url);
  if (!content) throw new Error(`No SEO landing content registered for ${url}`);
  return content;
}
