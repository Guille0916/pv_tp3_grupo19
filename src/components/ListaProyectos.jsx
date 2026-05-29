import React, { useState } from 'react';
import ProyectoCard from './ProyectoCard';

function ListaProyectos() {
  
  const [proyectos, setProyectos] = useState([
    { id: 1, titulo: "Gestión de Proyectos", categoria: "Web", estado: "En desarrollo" },
    { id: 2, titulo: "Aplicación Móvil", categoria: "Mobile", estado: "Pendiente" }
  ]);

  return (
    <div>
      <h2>Listado de Proyectos</h2>
      
      <div>
        {/* Hacemos el .map() recorriendo el array y llamando a tu componente pasándole la prop */}
        {proyectos.map((p) => (
          <ProyectoCard 
            key={p.id} 
            proyecto={p} 
          />
        ))}
      </div>
    </div>
  );
}

export default ListaProyectos;