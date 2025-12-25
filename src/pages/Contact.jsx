import React from 'react';
import Navbar from '../components/layout/Navbar';
import "./Contact.css";
import Arrow from '../components/common/Arrow';
import SEO from '../components/common/SEO';
import ScrollingSkills from '../components/sections/ScrollingSkills';
import ContactForm from '../components/forms/ContactForm';
import Footer from '../components/layout/Footer';
import "../components/forms/ContactForm.css";

const Contact = () => {
  const skillsList = [
    "Video Editing",
    "Graphic Design",
    "UI/UX Design",
    "01112866320",
    "Branding",
    "Logo Design",
    "Video Editing",
    "maryamessam22@gmail.com",
    "Graphic Design",
    "UI/UX Design",
    "Branding",
    "www.mariamfarid.com",
    "Logo Design"
  ];

  return (
    <>
      <div className="form-page">
        <Navbar />
        <Arrow />
        <SEO
          title="Mariam Essam - Contact Me"
          description="Connect with Mariam Essam. Reach out for UI/UX design collaborations, freelance projects, and creative opportunities."
        />

        <div className="contact-page">


          <div className="contact-content">
            <div className="contact-info">
              <h2>Let's Work Together</h2>
              <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email Me</h4>
                    <a href="mailto:contact.mariamfarid.com">contact.mariamfarid.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Call Me</h4>
                    <a href="tel:01112866320">+01112866320</a>
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
                <a href="https://www.linkedin.com/in/mariam-essam-b1655121b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.063 2.063 0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

       </div>
     </div>

            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
        <ScrollingSkills skills={skillsList} />
      </div>
      <Footer />

    </>
  );
}

export default Contact;