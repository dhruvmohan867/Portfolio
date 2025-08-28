import React from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={imgUrl} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};
