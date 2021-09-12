import React from 'react'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import '../container/styles.css'



function onMyLoad(){
	oneWord()
	twoWord()
}/*FINALIZACIÓN DE LA FUNCIÓN QUE ME CARGA EN EL NAVEGADOR*/


/*FUNCIÓN QUE ME PERMITE ELEGIR EL PRIMER SIGNO*/
function oneWord() {
let primerPalabra=['Aventurera', 'Extrovertida', 'Introvertida','Amigable', 'Solitaria',];
for ( var i in primerPalabra){
    
document.getElementById("palabraOne").innerHTML += "<option value='"+primerPalabra[i]+"'>"+primerPalabra[i]+"</option>";
}
}
    
function twoWord() {
     let segundaPalabra=['Capricornio', 'Acuario', 'Piscis','Aries', 'Tauro', 'Geminis', 'Cancer', 'Leo', 'Virgo', 'Libra','Escorpio', 'Sagitario'];
    for ( var i in segundaPalabra){
        
    document.getElementById("segundaPalabra").innerHTML += "<option value='"+segundaPalabra[i]+"'>"+segundaPalabra[i]+"</option>";
           }
    }


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
                         <select name="primerPalabra" id="palabraOne">
						    <option class="opcion" value=""> Personalidad </option>
					    </select>
                    <select name="segundaPalabra" id="palabraTwo">
						<option class="opcion" value="">Objeto </option>
					</select>
                    </div>
        </div>
    )
}
export default ChallengeOne


