import React, { Component } from 'react';
import { Link } from "react-router-dom";

 
import "./Navbar.css";
import Logo from "../assets/LOGO.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isScrolled: false
    };
  }

  isActive = (path) => {
    try {
      return window.location && window.location.pathname === path;
    } catch (e) {
      return false;
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleLinkClick = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen, isScrolled } = this.state;
    
    return (
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      
    <div className="logo">
          <Link to="/" onClick={this.handleLinkClick}>
            <img src={Logo} alt="MyLogo" />
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={this.handleLinkClick} className={this.isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/about" onClick={this.handleLinkClick} className={this.isActive('/about') ? 'active' : ''}>About</Link>
          <Link to="/uiux" onClick={this.handleLinkClick} className={this.isActive('/uiux') ? 'active' : ''}>Projects</Link>

          <Link to="/articles" onClick={this.handleLinkClick} className={this.isActive('/uiux') ? 'active' : ''}>Articles</Link>
          <a href="#contact" onClick={this.handleLinkClick}>Contact</a>
        </div>

        <div className="burger" onClick={this.toggleMenu}>
          <div className={`line line1 ${isOpen ? "rotate1" : ""}`}></div>
          <div className={`line line2 ${isOpen ? "fade" : ""}`}></div>
          <div className={`line line3 ${isOpen ? "rotate2" : ""}`}></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;