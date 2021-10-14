import React, { useState } from 'react';
import './stylesModals.css'
import {Link} from "react-router-dom"
import Cuerpo from '../../images/cuerpo.png'


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
                <h4> Inseguridad corporal. </h4>
                <p> La inseguridad corporal es la falta de aceptación de uno mismo, expresada en el lenguaje verbal y no verbal que, además, genera una baja autoestima.</p>
                <h5> Lo que debes hacer... </h5>
                <p>Acepta tu cuerpo tal y como es, sé menos crítico con él y míralo con buenos ojos. </p>
                <p>No te avergüences de tu propio cuerpo.  Cuando haces comentarios duros sobre tu cuerpo, dañas tu propia autoestima. </p>

                <Link to="/Feli5">
                  <button className="ok5" ><i class="fa fa-star" aria-hidden="true"></i>  OK  <i class="fa fa-star" aria-hidden="true"></i></button>
                </Link>
            </div>
            </div>
        </div>
        <div className="seleccionado">
        <button className="buttonFiveOne" onClick={handleModalOpen}>  <img src={Cuerpo}/>
        </button>
        <div className="abajo">
        <p>Mi cuerpo</p>
        </div>
        </div>
            </div>
        </div>
    )
}

export default ModalOneFive