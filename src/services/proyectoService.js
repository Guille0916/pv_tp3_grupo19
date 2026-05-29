let proyectos = [
  { 
    id: 1, titulo: 'Pagina web institucional', categoria: 'Educacion', estado: 'En desarrollo',
    descripcionExtendida: ["Desarrollo de una plataforma web moderna para la institución.", "Busca mejorar la accesibilidad de los recursos educativos."],
    recursos: { pdf: 'institucional.pdf', drive: 'drive.google.com/institucional', github: 'github.com/institucional' },
    equipo: [{ nombre: 'Juan Perez', rol: 'Líder de Proyecto' }, { nombre: 'Maria Gomez', rol: 'Frontend' }]
  },
  { 
    id: 2, titulo: 'Sistema de ventas', categoria: 'Gestion', estado: 'Activo',
    descripcionExtendida: ["Sistema integral para la gestión de ventas e inventario.", "Permite control en tiempo real del stock disponible."],
    recursos: { pdf: 'manual.pdf', drive: 'drive.google.com/ventas', github: 'github.com/ventas-sys' },
    equipo: [{ nombre: 'Carlos Ruiz', rol: 'Backend' }]
  },
  { 
    id: 3, titulo: 'App de turnos', categoria: 'Servicios', estado: 'Planificado',
    descripcionExtendida: ["Aplicación móvil para la reserva de turnos online.", "Incluye notificaciones push para recordatorios."],
    recursos: { pdf: 'requisitos.pdf', drive: 'drive.google.com/turnos', github: 'github.com/app-turnos' },
    equipo: [{ nombre: 'Laura Diaz', rol: 'Diseñadora UX/UI' }]
  },
  { 
    id: 4, titulo: 'Biblioteca digital', categoria: 'Biblioteca', estado: 'En revision',
    descripcionExtendida: ["Plataforma para préstamos de libros digitales.", "Cuenta con un motor de búsqueda avanzado."],
    recursos: { pdf: 'arquitectura.pdf', drive: 'drive.google.com/biblio', github: 'github.com/biblio-dig' },
    equipo: [{ nombre: 'Sofia Castro', rol: 'QA' }]
  },
  { 
    id: 5, titulo: 'Panel de estadisticas', categoria: 'Analitica', estado: 'Finalizado',
    descripcionExtendida: ["Dashboard interactivo para visualizar métricas clave.", "Integración con múltiples fuentes de datos."],
    recursos: { pdf: 'reporte.pdf', drive: 'drive.google.com/estadisticas', github: 'github.com/panel-stats' },
    equipo: [{ nombre: 'Diego Lopez', rol: 'Data Scientist' }]
  },
];

const obtenerProyectos = () => {
  return proyectos;
};

const agregarProyecto = (proyecto) => {
  proyectos.push(proyecto);
};

const eliminarProyecto = (id) => {
  proyectos = proyectos.filter((proyecto) => proyecto.id !== id); // filter recorre el arreglo y devuelve-
                                                                  // un arreglo nuevo con los elementos que cumplen una condicion
};

const buscarProyecto = (texto) => {
  return proyectos.filter((proyecto) =>
    proyecto.titulo.toLowerCase().includes(texto.toLowerCase()) //convierte el titulo de cada proyecto en minucula y pregunta si ese
                                                                // ese texto contiene otro texto y solo devuelve el que cumple esa condicion de verdadero
  );
};

export {
  obtenerProyectos,
  agregarProyecto,
  eliminarProyecto,
  buscarProyecto,
};
