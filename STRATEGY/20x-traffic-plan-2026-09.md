# Helicro.be: 20x organic traffic in 6 months (Oct 2026 to Mar 2027)

Prepared 22 September 2026 from the Search Console exports (16 months), the Ahrefs Belgium index, the Vercel project and a code audit of the repository.

## 1. Where we start

| Metric (Search Console, helicro.be + www) | Value |
|---|---|
| Clicks, 19 May to 20 Sep 2026 (125 days) | 215 |
| Clicks per month, Jul and Aug 2026 | 72 and 53 |
| Impressions per month, Jul and Aug 2026 | 1,176 and 1,038 |
| Share of clicks that are the brand name or noise | about 95% |
| Non-brand clicks in the whole 16-month window | 6 |
| Ahrefs Domain Rating | 0.8 |
| Referring domains (Ahrefs) | 240, all link-farm spam (.shop, .site) |
| Organic keywords in Ahrefs BE index | 0 (Semrush: 12) |

Baseline for the 20x target: about 60 organic clicks a month. Target: 1,200 or more organic clicks a month by March 2027, with at least 80% non-brand.

What the data says:

- The site was invisible for non-brand queries until the September 2026 rebuild. The new programmatic pages (routes, service areas, communes) are indexed but sit at positions 20 to 45 with no links and one week of age.
- The historical www/non-www split (www had 4,895 impressions, apex 2,502) is solved: Vercel now 308-redirects www to helicro.be. Search Console will consolidate over the next weeks.
- Demand is overwhelmingly Dutch and French, not English. Ahrefs BE monthly volumes: taxi bruxelles 2,400; luchthavenvervoer 1,200; navette aeroport 1,000; luchthavenvervoer zaventem 900; navette aeroport bruxelles 800; navette aéroport charleroi 800; taxi zaventem 450; taxi aeroport bruxelles 450; taxi brussels airport 400 (KD 0); taxi charleroi airport 350 (KD 0); brussels to charleroi airport 350; luchthavenvervoer gent 350; charleroi airport to brussels 250 (traffic potential 2,700); navette charleroi bruxelles 200 (traffic potential 4,300, KD 4).
- Hyperlocal Walloon Brabant queries are large and nearly uncontested: taxi ottignies 2,300; taxi louvain la neuve 1,400 (KD 1); taxi wavre 600; taxi nivelles 500 (KD 0); taxi waterloo 350; taxi tubize 250 (KD 0); taxi rixensart 200 (KD 0); taxi lasne 150 (KD 0); taxi genappe 100 (KD 0); taxi la hulpe 80 (KD 0).
- Most of these SERPs show a local pack. A verified, active Google Business Profile with reviews is worth as much as any page.
- Top competitors on the head terms are DR 43 to 54 (luchthavenvervoer-kevin.be, taxisverts.be, taxi2brussels.be) but several page-one results are DR 0 to 2 sites with thin content. Rankings are winnable with content depth plus a modest number of real Belgian links.

## 2. What shipped in this iteration (branch `claude/gracious-noether-j68sp4`)

Built from the owner's price list (the only source of routes and prices):

1. **Price data as a single source of truth** in `src/config/seoFacts.ts`: all fixed prices from Brussels or Brussels Airport (Antwerp, Ghent, Bruges, Tomorrowland, Lille, Paris CDG and Orly, Eindhoven, Amsterdam, Maastricht, Düsseldorf, Cologne, Frankfurt, Luxembourg), from Charleroi Airport (Antwerp, Ghent, Bruges), the 25€ shared shuttle and the 580€ per day Spa-Francorchamps package. Zaventem and Charleroi private prices already matched the list.
2. **Price list page** in three languages: `/price-list`, `/nl/prijslijst`, `/fr/tarifs`, with an OfferCatalog schema of every price, FAQ schema and links to every route page.
3. **41 new priced route pages** (EN, NL, FR) generated from the data: Charleroi Airport to Antwerp, Ghent and Bruges; Brussels to Paris CDG, Paris Orly, Eindhoven, Amsterdam, Maastricht, Düsseldorf, Cologne, Frankfurt and Luxembourg; Lille (NL and FR, the EN hub now shows the price); and the shared shuttle Brussels to Charleroi in three languages.
4. **Existing pages now show real prices**: Antwerp, Ghent and Bruges to Brussels Airport (EN), luchthavenvervoer Gent, Antwerpen and Brugge (NL) and the Lille hub, each with Offer schema.
5. **Six Walloon Brabant commune pages** (FR): Louvain-la-Neuve and Ottignies, Tubize, Rixensart and Genval, Lasne, Genappe, La Hulpe. No prices are claimed on these; they present the local taxi and airport service from the Braine-l'Alleud base.
6. **Schema gaps closed**: FAQPage on the FAQ pages in all five languages, Service plus OfferCatalog on the pricing pages in all five languages.
7. **Two blog guides** targeting the cluster with the highest traffic potential: "Charleroi Airport to Brussels" (EN) and "Van Charleroi Airport naar Brussel" (NL), cross-linked with hreflang.
8. **Internal linking**: new hub groups on the home page and footer for long-distance routes and the price list; every new page links to its hub, its siblings and the price list.
9. **AI-readable files updated** (`llms.txt`, `llms-full.txt`) with the full price list and the new URLs; sitemap bumped to 22 September 2026.
10. **A repo skill** at `.claude/skills/seo-content/SKILL.md` so future sessions add pages the same way, with the rule that prices come only from the fact table.
11. `STRATEGY/disavow-helicro-2026-09.txt`: all 240 spam referring domains, to upload only if a manual action appears.

Assumptions to confirm with the owner: "BRU" in the price list is read as Brussels city or Brussels Airport (same price); prices are shown as valid in both directions; the shared-shuttle group prices (2 passengers 50€, 3 passengers 75€ and so on, night rate 30€) are taken from the existing fare calculator.

## 3. The 6-month plan

Traffic comes from four levers. Each month has one owner action that no code can replace.

### Month 1 (October): index and local pack

- Submit the sitemap again in Search Console, request indexing for the 15 highest-value URLs (the three FR and NL airport hubs, the shared shuttle in three languages, the price list, Louvain-la-Neuve, Nivelles, Wavre, Waterloo, Charleroi to Antwerp EN and NL).
- Add a Search Console Domain property and Bing Webmaster Tools; Bing feeds ChatGPT and Copilot answers.
- Google Business Profile: confirm the categories (taxi service, airport shuttle service, chauffeur service), service area (Brussels, Walloon Brabant, Flanders), 24/7 hours, 30 photos, the price list link as the website, and weekly posts. Reply to every review.
- Review engine: WhatsApp a review link after every ride. Target 15 new Google reviews in the month (from 40 to 55). Local pack visibility for "taxi nivelles", "taxi louvain la neuve", "taxi zaventem" depends on this more than on the site.
- Fix the trust signals the audit flagged: branded email (info@helicro.be) with SPF, DKIM and DMARC, street address in the footer, privacy and cookie pages. These are cheap and they raise conversion and AI-citation confidence.
- Expected: 100 to 150 clicks.

### Month 2 (November): Dutch and French depth

- Translate the twelve EN route pages that have no NL or FR equivalent into NL (Flemish origins) and FR (Walloon origins) through the existing builders, so every priced or quoted route exists in the language of its origin city.
- Publish 4 guides per month, always with a price and a table: "Wat kost luchthavenvervoer vanuit Gent, Antwerpen, Brugge" (NL), "Navette Charleroi Bruxelles : bus, train ou navette privée" (FR), "Taxi Louvain-la-Neuve aéroport : prix et options" (FR), "Brussels to Amsterdam by car, train or transfer" (EN).
- Add the Tomorrowland fixed prices (75€ and 100€) and the Spa package (580€ per day) to the event pages in three languages, ahead of the 2027 ticket sales in January and February.
- Expected: 200 to 300 clicks.

### Month 3 (December): links that Belgian competitors have

- Tourism and local listings: visit.brussels partner list, Wallonie Tourisme and Visit Flanders supplier pages, UCLouvain and Louvain-la-Neuve business directories, Braine-l'Alleud and Waterloo commune business pages, the Greek community in Brussels (church, associations), expat guides (Expatica, The Bulletin, Brussels Expat).
- Ask ten regular corporate and embassy clients for a supplier mention.
- One local press story: the founder's background and the Braine-l'Alleud base, pitched to La Capitale, L'Avenir Brabant wallon and Het Nieuwsblad Vlaams-Brabant.
- Target: 20 real referring domains by end of December (from zero relevant ones today).
- Expected: 300 to 450 clicks.

### Month 4 (January): the winter and festival wave

- Publish the festival calendar pages for 2027 with prices: Tomorrowland, Rock Werchter, Pukkelpop, Graspop, Dour, in NL and FR (the EN pages exist).
- Ski and winter-sun content: "Brussels to Charleroi for early Ryanair flights", "Nachtvlucht Charleroi: hoe geraak ik er om 4u", "Vol à 6h à Zaventem : à quelle heure partir".
- Quarterly refresh of the Search Console striking-distance report: every query at positions 8 to 20 gets its answer added to the page's lead or FAQ.
- Expected: 450 to 650 clicks.

### Month 5 (February): conversion and AI answers

- Replace the third-party form with an on-site quote form that pre-fills route and passengers from the page (the calculator already knows the prices); measure WhatsApp clicks, calls and form submits as GA4 conversions.
- AI visibility: run the 24-prompt set from the strategy workbook in ChatGPT, Perplexity, Gemini and Google AI Overviews; add the missing facts the assistants ask for (payment, waiting, meeting points, group sizes) to llms-full.txt and the FAQ pages. Create a Wikidata entry for Helicro SRL.
- Expected: 650 to 900 clicks.

### Month 6 (March): scale what ranks

- For every page in the top 10, add the next intent: a second language, a return-trip version, a "from the airport" version.
- Second commune wave only if the first six rank: Ottignies (own page), Wavre-Limal, Nivelles-Sud, Braine-le-Château, Ittre, Court-Saint-Étienne.
- Expected: 900 to 1,300 clicks, which is 15x to 22x the baseline.

## 4. Targets and how to check them

| KPI | Now | Dec 2026 | Mar 2027 |
|---|---|---|---|
| Organic clicks per month | 60 | 350 | 1,200 |
| Non-brand share of clicks | under 5% | 60% | 80% |
| Queries in top 10 (GSC) | 3 | 40 | 120 |
| Pages with impressions | 70 | 150 | 220 |
| Google reviews | 40 | 70 | 100 |
| Relevant referring domains | 0 | 20 | 45 |
| AI assistants naming Helicro on the prompt set | 0 of 24 | 5 | 12 |

Check monthly in Search Console (queries and pages, compare 28 days), Ahrefs (referring domains, organic keywords BE) and the prompt set. The SEOTesting connector currently rejects its API key; once fixed it gives the striking-distance and CTR reports directly.

## 5. What still needs a human

- Confirm the three pricing assumptions in section 2.
- Google Business Profile ownership, photos and the review link.
- Branded email and DNS records.
- Outreach emails and the press pitch (drafts can be generated on request).
- Native proofreading of the NL and FR pages before the link push.
