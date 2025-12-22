import React from 'react';
import "./SkillsSection.css";


const SkillsSection = ({ title, subtitle, description, icons = [] }) => {
    
    return (
        <>
        <section className="skills-section">
            <div className="skills-header">
              
                <h1 className="skills-title">{title || "Skills"}</h1>
                <div className="header-divider"></div>
                <h2 className="skills-subtitle">{subtitle || ""}</h2>
            </div>

            <div className="skills-content">
                
                {description && (
                    <div 
                        className="skills-paragraph" 
                        dangerouslySetInnerHTML={{ __html: description }} 
                    />
                )}
            </div>
        </section>

        
        <div className="skills-icons-container">
            {icons && icons.length > 0 ? (
                icons.map((skill, index) => {
                    
                    const imgSource = skill.icon_url || skill.image || skill.url;
                    
                    if (!imgSource) return null; 

                    return (
                        <div key={skill.id || index} className="skill-icon-card">
                            <img src={imgSource} alt="Skill" className="skill-image" />
                        </div>
                    );
                })
            ) : (
                <p style={{textAlign:'center', width:'100%', color:'#888'}}>
                    
                </p>
            )}
        </div>
        </>
    );
};

export default SkillsSection;