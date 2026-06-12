function DetalleProyecto({ proyecto }) {
  if (!proyecto) {
    return <p className="detalle-vacio">Selecciona un proyecto para ver los detalles.</p>;
  }

  // Se desestructura el proyecto seleccionado para mostrar el detalle.
  const { titulo, descripcionExtendida, recursos, equipo } = proyecto;

  return (
    <article className="detalle-proyecto">
      <h2>{titulo}</h2>

      <section>
        <h3>Descripcion extendida</h3>
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
