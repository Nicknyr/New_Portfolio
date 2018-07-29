import React, { Component } from 'react';
import Placeholder from './images/placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyPic from './images/me.png';
//import Nodes from './images/blue-nodes.jpg';
//import Nodes from './images/nodes-no-color.jpg';
import Nodes from './images/nodes.jpg';

const Info = () => {
  return (
    <div className="info-section" id="intro">
      <div className="nodes">
        {/*<img src={Nodes} />*/}
      </div>
      <div className="name-title">
        <h1>My name is Nick and I am a front-end developer</h1>
      </div>
        <div className="me">
          <img src={MyPic} className="my-image" height="125" width="125"/>
        </div>

        <div className="description">
          <p>I am a front-web web developer from the New York City metro area with experience building web apps with the core web languages HTML, CSS, Javascript as well as React.js and other Javascript libraries and frameworks such as Redux, D3, Leaflet, Mapbox, and Jquery.</p>
          <p>My interests include the MERN stack, open-source software, Linux, cryptocurrency, machine learning, and publishing web development tutorials and articles on the Steemit social media platform.</p>
          <p>I am currently seeking a full time job as a front-end Javascript centric developer.</p>
        </div>
    </div>
  )
}


export default Info;
