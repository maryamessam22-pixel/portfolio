import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/Supabase';
import './ScrollingSkills.css';

const ScrollingSkills = ({ skills }) => {
  const [skillsList, setSkillsList] = useState(skills || []);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data, error } = await supabase
          .from('page_sections')
          .select('description')
          .eq('page', 'Global')
          .single();

        if (error) {
          console.error('Error fetching skills ticker:', error);
          return;
        }

        if (data && data.description) {

          const fetchedSkills = data.description
            .split('•')
            .map(item => item.trim())
            .filter(item => item.length > 0);

          if (fetchedSkills.length > 0) {
            setSkillsList(fetchedSkills);
          }
        }
      } catch (err) {
        console.error('Unexpected error fetching skills:', err);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="scrolling-skills-container">
      <div className="scrolling-skills-wrapper">


        <div className="scrolling-skills-content">
          {skillsList.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>


        <div className="scrolling-skills-content" aria-hidden="true">
          {skillsList.map((skill, index) => (
            <span key={`duplicate-${index}`}>{skill}</span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ScrollingSkills;