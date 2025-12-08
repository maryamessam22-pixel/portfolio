import React from 'react';
import './WorkExperienceSection.css';
import TextParagraph from './TextParagraph';

const WorkExperienceSection = () => {
  return (<>

<div className='BIGDIV'>
   <TextParagraph 
        title="Work Experience" 
        txt="Over the years, I’ve worked across UI/UX design, graphic design, and media production bringing creativity, structure, and strategic thinking to every project. My work spans designing mobile apps, websites, brand campaigns, motion graphics, and visual identities for a wide range of clients in industries like architecture, fitness, lifestyle, and digital media.
These experiences strengthened my ability to translate ideas into functional and visually compelling solutions, always grounded in user behavior, accessibility, and research-driven design principles. I’ve learned to adapt quickly, communicate effectively, and deliver polished work under different creative directions.
This journey shaped me into a multitalented designer with a balanced skill set combining aesthetics, psychology, storytelling, and technology to create meaningful and memorable user experiences."
      />
      </div>
    
    <div className="work-experience-section">
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

    </>
  );
};

export default WorkExperienceSection;

