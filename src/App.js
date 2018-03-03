import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Aside from './Aside';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aside />
        <header className="App-header">
          <ul className="App-list">
            <li>No has accedido</li>
            <li><a href="#">Discusion</a></li>
            <li><a href="#">Contribuciones</a></li>
            <li><a href="#">Crear una cuenta</a></li>
            <li><a href="#">Acceder</a></li>
          </ul>
        </header>
        <Nav />
        
      </div>
     
    );
  }
}

export default App;
