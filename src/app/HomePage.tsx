import { Header } from './components/Header';
import { Hero } from './components/Hero';
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
        <BlogList mediumUsername="@samuelpayneesq" onArticlesLoad={onArticlesLoad} />
      </main>
      <Footer />
    </div>
  );
}
