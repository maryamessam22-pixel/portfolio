import React from 'react';
import "./SkillsSection.css";
import skill1 from '../assets/1.png';
import skill2 from '../assets/2.png';
import skill3 from '../assets/3.png';
import skill4 from '../assets/4.png';
import skill5 from '../assets/5.png';
import skill6 from '../assets/6.png';
import skill7 from '../assets/7.png';

const SkillsSection = (props) => {
    const skills = [
        { id: 1, image: skill1 },
        { id: 2, image: skill2 },
        { id: 3, image: skill3 },
        { id: 4, image: skill4 },
        { id: 5, image: skill5 },
        { id: 6, image: skill6 },
        { id: 7, image: skill7 }
    ];

    return (
        <>
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

        </section>
            <div className="skills-icons-container">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-icon-card">
                        <img src={skill.image} alt={`Skill ${skill.id}`} className="skill-image" />
                    </div>
                ))}
            </div>
            </>
    );
};

export default SkillsSection;

