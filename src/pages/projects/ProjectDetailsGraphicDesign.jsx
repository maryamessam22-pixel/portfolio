import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SEO from '../../components/common/SEO';
import graphicProjects from '../../data/GraphicDesignData';
import Arrow from '../../components/common/Arrow';
import './ProjectDetailsGraphicDesign.css';

const ProjectDetailsGraphicDesign = () => {
  const { projectId } = useParams();
  const projectIndex = graphicProjects.findIndex(item => item.id === projectId);
  const project = graphicProjects[projectIndex];

  // Navigation 
  const nextIndex = (projectIndex + 1) % graphicProjects.length;
  const prevIndex = (projectIndex - 1 + graphicProjects.length) % graphicProjects.length;

  const nextProject = graphicProjects[nextIndex];
  const prevProject = graphicProjects[prevIndex];

  if (!project) {
    return (
      <div className="project-not-found">
        <Navbar />
        <div className="empty-state">
          <h1>Project not found</h1>
          <Link to="/graphicdesign" className="btn-back">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-page-container">
      <SEO
        title={`${project.title} | Mariam Farid`}
        description={project.cardDescription || "Graphic Design Project Details"}
      />

      <Navbar />
      <Arrow />

      <main className="portfolio-main">
       
        <div className="portfolio-nav-header">
          <Link to="/graphicdesign" className="back-link">
            <span className="arrow-left">←</span> Back to Gallery
          </Link>

          <div className="project-pagination">
            <Link to={`/graphicdesign/${prevProject.id}`} className="nav-btn prev-btn">
              Previous
            </Link>
            <Link to={`/graphicdesign/${nextProject.id}`} className="nav-btn next-btn">
              Next Project
            </Link>
          </div>
        </div>

        <header className="project-header">
          <h1 className="project-title-large">{project.title}</h1>
          <div className="project-meta-header">
            <span className="meta-category">Graphic Designer Portfolio</span>
            <span className="meta-type">{project.projectType}</span>
            <span className="meta-year">{project.startDate?.split(' ')[1] || '2024'}</span>
          </div>
        </header>

        <div className="portfolio-grid-layout">

          {/* Column 1: Visuals (Left) */}
          <div className="col-visuals">
            <div className="project-mockup-container">
              <img src={project.image1} alt={project.title} className="main-mockup" />
              <img src={project.image2} alt={project.title} className="main-mockup" />
              <img src={project.image3} alt={project.title} className="main-mockup" />
            </div>
          </div>

          {/* Column 2: Main Content (Center) */}
          <div className="col-main-content">

            <div className="content-block overview-block">
              <h3>Project Overview</h3>
              <div className="text-content">
                {project.overview?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Role might not be in graphicProjects, so we use generic text or omit */}
            <div className="content-block role-block">
              <h3>Role & Responsibilities</h3>
              <p>
                Graphic Design, Visual Identity, Branding, Print Design,
                {project.toolsUsed?.includes('After Effects') ? ' Motion Graphics' : ' Illustration'}
              </p>
            </div>

            <div className="content-block tools-block">
              <h3>Tools & Technologies</h3>
              <div className="tools-grid">
                {project.toolsUsed?.map(tool => (
                  <div key={tool} className="tool-item">
                    <span className="tool-icon">▪</span> {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Sidebar (Right) */}
          <div className="col-sidebar">
            <div className="sidebar-section process-section">
              <h3>Process</h3>
              <div className="process-timeline">
                {project.processSteps?.map((step, index) => (
                  <div key={index} className="process-item">
                    <div className="process-icon-box">
                      <span className="icon-placeholder">{index + 1}</span>
                    </div>
                    <span className="process-label">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section outcome-section">
              <h3>Final Outcome</h3>
              <p className="outcome-text">
                {project.cardDescription || "Delivered a comprehensive graphic design solution designed to communicate the brand identity effectively."}
              </p>
            
              <p className="outcome-highlight">
                "Impactful visual storytelling"
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailsGraphicDesign;