import React, { useState } from 'react';
import "./ProjectsSection.css";
import uiuxImage from '../assets/CS.png';
import motionGraphicsImage from '../assets/MA.png';
import arImage from '../assets/AR.png';
import photographyImage from '../assets/PH.png';
import modeling3dImage from '../assets/LAPTOP.png';
import graphicDesignImage from '../assets/RABSO.png';

const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    {
      id: 1,
      label: "UI/UX",
      position: "top-left",
      image: uiuxImage,
      imageAlt: "UI/UX Project"
    },
    {
      id: 2,
      label: "Motion Graphics",
      position: "mid-left",
      image: modeling3dImage,
      imageAlt: "Motion Graphics Project"
    },
    {
      id: 3,
      label: "Augmented Reality",
      position: "bottom-left",
      image: arImage,
      imageAlt: "AR Project"
    },
    {
      id: 4,
      label: "Photography",
      position: "top-right",
      image: photographyImage,
      imageAlt: "Photography Project"
    },
    {
      id: 5,
      label: "3D Modeling",
      position: "mid-right",
      image: motionGraphicsImage,
      imageAlt: "3D Modeling Project"
    },
    {
      id: 6,
      label: "Graphic Design",
      position: "bottom-right",
      image: graphicDesignImage,
      imageAlt: "Graphic Design Project"
    }
  ];

  return (
    <section className="projects-section-container">
      <div className={`projects-wrapper ${isHovered ? 'hovered' : ''}`}>
        {/* Category Labels */}
        {categories.map((category) => (
          <div key={category.id} className={`category-item ${category.position}`}>
            <div className="category-label">{category.label}</div>
          </div>
        ))}

        {/* Central Folder/Banner with Images Inside */}
        <div 
          className="central-folder"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Images inside folder - will move out on hover */}
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`folder-image folder-image-${category.position} ${isHovered ? 'moved-out' : ''}`}
            >
              <img src={category.image} alt={category.imageAlt} />
            </div>
          ))}

          <div className="folder-top">
            {/* <div className="folder-logo">
              <div className="logo-icon">F</div>
              <div className="logo-birds">
                <span className="bird-left">🐦</span>
                <span className="bird-right">🐦</span>
              </div>
            </div>
            <div className="folder-banner">Welcome to EUI</div>
          </div>
          
          <div className="folder-content">
            <div className="folder-about">
              <h3>About EUI</h3>
              <p>At the heart of the Knowledge Administrative Capital, the Egypt University of Informatics (EUI) stands as a beacon of innovation...</p>
            </div> */}
            
            <div className="folder-projects-text">
              <h2 className="projects-title"> My<br></br>Projects</h2>
            </div>
          </div>

          <div className="folder-pattern"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

