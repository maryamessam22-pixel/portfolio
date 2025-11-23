import React from 'react';
import './ScrollingSkills.css'; // استدعاء ملف الـ CSS الخاص بيه

const ScrollingSkills = ({ skills }) => {
  return (
    <div className="scrolling-skills-container">
      <div className="scrolling-skills-wrapper">
        
        {/* القائمة الأصلية */}
        <div className="scrolling-skills-content">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>

        {/* قائمة مكررة عشان الأنيميشن يكمل بدون تقطيع */}
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