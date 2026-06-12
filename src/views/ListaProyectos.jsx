import { useState } from 'react';
import '../assets/static/styles/ListaProyectos.css';
import FormularioProyecto from '../components/FormularioProyecto';
import ProyectoCard from '../components/ProyectoCard';
import RegistroActividad from '../components/RegistroActividad';
import {
  obtenerProyectos,
  agregarProyecto,
  eliminarProyecto,
} from '../services/proyectoService';

function ListaProyectos() {
  const [proyectos, setProyectos] = useState(obtenerProyectos()); // para guardar la lista de proyectos y cargarla al iniciar el componente
  const [busqueda, setBusqueda] = useState(''); // guarda el texto escrito en el buscador
  const [fechaActualizacion, setFechaActualizacion] = useState(null); // guarda la fecha y hora de la ultima actualizacion
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const actualizarFecha = () => {
    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');

    setFechaActualizacion(`${dia}/${mes}/${anio} a las ${horas}:${minutos}`);
  };

  const agregar = (formulario) => {
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
    actualizarFecha();
    setMostrarFormulario(false);
  };

  const eliminar = (id) => {
    eliminarProyecto(id);
    setProyectos([...obtenerProyectos()]);
    actualizarFecha();
  };

  const buscar = (event) => {
    const { value } = event.target;
    setBusqueda(value);
  };

  const proyectosFiltrados = proyectos.filter(({ titulo }) =>
    titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="container-fluid proyectos-contenedor">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
            <div>
              <h2 className="mb-1 fw-bold">Proyectos</h2>
              <p className="text-muted">Administración de proyectos educativos</p>
            </div>

            <div className="d-flex flex-column flex-sm-row gap-2 align-items-sm-end">
              <div>
                <label htmlFor="buscar" className="form-label">Buscar proyecto</label>
                <input id="buscar" type="text" className="form-control" placeholder="Buscar por título" value={busqueda} onChange={buscar} />
              </div>

              <button
                type="button"
                className={`btn ${mostrarFormulario ? 'btn-outline-secondary' : 'btn-primary'}`}
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
              >
                <span className="icono">{mostrarFormulario ? '✖' : '➕'}</span>
                {mostrarFormulario ? 'Cerrar formulario' : 'Registrar proyecto'}
              </button>
            </div>
          </div>

          {mostrarFormulario && <FormularioProyecto onAgregarProyecto={agregar} />}

          <div className="row g-3">
            {proyectosFiltrados.map((proyecto) => (
              <div className="col-12 col-md-6" key={proyecto.id}>
                <ProyectoCard
                  proyecto={proyecto}
                  onEliminar={eliminar}
                />
              </div>
            ))}
          </div>

          {proyectosFiltrados.length === 0 && (
            <p className="text-muted text-center my-4">
              No se encontraron proyectos con ese título.
            </p>
          )}

          {fechaActualizacion && <RegistroActividad ultimaModificacion={fechaActualizacion} />}
        </div>
      </div>
    </section>
  );
}

export default ListaProyectos;
