import React from 'react';
import Navbar from '../Components/Navbar';
import BuscadorPrincipal from '../Components/BuscadorPrincipal';
import DocumentoTitulo from '../Components/DocumentoTitulo';
import BACKGROUND from '../Assets/fondoUtem.png';
import Footer from '../Components/Footer';
import '../Styles/Home.css';

function Home() {
    
    return (
        <div className='bg-repeat' style={{ backgroundImage: `url(${BACKGROUND})`}}>

            <Navbar />
            <BuscadorPrincipal />

            <div className='contenedorDocumentos'>
                <div className='gridDocumentos'>
                    <DocumentoTitulo /> 
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home;