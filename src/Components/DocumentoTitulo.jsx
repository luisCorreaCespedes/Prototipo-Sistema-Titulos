import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PDF from '../Assets/Prueba.pdf';
import '../Styles/DocumentoTitulo.css';

function DocumentoTitulo() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
        <a href={PDF} target='_blank' rel='noreferrer' className="estiloCarta">
            <div className='estiloPortada'>
                <Document file={PDF} loading={'Cargando PDF...'} error={'UPS! No se pudo cargar el PDF.'}>
                    <Page pageNumber={1} width={130} renderAnnotationLayer={false} renderTextLayer={false} loading={'Cargando Portada'}/>
                </Document>
            </div>
            <div className='estiloInformacion'>
                <h2 className='textoTitulo'>Prototipo de Sistema Trabajos de Titulación de la Escuela de Informática</h2>
                <h2 className='textoInfo'>ESTUDIANTE: <p className='pl-2 italic'>Luis Correa</p> </h2>
                <h2 className='textoInfo'>PROFESOR GUÍA: <p className='pl-2 italic'>Victor Escobar</p> </h2>
                <h2 className='textoInfo'>AÑO: <p className='pl-2 italic'>2023</p> </h2>
                <h2 className='textoInfo'>CARRERA: <p className='pl-2 italic'>Ing. Civil en Computación mención Informática</p> </h2>
                <h2 className='textoInfo'>MODALIDAD: <p className='pl-2 italic'>Desarrollo Software</p> </h2>
            </div>
        </a>
    )
}

export default DocumentoTitulo;