import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { fetchArticles, type Article } from '../lib/medium';
import { Loading } from './ui/Loading';

interface ArticlePageProps {
  articles?: Article[];
}

export function ArticlePage({ articles = [] }: ArticlePageProps) {
  const { id } = useParams<{ id: string }>();
  // Articles passed from a prior page (writing list / home) are used when
  // present; otherwise — on a refresh or deep-link — we fetch the feed here.
  const [fetched, setFetched] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(false);

  const article = (fetched ?? articles).find((a) => a.id === id);

  useEffect(() => {
    if (article) return;
    let cancelled = false;
    setLoading(true);
    fetchArticles()
      .then((list) => {
        if (!cancelled) setFetched(list);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // Re-run when the article id changes and we don't already have it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!article && loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 font-['Space_Mono',_monospace] text-xs">Article not found</p>
          <Link 
            to="/" 
            className="mt-4 inline-block text-[#FF4000] hover:opacity-60 transition-opacity font-['Space_Mono',_monospace] text-xs"
          >
            Return home
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const calculateReadTime = (title: string) => {
    // Placeholder read time calculation
    return Math.floor(Math.random() * 5) + 4;
  };

  return (
    <div className="min-h-screen">
      <article className="max-w-2xl px-16 py-20">
        {/* Article Header */}
        <header className="mb-6 pb-8 border-b border-gray-100">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-fit mb-6"
          >
            <h1 className="font-['Playfair_Display',_serif] text-4xl leading-tight tracking-tight mb-3 text-gray-900 transition-colors group-hover:text-[#FF4000]">
              {article.title}
            </h1>
            <span className="inline-flex items-center gap-1.5 text-[9px] font-['Space_Mono',_monospace] text-gray-400 group-hover:text-[#FF4000] tracking-[0.2em] uppercase transition-colors">
              Read on Medium
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </a>

          <div className="flex items-center gap-4 text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-wider">
            <time>{formatDate(article.pubDate)}</time>
            <span>•</span>
            <span>{calculateReadTime(article.title)} MIN READ</span>
          </div>

          {article.categories && article.categories.length > 0 && (
            <div className="flex gap-2 mt-4">
              {article.categories.map((category, index) => (
                <span 
                  key={index}
                  className="text-[9px] font-['Space_Mono',_monospace] text-gray-300 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content ? (
            <div 
              className="font-['Playfair_Display',_serif] text-gray-700 leading-relaxed tracking-tight article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75'
              }}
            />
          ) : (
            <div className="font-['Playfair_Display',_serif] text-gray-700 leading-relaxed tracking-tight space-y-6">
              <p>{article.contentSnippet || 'Article content is being loaded...'}</p>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            to="/writing"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF4000] transition-colors font-['Space_Mono',_monospace] text-[10px] tracking-wider"
          >
            <ArrowLeft className="w-3 h-3" />
            ALL WRITING
          </Link>
        </div>
      </article>
    </div>
  );
}