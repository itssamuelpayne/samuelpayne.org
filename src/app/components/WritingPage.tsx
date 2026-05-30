import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Loading } from './ui/Loading';
import { fetchArticles, type Article } from '../lib/medium';

interface WritingPageProps {
  // Lifts the fetched articles into App state so /article/:id can find
  // them without re-fetching. The article page can still fetch on its own
  // for refreshes / deep-links.
  onArticlesLoad?: (articles: Article[]) => void;
}

export function WritingPage({ onArticlesLoad }: WritingPageProps = {}) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchArticles()
      .then((transformed) => {
        if (cancelled) return;
        setArticles(transformed);
        onArticlesLoad?.(transformed);
      })
      .catch(() => {
        if (!cancelled) setError('Unable to load articles right now.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

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
          <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100">
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
          <p className="text-[14px] leading-[1.6] font-['Playfair_Display',_serif] text-gray-700 mb-5">
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
      <Loading />
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
