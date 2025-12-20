import React from 'react';
import Navbar from '../components/layout/Navbar';
import Arrow from '../components/common/Arrow';
import Footer from '../components/layout/Footer';
import AboutSection from '../components/sections/AboutSection';
import EducationSection from '../components/sections/EducationSection';
import WorkExperienceSection from '../components/sections/WorkExperienceSection';
import "./About.css";
import SEO from '../components/common/SEO';

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