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
        //   .eq('type', 'icon');

        if (icons) setSkillsIcons(icons);

      } catch (err) {
        console.error("Error fetching Home data:", err);
      } finally {
        setLoading(false);
      }
    }

    getHomeData();
  }, []);


  const getFirstImage = (imgData) => {
    if (!imgData) return null;

    if (Array.isArray(imgData) && imgData.length > 0) {
      return imgData[0];
    }

    if (typeof imgData === 'string') {
      try {
        const parsed = JSON.parse(imgData);
        return Array.isArray(parsed) && parsed.length > 0 ? parsed[0] : null;
      } catch {
        return null;
      }
    }

    return null;
  };


  const getSafeArray = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  };

  if (loading) {
    return (
      <div className="loading-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

   
      <Header
        title={sections.hero?.title || ""}
        subtitle={sections.hero?.subtitle || ""}
      />

      <section className="ALL">
        <div className="both">
          <TextParagraph title={sections.about?.title || ""} />
          <TextParagraph txt={sections.about?.description || ""} />
        </div>

        {getFirstImage(sections.about?.images) && (
          <img
            src={getFirstImage(sections.about.images)}
            alt="About"
            className="about-img"
          />
        )}
      </section>

    
       <div className="buttons">
        {getSafeArray(sections.about?.images)[1] ? (
          <a
            href={getSafeArray(sections.about.images)[1]}
            target="_blank"
            rel="noreferrer"
          >
            <BTN btn="Download my CV" />
          </a>
        ) : (
          <BTN btn="Download my CV" />
        )}

        <Link to="/about">
          <BTN btn="Read more" />
        </Link>
      </div>


      <div className="both2">
        <TextParagraph title={sections.category?.title || ""} />
        <TextParagraph txt={sections.category?.description || ""} />
      </div>

      {sections.category && (
        <ProjectsSection
          categories={getSafeArray(sections.category.tags)}
          images={getSafeArray(sections.category.images)}
        />
      )}

 
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
};

export default Home;
