import{ createContext, useState } from 'react';

export const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: 'Mario',
    dni: '12345678',
    rol: 'Alumno',
    institucion: 'Facultad de ingenieria UNJU',
  });
//funcion actualizar los datos del perfil desde la vista de configuracion
const actualizarPerfil=(nuevoDatos)=>{
    setUsuario((prevUsuario)=>({
        ...prevUsuario,
        ...nuevoDatos
    }));
}

    return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};
