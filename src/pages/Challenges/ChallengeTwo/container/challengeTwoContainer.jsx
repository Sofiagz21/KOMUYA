import React from 'react'
import '../container/styles.css'
import {Link} from "react-router-dom"

const challengeTwoContainer = () => {
    return (
        <div className="boxTwo">
            <div className="containerC">
            <h1>El reto del día  es conocerte es conocerte, nombra 10 cosas que te gusten de ti <i class="fa fa-check" aria-hidden="true"></i></h1>
            </div>

            <div className="boxx">
            <form action="">
            <ol>
            <div className="left">
            <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
                <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
                <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
                <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
                <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
            </div>
            <div className="right">
            <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
                <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
                <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
                <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
                <li>
                    <input className="list" type="text" name="nombre" required autoComplete="off"/>
                </li>
            </div>
            <div className="enviar">
            <Link to="/Feli2">
                <button className="enviarsito">
                    Enviar
                </button>
                </Link>
            </div>
        </ol>
                
            </form>  
        </div>



        </div>
    )
}

export default challengeTwoContainer
