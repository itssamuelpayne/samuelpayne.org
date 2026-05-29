import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

// onArticlesLoad is still received from App so the route signature
// stays stable, but the homepage no longer renders the article list —
// writing lives at /writing now.
interface HomePageProps {
  onArticlesLoad?: (articles: any[]) => void;
}

export function HomePage(_: HomePageProps) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
