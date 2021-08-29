import React from 'react'
import {Link} from "react-router-dom"
import '../stylesGoals.css'
import '../../stylesButtons.css'

const Goals = () => {
    return (
        <div className="goals">
            <p className="titulo">Retos de la semana</p>
            <div className="container">
              <div className="retos">
                <div className="Lunes">
                <div class="contentCards">
                <div class="card">
                    <div class="imgBx">
                    </div>
                        <div class="content">
                            <div>
                                <h3 id="Lunes">Mora</h3>
                            </div>
                    </div>
            </div>
            </div>
            </div>
                <div className="Martes">
                   <p>Hola</p>
                </div>
                <div className="Miercoles">
                  
                </div>
                <div className="Jueves">

                </div>
                <div className="Viernes">

                </div>
                </div>
            </div>
            <Link to="/">
              <button className="regresar"> Me voy para Home </button>
            </Link>
        </div>
    )
}

export default Goals
