import React, { Component } from 'react';
import './EducationSection.css';
import TextParagraph from './TextParagraph';

const EducationSection = () => {
  return (
    <div className="education-section">
      <TextParagraph 
        title="Education" 
        txt="Bachelor's Student in Design and Visual Communication

Focused on developing creative thinking, user-centered design, and digital interfaces.

Throughout my studies, I explored UI/UX principles, 3D design, and visual storytelling, combining art and functionality to create engaging user experiences.

I've also completed specialized courses in Free Perspective, English, and 3D Modeling to strengthen both technical and communication skills essential for modern design."
      />
    </div>
  );
};

export default EducationSection;

