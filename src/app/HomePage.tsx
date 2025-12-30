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
        <Hero 
          intro="Sam leads high-performing design teams in complex organizations—he helps them do the best work of their lives."
          bio="His experience spans AI, product design, and innovation strategy, ranging from products serving billions of users to scrappy 0-1 prototypes. He's happiest when he's close to the work, pushing to simplify and make even the most complex technology easy to use. He cultivates diverse, resilient organizations because he focuses on the work (and most good things flow from that).\n\nSam is an active writer and speaker at the intersection of design and AI. His work has been recognized by D&AD, Fast Company, and Time Magazine."
        />
        <BlogList mediumUsername="@itssamuelpayne" onArticlesLoad={onArticlesLoad} />
      </main>
      <Footer />
    </div>
  );
}