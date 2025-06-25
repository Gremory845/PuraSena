import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import '../assets/Register.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    username: '',
    email: '',
    password: '',
    birthdate: ''
  });
  
  const [touched, setTouched] = useState({
    nombre: false,
    apellido: false,
    username: false,
    email: false,
    password: false,
    birthdate: false
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
    setFormData(prev => ({...prev,[id]: value}));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
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
    <div className=" items-center justify-center min-h-screen bg-catskill-white-100">

      <div className="relative h-50 flex justify-center rounded-b-[40px] md:rounded-b-[60px] overflow-hidden mb-6">
        {/* Fondo */}
        <div className="absolute w-150 h-150 bg-[url('/bg.png')] bg-cover bg-center"></div>
        
        {/* Contenido visible encima del fondo */}
        <div className="z-10 w-100 h-50 flex items-end justify-center ">
          <h1 className="mb-11 text-white font-bold text-2xl bg-half-baked-300 px-2 rounded-full">Registro</h1>
        </div>
      </div>
      
      <div className="max-w-sm w-[90%] p-8 mx-auto">

        <form onSubmit={handleRegister} className="flex flex-col gap-6">
          {[
            { id: 'nombre', label: 'Nombre', type: 'text' },
            { id: 'apellido', label: 'Apellido', type: 'text' },
            { id: 'username', label: 'Nombre de Usuario', type: 'text' },
            { id: 'email', label: 'Correo Electrónico', type: 'email' },
            { id: 'password', label: 'Contraseña', type: 'password' },
            { id: 'birthdate', label: 'Fecha de Nacimiento', type: 'date' }
          ].map(field => (
            <div key={field.id} className="flex flex-col gap-2 ">
              <label htmlFor={field.id} className="text-sm font-bold text-lochinvar-500 pl-2">
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                value={formData[field.id as keyof typeof formData]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-2xl bg-white focus:outline-none focus:ring-2 transition-all ${
                  touched[field.id as keyof typeof touched] && errors[field.id as keyof typeof errors]
                    ? 'border-red-500 focus:ring-red-200'
                    : touched[field.id as keyof typeof touched]
                    ? 'border-green-500 focus:ring-green-100'
                    : 'border-gray-300 focus:ring-blue-100'
                }`}
              />
              {touched[field.id as keyof typeof touched] &&
                errors[field.id as keyof typeof errors] && (
                  <small className="text-red-500 text-[0.8rem]">
                    {errors[field.id as keyof typeof errors]}
                  </small>
              )}
              {field.id === 'password' && formData.password && touched.password && (
                <small
                  className={`text-[0.8rem] ${
                    formData.password.length >= 8 ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  • Mínimo 8 caracteres {formData.password.length >= 8 ? '✓' : '✗'}
                </small>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={!isFormValid}
            className="bg-sunset-orange-500 text-white px-4 py-2 rounded-2xl hover:bg-geraldine-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-elephant-950 mt-4 text-sm">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-elephant-950 font-bold underline decoration-sunset-orange-500 cursor-pointe">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;