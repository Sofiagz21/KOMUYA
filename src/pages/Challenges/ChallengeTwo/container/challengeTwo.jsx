import React from 'react'
import Encabezado from '../../../../components/Encabezado/container/encabezado'
import Titulo from './challengeTwoTittle'
import Container from './challengeTwoContainer'
import '../container/styles.css'

const ChallengeTwo= () => {
    return (
        <div className="container">
             <Encabezado/>
             <Titulo/>
             <Container/>
        </div>
    )
}

export default ChallengeTwo