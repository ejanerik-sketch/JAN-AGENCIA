import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Cases from './pages/Cases';
import CaseStudy from './pages/CaseStudy';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <ContentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:slug" element={<CaseStudy />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </ContentProvider>
  );
};

export default App;