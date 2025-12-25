import React, { useEffect, useState } from 'react';
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./ThreeDModeling.css";
import "../../components/projects/ProjectCard.css";
import SEO from "../../components/common/SEO";
import GlassyCircles from "../../components/ui/GlassyCircles";
import BTN from "../../components/common/BTN";
import { useNavigate } from "react-router-dom";
import Arrow from "../../components/common/Arrow";
import { supabase } from '../../config/Supabase';

const ThreeDModeling = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const { data, error } = await supabase
                    .from('Projects')
                     .select('*')
                    .eq('category_outside', '3D MODELING') 
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
                title="3D-Modeling-Mariam-Farid"
                description="Explore 3D Modeling projects including architecture, furniture, and booth designs with professional lighting and materials."
            />

            <GlassyCircles count={14} />

            <div className="modeling-foreground">
                <Navbar />
                <Arrow />

                <section className="modeling-hero">
                    <div className="modeling-hero-content">
                        <h1 className="modeling-title">3D Modeling</h1>
                        <p className="modeling-subtitle">
                            3D Modeling Collection / Top Projects
                        </p>
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
                                        {project.thumbnail && (
                                            <img
                                                src={project.thumbnail}
                                                alt={project.title}
                                                className="project-image"
                                            />
                                        )}
                                    </div>

                                    <h3 className="project-title">{project.title}</h3>

                                    {project.cardDescription && (
                                        <p className="project-card-text">{project.cardDescription}</p>
                                    )}

                                    <BTN
                                        className="project-button"
                                        btn="View details"
                                        onClick={() => navigate(`/3dmodeling/${project.slug}`)}
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

export default ThreeDModeling;
