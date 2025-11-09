import React from 'react';
import "./SkillsSection.css";

const SkillsSection = (props) => {
    const skills = [
        { name: "React", icon: "⚛️" },
        { name: "Illustrator", icon: "Ai", color: "#FF9A00" },
        { name: "Photoshop", icon: "Ps", color: "#00A8FF" },
        { name: "Figma", icon: "F", color: "#A259FF" },
        { name: "After Effects", icon: "Ae", color: "#9D72FF" },
        { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
        { name: "Blender", icon: "B", color: "#F5792A" }
    ];

    return (
        <section className="skills-section">
            <div className="skills-header">
                <h1 className="skills-title">{props.title}</h1>
                <div className="header-divider"></div>
                <h2 className="skills-subtitle">{props.subtitle}</h2>
            </div>

            <div className="skills-content">
                <p className="skills-paragraph">{props.txt1}</p>
                <p className="skills-paragraph">{props.txt2}</p>
            </div>

            <div className="skills-icons-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-icon-card">
                        <div className="skill-icon">
                            {skill.icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;

