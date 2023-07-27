
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

 
const ListaUsuarios = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/usuarios');
        setLista(res.data);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    };

    getUsuarios();
  }, []);

  const confirmarEliminacion = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleEliminarUsuario(id);
      }
    });
  };

  const handleEliminarUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/usuarios/${id}`);
      setLista(lista.filter((usuario) => usuario._id !== id));
      Swal.fire("¡Eliminado!", "El usuario ha sido eliminado exitosamente.", "success");

    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  return (
    <div className="row">
      {lista.map((usuario) => (
        <div className="col-md-4 p-2" key={usuario._id}>
          <div className="card">
            <div className="card-header">
              <h5>Nombre: {usuario.nombre}</h5>
            </div>

            <div className="card-body">
              <p>Apellido: {usuario.apellido}</p>
              <p>Edad: {usuario.edad}</p>
              <p>Teléfono: {usuario.telefono}</p>
              <p>Correo: {usuario.correo}</p>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => confirmarEliminacion(usuario._id)}
              >
                Eliminar
              </button>

              <Link className="btn btn-primary m-1" to={`/edit/${usuario._id}`}>
                Editar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaUsuarios;

