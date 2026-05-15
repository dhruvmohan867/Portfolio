import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import certificateImg1 from "../assets/img/download.png";
import certificateImg2 from "../assets/img/unnamed.jpg";
import breveImg from "../assets/img/breve-preview.png";
import aerodpiImg from "../assets/img/aerodpi-preview.png";
import stockImg from "../assets/img/stock-predictor-preview.png";
import TrackVisibility from 'react-on-screen';
import { FaAward, FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
import React from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Breve — Video Sharing Platform",
      description: "A full-stack YouTube-style platform built with the MERN stack. Features JWT auth, Cloudinary video uploads, real-time likes/comments, subscriptions, playlists, and channel dashboard.",
      imgUrl: breveImg,
      github: "https://github.com/dhruvmohan867/Breve",
      demo: "https://breve-pi.vercel.app/",
      tags: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "JWT"],
    },
    {
      title: "AeroDPI — Deep Packet Inspector",
      description: "A high-performance Deep Packet Inspection engine in C++ featuring custom memory pools, multi-threaded packet capture, protocol analysis (HTTP/TLS/DNS), and real-time traffic monitoring.",
      imgUrl: aerodpiImg,
      github: "https://github.com/dhruvmohan867/AeroDPI",
      demo: null,
      tags: ["C++", "Networking", "Systems", "Multi-threading", "libpcap"],
    },
    {
      title: "AlphaPredict — Stock Predictor",
      description: "Full-stack ML app that fetches real-time stock data, stores in PostgreSQL, and predicts next-day closing prices using scikit-learn. Built with FastAPI backend and React frontend.",
      imgUrl: stockImg,
      github: "https://github.com/dhruvmohan867/stock-predictor",
      demo: "https://stock-predictor-five-opal.vercel.app/",
      tags: ["FastAPI", "React", "PostgreSQL", "scikit-learn", "ML"],
    },
  ];

  const certificates = [
    {
      title: "AI/ML Workshop",
      issuer: "IIT Kanpur",
      date: "2023",
      image: certificateImg1,
      link: "https://drive.google.com/file/d/12ycF1dyFke4F-nasUxnsx16PBkfTvmPu/view?usp=sharing",
      tags: ["AI/ML", "Workshop"]
    },
    {
      title: "Smart India Hackathon — Internal",
      issuer: "SIH",
      date: "2023",
      image: certificateImg2,
      link: "https://drive.google.com/file/d/1dsYbx0205wW-FpQUnp_xMt7ujYp5irQK/view?usp=sharing",
      tags: ["Hackathon", "Teamwork"]
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className="isVisible">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="section-label">PORTFOLIO</p>
                    <h2 className="brand-gradient" style={{ fontSize: 42 }}>Featured Projects</h2>
                    <p style={{ maxWidth: 640, margin: "12px auto 32px" }}>
                      Selected work showcasing full-stack development, systems programming, and machine learning.
                    </p>
                  </motion.div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item><Nav.Link eventKey="first">Projects</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="third">Certificates</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className="isVisible">
                      <Tab.Pane eventKey="first">
                        <Row className="g-4">
                          {projects.map((project, index) => (
                            <Col key={index} xs={12} sm={6} md={4} className="d-flex">
                              <ProjectCard {...project} index={index} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <section className="cert-section" id="certificates">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                          >
                            <h3 className="brand-gradient" style={{ fontSize: 32, marginBottom: 8 }}>Certificates</h3>
                            <p style={{ color: "var(--text-secondary)", marginBottom: 24, maxWidth: 640 }}>
                              Recognitions and programs that strengthened practical skills.
                            </p>
                          </motion.div>

                          <div className="cert-grid">
                            {certificates.map((c, i) => (
                              <motion.article
                                key={c.title + i}
                                className="cert-card"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.3, delay: i * 0.08 }}
                              >
                                <div className="cert-ribbon"><FaAward /> <span>Certified</span></div>
                                <div className="cert-media">
                                  <img src={c.image} alt={`${c.title} certificate`} />
                                </div>
                                <div className="cert-body">
                                  <h4 className="cert-title">{c.title}</h4>
                                  <div className="cert-meta">
                                    <span className="issuer">{c.issuer}</span>
                                    {c.date && <span className="date"><FaRegCalendarAlt /> {c.date}</span>}
                                  </div>
                                  {Array.isArray(c.tags) && c.tags.length > 0 && (
                                    <div className="cert-tags">
                                      {c.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                    </div>
                                  )}
                                  <div className="cert-actions">
                                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="project-link-button" aria-label={`View ${c.title}`}>
                                      <FaExternalLinkAlt /> <span>View</span>
                                    </a>
                                  </div>
                                </div>
                              </motion.article>
                            ))}
                          </div>
                        </section>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .section-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--primary-light);
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        /* Certificates */
        .cert-section { margin-top: 10px; }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .cert-card {
          position: relative;
          display: flex; flex-direction: column;
          border: 1px solid var(--glass-border);
          background: var(--surface);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
          height: 100%;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          border-color: rgba(99,102,241,0.15);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
        }
        .cert-ribbon {
          position: absolute; top: 10px; left: 10px;
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 10px; border-radius: 999px;
          font-weight: 700; font-size: .72rem;
          background: linear-gradient(135deg, var(--primary), #4f46e5);
          color: #fff; z-index: 2;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .cert-media { height: 160px; background: var(--bg); overflow: hidden; }
        .cert-media img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
        .cert-card:hover .cert-media img { transform: scale(1.03); }
        .cert-body { padding: 16px; display: grid; gap: 8px; }
        .cert-title { margin: 0; font-weight: 700; font-size: 1rem; letter-spacing: .2px; color: var(--text); }
        .cert-meta { display: flex; align-items: center; gap: 10px; color: var(--text-secondary); font-weight: 600; font-size: .85rem; }
        .cert-meta .date { display: inline-flex; align-items: center; gap: 4px; }
        .issuer { color: var(--primary-light); }
        .cert-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .tag {
          padding: 3px 8px; border-radius: 999px; font-size: .7rem; font-weight: 600;
          background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.12); color: var(--text-secondary);
        }
        .cert-actions { margin-top: 4px; display: flex; justify-content: flex-end; }
      `}</style>
    </section>
  )
}
