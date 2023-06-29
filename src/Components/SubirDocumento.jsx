// Declaración de importaciones
import React from 'react';
import NUBE from '../Assets/cloud-upload.png';
import ALERTA from '../Assets/alert.png';
import LOADING from '../Assets/loading.gif';
import DONE from '../Assets/done.png';
import '../Styles/SubirDocumento.css';
import '../Styles/Modales.css';
import appFirebase from '../Firebase/firebase';
import { useState, useCallback } from 'react';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, snapshotEqual } from 'firebase/firestore'
import { getStorage, getDownloadURL, uploadBytes, ref, uploadFile } from 'firebase/storage';
import {v4} from 'uuid';

// Declaración de BDD Firebase
const db = getFirestore(appFirebase);
const storage = getStorage(appFirebase);
const storageRef = ref(storage);

// Función principal SUBIRDOCUMENTO
function SubirDocumento(props) {

    // Declaración de constantes
    const valInicio = {
        title: '',
        student: '',
        teacher: '',
        year: '',
        career: '',
        mode: '',
        document: ''
    };

    const [documento, setDocumento] = useState(valInicio);
    const [fileDocument, setFileDocument] = useState(null);
    const [modalCargando, setModalCargando] = useState(false);
    const [modalExito, setModalExito] = useState(false);
    const [modalError, setModalError] = useState(false);


    const capturarInput = (e) => {
        const {name, value} = e.target;
        setDocumento({...documento, [name]:value})
    };

    const capturarDoc = (e) => {
        if (e.target.files[0] == undefined) document.getElementById('fileName').innerHTML = '';
        else {
            setFileDocument(e.target.files[0]);
            document.getElementById('fileName').innerHTML = e.target.files[0].name;
        }
    }

    const guardarDatos = async(e) => {
        e.preventDefault();
        try {
            const storageRef = ref(storage, v4());
            setFileDocument(e.target.files);
            setModalCargando(true);
            await uploadBytes(storageRef, fileDocument).then(snapshot => {
            });
            const enlace = await getDownloadURL(storageRef);
            documento.document = enlace;
            addDoc(collection(db, 'Documents'), {
                ...documento
            });
            setModalCargando(false);
            setModalExito(true);
        } catch (error) {
            console.log(error)
            setModalError(true);
            
        }
        setDocumento({...valInicio});
        document.getElementById('fileName').innerHTML = '';
    };
  
    return (
        <div className='contenedorSubirDocumento'>

            <div className='tamanoContenedorSubirDocumento'>
                <p className='textoDescripcion'>Ingresa los datos correspondientes para cargar un documento a la plataforma.</p>

                <form onSubmit={guardarDatos} class='estiloFormularioSubirDocumento'>
                    <div class='mb-4'>
                        <label className='textoCampo' for='title'>
                                Título del Documento
                        </label>
                        <input className='estiloInputCampo' onChange={capturarInput} value={documento.title} name='title' id='title' type='text' required placeholder='Ingresa nombre del Documento...' />
                    </div>
                    <div class='mb-4 md:flex md:flex-row'>
                        <div className='md:w-1/2 md:pr-4 mb-4 sm:mb-0'>
                            <label className='textoCampo' for='student'>
                                Estudiante
                            </label>
                            <input className='estiloInputCampo' onChange={capturarInput} value={documento.student} name='student' id='student' type='text' required placeholder='Ingresa nombre del Estudiante...' />
                        </div>
                        <div class='md:w-1/2'>
                            <label className='textoCampo' for='teacher'>
                                Profesor Guía
                            </label>
                            <input className='estiloInputCampo' onChange={capturarInput} value={documento.teacher} name='teacher' id='teacher' type='text' required placeholder='Ingresa nombre del Profesor Guía...' />
                        </div>
                    </div>
                    <div class='flex mb-4'>
                        <div className='w-1/4'>
                            <label className='textoCampo' for='year'>
                                Año
                            </label>
                            <input className='estiloInputCampo' onChange={capturarInput} value={documento.year} name='year' id='year' type='number' required placeholder='Ingresa año...' min={1950} max={2050}/>
                        </div>
                        <div className='w-1/4 pl-4'>
                            <label className='textoCampo' for='career'>
                                Carrera
                            </label>
                            <div>
                                <select className='estiloSelectorCampo' onChange={capturarInput} value={documento.career} name='career' id='career' required>
                                    <option value=''>---</option>
                                    <option value='Ing. Civil en Computación mención Informática'>21041</option>
                                    <option value='Ing. en Informática'>21030</option>
                                </select> 
                            </div>
                        </div>
                        <div className='w-2/4 pl-4'>
                            <label className='textoCampo' for='mode'>
                                Modalidad
                            </label>
                            <div>
                                <select className='estiloSelectorCampo' onChange={capturarInput} value={documento.mode} name='mode' id='mode' required>
                                <option value=''>---</option>
                                <option value='Desarrollo Software'>Desarrollo Software</option>
                                <option value='Investigación Aplicada'>Investigación Aplicada</option>
                                <option value='Proyecto Empresa'>Proyecto Empresa</option>
                                <option value='Proyecto I+D'>Proyecto I+D</option>
                                </select> 
                            </div>
                        </div>
                    </div>
                    <section className='contenedorDragDrop'>
                        
                        <label className='dragDrop' for='uploadDoc'>
                        <img src={NUBE} alt='Cloud' className='w-12 pt-2 pb-2'/>
                        <p>Haz clic para seleccionar un archivo</p>
                        <aside className='pt-4 italic text-red-900 font-bold'>
                            <h4 id='fileName'>
                            </h4>
                        </aside>
                        </label>
                        <input onChange={capturarDoc} type='file' name='document' id='uploadDoc' required/>

                    </section>
                    <div className='botonesAlmacenar'>
                        <button className='w-50 text-sm block bg-green-700 hover:bg-green-500 focus:bg-green-900 text-white font-montserrat font-normal rounded-md px-4 py-2 mt-2'>
                            Almacenar Documento
                        </button>
                    </div>

                </form>

            </div>


            { modalCargando ? (
                <>
                    <div className='contenedorEliminar'>
                        <div className='tamanoContenedorEliminar'>
                            <div className='bordeContenedorEliminar'>
                                <div className='cuerpoEliminar'>
                                    <img src={LOADING} alt='Cargando' className='imagenCargando mt-6'/>
                                    <h3 className='textoAlerta mb-8'> Subiendo Documento . . .  </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='posicionContenedor'></div>
                </>
            ):null}

            { modalExito ? (
                <>
                    <div className='contenedorEliminar'>
                        <div className='tamanoContenedorEliminar'>
                            <div className='bordeContenedorEliminar'>
                                <div className='cabeceraContenedorEliminar'>
                                    <button
                                        className='ml-auto bg-transparent border-0 text-black float-right text-sm leading-none font-semibold outline-none focus:outline-none'
                                        onClick={() => setModalExito(false)}>
                                        <span className='text-black h-6 w-6 text-lg block outline-none focus:outline-none'>
                                        x
                                        </span>
                                    </button>
                                </div>
                                <div className='cuerpoEliminar'>
                                    <img src={DONE} alt='Exito' className='imagenExito'/>
                                    <h3 className='textoAlerta mb-12'> Documento almacenado con Éxito! </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='posicionContenedor'></div>
                </>
            ):null}

            { modalError ? (
                <>
                    <div className='contenedorEliminar'>
                        <div className='tamanoContenedorEliminar'>
                            <div className='bordeContenedorEliminar'>
                                <div className='cabeceraContenedorEliminar'>
                                    <button
                                        className='ml-auto bg-transparent border-0 text-black float-right text-sm leading-none font-semibold outline-none focus:outline-none'
                                        onClick={() => setModalError(false)}>
                                        <span className='text-black h-6 w-6 text-lg block outline-none focus:outline-none'>
                                        x
                                        </span>
                                    </button>
                                </div>
                                <div className='cuerpoEliminar'>
                                    <img src={ALERTA} alt='Error' className='imagenError'/>
                                    <h3 className='textoAlerta mb-12'> Oh No! El documento no se ha almacenado. Intente nuevamente. </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='posicionContenedor'></div>
                </>
            ):null}

        </div>

    );
}



export default SubirDocumento;