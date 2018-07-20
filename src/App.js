import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Info from './Info';
import Footer from './Footer';
import Projects from './Projects';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
