import '../assets/static/styles/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar nav-links">
      <NavLink to="/dashboard">
        <span className="icono">📊</span>
        Dashboard
      </NavLink>
      <NavLink to="/proyectos">
        <span className="icono">📁</span>
        Proyectos
      </NavLink>
      <NavLink to="/perfil">
        <span className="icono">👤</span>
        Perfil
      </NavLink>
    </nav>
  );
};

export default Nav;
