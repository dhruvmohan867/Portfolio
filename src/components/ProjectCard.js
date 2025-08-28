// src/components/ProjectCard.js
import React from "react";
import githubLogo from "../assets/img/github.svg";
import navIcon2 from '../assets/img/nav-icon2 (2).svg';


export const ProjectCard = ({ title, description, imgUrl, github, demo }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={imgUrl} alt={title} className="project-image" />
      </div>

      <div className="project-content">
        <div>
          <h4 className="project-title">{title}</h4>
          <p className="project-description">{description}</p>
        </div>

        <div className="project-links">
          {github && (
            <a
              href={github}
              className="project-link-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
            >
              <img src={navIcon2} alt="GitHub" />
              <span>GitHub</span>
            </a>
          )}

          {demo && (
            <a
              href={demo}
              className="project-link-button outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} Live demo`}
            >
              <img src={githubLogo} alt="Live demo" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
