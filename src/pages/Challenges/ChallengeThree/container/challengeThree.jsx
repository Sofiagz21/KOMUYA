import React from 'react'
import '../challengeThree.css'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import {Link} from "react-router-dom"
const ChallengeThree= () => {
   
    function establecerClima() {
    if (document.getElementById('resultadito')){
        document.getElementById('resultadito').innerHTML='Recuerda que la pereza es mental, organiza tu tiempo y metas durante el día, no permitas que venza a tus ganas.';
    }

    }

    function establecerClima2() {
        if (document.getElementById('resultadito2')){
            document.getElementById('resultadito2').innerHTML='Recuerda que la disciplina es el puente entre metas y logros, recuerda hacia donde quieres llegar.';
        }
    }

    function establecerClima3() {
        if (document.getElementById('resultadito3')){
            document.getElementById('resultadito3').innerHTML='Recuerda que la autonomía expresa la capacidad de cada persona para darse reglas a sí misma.';
        }
    }

    function establecerClima4() {
        if (document.getElementById('resultadito4')){
            document.getElementById('resultadito4').innerHTML='Recuerda que estar enfocado te llevara a lograr todo lo que te propongas, evita aplazar por cosas menos importantes. ';
        }
    }

    function establecerClima5() {
        if (document.getElementById('resultadito5')){
            document.getElementById('resultadito5').innerHTML='Recuerda que la responsabilidad representa que tan importante es lo que quieres lograr, el precio de la grandeza es la responsabilidad.';
        }
    }

    function establecerClima6() {
        if (document.getElementById('resultadito6')){
            document.getElementById('resultadito6').innerHTML='Recuerda que lo unico que no se recupera es el tiempo, aprovecha de cada minuto para trabajar en tus sueños.';
        }
    }



    return (
        <div className="container">
             <Encabezado/>
             <div className="title_conocerme">
                    <p>¿Qué tipo de persona soy?</p>
             </div>
             <div className="text_conocerme">
                    <p>El reto del día de hoy es conocerte, identifica 4 cosas las que deberías mejorar.</p>
                </div>
            <div className="burbujas">
                <button className="buttonTwoChallenge" onClick={establecerClima}><div className="bubbleOne"><p>Pereza</p><div id='resultadito'></div></div></button>
                <button className="buttonTwoChallenge" onClick={establecerClima2}><div className="bubbleTwo"><p>Indisciplina</p><div id='resultadito2'></div></div></button>
                <button className="buttonTwoChallenge" onClick={establecerClima3}><div className="bubbleTwo"><p>Autonomía</p><div id='resultadito3'></div></div></button>
                <button className="buttonTwoChallenge" onClick={establecerClima4}><div className="bubbleFour"><p>Dispersión</p><div id='resultadito4'></div></div></button>
                <button className="buttonTwoChallenge" onClick={establecerClima5}><div className="bubbleFive"><p>Irresponsabilidad</p><div id='resultadito5'></div></div></button>
                <button className="buttonTwoChallenge" onClick={establecerClima6}><div className="bubbleSix"><p>Procrastinación</p><div id='resultadito6'></div></div></button>
            </div>
            <Link to="/Feli3">
                    <div className="boton">
                     <input className= "enviar" type="submit" value="Enviar"/>
                     </div>
            </Link>
        </div>
    )
}

export default ChallengeThree