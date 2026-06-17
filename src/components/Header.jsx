import '../assets/static/styles/Header.css';
import logoEducacion from '../assets/img/logo-educacion.png';
import { useContext } from 'react';
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
    <div className="usuario-info text-end text-dark p-2 bg-light rounded shadow-sm">
          <p className="mb-0 fw-bold">{usuario.nombre}</p>
          <span className="badge bg-primary">{usuario.rol}</span>
        </div>
    </header>
  );
};

export default Header;
