import '../assets/static/styles/Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="dashboard">dasboard</Link>
        </li>
        <li>
          <Link to="proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="perfil">perfil</Link>
        </li>
     
      </ul>
    </nav>
  );
};

export default Nav;
