import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { motion } from "framer-motion";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full-Stack Developer", "Systems Programmer", "Problem Solver"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 24 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <p className="banner-greeting">Hello, I'm</p>
                  <h1>Dhruv Mohan Shukla
                    <br />
                    <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Full-Stack Developer", "Systems Programmer", "Problem Solver" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="dark-text">
                    I build scalable full-stack applications, high-performance systems software,
                    and ML-powered solutions. Passionate about clean architecture and shipping quality code.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="#projects">
                      <button className="banner-btn primary"><span>View Projects</span> <ArrowRightCircle size={18} /></button>
                    </a>
                    <a href="https://www.linkedin.com/in/dhruv-mohan-shukla-4a385b254/" target="_blank" rel="noreferrer">
                      <button className="banner-btn secondary"><span>Let's Connect</span> <ArrowRightCircle size={18} /></button>
                    </a>
                  </div>
                </motion.div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <motion.div
                  className="isVisible"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.96 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    style={{
                      borderRadius: '20px',
                      objectFit: 'cover',
                      width: '100%',
                      height: 'auto',
                      maxWidth: '440px',
                      marginLeft: '8%',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                      border: '1px solid rgba(148,163,184,0.08)'
                    }}
                  />
                </motion.div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .banner-greeting {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--primary-light);
          margin-bottom: 12px;
        }
        .banner-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: var(--radius-sm);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.2px;
          transition: var(--transition);
          margin-top: 28px;
          cursor: pointer;
        }
        .banner-btn.primary {
          background: linear-gradient(135deg, var(--primary), #4f46e5);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .banner-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(99,102,241,0.3);
        }
        .banner-btn.secondary {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
        }
        .banner-btn.secondary:hover {
          border-color: rgba(99,102,241,0.25);
          background: rgba(99,102,241,0.06);
          transform: translateY(-2px);
        }
        .banner-btn svg {
          transition: var(--transition);
        }
        .banner-btn:hover svg {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  )
}
