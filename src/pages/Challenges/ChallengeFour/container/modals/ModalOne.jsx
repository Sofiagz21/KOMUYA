import React, { useState } from 'react';
import '../../container/styles.css'
import {Link} from "react-router-dom"

const ModalOne = () => {
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

    return (
        <div>
            <div className="oneFour">
                <div hidden={!show}>
            <div className="modal-background" onClick={handleModalClose}>
            <div className="modal-card1">
                <h4>1. Intentas entrar a la fuerza</h4>
                <p>Eres una persona decidida, segura de ti misma. Confías plenamente en tus capacidades y no tienes miedo. Sin embargo, eres también impulsivo y no piensas las cosas dos veces.</p>
                <p>Para poder llegar lejos en la vida, tienes que mantener esa confianza que te caracteriza, pero también es importante que entiendas que a veces es necesario un momento de introspección.</p>
                <Link to="/Feli4">
                  <button className="ok4" ><i class="fa fa-star" aria-hidden="true"></i>  OK  <i class="fa fa-star" aria-hidden="true"></i></button>
                </Link>

            </div>
            </div>
        </div>
        <button className="button" onClick={handleModalOpen}> 1</button>
            </div>
        </div>
    )
}

export default ModalOne
