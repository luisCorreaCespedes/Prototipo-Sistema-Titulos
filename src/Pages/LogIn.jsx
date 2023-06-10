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

        <section className='contenedorPantalla'>

            <div className='contenedorBackground'>
                <img src={BG_UNIVERSIDAD} alt='Logo Universidad' className='backgroundUtem' />
            </div>
  
            <div className='contenedorLogin'>
        
                <div className='w-full h-100'>

                    <div className='contenedorTitulo'>
                        <h1 className='titulo'>Biblioteca Virtual Trabajos de Titulación</h1>
                        <img className='logoUtem' src={LOGO_UNIVERSIDAD} alt='' />
                    </div>

                    <hr className='separador' />
                    <h1 className='textoDescriptivo'>Documentos de Trabajos de Titulación de la Escuela de Informática</h1>

                    <h1 className='textoEnfasis'>Acceso al Sistema</h1>
            
                    <form className='contenedorFormulario'>
                        <div className='mt-4'>
                            <label className='labelCampoFormulario'>Correo Institucional</label>
                            <input className='inputCampoFormulario' type='email' name='' id='' placeholder='Ingrese su correo' autocomplete required />
                        </div>
                
                        <div className='mt-4'>
                            <label className='labelCampoFormulario'>Contraseña</label>
                            <input className='inputCampoFormulario' type='password' name='' id='' placeholder='Ingrese contraseña' minlength='6' required />
                        </div>
                
                        <div className='contenedorBoton'>
                            <button onClick={(e) => handleClick()} type='submit' className='block bg-[#2A3547] hover:bg-[#475875] focus:bg-[#475875] text-white font-montserrat font-normal rounded-md px-6 py-1 mt-10'>Ingresar</button>
                        </div>

                    </form>

                    <div className='contenedorFooter'>
                        <footer className='estiloFooter'>
                            <hr className='separador' />
                            <p className='textoFooter'>Plataforma desarrollada por XXXXXX</p>
                            <p className='textoFooter'>2023 © UTEM - Todos los Derechos Reservados</p>
                        </footer>
                    </div>
                </div>

            </div>
  
        </section>

    )
}

export default LogIn;