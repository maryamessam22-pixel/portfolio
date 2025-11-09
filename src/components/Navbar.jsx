import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/LOGO.png"; // now relative to src
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
    
  <div className="logo">
        <img src={Logo} alt="MyLogo" />
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#articles" onClick={toggleMenu}>Articles</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className={`line line1 ${isOpen ? "rotate1" : ""}`}></div>
        <div className={`line line2 ${isOpen ? "fade" : ""}`}></div>
        <div className={`line line3 ${isOpen ? "rotate2" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;