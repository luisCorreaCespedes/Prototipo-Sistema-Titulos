import React from 'react';
import '../Styles/Home.css';

function Buscador() {
    return (
        <div>
            <div className='pt-20'>
                <p className='textoExplicacion'>Ingresa una palabra o frase para comenzar a buscar.</p>
                <p className='textoExplicacion'>Puedes aplicar filtros de búsqueda para encontrar un documento en particular.</p>
            </div>


            <form className='flex justify-center pt-4 pb-4'>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black">Search</label>
                <div class="xl:w-[50%] w-[90%] lg:w-[50%] md:w-[70%]">
                    
                    <div className='flex flex-row'>
                        <input type="search" id="default-search" class="font-montserrat block w-full p-2 pl-4 text-sm font-normal text-gray-800 bg-white bg-clip-padding border 
                            border-solid border-1 border-gray-500 rounded-l-lg transition ease-in-out m-0 focus:text-gray-800 focus:bg-white focus:border-gray-800 focus:outline-none" 
                            placeholder="Ingrese términos de búsqueda..." />
                        <button type="submit" class="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none 
                        font-medium rounded-r-md text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 ">Buscar</button>
                    </div>
                </div>
            </form>

            <div className='flex flex-row justify-center pb-10'>
                <select id="year" class="xl:w-40 lg:w-40 md:w-40 sm:w-40 p-1 ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value='all' selected>Por Año</option>
                    <option value="">2010</option>
                    <option value="">2015</option>
                    <option value="">2018</option>
                    <option value="">2022</option>
                </select>
                <select id="study" class="xl:w-40 lg:w-40 md:w-40 sm:w-40 p-1 mx-1 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value='all' selected>Por Carrera</option>
                    <option value="">21041</option>
                </select>
                <select id="mode" class="xl:w-40 lg:w-40 md:w-40 sm:w-40 p-1 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value='all' selected>Por Modalidad</option>
                    <option value="">Desarrollo Software</option>
                </select>   
            </div>

            <div className='flex justify-center'>
                <container className='pb-4 flex-col'>
                    <h3 className='text-lg font-normal font-montserrat'>
                        Todos los Documentos
                    </h3>
                    <hr className='border-gray-400 border-1' />
                </container>
            </div>

        </div>
    )
}

export default Buscador;