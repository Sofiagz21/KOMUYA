import React from 'react'
import '../Exit/stylesExit.css'
import {Link} from "react-router-dom"

const containerExit=()=> {
    return (
        <div className="exitContainer">
            <div className="boxExit">
                <div className="textExit">
                    <p> ¿Estás seguro de</p>
                    <p> salir del juego?</p>
                </div>
                <div className="bExit">
                <div className="buttonsExit">
                    <div>
                    <Link to="/">
                    <div className="SI">
                         <button className="si">SI</button>
                    </div>
                    </Link>
                </div>
               <div>
               <Link to="/Goals">
                    <div className="NO">
                         <button className="si">NO</button>
                    </div>
                </Link>

               </div>
                
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default containerExit