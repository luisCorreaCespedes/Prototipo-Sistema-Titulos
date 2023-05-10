import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import LOGO_UNIVERSIDAD from '../Assets/logoUtem.png';
import FOTO_PERFIL from '../Assets/perfil.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

    function inicio() {
      navigate('/inicio');
    }

    function estadisticas() {
      navigate('/estadisticas');
    }

    function gestion() {
      navigate('/gestion');
    }

    function salir() {
        navigate('/');
    }

  return (
    <header className='w-full bg-gray-100 text-black body-font mb-4 shadow-sm border-b-2 border-solid border-gray-200'>

      <div className='container mx-auto flex justify-between items-center px-2'>

        <div className='flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0'>
          <img src={LOGO_UNIVERSIDAD} className='w-14 h-full text-white p-2 " alt="Logo Universidad' />
          <span className='pl-1 text-2xl text-black font-normal antialiased'>Biblioteca Virtual</span>
        </div>
      
        <nav className='hidden md:ml-auto md:flex flex-wrap items-center justify-center text-lg font-semibold tracking-wide'>
          <button onClick={(e) => inicio()} className='mr-6 hover:underline decoration-[#475875]'>Inicio</button>
          <button onClick={(e) => estadisticas()} className='mr-6 hover:underline decoration-[#475875]'>Estadísticas</button>
          <button onClick={(e) => gestion()} className='mr-6 hover:underline decoration-[#475875]'>Gestión</button>
          <div className='hidden sm:inline-flex ml-auto md4:ml-0 mr-4 md:mr-0 cursor-pointer items-center'>
            <img src={FOTO_PERFIL} className='h-10 w-10 rounded-3xl' />
            <p className='pl-2 text-xs font-bold'>Cerrar Sesión</p>
          </div>
        </nav>

        <button className='md:hidden rounded-md active:outline-none focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 rounded-md text-black hover:text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>

      { isOpen &&
        <div className='w-full flex flex-col md:hidden bg-[#475875] text-base text-center font-normal'>
          <button onClick={(e) => inicio()} className='block px-3 border-b-2 border-solid border-gray-300 py-2 text-white hover:bg-gray-700'>Inicio</button>
          <button onClick={(e) => estadisticas()} className='block px-3 border-b-2 border-solid border-gray-300 py-2 text-white hover:bg-gray-700'>Estadísticas</button>
          <button onClick={(e) => gestion()} className='block px-3 border-b-2 border-solid border-gray-300 py-2 text-white hover:bg-gray-700'>Gestión</button>
          <button onClick={(e) => salir()} className='block px-3 border-b-2 border-solid border-gray-300 py-2 text-white hover:bg-gray-700'>Cerrar Sesión</button>
        </div>
      }
      
    </header>
  )
}

export default Navbar;
