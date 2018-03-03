import React, { Component } from 'react';
import './main.css';
import Information from './Information';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Information /> 
        <h1>Grace Murray Hopper</h1>
        <hr/>
        <div className="Parrafo">
          <p>Grace Murray Hopper (Nueva York, 9 de diciembre de 1906 - Condado de Arlington, 1 de enero de 1992) fue una científica de la computación y militar estadounidense con grado de contraalmirante. Es pionera en el mundo de las ciencias de la computación y fue la primera programadora que utilizó el Mark I. Entre las décadas de los 50 y 60 desarrolló el primer compilador para un lenguaje de programación así como también propició métodos de validación. 1​2​3​4​5​</p>
        </div>
        
      </div>
    );
  }
}

export default Main;