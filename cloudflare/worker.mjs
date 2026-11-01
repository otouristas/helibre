/**
 * Preserve the existing Next.js redirects and canonical hostname while serving
 * the static export. Preview hosts stay out of search; helicro.be stays indexable.
 */
const worker = {
  /** @param {Request} request @param {{ ASSETS: { fetch: (request: Request) => Promise<Response> } }} env */
  async fetch(request, env) {
    const url = new URL(request.url);
    const preview = !['helicro.be', 'www.helicro.be'].includes(url.hostname);
    let response;

    if (!preview && (url.hostname === 'www.helicro.be' || url.protocol !== 'https:')) {
      url.hostname = 'helicro.be';
      url.protocol = 'https:';
      response = Response.redirect(url.toString(), 308);
    } else if (/^\/en\/festival\/tomorrowland\/?$/.test(url.pathname)) {
      url.pathname = '/services/event-transfers/tomorrowland';
      response = Response.redirect(url.toString(), 308);
    } else if (preview && url.pathname === '/robots.txt') {
      response = new Response('User-agent: *\nDisallow: /\n', {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    } else {
      response = await env.ASSETS.fetch(request);
    }

    if (preview) {
      response = new Response(response.body, response);
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    }
    return response;
  },
};

export default worker;
