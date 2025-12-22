import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./ProjectsSection.css";
import patternImage from '../../assets/pattern.png';

class ProjectsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  render() {
    const { isHovered } = this.state;
    
    
    const { categories = [], images = [] } = this.props;

    
    const positions = [
      "top-left",
      "mid-left",
      "bottom-left",
      "top-right",
      "mid-right",
      "bottom-right"
    ];

    
    const data = categories.map((label, index) => {
        
        const slug = label.toLowerCase().replace(/[^a-z0-9]/g, '');

        return {
            id: index,
            label: label,
            position: positions[index] || "mid-right", 
            image: images[index] || null, 
            link: `/${slug}` 
        };
    });

    
    if (data.length === 0) return null;

    return (
      <section className="projects-section-container">
        <div className={`projects-wrapper ${isHovered ? 'hovered' : ''}`}>

          
          {data.map((item) => (
            <div key={item.id} className={`category-item ${item.position}`}>
              <Link to={item.link}>
                 <div className="category-label">{item.label}</div>
              </Link>
            </div>
          ))}

          
          <div
            className="central-folder"
            onMouseEnter={() => this.setState({ isHovered: true })}
            onMouseLeave={() => this.setState({ isHovered: false })}
          >
            {data.map((item) => {
              
              if (!item.image) return null;

              return (
                <Link key={item.id} to={item.link}>
                  <div className={`folder-image folder-image-${item.position} ${isHovered ? 'moved-out' : ''}`}>
                     <img src={item.image} alt={item.label} />
                  </div>
                </Link>
              );
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