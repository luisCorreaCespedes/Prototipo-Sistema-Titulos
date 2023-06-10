import React from 'react';
import {useDropzone} from 'react-dropzone';
import NUBE from '../Assets/cloud-upload.png';
import '../Styles/SubirDocumento.css';

function SubirDocumento(props) {
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
  
  return (
    <div className='contenedorSubirDocumento'>

        <div className='tamanoContenedorSubirDocumento'>
            <p className='textoDescripcion'>Ingresa los datos correspondientes para cargar un documento a la plataforma.</p>

            <form class='estiloFormularioSubirDocumento'>
                <div class='mb-4'>
                    <label className='textoCampo' for='title'>
                            Título del Documento
                    </label>
                    <input className='estiloInputCampo' id='title' type='text' required placeholder='Ingresa nombre del Documento...' />
                </div>
                <div class='mb-4 md:flex md:flex-row'>
                    <div className='md:w-1/2 md:pr-4 mb-4 sm:mb-0'>
                        <label className='textoCampo' for='student'>
                            Estudiante
                        </label>
                        <input className='estiloInputCampo' id='student' type='text' required placeholder='Ingresa nombre del Estudiante...' />
                    </div>
                    <div class='md:w-1/2'>
                        <label className='textoCampo' for='teacher'>
                            Profesor Guía
                        </label>
                        <input className='estiloInputCampo' id='teacher' type='text' required placeholder='Ingresa nombre del Profesor Guía...' />
                    </div>
                </div>
                <div class='flex mb-4'>
                    <div className='w-1/4'>
                        <label className='textoCampo' for='year'>
                            Año
                        </label>
                        <input className='estiloInputCampo' id='year' type='number' required placeholder='Ingresa año...' min={1950} max={2050}/>
                    </div>
                    <div className='w-1/4 pl-4'>
                        <label className='textoCampo' for='carrer'>
                            Carrera
                        </label>
                        <div>
                            <select className='estiloSelectorCampo' id='carrer'>
                                <option disabled selected>---</option>
                                <option>21041</option>
                                <option>21030</option>
                            </select> 
                        </div>
                    </div>
                    <div className='w-2/4 pl-4'>
                        <label className='textoCampo' for='mode'>
                            Modalidad
                        </label>
                        <div>
                            <select className='estiloSelectorCampo' id='carrer'>
                            <option disabled selected>---</option>
                            <option>Desarrollo Software</option>
                            <option>Investigación Aplicada</option>
                            <option>Proyecto Empresa</option>
                            <option>Proyecto I+D</option>
                            </select> 
                        </div>
                    </div>
                </div>
                <section className='contenedorDragDrop'>
                    <div {...getRootProps({ className: 'dragDrop' })}>
                        <input {...getInputProps()} />
                        <img src={NUBE} alt='Cloud' className='w-12 pt-2 pb-2'/>
                        <p>Arrastra y suelta un archivo aquí, o haz clic para seleccionar un archivo</p>
                        <aside className='pt-4 italic text-red-900 font-bold'>
                            <h4>{acceptedFileItems}</h4>
                        </aside>
                    </div>
                </section>
                <div class='botonesAlmacenar'>
                    <button class='w-full text-sm block bg-green-700 hover:bg-green-500 focus:bg-green-900 text-white font-montserrat font-normal rounded-md px-4 py-2 mt-2" type="button'>
                        Almacenar Documento
                    </button>
                </div>

            </form>

        </div>

    </div>
  );
}

export default SubirDocumento;