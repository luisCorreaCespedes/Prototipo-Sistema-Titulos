import React from 'react';
import BuscadorModificador from './BuscadorModificador';
import DocumentoModificador from './DocumentoModificador';
import '../Styles/Home.css';


function GestionarDocumento() {
    return (
            <div>
                <BuscadorModificador />
                <div className='contenedorDocumentos'>
                    <div className='gridDocumentos'>
                        <DocumentoModificador />
                        <DocumentoModificador />
                        <DocumentoModificador />
                        <DocumentoModificador />
                    </div>
                </div>
            </div>
    )
}

export default GestionarDocumento;