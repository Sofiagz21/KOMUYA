import React, { useState } from 'react';
import '../../container/styles.css'
import {Link} from "react-router-dom"


const ModalTwo = () => {


    const [show, setShow] = useState(false);
   
    const handleModalClose = (e) => {
      const currentClass = e.target.className;
      
      if (currentClass === 'modal-card2') {
        return;
      }
      
      setShow(false);
    };
    
    const handleModalOpen = () => {
      setShow(true);
    };
    return (
        <div>
            <div className="twoFour">
            <div hidden={!show}>
            <div className="modal-background" onClick={handleModalClose}>
            <div className="modal-card2">
                <h4>2. Intentas escuchar lo que hay del otro lado</h4>
                <p>Atenta, no te gusta dar ningún paso en falso. Por lo general no erras en tus decisiones. El problema es que a veces tardas demasiado en estar seguro.</p>
                  <p>Deberías tenerte más confianza, aunque las probabilidades no estén de tu lado, tienes la capacidad para resolver los problemas que se te presenten.</p>
                  <Link to="/Feli4">
                  <button className="ok4"><i class="fa fa-star" aria-hidden="true"></i>OK <i class="fa fa-star" aria-hidden="true"></i></button>
                </Link>
            
            </div>
            </div>
        </div>
        <button className="button" onClick={handleModalOpen}> 2</button>
            </div>
        </div>
    )
}

export default ModalTwo
