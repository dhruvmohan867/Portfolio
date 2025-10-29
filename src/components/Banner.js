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
  const toRotate = [ "Web Developer", "Programmer", "UI/UX Designer" ];
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
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 18 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1>{`Hi! I'm Dhruv `}
                    <br />
                    <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Web Developer", "Coder", "UI/UX Designer" ]'>
                      <span className="wrap">a {text}</span>
                    </span>
                  </h1>
                  <p className="dark-text">
                    I am a skilled web developer and competitive programmer with strong proficiency in DSA.
                    I love crafting performant, accessible interfaces and shipping resilient backends.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="#projects">
                      <button><span>View Projects</span> <ArrowRightCircle size={25} /></button>
                    </a>
                    <a href="https://www.linkedin.com/in/dhruv-mohan-shukla-4a385b254/" target="_blank" rel="noreferrer">
                      <button><span>Let’s Connect</span> <ArrowRightCircle size={25} /></button>
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
                      borderRadius: '24px',
                      objectFit: 'cover',
                      width: '90%',
                      height: 'auto',
                      maxWidth: '420px',
                      marginLeft: '12%',
                      boxShadow: '0 22px 60px rgba(2,6,23,0.6)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  />
                </motion.div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
