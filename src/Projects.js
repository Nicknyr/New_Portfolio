import React, { Component } from 'react';
import Placeholder from './images/placeholder.png';


const Projects = () => {
  return (
    <div className="project-section">
        <h2>Projects</h2>
        <ul>
          <li>
            <img src={Placeholder} height="200" width="200"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a venenatis augue. Duis vitae rhoncus enim, non cursus urna. Duis sit amet ornare sapien, ac molestie enim. Aenean euismod dolor. </p>
          </li>
          <li>
            <img src={Placeholder} height="200" width="200"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a venenatis augue. Duis vitae rhoncus enim, non cursus urna. Duis sit amet ornare sapien, ac molestie enim. Aenean euismod dolor. </p>
          </li>
          <li>
            <img src={Placeholder} height="200" width="200"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a venenatis augue. Duis vitae rhoncus enim, non cursus urna. Duis sit amet ornare sapien, ac molestie enim. Aenean euismod dolor. </p>
          </li>
        </ul>
    </div>
  )
}


export default Projects;
