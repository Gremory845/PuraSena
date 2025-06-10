import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

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

    <div className="m-0 p-0 box-border flex flex-col min-h-screen font-(family-name:Arial,sans-serif) bg-catskill-white-100 "> {/* Cambiamos el contenedor principal */}
      
      <div className="relative h-50 flex justify-center rounded-b-[40px] md:rounded-b-[60px] overflow-hidden mb-6">
        {/* Fondo */}
        <div className="absolute w-150 h-150 bg-[url('/bg.png')] bg-cover bg-center"></div>
        
        {/* Contenido visible encima del fondo */}
        <div className="z-10 w-100 h-50 flex items-end justify-center ">
          <h1 className="mb-11 text-white font-bold text-2xl bg-half-baked-300 px-2 rounded-full">Inicio de Sesión</h1>
        </div>
      </div>

      <div className="max-w-sm w-[90%] p-8 mx-auto">
        <form onSubmit={handleLogin} className="flex flex-col gap-6">

          {/* Campo Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-lochinvar-500 pl-2">Correo Electrónico</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => setEmailTouched(true)}
                className={`w-full px-4 py-2 bg-white border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                  emailTouched && errors.email
                    ? 'border-red-500 focus:ring-red-200'
                    : email
                    ? 'border-green-500 focus:ring-green-100'
                    : 'border-gray-300 focus:ring-blue-100'
                }`}
              />
              {emailTouched && errors.email && (
                <small className="text-red-500 text-[0.8rem]">{errors.email}</small>
              )}


              {email && !errors.email && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 font-bold">✓</span>
              )}
            </div>
          </div>

          {/* Campo Contraseña */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-bold text-lochinvar-500 pl-2">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={() => setPasswordTouched(true)}
                className={`w-full px-4 py-2 bg-white border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                  passwordTouched && errors.password
                    ? 'border-red-500 focus:ring-red-200'
                    : password
                    ? 'border-green-500 focus:ring-green-100'
                    : 'border-gray-300 focus:ring-blue-100'
                }`}
                minLength={8}
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                onClick={toggleShowPassword}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {passwordTouched && errors.password && (
              <small className="text-red-500 text-[0.8rem]">{errors.password}</small>
            )}

            {!errors.password && password.length > 0 && (
              <small
                className={`text-[0.8rem] mt-1 ${
                  password.length >= 8 ? 'text-green-600' : 'text-red-500'
                }`}
              >
                • Mínimo 8 caracteres {password.length >= 8 ? '✓' : '✗'}
              </small>
            )}
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="bg-sunset-orange-500 text-white px-4 py-2 rounded-2xl hover:bg-geraldine-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            disabled={!isFormValid}>
            Ingresar
          </button>
        </form>

        <p className="text-center text-elephant-950 mt-4">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-elefant-950 font-bold underline decoration-sunset-orange-500 cursor-pointer">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;