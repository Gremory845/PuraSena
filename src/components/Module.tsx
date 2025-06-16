import React from 'react';
import moduleData from './ModuleData';
import type { ModuleItem } from './ModuleData';
import { useParams, Link } from 'react-router-dom';

const Module: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const moduleInfo: ModuleItem | undefined = moduleData[id ?? ""];

  if (!moduleInfo) {
    return <div>Módulo no encontrado</div>;
  }

  return (
    <div className="relative flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <div className="absolute">
          <img src="/.png" alt="background" className="w-full h-full object-cover" />
      </div>

      <div className="relative flex flex-col items-center mt-4">
        <div className="w-40 h-40 rounded-full border-8 border-red-400 flex items-center justify-center">
          <img src="/15.png" alt="Icono" className="w-16 h-16" />
        </div>
        <div className="absolute right-[-20px] top-[60px] bg-half-baked-300 rounded-full px-3 py-1 text-white font-bold text-sm">
          {moduleInfo.level}%
        </div>
      </div>

      <h2 className="text-red-400 text-2xl font-semibold mt-4">{moduleInfo.title}</h2>

      <div className="mt-8 w-full max-w-md space-y-4">
        {moduleInfo.subcategories.map((sub, idx) => (
          <Link 
            key={idx} 
            to={`/lesson/${sub.id}`} 
            className="block bg-catskill-white-100 rounded-xl p-4 justify-between items-center shadow"
          >
            <div className="flex flex-col">
              <span className="text-gray-950 font-semibold">{sub.title}</span>
              <span className="text-red-400 text-sm">{sub.count} señas</span>
              <div className="w-full bg-white h-2 rounded mt-2">
                <div 
                  className="bg-red-400 h-2 rounded" 
                  style={{ width: `${Math.min((sub.count / 150) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            <div className="ml-4">
              <button className="text-red-400 text-2xl pl-90">❤️</button>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Module;
