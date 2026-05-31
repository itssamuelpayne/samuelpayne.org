import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { HomePage } from './HomePage';
import { ArticlePage } from './components/ArticlePage';
import { Header } from './components/Header';
import { SpeakerPage } from './components/SpeakerPage';
import { ContactPage } from './components/ContactPage';
import { WritingPage } from './components/WritingPage';
import { WorkLayout } from './components/work/WorkLayout';
import { WorkIndex } from './components/work/WorkIndex';
import { CaseStudyPage } from './components/work/CaseStudyPage';
import { PageTransition } from './components/PageTransition';

function AnimatedRoutes({
  articles,
  onArticlesLoad,
}: {
  articles: any[];
  onArticlesLoad: (articles: any[]) => void;
}) {
  const location = useLocation();
  // Key on the top-level segment so navigating within /work doesn't remount
  // WorkLayout (which would re-fetch projects and flash the loader).
  const sectionKey = location.pathname.split('/')[1] || 'home';

  // Reset scroll to the top on every navigation so a new page (e.g. a case
  // study) opens at its title and lede rather than inheriting the prior
  // page's scroll offset.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={sectionKey}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage onArticlesLoad={onArticlesLoad} />
            </PageTransition>
          }
        />
        <Route
          path="/article/:id"
          element={
            <PageTransition>
              <Header />
              <ArticlePage articles={articles} />
            </PageTransition>
          }
        />
        <Route
          path="/writing"
          element={
            <PageTransition>
              <WritingPage onArticlesLoad={onArticlesLoad} />
            </PageTransition>
          }
        />
        <Route
          path="/speaking"
          element={
            <PageTransition>
              <SpeakerPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route element={<WorkLayout />}>
          <Route
            path="/work"
            element={
              <PageTransition>
                <WorkIndex />
              </PageTransition>
            }
          />
          <Route
            path="/work/:slug"
            element={
              <PageTransition>
                <CaseStudyPage />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [articles, setArticles] = useState<any[]>([]);

  return (
    <Router>
      <AnimatedRoutes articles={articles} onArticlesLoad={setArticles} />
    </Router>
  );
}
