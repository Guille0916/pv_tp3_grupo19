import { Link } from 'react-router-dom';

function ProyectoCard({ proyecto, onEliminar }) {
  // Recibe el proyecto completo por props y aca se desestructuran sus datos.
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="card border-0 shadow-sm h-100 proyecto-card-bootstrap">
      <div className="card-body d-flex flex-column gap-3">
        <div>
          <h3 className="h5 mb-2">{titulo}</h3>
          <div className="d-flex gap-2 flex-wrap">
            <span className="badge text-bg-secondary">{categoria}</span>
            <span className="badge text-bg-info">{estado}</span>
          </div>
        </div>

        <div className="d-flex gap-2 mt-auto flex-wrap">
          <Link to={`/proyectos/${id}`} className="btn btn-primary btn-sm">
            <span className="icono">👁</span>
            Ver detalle
          </Link>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onEliminar(id)}>
            <span className="icono">🗑</span>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProyectoCard;
