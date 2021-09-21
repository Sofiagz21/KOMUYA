import React, { useState } from 'react';
import {Link} from "react-router-dom"

const ModalFour = () => {



    const [show, setShow] = useState(false);
   
    const handleModalClose = (e) => {
      const currentClass = e.target.className;
      
      if (currentClass === 'modal-card4') {
        return;
      }
      
      setShow(false);
    };
    
    const handleModalOpen = () => {
      setShow(true);
    };
    return (
        <div>
            <div className="fourFour">
            <div hidden={!show}>
            <div className="modal-background" onClick={handleModalClose}>
            <div className="modal-card4">
                <h4>4. Gritas y haces escándalo</h4>
                <p>Esa capacidad de sentirte interpelado por todas las situaciones te vuelve una persona empática, apasionada y deslumbrante.</p>
                <p>Te gusta tener el dominio de las situaciones, y pierdes el equilibrio si las cosas salen de otra manera. Tu mayor desafío es aprender a mantener la calma cuando las situaciones lo requieren, entendiendo que eso no significa debilidad, sino todo lo contrario.</p>
                <Link to="/Feli4">
                  <button className="ok4"> <i class="fa fa-star" aria-hidden="true"></i> OK <i class="fa fa-star" aria-hidden="true"></i></button>
                </Link>
            </div>
            </div>
        </div>
        <button className="button" onClick={handleModalOpen}> 4</button>
            </div>
        </div>
    )
}

export default ModalFour
