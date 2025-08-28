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
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          width: 100%;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
        }

        .project-image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #111827;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.06);
        }

        .project-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }

        .project-title {
          margin: 0;
          color: #f8fafc;
          font-size: 1.15rem;
          font-weight: 700;
        }

        .project-description {
          margin: 0;
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.45;
        }

        .project-links {
          display: flex;
          gap: 10px;
          margin-top: 8px;
          align-items: center;
        }

        .project-link-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 8px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(90deg, #0ea5e9, #0d9488);
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.18s ease, opacity 0.18s ease;
        }

        .project-link-button img {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .project-link-button.outline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e6eef6;
        }

        .project-link-button:hover {
          transform: translateY(-2px);
          opacity: 0.98;
        }

        @media (max-width: 576px) {
          .project-image-wrapper {
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
};
