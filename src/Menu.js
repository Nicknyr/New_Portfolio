import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './images/centered.png';
import SpaceStations from './images/space.png';



const NavMenu = () => {
  return (
    <div className="menu-div">
      <div className="logo-container">
        <img src={Logo} height="100%" width="175"/>
      </div>
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
