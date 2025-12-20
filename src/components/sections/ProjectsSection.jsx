import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./ProjectsSection.css";
// Updated import path for the pattern image
import patternImage from '../../assets/pattern.png';

class ProjectsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  render() {
    const { isHovered } = this.state;
    
    // بنستقبل البيانات من الـ Home.js
    const { categories = [], images = [] } = this.props;

    // أماكن العناصر حوالين الفولدر (ثابتة للـ 6 عناصر)
    const positions = [
      "top-left",
      "mid-left",
      "bottom-left",
      "top-right",
      "mid-right",
      "bottom-right"
    ];

    // دمج البيانات (الاسم + الصورة + المكان + الرابط)
    const data = categories.map((label, index) => {
        // تحويل الاسم لرابط (مثال: "UI/UX" -> "uiux")
        // بنشيل المسافات والعلامات الخاصة ونحول لحروف صغيرة
        const slug = label.toLowerCase().replace(/[^a-z0-9]/g, '');

        return {
            id: index,
            label: label,
            position: positions[index] || "mid-right", // مكان احتياطي
            image: images[index] || null, // الصورة المقابلة
            link: `/${slug}` // الرابط الديناميكي
        };
    });

    // لو مفيش بيانات، منرسمش حاجة عشان الصفحة متبوظش
    if (data.length === 0) return null;

    return (
      <section className="projects-section-container">
        <div className={`projects-wrapper ${isHovered ? 'hovered' : ''}`}>

          {/* ---------------- LABELS (الأسماء اللي برة) ---------------- */}
          {data.map((item) => (
            <div key={item.id} className={`category-item ${item.position}`}>
              <Link to={item.link}>
                 <div className="category-label">{item.label}</div>
              </Link>
            </div>
          ))}

          {/* ---------------- FOLDER IMAGES (الصور اللي جوه) ---------------- */}
          <div
            className="central-folder"
            onMouseEnter={() => this.setState({ isHovered: true })}
            onMouseLeave={() => this.setState({ isHovered: false })}
          >
            {data.map((item) => {
              // لو العنصر ده ملوش صورة، منرسمش صورته
              if (!item.image) return null;

              return (
                <Link key={item.id} to={item.link}>
                  <div className={`folder-image folder-image-${item.position} ${isHovered ? 'moved-out' : ''}`}>
                     <img src={item.image} alt={item.label} />
                  </div>
                </Link>
              );
            })}

            {/* النص الثابت (My Projects) */}
            <div className="folder-top">
              <div className="folder-projects-text">
                <h2 className="projects-title"> My<br />Projects</h2>
              </div>
            </div>

            {/* الخلفية المزخرفة */}
            <div className="folder-pattern">
              <img src={patternImage} alt="Pattern" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsSection;