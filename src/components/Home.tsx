import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>¡Hola!</h1>
        <p className="username">Nombre de usuario</p>
      </div>

      <div className="categories-grid">
        <Link to="/modales-basicos" className="category-card">
          <div className="category-content">
            <h3>Modales Básicos</h3>
            <p>164 señas</p>
          </div>
        </Link>
        
        <Link to="/nombres" className="category-card">
          <div className="category-content">
            <h3>Nombres</h3>
            <p>256 señas</p>
          </div>
        </Link>
        
        <Link to="/numeros" className="category-card">
          <div className="category-content">
            <h3>Números</h3>
            <p>50 señas</p>
          </div>
        </Link>
      </div>

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