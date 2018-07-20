import React, { Component } from 'react';
import Placeholder from './images/placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Info = () => {
  return (
    <div className="info-section">
        <h1>Nick Kinlen</h1>
        <h2>Front-end Developer</h2>
        <img src={Placeholder} height="200" width="200"/>
        <p>I am a front-web web developer from the New York City metro area</p>
        <FontAwesomeIcon icon="coffee" />
    </div>
  )
}


export default Info;
