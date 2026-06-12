import { Routes, Route, Navigate } from 'react-router-dom';
import './assets/static/styles/style.css'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'

//importamos desde otra carpeta 
import Dashboard from './views/Dashboard.jsx'
import ListaProyectos from './views/ListaProyectos.jsx'
import DetalleProyecto from './views/DetalleProyecto.jsx'
import PerfilUsuario from './views/PerfilUsuario.jsx'
function App() {
  return (
    <div className="app">

      <div className="app-header">
        <Header></Header>
        <Nav></Nav>
      </div>
      <main> 
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="lista-proyectos" element={<ListaProyectos/>} />
          <Route path="proyecto/:id" element={<DetalleProyecto />} />
          <Route path="perfil" element={<PerfilUsuario />} />
        </Routes>
      </main>

      <Footer></Footer>

    </div>
  );
}

export default App; 
