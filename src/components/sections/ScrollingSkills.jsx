import React, { Component } from 'react';
import './ScrollingSkills.css'; 

const ScrollingSkills = ({ skills }) => {
  return (
    <div className="scrolling-skills-container">
      <div className="scrolling-skills-wrapper">
        
    
        <div className="scrolling-skills-content">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>

    
        <div className="scrolling-skills-content" aria-hidden="true">
          {skills.map((skill, index) => (
            <span key={`duplicate-${index}`}>{skill}</span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ScrollingSkills;