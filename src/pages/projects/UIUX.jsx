import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import './UIUX.css';
import '../../components/projects/ProjectCard.css';
import SEO from '../../components/common/SEO';
import GlassyCircles from '../../components/ui/GlassyCircles';
import BTN from '../../components/common/BTN';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../config/Supabase';
import Arrow from '../../components/common/Arrow';

const UIUX = () => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchProjects() {
			try {
				const { data, error } = await supabase
					.from('Projects')
					.select('project_name_EN, Thumbnail, subtitle_out')
					.order('id', { ascending: true });

				if (error) {
					console.error("Error fetching projects:", error);
				} else {
					// Map to component format
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
				title="Mariam-Farid-UI/UX-Designer"
				description="Explore UI/UX projects: mobile apps and websites with research-driven UX and clean UI."
			/>
			<GlassyCircles count={14} />
			<div className="uiux-foreground">
				<Navbar />
				<Arrow />

				<section className='uiux-hero'>
					<div className='uiux-hero-content'>
						<h1 className='uiux-title'>UI/UX Designer</h1>
						<p className='uiux-subtitle'>UI/UX Collection/Top projects</p>
					</div>
				</section>

				<section className="projects-section">
					<div className="projects-container">
						{loading ? (
							<p style={{ color: 'white', textAlign: 'center' }}>Loading projects...</p>
						) : (
							projects.map(project => (
								<div key={project.id} className="project-card">
									<div className="project-image-container">
										{project.thumbnail && <img src={project.thumbnail} alt={project.title} className="project-image" />}
									</div>
									<h3 className="project-title">{project.title}</h3>
									{project.cardDescription && <p className="project-card-text">{project.cardDescription}</p>}
									<BTN className="project-button" btn="View details" onClick={() => navigate(`/uiux/${project.slug}`)} />
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

export default UIUX;