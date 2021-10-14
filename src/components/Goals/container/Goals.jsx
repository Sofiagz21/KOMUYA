import React from 'react'
import {Link} from "react-router-dom"
import '../stylesGoals.css'
import '../responsiveGoals.css'
import '../../stylesButtons.css'
import Encabezado from '../../Encabezado/container/encabezado'
import Komuya from '../../../utils/images/Encabezado/komuya.png'
import Lunes from '../../../utils/images/Retos/Lunes.svg'
import Martes from '../../../utils/images/Retos/Martes.svg'
import Miercoles from '../../../utils/images/Retos/Miercoles.svg'
import Jueves from '../../../utils/images/Retos/Jueves.svg'
import Viernes from '../../../utils/images/Retos/Viernes.svg'


const Goals = () => {
    return (
        <div className="goals">
            <Encabezado/>
            <div className="titulo">
                Retos de la semana.
            </div>
            <div className="container">
                <div className="containerGoals">
                <div className="retos">
                <div className="Lunes">
                <div class="contentCards">
                <div class="card">
                    <div class="imgBx">
                        <img src={Lunes}/>
                    </div>
                        <div class="content">
                            <div>
                                <h3 id="Lunes">Lunes</h3>
                                <Link to="/Frase1">
                                     <button className="regresar_lunes"> Reto </button>
                                </Link>
                            </div>
                    </div>
            </div>
            </div>
            </div>
                <div className="Martes">
                <div class="contentCards">
                <div class="card">
                    <div class="imgBx">
                        <img src={Martes}/>
                    </div>
                        <div class="content">
                            <div>
                                <h3 id="Martes">Martes</h3>
                                <Link to="/Frase2">
                                      <button className="regresar_martes"> Reto </button>
                                </Link>
                            </div>

                    </div>
            </div>
            </div>
                </div>
                <div className="Miercoles">
                <div class="contentCards">
                <div class="card">
                    <div class="imgBx">
                        <img src={Miercoles}/>
                    </div>
                        <div class="content">
                            <div>
                                <h3 id="Miercoles">Miercoles</h3>
                                <Link to="/Frase3">
                                     <button className="regresar_miercoles"> Reto </button>
                                </Link>
                            </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
                <div className="retos_dos">
                <div className="Jueves">
                <div class="contentCards">
                <div class="card">
                    <div class="imgBx">
                        <img src={Jueves}/>
                    </div>
                        <div class="content">
                            <div>
                                <h3 id="Jueves">Jueves</h3>
                                <Link to="/Frase4">
                                     <button className="regresar_jueves"> Reto </button>
                                </Link>
                            </div>
                    </div>
            </div>
            </div>
            </div>
                <div className="Viernes">
                <div class="contentCards">
                <div class="card">
                    <div class="imgBx">
                        <img src={Viernes}/>
                    </div>
                        <div class="content">
                            <div>
                                <h3 id="Viernes">Viernes</h3>
                                <Link to="/Frase5">
                                     <button className="regresar_viernes"> Reto </button>
                                </Link>
                            </div>
                    </div>
            </div>
            </div>
                </div>
                </div>
            </div>
                </div>
              
        </div>
    )
}

export default Goals
