import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiBootstrap, SiDocker, SiVite } from "react-icons/si";

const stack = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 />, level: 5 },
      { name: "CSS", icon: <FaCss3Alt />, level: 5 },
      { name: "JavaScript", icon: <FaJs />, level: 5 },
      { name: "React", icon: <FaReact />, level: 5 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 4 },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 4 },
      { name: "Vite", icon: <SiVite />, level: 4 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, level: 4 },
      { name: "Express", icon: <SiExpress />, level: 4 },
      { name: "MongoDB", icon: <SiMongodb />, level: 4 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 3 },
      { name: "Databases", icon: <FaDatabase />, level: 4 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt />, level: 5 },
      { name: "GitHub", icon: <FaGithub />, level: 5 },
      { name: "Docker", icon: <SiDocker />, level: 3 },
    ],
  },
];

const Segments = ({ n }) => (
  <div className="segments" role="img" aria-label={`${n} of 5 proficiency`}>
    {[0, 1, 2, 3, 4].map((i) => (
      <span key={i} className={`seg ${i < n ? "on" : ""}`} />
    ))}
  </div>
);

export const Skills = () => {
  return (
    <section className="skills-v3" id="skills">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="header text-center">
              <h2 className="brand-gradient">Skills & Tooling</h2>
              <p>Focused on building accessible, performant products across the stack.</p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {stack.map((cat, idx) => (
            <Col key={cat.title} xs={12} md={6} lg={4}>
              <motion.div
                className="skill-card glass"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <div className="card-head">
                  <h3>{cat.title}</h3>
                </div>

                <div className="skills-grid">
                  {cat.items.map((s) => (
                    <div key={s.name} className="skill-row">
                      <div className="left">
                        <span className="ico">{s.icon}</span>
                        <span className="name">{s.name}</span>
                      </div>
                      <Segments n={s.level} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="g-3 mt-4">
          <Col xs={12}>
            <div className="stat-row">
              <div className="stat">
                <span className="value">500+</span>
                <span className="label">DSA problems</span>
              </div>
              <div className="stat">
                <span className="value">10+</span>
                <span className="label">Projects</span>
              </div>
              <div className="stat">
                <span className="value">3+</span>
                <span className="label">Years coding</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .skills-v3 {
          padding: 110px 0 80px;
          background: radial-gradient(1200px 700px at 15% 10%, rgba(14,165,233,.10), transparent 40%),
                      radial-gradient(1000px 600px at 85% 0%, rgba(168,85,247,.10), transparent 40%),
                      linear-gradient(180deg, rgba(2,6,23,.60), rgba(2,6,23,.90));
        }
        .header h2 { font-size: 45px; font-weight: 800; margin-bottom: 6px; }
        .header p { color: var(--muted); max-width: 760px; margin: 0 auto 20px; }

        .skill-card {
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          padding: 18px;
          background: var(--card);
          box-shadow: 0 16px 44px rgba(2,6,23,.45);
        }
        .card-head h3 { margin: 0 0 8px; font-weight: 800; letter-spacing: .3px; }

        .skills-grid { display: grid; gap: 10px; }
        .skill-row {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 10px 10px;
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          background: rgba(255,255,255,.04);
        }
        .left { display: inline-flex; align-items: center; gap: 10px; min-width: 0; }
        .ico :global(svg) { width: 18px; height: 18px; color: #7dd3fc; }
        .name {
          font-weight: 800; letter-spacing: .2px; color: #eef2ff;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }

        /* 5-segment proficiency (no percentages) */
        .segments {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          column-gap: 8px;
          width: 150px;
        }
        .seg {
          width: 100%; height: 8px; border-radius: 6px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          transition: background .2s ease, transform .2s ease, box-shadow .25s ease;
        }
        .seg.on {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          box-shadow: 0 0 14px rgba(14,165,233,.35);
          transform: translateY(-1px);
        }

        /* Stats */
        .stat-row {
          display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
        }
        .stat {
          display: grid; gap: 4px; padding: 12px 16px;
          border-radius: 14px; text-align: center;
          background: rgba(17,25,40,.55);
          border: 1px solid rgba(255,255,255,.12);
          min-width: 180px;
        }
        .stat .value { font-weight: 900; font-size: 1.4rem; }
        .stat .label { color: var(--muted); font-weight: 700; font-size: .9rem; }
      `}</style>
    </section>
  );
};
