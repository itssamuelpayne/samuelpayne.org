export interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  content?: string;
  contentSnippet?: string;
  categories?: string[];
  headerImage?: string;
  excerpt?: string;
}

const USERNAME = 'samuelpayneesq';

// Fetches and normalizes the Medium RSS feed. Shared by the writing list and
// individual article pages so a deep-link / refresh to /article/:id can load
// its own data instead of depending on in-memory state from a prior page.
export async function fetchArticles(): Promise<Article[]> {
  // Prefer our own same-origin endpoint, which reads Medium directly and
  // stays fresh. Fall back to public proxies if it's unavailable (e.g. Medium
  // rate-limits our server). rss2json is convenient but its cache goes stale
  // for hours, which is why it's no longer first.
  const proxies = [
    `/api/feed`,
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${USERNAME}`,
    `https://api.allorigins.win/get?url=${encodeURIComponent(`https://medium.com/feed/@${USERNAME}`)}`,
  ];

  let items: any[] | null = null;
  for (const url of proxies) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const json = await res.json();
      if (json.status === 'ok' && json.items) {
        items = json.items;
        break;
      }
      if (json.contents) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(json.contents, 'text/xml');
        const list = Array.from(doc.querySelectorAll('item'));
        items = list.map((item, i) => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
          pubDate: item.querySelector('pubDate')?.textContent || '',
          guid: item.querySelector('guid')?.textContent || `article-${i}`,
          description: item.querySelector('description')?.textContent || '',
        }));
        break;
      }
    } catch {
      continue;
    }
  }

  if (!items) throw new Error('feed unreachable');

  const parser = new DOMParser();
  return items.map((item, i) => {
    let id = `article-${i}`;
    const guid: string = item.guid || item.link || '';
    const m = guid.match(/\/p\/([a-zA-Z0-9]+)/);
    if (m) id = m[1];
    const html: string = item.content || item.description || '';
    const doc = parser.parseFromString(html, 'text/html');
    const img = doc.querySelector('img');
    const excerpt = extractExcerpt(doc);
    return {
      id,
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      content: item.content || item.description,
      contentSnippet: excerpt,
      categories: Array.isArray(item.categories) ? item.categories : [],
      headerImage: img?.getAttribute('src') || undefined,
      excerpt,
    };
  });
}

// Pulls the first meaningful paragraph out of a parsed article body and
// trims it to a single-line preview.
function extractExcerpt(doc: Document, maxChars = 200): string {
  const paragraphs = Array.from(doc.querySelectorAll('p'));
  for (const p of paragraphs) {
    const text = (p.textContent || '').trim().replace(/\s+/g, ' ');
    if (text.length >= 40) {
      if (text.length <= maxChars) return text;
      return text.slice(0, maxChars).replace(/\s+\S*$/, '') + '…';
    }
  }
  return '';
}
