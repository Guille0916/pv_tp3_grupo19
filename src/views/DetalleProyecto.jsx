import { Link, useParams } from 'react-router-dom';
import { obtenerProyectoPorId } from '../services/proyectoService';

function DetalleProyecto() {
  const { id } = useParams();

  const proyecto = obtenerProyectoPorId(id);

  if (!proyecto) {
    return (
      <div className="container-fluid">
        <div className="alert alert-warning" role="alert">
          Proyecto no encontrado.
        </div>
        <Link to="/proyectos" className="btn btn-secondary">
          <span className="icono">⬅</span>
          Volver a proyectos
        </Link>
      </div>
    );
  }

  const {
    titulo,
    descripcionExtendida,
    recursos,
    equipo,
  } = proyecto;

  return (
    <div className="container-fluid">
      <article className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start gap-3 mb-4 flex-wrap">
            <div>
              <h2 className="fw-bold mb-1">{titulo}</h2>
              <p className="text-muted">
                Detalle cargado desde la ruta dinámica /proyectos/{id}.
              </p>
            </div>

            <Link to="/proyectos" className="btn btn-outline-secondary">
              <span className="icono">⬅</span>
              Volver a proyectos
            </Link>
          </div>

          <div className="row g-3">
            <div className="col-12 col-lg-7">
              <section className="card bg-light border-0 h-100">
                <div className="card-body">
                  <h3 className="h5">Descripción extendida</h3>
                  {descripcionExtendida.map((parrafo, index) => (
                    <p className="text-muted" key={index}>{parrafo}</p>
                  ))}
                </div>
              </section>
            </div>

            <div className="col-12 col-lg-5">
              <section className="card bg-light border-0 h-100">
                <div className="card-body">
                  <h3 className="h5">Recursos</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>PDF:</strong> {recursos.pdf}</li>
                    <li className="list-group-item"><strong>Drive:</strong> {recursos.drive}</li>
                    <li className="list-group-item"><strong>GitHub:</strong> {recursos.github}</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="col-12">
              <section className="card bg-light border-0">
                <div className="card-body">
                  <h3 className="h5">Equipo</h3>
                  <ul className="list-group">
                    {equipo.map(({ nombre, rol }, index) => (
                      <li className="list-group-item" key={index}>
                        <strong>{nombre}</strong> - {rol}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default DetalleProyecto;
