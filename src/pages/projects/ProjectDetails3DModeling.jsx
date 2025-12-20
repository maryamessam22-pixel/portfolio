import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import GlassyCircles from "../../components/ui/GlassyCircles";
import SEO from "../../components/common/SEO";
import modelingProjects from "../../data/3DModelingData";
import "./ProjectDetails3DModeling.css";
import Arrow from "../../components/common/Arrow";

const ProjectDetails3DModeling = () => {
  const { projectId } = useParams();
  const project = modelingProjects.find((item) => item.id === projectId);

  if (!project)
    return (
      <>
        <Navbar />
        <h2 style={{ padding: "100px", textAlign: "center" }}>Project not found.</h2>
      </>
    );

  return (
    <>
      <SEO title={project.title} description={project.cardDescription} />

      <GlassyCircles count={10} />

      <div className="model-details-foreground">
        <Navbar />
        <Arrow />

        <main className="model-details-wrapper">
          <header className="model-details-header">
            <Link to="/3dmodeling" className="model-details-back">
              ← Back
            </Link>
            <h1>{project.title}</h1>
          </header>

          <div className="model-details-cover">
            <img src={project.coverImage} alt={project.title} />
          </div>

          <section className="model-details-section">
            <h2>Project Overview</h2>
            {project.overview.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>

          <section className="model-details-meta-grid">
            <div>
              <h3>Category:</h3>
              <p>{project.projectType}</p>
            </div>

            <div>
              <h3>Start Date:</h3>
              <p>{project.startDate}</p>
            </div>

            <div>
              <h3>End Date:</h3>
              <p>{project.endDate}</p>
            </div>

            <div>
              <h3>Tools Used:</h3>
              <p>{project.toolsUsed.join(", ")}</p>
            </div>
          </section>

          <section className="model-details-process">
            <h2>The Process</h2>
            <div className="model-process-steps">
              {project.processSteps.map((step, index) => (
                <div key={index} className="model-process-step">
                  <div className="model-process-icon">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetails3DModeling;