const PerfilUsuario = () => {
  return (
    <div className="container-fluid">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h2 className="mb-3 fw-bold">Perfil de Usuario</h2>
          <p className="text-muted mb-4">
            Datos simulados del alumno dentro del sistema de proyectos educativos.
          </p>

          <div className="row g-3">
            <div className="col-12 col-md-5">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Nombre:</strong> Erick
                </li>
                <li className="list-group-item">
                  <strong>Rol:</strong> Diseñador de vistas
                </li>
                <li className="list-group-item">
                  <strong>Institución:</strong> Facultad de Ingeniería - UNJu
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-7">
              <div className="card bg-light border-0 h-100">
                <div className="card-body">
                  <h3 className="h6 text-secondary">Misión en el proyecto</h3>
                  <p className="text-muted">
                    Diseñar vistas claras para la aplicación, colaborando con el equipo para lograr una
                    experiencia simple, ordenada y funcional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
