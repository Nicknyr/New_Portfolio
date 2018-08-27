import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './images/centered.png';
import SpaceStations from './images/space.png';
import Scrollchor from 'react-scrollchor';


const NavMenu = () => {
  return (
    <div className="menu-div">
      <div className="logo-container">
        <a href="/"><img src={Logo} height="100%" width="175"/></a>
      </div>
      <ul className="nav">
        <li>
          <Scrollchor to="#intro">About</Scrollchor>
        </li>
        <hr/>
        <li>
        <Scrollchor to="#portfolio">Portfolio</Scrollchor>
        </li>
        <hr/>
        <li>
          <Scrollchor to="#contact">Contact</Scrollchor>
        </li>
      </ul>
    </div>
  )
}


export default NavMenu;
