import React from 'react';
import { Link } from 'react-router-dom';
import ModuleData  from './ModuleData';


const Home: React.FC = () => {
  // Datos de ejemplo del usuario
  const user = {
    name: "Nombre del Usuario",
    profileImage: "/panda.png" // Asegúrate de tener esta imagen en tu carpeta public
  };

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
    <div className="flex flex-col min-h-screen p-5 bg-catskill-white-100">
      {/* Header de usuario */}
      <header className="p-5 rounded-2xl mb-5">
        <div className="flex items-center gap-5 justify-between">
          <img 
            src={user.profileImage} 
            alt="Foto de perfil" 
            className="w-28 h-28 rounded-full object-cover"
          />
          <div className="text-2xl text-sunset-orange-500 m-1.5">
            <h1 className='font-bold text-right'>¡Hola!</h1>
            <p className='text-right' >{user.name}</p>
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-4 mb-20 w-full max-w-xl mx-auto px-4 sm:px-8">
        {Object.values(ModuleData).map((category) => (
          <Link
            to={`/module/${category.id}`}
            key={category.id}
            className="flex items-center justify-between bg-[url(/bg-blanco.png)] bg-size-[2000px] bg-center rounded-4xl p-4 sm:p-6 md:p-8 transition-shadow hover:shadow-lg"
          >
            {/* Ícono */}
            <div className="flex-shrink-0">
              <img
                src={categoryImages[category.id]}
                alt={category.title}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-[5px] sm:border-[6px] md:border-[7px] border-sunset-orange-500 p-2 bg-white object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col items-end ml-3 flex-grow gap-2">
              <div className="bg-geraldine-400 text-white rounded-full px-3 py-1 text-sm sm:text-base">
                {category.signCount} señas
              </div>
              <div className="bg-skeptic-200 text-white font-semibold rounded-full px-4 py-2 text-xs sm:text-sm md:text-base text-center max-w-[160px] w-full">
                {category.title}
              </div>
            </div>
          </Link>
        ))}
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

export default Home;