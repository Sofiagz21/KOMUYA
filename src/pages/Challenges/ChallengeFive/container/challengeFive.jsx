import React from 'react'
import '../styles.css'
import ModalOne from '../container/modals/modalOne'
import ModalTwo from '../container/modals/modalTwo'
import ModalThree from '../container/modals/modalThree'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import {Link} from "react-router-dom"

const ChallengeFive= () => {
    return (
        <div className="container">
             <Encabezado/>
             <div className="title_persona_soy">
                    <p>Aprendiendo a combatir mis inseguridades</p>
             </div>
             <div className="text">
                    <p>El reto del dia de hoy es identificar tus inseguridades.</p>
            </div>
     
            <div className="topp">
                 <p> Selecciona una de las imagenes de acuerdo a lo que a menudo te hace sentir inseguro.</p>
            </div>
            <div className="body">
            <ModalOne/>
            <ModalTwo/>
            <ModalThree/>
            </div> 
            <Link to="/Feli5">
                        <div className="boton">
                        <input className= "enviarYes" type="submit" value="Enviar"/>
                        </div>
            </Link>                                                                                                          
        </div>
        
    )
}

export default ChallengeFive