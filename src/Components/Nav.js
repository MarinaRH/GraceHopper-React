import React, { Component } from 'react';
import './Nav.css';
import Main from './main';


class Nav extends Component {
  render() {
    return (  
      <div>
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
          <Main />
        </nav>
      </div>
    );
  }
}

export default Nav;