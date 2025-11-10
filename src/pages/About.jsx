import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Arrow from '../components/Arrow';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
// import TextParagraph from './../components/TextParagraph';
import "./About.css"



const About = () => {
  return (
    <>
      <Navbar />
      <AboutSection />

      
      <Footer />
      <Arrow />
    </>
  );
};

export default About;

