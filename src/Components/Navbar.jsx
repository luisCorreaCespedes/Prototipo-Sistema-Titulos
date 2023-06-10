import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LOGO_UNIVERSIDAD from '../Assets/logoUtem.png';
import FOTO_PERFIL from '../Assets/perfil.jpg';
import { FaHome, FaChartBar, FaCog, FaPowerOff } from 'react-icons/fa';
import '../Styles/Navbar.css';

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
        <div className='estiloNavbar'>

            <div className='contenedorNavbar'>

                <div className='contenedorLogo'>
                    <img src={LOGO_UNIVERSIDAD} className='imagen' alt='Logo Universidad' />
                    <span className='tituloTexto'>Biblioteca Virtual</span>
                </div>
        
                <nav className='navbarFull'>
                    <FaHome />
                    <button onClick={(e) => inicio()} className='botonEstilo'>Inicio</button>
                    <FaChartBar />
                    <button onClick={(e) => estadisticas()} className='botonEstilo'>Estadísticas</button>
                    <FaCog />
                    <button onClick={(e) => gestion()} className='botonEstilo'>Gestión</button>
                    <div className='contenedorPerfilSesion'>
                        <img src={FOTO_PERFIL} className='imagenPerfil' alt='Foto Perfil'/>
                        <button button onClick={(e) => salir()}>
                        <p className='botonCerrarSesion'>Cerrar Sesión</p>
                        </button>
                        <FaPowerOff className="text-sm justify-center" />
                    </div>
                </nav>

                <button className='botonExpandir' onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='estiloBotonExpandir' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </button>
            </div>

            { isOpen &&
                <div className='navbarComprimido'>
                    <button onClick={(e) => inicio()} className='estiloBotonComprimido'>
                        <div className='inline-flex items-center'>
                            <p><FaHome /></p>
                            <p className='pl-2'>Inicio</p>
                        </div>
                    </button>
                    <button onClick={(e) => estadisticas()} className='estiloBotonComprimido'>
                        <div className='inline-flex items-center'>
                            <p><FaChartBar /></p>
                            <p className='pl-2'>Estadísticas</p>
                        </div>
                    </button>
                    <button onClick={(e) => gestion()} className='estiloBotonComprimido'>
                        <div className='inline-flex items-center'>
                            <p><FaCog /></p>
                            <p className='pl-2'>Gestión</p>
                        </div>
                    </button>
                    <button onClick={(e) => salir()} className='estiloBotonComprimido'>
                        <div className='inline-flex items-center'>
                            <p><FaPowerOff /></p>
                            <p className='pl-2'>Cerrar Sesión</p>
                        </div>
                    </button>
                </div>
            }
      
        </div>
    )
}


export default Navbar;
