import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './UIUX.css';
import '../components/Projects.css';
import SEO from '../components/SEO';
import GlassyCircles from '../components/GlassyCircles';
import ui1 from '../assets/gizazoo.png';
import ui2 from '../assets/horrorar.png';
import ui3 from '../assets/tv.png';
import ui4 from '../assets/gorideapp.png';
import ui5 from '../assets/mini.png';
import ui6 from '../assets/eventapp.png';
import BTN from '../components/BTN';

const UIUX = () => {
	const projects = [
		{ id: 1, title: 'Giza zoo website', image: ui1, description: 'A modern website design for Giza Zoo featuring wildlife and nature themes.' },
		{ id: 2, title: 'Horror AR Website', image: ui2, description: 'An immersive horror-themed AR website with dark aesthetics.' },
		{ id: 3, title: 'TV Operating System', image: ui3, description: 'A smart TV hub interface design with modern UI/UX.' },
		{ id: 4, title: 'Go Ride App', image: ui4, description: 'Ride sharing app with streamlined flows and clear visuals.' },
		{ id: 5, title: 'Mini Cooper Smart screen', image: ui5, description: 'In-car smart screen UI with driver-first layout.' },
		{ id: 6, title: 'Event planner App', image: ui6, description: 'Plan and manage events with simple, guided UX.' }
	];

	return (
		<>
			<SEO 
				title="Mariam Farid | UI/UX Designer" 
				description="Explore UI/UX projects: mobile apps and websites with research-driven UX and clean UI." 
			/>
			<GlassyCircles count={14} />
			<div className="uiux-foreground">
			<Navbar />

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
								<img src={project.image} alt={project.title} className="project-image" />
							</div>
							<h3 className="project-title">{project.title}</h3>
							<BTN className="project-button" btn="View details" />
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