import React, { Component } from 'react';
import Header from './Header';
import Info from './Info';
import Footer from './Footer';
import Projects from './Projects';
import './App.css';


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
