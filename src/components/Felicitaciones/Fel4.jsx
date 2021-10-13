import React from 'react'
import {Link} from "react-router-dom"

const Fel4 = () => {
    return (
        <div className="containerFel">
        <div className="cardFeli">
            <div className="textCard">
             <h3>¡Felicidades!</h3>
             <p>Has finalizado el reto del día Jueves.</p>
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

export default Fel4
