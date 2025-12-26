import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { HomePage } from './HomePage';
import { ArticlePage } from './components/ArticlePage';
import { Header } from './components/Header';
import { SpeakerPage } from './components/SpeakerPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [articles, setArticles] = useState<any[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onArticlesLoad={setArticles} />} />
        <Route 
          path="/article/:id" 
          element={
            <>
              <Header />
              <ArticlePage articles={articles} />
            </>
          } 
        />
        <Route path="/speaking" element={<SpeakerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}