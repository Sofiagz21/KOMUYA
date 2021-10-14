import React from 'react'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import Question from '../../../../utils/images/Encabezado/question.svg'
import '../container/styles.css'
import '../container/responsive.css'
import {Link} from "react-router-dom"


const ChallengeOne= () => {
function establecerClima() {
  let seleccionar = document.querySelector('select');
  let eleccion = seleccionar.value;
  if (eleccion === 'escribir') {
    document.getElementById('resultadito').innerHTML='Tu habilidad es la intelectualidad. Posees gusto por la actividad intelectual. Profundizas. Excavaz y te gusta expresar lo que sientes de manera literaria.';
  } else if (eleccion === 'resolver') {
    document.getElementById('resultadito').innerHTML='Tu habilidad es ser analítico/a y objetivo/a. Abordas la vida de manera racional, amas los hechos, quieres tener pruebas de que se avanza, eres una persona lógica y, a veces, algo distanciada de tus emociones.';
  } else if (eleccion === 'liderar') {
    document.getElementById('resultadito').innerHTML='Tu habilidad es ser lider, asumes las situaciones a tu cargo. Ordenas, das directivas. La confrontación no es un problema. Por el contrario, es el comienzo de la resolución de un problema.';
  } else if (eleccion === 'dibujar') {
    document.getElementById('resultadito').innerHTML= 'Tu habilidad es la creatividad, juegas, manejas con destreza la generación de ideas. Baraja las ideas: qué pasaría si, y si después, y si. Abordas el mundo con nuevos ojos.';
  } else if (eleccion === 'deporte') {
    document.getElementById('resultadito').innerHTML='Tu habilidad es la competición. Posees el talento de la persona que es consciente del nivel de competencia de los demás. Tu incentivo es ser el/la mejor. Necesitas a los demás para competir. Es la energía que necesita para motivarte.';
  } else {
    document.getElementById('resultadito').innerHTML= '';
  }
}

console.log("respuesta", establecerClima)

    return (
        <div className="container">
            <Encabezado/>
            <div className="title_persona_soy">
                    <p>¿Qué habilidades tienes?</p>
                </div>
                <div className="text">
                    <p>El reto del dia de hoy es conocerte, selecciona tu actividad favorita e identifica que tipo de habilidad tienes.</p>
                    <p>Cuando selecciones la opción, da click en el icono del personaje para conocer tu habilidad.</p>
                </div>
                    <div className="seleccionar">
                     <div className="opciones">
                    <div className="personality">
                        <select id="palabraTwo">
                        <option value="">Selecciona una opción </option>
                        <option value="escribir">Escribir y leer</option>
                        <option value="resolver">Resolver problemas matemáticos</option>
                        <option value="liderar">Liderar y escuchar a los otros</option>
                        <option value="dibujar">Dibujar y hacer manualidades </option>
                        <option value="deporte"> Practicar un deporte </option>
                        </select>
                        </div>
                    </div>

                    </div>
                    <div className="question">

                    <button className="buttonTwoChallenge" onClick={establecerClima}>  <img src={Question}/>
                    </button>
                     {/*<img src={Question} type="submit" onClick={() => establecerClima()} />*/}
                    </div>

                    <div className="answer">
                        <div class="result">
                        <h4 className="texting" id='resultadito'></h4>
                        </div>
                    </div>
                    <Link to="/Feli1">
                        <div className="boton">
                        <input className= "enviar" type="submit" value="Enviar"/>
                        </div>
                   </Link>
                    </div>
    )
}
export default ChallengeOne


