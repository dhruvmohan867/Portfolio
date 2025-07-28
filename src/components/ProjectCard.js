import React from 'react';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="proj-imgbx card-equal-height">
      <img src={imgUrl} alt={title} className="project-image" />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

