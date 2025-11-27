import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./GraphicDesign.css";
import "../components/ProjectCard.css";
import SEO from "../components/SEO";
import GlassyCircles from "../components/GlassyCircles";
import BTN from "../components/BTN";
import { useNavigate } from "react-router-dom";
import graphicProjects from "../data/GraphicDesignData";

const GraphicDesign = () => {
  const navigate = useNavigate();
  const projects = graphicProjects;

  return (
    <>
      <SEO
        title="Mariam-Farid-Graphic-Designer"
        description="Explore Graphic Design projects, branding, visual identity, posters, illustrations, and creative artwork crafted with attention to detail and strong visuals."
      />

      <GlassyCircles count={14} />

      <div className="graphic-foreground">
        <Navbar />

        <section className="graphic-hero">
          <div className="graphic-hero-content">
            <h1 className="graphic-title">Graphic Designer</h1>
            <p className="graphic-subtitle">Branding / Posters / Illustration</p>
          </div>
        </section>

        <section className="projects-section">
          <div className="projects-container">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <h3 className="project-title">{project.title}</h3>

                {project.cardDescription && (
                  <p className="project-card-text">{project.cardDescription}</p>
                )}

                <BTN
                  className="project-button"
                  btn="View details"
                  onClick={() => navigate(`/graphicdesign/${project.id}`)}
                />
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GraphicDesign;
