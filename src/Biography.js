import React, { Component } from 'react';
import './Biography.css';

class Biography extends Component {
  render() {
    return (
      <div className="Biography Parrafo">
        <p className="Title-parraf">Biografía [<a href="#">editar</a>]</p>
        <hr/>
        <p>Grace Brewster Murray, nació en <a href="#">Nueva York</a> (<a href="#">EE. UU</a>.). Grace fue una bisnieta de <a href="#">Alexander Russell</a>, un almirante de la Armada de los Estados Unidos. Este fue su modelo y su héroe personal. También fue nieta de un <a href="#">ingeniero</a> civil, <a href="#" className="Red">John Van Horne</a>. Sus padres fueron Walter Fletcher Murray, corredor de seguros y Mary Campbell Van Horne. Desde muy pequeña demostró aptitudes para las ciencias y la <a href="#">matemática</a>. Recibió siempre el apoyo de su abuelo y de su padre para que las estudiara, pues quería que sus hijas tuvieran las mismas oportunidades que su hijo varón. También le atrajo mucho cualquier tipo de dispositivo mecánico, tanto fue así, que con 7 años desarmó todos los relojes de su casa para ver si podía entender cómo funcionaban. En 1930 se casa con <a href="#" className="Red">Vincent Foster Hopper</a>, un doctor en <a href="#">literatura en lenguaje inglés</a>, que durante muchos años fue presidente del departamento de inglés de la<a href="#"> universidad de Nueva York</a>. Vincent y Grace se divorciaron en 1945 sin tener hijos.</p>

        <p className="Title-parraf"><strong>Estudios</strong> [<a href="#">editar</a>]</p>
        <p>Hopper estudió en varias escuelas privadas para mujeres, y en 1924 ingresó en <a href="#">Vassar College</a> en Nueva York, donde estudió matemáticas y <a href="#">física</a>, graduándose con honores en 1928. Poco después, obtuvo una beca para cursar una maestría en matemática en la <a href="#">universidad de Yale</a>, donde se graduó en 1930.
        Le ofrecieron un puesto como asistente en el departamento de matemática de Vassar College, en donde permaneció hasta 1943. Mientras continuó sus estudios en <a href="#">Yale</a>, donde se doctoró en matemática en 1934.</p>

        <p className="Title-parraf"><strong>Ingreso en la armada</strong> [<a href="#">editar</a>]</p>
        <p>
        Siguiendo los pasos de su bisabuelo, en 1943 decidió unirse a las <a href="#">fuerzas armadas</a> en plena <a href="#">segunda guerra mundial</a>, para lo que tuvo que obtener un permiso especial. Asistió a la escuela de cadetes navales para mujeres, graduándose la primera de su clase en 1944 y con el rango de <a href="#">teniente</a>. Fue enviada a <a href="#">Harvard</a> para trabajar en el proyecto de computación que dirigía el comandante <a href="#">Howard Aiken</a>, la construcción de la <a href="#">Mark I</a>. Al acabar la Segunda Guerra Mundial, Hopper quiso seguir en la armada pero había cumplido los 40 años en 1946 (el límite eran 38) por lo que fue rechazada, aunque pudo permanecer en la reserva. Así que siguió en Harvard como investigadora junto a Aiken. Desarrolló varias aplicaciones contables para la Mark I, que estaba siendo utilizada por una compañía de seguros.<br/>
        Permaneció en Harvard hasta 1949, cuando Hopper empezó a trabajar en la <a href="#" className="Red">Eckert - Mauchly Corporation</a> en <a href="#">Filadelfia</a>, que en esos momentos estaban desarrollando las computadoras <a href="#">BINAC</a> y <a href="#">UNIVAC I</a>. Trabajó en esa compañía y en sus sucesoras hasta su retiro en 1971. Allí fue donde Hopper realizó sus mayores contribuciones a la programación moderna. En 1952, desarrolló el primer <a href="#">compilador</a> de la historia, el A-0, y en 1957 realizó el primer compilador para procesamiento de datos que usaba órdenes en inglés, el B-0 (<a href="#">FLOW-MATIC</a>), utilizado principalmente para el cálculo de nóminas.
        </p>

        <p className="Title-parraf"><strong>Cobol</strong> [<a href="#">editar</a>]</p>
        <p>
        Tras su experiencia con FLOW-MATIC, Hopper pensó que podía crearse un <a href="#">lenguaje de programación</a> que usara órdenes en inglés y que sirviera para aplicaciones de negocios. Con esta idea, las bases para <a href="#">COBOL</a> habían sido establecidas, y dos años después se creó el comité que diseñó este lenguaje. Aunque Hopper no tuvo un papel preponderante en el desarrollo del lenguaje, fue miembro del comité original para crearlo, y el FLOW-MATIC fue una influencia tan importante en el diseño de COBOL, que Hopper ha pasado a la historia de la informática como su creadora. COBOL fue el primer lenguaje que ofreció una auténtica <a href="#">interfaz</a> a los recursos disponibles en el <a href="#">ordenador</a>, de forma que el programador no tenía que conocer los detalles específicos. Además, los programas desarrollados para una plataforma concreta podían ser ejecutados en un ordenador diferente a aquél en el cual se habían programado sin necesidad de hacer cambios.
        Al final de su carrera profesional participó en los comités de <a href="#">estandarización</a> de los lenguajes de programación <a href="#">COBOL y FORTRAN</a>.
        </p>

        <p className="Title-parraf"><strong>Reingreso a la armada</strong> [<a href="#">editar</a>]</p>
        <p>Hopper permaneció en la reserva hasta finales de 1966, cuando tuvo que retirarse con el grado de <a href="#">Capitán de fragata</a>, por haber alcanzado el límite de edad nuevamente. Pero este retiro duró poco, ya que la armada la volvió a llamar en agosto de 1967 en principio, por un periodo de seis meses para que estandarizara los <a href="#">lenguajes de alto nivel</a> que usaban, pero fue de forma indefinida. Se retiró de nuevo en 1971 pero se le pidió volver al servicio activo de nuevo en 1972. Fue ascendida a <a href="#">Capitán de navío</a> en 1973. En 1983 ascendió a <a href="#">Contraalmirante</a> y en 1986 se retiró de la armada de manera definitiva, siendo en ese momento la oficial de más edad de la armada de los Estados Unidos. Tras su retiro, se incorporó como asesora en Digital <a href="#">Equipment Corporation</a>, participando en foros industriales, dando unas 200 conferencias por año y participando en programas educativos hasta su muerte.

        Falleció mientras dormía en su domicilio de <a href="#">Arlington, Virginia</a>, el <a href="#">1 de enero</a> de 1992 a los ochenta y cinco años. Fue enterrada con todos los honores militares el <a href="#">7 de enero</a> en el <a href="#">cementerioNacional de Arlington</a>.
        </p>
        
      </div>
    );
  }
}

export default Biography;