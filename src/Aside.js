import React, { Component } from 'react';
import wiki from './wiki.png';
import './Aside.css';
// import Nav from './Nav';

class Aside extends Component {
  render() {
    return (
      <div className="Aside">
        <img src={wiki} className="Aside-wiki" alt="wiki" />
        <ul>
          <li><a href="#">Portada</a></li>
          <li><a href="#">Portal de la comunidad</a></li>
          <li><a href="#">Actualidad</a></li>
          <li><a href="#">Cambios recientes</a></li>
          <li><a href="#">Paginas nuevas</a></li>
          <li><a href="#">Pagina aleatoria</a></li>
          <li><a href="#">Ayuda</a></li>
          <li><a href="#">Donaciones</a></li>
          <li><a href="#">Notificar un error</a></li>
          <br/>
          <li className="Aside-title">Imprimir/exportar</li>
          <div></div>
          <li><a href="#">Crear un libro</a></li>
          <li><a href="#">Descargar como PDF</a></li>
          <li><a href="#">Version para imprimir</a></li>
          <br/>
          <li className="Aside-title">En otros proyectos</li>
          <div></div>
          <li><a href="#">Wikimedia Commons</a></li>
          <li><a href="#">Wikiquoto</a></li>
          <br/>
          <li className="Aside-title">Herramientas</li>
          <div></div>
          <li><a href="#">Lo que enlaza aqui</a></li>
          <li><a href="#">Cambios en enlazados </a></li>
          <li><a href="#">Subir archivo</a></li>
          <li><a href="#">Paginas especiales</a></li>
          <li><a href="#">Enlace permanente</a></li>
          <li><a href="#">Informacion de la pagina</a></li>
          <li><a href="#">Elemento de wikidata</a></li>
          <li><a href="#">Citar esta página</a></li>
          <br/>
          <li className="Aside-title">En otros idiomas</li>
          <div></div>
          <li><a href="#">Crear un libro</a></li>
          <li><a href="#">Descargar como PDF</a></li>
          <li><a href="#">Version para imprimir</a></li>
        </ul>
      </div>
     
    );
  }
}

export default Aside;