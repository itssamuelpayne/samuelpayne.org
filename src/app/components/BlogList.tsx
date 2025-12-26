import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  content?: string;
  categories?: string[];
}

interface BlogListProps {
  mediumUsername?: string;
  onArticlesLoad?: (articles: Article[]) => void;
}

export function BlogList({ mediumUsername = '@itssamuelpayne', onArticlesLoad }: BlogListProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(5);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Remove @ symbol if present
        const username = mediumUsername.replace('@', '');
        
        // Try multiple CORS proxy services for reliability
        const proxies = [
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
          `https://api.allorigins.win/get?url=${encodeURIComponent(`https://medium.com/feed/@${username}`)}`,
        ];
        
        let data = null;
        let lastError = null;
        
        // Try each proxy until one works
        for (const proxyUrl of proxies) {
          try {
            const response = await fetch(proxyUrl);
            
            if (!response.ok) {
              lastError = new Error(`HTTP ${response.status}`);
              continue;
            }
            
            const json = await response.json();
            
            // Handle RSS2JSON format
            if (json.status === 'ok' && json.items) {
              data = json;
              break;
            }
            
            // Handle AllOrigins format
            if (json.contents) {
              const parser = new DOMParser();
              const xmlDoc = parser.parseFromString(json.contents, 'text/xml');
              const items = xmlDoc.querySelectorAll('item');
              
              data = {
                items: Array.from(items).map((item, index) => ({
                  title: item.querySelector('title')?.textContent || '',
                  link: item.querySelector('link')?.textContent || '',
                  pubDate: item.querySelector('pubDate')?.textContent || '',
                  description: item.querySelector('description')?.textContent || '',
                  guid: item.querySelector('guid')?.textContent || `article-${index}`,
                  categories: Array.from(item.querySelectorAll('category')).map(cat => cat.textContent || '')
                }))
              };
              break;
            }
            
            lastError = new Error('Invalid response format');
          } catch (err) {
            lastError = err;
            continue;
          }
        }
        
        if (!data) {
          throw lastError || new Error('All proxies failed');
        }
        
        // Transform items to our Article format
        const transformedArticles: Article[] = data.items.map((item: any, index: number) => {
          // Extract ID from Medium URL (e.g., https://medium.com/p/68a520bddbc6 -> 68a520bddbc6)
          let articleId = `article-${index}`;
          if (item.guid) {
            const match = item.guid.match(/\/p\/([a-zA-Z0-9]+)/);
            if (match) {
              articleId = match[1];
            }
          } else if (item.link) {
            const match = item.link.match(/\/p\/([a-zA-Z0-9]+)/);
            if (match) {
              articleId = match[1];
            }
          }
          
          return {
            id: articleId,
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            contentSnippet: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) || '',
            content: item.content || item.description,
            categories: item.categories || []
          };
        });
        
        setArticles(transformedArticles);
        if (onArticlesLoad) {
          onArticlesLoad(transformedArticles);
        }
        
        // Debug logging to help troubleshoot RSS feed
        console.log('Medium RSS Feed - Articles fetched:', transformedArticles.length);
        console.log('Articles:', transformedArticles.map(a => ({ title: a.title, date: a.pubDate, id: a.id })));
      } catch (err) {
        console.error('Error fetching Medium articles:', err);
        setError('Unable to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [mediumUsername, onArticlesLoad]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: '2-digit',
      month: 'short'
    });
  };

  const calculateReadTime = (title: string) => {
    // Placeholder read time calculation
    return Math.floor(Math.random() * 5) + 4;
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-8 py-12">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-3 bg-gray-100 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-8 py-12 text-center text-gray-400 text-xs font-['Space_Mono',_monospace]">
        {error}
      </div>
    );
  }

  const visibleArticles = articles.slice(0, displayCount);
  const hasMore = displayCount < articles.length;

  return (
    <section className="max-w-2xl mx-auto px-16 py-8 border-b border-gray-100">
      <div className="space-y-2">
        {visibleArticles.map((article, index) => (
          <article key={index} className="group border-b border-gray-50 pb-2 last:border-0">
            <Link 
              to={`/article/${article.id}`}
              className="flex gap-6 items-baseline hover:opacity-60 transition-opacity"
            >
              <time className="text-[10px] text-gray-400 font-['Space_Mono',_monospace] font-light tracking-wider whitespace-nowrap">
                {formatDate(article.pubDate)}
              </time>
              <div className="flex-1">
                <h2 className="text-gray-700 leading-relaxed tracking-tight text-sm font-['Playfair_Display',_serif]">
                  {article.title}
                </h2>
              </div>
              <span className="text-[10px] text-gray-300 whitespace-nowrap font-['Space_Mono',_monospace] font-light">
                {calculateReadTime(article.title)}m
              </span>
            </Link>
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="relative mt-8 flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-100"></div>
          <button
            onClick={() => setDisplayCount(prev => prev + 5)}
            className="relative px-8 py-2 bg-white text-[10px] text-gray-400 hover:text-[#FF4000] transition-colors font-['Space_Mono',_monospace] font-light tracking-widest"
          >
            MORE
          </button>
        </div>
      )}
    </section>
  );
}