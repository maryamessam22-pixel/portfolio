import React, { Component } from "react";
import "./Header.css";

const iconData = [
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];


function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.bubbleRefs = [];
    this.velocitiesRef = [];
    this.hoveredRef = new Set();
    this.animationFrameId = null;
  }

  componentDidMount() {
    
    const initVelocities = () => {
      this.bubbleRefs.forEach((ref, idx) => {
        if (ref && !this.velocitiesRef[idx]) {
          this.velocitiesRef[idx] = {
            vx: randomInRange(-0.03, 0.03),
            vy: randomInRange(-0.025, 0.025),
          };
        }
      });
    };

  
    setTimeout(initVelocities, 100);

    let frameCount = 0;
    const animate = () => {
      frameCount++;
      

      if (frameCount % 2 === 0) {
        this.bubbleRefs.forEach((ref, idx) => {
          if (ref && this.velocitiesRef[idx]) {
            const vel = this.velocitiesRef[idx];
            const isHovered = this.hoveredRef.has(idx);
            
            
            const variation = isHovered ? 0.005 : 0.002;
            vel.vx += randomInRange(-variation, variation);
            vel.vy += randomInRange(-variation, variation);
            
            
            const maxVx = isHovered ? 0.08 : 0.04;
            const maxVy = isHovered ? 0.065 : 0.035;
            
            vel.vx = Math.max(-maxVx, Math.min(maxVx, vel.vx));
            vel.vy = Math.max(-maxVy, Math.min(maxVy, vel.vy));

            let x = parseFloat(ref.dataset.x) + vel.vx;
            let y = parseFloat(ref.dataset.y) + vel.vy;

           
            if (x <= 5 || x >= 95) {
              vel.vx *= -0.8;
              x = Math.max(5, Math.min(95, x));
            }
            if (y <= 5 || y >= 95) {
              vel.vy *= -0.8;
              y = Math.max(5, Math.min(95, y));
            }

            ref.dataset.x = x;
            ref.dataset.y = y;

            ref.style.left = `${x}%`;
            ref.style.top = `${y}%`;
          }
        });
      }
      this.animationFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  componentWillUnmount() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  render() {
   
    const { title, subtitle } = this.props;

    return (
      <div className="hero-bubbles-bg">
        <div className="hero-text">
          <div className="hero-title">
          
            <span className="title-main">{title || "UI/UX PORTFOLIO"}</span>
            <span className="hero-designer">Designer</span>
          </div>
         
          <div className="hero-name">{subtitle || "Mariam Farid"}</div>
        </div>
       
        {iconData.map((icon, idx) => {
          const size = randomInRange(150, 280);
          const x = randomInRange(5, 95);
          const y = randomInRange(5, 95);

          const pastelColors = [
            "rgba(156, 158, 238, 0.27)",
            "rgba(201, 120, 255, 0.37)",
            "rgba(238, 86, 162, 0.33)",
            "rgba(169, 239, 248, 0.22)",
            "rgba(113, 52, 131, 0.31)",
            "rgba(208, 239, 212, 0.33)",
          ];
          const color = pastelColors[idx % pastelColors.length];

          return (
            <div
              key={`${icon.name}-${idx}`}
              ref={el => (this.bubbleRefs[idx] = el)}
              className="bubble"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                left: `${x}%`,
                top: `${y}%`,
              }}
              data-x={x}
              data-y={y}
              onMouseEnter={() => this.hoveredRef.add(idx)}
              onMouseLeave={() => this.hoveredRef.delete(idx)}
            >
              <img src={icon.icon} alt={icon.name} className="bubble-icon" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Header;


// import React, { useState } from "react";
// import "./Header.css";
// import { Menu, X, Figma, Zap, Code } from "lucide-react";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="logo">Mariam’s Portfolio</div>

//       <nav className={`nav ${isOpen ? "open" : ""}`}>
//         <a href="#home">Home</a>
//         <a href="#projects">Projects</a>
//         <a href="#skills">Skills</a>
//         <a href="#contact">Contact</a>
//       </nav>

//       <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       <div className="icons">
//         <Figma className="float-icon" />
//         <Zap className="float-icon" />
//         <Code className="float-icon" />
//       </div>
//     </header>
//   );
// }

// export default Header;