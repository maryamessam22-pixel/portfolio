import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './UIUX.css';
import '../components/ProjectCard.css';
import SEO from '../components/SEO';
import GlassyCircles from '../components/GlassyCircles';
import BTN from '../components/BTN';
import { useNavigate } from 'react-router-dom';
import uiuxProjects from '../data/uiuxProjects';
import Arrow from '../components/Arrow';

const UIUX = () => {
	const projects = uiuxProjects;
	const navigate = useNavigate();

	return (
		<>
			<SEO 
				title="Mariam-Farid-UI/UX-Designer" 
				description="Explore UI/UX projects: mobile apps and websites with research-driven UX and clean UI." 
			/>
			<GlassyCircles count={14} />
			<div className="uiux-foreground">
			<Navbar />
			<Arrow/>

			<section className='uiux-hero'>
				<div className='uiux-hero-content'>
					<h1 className='uiux-title'>UI/UX Designer</h1>
					<p className='uiux-subtitle'>UI/UX Collection/Top projects</p>
				</div>
			</section>

			<section className="projects-section">
				<div className="projects-container">
					{projects.map(project => (
						<div key={project.id} className="project-card">
							<div className="project-image-container">
								<img src={project.thumbnail} alt={project.title} className="project-image" />
							</div>
							<h3 className="project-title">{project.title}</h3>
							{project.cardDescription && <p className="project-card-text">{project.cardDescription}</p>}
							<BTN className="project-button" btn="View details" onClick={() => navigate(`/uiux/${project.id}`)} />
						</div>
					))}
				</div>
			</section>

			<Footer />
			</div>
		</>
	);
};

export default UIUX;