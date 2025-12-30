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
          bio="His experience spans AI, product design, and innovation strategy, ranging from products serving billions of users to scrappy 0-1 prototypes. He stays close to the work, obsessing over how to make complex technology easy to use. He cultivates diverse, resilient organizations and knows that the best cultures flow from the work itself.

Sam is also an active writer and speaker on the intersection of Design and AI. His professional work has been recognized by D&AD, Fast Company, and Time Magazine."
        />
        <BlogList mediumUsername="@itssamuelpayne" onArticlesLoad={onArticlesLoad} />
      </main>
      <Footer />
    </div>
  );
}