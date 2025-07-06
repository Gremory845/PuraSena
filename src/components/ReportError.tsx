import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ReportError: React.FC = () => {
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = () => {
        console.log('Reporte de error:', mensaje);
    };

    return(
        <div className="bg-catskill-white-100 min-h-screen">
            <div className="relative w-full h-[220px] overflow-hidden rounded-b-[40px] md:rounded-b-[60px] mb-6">
                {/* Fondo con control total sobre el patrón */}
                <img
                    src="/bg-menta.png"
                    alt="Fondo decorativo"
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[3500px] h-[1167px] object-cover"
                />

                {/* Contenido visible encima del fondo */}
                <div className="relative z-10 flex items-end justify-center h-full">
                    <button className="absolute top-8 left-10" onClick={() => navigate(-1)}>
                            <img src="/8-1.png" alt="Atrás" className="w-10 h-10" />
                    </button>
                    <h1 className="mb-6 text-white font-bold text-2xl bg-half-baked-300 px-3 py-1 rounded-full">
                    Reporte de Error
                    </h1>
                </div>
            </div>

            <div className="flex flex-col gap-6 max-w-md mx-auto px-8">
                <textarea
                placeholder="Descríbenos tu problema..."
                className="w-full h-40 p-4 rounded-4xl font-medium text-lochinvar-500 bg-white"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                ></textarea>

                <button onClick={handleSubmit} className="w-full p-4  bg-sunset-orange-500 text-white text-center rounded-full mt-5 text-lg hover:bg-geraldine-400">
                Reportar
                </button>
            </div>

            {/* Navbar inferior */}
            <nav className="fixed bg-white bottom-0 left-0 right-0 flex justify-center gap-20 sm:gap-20 md:gap-32 p-4 px-4 sm:px-8 md:px-36">
                <Link to="/home" className="flex flex-col h-7 w-7 items-center">
                    <img src="/home.png" alt="Inicio" />
                </Link>
                <Link to="/favoritos" className="flex flex-col h-7 w-7 items-center">
                    <img src="/history.png" alt="Historial" />
                </Link>
                <Link to="/settings" className="flex flex-col h-7 w-7 items-center">
                    <img src="/options.png" alt="Opciones" />
                </Link>
            </nav>
            
        </div>
    );
};

export default ReportError