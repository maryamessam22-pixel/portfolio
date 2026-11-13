import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Arrow from "../../components/common/Arrow";
import SEO from "../../components/common/SEO";
import GlassyCircles from "../../components/ui/GlassyCircles";
import gizaZooImage from "../../assets/giza-zoo-thubmnail.png";
import graphicDesignImage from "../../assets/graphic1.png";
import modelingImage from "../../assets/mosque.png";
import "./Projects.css";

const categories = [
  {
    number: "01",
    title: "UI/UX Design",
    description: "Digital products and interfaces designed around real people.",
    image: gizaZooImage,
    href: "/uiux",
    imageAlt: "UI/UX design project preview"
  },
  {
    number: "02",
    title: "Graphic Design",
    description: "Visual identities, campaigns, and creative design work.",
    image: graphicDesignImage,
    href: "/graphicdesign",
    imageAlt: "Graphic design project preview"
  },
  {
    number: "03",
    title: "3D Modeling",
    description: "Detailed 3D concepts, environments, and product visuals.",
    image: modelingImage,
    href: "/3dmodeling",
    imageAlt: "3D modeling project preview"
  },
  {
    number: "04",
    title: "Motion Graphics",
    description: "Showreels and visual stories brought to life through motion.",
    href: "/motiongraphics"
  },
  {
    number: "05",
    title: "Photography",
    description: "Photographs exploring light, movement, and everyday moments.",
    image: "/images/photography/photography-005.jpg",
    href: "/photography",
    imageAlt: "Sunset over water"
  }
];

const Projects = () => (
  <>
    <SEO
      title="Projects | Mariam Farid"
      description="Explore UI/UX, graphic design, 3D modeling, motion graphics, and photography by Mariam Farid."
    />
    <GlassyCircles count={14} />
    <div className="projects-page">
      <Navbar />
      <Arrow />

      <main>
        <header className="projects-page-hero">
          <p className="projects-page-eyebrow">Selected work</p>
          <h1>Explore My Projects</h1>
          <p>Choose a category to discover the work, process, and ideas behind each project.</p>
        </header>

        <section className="project-category-grid" aria-label="Project categories">
          {categories.map((category) => (
            <Link
              className="project-category-card"
              key={category.href}
              to={category.href}
              aria-label={`Explore ${category.title} projects`}
            >
              {category.image ? (
                <img src={category.image} alt={category.imageAlt} />
              ) : (
                <span className="project-category-art" aria-hidden="true">▶</span>
              )}
              <span className="project-category-number">{category.number}</span>
              <div className="project-category-content">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
                <span className="project-category-link">
                  Explore category <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  </>
);

export default Projects;
