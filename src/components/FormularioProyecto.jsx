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
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h3 className="h5 mb-4">Registrar nuevo proyecto</h3>

        <form onSubmit={agregar}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label htmlFor="titulo" className="form-label">Título</label>
              <input id="titulo" name="titulo" type="text" className="form-control" placeholder="Ej: E-commerce" required value={titulo} onChange={cambiarFormulario} />
            </div>

            {/* Categoría  */}
            <div className="col-12 col-md-6">
              <label htmlFor="categoria" className="form-label">Categoría</label>
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
              <label htmlFor="estado" className="form-label">Estado</label>
              <select id="estado" name="estado" className="form-select" required value={estado} onChange={cambiarFormulario}>
                <option value="" disabled>Seleccione el estado...</option>
                <option value="Planificación">Planificación</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Completado">Completado</option>
              </select>
            </div>

            {/* PDF */}
            <div className="col-12 col-md-6">
              <label htmlFor="pdf" className="form-label">Enlace PDF</label>
              <input id="pdf" name="pdf" type="text" className="form-control" placeholder="Ej: https://..." required value={pdf} onChange={cambiarFormulario} />
            </div>

            {/* Drive */}
            <div className="col-12 col-md-6">
              <label htmlFor="drive" className="form-label">Enlace Drive</label>
              <input id="drive" name="drive" type="text" className="form-control" placeholder="Ej: https://..." required value={drive} onChange={cambiarFormulario} />
            </div>

            {/* GitHub */}
            <div className="col-12 col-md-6">
              <label htmlFor="github" className="form-label">Repositorio GitHub</label>
              <input id="github" name="github" type="text" className="form-control" placeholder="Ej: https://github.com/..." required value={github} onChange={cambiarFormulario} />
            </div>

            {/* Integrante */}
            <div className="col-12 col-md-6">
              <label htmlFor="nombre" className="form-label">Integrante Líder</label>
              <input id="nombre" name="nombre" type="text" className="form-control" placeholder="Nombre completo" required value={nombre} onChange={cambiarFormulario} />
            </div>

            {/* Rol */}
            <div className="col-12 col-md-6">
              <label htmlFor="rol" className="form-label">Rol en el equipo</label>
              <input id="rol" name="rol" type="text" className="form-control" placeholder="Ej: Fullstack Developer" required value={rol} onChange={cambiarFormulario} />
            </div>

            {/* Descripción 1  */}
            <div className="col-12">
              <label htmlFor="descripcion1" className="form-label">Descripción corta</label>
              <textarea id="descripcion1" name="descripcion1" rows="2" className="form-control" placeholder="Resumen rápido del proyecto..." required value={descripcion1} onChange={cambiarFormulario}></textarea>
            </div>

            {/* Descripción 2 */}
            <div className="col-12">
              <label htmlFor="descripcion2" className="form-label">Descripción detallada</label>
              <textarea id="descripcion2" name="descripcion2" rows="4" className="form-control" placeholder="Explicación extendida de las tecnologías y objetivos..." required value={descripcion2} onChange={cambiarFormulario}></textarea>
            </div>

            {/* Botón de Guardar  */}
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary">
                <span className="icono">💾</span>
                Agregar proyecto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioProyecto;
