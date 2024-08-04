import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: 'Please fill out all required fields.' });
      return;
    }

    setButtonText("Sending...");
    
    setTimeout(() => {
      setFormDetails(formInitialDetails);
      setButtonText("Send");
      setStatus({ success: true, message: 'Sent successfully!' });
      
      setTimeout(() => {
        setStatus({});
      }, 3000); // Remove message after 3 seconds

    }, 1000); // Simulating a delay
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className="isVisible" src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className="isVisible" >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="tel" 
                          value={formDetails.phone} 
                          placeholder="Phone No." 
                          onChange={(e) => onFormUpdate('phone', e.target.value)} 
                          pattern="[0-9]*" // Accept only numbers
                          required 
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      <Col size={12} className="px-1">
                        {
                          status.message &&
                          <p className={`status-message ${status.success === false ? "danger" : "success"}`}>{status.message}</p>
                        }
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
