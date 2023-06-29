import { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import NUBE from '../Assets/cloud-upload.png';
import ALERTA from '../Assets/alert.png';
import '../Styles/DocumentoTitulo.css';
import '../Styles/SubirDocumento.css';
import '../Styles/Modales.css';

function DocumentoModificador() {
    const {
        acceptedFiles,
        getRootProps,
        getInputProps
    } = useDropzone({    
        maxFiles: 1,
        accept: {
            'document/pdf': ['.pdf']
        }
    });
    
    const acceptedFileItems = acceptedFiles.map(file => (
        <p key={file.path}>{file.path}</p>
    ));

    const [showModificar, setModificar] = useState(false);
    const [showAlerta, setAlerta] = useState(false);
    
    return (
        <div className='estiloCarta'>
            <div className='estiloInformacion'>
                <h2 className='textoTitulo'>Prototipo de Sistema Trabajos de Titulación de la Escuela de Informática</h2>
                <h2 className='textoInfo'>ESTUDIANTE: <p className='pl-2 italic'>Luis Correa</p> </h2>
                <h2 className='textoInfo'>PROFESOR GUÍA: <p className='pl-2 italic'>Victor Escobar</p> </h2>
                <h2 className='textoInfo'>AÑO: <p className='pl-2 italic'>2023</p> </h2>
                <h2 className='textoInfo'>CARRERA: <p className='pl-2 italic'>Ing. Civil en Computación mención Informática</p> </h2>
                <h2 className='textoInfo'>MODALIDAD: <p className='pl-2 italic'>Desarrollo Software</p> </h2>
                <div className='pt-4'>
                    <button onClick={() => setModificar(true)} className='bg-[#3A4860] hover:bg-[#647AA0] text-white font-montserrat text-sm font-normal rounded-md px-2 py-2 mt-2'>Modificar</button>
                    <button onClick={() => setAlerta(true)} className='ml-4 bg-red-600 hover:bg-red-400 text-white font-montserrat text-sm font-normal rounded-md px-2 py-2 mt-2'>Eliminar</button>
                </div>
            </div>

            {/*MODAL MODIFICAR DOCUMENTO*/}
            {showModificar ? (
                <>
                <div className='contenedorModificar'>
                    <div className='tamanoContenedorModificar'>
                        <div className='bordeContenedorModificar'>

                            <div className='cabeceraModificar'>
                                <h3 className='textoCabeceraModificar'>
                                    Modificar Documento
                                </h3>
                                <button
                                    className='ml-auto bg-transparent border-0 text-black float-right text-sm leading-none font-semibold outline-none focus:outline-none'
                                    onClick={() => setModificar(false)}>
                                    <span className='text-black h-6 w-6 text-sm block outline-none focus:outline-none'>x</span>
                                </button>
                            </div>
                            
                            <div className='formularioModificar'>
                                <form className='px-4 mb-4'>
                                    <div className='mb-4'>
                                        <label className='labelFormularioModificar' for='title'>
                                                Título del Documento
                                        </label>
                                        <input className='inputFormularioModificador' id='title' type='text' required placeholder='Ingresa nombre del Documento...' />
                                    </div>

                                    <div className='mb-4 md:flex md:flex-row'>
                                        <div className='md:w-1/2 md:pr-4 mb-4 sm:mb-0'>
                                            <label className='labelFormularioModificar' for='student'>
                                                Estudiante
                                            </label>
                                            <input className='inputFormularioModificador' id='student' type='text' required placeholder='Ingresa nombre del Estudiante...' />
                                        </div>
                                        <div className='md:w-1/2'>
                                            <label className='labelFormularioModificar' for='teacher'>
                                                Profesor Guía
                                            </label>
                                            <input className='inputFormularioModificador' id='teacher' type='text' required placeholder='Ingresa nombre del Profesor Guía...' />
                                        </div>
                                    </div>

                                    <div className='flex mb-4'>
                                        <div className='w-1/4'>
                                            <label className='labelFormularioModificar' for='year'>
                                                Año
                                            </label>
                                            <input className='inputFormularioModificador' id='year' type='number' required placeholder='Ingresa año...' min={1950} max={2050}/>
                                        </div>
                                        <div className='w-1/4 pl-4'>
                                            <label className='labelFormularioModificar' for='carrer'>
                                                Carrera
                                            </label>
                                            <div>
                                                <select className='selectorFormularioModificador' id='carrer'>
                                                    <option disabled selected>---</option>
                                                    <option>21041</option>
                                                    <option>21030</option>
                                                </select> 
                                            </div>
                                        </div>
                                        <div className='w-2/4 pl-4'>
                                            <label className='labelFormularioModificar' for='mode'>
                                                Modalidad
                                            </label>
                                            <div>
                                                <select className='selectorFormularioModificador' id='mode'>
                                                <option disabled selected>---</option>
                                                <option>Desarrollo Software</option>
                                                <option>Investigación Aplicada</option>
                                                <option>Proyecto Empresa</option>
                                                <option>Proyecto I+D</option>
                                                </select> 
                                            </div>
                                        </div>
                                    </div>

                                    <section className='contenedorDragDropModificador'>
                                        <div {...getRootProps({ className: 'dragDrop' })}>
                                            <input {...getInputProps()} id='docs'/>
                                            <img src={NUBE} alt='Cloud' className='w-8 pt-2 pb-2 lg:pt-4 lg:pb-4'/>
                                            <p className='text-xs lg:text-sm'>Selecciona un archivo</p>
                                            <aside className='pt-4 italic text-red-900 font-bold'>
                                                <h4 className='text-xs lg:text-sm'>{acceptedFileItems}</h4>
                                            </aside>
                                        </div>
                                    </section>

                                </form>
                            </div>

                            <div className='botonesModificar'>
                                <button
                                    className='text-red-500 background-transparent font-bold uppercase px-4 py-2 text-xs lg:text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                    type='button' onClick={() => setModificar(false)}>
                                    Cancelar
                                </button>
                                <button
                                    className='bg-[#3A4860] hover:bg-[#647AA0] text-white font-bold uppercase text-xs lg:text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                    type='button'  onClick={() => setModificar(false)}>
                                    Modificar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='posicionContenedor'></div>
                </>
            ) : null}

            {/*MODAL ELIMINAR DOCUMENTO*/}
            {showAlerta ? (
                <>
                <div className='contenedorEliminar'>
                    <div className='tamanoContenedorEliminar'>
                        <div className='bordeContenedorEliminar'>

                            <div className='cabeceraContenedorEliminar'>
                                <button
                                    className='ml-auto bg-transparent border-0 text-black float-right text-sm leading-none font-semibold outline-none focus:outline-none'
                                    onClick={() => setAlerta(false)}>
                                    <span className='text-black h-6 w-6 text-sm block outline-none focus:outline-none'>
                                    x
                                    </span>
                                </button>
                            </div>

                            <div className='cuerpoEliminar'>
                                <img src={ALERTA} alt='Alerta' className='imagenAlerta'/>
                                <h3 className='textoAlerta'>
                                        ¿Está seguro de eliminar el documento?
                                </h3> 
                                
                            </div>

                            <div className='botonesEliminar'>
                                <button
                                    className='text-black background-transparent font-bold uppercase px-4 py-2 text-xs lg:text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                    type='button' onClick={() => setAlerta(false)}>
                                    Cancelar
                                </button>
                                <button
                                    className='bg-red-500 hover:bg-red-400 text-white font-bold uppercase text-xs lg:text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                    type='button'  onClick={() => setAlerta(false)}>
                                    Eliminar
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='posicionContenedor'></div>
                </>
            ) : null}

        </div>
    )
}

export default DocumentoModificador;