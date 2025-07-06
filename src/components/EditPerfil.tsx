import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const EditPerfil: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    username: '',
  });

  const [passwords, setPasswords] = useState({
    actual: '',
    nueva: '',
    confirmar: ''
  });

  const [touched, setTouched] = useState({
    nombre: false,
    apellido: false,
    username: false,
    actual: false,
    nueva: false,
    confirmar: false
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    username: '',
    actual: '',
    nueva: '',
    confirmar: ''
  });

  const [mensaje, setMensaje] = useState('');
  const [isProfileValid, setIsProfileValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData, passwords]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPasswords(prev => ({ ...prev, [id]: value }));
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
      actual: '',
      nueva: '',
      confirmar: ''
    };

    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre es requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'Apellido es requerido';
    if (!formData.username.trim()) newErrors.username = 'Nombre de usuario es requerido';


    if (passwords.nueva && passwords.nueva.length < 8)
      newErrors.nueva = 'Mínimo 8 caracteres';

    if (passwords.nueva && passwords.nueva !== passwords.confirmar)
      newErrors.confirmar = 'Las contraseñas no coinciden';

    setErrors(newErrors);
    setIsProfileValid(Object.values(newErrors).slice(0, 5).every(e => e === ''));
    setIsPasswordValid(!newErrors.nueva && !newErrors.confirmar);
  };

  const handleActualizarPerfil = () => {
    if (!isProfileValid) return;
    console.log('Datos actualizados:', formData);
    setMensaje('Perfil actualizado con éxito (modo local)');
  };

  const handleCambiarPassword = () => {
    if (!isPasswordValid) return;
    console.log('Contraseña cambiada:', passwords);
    setMensaje('Contraseña actualizada (modo local)');
  };

  return (
    <div className="bg-catskill-white-100 min-h-screen">

        <div className="relative w-full h-[220px] overflow-hidden rounded-b-[40px] md:rounded-b-[60px] mb-6">
          {/* Fondo con control total sobre el patrón */}
          <img
            src="/bg-menta.png"
            alt="Fondo decorativo"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[3500px] h-[1167px] object-cover"
          />

          {/* Contenido visible encima del fondo */}
          <div className="relative z-10 flex items-end justify-center h-full">
            <button className="absolute top-8 left-10" onClick={() => navigate(-1)}>
                      <img src="/8-1.png" alt="Atrás" className="w-10 h-10" />
            </button>
            <h1 className="mb-6 text-white font-bold text-2xl bg-half-baked-300 px-3 py-1 rounded-full">
              Editar Perfil
            </h1>
          </div>
        </div>


        <div className="text-center mb-4">
            <img src="/panda.png" alt="Perfil" className="mx-auto w-40 h-40 rounded-full mt-4" />
        </div>


        <div className="text-center mb-4">
            <h1 className="text-xl font-bold text-lochinvar-500">Datos</h1>
        </div>

      <div className="space-y-4 my-8 max-w-md mx-auto px-8">
        {[ 'nombre', 'apellido', 'username' ].map((field) => (
          <div key={field} className="flex flex-col gap-2 justify-center">
            <label htmlFor={field} className="text-sm font-bold text-lochinvar-500 pl-2 capitalize">{field}</label>
            <input
              id={field}
              type="text"
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-2xl bg-white focus:outline-none focus:ring-2 transition-all ${
                touched[field as keyof typeof touched] && errors[field as keyof typeof errors]
                  ? 'border-red-500 focus:ring-red-200'
                  : touched[field as keyof typeof touched]
                  ? 'border-green-500 focus:ring-green-100'
                  : 'border-gray-300 focus:ring-blue-100'
              }`}
            />
            {touched[field as keyof typeof touched] && errors[field as keyof typeof errors] && (
              <small className="text-red-500 text-[0.8rem]">{errors[field as keyof typeof errors]}</small>
            )}
          </div>
        ))}
        <button onClick={handleActualizarPerfil} className="w-full bg-sunset-orange-500 text-white rounded-2xl py-2 mt-2 text-lg hover:bg-geraldine-400">Actualizar</button>
      </div>

      <div className="text-center mb-4 pt-4">
            <h1 className="text-xl font-bold text-lochinvar-500">Cambio de contraseña</h1>
        </div>

      <div className="space-y-4  my-8 px-8 max-w-md mx-auto">
        {[ {id:'actual', label:'Antigua Contraseña'}, {id:'nueva', label:'Nueva Contraseña'}, {id:'confirmar', label:'Confirmar Contraseña'} ].map(field => (
          <div key={field.id} className="flex flex-col gap-2">
            <label htmlFor={field.id} className="text-sm font-bold text-lochinvar-500 pl-2">{field.label}</label>
            <input
              id={field.id}
              type="password"
              value={passwords[field.id as keyof typeof passwords]}
              onChange={handlePasswordChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-2xl bg-white focus:outline-none focus:ring-2 transition-all  ${
                touched[field.id as keyof typeof touched] && errors[field.id as keyof typeof errors]
                  ? 'border-red-500 focus:ring-red-200'
                  : touched[field.id as keyof typeof touched]
                  ? 'border-green-500 focus:ring-green-100'
                  : 'border-gray-300 focus:ring-blue-100'
              }`}
            />
            {touched[field.id as keyof typeof touched] && errors[field.id as keyof typeof errors] && (
              <small className="text-red-500 text-[0.8rem]">{errors[field.id as keyof typeof errors]}</small>
            )}
          </div>
        ))}
        <button onClick={handleCambiarPassword} className="w-full bg-sunset-orange-500 text-white rounded-2xl py-2 mt-2 text-lg hover:bg-geraldine-400">Cambiar contraseña</button>
      </div>

      {mensaje && <p className="text-center text-elephant-700 mt-4">{mensaje}</p>}
    
        {/* espacio para que nav no interfiera */}
        <div className='h-20'/>
    
        {/* Navbar inferior */}
      <nav className="fixed bg-white bottom-0 left-0 right-0 flex justify-center gap-20 sm:gap-20 md:gap-32 p-4 px-4 sm:px-8 md:px-36">
        <Link to="/home" className="flex flex-col h-7 w-7 items-center">
          <img src="/home.png" alt="Inicio" />
        </Link>
        <Link to="/favoritos" className="flex flex-col h-7 w-7 items-center">
          <img src="/history.png" alt="Historial" />
        </Link>
        <Link to="/settings" className="flex flex-col h-7 w-7 items-center">
          <img src="/options.png" alt="Opciones" />
        </Link>
      </nav>
    
    </div>
  );
};

export default EditPerfil;
