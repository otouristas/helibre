import { MetadataRoute } from 'next';
import { seoPages } from '@/config/seoPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://helicro.be';
  
  // 1. Core static routes
  const baseRoutes = [
    '',
    '/pricing',
    '/about-us',
    '/reviews',
    '/special-offers',
    '/fleet',
    '/faq',
    '/contact',
    '/services/sightseeing',
    '/services/airport',
    '/services/corporate',
    '/services/parcel',
    '/services/events',
    '/services/event-transfers',
  ];

  const eventTransferRoutes = [
    '/services/event-transfers/tomorrowland',
    '/services/event-transfers/formula-1-spa-francorchamps',
  ];

  const blogRoutes = [
    '/en/blog',
    '/en/blog/tomorrowland-2026-vip-group-transport',
    '/en/blog/spa-francorchamps-f1-transfer-guide',
  ];

  const allRoutes: string[] = [];

  // Generate localized versions of all base routes
  const locales = ['en', 'nl', 'fr', 'el', 'hr'];
  
  locales.forEach((lang) => {
    baseRoutes.forEach((route) => {
      if (lang === 'en') {
        if (route === '') {
          allRoutes.push('/');
        } else {
          allRoutes.push(route);
        }
      } else {
        allRoutes.push(`/${lang}${route}`);
      }
    });
  });

  // Event transfer child pages: EN / NL / FR only
  ['en', 'nl', 'fr'].forEach((lang) => {
    eventTransferRoutes.forEach((route) => {
      if (lang === 'en') {
        allRoutes.push(route);
      } else {
        allRoutes.push(`/${lang}${route}`);
      }
    });
  });

  blogRoutes.forEach((route) => allRoutes.push(route));

  // 2. Add Strategy SEO Pages from seoPages.ts
  seoPages.forEach((p) => {
    // Normalize url
    let urlPath = p.url;
    if (!urlPath.startsWith('/')) {
      urlPath = `/${urlPath}`;
    }
    if (!allRoutes.includes(urlPath)) {
      allRoutes.push(urlPath);
    }
  });

  // Unique list
  const uniqueRoutes = Array.from(new Set(allRoutes));

  return uniqueRoutes.map((route) => {
    const cleanRoute = route === '/' ? '' : route;
    const url = `${baseUrl}${cleanRoute}`;
    
    // Set priority
    let priority = 0.5;
    if (route === '/' || route === '/en' || route === '/nl' || route === '/fr' || route === '/el') {
      priority = 1.0;
    } else if (route.includes('/services/event-transfers/tomorrowland') || route.includes('/services/event-transfers/formula-1-spa-francorchamps')) {
      priority = 0.9;
    } else if (route.includes('/services/event-transfers')) {
      priority = 0.85;
    } else if (route.startsWith('/en/blog/')) {
      priority = 0.65;
    } else if (baseRoutes.some(r => r !== '' && route.endsWith(r))) {
      priority = 0.8;
    } else {
      const pageInfo = seoPages.find(p => p.url === route);
      if (pageInfo?.priority === 'HIGH') {
        priority = 0.7;
      } else if (pageInfo?.priority === 'MEDIUM') {
        priority = 0.6;
      }
    }

    return {
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    };
  });
}
