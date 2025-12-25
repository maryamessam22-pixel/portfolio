import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';

import ScrollToTop from './components/common/ScrollToTop';
import CursorTrail from './components/ui/CursorTrail';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Errorpage from './pages/Errorpage'; 
import Articles from './pages/articles/Articles';
import ArticleDetails from './pages/ArticleDetails';
import UIUX from './pages/projects/UIUX';
import ProjectDetailsUIUX from './pages/projects/ProjectDetailsUIUX';
import GraphicDesign from './pages/projects/GraphicDesign';
import ProjectDetailsGraphicDesign from './pages/projects/ProjectDetailsGraphicDesign';
import ThreeDModeling from './pages/projects/ThreeDModeling';
import ProjectDetails3DModeling from './pages/projects/ProjectDetails3DModeling';

const App = () => {
  return (
    <BrowserRouter>
          
      <CursorTrail />
      <ScrollToTop />

      
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/uiux/:projectId" element={<ProjectDetailsUIUX />} />
        <Route path="/graphicdesign" element={<GraphicDesign />} />
        <Route path="/graphicdesign/:projectId" element={<ProjectDetailsGraphicDesign />} />
        <Route path="/3dmodeling" element={<ThreeDModeling />} />
        <Route path="/3dmodeling/:projectId" element={<ProjectDetails3DModeling />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:articleId" element={<ArticleDetails />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>

    </BrowserRouter>
  
  );
};

export default App;

        