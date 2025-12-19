import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TextParagraph from "../components/TextParagraph";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import BTN from "../components/BTN";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";

import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [hero, setHero] = useState(null);
  const [about, setAbout] = useState(null);
  const [categories, setCategories] = useState(null);
  const [skillsInfo, setSkillsInfo] = useState(null);
  const [skillsIcons, setSkillsIcons] = useState([]);

  
 useEffect(() => {
  async function getHomeData() {
    try {
      const { data: sections } = await supabase
        .from("page_sections")
        .select("*")
        .eq("page", "home");

      setHero(sections.find(s => s.section === "hero"));
      setAbout(sections.find(s => s.section === "about_sec"));
      setCategories(sections.find(s => s.section === "category_sec"));
      setSkillsInfo(sections.find(s => s.section === "skills_sec"));

      const { data: icons } = await supabase
        .from("Skills")
        .select("*");

      setSkillsIcons(icons || []);
    } catch (error) {
      console.error("Home fetch error:", error);
    } finally {
      setLoading(false);
    }
  }

  getHomeData();
}, []);


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
        title={hero?.title}
        subtitle={hero?.subtitle}
      />

   
      <section className="ALL">
        <div className="both">
          <TextParagraph title={about?.title} />
          <TextParagraph txt={about?.description} />
        </div>

       
        {about?.images && about.images.length > 0 && (
          <img
            src={about.images[0]}
            alt="About"
            className="about-img"
          />
        )}
      </section>


      <div className="buttons">
     
            <BTN btn="Download my CV" />
       

        <Link to="/about">
          <BTN btn="Read more" />
        </Link>
      </div>

    
      <div className="both2">
        <TextParagraph title={categories?.title} />
        <TextParagraph txt={categories?.description} />
      </div>

      {categories && (
        <ProjectsSection
          categories={categories.tags}
          images={categories.images}
        />
      )}

      <SkillsSection
        title={skillsInfo?.title}
        subtitle={skillsInfo?.subtitle}
        description={skillsInfo?.description}
        icons={skillsIcons}
      />

      <Footer />
      <Arrow />
    </>
  );
};

export default Home;

