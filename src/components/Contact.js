import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const formInitialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => setFormDetails({ ...formDetails, [category]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: 'Please fill out all required fields.' });
      return;
    }
    setButtonText("Sending...");
    setTimeout(() => {
      setFormDetails(formInitialDetails);
      setButtonText("Send");
      setStatus({ success: true, message: 'Sent successfully!' });
      setTimeout(() => setStatus({}), 3000);
    }, 1000);
  };

  return (
    <section className="contact contact-v2" id="connect">
      <Container>
        <Row className="align-items-stretch g-4">
          <Col xs={12} md={5}>
            <motion.div
              className="contact-card glass"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2>Get in Touch</h2>
              <p className="muted">Let’s collaborate on web projects, backend systems, or performance improvements.</p>

              <div className="contact-list">
                <a className="contact-item" href="mailto:dhruvmohanshukla@gmail.com">
                  <FaEnvelope /><span>dhruvmohanshukla@gmail.com</span>
                </a>
                <a className="contact-item" href="tel:+917007875395">
                  <FaPhoneAlt /><span>+91 7007875395</span>
                </a>
                <div className="contact-item" aria-label="Location">
                  <FaMapMarkerAlt /><span>India</span>
                </div>
              </div>

              <div className="contact-social">
                <a href="https://github.com/dhruvmohan867" target="_blank" rel="noreferrer" className="social-pill">
                  <FaGithub /><span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/dhruv-mohan-shukla-4a385b254/" target="_blank" rel="noreferrer" className="social-pill">
                  <FaLinkedin /><span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </Col>

          <Col xs={12} md={7}>
            <motion.form
              className="form-card glass"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            >
              <div className="field-row">
                <div className="field">
                  <input type="text" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} placeholder=" " required />
                  <label>First Name</label>
                </div>
                <div className="field">
                  <input type="text" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} placeholder=" " required />
                  <label>Last Name</label>
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <input type="email" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} placeholder=" " required />
                  <label>Email Address</label>
                </div>
                <div className="field">
                  <input type="tel" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} placeholder=" " pattern="[0-9]*" required />
                  <label>Phone No.</label>
                </div>
              </div>

              <div className="field">
                <textarea rows="5" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} placeholder=" " required />
                <label>Your Message</label>
              </div>

              <button type="submit" className="submit-btn"><span>{buttonText}</span></button>

              {status.message && (
                <p className={`status ${status.success ? "ok" : "err"}`}>{status.message}</p>
              )}
            </motion.form>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .contact-v2 {
          padding: 110px 0 140px;
          background: radial-gradient(900px 500px at 10% 20%, rgba(14,165,233,0.12), transparent 40%),
                      radial-gradient(800px 500px at 90% 10%, rgba(168,85,247,0.10), transparent 40%),
                      linear-gradient(180deg, rgba(2,6,23,0.70), rgba(2,6,23,0.92));
        }
        .glass {
          background: rgba(17,25,40,0.55);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 20px;
        }
        .contact-card { padding: 28px; height: 100%; display: grid; gap: 16px; }
        .contact-card h2 { margin: 0; letter-spacing: .6px; }
        .contact-card .muted { color: var(--muted); margin-bottom: 4px; }

        .contact-list { display: grid; gap: 10px; margin-top: 6px; }
        .contact-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 12px;
          color: #e2e8f0; text-decoration: none;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
        }
        .contact-item svg { color: #7dd3fc; }
        .contact-item:hover { border-color: rgba(255,255,255,0.18); }

        .contact-social { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px; }
        .social-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 12px; border-radius: 999px;
          color: #fff; text-decoration: none;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          font-weight: 700; border: 1px solid rgba(255,255,255,0.08);
        }

        .form-card { padding: 24px; display: grid; gap: 14px; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 768px) { .field-row { grid-template-columns: 1fr; } }

        .field { position: relative; }
        .field input, .field textarea {
          width: 100%; color: #e8eef7; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12); border-radius: 14px;
          padding: 16px 14px; font-size: 16px; transition: border-color .2s ease, background .2s ease;
        }
        .field textarea { resize: vertical; }
        .field input:focus, .field textarea:focus { border-color: rgba(255,255,255,0.24); background: rgba(255,255,255,0.06); }

        .field label {
          position: absolute; left: 12px; top: 12px; padding: 0 6px;
          color: #cbd5e1; pointer-events: none; background: transparent;
          transform: translateY(6px); transition: transform .2s ease, color .2s ease, background .2s ease;
          border-radius: 6px;
        }
        .field input:focus + label,
        .field input:not(:placeholder-shown) + label,
        .field textarea:focus + label,
        .field textarea:not(:placeholder-shown) + label {
          transform: translateY(-14px) scale(.92);
          color: #a5b4fc;
          background: rgba(2,6,23,0.8);
        }

        .submit-btn {
          justify-self: start;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          color: #fff; font-weight: 800; padding: 12px 18px;
          border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);
          transition: transform .15s ease;
        }
        .submit-btn:hover { transform: translateY(-1px); }

        .status { margin-top: 4px; font-weight: 700; }
        .status.ok { color: #22c55e; }
        .status.err { color: #ef4444; }
      `}</style>
    </section>
  );
};
