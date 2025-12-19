import React, { useState, useEffect } from "react";
import './EducationSection.css';
import TextParagraph from './TextParagraph';
import { supabase } from '../Supabase';

const EducationSection = () => {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    async function getEducationData() {
      const { data } = await supabase
        .from("about_sections")
        .select("*")
        .eq("id", 2)
        .single(); 

      setEducationData(data); 
    }

    getEducationData();
  }, []);

  return (
    <div className="education-section">
      <TextParagraph 
        title={educationData?.title } 
        txt={educationData?.description } 
      />
    </div>
  );
};

export default EducationSection;


