import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ComponenteRegister.css'
import ServiciosUsuarios from '../../servers/ServiciosUsuarios'

function ComponenteRegister() {
  const [nombre,SetNombre] = useState("")
  const [contraseña,setContraseña] = useState("")
  const [correo,setCorreo] = useState("")
  const [telefono,setTelefono] = useState("")
  const [error,setError] = useState("")
  const [exito, setExito] = useState("")
  const navigate=useNavigate()


  const ManejarRegistros = async () => {
    /* borrar los mensajes de error y exito anteriores */
    setError("")    
    setExito("")
    /* asegurarse que las contraseñas tengan mas de 8 carateres(Porque sera el minimo siempre es 8?) */
    if (contraseña.length < 8) {
      setError("La contraseña debe tener un minimo de 8 caracteres (porque no usas el nombre de una cancion).")
      return
    }
    try {
      /* llama a los usuarios del json para tenerlos en la constante Usuarios */
      const Usuarios = await ServiciosUsuarios.getUsuarios()

      /* revisa el json para hacegurarse que el nombre no se repita con otro ya existente */
      const nombreExiste = Usuarios.some(usuario => 
        usuario.nombre.toLowerCase() === nombre.toLowerCase()
      )

      if (nombreExiste) {
        setError("El nombre de usuario ya existe en el sitema, por favor piense en otro.")
        return
      }
      /* esta constante es para crear nuevos usuarios */
      const nuevoUsuario = {
        nombre,
        contraseña,
        correo,
        telefono
      }
      /* aqui guardamos nuevos usuarios en el...o informamos que hubo un error  */
      await ServiciosUsuarios.postUsuarios(nuevoUsuario)

      setExito("Registro exitoso, serar devolvido al loging en un momento")

      /* para devolvernos al login, si la ruta del login es "/" */
      setTimeout(() => {
        navigate("/") 
      }, 1000)

    } catch (error) {
      setError("No se pudo registrar el usuario en el sistema ")
    }
  }
  return (
    <div>
      <h1>Registro Para Usuarios</h1>
        <label htmlFor="inNombre">Nombre</label><br />
        <input  type="text" id='inNombre' value={nombre} onChange={(e) => SetNombre(e.target.value)}/><br />
        <label htmlFor="inCorreo">Correo</label><br />
        <input type="email" id='inCorreo' value={correo} onChange={(e) => setCorreo(e.target.value)}/><br />
        <label htmlFor="inContraseña">Contraseña</label><br />
        <input type="password" id='inContraseña' value={contraseña} onChange={(e) => setContraseña(e.target.value)}/><br />
        <label htmlFor="inTelefono">Telefono</label><br />
        <input type="number" id='inTelefono' value={telefono} onChange={(e) => setTelefono(e.target.value)}/><br />
        
        <button onClick={ManejarRegistros}>Registrar</button>

        {error && <p style={{color: 'red'}}>{error}</p>}
        {exito && <p style={{color: 'green'}}>{exito}</p>}
    </div>
  )
}

export default ComponenteRegister
