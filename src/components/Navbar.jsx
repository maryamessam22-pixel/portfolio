
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "../assets/LOGO.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,       
      isScrolled: false,   
      dropdownOpen: false  
    };
  }

 
  isActive = (path) => {
    try {
      const currentPath = window.location ? window.location.pathname : '';
      if (path === '/') {
        return currentPath === '/';
      }
      return currentPath.startsWith(path);
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

  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  handleLinkClick = () => {
    this.setState({ isOpen: false, dropdownOpen: false });
  }

  render() {
    const { isOpen, isScrolled, dropdownOpen } = this.state;

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

     
<div className={`projects-dropdown ${dropdownOpen ? 'open' : ''}`}>
  <div 
    className="projects-main nav-link"   
    onClick={this.toggleDropdown}
  >
    Projects <span className="arrow">{dropdownOpen ? '▲' : '▼'}</span>
  </div>
  {dropdownOpen && (
    <div className="dropdown-menu">
  
     <Link to="/uiux" onClick={this.handleLinkClick} className={this.isActive('/uiux') ? 'active' : ''}>UI/UX</Link>
     <Link to="/graphicdesign" onClick={this.handleLinkClick} className={this.isActive('/graphicdesign') ? 'active' : ''}>Graphic Design</Link>
     <Link to="/ar" onClick={this.handleLinkClick} className={this.isActive('/ar') ? 'active' : ''}>AR</Link>
     <Link to="/motion" onClick={this.handleLinkClick} className={this.isActive('/motion') ? 'active' : ''}>Motion</Link>
     <Link to="/photography" onClick={this.handleLinkClick} className={this.isActive('/photography') ? 'active' : ''}>Photography</Link>
     <Link to="/3d" onClick={this.handleLinkClick} className={this.isActive('/3d') ? 'active' : ''}>3D Modeling</Link>
     <Link to="/uiux" onClick={this.handleLinkClick} className={this.isActive('/uiux') ? 'active' : ''}>UI/UX</Link>
    </div>
  )}
</div>

          <Link to="/articles" onClick={this.handleLinkClick} className={this.isActive('/articles') ? 'active' : ''}>Articles</Link>
          <Link to="/contact" onClick={this.handleLinkClick} className={this.isActive('/contact') ? 'active' : ''}>Contact</Link>
        </div>

        {/* Burger Menu */}
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






// import React, { Component } from 'react';
// import { Link } from "react-router-dom";

 
// import "./Navbar.css";
// import Logo from "../assets/LOGO.png";

// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//       isScrolled: false
//     };
//   }

//   isActive = (path) => {
//     try {
//       const currentPath = window.location ? window.location.pathname : '';
//       if (path === '/') {
//         return currentPath === '/';
//       }
//       return currentPath.startsWith(path);
//     } catch (e) {
//       return false;
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   handleScroll = () => {
//     if (window.scrollY > 50) {
//       this.setState({ isScrolled: true });
//     } else {
//       this.setState({ isScrolled: false });
//     }
//   }

//   toggleMenu = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   }

//   handleLinkClick = () => {
//     this.setState({ isOpen: false });
//   }

//   render() {
//     const { isOpen, isScrolled } = this.state;
    
//     return (
//       <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      
//     <div className="logo">
//           <Link to="/" onClick={this.handleLinkClick}>
//             <img src={Logo} alt="MyLogo" />
//           </Link>
//         </div>

//         <div className={`nav-links ${isOpen ? "open" : ""}`}>
//           <Link to="/" onClick={this.handleLinkClick} className={this.isActive('/') ? 'active' : ''}>Home</Link>
//           <Link to="/about" onClick={this.handleLinkClick} className={this.isActive('/about') ? 'active' : ''}>About</Link>
//           <Link to="/uiux" onClick={this.handleLinkClick} className={this.isActive('/uiux') ? 'active' : ''}>Projects</Link>
//           <Link to="/articles" onClick={this.handleLinkClick} className={this.isActive('/articles') ? 'active' : ''}>Articles</Link>
//           <Link to="/contact" onClick={this.handleLinkClick} className={this.isActive('/contact') ? 'active' : ''}>Contact</Link>
//         </div>

//         <div className="burger" onClick={this.toggleMenu}>
//           <div className={`line line1 ${isOpen ? "rotate1" : ""}`}></div>
//           <div className={`line line2 ${isOpen ? "fade" : ""}`}></div>
//           <div className={`line line3 ${isOpen ? "rotate2" : ""}`}></div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;




