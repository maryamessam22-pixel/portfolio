import React, { useState, useEffect } from 'react';
import './WorkExperienceSection.css';
import TextParagraph from '../common/TextParagraph';
import { supabase } from '../../config/Supabase';

const WorkExperienceSection = () => {
  const [workExperienceData, setWorkExperienceData] = useState(null);
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    async function getWorkExperienceData() {
      const { data: sectionData } = await supabase
        .from("about_sections")
        .select("*")
        .eq("id", 3)
        .single();

      setWorkExperienceData(sectionData);

      const { data: experiences } = await supabase
        .from("work_experience")
        .select("*");

      if (experiences) {
        setExperienceList(experiences);
      }
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
        {experienceList.map((item, index) => (
          <div className="experience-card" key={item.id || index}>
            <h3>{item.company}</h3>
            <p className="role">{item.role}</p>
            <ul>
              <li>{item.description}</li>
            </ul>
          </div>
        ))}
      </div>


    </div>

  </>
  );
};

export default WorkExperienceSection;