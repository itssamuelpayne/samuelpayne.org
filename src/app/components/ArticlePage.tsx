import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ArticlePageProps {
  articles?: Article[];
}

interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  content?: string;
  categories?: string[];
}

export function ArticlePage({ articles = [] }: ArticlePageProps) {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

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
      <article className="max-w-2xl mx-auto px-16 py-20">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF4000] transition-colors mb-12 font-['Space_Mono',_monospace] text-[10px] tracking-wider"
        >
          <ArrowLeft className="w-3 h-3" />
          BACK
        </Link>

        {/* Article Header */}
        <header className="mb-6 pb-8 border-b border-gray-100">
          <h1 className="font-['Playfair_Display',_serif] text-4xl leading-tight tracking-tight mb-6 text-gray-900">
            {article.title}
          </h1>
          
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
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF4000] transition-colors font-['Space_Mono',_monospace] text-[10px] tracking-wider"
          >
            <ArrowLeft className="w-3 h-3" />
            BACK TO ALL ARTICLES
          </Link>
        </div>
      </article>
    </div>
  );
}