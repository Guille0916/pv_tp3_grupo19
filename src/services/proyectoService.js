let proyectos = [
  { id: 1, titulo: 'Pagina web institucional', categoria: 'Educacion', estado: 'En desarrollo' },
  { id: 2, titulo: 'Sistema de ventas', categoria: 'Gestion', estado: 'Activo' },
  { id: 3, titulo: 'App de turnos', categoria: 'Servicios', estado: 'Planificado' },
  { id: 4, titulo: 'Biblioteca digital', categoria: 'Biblioteca', estado: 'En revision' },
  { id: 5, titulo: 'Panel de estadisticas', categoria: 'Analitica', estado: 'Finalizado' },
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
