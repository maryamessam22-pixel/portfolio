import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SEO from '../../components/common/SEO';
import uiuxProjects from '../../data/uiuxProjects';
import Arrow from '../../components/common/Arrow'; 
import './ProjectDetailsUIUX.css';

const ProjectDetailsUIUX = () => {
	const { projectId } = useParams();
	const projectIndex = uiuxProjects.findIndex(item => item.id === projectId);
	const project = uiuxProjects[projectIndex];

	// Navigation 
	const nextIndex = (projectIndex + 1) % uiuxProjects.length;
	const prevIndex = (projectIndex - 1 + uiuxProjects.length) % uiuxProjects.length;

	const nextProject = uiuxProjects[nextIndex];
	const prevProject = uiuxProjects[prevIndex];

	if (!project) {
		return (



			<div className="project-not-found">
				<Navbar />
				<div className="empty-state">
					<h1>Project not found</h1>
					<Link to="/uiux" className="btn-back">Back to Projects</Link>
				</div>
			</div>
		);
	}

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
						<Link to={`/uiux/${prevProject.id}`} className="nav-btn prev-btn">
							Previous
						</Link>
						<Link to={`/uiux/${nextProject.id}`} className="nav-btn next-btn">
							Next Project
						</Link>
					</div>
				</div>

				<header className="project-header">
					<h1 className="project-title-large">{project.title}</h1>
					<div className="project-meta-header">
						<span className="meta-category">UI/UX Designer Portfolio</span>
						<span className="meta-type">{project.projectType}</span>
						<span className="meta-year">{project.startDate?.split(' ')[1] || '2024'}</span>
					</div>
				</header>

				<div className="portfolio-grid-layout">

					{/* Column 1: Visuals (Left) */}
					<div className="col-visuals">
						<div className="project-mockup-container">
							<img src={project.coverImage} alt={project.title} className="main-mockup" />
							<img src={project.coverImage} alt={project.title} className="main-mockup" />
							<img src={project.coverImage} alt={project.title} className="main-mockup" />
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
								UI/UX Design, User Research, Wireframing, Prototyping,
								{project.toolsUsed?.includes('React') ? ' Frontend Development' : ' Visual Design'}
							</p>
						</div>

						<div className="content-block tools-block">
							<h3>Tools & Technologies</h3>
							<div className="tools-grid">
								{project.toolsUsed?.map(tool => (
									<div key={tool} className="tool-item">
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
							{/* Placeholder for stat if we had one */}
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