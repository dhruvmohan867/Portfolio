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

      <style jsx>{`
        .project-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          position: relative;
          isolation: isolate;
        }
        .project-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(120deg, rgba(14,165,233,.4), rgba(13,148,136,.4), rgba(168,85,247,.35));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          pointer-events: none;
        }
        .project-image-wrapper { height: 220px; overflow: hidden; background: #0b1220; }
        .project-image { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
        .project-card:hover .project-image { transform: scale(1.06); }
        .project-content { padding: 18px; display: flex; flex-direction: column; gap: 12px; }
        .project-title { margin: 0; font-size: 1.1rem; font-weight: 800; letter-spacing: .3px; }
        .project-description { margin: 0; line-height: 1.5; }
        .project-links { display: flex; gap: 10px; margin-top: 6px; align-items: center; }
        .project-link-button {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 12px; border-radius: 10px; text-decoration: none;
          color: #fff; background: linear-gradient(90deg, #0ea5e9, #0d9488);
          font-weight: 700; font-size: .9rem; transition: transform .18s ease, opacity .18s ease;
        }
        .project-link-button img { width: 18px; height: 18px; object-fit: contain; }
        .project-link-button.outline {
          background: transparent; border: 1px solid rgba(255,255,255,0.12); color: #e6eef6;
        }
        .project-link-button:hover { transform: translateY(-2px); opacity: .98; }
        @media (max-width: 576px) { .project-image-wrapper { height: 180px; } }
      `}</style>
    </div>
  );
};
