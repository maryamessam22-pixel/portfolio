import React, { useState } from 'react';
import './ProjectImageGallery.css';

const ProjectImageGallery = ({ title, coverImage, images = [] }) => {
  const galleryImages = [...new Set([coverImage, ...images].filter(Boolean))];
  const [activeIndex, setActiveIndex] = useState(0);

  if (galleryImages.length === 0) {
    return <p className="project-gallery-empty">No images available</p>;
  }

  const showPrevious = () => {
    setActiveIndex(index => (index - 1 + galleryImages.length) % galleryImages.length);
  };
  const showNext = () => {
    setActiveIndex(index => (index + 1) % galleryImages.length);
  };

  return (
    <div className="project-image-gallery">
      <div className="project-gallery-feature">
        <img
          src={galleryImages[activeIndex]}
          alt={`${title}, view ${activeIndex + 1}`}
          className="project-gallery-main-image"
        />
        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              className="project-gallery-arrow project-gallery-previous"
              onClick={showPrevious}
              aria-label="Show previous project image"
            >
              ‹
            </button>
            <button
              type="button"
              className="project-gallery-arrow project-gallery-next"
              onClick={showNext}
              aria-label="Show next project image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {galleryImages.length > 1 && (
        <div className="project-gallery-thumbnails" aria-label="Project images">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`project-gallery-thumbnail${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show project image ${index + 1}`}
              aria-pressed={index === activeIndex}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectImageGallery;
