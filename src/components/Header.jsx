 import React from 'react';
import '../assets/css/style.css'; 

 const Header=()=>{
    return(
    <header className="header-contenedor">
    <div className="header-logo">
<img src="/logo.png" alt="Logo Unju "  onError={(e) => { e.target.style.display='none' }}/>
<h1>Gestion de Proyectos Educativos </h1>
</div>
</header>
); 
     };
export default Header;
