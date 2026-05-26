import React from 'react';
import '../assets/css/nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">TP3 - Grupo 19</div>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#contactos">Contactos</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
/* modificado */