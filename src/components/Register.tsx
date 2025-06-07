import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Register.css';

const Register: React.FC = () => {
  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Registro enviado');
  };

  return (
    <div className="register-page">
      <div className="register-header">
        <div className="background-image"></div>
        <h1>Registro</h1>
      </div>
      
      <div className="register-form-container">
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Nombre de Usuario</label>
            <input type="text" id="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Fecha de Nacimiento</label>
            <input type="date" id="birthdate" required />
          </div>
          <button type="submit" className="register-button">Registrarse</button>
        </form>
        <p className="login-link">¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
      </div>
    </div>
  );
};

export default Register;