import React from 'react'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import Contenedor from '../../ChallengeTwo/container/challengeTwoContainer'
import '../container/styles.css'

const ChallengeTwo= () => {
    return (
        <div className="containerTwo">
             <Encabezado/>
             <Contenedor/>
        </div>
    )
}

export default ChallengeTwo