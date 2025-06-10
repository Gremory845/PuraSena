import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  // Validación en tiempo real
  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: ''
    };

    if (!email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Correo electrónico inválido';
    }

    if (!password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (password.trim().length < 8) {
      newErrors.password = 'Mínimo 8 caracteres';
    }

    setErrors(newErrors);
    setIsFormValid(!newErrors.email && !newErrors.password);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
      console.log('Login exitoso');
      navigate('/home');
    }
  };

  return (
    
    <div className="login-page"> {/* Cambiamos el contenedor principal */}
    <div className="login-header">
      <div className="background-image"></div> {/* Fondo verde */}
      <h1>Inicio de Sesión</h1>
    </div>

      <div className="login-form-container">
        <form onSubmit={handleLogin}>
          {/* Mensajes de error generales */}
          {(errors.email || errors.password) && (
            <div className="error-message">
              {errors.email || errors.password}
            </div>
          )}

          {/* Campo Email */}
          <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={email && !errors.email ? 'valid' : ''}
            />
            {email && !errors.email && (
              <span className="valid-icon">✓</span>
            )}
          </div>

          {/* Campo Contraseña */}
          <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
            <label htmlFor="password">Contraseña</label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className={password && !errors.password ? 'valid' : ''}
                minLength={8}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={toggleShowPassword}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <div className="password-requirements">
              {password.length > 0 && (
                <>
                  <span className={password.length >= 8 ? 'valid' : 'invalid'}>
                    • Mínimo 8 caracteres {password.length >= 8 ? '✓' : '✗'}
                  </span>
                </>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={!isFormValid}
          >
            Ingresar
          </button>
        </form>
        <p className="register-link">¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
      </div>
    </div>
  );
};

export default Login;