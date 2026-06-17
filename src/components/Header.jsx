import React, { useContext } from 'react';
import '../assets/static/styles/Header.css';
import logoEducacion from '../assets/img/logo-educacion.png';
import { UsuarioContext } from '../context/UsuarioContext'; 

const Header = () => {
  const { usuario } = useContext(UsuarioContext); 

  return (
    
    <header className="header-contenedor" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      
      <div className="header-logo">
        <img
          className="logo-animado"
          src={logoEducacion}
          alt="Logo educacion"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <h1>Gestion de Proyectos Educativos</h1>
      </div>

      {usuario && (
        
        <div className="header-usuario" style={{ textAlign: 'right', paddingRight: '20px', color: 'white', alignSelf: 'center' }}>
          <p style={{ margin: 0, fontWeight: 'bold', lineHeight: '1.2' }}>{usuario.nombre}</p>
          <span style={{ fontSize: '0.85em', opacity: 0.8 }}>{usuario.rol}</span>
        </div>
      )}

    </header>
  );
};

export default Header;