import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contact-div">
          <h3>Contact</h3>
          {/*<hr />*/}
          <ul>
            <li>(845) 800-0609</li>
            <li>nick_kinlen@hotmail.com</li>
          </ul>
        </div>
        <div className="social-div">
          <h3>Social</h3>
          {/*<hr />*/}
          <ul className="social-container">
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
            <li>
              <a href="https://stackoverflow.com/users/3875620/nick-kinlen">
                <FontAwesomeIcon icon={['fab', 'stack-overflow']} size="3x"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <h3>Navigation</h3>
          {/*<hr />*/}
          <ul>
            <a href="/"><li>About</li></a>
            <a href="/"><li>Portfolio</li></a>
            <a href="/"><li>Blog</li></a>
            <a href="/"><li>Contact</li></a>
          </ul>
        </div>
      </div>
      <div className="copyright">
          <hr />
          Copyright <FontAwesomeIcon icon={'copyright'} /> 2018 Nick Kinlen
      </div>
    </div>
  )
}


export default Footer;
