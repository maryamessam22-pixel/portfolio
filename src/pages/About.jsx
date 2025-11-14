import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Arrow from '../components/Arrow';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
// import TextParagraph from './../components/TextParagraph';
import "./About.css"
import SEO from '../components/SEO'



const About = () => {
  return (
    <>
      <SEO 
        title="Mariam-Farid-About-UI/UX-Designer" 
        description="Learn about Mariam Farid: education, experience, and skills in UI/UX design." 
      />
      <Navbar />
      <AboutSection />
      <Arrow />
      <EducationSection />
      <WorkExperienceSection />
      <Footer />
    </>
  );
};

export default About;

