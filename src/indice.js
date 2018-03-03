import React, {Component} from 'react';
import './indice.css';

class Indice extends Component {
    render() {
      return (
      <div className="Indice">
      <p className="Indice-Title">índice [<span><a href="#">ocultar</a>]</span></p>
      <ol>
        <li><a href="#">Biografia</a>
          <ol className="List">
            <li><a href="#">Estudios</a></li>
            <li><a href="#">Ingreso en la armada</a></li>
            <li><a href="#">Cobol</a></li>
            <li><a href="#">Reingreso en la armada</a></li>
          </ol>
        </li>
        <li><a href="#">Curiosidades</a></li>
        <li><a href="#">Premios y reconocimientos</a></li>
        <li><a href="#">Vease tambien</a></li>
        <li><a href="#">Notas y referencias</a></li>
        <li><a href="#">Enlaces externos</a></li>
      </ol>
      </div>
      );
    }
}
export default Indice;