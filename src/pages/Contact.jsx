import React from 'react';
import Navbar from './../components/Navbar';
import "./Contact.css";
import Arrow from '../components/Arrow';
import SEO from '../components/SEO';
import ScrollingSkills from './../components/ScrollingSkills';
import Formm from '../components/Formm';
import Footer from '../components/Footer';

const Contact = () => {
  const skillsList = [
    "Video Editing",
    "Graphic Design",
    "UI/UX Design",
    "Branding",
    "Logo Design",
    "Video Editing",
    "Graphic Design",
    "UI/UX Design",
    "Branding",
    "Logo Design"
  ];

  return (
    <>
      <Navbar />
      <Arrow />
      <SEO 
        title="Mariam Essam - Contact Me" 
        description="Connect with Mariam Essam. Reach out for UI/UX design collaborations, freelance projects, and creative opportunities." 
      />
      
      <div className="contact-page">
        <ScrollingSkills skills={skillsList} />
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Work Together</h2>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email Me</h4>
                  <a href="mailto:your.email@example.com">your.email@example.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Call Me</h4>
                  <a href="tel:+201234567890">+20 123 456 7890</a>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Cairo, Egypt</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Behance"><i className="fab fa-behance"></i></a>
              <a href="#" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <Formm />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;