import React from 'react';
import { useNavigate } from 'react-router-dom';

function InicioSesion() {

    const navigate = useNavigate();

    function handleClick() {
        navigate('principal');
    }

    return (
        <div>
            <button onClick={(e) => handleClick()}>
                Clic aquí
            </button>
        </div>
    )
}

export default InicioSesion;