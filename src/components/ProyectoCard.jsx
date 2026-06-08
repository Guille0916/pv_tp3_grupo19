function ProyectoCard({ proyecto, onVerDetalle, onEliminar }) {
  // Recibe el proyecto completo por props y aca se desestructuran sus datos.
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <article className="proyecto-card">
      <div>
        <h3>{titulo}</h3>
        <p><strong>Categoria:</strong> {categoria}</p>
        <p><strong>Estado:</strong> {estado}</p>
      </div>

      <div className="card-botones">
        <button type="button" title="Ver detalle" onClick={() => onVerDetalle(proyecto)}>
          <svg className="boton-icono" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5c-5 0-8.5 4.4-9.5 6.4a1.4 1.4 0 0 0 0 1.2C3.5 14.6 7 19 12 19s8.5-4.4 9.5-6.4a1.4 1.4 0 0 0 0-1.2C20.5 9.4 17 5 12 5Zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          </svg>
          Ver detalle
        </button>
        <button type="button" title="Eliminar proyecto" onClick={() => onEliminar(id)}>
          <svg className="boton-icono" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 3a1 1 0 0 0-1 1v1H5a1 1 0 1 0 0 2h1v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7h1a1 1 0 1 0 0-2h-3V4a1 1 0 0 0-1-1H9Zm2 2h4v1h-4V5ZM8 7h8v14H8V7Zm2 3a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z" />
          </svg>
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default ProyectoCard;
