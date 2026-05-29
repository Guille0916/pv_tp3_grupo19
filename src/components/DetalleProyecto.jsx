//comentario ;contenido de las tarjetas detalle
import React from 'react';
import '../assets/css/detalleProyecto.css';

const DetalleProyecto = ({ proyecto }) => {        


if(!proyecto) return <p>Selecciona un proyecto para ver los detalles</p>;

const { titulo, descripcionExtendida, recursos, equipo } = proyecto;

return (
    <div className="detalle-proyecto">
        <h2>{titulo}</h2>
        
        <div className="descripcion">
            <h3>Descripción Extendida</h3>
            {/* Si es un arreglo de párrafos, lo recorremos con .map para generar las etiquetas <p> */}
            {descripcionExtendida ? descripcionExtendida.map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
            )) : <p>No hay descripción disponible.</p>}
        </div>

        <div className="recursos">
            <h3>Recursos</h3>
            <ul>
                <li><strong>PDF:</strong> {recursos?.pdf || 'No disponible'}</li>
                <li><strong>Drive:</strong> {recursos?.drive || 'No disponible'}</li>
                <li><strong>GitHub:</strong> {recursos?.github || 'No disponible'}</li>
            </ul>
        </div>

        <div className="equipo">
            <h3>Equipo del Proyecto</h3>
            <ul>
                {equipo ? equipo.map((miembro, index) => (
                    <li key={index}><strong>{miembro.nombre}</strong> - {miembro.rol}</li>
                )) : <li>No hay miembros registrados.</li>}
            </ul>
        </div>
    </div>
);
};

export default DetalleProyecto;
