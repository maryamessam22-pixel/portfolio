import React, { Component } from 'react';
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlassyCircles from "../components/GlassyCircles";
import SEO from "../components/SEO";
import graphicProjects from "../data/GraphicDesignData";
import "./ProjectDetailsGraphicDesign.css";

const ProjectDetailsGraphicDesign = () => {
  const { projectId } = useParams();
  const project = graphicProjects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <>
        <SEO
          title="Graphic Design Project Not Found | Mariam Farid"
          description="The graphic design project you are looking for is not available."
        />
        <Navbar />

        <section className="project-details-empty">
          <h1>Project not found</h1>

          {/* 🔥 FIXED PATH HERE */}
          <Link to="/graphicdesign">Back to graphic design projects</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} - Graphic Design Project`}
        description={
          project.cardDescription ||
          "Explore details, concept, and design process."
        }
      />

      <GlassyCircles count={10} />

      <div className="project-details-foreground">
        <Navbar />

        <main className="project-details-wrapper">
          <header className="project-details-header">

          
            <Link to="/graphicdesign" className="project-details-back">
              <span aria-hidden="true">←</span> Back
            </Link>

            <h1>{project.title}</h1>
          </header>

          <div className="project-details-cover">
            <img src={project.coverImage} alt={project.title} />
          </div>

          <section className="project-details-section">
            <h2>Project overview</h2>

            {project.overview?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section className="project-details-meta-grid">
            <div>
              <h3>Category:</h3>
              <p>{project.projectType}</p>
            </div>

            <div>
              <h3>Start date:</h3>
              <p>{project.startDate}</p>
            </div>

            <div>
              <h3>End date:</h3>
              <p>{project.endDate}</p>
            </div>

            <div>
              <h3>Tools used:</h3>
              <p>{project.toolsUsed?.join(", ")}</p>
            </div>
          </section>

          {project.processSteps && project.processSteps.length > 0 && (
            <section className="project-details-process">
              <h2>The process</h2>

              <div className="project-process-steps">
                {project.processSteps.map((step, index) => (
                  <div key={step} className="project-process-step">
                    <div className="project-process-icon">{index + 1}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetailsGraphicDesign;

