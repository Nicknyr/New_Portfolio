import React, { Component } from 'react';
import Nodes from './images/blue-nodes.jpg';
import ContactForm from './ContactForm';


const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="left">
        <h2>Contact Me</h2>
        <p>Interested in hiring me? Drop me a line or message me on <a href="https://www.linkedin.com/in/nicholas-kinlen/">LinkedIn</a>.</p>
      </div>
      <div className="right">
        <ContactForm />
      </div>
    </div>
  );
}


export default Contact;
