import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    // Validación básica
    if (trimmedEmail.length > 0 && trimmedPassword.length > 0) {
      // Validación básica de email
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        console.log('Login exitoso:', { email: trimmedEmail });
        navigate('/home');
      } else {
        alert('Por favor ingresa un correo electrónico válido');
      }
    } else {
      alert('Ambos campos son requeridos');
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        {/* Fondo verde (bg.png) */}
        <div className="background-image"></div>
        <h1>Inicio de Sesión</h1>
      </div>
      
      <div className="login-form-container">
        <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
        <p className="register-link">¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
      </div>
    </div>
  );
};

export default Login;