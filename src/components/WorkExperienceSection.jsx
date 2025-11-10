import React from 'react';
import './WorkExperienceSection.css';
import TextParagraph from './TextParagraph';

const WorkExperienceSection = () => {
  return (
    <div className="work-experience-section">
      <TextParagraph 
        title="Work Experience" 
        txt="Over the years, I've worked across UI/UX design, graphic design, and media production bringing creativity and structure to every project."
      />
      
      <div className="experience-details">
        <div className="experience-column">
          <div className="experience-item">
            <p className="experience-text">
              UI/UX Designer designing interactive mobile apps and websites, focusing on usability, accessibility, and visual harmony.
            </p>
          </div>
          <div className="experience-item">
            <p className="experience-text">
              Graphic Designer at Hany Saad Innovations created visual campaigns and brand materials that aligned with high-end architectural concepts.
            </p>
          </div>
        </div>
        
        <div className="experience-column">
          <div className="experience-item">
            <p className="experience-text">
              Motion & Media Designer at Vivid Studios produced engaging digital visuals, animations, and social media reels.
            </p>
          </div>
          <div className="experience-item">
            <p className="experience-text">
              Freelance Designer delivered complete brand identities, logos, and marketing visuals for various clients.
            </p>
          </div>
        </div>
      </div>

      <p className="experience-conclusion">
        This experience helped me grow as a multitalented designer, blending aesthetic design with user psychology and research based thinking.
      </p>
    </div>
  );
};

export default WorkExperienceSection;

