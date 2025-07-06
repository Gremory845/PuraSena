import React from 'react';
import {  Link } from 'react-router-dom';

const History: React.FC = () => {

    return(
        <div className="bg-catskill-white-100 min-h-screen">
           <div className="relative w-full h-[220px] overflow-hidden rounded-b-[40px] md:rounded-b-[60px] mb-6">
                {/* Fondo con control total sobre el patrón */}
                <img
                    src="/bg-blanco.png"
                    alt="Fondo decorativo"
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[3500px] h-[1167px] object-cover"
                />

                {/* Contenido visible encima del fondo */}
                <div className="relative z-10 flex items-end justify-center h-full">
                    <h1 className="mb-6  text-sunset-orange-500 font-bold text-2xl bg-white px-2 rounded-full">
                        Historial
                    </h1>
                </div>
            </div> 

            {/* Navbar inferior */}
            <nav className="fixed bg-white bottom-0 left-0 right-0 flex justify-center gap-20 sm:gap-20 md:gap-32 p-4 px-4 sm:px-8 md:px-36">
            <Link to="/home" className="flex flex-col h-7 w-7 items-center">
                <img src="/home.png" alt="Inicio" />
            </Link>
            <Link to="/history" className="flex flex-col h-7 w-7 items-center">
                <img src="/history.png" alt="Historial" />
            </Link>
            <Link to="/settings" className="flex flex-col h-7 w-7 items-center">
                <img src="/options.png" alt="Opciones" />
            </Link>
            </nav>
            
        </div>
    );
};

export default History