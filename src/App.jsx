import './assets/static/styles/style.css'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import ListaProyectos from './components/ListaProyectos.jsx'

function App() {
  return (
    <div className="app">

      <div className="app-header">
        <Header></Header>
        <Nav></Nav>
      </div>
      <ListaProyectos></ListaProyectos>
      <Footer></Footer>

    </div>
  );
}

export default App; 
