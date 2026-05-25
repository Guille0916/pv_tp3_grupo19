import { useState } from 'react'
import './assets/css/style.css'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'


function App() {
  return(
   <>
       <Nav />
        <h1 style={{ color: 'blue', textAlign: 'center', marginTop: '50px' }}>
         si ves esto react esta funcionando !!
      </h1>
   



  <Footer/>
  </>
  );

}

export default App
