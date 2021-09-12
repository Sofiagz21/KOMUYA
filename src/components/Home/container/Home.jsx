import React from 'react'
import image1 from '../../../utils/images/Home/logo.png'
import circulo1 from '../../../utils/images/Home/elipseAmarillo.png'
import circulo2 from '../../../utils/images/Home/elipseAzul.png'
import circulo3 from '../../../utils/images/Home/elipseRosa.png'
import circulo4 from '../../../utils/images/Home/elipseGris.png';
import {Link} from "react-router-dom"
import '../stylesHome.css';


const Homecontainer = () => {
    return (
        <div className="home_component">
            <div className="box">
                <div className="circle">
                    <div className="circuloAmarillo">
                    <img src={circulo1} alt="" />
                    </div>
                    <div className="circuloAzul">
                    <img src={circulo2} alt="" />
                    </div>
                </div>
                <div className="logo">
                    <img src={image1} alt="logo"/>
                </div>
                <div className="circuloRosa">
                    <img src={circulo3} alt="" />
                </div>
                <div className="circuloGris">
                    <img src={circulo4} alt="" />
                </div>
                
            </div>
            
            <Link to="/Goals">
            <div className="cajaIngresar">
                <button className="ingresar"> Ingresar </button>
            </div>
            </Link>
        </div>
    )
}

export default Homecontainer

