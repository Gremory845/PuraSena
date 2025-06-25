import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/main.css'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Settings from './components/Settings';
import Module from './components/Module';
import Lessons from './components/Lessons';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        {/* Otras rutas para las categorías
        <Route path="/modales-basicos" element={<ModalesBasicos />} />
        <Route path="/nombres" element={<Nombres />} />
        <Route path="/numeros" element={<Numeros />} />
        <Route path="/familia" element={<Numeros />} />
        <Route path="/ubicaciones" element={<Numeros />} />*/}
        <Route path="/settings" element={<Settings />} />
        <Route path="/module/:id" element={<Module />} />
        <Route path="/lesson/:id" element={<Lessons />} />
      </Routes>
    </Router>
  );
}

export default App;