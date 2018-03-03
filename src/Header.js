import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <div className="App">
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

export default Header;
