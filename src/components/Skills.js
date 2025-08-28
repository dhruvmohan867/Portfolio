// src/components/Skills.js
import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skills = [
    { img: meter1, title: "Web Development" },
    { img: meter2, title: "Data Structures & Algorithms" },
    { img: meter3, title: "UI/UX Design" },
    { img: meter1, title: "Competitive Programming" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-box">
          <h2 className="skills-heading">My Skills</h2>
          <p className="skills-subtext">
            Proficient in <strong>C, C++, Java, SQL, HTML, CSS, JavaScript</strong> and experienced 
            with <strong>React, Node.js, Express.js, MongoDB, Bootstrap, Tailwind, Spring Boot</strong>.  
            Skilled in <strong>Data Structures & Algorithms</strong> with 500+ problems solved on 
            <strong> LeetCode, Codeforces & CodeChef</strong>.  
            Passionate about building scalable apps and clean user interfaces.
          </p>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            className="skill-slider"
          >
            {skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-card">
                  <img src={skill.img} alt={skill.title} />
                  <h5>{skill.title}</h5>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        .skills {
          padding: 80px 0;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #f8fafc;
          text-align: center;
        }

        .skills-box {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .skills-heading {
          font-size: 2.2rem;
          margin-bottom: 20px;
          font-weight: 700;
          color: #0ea5e9;
        }

        .skills-subtext {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .skill-item {
          padding: 15px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 25px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .skill-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
          background: rgba(255, 255, 255, 0.12);
        }

        .skill-card img {
          width: 90px;
          margin-bottom: 15px;
        }

        .skill-card h5 {
          margin: 0;
          font-size: 1.1rem;
          color: #e2e8f0;
          font-weight: 600;
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
