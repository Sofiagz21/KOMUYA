import React from 'react'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import '../container/styles.css'


const ChallengeOne= () => {
    return (
        <div className="container">
            <Encabezado/>
            <div className="texto">
                <p>El reto del dia de hoy es conocerte, selecciona dos palabras que te identifique y reconoce que tipo de persona eres.</p>
            </div>
            <div className="seleccionar">
            <select className="elegir">
                    <option>Aventurera</option>

                    <option>Avión</option>

                    <option>Tren</option>
            </select>
            <select className="elegir">
                    <option>Aventurera</option>

                    <option>Avión</option>

                    <option>Tren</option>
            </select>
            </div>
        </div>
    )
}
export default ChallengeOne