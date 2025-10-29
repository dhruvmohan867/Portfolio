import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import certificateImg1 from "../assets/img/download.png";
import certificateImg2 from "../assets/img/unnamed.jpg";
import TrackVisibility from 'react-on-screen';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import proImg4 from "../assets/img/ChatGPT Image Aug 28, 2025, 10_46_38 PM.png";
import githubLogo from "../assets/img/github.svg";
import navIcon2 from '../assets/img/nav-icon2 (2).svg';
import React, { useMemo, useState } from "react"; // add
import { motion } from "framer-motion"; // add

export const Projects = () => {
  const projects = [
    {
      title: "Video-Sharing Backend",
      description: "A scalable backend for a video-sharing app using Node.js, Express.js, MongoDB, Mongoose, JWT, and Cloudinary",
      imgUrl: proImg4,
      github: "https://github.com/dhruvmohan867/Backend",
      demo: null
    },
    {
      title: "Alpha-Predict",
      description: "A full-stack web application that fetches real-time stock data, stores it in a PostgreSQL database, and uses machine learning to predict next-day closing prices. Built with FastAPI, React, and scikit-learn",
      imgUrl: "/Screenshot 2025-10-21 232937.png",
      github: "https://github.com/dhruvmohan867/stock-predictor",
      demo: "https://stock-predictor-five-opal.vercel.app/"
    },
    {
      title: "Ecommerce Website",
      description: "A modern e-commerce platform built with React.js, featuring authentication, product listings, and reusable UI components. Responsive and backend-ready",
      imgUrl: "https://ecommerce-website-frontend3.onrender.com/Pogo.webp",
       github: "https://github.com/dhruvmohan867/Ecommerce-Website", // add if available
      demo: "https://ecommerce-website-frontend3.onrender.com/"
    },
  ];

  // Skill categories with icons and details
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaHtml5 className="skill-category-icon" />,
      skills: [
        { name: "HTML", level: 95, icon: <FaHtml5 /> },
        { name: "CSS", level: 90, icon: <FaCss3Alt /> },
        { name: "JavaScript", level: 85, icon: <FaJs /> },
        { name: "React", level: 90, icon: <FaReact /> },
        { name: "React Router", level: 85, icon: <FaCode /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="skill-category-icon" />,
      skills: [
        { name: "Node.js", level: 80, icon: <FaNodeJs /> },
        { name: "Express", level: 75, icon: <SiExpress /> },
        { name: "MongoDB", level: 70, icon: <SiMongodb /> },
        { name: "Database Management", level: 75, icon: <FaDatabase /> },
        { name: "APIs", level: 80, icon: <FaCode /> }
      ]
    },
    {
      title: "Learning Goals",
      icon: <FaCode className="skill-category-icon" />,
      skills: [
        { name: "Fullstack Proficiency", level: 70 },
        { name: "Advanced React Patterns", level: 65 },
        { name: "Performance Optimization", level: 60 },
        { name: "Cloud Deployment", level: 65 },
        { name: "Testing Strategies", level: 60 }
      ]
    }
  ];

  // add: state + derived data for innovative skills UI
  const categories = useMemo(
    () => ['All', ...skillCategories.map(c => c.title)],
    [skillCategories]
  );
  const allSkills = useMemo(
    () => skillCategories.flatMap(c =>
      (c.skills || []).map(s => ({ ...s, category: c.title }))
    ),
    [skillCategories]
  );
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minLevel, setMinLevel] = useState(0);

  const filteredSkills = useMemo(() => {
    return allSkills
      .filter(s =>
        (selectedCategory === 'All' || s.category === selectedCategory) &&
        (typeof s.level === 'number' ? s.level >= minLevel : true)
      )
      .sort((a, b) => (b.level ?? 0) - (a.level ?? 0));
  }, [allSkills, selectedCategory, minLevel]);

  // add: helpers to convert numeric level to UI without showing raw %
  const toSegments = (level) => Math.max(0, Math.min(5, Math.round((level ?? 0) / 20)));
  const levelToTier = (level) => {
    const v = level ?? 0;
    if (v >= 90) return { key: 'expert', label: 'Expert' };
    if (v >= 75) return { key: 'advanced', label: 'Advanced' };
    if (v >= 60) return { key: 'intermediate', label: 'Intermediate' };
    return { key: 'beginner', label: 'Beginner' };
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className="isVisible">
                  <h2 className="brand-gradient" style={{ fontSize: 48 }}>Projects</h2>
                  <p style={{ maxWidth: 820, margin: "12px auto 28px" }}>
                    Selected work showcasing full‑stack skills, UI craft, and performance focus.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item><Nav.Link eventKey="first">Projects</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="second">My Skills</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="third">Certificates</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className="isVisible">
                      <Tab.Pane eventKey="first">
                        <Row className="g-4">
                          {projects.map((project, index) => (
                            <Col key={index} xs={12} sm={6} md={4} className="d-flex">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* My Skills pane (updated: no raw percentages, tier + segments) */}
                      <Tab.Pane eventKey="second">
                        <div className="skills-container">
                          <div className="skills-header text-center mb-4">
                            <h2 className="mb-2">My Technical Skills</h2>
                            <p className="lead">
                              Explore my core stack. Filter by category and proficiency to discover my strengths.
                            </p>
                          </div>

                          {/* Controls */}
                          <div className="skills-controls">
                            <div className="chip-row">
                              {categories.map((cat) => (
                                <button
                                  key={cat}
                                  className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                                  onClick={() => setSelectedCategory(cat)}
                                >
                                  {cat}
                                </button>
                              ))}
                            </div>

                            <div className="range-wrap">
                              <label htmlFor="minLevel">Minimum proficiency</label>
                              <div className="range-row">
                                <input
                                  id="minLevel"
                                  type="range"
                                  min="0"
                                  max="100"
                                  step="5"
                                  value={minLevel}
                                  onChange={(e) => setMinLevel(parseInt(e.target.value, 10))}
                                />
                                <span className="range-value">{minLevel}%</span>
                              </div>
                            </div>
                          </div>

                          {/* Matrix */}
                          <div className="skill-matrix">
                            {filteredSkills.map((skill, i) => {
                              const tier = levelToTier(skill.level);
                              const segs = toSegments(skill.level);
                              return (
                                <motion.div
                                  key={`${skill.name}-${i}`}
                                  className="skill-tile"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.25, delay: i * 0.03 }}
                                >
                                  <div className="tile-header">
                                    <div className="skill-badge">
                                      <span className="skill-icon">{skill.icon || <FaCode />}</span>
                                    </div>
                                    <div className="skill-meta">
                                      <span className="skill-name">{skill.name}</span>
                                      {typeof skill.level === 'number' && (
                                        <span
                                          className={`tier-badge ${tier.key}`}
                                          title="Proficiency tier"
                                          aria-label={`${skill.name} ${tier.label}`}
                                        >
                                          {tier.label}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {typeof skill.level === 'number' && (
                                    <div
                                      className="segments"
                                      role="img"
                                      aria-label={`${skill.name} ${tier.label} proficiency`}
                                    >
                                      {[0, 1, 2, 3, 4].map((idx) => (
                                        <span key={idx} className={`seg ${idx < segs ? 'on' : ''}`} />
                                      ))}
                                    </div>
                                  )}

                                  <div className="tile-footer">
                                    <span className="category-chip">{skill.category}</span>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Optional summary stays */}
                          <div className="skills-summary mt-5">
                            <h3 className="text-center mb-3">Development Goals</h3>
                            <p className="text-center">
                              Growing into a stronger full‑stack engineer by deepening backend expertise,
                              modern React patterns, and performance optimization.
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <section id="certificates">
                          <h2 style={{ color: '#f5f5f5' }}>Certificates</h2>
                          <ul className="certificates-list">
                            <li className="certificate-item">
                              <img src={certificateImg1} alt="Certificate 3" className="certificate-img" />
                              <div className="certificate-info">
                                <a href="https://drive.google.com/file/d/12ycF1dyFke4F-nasUxnsx16PBkfTvmPu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                  Overview of Machine learning
                                </a>
                                <p>I completed a workshop on AI/ML at IIT Kanpur, where I gained valuable insights into the fundamentals of artificial intelligence and machine learning. The workshop provided hands-on experience with various machine learning algorithms and techniques, enhancing my understanding of how to apply these concepts to real-world problems. This experience has significantly broadened my knowledge and skills in the AI/ML domain.</p>
                              </div>
                            </li>
                            <li className="certificate-item">
                              <img src={certificateImg2} alt="Certificate 1" className="certificate-img" />
                              <div className="certificate-info">
                                <a href="https://drive.google.com/file/d/1dsYbx0205wW-FpQUnp_xMt7ujYp5irQK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                  Internal Hackathon
                                </a>
                                <p>I participated in the Internal Hackathon of Smart Indian Hackathon, where I successfully secured 3rd position. This experience allowed me to collaborate with a talented team, solve complex problems, and innovate under pressure. Our project was well-received for its creativity and technical execution, highlighting my skills in problem-solving and teamwork.</p>
                              </div>
                            </li>
                          </ul>
                        </section>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* keep your existing styles, lightly tuned */}
      <style jsx>{`
        .skills-container {
          padding: 28px;
          background: linear-gradient(135deg, rgba(26,26,46,.9) 0%, rgba(22,33,62,.9) 100%);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          box-shadow: 0 18px 50px rgba(0,0,0,.35);
          overflow-x: hidden; /* prevent any horizontal overflow */
        }

        .skills-controls {
          display: flex;
          gap: 18px;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }
        .chip-row {
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .filter-chip {
          padding: 8px 12px;
          border-radius: 999px;
          color: #e2e8f0;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          font-weight: 700;
          letter-spacing: .2px;
          transition: transform .15s ease, background .2s ease, border-color .2s ease;
        }
        .filter-chip:hover { transform: translateY(-1px); }
        .filter-chip.active {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-color: rgba(255,255,255,0.2);
          color: #fff;
        }

        .range-wrap { display: grid; gap: 6px; min-width: 260px; }
        .range-wrap label { font-weight: 700; color: #cbd5e1; font-size: .9rem; }
        .range-row { display: flex; align-items: center; gap: 10px; }
        .range-row input[type="range"] { width: 200px; accent-color: #22d3ee; }
        .range-value { min-width: 42px; text-align: right; color: #e2e8f0; font-weight: 700; }

        .skill-matrix {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
          grid-auto-rows: 1fr;        /* equal height tiles per row */
          width: 100%;
        }
        .skill-tile {
          background: var(--card);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          padding: 14px;
          display: flex;              /* flex prevents content from stretching out */
          flex-direction: column;
          gap: 10px;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
          box-shadow: 0 10px 28px rgba(2,6,23,0.35);
          contain: layout paint;      /* avoid hover shadows affecting layout */
        }
        .skill-tile:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.18);
          box-shadow: 0 16px 40px rgba(2,6,23,0.45);
        }

        .tile-header { display: flex; align-items: center; gap: 10px; }
        .skill-badge {
          width: 38px; height: 38px; border-radius: 10px;
          display: grid; place-items: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          flex: 0 0 auto;
        }
        .skill-icon :global(svg) { width: 18px; height: 18px; color: #7dd3fc; }

        /* prevent header from pushing tile width */
        .skill-meta {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 8px;
          min-width: 0;
          width: 100%;
        }
        .skill-name {
          font-weight: 800; color: #eef2ff; letter-spacing: .2px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }

        .tier-badge {
          padding: 4px 10px;
          border-radius: 999px;
          font-size: .75rem;
          font-weight: 800;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: #e2e8f0;
          letter-spacing: .2px;
          white-space: nowrap;
        }
        .tier-badge.expert { background: linear-gradient(90deg, var(--primary), var(--secondary)); color: #fff; border-color: rgba(255,255,255,0.2); }
        .tier-badge.advanced { background: rgba(14,165,233,.15); color: #7dd3fc; border-color: rgba(125,211,252,.25); }
        .tier-badge.intermediate { background: rgba(168,85,247,.12); color: #d8b4fe; border-color: rgba(216,180,254,.25); }
        .tier-badge.beginner { background: rgba(255,255,255,0.06); color: #cbd5e1; border-color: rgba(255,255,255,0.12); }

        /* Five‑segment bar: grid-based so it never overflows the tile */
        .segments {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          column-gap: 8px;
          align-items: center;
          margin-top: 6px;
          width: 100%;
        }
        .seg {
          width: 100%;
          height: 8px;
          border-radius: 6px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          transition: background .25s ease, transform .2s ease, box-shadow .25s ease;
        }
        .seg.on {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          box-shadow: 0 0 14px rgba(14,165,233,.35);
          transform: translateY(-1px);
        }

        .tile-footer { display: flex; justify-content: flex-end; }
        .category-chip {
          padding: 4px 8px;
          border-radius: 999px;
          color: #cbd5e1;
          font-size: .75rem;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
        }

        .project .nav.nav-pills .nav-link { color: #e2e8f0; font-weight: 700; }
      `}</style>
    </section>
  )
}
