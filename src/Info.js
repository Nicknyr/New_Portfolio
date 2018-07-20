import React, { Component } from 'react';
import Placeholder from './images/placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyPic from './images/me.png';

const Info = () => {
  return (
    <div className="info-section" id="intro">
        <h1>Nick Kinlen</h1>
        <h2>Front-end Developer</h2>
        <img src={MyPic} className="my-image"/>
        <p>I am a front-web web developer from the New York City metro area with experience building web apps with the core web languages HTML, CSS, Javascript as well as React.js and other Javascript libraries and frameworks such as Redux, D3, Leaflet, Mapbox, and Jquery.</p>
    </div>
  )
}


export default Info;
