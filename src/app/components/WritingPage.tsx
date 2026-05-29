import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface Article {
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

interface WritingPageProps {
  // Lifts the fetched articles into App state so /article/:id can find
  // them. Without this the article route shows 'Article not found'.
  onArticlesLoad?: (articles: Article[]) => void;
}

const USERNAME = 'samuelpayneesq';

export function WritingPage({ onArticlesLoad }: WritingPageProps = {}) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const proxies = [
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

        if (cancelled) return;
        if (!items) throw new Error('feed unreachable');

        const parser = new DOMParser();
        const transformed: Article[] = items.map((item, i) => {
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

        if (!cancelled) {
          setArticles(transformed);
          onArticlesLoad?.(transformed);
        }
      } catch {
        if (!cancelled) setError('Unable to load articles right now.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
    // onArticlesLoad is intentionally not a dep — we only re-fetch on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main>
        <h1 className="sr-only">Writing</h1>

        <section className="max-w-5xl px-16 pt-20 pb-24">
          {loading && <LoadingState />}
          {error && <ErrorState message={error} />}
          {!loading && !error && (
            <ul className="space-y-16">
              {articles.map((article) => (
                <li key={article.id}>
                  <ArticleRow article={article} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ArticleRow({ article }: { article: Article }) {
  const date = formatDate(article.pubDate);

  return (
    <Link
      to={`/article/${article.id}`}
      className="group grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-10 items-start"
    >
      {article.headerImage ? (
        <figure className="md:col-span-5 overflow-hidden">
          <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              src={article.headerImage}
              alt={article.title}
              loading="lazy"
              className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </figure>
      ) : (
        <div className="md:col-span-5" aria-hidden />
      )}

      <div className="md:col-span-7 md:pt-1">
        <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-3">
          {date}
        </p>
        <h2
          className="text-[1.375rem] leading-[1.2] tracking-tight font-['Playfair_Display',_serif] text-gray-900 mb-3 group-hover:opacity-60 transition-opacity"
          style={{ fontWeight: 400 }}
        >
          {article.title}
        </h2>
        {article.excerpt && (
          <p className="text-[14px] leading-[1.6] font-['Playfair_Display',_serif] text-gray-600 mb-5">
            {article.excerpt}
          </p>
        )}

        <span className="inline-flex items-center gap-2 text-[10px] font-['Space_Mono',_monospace] text-gray-900 tracking-[0.25em] uppercase border-b border-gray-900 pb-1 group-hover:opacity-60 transition-opacity">
          More
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}

function LoadingState() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div
        className="text-[10px] font-['Space_Mono',_monospace] text-gray-300 tracking-[0.25em] uppercase"
        aria-live="polite"
      >
        Loading
      </div>
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase">
        {message}
      </p>
    </div>
  );
}

function formatDate(s: string) {
  const date = new Date(s);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
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
