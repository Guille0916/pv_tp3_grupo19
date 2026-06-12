import '../assets/static/styles/RegistroActividad.css';

function RegistroActividad({ ultimaModificacion }) {
  return (
    <div className="alert alert-info mt-4 mb-0" role="alert">
      <h5 className="alert-heading h6">Historial de Cambios</h5>
      Última actualización de la lista: {ultimaModificacion} hs.
    </div>
  );
}

export default RegistroActividad;
