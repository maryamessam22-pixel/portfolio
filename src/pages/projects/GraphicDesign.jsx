import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./GraphicDesign.css";
import "../../components/projects/ProjectCard.css";
import SEO from "../../components/common/SEO";
import GlassyCircles from "../../components/ui/GlassyCircles";
import BTN from "../../components/common/BTN";
import { useNavigate } from "react-router-dom";
import { supabase } from '../../config/Supabase';
import Arrow from '../../components/common/Arrow';

const GraphicDesign = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('Projects')
          .select('id, slug, project_name_EN, Thumbnail, subtitle_out, category_outside')
          .eq('category_outside', 'Graphic Design')
          .order('id', { ascending: true });

        if (error) {
          console.error("Error fetching projects:", error);
        } else {
          const mappedProjects = data.map(p => ({
            id: p.slug, 
            slug: p.slug,
            title: p.project_name_EN,
            thumbnail: p.Thumbnail,
            cardDescription: p.subtitle_out || p.meta_dscription
          }));
          setProjects(mappedProjects);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <>
      <SEO
        title="Mariam-Farid-Graphic-Designer"
        description="Explore Graphic Design projects, branding, visual identity, posters, illustrations, and creative artwork crafted with attention to detail and strong visuals."
      />

      <GlassyCircles count={14} />

      <div className="graphic-foreground">
        <Navbar />
        <Arrow />

        <section className="graphic-hero">
          <div className="graphic-hero-content">
            <h1 className="graphic-title">Graphic Designer</h1>
            <p className="graphic-subtitle">Branding / Posters / Illustration</p>
          </div>
        </section>

        <section className="projects-section">
          <div className="projects-container">
            {loading ? (
                <p style={{ color: 'white', textAlign: 'center' }}>Loading projects...</p>
            ) : (
                projects.map((project) => (
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
                    onClick={() => navigate(`/graphicdesign/${project.slug}`)}
                    />
                </div>
                ))
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GraphicDesign;