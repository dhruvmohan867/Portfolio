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

export const Projects = () => {

  const projects = [
    {
      title: "Resort_booking",
      description: "I developed a resort booking application using React and React Router. This project demonstrates my skills in building dynamic, multi-page user interfaces with seamless navigation and responsive design.",
      imgUrl: projImg1,
      url: "https://resort-1.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "A responsive and visually appealing personal portfolio built with React, showcasing projects and skills with smooth UI interactions.",
      imgUrl: "https://www.nda.ac.uk/wp-content/uploads/10-10-portfolio-01.jpg",
      url: "https://portfolio-dhruvs-projects-2b3759ed.vercel.app/"
    },
    {
      title: "Ecommerce Website",
      description: "A modern e-commerce platform built with React.js, featuring authentication, product listings, and reusable UI components. Responsive and backend-ready",
      imgUrl: "https://ecommerce-website-frontend3.onrender.com/Pogo.webp",
      url: "https://ecommerce-website-frontend3.onrender.com/"
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

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className="isVisible" >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">My Skills</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className="isVisible" >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <Col key={index} xs={12} sm={6} md={4} className="d-flex">
                                  <ProjectCard {...project} />
                                  <div className="project-link-container">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link-button">Visit Project</a>
                                  </div>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="skills-container">
                          <div className="skills-header text-center mb-5">
                            <h2 className="mb-3">My Technical Skills</h2>
                            <p className="lead">
                              I have a strong foundation in frontend development with expertise in creating responsive web applications. 
                              Currently expanding my skills in backend technologies to become a fullstack developer.
                            </p>
                          </div>
                          
                          <Row className="g-4">
                            {skillCategories.map((category, catIndex) => (
                              <Col md={4} key={catIndex}>
                                <div className="skill-category-card">
                                  <div className="category-header">
                                    <div className="category-icon">
                                      {category.icon}
                                    </div>
                                    <h3>{category.title}</h3>
                                  </div>
                                  <div className="skills-list">
                                    {category.skills.map((skill, skillIndex) => (
                                      <div className="skill-item" key={skillIndex}>
                                        <div className="skill-info">
                                          <div className="skill-icon">
                                            {skill.icon || <FaCode />}
                                          </div>
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
                              </Col>
                            ))}
                          </Row>
                          
                          <div className="skills-summary mt-5">
                            <h3 className="text-center mb-4">Development Goals</h3>
                            <p className="text-center">
                              My goal is to become proficient in both frontend and backend development, enabling me to create comprehensive 
                              and dynamic web solutions. I'm focused on mastering modern architectures, performance optimization, 
                              and building scalable applications.
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
      
      <style jsx>{`
        .skills-container {
          padding: 30px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .skill-category-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 25px;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .skill-category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          background: rgba(255, 255, 255, 0.08);
        }
        
        .category-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .category-icon {
          background: linear-gradient(45deg, #0ea5e9, #0d9488);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
        }
        
        .skill-category-icon {
          font-size: 24px;
          color: white;
        }
        
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .skill-item {
          display: flex;
          flex-direction: column;
        }
        
        .skill-info {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .skill-icon {
          margin-right: 10px;
          color: #0ea5e9;
          font-size: 18px;
        }
        
        .skill-name {
          color: #f8fafc;
          font-weight: 500;
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
          top: -25px;
          font-size: 12px;
          color: #f8fafc;
          font-weight: 500;
        }
        
        .skills-summary {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .skills-summary p {
          color: #cbd5e1;
          line-height: 1.7;
        }
        
        @media (max-width: 768px) {
          .skill-category-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  )
}
