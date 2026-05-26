import { useEffect, useState } from 'react';
import '../assets/static/styles/ListaProyecto.css';

import {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto,
} from '../assets/services/proyectoService';

function ListaProyecto() {

    const [proyectos, setProyectos] = useState([]); //para guardar la lista y actualizarlo , empieza vacio
    const [titulo, setTitulo] = useState('');   // para guardar los imputs
    const [categoria, setCategoria] = useState('');
    const [estado, setEstado] = useState('');
    
 
    useEffect(() => {
        setProyectos(obtenerProyectos()); // carga los proyectos 
    }, []);
    
    const agregar = (event) => {
        event.preventDefault();

        const proyecto = {
            id: proyectos.length + 1,
            titulo: titulo,
            categoria: categoria,
            estado: estado,
        };

        agregarProyecto(proyecto);
        // Los tres puntos (SPREAD OPERATOR) copian los proyectos en un nuevo arreglo
        // Asi React detecta el cambio y actualiza la pantalla osea la actualiza
        setProyectos([...obtenerProyectos()]);

        setTitulo(''); // limpiar imputs
        setCategoria('');
        setEstado('');
    };

    const eliminar = (id) => {
        eliminarProyecto(id);
        setProyectos([...obtenerProyectos()]);
    };

    const buscar = (event) => {
        const texto = event.target.value;

        setProyectos(buscarProyecto(texto));
    };

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
                        <input id="buscar" type="text" placeholder="Buscar por titulo" onChange={buscar}/> {/* cada vez que escribo se ejecuta buscar*/}
                    </div>
                </div>

                <form className="proyectos-formulario" onSubmit={agregar}> {/* si se aprieta el boton se ejecuta la func agregar */}
                    <div>
                        <label htmlFor="titulo">Titulo</label>
                        <input id="titulo" type="text" required value={titulo} onChange={(event) => setTitulo(event.target.value)} /> {/* el input esta conectado con el estado titulo (value en lugar de name)
                                                                                                            cada vez que escribo guarda eso en titulo osea cada vez que cambia*/}
                    </div>

                    <div>
                        <label htmlFor="categoria">Categoria</label>
                        <input id="categoria" type="text" required value={categoria} onChange={(event) => setCategoria(event.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="estado">Estado</label>
                        <input id="estado" type="text" required value={estado} onChange={(event) => setEstado(event.target.value)} />
                    </div>

                    <button type="submit">Agregar</button>
                </form>

                <div className="proyectos-lista">

                    { proyectos.map((proyecto) => (     //recorre el arreglo de proyectos
                                                        //en {} llaves para escribir js en html
                        <article className="proyecto-card" key={proyecto.id}>
                            <div>
                                <h3>{proyecto.titulo}</h3>
                                <p>{proyecto.categoria}</p>
                                <p>{proyecto.estado}</p>
                            </div>

                            <button type="button" onClick={() => eliminar(proyecto.id)}>
                                Eliminar
                            </button>
                        </article>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default ListaProyecto;
