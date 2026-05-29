import React from 'react';
function ProyectoCard({ proyecto }) {
    const { id ,titulo,categoria,estado} = proyecto;
    return(
        <div className="proyecto-card">
            <h3>{titulo}</h3>
            <p><strong>Categoría:</strong> {categoria}</p>
            <p><strong>Estado:</strong> {estado}</p>
        
        <div className="card-botones">
        <button className="btn-detalle">ver detalle</button>
        <button className="btn-eleminar">Eliminar</button>
        </div>
        </div>
    );
}       
export default ProyectoCard;
