import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  content?: string;
  headerImage?: string;
}

const USERNAME = 'samuelpayneesq';

export function WritingPage() {
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
          return {
            id,
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            content: item.content || item.description,
            headerImage: img?.getAttribute('src') || undefined,
          };
        });

        if (!cancelled) setArticles(transformed);
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
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      <Header />

      <main>
        <h1 className="sr-only">Writing</h1>

        <section className="max-w-4xl mx-auto px-8 pt-24 pb-24">
          {loading && <LoadingState />}
          {error && <ErrorState message={error} />}
          {!loading && !error && (
            <ul className="space-y-32">
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
    <Link to={`/article/${article.id}`} className="group block">
      {article.headerImage && (
        <figure className="w-full overflow-hidden mb-10">
          <img
            src={article.headerImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </figure>
      )}
      <div className="text-center max-w-2xl mx-auto px-4">
        <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.2em] uppercase mb-4">
          {date}
        </p>
        <h2
          className="text-[2.25rem] leading-[1.1] tracking-tight font-['Playfair_Display',_serif] text-gray-900 group-hover:opacity-60 transition-opacity"
          style={{ fontWeight: 600 }}
        >
          {article.title}
        </h2>
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
