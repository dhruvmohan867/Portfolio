// src/components/Skills.js
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 85, icon: <FaJs /> },
    { name: "React", level: 90, icon: <FaReact /> },
    { name: "Node.js", level: 80, icon: <FaNodeJs /> },
    { name: "Express.js", level: 75, icon: <SiExpress /> },
    { name: "MongoDB", level: 70, icon: <SiMongodb /> },
    { name: "Databases", level: 75, icon: <FaDatabase /> },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-box">
          <h2 className="skills-heading">Skills</h2>
          <p className="skills-subtext">
            I am proficient in <strong>C, C++, Java, SQL, HTML, CSS, JavaScript</strong> and experienced with 
            <strong> React, Node.js, Express.js, MongoDB, Spring Boot</strong>.  
            Strong grasp of <strong>Data Structures & Algorithms</strong> with 500+ problems solved on 
            <strong> LeetCode, Codeforces & CodeChef</strong>.  
            Passionate about building scalable apps & clean user interfaces.
          </p>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-text">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills {
          padding: 80px 0;
          background: #0f172a; /* matches your dark sections */
          color: #f8fafc;
          text-align: center;
        }

        .skills-box {
          max-width: 1000px;
          margin: 0 auto;
        }

        .skills-heading {
          font-size: 2.3rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #fff;
        }

        .skills-subtext {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.7;
          max-width: 850px;
          margin: 0 auto 50px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 20px;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
          background: rgba(255, 255, 255, 0.08);
        }

        .skill-header {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          gap: 10px;
        }

        .skill-icon {
          font-size: 22px;
          color: #0ea5e9; /* cyan accent to match gradient */
        }

        .skill-name {
          font-weight: 600;
          font-size: 1rem;
          color: #e2e8f0;
        }

        .progress-container {
          width: 100%;
          height: 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #0ea5e9, #0d9488);
          border-radius: 5px;
          position: relative;
          transition: width 1s ease-out;
        }

        .progress-text {
          position: absolute;
          right: 5px;
          top: -22px;
          font-size: 12px;
          color: #f8fafc;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .skills-heading {
            font-size: 1.8rem;
          }
          .skills-subtext {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};
