import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Home.css';

// Datos para las cards
const categories = [
  { title: "Modales Básicos", count: "164 señas", path: "/modales-basicos" },
  { title: "Nombres", count: "256 señas", path: "/nombres" },
  { title: "Números", count: "50 señas", path: "/numeros" },
  { title: "Familia", count: "50 señas", path: "/familia" },
  { title: "Ubicaciones", count: "50 señas", path: "/ubicaciones" }
];

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
        {categories.map((category, index) => (
          <Link 
            to={category.path} 
            key={index} 
            className="category-card"
          >
            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.count}</p>
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