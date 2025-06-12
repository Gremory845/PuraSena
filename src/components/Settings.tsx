import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Settings.css';

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
    <div className="settings-container">
      <h1 className="settings-title">Configuraciones</h1>
      
      <div className="settings-menu">
        <Link to="/edit-profile" className="settings-item">
          <span>Editar perfil</span>
          <span>→</span>
        </Link>
        
        <Link to="/history" className="settings-item">
          <span>Historial</span>
          <span>→</span>
        </Link>
        
        <Link to="/report-error" className="settings-item">
          <span>Reportar Error</span>
          <span>→</span>
        </Link>
        
        <Link to="/rate-app" className="settings-item">
          <span>Calificar App</span>
          <span>→</span>
        </Link>
        
        <Link to="/support-us" className="settings-item">
          <span>¡Apóyanos!</span>
          <span>→</span>
        </Link>
      </div>
      
      <button 
        onClick={handleLogout} 
        className="logout-button"
      >
        Cerrar Sesión
      </button>

    {/* Navbar inferior */}
          <nav className="bottom-navbar">
            <Link to="/home" className="nav-item">
              <img src="/home.png" alt="Inicio" />
            </Link>
            <Link to="/favoritos" className="nav-item">
              <img src="/fav.png" alt="Favoritos" />
            </Link>
            <Link to="/settings" className="nav-item">
              <img src="/options.png" alt="Opciones" />
            </Link>
          </nav>
    </div>
  );
};

export default Settings;