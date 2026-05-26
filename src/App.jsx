import { useState } from 'react'
import './assets/css/style.css'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import Header from'./components/Header.jsx'

function App() {
  return (
    <>
      <Header />
      <Nav />
      {/* El cartel de prueba viejo ya lo volamos para que quede limpio */}
      <Footer />
    </>
  );
}

export default App; 
