import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className="header">
      <ul className="nav">
        <li>
          <a href="/">About</a>
        </li>
        <hr/>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <hr/>
        <li>
          <a href="/">Resume</a>
        </li>
        <hr/>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  )
}


export default Header;
