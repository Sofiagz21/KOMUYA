import React from 'react'
import {Link} from "react-router-dom"
import '../../Encabezado/container/styles.css'
import Komuya from '../../../utils/images/Encabezado/komuya.png'
import Casa from '../../../utils/images/Encabezado/casa.svg'
import Corazon from '../../../utils/images/Encabezado/corazon.svg'
import Salir from '../../../utils/images/Encabezado/salir.svg'
const Encabezado= () => {
    return (
        <div className="up">
                 <img className="log"src={Komuya}/>
              
                <div className="casa">
                   <Link to="/">
                        <img src={Casa}/>
                        <p>Inicio</p>
                     </Link>
                </div>
                <div className="corazon">
                <Link to="/Goals">
                     <img src={Corazon}/>
                     <p>Retos</p>
                     </Link>
            </div>
            <div className="salir">
                    <img src={Salir}/>
                    <p>Salir</p>
            </div>
        </div>
    )
}
export default Encabezado