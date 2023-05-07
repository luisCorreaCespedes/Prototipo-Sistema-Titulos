import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG_UNIVERSIDAD from '../Assets/bg.png';
import LOGO_UNIVERSIDAD from '../Assets/logoUtem.png';
import '../Styles/LogIn.css';

function LogIn() {

const navigate = useNavigate();
    function handleClick() {
        navigate('inicio');
    }

    return (

        <section className='flex flex-col md:flex-row h-screen items-center'>

            <div className='bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen'>
                <img src={BG_UNIVERSIDAD} alt='' className='w-full h-full object-cover' />
            </div>
  
            <div className='bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 pt-16
                flex items-start justify-center'>
        
                <div class='w-full h-100'>

                    <div className='flex flex-row'>
                        <h1 class='pr-6 text-3xl font-normal text-start'>Biblioteca Virtual de Trabajos de Titulación</h1>
                        <img src={LOGO_UNIVERSIDAD} alt='' className='w-16 h-full object-cover' />
                    </div>
                    <hr class='my-2 border-gray-300 w-full' />
                    <h1 class='text-sm font-normal text-start text-[#616161]'>Documentos de Trabajos de Titulación de la Escuela de Informática</h1>
                    <h1 class='text-start text-l md:text-xl font-semibold leading-tight mt-12'>Acceso al Sistema</h1>
            
                    <form class='mt-6' action='#' method='POST'>
                        <div className='mt-4'>
                            <label class='text-start font-normal block text-gray-700'>Correo Institucional</label>
                            <input type='email' name='' id='' placeholder='Ingrese su correo' class='w-full px-4 py-2 rounded-md bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none' autofocus autocomplete required />
                        </div>
                
                        <div class='mt-4'>
                            <label class='text-start font-normal block text-gray-700'>Contraseña</label>
                            <input type='password' name='' id='' placeholder='Ingrese contraseña' minlength='6' class='w-full px-4 py-2 rounded-md bg-gray-200 mt-2 border focus:border-gray-500
                                focus:bg-white focus:outline-none' required />
                        </div>
                
                        <div className='flex justify-center'>
                            <button onClick={(e) => handleClick()} type='submit' class='block bg-[#2A3547] hover:bg-[#475875] focus:bg-[#475875] text-white font-normal rounded-md
                                px-8 py-2 mt-10'>Ingresar</button>
                        </div>
                    </form>

                    <div className='flex justify-center'>
                        <footer class='items-center justify-center fixed bottom-0 pt-2 pb-4'>
                            <hr class='my-2 border-gray-300 w-full' />
                            <p className='text-center text-xs font-normal text-[#818181]'>Plataforma desarrollada por XXXXXX</p>
                            <p className='text-center text-xs font-normal text-[#818181]'>2023 © UTEM - Todos los Derechos Reservados</p>
                        </footer>
                    </div>
                </div>

            </div>
  
  </section>

    )
}

export default LogIn;