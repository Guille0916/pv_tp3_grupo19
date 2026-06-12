import React from 'react';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h2 className="text-dark mb-4 fw-bold">Panel de Control (Dashboard)</h2>
      
      {/* Fila de Tarjetas de Estadísticas */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 bg-primary text-white shadow-sm h-100 p-3">
            <div className="card-body">
              <h5 className="card-title text-white-50">Proyectos Totales</h5>
              <p className="display-5 fw-bold mb-0">12</p>
            </div>
          </div>
        </div>
        
        <div className="col-12 col-md-4">
          <div className="card border-0 bg-success text-white shadow-sm h-100 p-3">
            <div className="card-body">
              <h5 className="card-title text-white-50">Completados</h5>
              <p className="display-5 fw-bold mb-0">8</p>
            </div>
          </div>
        </div>
        
        <div className="col-12 col-md-4">
          <div className="card border-0 bg-warning text-dark shadow-sm h-100 p-3">
            <div className="card-body">
              <h5 className="card-title text-dark-50">En Desarrollo</h5>
              <p className="display-5 fw-bold mb-0">4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección informativa de bienvenida */}
      <div className="card border-0 shadow-sm p-4 bg-white">
        <h4 className="text-secondary mb-2">¡Bienvenido al Sistema de Gestión!</h4>
        <p className="text-muted mb-0">
          Seleccioná una opción del menú superior para administrar los proyectos educativos o revisar tu perfil de estudiante.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;