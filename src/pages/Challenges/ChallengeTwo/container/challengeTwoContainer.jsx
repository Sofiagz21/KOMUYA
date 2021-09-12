import React from 'react'
import '../styles.css'
import {Link} from "react-router-dom"

const challengeTwoContainer = () => {
    return (
        <div className="boxx">
            <div className="box">
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
        </ol>
            </form>  
        </div>
        <Link to="/Feli2">
            <input className= "send" type="submit" value="Enviar"/>
        </Link>
        </div>
        
    )
}

export default challengeTwoContainer
