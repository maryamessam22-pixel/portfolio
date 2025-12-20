import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components (from src/components/layout)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Common & UI Components (from src/components/common and src/components/ui)
import ScrollToTop from './components/common/ScrollToTop';
import CursorTrail from './components/ui/CursorTrail';

// General Pages (from src/pages)
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Errorpage from './pages/Errorpage'; // You kept this name

// Article Pages
import Articles from './pages/articles/Articles';         // Inside src/pages/articles/
import ArticleDetails from './pages/ArticleDetails';      // Inside src/pages/ (per your tree)

// Project Pages (from src/pages/projects)
import UIUX from './pages/projects/UIUX';
import ProjectDetailsUIUX from './pages/projects/ProjectDetailsUIUX';

import GraphicDesign from './pages/projects/GraphicDesign';
import ProjectDetailsGraphicDesign from './pages/projects/ProjectDetailsGraphicDesign';

import ThreeDModeling from './pages/projects/ThreeDModeling';
import ProjectDetails3DModeling from './pages/projects/ProjectDetails3DModeling';

const App = () => {
  return (
    <BrowserRouter>
      {/* Global UI Effects */}
      <CursorTrail />
      <ScrollToTop />

      {/* Navigation */}
      <Navbar />

      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Projects */}
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/uiux/:projectId" element={<ProjectDetailsUIUX />} />

        <Route path="/graphicdesign" element={<GraphicDesign />} />
        <Route path="/graphicdesign/:projectId" element={<ProjectDetailsGraphicDesign />} />

        <Route path="/3dmodeling" element={<ThreeDModeling />} />
        <Route path="/3dmodeling/:projectId" element={<ProjectDetails3DModeling />} />

        {/* Articles */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:articleId" element={<ArticleDetails />} />

        {/* 404 Error Page */}
        <Route path="*" element={<Errorpage />} />
      </Routes>

      {/* Footer
      <Footer /> */}
    </BrowserRouter>
  );
};

export default App;