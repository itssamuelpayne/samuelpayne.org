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
          bio="He currently leads Ecosystem Design at Meta Reality Labs, building the tools that help people create AI experiences for wearables.\n\nBefore Meta, he spent nearly a decade at Google: building and scaling a global design team, leading design for the $50B Play developer ecosystem, and running the Creative & Content org behind a product used by three billion people.\n\nHe stays close to the work, likes to make complex things simple, and believes the best team cultures flow from the work itself.\n\nSam writes and speaks on design and AI. His work has been recognized by D&AD, Fast Company, and Time Magazine."
        />
        <BlogList mediumUsername="@itssamuelpayne" onArticlesLoad={onArticlesLoad} />
      </main>
      <Footer />
    </div>
  );
}