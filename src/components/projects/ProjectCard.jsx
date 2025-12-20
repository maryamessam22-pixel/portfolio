import React, { Component } from 'react';
import './ProjectCard.css';
import BTN from './BTN';

const ProjectCard = ({ imageSrc, imageAlt, title, subtitle, onViewDetails, actionLabel = 'View details' }) => {
	return (
		<div className="project-card">
			<div className="project-card-image">
				<img src={imageSrc} alt={imageAlt || title} />
			</div>
			<div className="project-card-body">
				{title && <h3 className="project-card-title">{title}</h3>}
				{subtitle && <p className="project-card-subtitle">{subtitle}</p>}
				<div className="project-card-actions">
					<BTN btn={actionLabel} onClick={onViewDetails} />
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;


