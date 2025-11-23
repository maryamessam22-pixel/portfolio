import React from 'react';
import './AboutSection.css';
import TextParagraph from './TextParagraph';
import mariamImg from '../assets/ME2.png';
import ScrollingSkills from './ScrollingSkills'; 

const AboutSection = () => {
  

  const skillsList = [
    "Video Editing",
    "Graphic Design",
    "UI/UX Design",
    "Branding",
    "Logo Design",
    "Video Editing",
    "Graphic Design",
    "UI/UX Design",
    "Branding",
    "Logo Design"
  ];

  return (
    <div className="about-section-container">
      <div className="about-content-wrapper">
        
      
        <div className="about-text-section">
          <TextParagraph title="About Me" />
          <div className="about-text-content">
            <p className="about-paragraph">
              I'm a multitalented UI/UX Designer passionate about creating seamless digital experiences that balance aesthetics, usability, and innovation. My work bridges the gap between creative design and functional strategy, helping individuals and brands bring their visions to life through thoughtful, user-centered design solutions.
            </p>
            <p className="about-paragraph">
              With a strong background in UX research, user interface design, prototyping, and branding, I design websites, mobile apps, and interactive experiences that not only look beautiful but also deliver intuitive and engaging user journeys.
            </p>
            <p className="about-paragraph">
              Beyond digital design, I also work on 3D modeling, visual storytelling, and brand identity creation ensuring every project feels unique, authentic, and aligned with its purpose. My approach is rooted in consistency, creativity, and detail, aiming to deliver the best quality results with the most efficient and accessible solutions.
            </p>
            <p className="about-paragraph">
              Every project I design is treated as a one-of-a-kind experience no repetition, no templates just design with intent and impact.
            </p>
          </div>
        </div>

        
        <div className="about-image-section">
          <div className="image-container">
            <img src={mariamImg} alt="Mariam Farid" className="about-profile-img" />
          </div>
        </div>
      </div>

      <ScrollingSkills skills={skillsList} />

    </div>
  );
};

export default AboutSection;
