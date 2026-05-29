// Arreglo principal donde se guardan los proyectos.
// Cada proyecto tiene los datos basicos, la descripcion, los recursos y el equipo.
let proyectos = [
  {
    id: 1,
    titulo: 'Pagina web institucional',
    categoria: 'Educacion',
    estado: 'En desarrollo',
    descripcionExtendida: [
      'Desarrollo de una plataforma web moderna para la institucion.',
      'Busca mejorar la accesibilidad de los recursos educativos.',
    ],
    recursos: {
      pdf: 'institucional.pdf',
      drive: 'drive.google.com/institucional',
      github: 'github.com/institucional',
    },
    equipo: [
      { nombre: 'Juan Perez', rol: 'Lider de Proyecto' },
      { nombre: 'Maria Gomez', rol: 'Frontend' },
    ],
  },
  {
    id: 2,
    titulo: 'Sistema de ventas',
    categoria: 'Gestion',
    estado: 'Activo',
    descripcionExtendida: [
      'Sistema integral para la gestion de ventas e inventario.',
      'Permite controlar en tiempo real el stock disponible.',
    ],
    recursos: {
      pdf: 'manual.pdf',
      drive: 'drive.google.com/ventas',
      github: 'github.com/ventas-sys',
    },
    equipo: [
      { nombre: 'Carlos Ruiz', rol: 'Backend' },
    ],
  },
  {
    id: 3,
    titulo: 'App de turnos',
    categoria: 'Servicios',
    estado: 'Planificado',
    descripcionExtendida: [
      'Aplicacion movil para la reserva de turnos online.',
      'Incluye notificaciones para recordar cada reserva realizada.',
    ],
    recursos: {
      pdf: 'requisitos.pdf',
      drive: 'drive.google.com/turnos',
      github: 'github.com/app-turnos',
    },
    equipo: [
      { nombre: 'Laura Diaz', rol: 'Disenadora UX/UI' },
    ],
  },
];

const obtenerProyectos = () => {
  // Devuelve todos los proyectos para mostrarlos en el componente.
  return proyectos;
};

const agregarProyecto = (proyecto) => {
  // Agrega el proyecto nuevo al arreglo principal.
  proyectos.push(proyecto);
};

const eliminarProyecto = (id) => {
  proyectos = proyectos.filter((proyecto) => proyecto.id !== id); // filter recorre el arreglo y devuelve
                                                                  // un arreglo nuevo con los elementos que cumplen una condicion
};

const buscarProyecto = (texto) => (
  proyectos.filter(({ titulo }) =>
    titulo.toLowerCase().includes(texto.toLowerCase()) // convierte el titulo de cada proyecto en minuscula y pregunta si
                                                       // ese texto contiene lo que se escribio en el buscador
  )
);

export {
  obtenerProyectos,
  agregarProyecto,
  eliminarProyecto,
  buscarProyecto,
};
