import React from 'react'
import './stylesFel.css'
import {Link} from "react-router-dom"
const Fel1 = () => {
    return (
        <div>
        <div className="containerFel">
           <div className="cardFeli">
               <div className="textCard">
                <h3>¡Felicidades!</h3>
                <p>Has finalizado el reto del día lunes.</p>
                <p>Vuelve mañana.</p>
                <Link to="/Goals">
                    <div className="boton">
                        <input className= "enviado" type="submit" value="Terminado"/>
                    </div>
                 </Link>
            </div>
           </div>   
        </div>
        </div>
    )
}

export default Fel1
