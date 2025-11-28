// 3DModeling.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ThreeDModeling.css";
import "../components/ProjectCard.css";
import SEO from "../components/SEO";
import GlassyCircles from "../components/GlassyCircles";
import BTN from "../components/BTN";
import { useNavigate } from "react-router-dom";
import modelingProjects from "../data/3DModelingData";
import Arrow from "../components/Arrow";

const ThreeDModeling = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="3D-Modeling-Mariam-Farid"
        description="Explore 3D Modeling projects including architecture, furniture, and booth designs with professional lighting and materials."
      />

      <GlassyCircles count={14} />

      <div className="modeling-foreground">
        <Navbar />
        <Arrow />

        {/* HERO SECTION */}
        <section className="modeling-hero">
          <div className="modeling-hero-content">
            <h1 className="modeling-title">3D Modeling</h1>
            <p className="modeling-subtitle">
              3D Modeling Collection / Top Projects
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects-section">
          <div className="projects-container">
            {modelingProjects.map((project) => (
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
                  onClick={() => navigate(`/3dmodeling/${project.id}`)}
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

export default ThreeDModeling;
