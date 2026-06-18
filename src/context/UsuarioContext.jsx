import { createContext, useEffect, useState } from 'react';

export const UsuarioContext = createContext();

const usuarioPorDefecto = {
  nombre: 'Erick',
  dni: '12345678',
  rol: 'Alumno',
  institucion: 'Facultad de ingenieria UNJU',
};

const obtenerUsuarioInicial = () => {
  const usuarioGuardado = localStorage.getItem('usuario');

  if (usuarioGuardado) {
    return JSON.parse(usuarioGuardado);
  }

  return usuarioPorDefecto;
};

// Agregamos 'export' al inicio para que App.jsx lo pueda importar correctamente
export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(obtenerUsuarioInicial);

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario]);

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
