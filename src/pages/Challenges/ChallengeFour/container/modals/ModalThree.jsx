import React, { useState } from 'react';
import {Link} from "react-router-dom"

const ModalThree = () => {

    const [show, setShow] = useState(false);
   
    const handleModalClose = (e) => {
      const currentClass = e.target.className;
      
      if (currentClass === 'modal-card3') {
        return;
      }
      
      setShow(false);
    };
    
    const handleModalOpen = () => {
      setShow(true);
    };
    return (
        <div>
            <div className="threeFour">
            <div hidden={!show}>
            <div className="modal-background" onClick={handleModalClose}>
            <div className="modal-card3">
                <h4>3. Golpeas la puerta</h4>
                <p>Quizás eres una persona práctica, sencilla e inocente. Capaz de aceptar las cosas como son sin perder la calma.</p>
                <p> Por lo general, siempre encuentras la solución más sencilla a los problemas más difíciles. Eso sí, a veces te falta un poco de impulso.</p>
                <Link to="/Feli4">
                  <button className="ok4"> <i class="fa fa-star" aria-hidden="true"></i> OK <i class="fa fa-star" aria-hidden="true"></i></button>
                </Link>
            </div>
            </div>
        </div>
        <button className="button" onClick={handleModalOpen}> 3</button>
            </div>
        </div>
    )
}

export default ModalThree
