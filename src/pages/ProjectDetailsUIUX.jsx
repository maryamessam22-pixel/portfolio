import React from 'react';
import {Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlassyCircles from '../components/GlassyCircles';
import SEO from '../components/SEO';
import uiuxProjects from '../data/uiuxProjects';
import './ProjectDetailsUIUX.css';
import Arrow from './../components/Arrow';

const ProjectDetailsUIUX = () => {
	const { projectId } = useParams();
	const project = uiuxProjects.find(item => item.id === projectId);

	if (!project) {
		return (
			<>
			<SEO 
  title="Project Details | UI/UX Designs by Mariam Farid"
  description="Explore detailed UI/UX design projects by Mariam Farid, including custom website interfaces, mobile app designs, user flows, wireframes, prototypes, and full product experiences. This section showcases my created websites and apps with a focus on usability, aesthetics, and design thinking."
/>
				{/* <SEO 
					title="Project not found | Mariam Farid" 
					description="The project you are looking for is not available." 
				/> */}
				<Navbar />
				<section className="project-details-empty">
					<h1>Project not found</h1>
					<Link to="/uiux">Back to UI/UX projects</Link>
				</section>
			</>
		);
	}

	return (
		<>
			<SEO 
				title={`${project.title}-UI/UX-Project`} 
				description={project.cardDescription || 'Explore project details, process, and outcomes.'} 
			/>
			<GlassyCircles count={10} />
			<div className="project-details-foreground">
				<Navbar />
				<Arrow/>
				<main className="project-details-wrapper">
					<header className="project-details-header">
						<Link to="/uiux" className="project-details-back">
							<span aria-hidden="true">←</span> Back
						</Link>
						<h1>{project.title}</h1>
					</header>

					<div className="project-details-cover">
						<img src={project.coverImage} alt={project.title} />
					</div>

					<section className="project-details-section">
						<h2>Project overview</h2>
						{project.overview?.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</section>

					<section className="project-details-meta-grid">
						<div>
							<h3>Project type:</h3>
							<p>{project.projectType}</p>
						</div>
						<div>
							<h3>Start date:</h3>
							<p>{project.startDate}</p>
						</div>
						<div>
							<h3>End date:</h3>
							<p>{project.endDate}</p>
						</div>
						<div>
							<h3>Tools used:</h3>
							<p>{project.toolsUsed?.join(', ')}</p>
						</div>
					</section>

					{project.processSteps && project.processSteps.length > 0 && (
						<section className="project-details-process">
							<h2>The process</h2>
							<div className="project-process-steps">
								{project.processSteps.map((step, index) => (
									<div key={step} className="project-process-step">
										<div className="project-process-icon">{index + 1}</div>
										<p>{step}</p>
									</div>
								))}
							</div>
						</section>
					)}
				</main>
				<Footer />
			</div>
		</>
	);
};

export default ProjectDetailsUIUX;

