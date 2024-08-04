import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
      {/* <div className="project-link-container">
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
      </div> */}
    </div>
  )
}
