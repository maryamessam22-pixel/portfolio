import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from './../components/Navbar';
import Arrow from '../components/Arrow';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import "./Home.css";
import TextParagraph from './../components/TextParagraph';

import mariamImg from '../assets/ME.png';
import BTN from '../components/BTN';
import SkillsSection from './../components/SkillsSection';
const Home = () => {
    return ( 


<>
 <Navbar/>
     <Header/>

<section className='ALL'>
  <div className='both'>
  <TextParagraph title="About"/>
     <TextParagraph txt="I am Mariam Essam, studied at Egypt University
      of Informatics (EUI), Faculty of Digital
      Arts and Design, where I gained valuable knowledge and practical
      skills through diverse courses, creative projects, and collaborative 
      teamwork. I also gained huge knowledge in UI/UX Designer fundamentals
       and their applications in real projects. and how to use them to make
        people’s lives easier when interacting with designs."/>
 </div> 

      <img src={mariamImg} alt="Mariam Essam" className="about-img" />  

</section> 

<div className='buttons'>
    <BTN btn='Download my CV'/>
    <BTN btn='Read more'/>
</div>
    

<div className='both2'>
  <TextParagraph title="Projects"/>
     <TextParagraph txt="Showcasing my creative journey through diverse UI/UX projects, each designed with purpose, precision, and user empathy. Explore my work to see how design transforms ideas into engaging digital experiences."/>
 </div>

<ProjectsSection/> 

<SkillsSection 
  title="Skills"
  subtitle="A Comprehensive Overview of My UI/UX Designer Skills"
  txt1="My core expertise lies in UI/UX design, encompassing both User Experience and User Interface methodologies. This deep understanding forms the backbone of my design process, ensuring usability, creativity, and impact in every project."
  txt2="Using digital tools and techniques, I create multifunctional products, tailored to the needs of the target audience, always keeping the focus on usability and creativity as a UI/UX design."
/>










     <Footer/>
     <Arrow/>
</>










     );
}
 
export default Home;