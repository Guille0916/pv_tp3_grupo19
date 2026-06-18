import { createContext, useState } from 'react';

export const UsuarioContext = createContext();

// Agregamos 'export' al inicio para que App.jsx lo pueda importar correctamente
export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: 'Erick',
    dni: '12345678',
    rol: 'Alumno',
    institucion: 'Facultad de ingenieria UNJU',
  });

  // Función para actualizar los datos del perfil desde la vista de configuración
  const actualizarPerfil = (nuevoDatos) => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      ...nuevoDatos
    }));
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};