import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-div">
        <h3>Social</h3>
        <hr />
        <ul className="social-links">
          <li>
            <a href="https://github.com/Nicknyr">
              <FontAwesomeIcon icon={['fab', 'github']} size="3x"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nicholas-kinlen-b71393a1/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Footer;
