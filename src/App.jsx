import { Routes, Route, Navigate } from 'react-router-dom';
import './assets/static/styles/style.css'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'

// Importaciones desde la carpeta views
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

      {/* Un solo main global con el diseño responsivo de Bootstrap */}
      <main className="container my-5"> 
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">

            <Routes>
              <Route path="/" element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="proyectos" element={<ListaProyectos />} />
              <Route path="proyectos/:id" element={<DetalleProyecto />} />
              <Route path="perfil" element={<PerfilUsuario />} />
            </Routes>

          </div>
        </div>
      </main>

      <Footer></Footer>

    </div>
  );
}

export default App;