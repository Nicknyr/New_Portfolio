import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavMenu = () => {
  return (
    <div className="menu-div">
      <ul className="nav">
        <li>
          <a href="#intro">About</a>
        </li>
        <hr/>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <hr/>
        <li>
          <a href="/">Blog</a>
        </li>
        <hr/>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  )
}


export default NavMenu;
