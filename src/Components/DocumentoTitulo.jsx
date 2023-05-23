import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import PDF from '../Assets/Prueba.pdf';

function DocumentoTitulo() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <a href='/' className="card flex flex-row border-l-8 border-l-slate-700 bg-gray-100 border border-gray-400 rounded-lg shadow hover:bg-slate-200">
            <div className="flex border border-r-gray-400 border-r-2">
                <Document file={PDF}>
                    <Page pageNumber={1} width={160} renderAnnotationLayer={false} renderTextLayer={false}/>
                </Document>
            </div>
            <div className="flex flex-col px-4 py-2 items-start">
                <h2 className="font-montserrat text-start text-xs sm:text-sm xl:text-base font-semibold text-black pb-4 subpixel-antialiased">Prototipo de Sistema Trabajos de Titulación de la Escuela de Informática</h2>
                <h2 class="font-montserrat flex mb-2 text-start text-xs xl:text-sm font-base tracking-tight text-black">ESTUDIANTE: <p className='pl-2 italic'>Luis Correa</p> </h2>
                <h2 class="font-montserrat flex mb-2 text-start text-xs xl:text-sm font-base tracking-tight text-black">PROFESOR GUÍA: <p className='pl-2 italic'>Victor Escobar</p> </h2>
                <h2 class="font-montserrat flex mb-2 text-start text-xs xl:text-sm font-base tracking-tight text-black">AÑO: <p className='pl-2 italic'>2023</p> </h2>
                <h2 class="font-montserrat flex mb-2 text-start text-xs xl:text-sm font-base tracking-tight text-black">CARRERA: <p className='pl-2 italic'>Ing. Civil en  Computación mención Informática</p> </h2>
                <h2 class="font-montserrat flex mb-2 text-start text-xs xl:text-sm font-base tracking-tight text-black">MODALIDAD: <p className='pl-2 italic'>Desarrollo Software</p> </h2>
            </div>
        </a>
    )
}

export default DocumentoTitulo;