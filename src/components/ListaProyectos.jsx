import { useEffect, useState } from 'react';
import '../assets/static/styles/ListaProyectos.css';
import DetalleProyecto from './DetalleProyecto';
import ProyectoCard from './ProyectoCard';
import {
  obtenerProyectos,
  agregarProyecto,
  eliminarProyecto,
  buscarProyecto,
} from '../services/proyectoService';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState([]); // para guardar la lista de proyectos
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null); // guarda el proyecto elegido para ver el detalle
  const [formulario, setFormulario] = useState({ // guarda los datos que se escriben en el formulario
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
  });

  useEffect(() => {
    setProyectos(obtenerProyectos()); // carga los proyectos al iniciar el componente
  }, []);

  const cambiarFormulario = (event) => {
    const { name, value } = event.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const agregar = (event) => {
    event.preventDefault();

    // Se desestructura el formulario para usar sus datos de forma mas clara.
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

    const proyecto = {
      id: Date.now(),
      titulo,
      categoria,
      estado,
      descripcionExtendida: [descripcion1, descripcion2],
      recursos: { pdf, drive, github },
      equipo: [{ nombre, rol }],
    };

    agregarProyecto(proyecto);
    setProyectos([...obtenerProyectos()]); // se copia el arreglo para que React actualice la pantalla
    setProyectoSeleccionado(proyecto);

    setFormulario({ // limpia los inputs despues de agregar
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
    });
  };

  const eliminar = (id) => {
    eliminarProyecto(id);
    setProyectos([...obtenerProyectos()]);

    if (proyectoSeleccionado?.id === id) {
      setProyectoSeleccionado(null);
    }
  };

  const buscar = (event) => {
    const { value } = event.target;
    setProyectos(buscarProyecto(value));
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
    <section className="proyectos-contenedor">
      <div className="proyectos-panel">
        <div className="proyectos-encabezado">
          <div>
            <h2>Proyectos</h2>
            <p>Administracion de proyectos educativos</p>
          </div>

          <div>
            <label htmlFor="buscar">Buscar proyecto</label>
            <input id="buscar" type="text" placeholder="Buscar por titulo" onChange={buscar} />
          </div>
        </div>

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

        <div className="proyectos-contenido">
          <div className="proyectos-lista">
            {proyectos.map((proyecto) => (
              <ProyectoCard
                key={proyecto.id}
                proyecto={proyecto}
                onVerDetalle={setProyectoSeleccionado}
                onEliminar={eliminar}
              />
            ))}
          </div>

          <DetalleProyecto proyecto={proyectoSeleccionado} />
        </div>
      </div>
    </section>
  );
}

export default ListaProyectos;
