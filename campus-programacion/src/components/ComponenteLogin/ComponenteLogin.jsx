import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ComponenteLogin.css'
import ServiciosUsuarios from '../../servers/ServiciosUsuarios'
function ComponenteLogin() {
  const [nombre,SetNombre] = useState("")
  const [contraseña,setContraseña] = useState("")
  
  const navigate=useNavigate()

  
   const VerificarUser = async () => {
    try {
      const usuarios = await ServiciosUsuarios.getUsuarios()
      localStorage.setItem("idUsuario", usuarioEncontrado.id);
      console.log(usuarios);
      
      const usuarioEncontrado = usuarios.find(
        user => user.nombre === nombre && user.contraseña === contraseña
      )

      if (!usuarioEncontrado) {
        console.log("Tus credenciales no son correctas ")
        return
      }

      if (usuarioEncontrado.tipo === "E") {
        localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado))
        console.log("Tus credenciales son correctas",usuarioEncontrado)
        navigate("/MateriaE")
      } else if (usuarioEncontrado.tipo === "P") {
        localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado))
        console.log("Tus credenciales son correctas")
        navigate("/MateriaP")
      } else {
        console.log("Tipo de usuario no reconocido")
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error)
    }
  }
  return (
    <div className='cuerpo'>
      <h1>Loging De Acceso</h1>
        {/* InNom = ingresar nombre*/}
        <label htmlFor="InNom">Nombre</label><br />
        <input  type="text" id='InNom' value={nombre} onChange={(e) => SetNombre(e.target.value)}/><br />
        {/* InCon = ingresar contraseña */}
        <label htmlFor="InCon">Contraseña</label><br />
        <input type="password" id='InCon' value={contraseña} onChange={(e) => setContraseña(e.target.value)}/><br />
        <button onClick={VerificarUser}>Entrar</button>
    </div>
  )
}

export default ComponenteLogin
