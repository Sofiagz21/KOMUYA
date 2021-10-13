import React, { useState } from 'react';
import './stylesModals.css'
import {Link} from "react-router-dom"
import Mente from '../../images/mente.png'


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
                <h4> Inseguridad mental. </h4>
                <p>La inseguridad emocional tiene que ver con sentimientos, conductas y pensamientos negativos que originan desconfianza hacia nuestras propias capacidades.</p>
                <h5> Lo que debes hacer... </h5>
                <p> Desarrolla la autoestima sana y detecta aquellos pensamientos poco ajustados a la realidad que pueden llevarte a a interpretar la realidad de forma poco objetiva y distorsionada. </p>
                <Link to="/Feli5">
                  <button className="ok4" ><i class="fa fa-star" aria-hidden="true"></i>  OK  <i class="fa fa-star" aria-hidden="true"></i></button>
                </Link>

            </div>
            </div>
        </div>
        <div className="seleccionado">
        <button className="buttonFiveTwo" onClick={handleModalOpen}>  <img src={Mente}/>
        </button>
        <div className="abajo">
        <p> Mis pensamientos </p>
        </div>
        </div>
            </div>
        </div>
    )
}

export default ModalOneFive