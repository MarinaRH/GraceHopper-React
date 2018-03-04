import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Aside from './Components/Aside';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aside />
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
