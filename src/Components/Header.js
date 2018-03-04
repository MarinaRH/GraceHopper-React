import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <ul className="App-list">
            <li>No has accedido</li>
            <li><a href="#">Discusion</a></li>
            <li><a href="#">Contribuciones</a></li>
            <li><a href="#">Crear una cuenta</a></li>
            <li><a href="#">Acceder</a></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
