import React, {Component} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SubirDocumento from '../Components/SubirDocumento';
import GestionarDocumento from '../Components/GestionarDocumento';
import BACKGROUND from '../Assets/fondoUtem.png';
import '../Styles/Gestion.css';

class Gestion extends Component {
    constructor() {
        super();
        this.state = { checked: true };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }


    
    render() {   
        return (
            <div class="bg-repeat" style={{ backgroundImage: `url(${BACKGROUND})`}}>
                <Navbar />
                
                <div className='pt-12'>
                    <div className='contenedorGestion'>
                        <button className='botonGestion' onClick={() => this.handleChange(true)}>Subir Documento</button>
                        <button className='botonGestion' onClick={() => this.handleChange(false)}>Gestionar Documento</button>
                    </div>
                </div>

                <div className='pt-8'>
                {this.state.checked ?
                    ( <SubirDocumento /> ) 
                            : 
                    ( <GestionarDocumento /> )
                }
                </div>

                <Footer />
            </div>
        )
    }
}


export default Gestion;