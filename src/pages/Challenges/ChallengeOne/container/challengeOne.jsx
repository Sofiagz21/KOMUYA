import React from 'react'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import Question from '../../../../utils/images/Encabezado/question.svg'
import '../container/styles.css'


const ChallengeOne= () => {
    return (
        <div className="container">
            <Encabezado/>
            <div className="title_persona_soy">
                    <p>¿Que tipo de persona soy?</p>
                </div>
                <div className="text">
                    <p>El reto del dia de hoy es conocerte, selecciona dos palabras que te identifique y reconoce que tipo de persona eres.</p>
                </div>
                    <div className="seleccionar">
                     <div className="options">
                        <div className="personality">
                            <select name="primerPalabra" id="palabraOne">
                                <option class="opcion" value=""> Personalidad </option>
                            </select>
                        </div>
                    <div className="object">
                        <select name="segundaPalabra" id="palabraTwo">
                            <option class="opcion" value="">Objeto </option>
                        </select>
                    </div>
                    </div>
                    </div>
                    <div className="question">
                     <img src={Question}/>
                    </div>

                    <div className="answer">
                        <div class="result">
                            <h6 id="resultadito"> </h6>
                        </div>
                    </div>
                    </div>
    )
}
export default ChallengeOne


