import '../assets/static/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; Facultad de Ingenieria - 2026 - UNJu.</p>
      <div className="footer-redes">
        <a href="#" aria-label="Instagram">
          <span className="icono">📷</span>
          Instagram
        </a>
        <a href="#" aria-label="Facebook">
          <span className="icono">f</span>
          Facebook
        </a>
        <a href="#" aria-label="GitHub">
          <span className="icono">GH</span>
          GitHub
        </a>
        <a href="#" aria-label="LinkedIn">
          <span className="icono">in</span>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
