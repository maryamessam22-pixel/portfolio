import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SEO from '../../components/common/SEO';
import Arrow from '../../components/common/Arrow';
import modelingProjects from "../../data/3DModelingData";
import './ProjectDetails3DModeling.css';

const ProjectDetails3DModeling = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  // Use local data as the source
  const allProjects = modelingProjects;

  useEffect(() => {
    // Find the project matching the URL id/slug
    const index = allProjects.findIndex(p => p.id === projectId);

    if (index !== -1) {
      const rawProject = allProjects[index];

      // Map to component format to match specific UI requirements
      const mappedProject = {
        id: rawProject.id,
        title: rawProject.title,
        cardDescription: rawProject.cardDescription || rawProject.description || '',

        // Ensure overview is an array
        overview: Array.isArray(rawProject.overview) ? rawProject.overview : (rawProject.overview ? [rawProject.overview] : []),

        projectType: rawProject.projectType,
        startDate: rawProject.startDate,
        endDate: rawProject.endDate,

        toolsUsed: rawProject.toolsUsed || [],
        processSteps: rawProject.processSteps || [],

        // Handle images: User requested "3 images at left". 
        // Data has coverImage and thumbnail. We will use them to form 3 items to match the visual request.
        images: [
          rawProject.coverImage,
          rawProject.thumbnail,
          rawProject.coverImage // Repeating coverImage to fulfill the "3 images" visual requirement
        ].filter(Boolean),

        role: rawProject.role || "3D Modeler", // Default role for this section
      };

      setProject(mappedProject);
      setCurrentIndex(index);
    } else {
      setProject(null);
    }
  }, [projectId, allProjects]);

  if (!project) {
    return (
      <div className="project-not-found">
        <Navbar />
        <div className="empty-state">
          <h1>Project not found</h1>
          <Link to="/3dmodeling" className="btn-back">Back to Projects</Link>
        </div>
      </div>
    );
  }

  // Navigation logic
  const nextIdx = (currentIndex + 1) % allProjects.length;
  const prevIdx = (currentIndex - 1 + allProjects.length) % allProjects.length;

  const nextId = allProjects.length > 0 ? allProjects[nextIdx]?.id : null;
  const prevId = allProjects.length > 0 ? allProjects[prevIdx]?.id : null;

  return (
    <div className="portfolio-page-container">
      <SEO
        title={`${project.title} | Mariam Farid`}
        description={project.cardDescription || "3D Modeling Project Details"}
      />

      <Navbar />
      <Arrow />

      <main className="portfolio-main">
        {/* Top Navigation */}
        <div className="portfolio-nav-header">
          <Link to="/3dmodeling" className="back-link">
            <span className="arrow-left">←</span> Back to Gallery
          </Link>

          <div className="project-pagination">
            {prevId && (
              <Link to={`/3dmodeling/${prevId}`} className="nav-btn prev-btn">
                Previous
              </Link>
            )}
            {nextId && (
              <Link to={`/3dmodeling/${nextId}`} className="nav-btn next-btn">
                Next Project
              </Link>
            )}
          </div>
        </div>

        <header className="project-header">
          <h1 className="project-title-large">{project.title}</h1>
          <div className="project-meta-header">
            <span className="meta-category">3D Modeling Portfolio</span>
            <span className="meta-type">{project.projectType}</span>
            <span className="meta-year">{project.startDate}</span>
          </div>
        </header>

        <div className="portfolio-grid-layout">
          {/* Column 1: Visuals (Left) */}
          <div className="col-visuals">
            <div className="project-mockup-container">
              {project.images.map((img, index) => (
                <img key={index} src={img} alt={project.title} className="main-mockup" />
              ))}
            </div>
          </div>

          {/* Column 2: Main Content (Center) */}
          <div className="col-main-content">
            <div className="content-block overview-block">
              <h3>Project Overview</h3>
              <div className="text-content">
                {project.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="content-block role-block">
              <h3>Role & Responsibilities</h3>
              <p>
                {project.role}
              </p>
            </div>

            <div className="content-block tools-block">
              <h3>Tools & Technologies</h3>
              <div className="tools-grid">
                {project.toolsUsed.map((tool, i) => (
                  <div key={i} className="tool-item">
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
                {project.processSteps.map((step, index) => (
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
                {project.cardDescription || "High-fidelity 3D models and renders created with attention to detail and realism."}
              </p>
              <p className="outcome-highlight">
                "Immersive 3D Experience"
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails3DModeling;