import React, { Component } from 'react';
import './main.css';
import Information from './Information';
import Indice from './indice';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h2>Grace Murray Hopper</h2>
        <hr/>
        <Information /> 
        <div className="Parrafo">
          <p><strong>Grace Murray Hopper</strong>(<a href="#">Nueva York, 9 de diciembre</a> de <a href="#">1906 - Condado de Arlington, 1 de enero de 1992</a>) fue <a href="#">una científica de la computación</a> y militar estadounidense con grado de <a href="#">contraalmirante</a>. Es pionera en el mundo de las <a href="#">ciencias de la computación</a> y fue la primera <a href="#">programadora</a> que utilizó el <a href="#">Mark I</a>. Entre las décadas de los 50 y 60 desarrolló el primer <a href="#">compilador</a> para un <a href="#">lenguaje de programación</a> así como también propició métodos de validación. <a href="#">1​2​3​4​5</a>​</p>
          <p>Popularizó la idea de una máquina independiente de los lenguajes de programación, lo que derivó en el desarrollo de <a href="#">COBOL</a>, un lenguaje de alto nivel de programación que aún se utiliza. Hopper intentó enlistarse en la<a href="#"> marina estadounidense</a>durante la <a href="#">Segunda Guerra Mundial</a>, pero debió unirse a las reservas de la armada porque era adulta para sus 34 años. Era conocida por sus amistades como Amazing Grace</p>
        </div>
        <Indice/>
      </div>
    );
  }
}

export default Main;