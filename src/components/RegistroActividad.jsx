import '../assets/static/styles/RegistroActividad.css';

function RegistroActividad({ ultimaModificacion }) {
  const fechaVisible = ultimaModificacion || 'sin modificaciones recientes';

  return (
    <div className="alert alert-info mt-4 mb-0" role="alert">
      <h5 className="alert-heading h6">Historial de Cambios</h5>
      Ultima actualizacion de la lista: {fechaVisible}.
    </div>
  );
}

export default RegistroActividad;
