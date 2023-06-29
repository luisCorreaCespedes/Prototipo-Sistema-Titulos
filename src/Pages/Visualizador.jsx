import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PDF from '../Assets/Prueba.pdf';

function Visualizador() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    return (
        <div>
            <Navbar />
                <h1 className='pt-20'>Aquí va la Visualización</h1>
                <div>
                    <Document file={PDF} loading={'Cargando PDF...'} error={'Cargando PDF...'} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} width={200} renderAnnotationLayer={false} renderTextLayer={false} loading={'Cargando Portada'}/>
                    </Document>
                            <p>
                    Page {pageNumber} of {numPages}
                </p>
                </div>
            <Footer />
        </div>
    )
}

export default Visualizador;