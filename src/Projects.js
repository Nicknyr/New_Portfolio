import React, { Component } from 'react';
import Placeholder from './images/placeholder.png';
import EuroGDP from './images/euro-medium.png';
import SpaceStations from './images/space.png';
import BitcoinChart from './images/bitcoin-medium.png';


const Projects = () => {
  return (
    <div className="project-section" id="portfolio">
        <h2>Projects</h2>
        <hr />
        <ul>
          <li>
            <h3>Wealth Of European Nations Choropleth Map</h3>
            <a href="https://eurogdp.herokuapp.com/"><img src={EuroGDP} className="project-image"/></a>
            <p>A beautiful choropleth map of Europe created with Mapbox and the Leaflet.js library that pulls GeoJSON data from an API and plots Gross Domestic Product of every European nation.</p>
          </li>
          <li>
            <h3>NASA & SpaceX Facilities Map</h3>
            <img src={SpaceStations} className="project-image"/>
            <p>A Mapbox map of the world that plots NASA and SpaceX facilties on using React-Leaflet, an official NASA API, and a SpaceX API.</p>
          </li>
          <li>
            <h3>D3.js Bitcoin line chart</h3>
            <img src={BitcoinChart} className="project-image"/>
            <p>This project uses the CryptoCompare API to retrieve up-to-date Bitcoin prices and plots Bitcoin's value on a line chart using the D3.js library.</p>
          </li>
        </ul>
    </div>
  )
}


export default Projects;
