import React, { useState, useEffect } from "react";
import "./AboutSection.css";
// Corrected Imports
import TextParagraph from "../common/TextParagraph";
import ScrollingSkills from "./ScrollingSkills"; // Same folder
import { supabase } from "../../config/Supabase";

const AboutSection = () => {
  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState(null);
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    async function getAboutData() {
      // 1) Fetch About Section Data
      const { data: aboutData } = await supabase
        .from("about_sections")
        .select("title, description, images")
        .eq("id", 1)
        .single();

      setAbout(aboutData);

      // 2) Fetch Skills Data
      const { data: skillsData } = await supabase
        .from("Skills")
        .select("name")
        .order("id", { ascending: true });

      setSkillsList(skillsData ? skillsData.map(s => s.name) : []);
      setLoading(false);
    }

    getAboutData();
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
      <div className="about-section-container">
        <div className="about-content-wrapper">

          <div className="about-text-section">
            <TextParagraph title={about?.title} />

            <div className="about-text-content">
              <p className="about-paragraph">
                {about?.description}
              </p>
            </div>
          </div>

          <div className="about-image-section">
            {about?.images && (
              <div className="image-container">
                <img
                  src={Array.isArray(about.images) ? about.images[0] : about.images}
                  alt="About"
                  className="about-profile-img"
                />
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Skills Component */}
      <ScrollingSkills skills={skillsList} />
    </>
  );
};

export default AboutSection;