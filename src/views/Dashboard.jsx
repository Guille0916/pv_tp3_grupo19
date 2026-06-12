const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h2 className="mb-3 fw-bold">Dashboard</h2>
      <p className="text-muted mb-4">
        Bienvenido al sistema de gestión de proyectos educativos. Desde esta aplicación podés consultar,
        registrar y revisar el detalle de cada proyecto.
      </p>

      {/* Fila de Tarjetas de Estadísticas */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="card bg-primary text-white border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="mb-2 text-white-50">Total de proyectos</p>
              <h3 className="display-6 fw-bold mb-0 text-white">12</h3>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card bg-success text-white border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="mb-2 text-white-50">Proyectos en curso</p>
              <h3 className="display-6 fw-bold mb-0 text-white">5</h3>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card bg-warning text-dark border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="mb-2 text-dark-50">Proyectos finalizados</p>
              <h3 className="display-6 fw-bold mb-0">7</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Sección informativa de bienvenida */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h3 className="h5">Resumen general</h3>
          <p className="text-muted">
            Usá el menú superior para navegar entre el listado de proyectos, el detalle por URL y el perfil del usuario.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
