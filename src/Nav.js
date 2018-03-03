import React, { Component } from 'react';
// import logo from './logo.svg';
import './Nav.css';

class Nav extends Component {
  render() {
    return (  
      <nav className="Nav">
        <ul className="Nav-left">
          <li>Articulo</li>
          <li><a href="#">Discusion</a></li>
        </ul>
        <ul className="Nav-rigth">
          <li>Leer</li>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Ver historial</a></li>
          <li><input type="text" placeholder="Buscar en Wikipedia"/></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;