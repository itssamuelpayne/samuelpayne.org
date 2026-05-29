import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HomeMenu } from './components/HomeMenu';
import { BlogList } from './components/BlogList';
import { Footer } from './components/Footer';

interface HomePageProps {
  onArticlesLoad?: (articles: any[]) => void;
}

export function HomePage({ onArticlesLoad }: HomePageProps) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main>
        <Hero />
        <HomeMenu />

        {/* Writing preview */}
        <div className="max-w-2xl mx-auto px-16">
          <p className="text-[10px] font-['Space_Mono',_monospace] text-gray-400 tracking-[0.25em] uppercase pt-12 pb-2">
            Writing
          </p>
        </div>
        <BlogList mediumUsername="@samuelpayneesq" onArticlesLoad={onArticlesLoad} />
      </main>
      <Footer />
    </div>
  );
}
