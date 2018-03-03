import React, { Component } from 'react';
import './Information.css';
import Grace from './grace.jpg';
// import Nav from './Nav';

class Information extends Component {
  render() {
    return (
      <div className="Info">
        <div className="Title Center">
          <h4>Grace Murray Hopper</h4>
        </div>
        <img src={Grace} className="Info-grace" alt="Grace Hooper" />
        <div className="Sub-Title Center">
          <h5>Informacion personal</h5>
        </div>
        <div clasName="Personal-Date">
          <div className="Personal">
            <h5>Nombre en ingles</h5>
            <h5>Nacimiento</h5>
            <h5>Fallecimiento</h5>
            <h5>Lugar de sepultura</h5>
            <h5>Recidencia</h5>
            <h5>Nacionalidad </h5>
          </div>
          <div className="Date">
            <p> Grace Hopper</p>
            <p> <a href="#">9 de diciembre</a> de <a href="#">1906 Nueva York,Estados Unidos</a></p>
            <p> <a href="#">1 de enero</a> de <a href="#">1992</a>(85 años) Arlington,Estados unidos</p>
            <p> <a href="#">Cementerio nacional de Arlington</a></p>
            <p> Nueva York</p>
            <p> Estaunidense</p>
          </div>
        </div>

        <div className="Sub-Title Center">
          <h5>Educacion</h5>
        </div>
        <div clasName="Personal-Date">
          <div className="Personal">
            <h5>Alma mater</h5>
            <h5>Supervisor doctoral</h5>
          </div>
          <div className="Date">
            <p> <a href="#">Vassar College</a> <span>(titulo de grado</span><br/>
            <a href="#">Universidad Yale</a> <span>(maestria)</span><br/>
            Universidad Yale <span>(Ph.D.)</span><br/>
            Wardlaw-Hartridge School</p>
            <p> Øystein Ore</p>
          </div>
        </div>

        <div className="Sub-Title Center">
          <h5>Informacion profesional</h5>
        </div>
        <div clasName="Personal-Date">
          <div className="Personal">
            <h5>Ocupacion</h5> <br/>
            <h5>Obras notables</h5>
            <h5>Rama militar</h5>
            <h5>Rango</h5>
            <h5>Participo en</h5>
            <h5>Mienbro de </h5><br/><br/><br/><br/>
            <h5>Distinciones</h5><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div className="Date">
            <p> <a href="#">Matematica</a> oficial naval,<br/> <a href="#">informatica teorica,</a>profesora <br/> de unniversidad y <a href="#">programadora</a></p>
            <p><a href="#">FLOW-MATIC</a></p>
            <p><a href="#">Armada de los Estados Unidos</a></p>
            <p> Rear admiral</p>
            <p><a href="#"> Segunda  Guerra Mundial</a></p>
            <p><a href="#"> Academia Estadounidense de<br/>
             las Artes y las Ciencias<br/> Daughters of the American<br/>RevolutionPhi Beta Kappa<br/>
             Asociación Estadounidense <br/>para el Avance de la Ciencia</a></p>
             <p><a href="#"> American Campaing Medal</a><br/>Distinguished Fellow of the British Computer Society Legionario de la Legión del Mérito Legión<a  href="#"> al merito Medalla Presidencial de la Libertad<br/> Medalla de Servicio en la Defensa Nacional Medalla de Victoria Segunda Guerra Mundial Medalla por Servicio Distinguido de Defensa</a><br/>Meritorious Service Medal Wilbur Cross Medal (1972) W. Wallace McDowell Award (1979)<br/> Computer History Museum fellow (1987) IEEE Emanuel R. Piore Award (1988)<a href="#"> Medalla Nacional de Tecnología e Innovación</a>(1991)<a href="#">  National Women's Hall of Fame</a>(1994)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;