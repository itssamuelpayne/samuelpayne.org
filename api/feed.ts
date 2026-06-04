export const config = { runtime: 'edge' };

// Server-side Medium RSS reader. Fetches the feed from the same origin (no
// CORS), parses it, and returns rss2json-compatible JSON so the client can
// treat it like the existing public proxies. This exists because the public
// rss2json cache goes stale for hours and ignores cache-busting — reading
// Medium directly keeps the writing feed (and its header images) fresh.

const FEED_URL = 'https://medium.com/feed/@samuelpayneesq';

function stripCdata(s: string): string {
  const m = s.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return (m ? m[1] : s).trim();
}

function tag(block: string, name: string): string {
  const re = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`);
  const m = block.match(re);
  return m ? stripCdata(m[1]) : '';
}

function allTags(block: string, name: string): string[] {
  const re = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'g');
  return [...block.matchAll(re)].map((m) => stripCdata(m[1]));
}

function json(body: unknown, status = 200, cache = 'no-store'): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': cache },
  });
}

export default async function handler(_req: Request): Promise<Response> {
  try {
    const res = await fetch(FEED_URL, {
      headers: {
        'user-agent':
          'Mozilla/5.0 (compatible; samuelpayne.org/1.0; +https://samuelpayne.org)',
        accept: 'application/rss+xml, application/xml, text/xml',
      },
    });
    if (!res.ok) {
      return json({ status: 'error', message: `feed_${res.status}` }, 502);
    }

    const xml = await res.text();
    const blocks = xml
      .split('<item>')
      .slice(1)
      .map((b) => b.split('</item>')[0]);

    const items = blocks.map((b) => ({
      title: tag(b, 'title'),
      link: tag(b, 'link'),
      guid: tag(b, 'guid'),
      pubDate: tag(b, 'pubDate'),
      categories: allTags(b, 'category'),
      content: tag(b, 'content:encoded') || tag(b, 'description'),
    }));

    if (!items.length) {
      return json({ status: 'error', message: 'empty_feed' }, 502);
    }

    // Edge-cache for 5 minutes; serve stale up to an hour while revalidating.
    return json(
      { status: 'ok', items },
      200,
      'public, s-maxage=300, stale-while-revalidate=3600'
    );
  } catch {
    return json({ status: 'error', message: 'fetch_failed' }, 502);
  }
}
