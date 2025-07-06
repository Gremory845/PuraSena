import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RateApp: React.FC = () => {
    const navigate = useNavigate();

    const [comentario, setComentario] = useState('');
    const [estrellas, setEstrellas] = useState(0);

    const handleSubmit = () => {
        console.log('Calificación:', estrellas, 'Comentario:', comentario);
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
                    Calificar App
                    </h1>
                </div>
            </div>

            <div className="px-8 flex flex-col gap-6 max-w-md mx-auto items-center">
                <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                    <span key={num} onClick={() => setEstrellas(num)} className={`text-4xl cursor-pointer ${estrellas >= num ? 'text-half-baked-400' : 'text-slate-300'}`}>
                    ★
                    </span>
                ))}
                </div>

                <textarea
                placeholder="Coméntanos tu experiencia..."
                className="w-full h-40 p-4 rounded-4xl font-medium text-lochinvar-500 bg-white"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                ></textarea>

                <button onClick={handleSubmit} className="w-full p-4  bg-sunset-orange-500 text-white text-center rounded-full mt-5 text-lg hover:bg-geraldine-400">
                Publicar
                </button>

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

        </div>
    );
};

export default RateApp