import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LOGO_UNIVERSIDAD from '../assets/logoUtem.png';
import Navbar from "../components/navbar";
import Footer from '../components/footer';

function Configuracion() {

    const navigate = useNavigate();
    const { user, allUser , getUsers } = useAuth();

    function inicio() {
        navigate('/inicio');
    }

    useEffect(() => {
        getUsers();
        console.log(user)
    }, []);

    return (
        <div>
            <Navbar />
            <div className='items-center justify-center pt-24 pb-16 mx-8'>
                <div className="flex flex-row justify-between">
                    <div className='pb-6 flex-col'>
                        <h3 className='text-lg font-montserrat leading-tight font-semibold'>Lista de Usuarios</h3>
                        <hr className='border-gray-400 border leading-tight w-full' />
                    </div>
                    <div>
                    <button className="bg-[#2A3547] hover:bg-[#475875] text-white text-sm px-4 py-1 rounded-md">
                                Añadir Usuario
                    </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {allUser.filter(users => user.email !== users.email).map(users => (
                       <div key={users._id} className="border rounded-lg border-gray-400 bg-white p-3 flex flex-col">
                            <div className="flex-grow">
                            <h2 className="text-base font-bold mb-2 flex flex-row">Usuario: <p className="font-medium pl-2">{users.username}</p></h2>
                            <h2 className="text-sm font-medium mb-2 italic flex flex-row">Email: <p className="font-medium pl-2">{users.email}</p></h2>
                            <h2 className="text-sm font-medium mb-2 italic flex flex-row">Rol: <p className="font-medium pl-2">{users.usertype}</p></h2>
                            </div>
                            <div className="self-end justify-end">
                                <button className="bg-red-500 hover:bg-red-400 text-white text-sm px-4 py-1 rounded-md" onClick={() => handleDelete(users._id)}>
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Configuracion;