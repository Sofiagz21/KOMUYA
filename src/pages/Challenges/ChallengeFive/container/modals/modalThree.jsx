import React, { useState } from 'react';
import './stylesModals.css'
import {Link} from "react-router-dom"
import Notas from '../../images/notas.png'

const ModalOneFive=()=>{

    const [show, setShow] = useState(false);
   
    const handleModalClose = (e) => {
      const currentClass = e.target.className;
      
      if (currentClass === 'modal-card1') {
        return;
      }
      
      setShow(false);
    };
    
    const handleModalOpen = () => {
      setShow(true);
    };
    return(
        <div>
            <div className="oneFour">
                <div hidden={!show}>
            <div className="modal-background" onClick={handleModalClose}>
            <div className="modal-card1">
            <h4> Inseguridad académica. </h4>
                <p>La inseguridad académica tiene que ver con conductas y pensamientos negativos que originan desconfianza hacia nuestras propias capacidades intelectuales.</p>
                <h5> Lo que debes hacer... </h5>
                <p>Darte la oportunidad de encontrar tu verdadero talento, puede que no hayas encontrado en lo que verdaderamente eres bueno.</p>
                <p> Confía en tus capacidades. </p>
                <Link to="/Feli5">
                  <button className="ok4" ><i class="fa fa-star" aria-hidden="true"></i>  OK  <i class="fa fa-star" aria-hidden="true"></i></button>
                </Link>

            </div>
            </div>
        </div>
        <div className="seleccionado">
        <button className="buttonFiveThree" onClick={handleModalOpen}>  <img src={Notas}/>
        </button>
        <div className="abajo">
        <p> Mis logros académicos </p>
        </div>
        </div>
            </div>
        </div>
    )
}

export default ModalOneFive