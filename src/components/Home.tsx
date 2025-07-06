import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Home.css';
import ModuleData  from './ModuleData';

// Datos para las cards
/*
const categories = [
  { title: "Presentación Personal", count: "164 señas", id: "presentacion-personal" },
  { title: "Modales Básicos", count: "256 señas", id: "modales-basicos" },
  { title: "Identidad y Comunidad", count: "50 señas", id: "identidad-comunidad" },
  { title: "Números", count: "50 señas", id: "numeros" },
  { title: "Tiempo", count: "50 señas", id: "tiempo" },
  { title: "Lugares", count: "60 señas", id: "lugares" },
  { title: "Familia y Relaciones", count: "60 señas", id: "familia-relaciones" },
  { title: "Emociones", count: "60 señas", id: "emociones" },
  { title: "Confirmaciones y negaciones", count: "60 señas", id: "confirmaciones-negaciones" },
];
*/

const Home: React.FC = () => {
  // Datos de ejemplo del usuario
  const user = {
    name: "Nombre del Usuario",
    profileImage: "/profile.png" // Asegúrate de tener esta imagen en tu carpeta public
  };

  return (
    <div className="home-container">
      {/* Header de usuario */}
      <header className="user-header">
        <div className="profile-container">
          <img 
          // imagen del api
            src={user.profileImage} 
            alt="Foto de perfil" 
            className="profile-image"
          />
          <div className="greeting">
            <h1>¡Hola!</h1>
            <p>{user.name}</p>
          </div>
        </div>
      </header>

  {/* Contenedor de cards en columna */}
    <div className="categories-column">
      {Object.values(ModuleData).map((category) => (
        <Link to={`/module/${category.id}`} key={category.id} className="category-card">
         <div className="category-content">
            <h3>{category.title}</h3>
            <p>{category.signCount} señas</p>
         </div>
        </Link>
      ))}
      </div>


      {/* Navbar inferior */}
      <nav className="bottom-navbar">
        <Link to="/home" className="nav-item">
          <img src="/home.png" alt="Inicio" />
        </Link>
        <Link to="/favoritos" className="nav-item">
          <img src="/fav.png" alt="Favoritos" />
        </Link>
        <Link to="/opciones" className="nav-item">
          <img src="/options.png" alt="Opciones" />
        </Link>
      </nav>
    </div>
  );
};

export default Home;