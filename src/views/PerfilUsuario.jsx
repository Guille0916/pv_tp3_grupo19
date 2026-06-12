import React from 'react';

const PerfilUsuario = () => {
  return (
    <div className="card shadow-sm border-0 p-4 bg-white rounded animate__animated animate__fadeIn">
      <div className="card-body">
        <h2 className="card-title text-primary border-bottom pb-2 mb-4">
           Perfil de Usuario
        </h2>
        
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-bold text-secondary">Nombre Completo</label>
            <p className="fs-5 bg-light p-2 rounded border">Erick</p>
          </div>
          
          <div className="col-md-6">
            <label className="form-label fw-bold text-secondary">Rol en el Equipo</label>
            <p className="fs-5 bg-light p-2 rounded border text-success fw-semibold">
              Diseñadora de Vistas (Integrante 2)
            </p>
          </div>

          <div className="col-12">
            <label className="form-label fw-bold text-secondary">Misión en el Proyecto</label>
            <div className="bg-light p-3 rounded border">
              <p className="mb-0 text-muted">
                Mi misión es diseñar las vistas de la aplicación, asegurando una experiencia de usuario intuitiva y atractiva. Me encargo de crear interfaces visuales que sean fáciles de usar y que reflejen la identidad del proyecto, colaborando estrechamente con el equipo para implementar diseños efectivos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PerfilUsuario;