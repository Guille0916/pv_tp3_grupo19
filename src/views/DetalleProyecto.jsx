import { useParams } from 'react-router-dom';
import { obtenerProyectoPorId } from '../services/proyectoService';

function DetalleProyecto() {
  const { id } = useParams();

  const proyecto = obtenerProyectoPorId(id);

  if (!proyecto) {
    return (
      <p className="detalle-vacio">
        Proyecto no encontrado.
      </p>
    );
  }

  const {
    titulo,
    descripcionExtendida,
    recursos,
    equipo,
  } = proyecto;

  return (
    <article className="detalle-proyecto">
      <h2>{titulo}</h2>

      <section>
        <h3>Descripción extendida</h3>
        {descripcionExtendida.map((parrafo, index) => (
          <p key={index}>{parrafo}</p>
        ))}
      </section>

      <section>
        <h3>Recursos</h3>
        <ul>
          <li><strong>PDF:</strong> {recursos.pdf}</li>
          <li><strong>Drive:</strong> {recursos.drive}</li>
          <li><strong>GitHub:</strong> {recursos.github}</li>
        </ul>
      </section>

      <section>
        <h3>Equipo</h3>
        <ul>
          {equipo.map(({ nombre, rol }, index) => (
            <li key={index}>
              <strong>{nombre}</strong> - {rol}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default DetalleProyecto;