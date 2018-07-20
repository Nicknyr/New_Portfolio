import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
