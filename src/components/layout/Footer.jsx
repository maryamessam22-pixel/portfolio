import React, { Component } from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import footerImage from '../../assets/footerimg.png';
// import wpIcon from '../assets/wp.png';
// import gmailIcon from '../assets/gmail.png';
// import linkedinIcon from '../assets/linkedin.png';
// import instagramIcon from '../assets/Group.png';
// import behanceIcon from '../assets/behance.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="blue-arc"></div>
        <div className="spiral-left"></div>
        <div className="spiral-right"></div>
        <div className="stars"></div>
      </div>
      
      <div className="footer-content">
        <div className="footer-image-container">
          <img src={footerImage} alt="Footer" className="footer-image" />
        </div>
        <h1 className="footer-heading">Let's Connect</h1>
        <p className="footer-subtitle">UI/UX Designer</p>
        
        <nav className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        
        <h2 className="footer-social-heading">Let's Socialize</h2>
        
        <div className="social-icons">
          <a href="https://wa.me/01112866320" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          
          <a href="mailto:contact.mariamfarid.com" target="_blank" rel="noopener noreferrer" className="social-icon gmail">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
          
          <a href="https://www.linkedin.com/in/mariam-essam-b1655121b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.063 2.063 0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a href="https://www.instagram.com/mariam_essamsaber?igsh=MXg5N2xhajIxNDZ4Yw==" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

         
            <a href="https://www.upwork.com/freelancers/~0155e845a47587b035"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon upwork">
              <svg
                viewBox="0 0 448 512"
                fill="currentColor"
                aria-label="Upwork"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM270.8 274.3c5.2 8.4 23.6 29.9 51.5 29.9v0c25.2 0 44.9-20.2 44.9-49.7s-19.4-49.7-44.9-49.7s-44.9 16.7-51.5 69.5zm-26.7-41.8c7.3-30.5 32.7-60.1 78.2-60.1l0 0c45.1 0 80.9 35.2 80.9 82.2s-35.9 81.9-80.9 81.9c-.6 0-1.1 0-1.7 0c-.5 0-1.1 0-1.6 0h-.1c-14.5-.5-28.7-4.8-40.9-12.6c-4.7-2.8-9.1-6-13.4-9.5l-12.8 78.4H214.9l19.4-110.6c-20.8-29.1-31.6-62.4-36.2-79.7V255c0 48-30.5 81.5-74.2 81.5c-22 0-41-8-54.8-23.3c-13.4-14.8-20.8-35.5-20.8-58.3V176.8H84.5l-.3 78.2c0 28.4 14.5 49.3 39.8 49.3s38.2-20.9 38.2-49.3V176.8h62.8c4.8 19.3 10.9 40.1 19.2 55.6z" />
              </svg>
            </a>


           <a href="https://www.freelancer.com/u/Mariam101128"
               target="_blank"
               rel="noopener noreferrer"
               className="social-icon freelancer">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-label="Freelancer">
                <path d="M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228Z" />
              </svg>
            </a>


              <a href="https://www.behance.net/Mariam_Farid"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="social-icon behance">
               <svg
                   viewBox="0 0 448 512"
                   fill="currentColor"
                   aria-label="Behance">
                <path d="M186.5 293c0 19.3-14 25.4-31.2 25.4h-45.1v-52.9h46c18.6.1 30.3 7.8 30.3 27.5zm-7.7-82.3c0-17.7-13.7-21.9-28.9-21.9h-39.6v44.8H153c15.1 0 25.8-6.6 25.8-22.9zm132.3 23.2c-18.3 0-30.5 11.4-31.7 29.7h62.2c-1.7-18.5-11.3-29.7-30.5-29.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM271.7 185h77.8v-18.9h-77.8V185zm-43 110.3c0-24.1-11.4-44.9-35-51.6 17.2-8.2 26.2-17.7 26.2-37 0-38.2-28.5-47.5-61.4-47.5H68v192h93.1c34.9-.2 67.6-16.9 67.6-55.9zM380 280.5c0-41.1-24.1-75.4-67.6-75.4-42.4 0-71.1 31.8-71.1 73.6 0 43.3 27.3 73 71.1 73 33.2 0 54.7-14.9 65.1-46.8h-33.7c-3.7 11.9-18.6 18.1-30.2 18.1-22.4 0-34.1-13.1-34.1-35.3h100.2c.1-2.3.3-4.8.3-7.2z" />
                </svg>
              </a>

      
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path fill="#0057ff" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"/>
  
  <path fill="#FFFFFF" d="M22.332 10.328c-.287-1.127-.728-2.12-1.32-2.98a4.852 4.852 0 0 0-3.522-1.835c-1.742 0-3.15.542-4.223 1.625C12.19 8.22 11.654 9.54 11.654 11.13c0 1.558.536 2.87 1.608 3.938 1.072 1.067 2.48 1.6 4.223 1.6 1.71 0 3.09-.5 4.14-1.5.83-.77.96-1.95.96-1.95s-2.05-.14-3.18-.5a1.18 1.18 0 0 1-.9-.75c-.17-.46-.25-1.18-.25-1.18s1.88.48 3.07.24c1.64-.32 2.92-1.6 3.02-3.41zM16.2 13.3c-.6 0-1.07-.4-1.07-1.13 0-.72.47-1.1 1.07-1.1s1.08.38 1.08 1.1c0 .73-.48 1.13-1.08 1.13zM0 5.513h4.11v12.974H0zm6.062 12.974h4.11V5.513h-4.11zM20.25 0h-4.5v3.313h4.5z"/>
</svg> */}
          
        </div>
        
        <p className="footer-copyright">© 2025 Mariam Essam. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

