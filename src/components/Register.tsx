import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Register.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    username: '',
    email: '',
    password: '',
    birthdate: ''
  });
  
  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    username: '',
    email: '',
    password: '',
    birthdate: ''
  });
  
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  // Validación en tiempo real
  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {
      nombre: '',
      apellido: '',
      username: '',
      email: '',
      password: '',
      birthdate: ''
    };

    // Validación para cada campo
    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre es requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'Apellido es requerido';
    if (!formData.username.trim()) newErrors.username = 'Nombre de usuario es requerido';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Correo electrónico inválido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Contraseña es requerida';
    } else if (formData.password.trim().length < 8) {
      newErrors.password = 'Mínimo 8 caracteres';
    }

    if (!formData.birthdate) newErrors.birthdate = 'Fecha de nacimiento es requerida';

    setErrors(newErrors);
    setIsFormValid(
      !newErrors.nombre &&
      !newErrors.apellido &&
      !newErrors.username &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.birthdate
    );
  };

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
      console.log('Registro exitoso', formData);
      // Aquí iría tu llamada a la API de registro
      navigate('/home'); // Redirige después de registro exitoso
    }
  };

  return (
    <div className="register-page">
      <div className="register-header">
        <div className="background-image"></div>
        <h1>Registro</h1>
      </div>
      
      <div className="register-form-container">
        <form onSubmit={handleRegister} className="register-form">
          {/* Mostrar error general si existe */}
          {Object.values(errors).some(error => error) && (
            <div className="error-message">
              {Object.values(errors).find(error => error)}
            </div>
          )}

          {/* Campos del formulario con validación */}
          {[
            { id: 'nombre', label: 'Nombre', type: 'text' },
            { id: 'apellido', label: 'Apellido', type: 'text' },
            { id: 'username', label: 'Nombre de Usuario', type: 'text' },
            { id: 'email', label: 'Correo Electrónico', type: 'email' },
            { id: 'password', label: 'Contraseña', type: 'password', minLength: 8 },
            { id: 'birthdate', label: 'Fecha de Nacimiento', type: 'date' }
          ].map(field => (
            <div key={field.id} className={`form-group ${errors[field.id as keyof typeof errors] ? 'has-error' : ''}`}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                id={field.id}
                type={field.type}
                value={formData[field.id as keyof typeof formData]}
                onChange={handleChange}
                minLength={field.minLength}
                required
              />
              {errors[field.id as keyof typeof errors] && (
                <span className="field-error">{errors[field.id as keyof typeof errors]}</span>
              )}
              {field.id === 'password' && formData.password && (
                <div className="password-requirements">
                  <span className={formData.password.length >= 8 ? 'valid' : 'invalid'}>
                    • Mínimo 8 caracteres {formData.password.length >= 8 ? '✓' : '✗'}
                  </span>
                </div>
              )}
            </div>
          ))}

          <button 
            type="submit" 
            className="register-button"
            disabled={!isFormValid}
          >
            Registrarse
          </button>
        </form>
        <p className="login-link">¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
      </div>
    </div>
  );
};

export default Register;