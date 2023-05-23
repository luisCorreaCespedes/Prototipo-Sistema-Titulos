import React from 'react';
import Navbar from '../Components/Navbar';
import Buscador from '../Components/Buscador';
import DocumentoTitulo from '../Components/DocumentoTitulo';
import Footer from '../Components/Footer';
import '../Styles/Home.css';

function Home() {
    
    return (
        <div>

            <Navbar />
            <Buscador />

            <div className='contenedorDocumentos'>
                <div className='gridDocumentos'>
                    <DocumentoTitulo />
                    <DocumentoTitulo />
                    <DocumentoTitulo />
                    <DocumentoTitulo />
                    <DocumentoTitulo />
                   
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Home;