import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const formInitialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
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
      setButtonText("Send Message");
      setStatus({ success: true, message: 'Message sent successfully!' });
      setTimeout(() => setStatus({}), 3000);
    }, 1000);
  };

  return (
    <section className="contact contact-v2" id="connect">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <p className="section-label">CONTACT</p>
          <h2 className="brand-gradient" style={{ fontSize: 42 }}>Get in Touch</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "8px auto 0" }}>
            Let's collaborate on web projects, backend systems, or performance improvements.
          </p>
        </motion.div>

        <Row className="align-items-stretch g-4">
          <Col xs={12} md={5}>
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
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
              className="form-card"
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
        .section-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--primary-light);
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .contact-v2 {
          padding: 100px 0 140px;
          background:
            radial-gradient(ellipse 700px 400px at 10% 20%, rgba(99,102,241,0.06), transparent 50%),
            radial-gradient(ellipse 600px 400px at 90% 10%, rgba(6,182,212,0.04), transparent 50%),
            linear-gradient(180deg, rgba(10,14,26,0.5), rgba(10,14,26,0.9));
        }
        .contact-card {
          padding: 28px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius);
        }

        .contact-list { display: grid; gap: 10px; }
        .contact-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 14px; border-radius: var(--radius-sm);
          color: var(--text); text-decoration: none;
          font-size: 14px; font-weight: 500;
          border: 1px solid var(--border);
          background: rgba(148,163,184,0.03);
          transition: var(--transition);
        }
        .contact-item svg { color: var(--primary-light); flex-shrink: 0; }
        .contact-item:hover { border-color: rgba(99,102,241,0.2); background: rgba(99,102,241,0.04); }

        .contact-social { display: flex; gap: 10px; flex-wrap: wrap; margin-top: auto; }
        .social-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 16px; border-radius: 999px;
          color: #fff; text-decoration: none;
          font-size: 13px;
          background: linear-gradient(135deg, var(--primary), #4f46e5);
          font-weight: 700; border: 1px solid rgba(255,255,255,0.06);
          transition: var(--transition);
        }
        .social-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99,102,241,0.25);
          color: #fff;
        }

        .form-card {
          padding: 28px;
          display: grid; gap: 14px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius);
        }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 768px) { .field-row { grid-template-columns: 1fr; } }

        .field { position: relative; }
        .field input, .field textarea {
          width: 100%; color: var(--text); background: rgba(148,163,184,0.04);
          border: 1px solid var(--border); border-radius: var(--radius-sm);
          padding: 16px 14px; font-size: 15px; transition: var(--transition);
        }
        .field textarea { resize: vertical; }
        .field input:focus, .field textarea:focus { border-color: rgba(99,102,241,0.3); background: rgba(99,102,241,0.03); }

        .field label {
          position: absolute; left: 12px; top: 12px; padding: 0 6px;
          color: var(--muted); pointer-events: none; background: transparent;
          transform: translateY(6px); transition: transform .2s ease, color .2s ease, background .2s ease;
          border-radius: 4px; font-size: 14px;
        }
        .field input:focus + label,
        .field input:not(:placeholder-shown) + label,
        .field textarea:focus + label,
        .field textarea:not(:placeholder-shown) + label {
          transform: translateY(-14px) scale(.88);
          color: var(--primary-light);
          background: var(--surface);
        }

        .submit-btn {
          justify-self: start;
          background: linear-gradient(135deg, var(--primary), #4f46e5);
          color: #fff; font-weight: 700; padding: 14px 28px;
          font-size: 15px;
          border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.06);
          transition: var(--transition);
          letter-spacing: 0.2px;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.25); }

        .status { margin-top: 4px; font-weight: 700; font-size: 14px; }
        .status.ok { color: #22c55e; }
        .status.err { color: #ef4444; }
      `}</style>
    </section>
  );
};
