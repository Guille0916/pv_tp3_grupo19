import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/static/styles/Header.css';
import logoEducacion from '../assets/img/logo-educacion.png';
import { UsuarioContext } from '../context/UsuarioContext';

const Header = () => {
  const { usuario } = useContext(UsuarioContext);

  return (
    <header className="header-contenedor">
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

      <NavLink className="usuario-info" to="/perfil" title="Ir al perfil">
        <span className="usuario-icono" aria-hidden="true"></span>
        <span className="usuario-texto">
          <strong>{usuario.nombre}</strong>
          <small>{usuario.rol}</small>
        </span>
      </NavLink>
    </header>
  );
};

export default Header;
