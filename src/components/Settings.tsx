import React from 'react';
import { Link } from 'react-router-dom';

const Settings: React.FC = () => {
  const handleLogout = () => {
    if (window.confirm('¿Estás seguro que deseas cerrar sesión?')) {
    // Lógica para cerrar sesión
    console.log('Sesión cerrada');
    // Redirigir al login
    window.location.href = '/login';
  }
    
  };

  return (
    <div className='bg-catskill-white-100 min-h-screen'>
        <div className="font-(arial, sans-serif) ">
          
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
                Configuraciones
              </h1>
            </div>
          </div>
        

        <div className="flex flex-col gap-5 my-8 px-7 max-w-md mx-auto">
          <Link to="/editar-perfil" className="flex justify-between items-center p-4 bg-half-baked-300 text-white text-center rounded-full text-lg  hover:bg-skeptic-100 hover:text-elephant-950 ">
            <span>Editar perfil</span>
            <span>→</span>
          </Link>
          
          <Link to="/report-error" className="flex justify-between items-center p-4 bg-half-baked-300 text-white text-center rounded-full text-lg  hover:bg-skeptic-100 hover:text-elephant-950">
            <span>Reportar Error</span>
            <span>→</span>
          </Link>
          
          <Link to="/rate-app" className="flex justify-between items-center p-4 bg-half-baked-300 text-white text-center rounded-full text-lg  hover:bg-skeptic-100 hover:text-elephant-950">
            <span>Calificar App</span>
            <span>→</span>
          </Link>
          
          <Link to="/support-us" className="flex justify-between items-center p-4 bg-half-baked-300 text-white text-center rounded-full text-lg  hover:bg-skeptic-100 hover:text-elephant-950">
            <span>¡Apóyanos!</span>
            <span>→</span>
          </Link>
        </div>
        
        <div className='px-7 max-w-md mx-auto'>
          <button 
          onClick={handleLogout} 
          className="w-full p-4  bg-sunset-orange-500 text-white text-center rounded-full mt-5 text-lg hover:bg-geraldine-400"
        >
          Cerrar Sesión
        </button>
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
    </div>
    
  );
};

export default Settings;