
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  const handleEliminarUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/usuarios/${id}`);
      setLista(lista.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  return (
    <div className="row">
      {lista.map((usuario) => (
        <div className="col-md-4 p-2" key={usuario.id}>
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
                onClick={() => handleEliminarUsuario(usuario.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaUsuarios;
