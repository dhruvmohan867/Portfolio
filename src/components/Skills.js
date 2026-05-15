import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaDatabase, FaNpm, FaAws
} from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiBootstrap,
  SiDocker, SiVite, SiTypescript, SiRedux, SiNextdotjs,
  SiJsonwebtokens, SiMongoosedotws, SiPostman, SiVercel, SiFirebase,
  SiFramer, SiFastapi, SiCplusplus, SiPython
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#e2e8f0" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
      { name: "Redux", icon: <SiRedux />, color: "#764abc" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
      { name: "Framer Motion", icon: <SiFramer />, color: "#bb4bff" },
      { name: "Vite", icon: <SiVite />, color: "#646cff" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#e2e8f0" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
      { name: "Mongoose", icon: <SiMongoosedotws />, color: "#880000" },
      { name: "REST APIs", icon: <TbApi />, color: "#06b6d4" },
      { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "#d63aff" },
      { name: "Databases", icon: <FaDatabase />, color: "#a78bfa" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599c" },
      { name: "Python", icon: <SiPython />, color: "#3776ab" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#e2e8f0" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
      { name: "AWS", icon: <FaAws />, color: "#ff9900" },
      { name: "Vercel", icon: <SiVercel />, color: "#e2e8f0" },
      { name: "Firebase", icon: <SiFirebase />, color: "#ffca28" },
      { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
      { name: "VS Code", icon: <VscCode />, color: "#007acc" },
      { name: "npm", icon: <FaNpm />, color: "#cb3837" },
    ],
  },
];

const stats = [
  { value: "500+", label: "DSA Problems" },
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Years Coding" },
];

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label">EXPERTISE</p>
              <h2 className="brand-gradient section-title">Skills & Technologies</h2>
              <p className="section-sub">Technologies I work with to build scalable, performant applications.</p>
            </motion.div>
          </Col>
        </Row>

        <div className="categories-grid">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              className="category-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: catIdx * 0.08 }}
            >
              <h3 className="category-title">{cat.title}</h3>
              <div className="category-skills">
                {cat.skills.map((s, i) => (
                  <motion.div
                    key={s.name + i}
                    className="skill-item"
                    whileHover={{ y: -3, scale: 1.03 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="skill-icon" style={{ color: s.color }}>{s.icon}</span>
                    <span className="skill-label">{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="stat-row"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>

      <style jsx>{`
        .skills-section {
          padding: 100px 0 80px;
          background:
            radial-gradient(ellipse 800px 500px at 20% 10%, rgba(99,102,241,0.06), transparent 50%),
            radial-gradient(ellipse 600px 400px at 80% 5%, rgba(6,182,212,0.04), transparent 50%),
            linear-gradient(180deg, rgba(10,14,26,0.3), rgba(10,14,26,0.7));
        }

        .section-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--primary-light);
          margin-bottom: 8px;
        }
        .section-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }
        .section-sub {
          color: var(--text-secondary);
          font-size: 17px;
          margin-bottom: 48px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 960px;
          margin: 0 auto 48px;
        }

        .category-card {
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius);
          padding: 24px;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .category-card:hover {
          border-color: rgba(99,102,241,0.12);
          box-shadow: 0 12px 36px rgba(0,0,0,0.15);
        }

        .category-title {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--glass-border);
        }

        .category-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          background: rgba(148,163,184,0.04);
          border: 1px solid rgba(148,163,184,0.06);
          cursor: default;
          transition: background var(--transition), border-color var(--transition);
        }
        .skill-item:hover {
          background: rgba(99,102,241,0.06);
          border-color: rgba(99,102,241,0.12);
        }

        .skill-icon {
          display: flex;
          flex-shrink: 0;
        }
        .skill-icon :global(svg) {
          width: 18px;
          height: 18px;
        }

        .skill-label {
          font-weight: 600;
          font-size: 0.82rem;
          color: var(--text);
          white-space: nowrap;
          letter-spacing: 0.1px;
        }

        .stat-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 20px 36px;
          border-radius: var(--radius);
          background: var(--surface);
          border: 1px solid var(--glass-border);
          min-width: 160px;
          transition: border-color var(--transition);
        }
        .stat:hover {
          border-color: rgba(99,102,241,0.15);
        }
        .stat-value {
          font-weight: 800;
          font-size: 1.5rem;
          background: linear-gradient(135deg, var(--primary-light), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .stat-label {
          color: var(--muted);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .skill-item {
            padding: 6px 10px;
            gap: 6px;
          }
          .skill-icon :global(svg) {
            width: 15px;
            height: 15px;
          }
          .skill-label {
            font-size: 0.75rem;
          }
          .stat {
            min-width: 120px;
            padding: 14px 20px;
          }
        }
      `}</style>
    </section>
  );
};
