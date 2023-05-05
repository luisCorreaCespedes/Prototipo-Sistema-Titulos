import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG_UNIVERSIDAD from '../Assets/bg.png';
import LOGO_UNIVERSIDAD from '../Assets/logoUtem.png';

function LogIn() {

const navigate = useNavigate();
    function handleClick() {
        navigate('inicio');
    }

    return (

        <div className='w-full h-screen flex items-start'>
            
            <div className='relative w-3/5 h-full flex flex-col'>
                <img src={BG_UNIVERSIDAD} alt='Background Universidad' className='w-full h-full object-cover' />
            </div>

            <div className='w-2/5 h-full bg-[#F5F5F5] items-start flex flex-col pl-20 pr-20 pt-20 pb-10'>

                <div className='flex flex-row'>
                    <h1 className='text-left text-[60px] leading-normal text-[#060606] font-italic pl-12 pr-2 pt-4'>Biblioteca Virtual de Trabajos de Titulación</h1>
                    <img src={LOGO_UNIVERSIDAD} alt='Logo Universidad' className='h-full w-min scale-75 object-cover' />
                </div>
                
                <div className='w-full h-4/5 flex flex-col'>

                    <div className='w-full flex flex-col items-start justify-center relative pl-12 py-2'>
                        <div className='w-full h-[1px] bg-[#A1A1A1]'></div>
                        <h3 className='text-[28px] text-base text-[#717171] mb-2 pt-6'>Documentos de Trabajo de Titulación</h3>
                        <h3 className='text-[28px] text-base text-[#717171] mb-2 pt-2 pb-10'>de la Escuela de Informática</h3>
                    </div>

                    <div className='items-start w-full flex flex-col pl-12 pt-16 pb-20'>
                        <h3 className='text-[44px] text-base mb-2'>Acceso al Sistema</h3>
                    </div>

                    <div className='items-start w-full flex flex-col pl-12 pb-10'>
                        <h3 className='text-[32px] text-base text-[#717171] mb-2 pb-2'>Correo Institucional</h3>
                        <input
                            type='email'
                            placeholder='Ingrese correo'
                            className='w-full text-black text-[28px] py-4 my-2 bg-transparent rounded-md border border-black pl-6 focus:bg-[#F5F5F5]'
                        />
                    </div>

                    <div className='items-start w-full flex flex-col pl-12 pb-10'>
                        <h3 className='text-[32px] text-base text-[#717171] mb-2 pb-2'>Contraseña</h3>
                        <input
                            type='password'
                            placeholder='Ingrese contraseña'
                            className='w-full text-black text-[28px] py-4 my-2 bg-transparent rounded-md border border-black pl-6'
                        /> 
                    </div>

                    <div className='w-full flex flex-col pl-12 pt-8 items-center'>
                        <button onClick={(e) => handleClick()} className='w-1/3 text-white text-[28px] my-2 bg-black rounded-md p-4 text-center flex items-center justify-center'>
                            Ingresar
                        </button>
                    </div>

                </div>

                <div className='w-full h-1/5 flex flex-col items-center justify-end'>
                    <div className='w-full flex items-center justify-center relative pl-12 py-4'>
                        <div className='w-full h-[1px] bg-[#A1A1A1]'></div>
                    </div>
                    <p className='text-[20px] font-normal text-[#717171]'>Plataforma desarrollada por XXXXXX</p>
                    <p className='text-[20px] font-normal text-[#717171]'>2023 © UTEM - Todos los Derechos Reservados</p>
                </div>

            </div>

        </div>

    )
}

export default LogIn;