// src/components/ProjectCard.js
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, github, demo, tags, index = 0 }) => {
  return (
    <motion.div
      className="project-card-v2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="card-image-wrap">
        <img src={imgUrl} alt={title} className="card-image" />
        <div className="card-overlay">
          <div className="overlay-links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="overlay-btn">
                <FaGithub size={20} />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="overlay-btn">
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-desc">{description}</p>

        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag) => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        )}

        <div className="card-actions">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="action-btn primary-btn">
              <FaGithub size={14} /> <span>Source Code</span>
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="action-btn outline-btn">
              <FaExternalLinkAlt size={12} /> <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .project-card-v2 {
          display: flex;
          flex-direction: column;
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius);
          overflow: hidden;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
          height: 100%;
        }
        .project-card-v2:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          border-color: rgba(99,102,241,0.15);
        }

        .card-image-wrap {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: var(--bg);
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card-v2:hover .card-image {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 14, 26, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition);
        }
        .project-card-v2:hover .card-overlay { opacity: 1; }

        .overlay-links { display: flex; gap: 12px; }
        .overlay-btn {
          width: 44px; height: 44px;
          display: grid; place-items: center;
          border-radius: 50%;
          background: rgba(99,102,241,0.2);
          border: 1px solid rgba(99,102,241,0.3);
          color: #fff;
          transition: var(--transition);
          text-decoration: none;
        }
        .overlay-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
          transform: scale(1.1);
          color: #fff;
        }

        .card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }
        .card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
          letter-spacing: -0.2px;
        }
        .card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
          flex: 1;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .card-tag {
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.12);
          color: var(--primary-light);
        }

        .card-actions {
          display: flex;
          gap: 8px;
          margin-top: 8px;
          flex-wrap: wrap;
        }
        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
          letter-spacing: 0.2px;
        }
        .primary-btn {
          background: linear-gradient(135deg, var(--primary), #4f46e5);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .primary-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(99,102,241,0.3);
          color: #fff;
        }
        .outline-btn {
          background: transparent;
          color: var(--text-secondary);
          border: 1px solid var(--border);
        }
        .outline-btn:hover {
          border-color: rgba(99,102,241,0.25);
          color: var(--text);
          background: rgba(99,102,241,0.06);
        }

        @media (max-width: 576px) {
          .card-image-wrap { height: 160px; }
        }
      `}</style>
    </motion.div>
  );
};
