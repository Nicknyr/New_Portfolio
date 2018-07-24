import React, { Component } from 'react';
import Placeholder from './images/placeholder.png';
import EuroGDP from './images/euro-medium.png';
import SpaceStations from './images/space.png';
import BitcoinChart from './images/bitcoin-medium.png';
import Pomodoro from './images/pomodoro-medium.png';
import USGDP from './images/us-gdp-medium.png';
import Resume from './images/resume-medium.png';

const Projects = () => {
  return (
    <div className="project-section" id="portfolio">
        <h2>Projects</h2>
        <hr />
        <ul>
          <li>
            <h3>Wealth Of European Nations Choropleth Map</h3>
            <a href="https://eurogdp.herokuapp.com/">
              <div className="image-container">
                <img src={EuroGDP} className="project-image"/>
                  <div className="overlay overlay-hover">
                    <div className="text">A beautiful choropleth map of Europe that uses Leaflet.js and GeoJSON data to plot GDP by nation</div>
                  </div>
              </div>
            </a>
          </li>
          <li>
            <h3>NASA & SpaceX Facilities Map</h3>
            <a href="#">
              <div className="image-container">
                <img src={SpaceStations} className="project-image"/>
                  <div className="overlay overlay-hover">
                    <div className="text">A Mapbox map of the world that plots NASA and SpaceX facilties on using React-Leaflet, an official NASA API, and a SpaceX API.</div>
                  </div>
              </div>
            </a>
          </li>
          <li>
            <h3>D3.js Bitcoin line chart</h3>
            <a href="#">
              <div className="image-container">
                <img src={BitcoinChart} className="project-image"/>
                  <div className="overlay overlay-hover">
                    <div className="text">This project uses the CryptoCompare API to retrieve up-to-date Bitcoin prices and plots Bitcoin's value on a line chart using the D3.js library.</div>
                  </div>
              </div>
            </a>
          </li>
          <li>
            <h3>PSD To HTML/CSS Resume Project</h3>
            <a href="#">
              <div className="image-container">
                <img src={Resume} className="project-image"/>
                  <div className="overlay overlay-hover">
                    <div className="text">A PSD to web project that turns <a href="/">this</a> Photoshop image into a website</div>
                  </div>
              </div>
            </a>
          </li>
          <li>
            <h3>Pomodoro Clock</h3>
            <a href="#">
              <div className="image-container">
                <img src={Pomodoro} className="project-image"/>
                  <div className="overlay overlay-hover">
                    <div className="text">A classic Pomodoro clock built with Jquery as part of the FreeCodeCamp ciriculum.</div>
                  </div>
              </div>
            </a>
          </li>
          <li>
            <h3>D3.js U.S. GDP Chart</h3>
            <a href="#">
              <div className="image-container">
                <img src={USGDP} className="project-image"/>
                  <div className="overlay overlay-hover">
                    <div className="text">U.S. GDP plotted on a D3 bar chart</div>
                  </div>
              </div>
            </a>
          </li>
          <li>
            <h3>Wealth Of European Nations Choropleth Map</h3>
            <a href="https://eurogdp.herokuapp.com/">
              <div className="image-container">
                <img src={EuroGDP} className="project-image"/>
                  <div className="overlay overlay-hover">
                    <div className="text">A beautiful choropleth map of Europe that uses Leaflet.js and GeoJSON data to plot GDP by nation</div>
                  </div>
              </div>
            </a>
          </li>
          <li>
            <h3>Wealth Of European Nations Choropleth Map</h3>
            <a href="https://eurogdp.herokuapp.com/">
              <div className="image-container">
                <img src={EuroGDP} className="project-image"/>
                  <div className="overlay overlay-hover">
                    <div className="text">A beautiful choropleth map of Europe that uses Leaflet.js and GeoJSON data to plot GDP by nation</div>
                  </div>
              </div>
            </a>
          </li>
        </ul>
    </div>
  )
}


export default Projects;
