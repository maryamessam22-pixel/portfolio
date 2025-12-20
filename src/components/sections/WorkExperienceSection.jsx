import React, { useState, useEffect } from 'react';
import './WorkExperienceSection.css';
import TextParagraph from '../common/TextParagraph';
import { supabase } from '../../config/Supabase';

const WorkExperienceSection = () => {
  const [workExperienceData, setWorkExperienceData] = useState(null);

  useEffect(() => {
    async function getWorkExperienceData() {
      const { data } = await supabase
        .from("about_sections")
        .select("*")
        .eq("id", 3)
        .single();

      setWorkExperienceData(data);
    }

    getWorkExperienceData();
  }, []);

  return (<>

    <div className='BIGDIV'>
      <TextParagraph
        title={workExperienceData?.title}
        txt={workExperienceData?.description}
      />
    </div>

    <div className="work-experience-section">
      <div className="experience-grid">

        <div className="experience-card">
          <h3>Vivid Studios</h3>
          <p className="role">Motion & Media Designer</p>
          <ul>
            <li>Produced engaging digital visuals, animations, and social media reels.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>Hany Saad Innovations</h3>
          <p className="role">Graphic Designer</p>
          <ul>
            <li>Created visual campaigns and brand materials aligned with high-end architectural concepts.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>KGoing Company</h3>
          <p className="role">Graphic Designer</p>
          <ul>
            <li>Created visual campaigns, logos, and brand materials for supplements and fitness branding.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>Freelance</h3>
          <p className="role">UI/UX Designer</p>
          <ul>
            <li>Designed interactive apps and websites focusing on usability, accessibility, and harmony.</li>
          </ul>
        </div>

      </div>


    </div>

  </>
  );
};

export default WorkExperienceSection;