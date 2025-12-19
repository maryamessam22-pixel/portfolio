import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { supabase } from '../Supabase';

import Header from '../components/Header';
import Navbar from './../components/Navbar';
import Arrow from '../components/Arrow';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import TextParagraph from './../components/TextParagraph';
import BTN from '../components/BTN';
import SkillsSection from './../components/SkillsSection';

import mariamImg from '../assets/ME.png';
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  
  const [sections, setSections] = useState({
    hero: null,
    about: null,
    category: null,
    skillsInfo: null
  });

  const [skillsIcons, setSkillsIcons] = useState([]);

  useEffect(() => {
    async function getHomeData() {
      try {
        // console.log("Fetching Home Data...");

        const { data: homeData, error } = await supabase
          .from('page_sections')
          .select('*')
          .eq('page', 'home'); 

        if (error) throw error;

        if (homeData) {
          setSections({
            hero: homeData.find(r => r.section === 'hero'),
            about: homeData.find(r => r.section === 'about_sec'),
            category: homeData.find(r => r.section === 'category_sec'),
            skillsInfo: homeData.find(r => r.section === 'skills_sec')
          });
        }

        const { data: icons } = await supabase
          .from('Skills')
          .select('*')
          .eq('type', 'icon');

        if (icons) setSkillsIcons(icons);

      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }

    getHomeData();
  }, []);

  // 🔥 دالة سحرية لإصلاح الصور 🔥
  // الوظيفة: بتشوف الداتا، لو جاية نص بتحولها لمصفوفة، ولو بايظة بترجع الصورة الافتراضية
  const getSafeImage = (imgData) => {
    if (!imgData) return mariamImg; // لو مفيش داتا رجع صورتك الافتراضية

    let validData = imgData;

    // 1. لو الداتا جاية String، حولها لـ Array
    if (typeof imgData === 'string') {
      try {
        validData = JSON.parse(imgData);
      } catch (e) {
        console.error("Error parsing image JSON:", e);
        return mariamImg;
      }
    }

    // 2. لو هي Array وفيها لينك، رجع أول لينك
    if (Array.isArray(validData) && validData.length > 0) {
      return validData[0];
    }

    return mariamImg;
  };

  // دالة مساعدة لزرار الـ CV والكاتيجوري (بترجع المصفوفة كاملة)
  const getSafeArray = (data) => {
      if (!data) return [];
      if (Array.isArray(data)) return data;
      try { return JSON.parse(data); } catch { return []; }
  };

  if (loading) return <div className="loading-center"><p>Loading...</p></div>;

  return (
    <>
      <Navbar />
      
      {/* 1. HERO SECTION */}
       <Header 
             title={sections.hero?.title} 
            subtitle={sections.hero?.subtitle}
      />

      
      {/* 2. ABOUT SECTION */}
      <section className='ALL'>
        <div className='both'>
          <TextParagraph title={sections.about?.title } />
           <TextParagraph txt={sections.about?.description } />
          
       
        </div>

        {/* 👇 هنا استخدمنا الدالة الجديدة عشان الصورة تظهر غصب عنها */}
        <img 
          src={getSafeImage(sections.about?.images)} 
          alt="About" 
          className="about-img" 
        />
      </section>

      <div className='buttons'>
         {/* استخدام الدالة للـ CV */}
         {getSafeArray(sections.about?.images)[1] ? (
            <a href={getSafeArray(sections.about.images)[1]} target="_blank" rel="noreferrer">
                <BTN btn='Download my CV'/>
            </a>
         ) : (
            <BTN btn='Download my CV'/>
         )}
         
         <Link to="/about">
            <BTN btn="Read more" />
         </Link>
      </div>

      {/* 3. CATEGORIES SECTION */}
      <div className='both2'>
        <TextParagraph title={sections.category?.title || ""} />
        <TextParagraph txt={sections.category?.description || ""} />
      </div>

      {sections.category && (
        <ProjectsSection 
           // بنستخدم getSafeArray عشان نضمن ان اللي رايح مصفوفة مش نص
           categories={getSafeArray(sections.category.tags)} 
           images={getSafeArray(sections.category.images)}
        />
      )}

      {/* 4. SKILLS SECTION */}
      <SkillsSection 
        title={sections.skillsInfo?.title || ""}
        subtitle={sections.skillsInfo?.subtitle || ""}
        description={sections.skillsInfo?.description || ""}
        icons={skillsIcons} 
      />

      <Footer />
      <Arrow />
    </>
  );
}

export default Home;