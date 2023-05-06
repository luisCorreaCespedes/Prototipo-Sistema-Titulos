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

        <div className='pantallaCompleta'>
            
            <div className='espacioBackground'>
                <img src={BG_UNIVERSIDAD} alt='Background Universidad' className='w-full h-full object-cover' />
            </div>

            <div className='espacioLogin'>

                <div className='flex flex-row'>
                    <h1 className='tituloPlataforma'>Biblioteca Virtual de Trabajos de Titulación</h1>
                    <img src={LOGO_UNIVERSIDAD} alt='Logo Universidad' className='h-full w-[15%] object-cover' />
                </div>
                
                <div className='w-full h-4/5 flex flex-col'>

                    <div className='contenedorDescripcion'>
                        <div className='separadorLinea'></div>
                        <h3 className='descripcion'>Documentos de Trabajo de Titulación de la Escuela de Informática</h3>
                    </div>

                    <div className='seccionAcceso'>
                        <h3 className='text-[22px] mb-2'>Acceso al Sistema</h3>
                    </div>

                    <div className='labelFormulario'>
                        <h3 className='textoFormulario'>Correo Institucional</h3>
                        <input
                            type='email'
                            placeholder='Ingrese correo'
                            className='disenoFormulario'
                        />
                    </div>

                    <div className='labelFormulario'>
                        <h3 className='textoFormulario'>Contraseña</h3>
                        <input
                            type='password'
                            placeholder='Ingrese contraseña'
                            className='disenoFormulario'
                        /> 
                    </div>

                    <div className='contenedorBoton'>
                        <button onClick={(e) => handleClick()} className='boton'>
                            Ingresar
                        </button>
                    </div>

                    <div className='contenedorAlerta'>
                        <div class='disenoAlerta' role="alert">
                            <p>Usuario o contraseña incorrectos, favor intente nuevamente.</p>
                        </div>
                    </div>

                </div>

                <div className='contenedorFooter'>
                    <div className='contenedorSeparador'>
                        <div className='separadorLinea'></div>
                    </div>
                    <p className='textoFooter'>Plataforma desarrollada por XXXXXX</p>
                    <p className='textoFooter'>2023 © UTEM - Todos los Derechos Reservados</p>
                </div>

            </div>

        </div>

    )
}

export default LogIn;