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
        <button type="button" onClick={() => onVerDetalle(proyecto)}>
          Ver detalle
        </button>
        <button type="button" onClick={() => onEliminar(id)}>
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default ProyectoCard;
