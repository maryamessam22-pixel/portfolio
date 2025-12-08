import React from 'react';
import './WorkExperienceSection.css';
import TextParagraph from './TextParagraph';

const WorkExperienceSection = () => {
  return (
    <div className="work-experience-section">
      <TextParagraph 
        title="Work Experience" 
        txt="Over the years, I've worked across UI/UX design, graphic design, and media production bringing creativity and structure to every project.
        This experience helped me grow as a multitalented designer, blending aesthetic design with user psychology and research based thinking."
      />
      
<p className="experience-conclusion">
  
</p>
      
      <div className="experience-grid">

  <div className="experience-card">
    <h3>Vivid Studios</h3>
    <p className="role">Motion & Media Designer</p>
    <ul>
      <li>Produced engaging digital visuals, animations, and social media reels.</li>
    </ul>
  </div>

  <div className="experience-card">
    <h3>Hany Saad Innovations</h3>
    <p className="role">Graphic Designer</p>
    <ul>
      <li>Created visual campaigns and brand materials aligned with high-end architectural concepts.</li>
    </ul>
  </div>

  <div className="experience-card">
    <h3>KGoing Company</h3>
    <p className="role">Graphic Designer</p>
    <ul>
      <li>Created visual campaigns, logos, and brand materials for supplements and fitness branding.</li>
    </ul>
  </div>

  <div className="experience-card">
    <h3>Freelance</h3>
    <p className="role">UI/UX Designer</p>
    <ul>
      <li>Designed interactive apps and websites focusing on usability, accessibility, and harmony.</li>
    </ul>
  </div>

</div>


    </div>
  );
};

export default WorkExperienceSection;

