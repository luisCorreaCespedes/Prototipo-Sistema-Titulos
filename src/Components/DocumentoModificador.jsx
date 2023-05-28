import React from 'react';
import '../Styles/DocumentoTitulo.css';

function DocumentoModificador() {
    return (
        <div className="estiloCarta">
            <div className="estiloInformacion">
                <h2 className="textoTitulo">Prototipo de Sistema Trabajos de Titulación de la Escuela de Informática</h2>
                <h2 class="textoInfo">ESTUDIANTE: <p className='pl-2 italic'>Luis Correa</p> </h2>
                <h2 class="textoInfo">PROFESOR GUÍA: <p className='pl-2 italic'>Victor Escobar</p> </h2>
                <h2 class="textoInfo">AÑO: <p className='pl-2 italic'>2023</p> </h2>
                <h2 class="textoInfo">CARRERA: <p className='pl-2 italic'>Ing. Civil en Computación mención Informática</p> </h2>
                <h2 class="textoInfo">MODALIDAD: <p className='pl-2 italic'>Desarrollo Software</p> </h2>
                <div className='pt-4'>
                    <button className='bg-[#3A4860] hover:bg-[#647AA0] text-white font-montserrat text-sm font-normal rounded-md px-2 py-2 mt-2'>Modificar</button>
                    <button className='ml-4 bg-red-600 hover:bg-red-400 text-white font-montserrat text-sm font-normal rounded-md px-2 py-2 mt-2'>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default DocumentoModificador;