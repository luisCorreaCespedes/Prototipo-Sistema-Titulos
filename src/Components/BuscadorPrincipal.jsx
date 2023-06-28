import React from 'react';
import '../Styles/Home.css';
import '../Styles/Buscador.css';

function BuscadorPrincipal() {
    return (
        <div>
            <div className='pt-24'>
                <p className='textoExplicacion'>Ingresa una palabra o frase para comenzar a buscar.</p>
                <p className='textoExplicacion'>Puedes aplicar filtros de búsqueda para encontrar un documento en particular.</p>
            </div>

            <form className='formularioGeneral'>   
                <label className='labelBuscador' for='default-search'>Buscar</label>
                <div className='contenedorBuscador'>
                    <div className='flex flex-row'>
                        <input className='font-montserrat block w-full p-2 pl-4 text-sm font-normal text-gray-800 bg-white bg-clip-padding border
                            border-solid border-gray-500 rounded-l-lg transition ease-in-out m-0 focus:text-gray-800 focus:bg-white focus:border-gray-800 focus:outline-none' 
                            placeholder='Ingrese términos de búsqueda...' type='search' id='default-search' />
                        <button class="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none font-medium rounded-r-md text-sm px-4 py-2" type="submit">Buscar</button>
                    </div>
                </div>
            </form>

            <div className='contenedorFiltros'>
                <select className='ml-3 estilosFiltros' id='year'>
                    <option value='all' selected>Por Año</option>
                    <option value=''>2010</option>
                </select>
                <select className='mx-1 estilosFiltros' id='study' >
                    <option value='all' selected>Por Carrera</option>
                    <option value=''>21041</option>
                </select>
                <select className='mr-3 estilosFiltros' id='mode'>
                    <option value='all' selected>Por Modalidad</option>
                    <option value="">Desarrollo Software</option>
                </select>   
            </div>

            <div className='contenedorResultados'>
                <container className='estilosResultados'>
                    <h3 className='estiloTexto'>
                        Todos los Documentos
                    </h3>
                    <hr className='separadorResultados' />
                </container>
            </div>

        </div>
    )
}

export default BuscadorPrincipal;