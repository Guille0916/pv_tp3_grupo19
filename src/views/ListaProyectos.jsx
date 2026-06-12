import { useEffect, useRef, useState } from 'react';
import '../assets/static/styles/ListaProyectos.css';
import DetalleProyecto from './DetalleProyecto';
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
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null); // guarda el proyecto elegido para ver el detalle
  const [fechaActualizacion, setFechaActualizacion] = useState(null); // guarda la fecha y hora de la ultima actualizacion
  const primeraCarga = useRef(true); // evita registrar la carga inicial

  useEffect(() => {
    if (primeraCarga.current) {
      primeraCarga.current = false;
      return;
    }

    const ahora = new Date();
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0');
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');

    setFechaActualizacion(`${dia}/${mes}/${anio} a las ${horas}:${minutos}`);
  }, [proyectos]);

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
    setProyectoSeleccionado(proyecto);
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
    setBusqueda(value);
  };

  const proyectosFiltrados = proyectos.filter(({ titulo }) =>
    titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

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
            <input id="buscar" type="text" placeholder="Buscar por titulo" value={busqueda} onChange={buscar} />
          </div>
        </div>

        <FormularioProyecto onAgregarProyecto={agregar} />

        <div className="proyectos-contenido">
          <div className="proyectos-lista">
            {proyectosFiltrados.map((proyecto) => (
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

        {fechaActualizacion && <RegistroActividad ultimaModificacion={fechaActualizacion} />}
      </div>
    </section>
  );
}

export default ListaProyectos;

