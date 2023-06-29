import React from 'react';
import { pdfjs } from 'react-pdf';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function Visualizador() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
    return (
        <div>
            <Navbar />
                <h1 className='pt-20'>Aquí va la Visualización</h1>
                
            <Footer />
        </div>
    )
}

export default Visualizador;