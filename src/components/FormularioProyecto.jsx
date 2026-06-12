import { useState } from 'react';

const formularioVacio = {
  titulo: '',
  categoria: '',
  estado: '',
  descripcion1: '',
  descripcion2: '',
  pdf: '',
  drive: '',
  github: '',
  nombre: '',
  rol: '',
};

function FormularioProyecto({ onAgregarProyecto }) {
  const [formulario, setFormulario] = useState(formularioVacio);

  const cambiarFormulario = (event) => {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const agregar = (event) => {
    event.preventDefault();
    if (typeof onAgregarProyecto === 'function') {
      onAgregarProyecto(formulario);
    } else {
      console.log("Proyecto creado localmente:", formulario);
    }
    setFormulario(formularioVacio);
  };

  const {
    titulo,
    categoria,
    estado,
    descripcion1,
    descripcion2,
    pdf,
    drive,
    github,
    nombre,
    rol,
  } = formulario;

  return (
    <div className="card shadow-sm p-4 bg-light mb-4">
      <h3 className="mb-4 text-center fw-bold text-dark">Registrar Nuevo Proyecto</h3>
      <form className="row g-3" onSubmit={agregar}>
        
        <div className="col-12 col-md-6">
          <label htmlFor="titulo" className="form-label fw-semibold">Título</label>
          <input id="titulo" name="titulo" type="text" className="form-control" placeholder="Ej: E-commerce" required value={titulo} onChange={cambiarFormulario} />
        </div>

        {/* Categoría  */}
        <div className="col-12 col-md-6">
          <label htmlFor="categoria" className="form-label fw-semibold">Categoría</label>
          <select id="categoria" name="categoria" className="form-select" required value={categoria} onChange={cambiarFormulario}>
            <option value="" disabled>Seleccione una categoría...</option>
            <option value="Desarrollo Web">Desarrollo Web</option>
            <option value="Aplicación Móvil">Aplicación Móvil</option>
            <option value="Videojuegos">Videojuegos</option>
            <option value="Inteligencia Artificial">Inteligencia Artificial</option>
          </select>
        </div>

        {/* Estado  */}
        <div className="col-12 col-md-6">
          <label htmlFor="estado" className="form-label fw-semibold">Estado</label>
          <select id="estado" name="estado" className="form-select" required value={estado} onChange={cambiarFormulario}>
            <option value="" disabled>Seleccione el estado...</option>
            <option value="Planificación">Planificación</option>
            <option value="En Progreso">En Progreso</option>
            <option value="Completado">Completado</option>
          </select>
        </div>

        {/* PDF */}
        <div className="col-12 col-md-6">
          <label htmlFor="pdf" className="form-label fw-semibold">Enlace PDF</label>
          <input id="pdf" name="pdf" type="text" className="form-control" placeholder="Ej: https://..." required value={pdf} onChange={cambiarFormulario} />
        </div>

        {/* Drive */}
        <div className="col-12 col-md-6">
          <label htmlFor="drive" className="form-label fw-semibold">Enlace Drive</label>
          <input id="drive" name="drive" type="text" className="form-control" placeholder="Ej: https://..." required value={drive} onChange={cambiarFormulario} />
        </div>

        {/* GitHub */}
        <div className="col-12 col-md-6">
          <label htmlFor="github" className="form-label fw-semibold">Repositorio GitHub</label>
          <input id="github" name="github" type="text" className="form-control" placeholder="Ej: https://github.com/..." required value={github} onChange={cambiarFormulario} />
        </div>

        {/* Integrante */}
        <div className="col-12 col-md-6">
          <label htmlFor="nombre" className="form-label fw-semibold">Integrante Líder</label>
          <input id="nombre" name="nombre" type="text" className="form-control" placeholder="Nombre completo" required value={nombre} onChange={cambiarFormulario} />
        </div>

        {/* Rol */}
        <div className="col-12 col-md-6">
          <label htmlFor="rol" className="form-label fw-semibold">Rol en el equipo</label>
          <input id="rol" name="rol" type="text" className="form-control" placeholder="Ej: Fullstack Developer" required value={rol} onChange={cambiarFormulario} />
        </div>

        {/* Descripción 1  */}
        <div className="col-12">
          <label htmlFor="descripcion1" className="form-label fw-semibold">Descripción Corta</label>
          <textarea id="descripcion1" name="descripcion1" rows="2" className="form-control" placeholder="Resumen rápido del proyecto..." required value={descripcion1} onChange={cambiarFormulario}></textarea>
        </div>

        {/* Descripción 2 */}
        <div className="col-12">
          <label htmlFor="descripcion2" className="form-label fw-semibold">Descripción Detallada</label>
          <textarea id="descripcion2" name="descripcion2" rows="4" className="form-control" placeholder="Explicación extendida de las tecnologías y objetivos..." required value={descripcion2} onChange={cambiarFormulario}></textarea>
        </div>

        {/* Botón de Guardar  */}
        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-primary btn-lg px-5 shadow-sm" title="Agregar proyecto">
            <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Agregar Proyecto
          </button>
        </div>

      </form>
    </div>
  );
}

export default FormularioProyecto;