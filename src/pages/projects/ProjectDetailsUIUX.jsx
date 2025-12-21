import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SEO from '../../components/common/SEO';
import { supabase } from '../../config/Supabase';
import Arrow from '../../components/common/Arrow';
import './ProjectDetailsUIUX.css';

const ProjectDetailsUIUX = () => {
	const { projectId } = useParams();
	const [project, setProject] = useState(null);
	const [allProjects, setAllProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(-1);

	useEffect(() => {
		async function fetchProjects() {
			setLoading(true);
			try {
				// Fetch specific columns as requested, plus extras needed for navigation/UI
				const { data, error } = await supabase
					.from('Projects')
					.select('id, slug, project_name_EN, start_Date, projectType, description_EN, Role, tools, processSteps, images, subtitle_out, status, views, puplished_date, cover_image, category_outside')
					.order('id', { ascending: true });

				if (error) {
					console.error("Error fetching projects:", error);
				} else {
					setAllProjects(data || []);

					// Find the project matching the URL slug (projectId)
					const index = data.findIndex(p => p.slug === projectId);
					if (index !== -1) {
						const rawProject = data[index];

						// Map Supabase columns to app structure
						const mappedProject = {
							id: rawProject.slug,
							title: rawProject.project_name_EN,
							// Use subtitle_out or meta_dscription as fallback for card description
							cardDescription: rawProject.subtitle_out || rawProject.meta_dscription || '',

							// Overview: description_EN is text, wrap in array for compatibility with map()
							overview: rawProject.description_EN ? [rawProject.description_EN] : [],

							// projectType is jsonb/string. Handle safely.
							// projectType is text in DB
							projectType: rawProject.projectType,

							startDate: rawProject.start_Date,
							endDate: rawProject.end_Date,

							// JSONB arrays
							toolsUsed: rawProject.tools || [],
							processSteps: rawProject.processSteps || [],

							// Images JSONB (Array)
							images: rawProject.images || [],

							role: rawProject.Role,

							// User requested fields
							status: rawProject.status,
							views: rawProject.views,
							published: rawProject.puplished_date,
							coverImage: rawProject.cover_image,
							category: rawProject.category_outside
						};
						setProject(mappedProject);
						setCurrentIndex(index);
					} else {
						setProject(null);
					}
				}
			} catch (err) {
				console.error("Unexpected error:", err);
			} finally {
				setLoading(false);
			}
		}

		fetchProjects();
	}, [projectId]);

	if (loading) {
		return (
			<div className="portfolio-page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<p>Loading...</p>
			</div>
		);
	}

	if (!project) {
		return (
			<div className="project-not-found">
				<Navbar />
				<div className="empty-state">
					<h1>Project not found</h1>
					<div style={{ margin: '20px', padding: '20px', background: '#eee', borderRadius: '8px', fontSize: '0.8rem', textAlign: 'left' }}>
						<p><strong>Debug Info:</strong></p>
						<p>Looking for ID: <code>{projectId}</code></p>
						<p>Available Slugs in DB:</p>
						<ul>
							{allProjects.map(p => <li key={p.id}>{p.slug}</li>)}
						</ul>
					</div>
					<Link to="/uiux" className="btn-back">Back to Projects</Link>
				</div>
			</div>
		);
	}

	// Navigation logic
	const nextIdx = (currentIndex + 1) % allProjects.length;
	const prevIdx = (currentIndex - 1 + allProjects.length) % allProjects.length;

	// Check if next/prev exist before accessing slug
	const nextSlug = allProjects.length > 0 ? allProjects[nextIdx]?.slug : null;
	const prevSlug = allProjects.length > 0 ? allProjects[prevIdx]?.slug : null;

	return (
		<div className="portfolio-page-container">
			<SEO
				title={`${project.title} | Mariam Farid`}
				description={project.cardDescription || "UI/UX Project Details"}
			/>

			<Navbar />
			<Arrow />

			<main className="portfolio-main">
				{/* Top Navigation */}
				<div className="portfolio-nav-header">
					<Link to="/uiux" className="back-link">
						<span className="arrow-left">←</span> Back to Gallery
					</Link>

					<div className="project-pagination">
						{prevSlug && (
							<Link to={`/uiux/${prevSlug}`} className="nav-btn prev-btn">
								Previous
							</Link>
						)}
						{nextSlug && (
							<Link to={`/uiux/${nextSlug}`} className="nav-btn next-btn">
								Next Project
							</Link>
						)}
					</div>
				</div>

				<header className="project-header">
					<h1 className="project-title-large">{project.title}</h1>
					<div className="project-meta-header">
						<span className="meta-category">UI/UX Designer Portfolio</span>
						<span className="meta-type">{project.projectType}</span>
						{/* Format date to show year */}
						<span className="meta-year">{project.startDate ? new Date(project.startDate).getFullYear() : '2024'}</span>
					</div>
				</header>

				<div className="portfolio-grid-layout">
					{/* Column 1: Visuals (Left) */}
					<div className="col-visuals">
						<div className="project-mockup-container">
							<div className="project-mockup-container">
								{project.images && project.images.map((img, index) => (
									<img key={index} src={img} alt={project.title} className="main-mockup" />
								))}
							</div>
						</div>
					</div>

					{/* Column 2: Main Content (Center) */}
					<div className="col-main-content">
						<div className="content-block overview-block">
							<h3>Project Overview</h3>
							<div className="text-content">
								{project.overview?.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
							</div>
						</div>

						<div className="content-block role-block">
							<h3>Role & Responsibilities</h3>
							<p>
								{project.role || "UI/UX Design, User Research, Wireframing, Prototyping"}
							</p>
						</div>

						<div className="content-block tools-block">
							<h3>Tools & Technologies</h3>
							<div className="tools-grid">
								{project.toolsUsed?.map((tool, i) => (
									<div key={i} className="tool-item">
										<span className="tool-icon">▪</span> {tool}
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Column 3: Sidebar (Right) */}
					<div className="col-sidebar">
						<div className="sidebar-section process-section">
							<h3>Process</h3>
							<div className="process-timeline">
								{project.processSteps?.map((step, index) => (
									<div key={index} className="process-item">
										<div className="process-icon-box">
											<span className="icon-placeholder">{index + 1}</span>
										</div>
										<span className="process-label">{step}</span>
									</div>
								))}
							</div>
						</div>

						<div className="sidebar-section outcome-section">
							<h3>Final Outcome</h3>
							<p className="outcome-text">
								{project.cardDescription || "Delivered a comprehensive UI/UX solution designed to enhance user engagement and streamline usability."}
							</p>
							<p className="outcome-highlight">
								"Enhanced user experience design"
							</p>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default ProjectDetailsUIUX;
