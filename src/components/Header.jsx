import '../assets/static/styles/Header.css';
import logoEducacion from '../assets/img/logo-educacion.png';

const Header = () => {
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
    </header>
  );
};

export default Header;
