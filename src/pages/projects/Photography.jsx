import React from "react";
import Footer from "../../components/layout/Footer";
import Arrow from "../../components/common/Arrow";
import SEO from "../../components/common/SEO";
import GlassyCircles from "../../components/ui/GlassyCircles";
import ProjectBackLink from "../../components/projects/ProjectBackLink";
import "./Photography.css";

const photos = [
  {
    title: "Painting with Light",
    src: "/images/photography/painting-with-light.jpg",
    alt: "Long-exposure light trails along a city street"
  },
  {
    title: "Night Shot",
    src: "/images/photography/night-shot.jpg",
    alt: "A quiet street illuminated by lights at night"
  },
  {
    title: "Panning",
    src: "/images/photography/panning.jpg",
    alt: "A car in focus against a motion-blurred city"
  },
  {
    title: "Climate Change",
    src: "/images/photography/climate-change.jpg",
    alt: "A climate change themed image"
  },
  {
    title: "Palm Silhouettes",
    src: "/images/photography/photography-001.jpg",
    alt: "Palm leaves silhouetted against the setting sun"
  },
  {
    title: "Water Splash",
    src: "/images/photography/photography-002.jpg",
    alt: "A splash of water in a glass"
  },
  {
    title: "Waterfront",
    src: "/images/photography/photography-003.jpg",
    alt: "A line of lamps beside the water under a clear sky"
  },
  {
    title: "Light Trails",
    src: "/images/photography/photography-004.jpg",
    alt: "Long-exposure light trails on a city road"
  },
  {
    title: "Sunset over Water",
    src: "/images/photography/photography-005.jpg",
    alt: "Golden sunset reflected across the water"
  },
  {
    title: "Flower Study",
    src: "/images/photography/photography-006.jpg",
    alt: "A colorful flower surrounded by green leaves"
  },
  {
    title: "Night Traffic",
    src: "/images/photography/photography-007.jpg",
    alt: "Traffic light trails on a city street at night"
  },
  {
    title: "Panning in Motion",
    src: "/images/photography/photography-008.jpg",
    alt: "Two riders on a motorcycle captured in motion"
  },
  {
    title: "Desert Landscape",
    src: "/images/photography/photography-009.jpg",
    alt: "A desert shoreline beneath a cloudy sky"
  }
];

const Photography = () => (
  <>
    <SEO
      title="Photography | Mariam Farid"
      description="Explore a selection of photography by Mariam Farid, including light trails, landscapes, and everyday moments."
    />
    <GlassyCircles count={14} />
    <main className="photography-page">
      <header className="photography-heading">
        <ProjectBackLink />
        <p className="photography-eyebrow">Selected photography</p>
        <h1>Photography</h1>
        <p>A collection exploring light, movement, and everyday moments.</p>
      </header>

      <section className="photography-grid" aria-label="Photography gallery">
        {photos.map((photo) => (
          <figure className="photography-card" key={photo.src}>
            <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size photo: ${photo.title}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
            </a>
            <figcaption>{photo.title}</figcaption>
          </figure>
        ))}
      </section>
    </main>
    <Footer />
    <Arrow />
  </>
);

export default Photography;
