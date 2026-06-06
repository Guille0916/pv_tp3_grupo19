import '../assets/static/styles/RegistroActividad.css';

function RegistroActividad({ ultimaModificacion }) {
  return (
    <div className="contenedor-registro-actividad">
      <h5 className="contenedor-titulo-registro">Historial de Cambios</h5>
      <p className="texto-registro">
        Última actualización de la lista: {ultimaModificacion} hs.
      </p>
    </div>
  );
}

export default RegistroActividad;