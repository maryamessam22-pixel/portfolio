import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import "./Contact.css";
import Arrow from '../components/Arrow';
import SEO from '../components/SEO'
import ScrollingSkills from './../components/ScrollingSkills';
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


    return ( <>
    
    <Navbar/>
    <Arrow/>
    <SEO 
        title="Mariam-Farid-About-UI/UX-Designer" 
        description="Connect with Mariam Essam. Reach out for UI/UX design collaborations, freelance projects, and creative opportunities." 
      />
    
    
      <ScrollingSkills skills={skillsList} />
    
    </> );
}
 
export default Contact;