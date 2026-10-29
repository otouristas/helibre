# Cloudflare hosting

This deployment keeps Next.js 16.2.10 and exports the existing routes to HTML,
JavaScript, CSS and static navigation payloads. No server API, database, secret or
new application framework is needed. The existing ClickUp forms, WhatsApp links,
telephone links and email links remain in the exported pages.

## Build and deploy

Use Node.js 22 or later and the committed npm lockfile:

```sh
npm ci
npm run build:cloudflare
npm run preview:cloudflare
```

Deploy the verified output with `npx wrangler deploy`, or rebuild and deploy with
`npm run deploy:cloudflare`. The target is Worker `helibre` in account
`3ae246eded35e99220b461c2ca5ff158`. Credentials remain in the local Wrangler
authentication store or a separately configured CI secret.

The original `npm run build`, `npm run dev` and Next.js redirect configuration
remain available. The Cloudflare build sets `CLOUDFLARE_STATIC_EXPORT=1`, exports
the sitemap at build time, and serves the existing Pexels credit image directly.
Both legacy Tomorrowland redirects are handled by `worker.mjs`.

## Domain and search behavior

- Canonical domain: `https://helicro.be`.
- `www.helicro.be` and HTTP production requests redirect to the HTTPS apex.
- Preview hosts return `X-Robots-Tag: noindex, nofollow`, and their robots.txt
  disallows crawling. Canonicals keep pointing to the production domain.
- The production host serves the existing robots.txt, sitemap, metadata,
  hreflang links, content and structured data.
- Missing pages return a genuine 404 using the exported Next.js error page.
- Cloudflare Workers custom domains require the domain's Cloudflare zone to be
  active. Registrar nameserver changes are separate from deployment.

## Verification

Verified locally with the Cloudflare runtime:

- Production export and TypeScript passed.
- All 200 sitemap pages returned 200, a matching canonical and one H1.
- All 56 referenced local scripts, stylesheets and image assets returned 200.
- Preview indexing controls, canonical/legacy redirects, query-string retention,
  exported client-navigation payload and unknown-page 404 passed.
- Scoped ESLint passed for the changed configuration and Worker files.

Full source ESLint has five existing errors in unchanged AIAssistant.tsx and
FareCalculator.tsx. Those components were not changed by this migration.

Visual/browser interaction QA and external ClickUp form submission are NOT
TESTED because browser access is disabled. No test booking, email or WhatsApp
message was sent. `local-qa.json` records the HTTP/content checks and link targets.

## References

- Installed Next.js static-export documentation:
  `node_modules/next/dist/docs/01-app/02-guides/static-exports.md`.
- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/).
- [Worker custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).
