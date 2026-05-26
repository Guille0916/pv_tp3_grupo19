import '../assets/static/styles/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#contactos">Contactos</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
