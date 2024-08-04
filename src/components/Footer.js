import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2 (2).svg";
import navIcon3 from "../assets/img/nav-icon3 (2).svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col size={12} sm={12}>
            <MailchimpForm />
          </Col>
          <Col size={12} sm={12} className="text-center mt-3">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dhruv-mohan-shukla-4a385b254/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://x.com/DhruvMohan93135">
                <img src={navIcon2} alt="X" />
              </a>
              <a href="https://leetcode.com/u/Dhruv_2_1234/">
                <img src={navIcon3} alt="LeetCode" />
              </a>
            </div>
            <hr className="footer-divider" />
            <p>© 2024 Dhruv. All rights reserved. <a href="https://x.com/DhruvMohan93135">Dhruv Mohan Shukla</a>.</p>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .footer {
          background-color: #f8f9fa; /* Light background color */
          padding: 20px 0; /* Vertical padding */
          width: 100%;
        }
        .social-icon a {
          margin: 0 10px;
        }
        .social-icon img {
          width: 24px; /* Adjust icon size */
          height: 24px; /* Adjust icon size */
        }
        .footer-divider {
          border: none;
          border-top: 2px solid #ddd; /* Light gray color */
          margin: 20px 0; /* Space around the line */
        }
        p {
          margin: 0;
        }
        a {
          color: #007bff; /* Adjust link color */
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};
