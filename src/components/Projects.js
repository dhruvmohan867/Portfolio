import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import certificateImg1 from "../assets/img/download.png";
import certificateImg2 from "../assets/img/unnamed.jpg";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Resort_booking",
      description: "I developed a resort booking application using React and React Router. This project demonstrates my skills in building dynamic, multi-page user interfaces with seamless navigation and responsive design.",
      imgUrl: projImg1,
      url: "https://resort-1.vercel.app/"
    },
    {
      title: "Gemini_clone",
      description: "I created a Gemini clone using Node.js. This project highlights my proficiency in server-side development and my ability to replicate and enhance existing platforms with modern technologies",
      imgUrl: projImg3,
      url: "https://gemini-clone-tawny-ten.vercel.app/"
    },
    {
      title: "Simple web page ",
      description: "Created a simple web page using HTML and CSS to highlight proficiency in web design. The page showcases clean, responsive design and demonstrates fundamental skills in structuring and styling content",
      imgUrl: projImg2,
      url: "https://project-1-sigma-one.vercel.app/"
    },
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
                        <Nav.Link eventKey="second">My Current Skills</Nav.Link>
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
                                <Col key={index} size={12} sm={6} md={4}>
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
  <section id="skills" className="centered-content">
    <h2>My Current Skills</h2>
    <p>
      I have a strong foundation in frontend development, with expertise in creating visually appealing and responsive web pages using HTML, CSS, and JavaScript. Currently, I am expanding my skill set by diving into backend development, focusing on server-side technologies and database management.
    </p>
    <h3>Frontend Development</h3>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>Responsive Design</li>
      <li>React</li>
      <li>React Router</li>
    </ul>
    <h3>Backend Development</h3>
    <ul>
      <li>Node.js</li>
      <li>Express</li>
      <li>Database Management</li>
      <li>APIs</li>
    </ul>
    <h3>Goals</h3>
    <p>
      My goal is to become proficient in both frontend and backend development, enabling me to create comprehensive and dynamic web solutions.
    </p>
  </section>
</Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <section id="certificates">
                        <h2 style={{ color: '#f5f5f5' }}>Certificates</h2>
                        <ul className="certificates-list">
                          <li className="certificate-item">
                            <img src={certificateImg1} alt="Certificate 3" className="certificate-img" />
                            <div className="certificate-info">
                              <a href="https://drive.google.com/file/d/1sVRcUMg-A3O6-MrEoJyPOohJwhqwAY9N/view?pli=1" target="_blank" rel="noopener noreferrer">
                                Overview of Machine learning
                              </a>
                              <p>I completed a workshop on AI/ML at IIT Kanpur, where I gained valuable insights into the fundamentals of artificial intelligence and machine learning. The workshop provided hands-on experience with various machine learning algorithms and techniques, enhancing my understanding of how to apply these concepts to real-world problems. This experience has significantly broadened my knowledge and skills in the AI/ML domain.</p>
                            </div>
                          </li>
                          <li className="certificate-item">
                            <img src={certificateImg2} alt="Certificate 1" className="certificate-img" />
                            <div className="certificate-info">
                              <a href="https://drive.google.com/file/d/1lF57GAt60A7tVidYjfQ9BO_tvpCeMRbH/view" target="_blank" rel="noopener noreferrer">
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
      {/* <img className="background-image-right" src={colorSharp2} alt="Background"></img> */}
    </section>
  )
}
