import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Dhruv `}
                    <br/> <span className="txt-rotate" dataPeriod="100" data-rotate='[ "Web Developer", "Coder", "UI/UX Designer" ]'><span className="wrap">a {text}</span></span></h1>
                  <p className="dark-text">I am a skilled web developer and competitive programmer with strong proficiency in Data Structures and Algorithms (DSA). My expertise includes building robust web applications and solving complex programming challenges. Passionate about coding and continuously improving my skills, I thrive in fast-paced, problem-solving environments.</p>
                  
                  <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
  {({ isVisible }) =>
    <div className="isVisible">
      <img 
        src={headerImg} 
        alt="Header Img" 
        style={{ 
          borderRadius: '50%', 
          objectFit: 'cover', 
          width: '90%',  
          height: 'auto', 
          maxWidth: '400px', 
          marginLeft: '12%', 
        }} 
      />
    </div>
  }
</TrackVisibility>


</Col>

        </Row>
      </Container>
    </section>
  )
}
