import React, { useState } from 'react'
import axios from 'axios'

const CrearUsuarios = () => {

  const valorInicial = {
      nombre: '',
      apellido: '',
      edad:18,
      telefono:0,
      correo:''
  }

  const [usuario, setUsuario] = useState(valorInicial)

  const capturarDatos = (e)=>{
      const {name, value} = e.target
      setUsuario({...usuario, [name]: value})
  }

  const guardarDatos = async(e)=>{
    e.preventDefault()
    //console.log(usuario);

    //crear la logica para la peticon post
    const newUser = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo
    }

    await axios.post('http://localhost:4000/api/usuarios', newUser) 
 
    setUsuario({...valorInicial})
  }

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarDatos} >
            <h2 className='text-center'>CrearUsuario</h2>
          <div className="mb-3">
            <label>Nombre:</label>

            <input
              type="text"
              className="form-control"
              placeholder="ingresar el nombre del usuario"
              required
              name='nombre'
              value={usuario.nombre}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Apellido:</label>

            <input
              type="text"
              className="form-control"
              placeholder="ingresar el apellido del usuario"
              required
              name='apellido'
              value={usuario.apellido}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Edad:</label>

            <input
              type="number"
              className="form-control"
              placeholder="ingresar la edad del usuario"
              required
              name='edad'
              value={usuario.edad}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Telefono:</label>

            <input
              type="number"
              className="form-control"
              placeholder="ingresar el telefono del usuario"
              required
              name='telefono'
              value={usuario.telefono}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Correo:</label>

            <input
              type="text"
              className="form-control"
              placeholder="ingresar correo del usuario"
              required
              name='correo'
              value={usuario.correo}
              onChange={capturarDatos}
            />
          </div>

          <button className="btn btn-primary form-control">Guardar Usuario</button>
        </form>
      </div>
    </div>
  ); 
} 

export default CrearUsuarios  