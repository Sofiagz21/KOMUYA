import React from 'react'
import '../challengeThree.css'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import {Link} from "react-router-dom"
const ChallengeThree= () => {
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
                <div className="bubbleOne" ><p>Pereza</p></div>
                <div className="bubbleTwo"><p>Indisciplina</p></div>
                <div className="bubbleThree"><p>Autonomía</p></div>
                <div className="bubbleFour"><p>Dispersión</p></div>
                <div className="bubbleFive"><p>Irresponsabilidad</p></div>
                <div className="bubbleSix"><p>Procrastinación</p></div>
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