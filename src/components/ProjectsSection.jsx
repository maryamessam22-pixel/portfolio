import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./ProjectsSection.css";
import uiuxImage from '../assets/CS.png';
import motionGraphicsImage from '../assets/MA.png';
import arImage from '../assets/AR.png';
import photographyImage from '../assets/PH.png';
import modeling3dImage from '../assets/LAPTOP.png';
import graphicDesignImage from '../assets/RABSO.png';
import patternImage from '../assets/pattern.png';

class ProjectsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  render() {
    const { isHovered } = this.state;

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

          {/* ---------------- LABELS ---------------- */}
          {categories.map((category) => {
            const content = <div className="category-label">{category.label}</div>;
            const wrapperClass = `category-item ${category.position}`;

            // UI/UX link
            if (category.label === 'UI/UX') {
              return (
                <div key={category.id} className={wrapperClass}>
                  <Link to="/uiux">{content}</Link>
                </div>
              );
            }

            // ⭐⭐ GRAPHIC DESIGN link (ADDED)
            if (category.label === 'Graphic Design') {
              return (
                <div key={category.id} className={wrapperClass}>
                  <Link to="/graphicdesign">{content}</Link>
                </div>
              );
            }

            return (
              <div key={category.id} className={wrapperClass}>
                {content}
              </div>
            );
          })}

          {/* ---------------- FOLDER IMAGES ---------------- */}
          <div
            className="central-folder"
            onMouseEnter={() => this.setState({ isHovered: true })}
            onMouseLeave={() => this.setState({ isHovered: false })}
          >
            {categories.map((category) => {
              const imageEl = (
                <div
                  key={category.id}
                  className={`folder-image folder-image-${category.position} ${isHovered ? 'moved-out' : ''}`}
                >
                  <img src={category.image} alt={category.imageAlt} />
                </div>
              );

              // UI/UX
              if (category.label === 'UI/UX') {
                return <Link key={category.id} to="/uiux">{imageEl}</Link>;
              }

              // ⭐⭐ GRAPHIC DESIGN (ADDED)
              if (category.label === 'Graphic Design') {
                return <Link key={category.id} to="/graphicdesign">{imageEl}</Link>;
              }

              return imageEl;
            })}

            <div className="folder-top">
              <div className="folder-projects-text">
                <h2 className="projects-title"> My<br />Projects</h2>
              </div>
            </div>

            <div className="folder-pattern">
              <img src={patternImage} alt="Pattern" />
            </div>
          </div>
        </div>
      </section>
    );
    
  }
}

export default ProjectsSection;


