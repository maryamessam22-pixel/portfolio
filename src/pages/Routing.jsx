import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './index';
import About from './About';
import UIUX from './UIUX';
import ProjectDetailsUIUX from './ProjectDetailsUIUX';
import Errorpage from './Errorpage';
import CursorTrail from '../components/CursorTrail';
import Articles from './Articles';
import ArticleDetails from './ArticleDetails';
import Contact from './Contact';
import GraphicDesign from './GraphicDesign';
import ProjectDetailsGraphicDesign from './ProjectDetailsGraphicDesign';

import ThreeDModeling from './ThreeDModeling';
import ProjectDetails3DModeling from './ProjectDetails3DModeling';

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <CursorTrail />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* UI/UX */}
          <Route path="/uiux" element={<UIUX />} />
          <Route path="/uiux/:projectId" element={<ProjectDetailsUIUX />} />

          {/* Articles */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<ArticleDetails />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Graphic Design */}
          <Route path="/graphicdesign" element={<GraphicDesign />} />
          <Route path="/graphicdesign/:projectId" element={<ProjectDetailsGraphicDesign />} />

          {/* 3D Modeling — FIXED & MATCHING NAVBAR */}
          <Route path="/3dmodeling" element={<ThreeDModeling />} />
          <Route path="/3dmodeling/:projectId" element={<ProjectDetails3DModeling />} />

          {/* Error Page */}
          <Route path="*" element={<Errorpage />} />
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default Routing;
