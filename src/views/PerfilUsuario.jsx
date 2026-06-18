import { useContext, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {
  const { usuario, actualizarPerfil } = useContext(UsuarioContext);

  const [editando, setEditando] = useState(false);

  const [formulario, setFormulario] = useState(usuario);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const guardarCambios = () => {
    actualizarPerfil(formulario);
    setEditando(false);
  };

  return (
    <div className="container-fluid">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h2 className="mb-3 fw-bold">Perfil de Usuario</h2>

          <p className="text-muted mb-4">
            Datos del usuario obtenidos desde Context API.
          </p>

          <div className="row g-3">
            <div className="col-12 col-md-5">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Nombre:</strong> {usuario.nombre}
                </li>

                <li className="list-group-item">
                  <strong>DNI:</strong> {usuario.dni}
                </li>

                <li className="list-group-item">
                  <strong>Rol:</strong> {usuario.rol}
                </li>

                <li className="list-group-item">
                  <strong>Institución:</strong> {usuario.institucion}
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-7">
              <div className="card bg-light border-0 h-100">
                <div className="card-body">
                  <h3 className="h6 text-secondary mb-3">
                    Editar Perfil
                  </h3>

                  <div className="mb-3">
                    <label className="form-label">
                      Nombre
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      value={formulario.nombre}
                      onChange={handleChange}
                      disabled={!editando}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      DNI
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="dni"
                      value={formulario.dni}
                      onChange={handleChange}
                      disabled={!editando}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Rol
                    </label>

                    <select
                      className="form-select"
                      name="rol"
                      value={formulario.rol}
                      onChange={handleChange}
                      disabled={!editando}
                    >
                      <option value="Alumno">
                        Alumno
                      </option>

                      <option value="Docente">
                        Docente
                      </option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Institución
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      name="institucion"
                      value={formulario.institucion}
                      onChange={handleChange}
                      disabled={!editando}
                    />
                  </div>

                  {!editando ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => setEditando(true)}
                    >
                      Editar Perfil
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={guardarCambios}
                    >
                      Guardar Cambios
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;