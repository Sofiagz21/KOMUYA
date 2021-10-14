import React, { Component } from 'react'
import './stylesFel.css'
import {Link} from "react-router-dom"

const Fel2 = () => {
    return (
        <div className="containerFel">
           <div className="cardFeli">
               <div className="textCard">
                <h3>¡Felicidades!</h3>
                <p>Has finalizado el reto del día martes.</p>
                <p>Vuelve mañana.</p>
                <Link to="/Goals">
                    <div className="boton">
                        <input className= "enviado" type="submit" value="Terminado"/>
                    </div>
               </Link>   
            </div>
           </div>
        </div>
    )
}

export default Fel2
