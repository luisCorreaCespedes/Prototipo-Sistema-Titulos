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

    <div className='flex flex-col justify-center items-center pl-1 pr-1 '>

        <div class="w-full max-w-2xl">
        <p className='font-montserrat pb-8 font-semibold'>Ingresa los datos correspondientes para cargar un documento a la plataforma.</p>
            <form class="px-4 pb-8 mb-4">

                <div class="mb-4">
                    <label class="font-montserrat text-start block text-gray-800 text-sm font-normal" for="title">
                            Título del Documento
                    </label>
                    <input class="w-full text-sm py-2 px-3 rounded-md border-gray-400 bg-white mt-2 font-montserrat border focus:border-gray-700 focus:bg-white focus:outline-none" id="title" type="text" required placeholder="Ingresa nombre del Documento..." />
                </div>

                <div class="mb-4 md:flex md:flex-row">
                    <div className='md:w-1/2 md:pr-4 mb-4 sm:mb-0'>
                        <label class="font-montserrat text-start block text-gray-800 text-sm font-normal" for="student">
                            Estudiante
                        </label>
                        <input class="w-full text-sm py-2 px-3 rounded-md border-gray-400 bg-white mt-2 font-montserrat border focus:border-gray-700 focus:bg-white focus:outline-none" id="student" type="text" required placeholder="Ingresa nombre del Estudiante..." />
                    </div>
                    <div class="md:w-1/2">
                        <label class="font-montserrat text-start block text-gray-800 text-sm font-normal" for="teacher">
                            Profesor Guía
                        </label>
                        <input class="w-full text-sm py-2 px-3 rounded-md border-gray-400 bg-white mt-2 font-montserrat border focus:border-gray-700 focus:bg-white focus:outline-none" id="teacher" type="text" required placeholder="Ingresa nombre del Profesor Guía..." />
                    </div>
                </div>

                <div class="flex mb-4">
                    <div className='w-1/4'>
                        <label class="font-montserrat text-start block text-gray-800 text-sm font-normal" for="year">
                            Año
                        </label>
                        <input class="w-full text-sm py-2 px-3 rounded-md border-gray-400 bg-white mt-2 font-montserrat border focus:border-gray-700 focus:bg-white focus:outline-none" id="year" type="number" required placeholder="Ingresa año..." min={1950} max={2050}/>
                    </div>

                    <div className='w-1/4 pl-4'>
                        <label class="font-montserrat text-start block text-gray-800 text-sm font-normal" for="carrer">
                            Carrera
                        </label>
                        <div>
                            <select class="w-full block text-sm py-2 px-3 rounded-md border-gray-400 bg-white mt-2 font-montserrat border focus:border-gray-700 focus:bg-white focus:outline-none" id="carrer">
                                <option disabled selected>---</option>
                                <option>21041</option>
                                <option>21030</option>
                                <option>aaa</option>
                            </select> 
                        </div>
                    </div>

                    <div className='w-2/4 pl-4'>
                        <label class="font-montserrat text-start block text-gray-800 text-sm font-normal" for="mode">
                            Modalidad
                        </label>
                        <div>
                            <select class="w-full block text-sm py-2 px-3 rounded-md border-gray-400 bg-white mt-2 font-montserrat border focus:border-gray-700 focus:bg-white focus:outline-none" id="carrer">
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
                        <img src={NUBE} alt="cloud" className='w-12 pt-2 pb-2'/>
                        <p>Arrastra y suelta un archivo aquí, o haz clic para seleccionar un archivo</p>
                        <aside className='pt-4 italic text-red-900 font-bold'>
                            <h4>{acceptedFileItems}</h4>
                        </aside>
                    </div>
                </section>

                <div class="flex items-center justify-between pt-6 px-8">
                    <button class="w-full text-sm block bg-green-700 hover:bg-green-500 focus:bg-green-900 text-white font-montserrat font-normal rounded-md px-4 py-2 mt-2" type="button">
                        Almacenar Documento
                    </button>
                </div>

            </form>
        </div>

        
    </div>
  );
}

export default SubirDocumento;