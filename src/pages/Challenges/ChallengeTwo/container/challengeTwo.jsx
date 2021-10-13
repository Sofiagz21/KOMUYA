import React from 'react'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import '../container/styles.css'
import {Link} from "react-router-dom"

const ChallengeTwo= () => {
    return (
        <div className="container">
             <Encabezado/>
             <div className="containerChallengeTwo">
                <div className="title_Two">
                <h1>El reto del día  es conocerte es conocerte, nombra 10 cosas que te gusten de ti. <i class="fa fa-check" aria-hidden="true"></i></h1>
                </div>
            <div className="boxTwo">
                <form action="">
                    <ol>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                        <li className="list"> <input type="text" name="nombre" required autoComplete="off"/></li>
                    </ol>
                </form>
            </div>
            <Link to="/Feli1">
                    <div className="boton">
                     <input className= "enviar" type="submit" value="Enviar"/>
                     </div>
            </Link>
             </div>
        </div>
    )
}

export default ChallengeTwo