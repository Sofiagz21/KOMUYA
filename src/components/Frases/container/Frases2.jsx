import React, { Component } from 'react'
import {Link} from "react-router-dom"
import '../stylesFrases.css'

class Frases2 extends Component{
    constructor() {
        super ();
        this.state ={ 
            frase:''
        };
    }

    myArray=[ ' De todas las cosas que llevas puestas, tu actitud es la más importante - anónimo.', 'Lo único imposible es aquello que no intentas - Anónimo..', 'Atrae lo que esperas, proyecta lo que deseas, conviértete en lo que respetas y refleja lo que admiras. - Anónimo', 'La vida es un reto; vívela, siente, ama, ríe, llora, juega, gana, pierde, tropieza, pero siempre levántate y sigue. Anónimo', 'Allí donde la luz no alumbre, tal vez alumbre la sombra. -Roberto Juarroz', 'Cuando subestimas lo que haces, el mundo subestima quién eres. - Oprah Winfrey', 'Confía en ti mismo... Sabes más de lo que crees. - Benjamin Spock']

    componentDidMount(){
        this.setState({frase:this.myArray[Math.floor(Math.random()*this.myArray.length)] });
    }
    
    render(){
        return (
            <div>
                <div className="contenedor">
                        <div className="cardFrase">
                            <div className="boxTitle">
                                <h1 className="titleFrase">Frase del día.  <i class="fa fa-star" aria-hidden="true"></i></h1>
                            </div>
                            <div className="boxText">
                                <h3>
                                    {this.state.frase}
                                </h3>
                            </div>
                            <Link to="/Goals">
                            <div className="back">
                                <i class="fa fa-caret-left" aria-hidden="true"></i>
                            </div>
                            </Link>
                            <Link to="/Two">
                            <div className="continue">
                                <button className="ok">OK</button>
                            </div>
                            </Link>
                        </div>
                    </div>
            </div>
        );
    }
}


export default Frases2;
