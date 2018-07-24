import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Info from './Info';
import Footer from './Footer';
import Projects from './Projects';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBars, faCopyright, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fab, faCheckSquare, faCoffee, faBars, faCopyright)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Info />
          <Projects />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
