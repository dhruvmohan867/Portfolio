import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2 (2).svg";
import navIcon3 from "../assets/img/nav-icon3 (2).svg";

export const Footer = () => {
  return (
    <footer className="footer-v2">
      <Container>
        <Row className="gy-4 align-items-start">
          <Col xs={12}>
            <MailchimpForm />
          </Col>

          <Col xs={12} md={4}>
            <div className="brand">
              <h3 className="brand-gradient">Dhruv</h3>
              <p>Building performant, scalable applications across the full stack.</p>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="links">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#connect">Contact</a></li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="social">
              <h5>Connect</h5>
              <div className="social-row">
                <a href="https://www.linkedin.com/in/dhruv-mohan-shukla-4a385b254/" aria-label="LinkedIn">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/dhruvmohan867" aria-label="GitHub">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://leetcode.com/u/Dhruv_2_1234/" aria-label="LeetCode">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <a href="#home" className="top-btn">Back to top ↑</a>
            </div>
          </Col>

          <Col xs={12}>
            <hr className="divider" />
            <p className="copy">© 2024—present Dhruv Mohan Shukla. All rights reserved.</p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .footer-v2 {
          padding: 40px 0 28px;
          width: 100%;
          background:
            radial-gradient(ellipse 600px 300px at 5% 10%, rgba(99,102,241,0.04), transparent 50%),
            radial-gradient(ellipse 500px 300px at 95% 0%, rgba(6,182,212,0.03), transparent 50%),
            linear-gradient(180deg, rgba(10,14,26,0.6), rgba(10,14,26,0.95));
          border-top: 1px solid var(--glass-border);
        }
        .brand h3 { margin: 0 0 6px; font-weight: 800; letter-spacing: .3px; }
        .brand p { color: var(--text-secondary); max-width: 380px; font-size: 14px; }

        .links h5, .social h5 { margin-bottom: 10px; font-size: 14px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: var(--text-secondary); }
        .links ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; }
        .links a {
          color: var(--text); text-decoration: none; padding: 4px 0;
          font-size: 14px; font-weight: 500;
          transition: var(--transition);
        }
        .links a:hover { color: var(--primary-light); }

        .social-row { display: flex; gap: 10px; align-items: center; }
        .social-row a {
          width: 38px; height: 38px; display: grid; place-items: center;
          border-radius: 50%;
          background: rgba(148,163,184,0.04);
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .social-row a:hover {
          transform: translateY(-2px);
          border-color: rgba(99,102,241,0.2);
          background: rgba(99,102,241,0.06);
        }
        .social-row img { width: 18px; height: 18px; }

        .top-btn {
          display: inline-block; margin-top: 14px;
          background: linear-gradient(135deg, var(--primary), #4f46e5);
          color: #fff; font-weight: 700; padding: 8px 16px; border-radius: 999px;
          text-decoration: none; border: 1px solid rgba(255,255,255,0.06);
          transition: var(--transition); font-size: 13px;
        }
        .top-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(99,102,241,0.2);
          color: #fff;
        }

        .divider { border: none; border-top: 1px solid var(--glass-border); margin: 24px 0 16px; }
        .copy { margin: 0; color: var(--muted); text-align: center; font-size: 13px; }
      `}</style>
    </footer>
  );
};
