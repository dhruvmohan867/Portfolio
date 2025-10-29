import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.jpg";
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
              <p>Building performant, accessible experiences across the stack.</p>
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
                <a href="https://x.com/DhruvMohan93135" aria-label="X">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://leetcode.com/u/Dhruv_2_1234/" aria-label="LeetCode">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <a href="#home" className="top-btn">Back to top</a>
            </div>
          </Col>

          <Col xs={12}>
            <hr className="divider" />
            <p className="copy">© 2024—present Dhruv. All rights reserved.</p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .footer-v2 {
          padding: 40px 0 28px;
          width: 100%;
          background:
            radial-gradient(700px 400px at 5% 10%, rgba(14,165,233,.12), transparent 40%),
            radial-gradient(700px 400px at 95% 0%, rgba(168,85,247,.12), transparent 40%),
            linear-gradient(180deg, rgba(2,6,23,.75), rgba(2,6,23,.92));
          border-top: 1px solid rgba(255,255,255,.12);
        }
        .brand h3 { margin: 0 0 6px; font-weight: 800; letter-spacing: .4px; }
        .brand p { color: var(--muted); max-width: 420px; }

        .links h5, .social h5 { margin-bottom: 8px; }
        .links ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; }
        .links a {
          color: #e2e8f0; text-decoration: none; padding: 6px 0;
          border-bottom: 1px dashed transparent;
        }
        .links a:hover { border-bottom-color: rgba(226,232,240,.4); }

        .social-row { display: flex; gap: 10px; align-items: center; }
        .social-row a {
          width: 42px; height: 42px; display: grid; place-items: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .social-row a:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 10px 26px rgba(2,6,23,0.45);
        }
        .social-row img { width: 22px; height: 22px; }

        .top-btn {
          display: inline-block; margin-top: 12px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          color: #fff; font-weight: 800; padding: 10px 14px; border-radius: 999px;
          text-decoration: none; border: 1px solid rgba(255,255,255,0.12);
        }

        .divider { border: none; border-top: 1px solid rgba(255,255,255,0.12); margin: 20px 0; }
        .copy { margin: 0; color: var(--muted); text-align: center; }
      `}</style>
    </footer>
  );
};
