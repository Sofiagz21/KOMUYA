import React from 'react'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import '../container/styles.css'
import  ImagenFour from '../../../../utils/images/Retos/reto_fourth/queharias.png'

import Modal1 from '../container/modals/ModalOne'
import Modal2 from '../container/modals/ModalTwo'
import Modal3 from '../container/modals/ModalThree'
import Modal4 from '../container/modals/ModalFour'

const ChallengeFour= () => {
    return (
        <div className="container">
             <Encabezado/>
        <div className="titleFour">
        <h1>El reto del día de hoy es conocerte. ¿Qué harías en esta situación?<i class="fa fa-check" aria-hidden="true"></i> </h1>
        </div>
        <div className="imageFour">
            <img src={ImagenFour} alt="" />
        </div>
        <h1 className="subtitule"> Selecciona un número de acuerdo a la imagén. </h1>
        <div className="options">
           <Modal1/>
           <Modal2/>
           <Modal3/>
           <Modal4/>
        </div>
       </div>
    )
}

export default ChallengeFour