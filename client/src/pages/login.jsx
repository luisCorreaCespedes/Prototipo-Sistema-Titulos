// Declaración de importaciones
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BG_UNIVERSIDAD from '../assets/bg.png';
import LOGO_UNIVERSIDAD from '../assets/logoUtem.png';
import '../styles/login.css';
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

// Función principal LOGIN
function Login() {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signin, errors: signinErrors, isAuthenticated} = useAuth();

    const onSubmit = handleSubmit(data => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) navigate("/inicio");
    }, [isAuthenticated]);

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
            
                    <form className='contenedorFormulario' onSubmit={onSubmit}>
                        <div className='mt-4'>
                            <label className='labelCampoFormulario'>Correo Institucional</label>
                            <input className='inputCampoFormulario' type='email' name='' id='email' placeholder='Ingrese su correo' required {...register("email", {required: true})} autoComplete='on'/>
                        </div>
                        <div className='mt-4'>
                            <label className='labelCampoFormulario'>Contraseña</label>
                            <input className='inputCampoFormulario' type='password' name='' id='pass' placeholder='Ingrese contraseña' minLength='6' required {...register("password", {required: true})} />
                        </div>

                        {
                            signinErrors.map((error, i) => (
                                <div className='rounded-lg bg-red-500 mt-4 p-2 text-white text-center' key={i}>
                                    {error}
                                </div>
                            ))
                        }
                
                        <div className='contenedorBoton'>
                            <button type='submit' className='block bg-[#2A3547] hover:bg-[#475875] focus:bg-[#475875] text-white font-montserrat font-normal rounded-md px-6 py-2 mt-10'>Ingresar</button>
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

export default Login;