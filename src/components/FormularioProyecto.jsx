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
  const [formulario, setFormulario] = useState(formularioVacio); // guarda los datos que se escriben en el formulario

  const cambiarFormulario = (event) => {
    const { name, value } = event.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const agregar = (event) => {
    event.preventDefault();
    onAgregarProyecto(formulario);
    setFormulario(formularioVacio); // limpia los inputs despues de agregar
  };

  // Se desestructura el estado para no escribir formulario.titulo, formulario.estado, etc.
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
    <form className="proyectos-formulario" onSubmit={agregar}>
      <div>
        <label htmlFor="titulo">Titulo</label>
        <input id="titulo" name="titulo" type="text" required value={titulo} onChange={cambiarFormulario} />
      </div>

      <div>
        <label htmlFor="categoria">Categoria</label>
        <input id="categoria" name="categoria" type="text" required value={categoria} onChange={cambiarFormulario} />
      </div>

      <div>
        <label htmlFor="estado">Estado</label>
        <input id="estado" name="estado" type="text" required value={estado} onChange={cambiarFormulario} />
      </div>

      <div>
        <label htmlFor="pdf">PDF</label>
        <input id="pdf" name="pdf" type="text" required value={pdf} onChange={cambiarFormulario} />
      </div>

      <div>
        <label htmlFor="drive">Drive</label>
        <input id="drive" name="drive" type="text" required value={drive} onChange={cambiarFormulario} />
      </div>

      <div>
        <label htmlFor="github">GitHub</label>
        <input id="github" name="github" type="text" required value={github} onChange={cambiarFormulario} />
      </div>

      <div>
        <label htmlFor="nombre">Integrante</label>
        <input id="nombre" name="nombre" type="text" required value={nombre} onChange={cambiarFormulario} />
      </div>

      <div>
        <label htmlFor="rol">Rol</label>
        <input id="rol" name="rol" type="text" required value={rol} onChange={cambiarFormulario} />
      </div>

      <div className="campo-ancho">
        <label htmlFor="descripcion1">Descripcion 1</label>
        <input id="descripcion1" name="descripcion1" type="text" required value={descripcion1} onChange={cambiarFormulario} />
      </div>

      <div className="campo-ancho">
        <label htmlFor="descripcion2">Descripcion 2</label>
        <input id="descripcion2" name="descripcion2" type="text" required value={descripcion2} onChange={cambiarFormulario} />
      </div>

      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioProyecto;
