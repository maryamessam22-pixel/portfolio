import React from 'react';
import "./SkillsSection.css";

// استقبلنا icons هنا كـ Prop
const SkillsSection = ({ title, subtitle, description, icons = [] }) => {
    
    return (
        <>
        <section className="skills-section">
            <div className="skills-header">
                {/* بنعرض العناوين لو موجودة */}
                <h1 className="skills-title">{title || "Skills"}</h1>
                <div className="header-divider"></div>
                <h2 className="skills-subtitle">{subtitle || ""}</h2>
            </div>

            <div className="skills-content">
                {/* عرض الوصف (HTML) */}
                {description && (
                    <div 
                        className="skills-paragraph" 
                        dangerouslySetInnerHTML={{ __html: description }} 
                    />
                )}
            </div>
        </section>

        {/* عرض الأيقونات اللي جاية من جدول Skills */}
        <div className="skills-icons-container">
            {icons && icons.length > 0 ? (
                icons.map((skill, index) => {
                    // هنا الذكاء: بنشوف الصورة موجودة في أنهي عمود
                    // (icon_url حسب جدولك، أو image أو url احتياطي)
                    const imgSource = skill.icon_url || skill.image || skill.url;
                    
                    if (!imgSource) return null; // لو مفيش صورة، منرسمش الدائرة دي

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