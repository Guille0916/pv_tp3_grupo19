import React from 'react';
import '../assets/css/style.css';
const Nav=()=>{
    return(
        <nav className="navbar">
            <div className="nav-logo">
                 <h1 style={{ color: 'white', textAlign: 'center', marginTop: '30px' }}>Tp3 -Grupo 19 </h1>
                </div>
                <ul className="nav-Links">
                    <li><a href="#inicio">Inicio</a></li>
                     <li><a href="#contacto">contactos</a></li>
                      <li><a href="#proyecto">projectos</a></li>

                    </ul>
                    </nav>
);
    
};
export default Nav;