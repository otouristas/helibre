---
name: seo-content
description: How to add or change SEO landing pages, priced routes, blog guides and AI-readable files on helicro.be. Use whenever a task touches src/config/seoPages.ts, src/config/seoFacts.ts, src/lib/seoContent, blogArticles.ts, llms.txt, the sitemap or page metadata, or when asked to add a route, city, commune, price or article.
---

# Helicro SEO content engine

The site is a Next.js App Router project with five locale route groups (`(en)`, `(nl)`, `(fr)`, `(el)`, `(hr)`). English lives unprefixed (`/pricing`), other locales are prefixed (`/nl/pricing`). Landing pages are not hand-written: a registry plus fact tables feed template builders.

## Where things live

| Concern | File |
|---|---|
| Page registry (url, h1, title, description, keyword) | `src/config/seoPages.ts` (static list) and `src/config/pricedRoutePages.ts` (generated for priced routes) |
| Facts: airports, places with km/minutes, published prices, destinations, shared shuttle | `src/config/seoFacts.ts` |
| Builders per page type | `src/lib/seoContent/*.ts` (`airportHub`, `route`, `cityAirport`, `commune`, `dayTrip`, `festival`, `vertical`, `pricedRoute`) |
| URL to builder dispatch | `src/lib/seoContent/index.ts` (`getSeoLanding`) |
| Shared copy (UI strings, generic FAQs, comparison table, how-it-works) | `src/lib/seoContent/shared.ts` |
| Landing template (H1, lead, sections, FAQ, related links, schema) | `src/components/SeoLanding.tsx` |
| Route files that render a prefix | `src/app/(en)/en/route/[slug]`, `src/app/(nl)/nl/route/[slug]`, `src/app/(nl)/nl/luchthavenvervoer/[hub]`, `src/app/(fr)/fr/navette/[hub]`, `src/app/(fr)/fr/local/[commune]`, `src/app/(en)/en/service-area/[city]`, `src/app/(en)/en/day-trip/[slug]`, `src/app/(en)/en/festival/[slug]` |
| Blog | `src/config/blogArticles.ts`, rendered by `BlogArticle.tsx` |
| Price list page | `src/components/PriceList.tsx` at `/price-list`, `/nl/prijslijst`, `/fr/tarifs` |
| Schema helpers | `src/lib/schema.ts` (site graph, Service, FAQPage, Breadcrumb, Article, Airport, price catalog) |
| Metadata, hreflang, canonical | `src/lib/seo.ts` (`pageMetadata`, `sharedPathAlternates`) |
| Sitemap and robots | `src/app/sitemap.ts`, `src/app/robots.ts` |
| AI-readable profile | `public/llms.txt`, `public/llms-full.txt` |
| Hub links on home and footer | `src/config/hubLinks.ts` |

## Hard rules

1. **Prices come only from `seoFacts.ts`** (`FIXED_PRICES`, `PRICED_ROUTES`, `SHARED_SHUTTLE`, `SPA_F1`). Never type a euro amount into copy. If a price is not in the facts, the page says the price is quoted in writing.
2. **Only real routes and prices.** The owner's price list is the source of truth. Do not invent routes, tiers or surcharges. Distances and minutes may be estimated from road distance, prices may not.
3. **One page per intent per language.** Before adding a URL, grep `seoPages.ts`, `pricedRoutePages.ts`, `ROUTES` in `route.ts` and the airport hub maps to avoid duplicates. Add hreflang for every language version that exists and nothing else.
4. **Answer first.** The `lead` fully answers the page intent in one or two sentences with numbers. Every H2 opens with the direct answer.
5. **No em dashes in copy.** Use a comma, a colon or a new sentence. En dashes in ranges (`35–45 min`) are fine.
6. **Every landing page carries** breadcrumbs, Service schema with offers when a price exists, FAQPage schema with at least 3 specific FAQs plus generic ones from `pickFaqs`, related links to its hub, siblings and the price list, and a language switch.
7. **New pages must be reachable** from at least one hub (`hubLinks.ts`, the airport hub link lists in `airportHub.ts`, or a builder's `related` block) and listed in `public/llms.txt`.
8. Bump `CONTENT_UPDATED` in `src/app/sitemap.ts` when content changes materially.

## Adding a page

- **New priced route**: add a `DESTINATIONS` entry and a `PRICED_ROUTES` row in `seoFacts.ts`, then URLs in `PRICED_ROUTE_URLS` (`pricedRoutePages.ts`). The page, metadata, schema and sitemap entry are generated.
- **New Walloon commune (FR)**: add the place to `PLACES` (km and minutes to BRU and CRL), a `COMMUNE_NOTES` entry and a `TO_BRUSSELS` row in `commune.ts`, a `COMMUNE_LINKS` link, and a registry entry in `seoPages.ts` with `url: /fr/local/{slug}`.
- **New Flemish city (NL)**: add the place to `PLACES`, map the URL in `NL_CITY_AIRPORT` (`index.ts`), add a registry entry and, if a priced route exists, prices appear automatically.
- **New EN route**: add to `ROUTES` in `route.ts` plus a registry entry.
- **New blog guide**: append to `blogArticles.ts`. Use `## ` for H2 and `- ` for bullets inside `content`. Give it `faqs`, a `ctaHref` to the matching landing page and `alternates` when a translation exists.

## Before pushing

```bash
npx tsc --noEmit -p tsconfig.json
npx eslint src
npm run build      # every registered URL must build; a missing builder throws
```

Then check `.next/server/app/sitemap.xml.body` contains the new URLs, and update `public/llms.txt`.

## Measuring

Search Console exports live in the owner's Drive; Ahrefs (BE index) is available through the MCP connector. Validate demand with `keywords-explorer-overview` (country `be`) before adding a page type, and prefer pages where a real price can be shown.
