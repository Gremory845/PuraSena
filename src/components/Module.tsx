import React from 'react';
import moduleData from './ModuleData';
import type { ModuleItem } from './ModuleData';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Module: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const moduleInfo: ModuleItem | undefined = moduleData[id ?? ""];

  if (!moduleInfo) {
    return <div>Módulo no encontrado</div>;
  }

  
  const categoryImages: Record<string, string> = {
  'presentacion-personal': '/presentacion.png',
  'modales-basicos': '/modales.png',
  'identidad-comunidad': '/identidad.png',
  'numeros': '/numeros.png',
  'tiempo': '/tiempo.png',
  'lugares': '/lugares.png',
  'familia-relaciones': '/familia.png',
  'emociones': '/emociones.png',
  'confirmaciones-negaciones': '/confirmacion.png'
  };

  return (
    
    <div className="relative flex flex-col items-center bg-catskill-white-100 min-h-screen">
      
      
      <div className="relative w-full h-[220px] overflow-hidden rounded-b-[40px] md:rounded-b-[60px] mb-6">
          {/* Fondo con control total sobre el patrón */}
          <img
              src="/bg-blanco.png"
              alt="Fondo decorativo"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[3500px] h-[1167px] object-cover"
          />

          {/* Contenido visible encima del fondo */}
          <div className="relative z-10 flex items-end justify-center h-full">
              <button className="absolute top-8 left-10" onClick={() => navigate(-1)}>
                      <img src="/8-2.png" alt="Atrás" className="w-10 h-10" />
              </button>
              
          </div>
      </div>

      <div className="absolute top-[125px] flex flex-col items-center">
        <div className="w-50 h-50 rounded-full border-8 border-red-400 bg-white flex items-center justify-center">
          <img
            src={categoryImages[moduleInfo.id] || '/default.png'}
            alt={`Ícono de ${moduleInfo.title}`}
            className="w-40 h-40"
          />
        </div>
        <div className="absolute right-[-10px] top-[115px] bg-skeptic-200 rounded-full px-3 py-4 text-white text-2xl font-light">
          {moduleInfo.level}%
        </div>
      </div>
      

      <h2 className="text-red-400 text-2xl font-semibold mt-30">{moduleInfo.title}</h2>

      <div className="mt-8 max-w-md space-y-4 mx-4">
        {moduleInfo.subcategories.map((sub, idx) => (
          <Link 
            key={idx} 
            to={`/lesson/${sub.id}`} 
            className="block bg-skeptic-200 rounded-4xl p-8 justify-between items-center transition-shadow hover:shadow-lg"
          >
          
            <div className="flex flex-col gap-2">
              <span className="text-white text-xl font-semibold ">{sub.title}</span>
              <span className="text-red-400 text-sm ml-4">{sub.count} señas</span>
              <div className="w-full bg-white h-3 rounded mt-2">
                <div 
                  className="bg-red-400 h-3 rounded" 
                  style={{ width: `${Math.min((sub.count / 150) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

          </Link>
        ))}
      </div>

        {/* espacio para que nav no interfiera */}
      <div className='h-20'/>
    
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

export default Module;