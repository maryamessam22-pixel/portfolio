import React from "react";
import Footer from "../../components/layout/Footer";
import Arrow from "../../components/common/Arrow";
import SEO from "../../components/common/SEO";
import GlassyCircles from "../../components/ui/GlassyCircles";
import ProjectBackLink from "../../components/projects/ProjectBackLink";
import "./MotionGraphics.css";

const videos = [
  {
    title: "Graduation Project Showreel",
    src: "/videos/motion-graphics/graduation-project-showreel.mp4"
  },
  {
    title: "Portfolio Showreel",
    src: "/videos/motion-graphics/portfolio-showreel.mp4"
  }
];

const MotionGraphics = () => (
  <>
    <SEO
      title="Motion Graphics | Mariam Farid"
      description="Explore graduation project and portfolio showreels by Mariam Farid."
    />
    <GlassyCircles count={14} />
    <main className="motion-graphics-page">
      <header className="motion-graphics-heading">
        <ProjectBackLink />
        <p className="motion-graphics-eyebrow">Selected video work</p>
        <h1>Motion Graphics</h1>
        <p className="motion-graphics-intro">
          A selection of project and portfolio showreels.
        </p>
      </header>

      <section className="motion-graphics-grid" aria-label="Motion graphics videos">
        {videos.map((video) => (
          <article className="motion-video-card" key={video.title}>
            <video controls preload="metadata" playsInline>
              <source src={video.src} type="video/mp4" />
              Your browser does not support MP4 video.
            </video>
            <h2>{video.title}</h2>
          </article>
        ))}
      </section>
    </main>
    <Footer />
    <Arrow />
  </>
);

export default MotionGraphics;
