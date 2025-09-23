import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ComponenteRegister.css'
import ServiciosUsuarios from '../../servers/ServiciosUsuarios'

function ComponenteRegister() {
  const [nombre,SetNombre] = useState("")
  const [contraseña,setContraseña] = useState("")
  const [correo,setCorreo] = useState("")
  const [telefono,setTelefono] = useState("")
  const navigate=useNavigate()

  return (
    <div>
      <h1>Loging De Acceso</h1>
        <label htmlFor="inNombre">Nombre</label><br />
        <input  type="text" id='inNombre' value={nombre} onChange={(e) => SetNombre(e.target.value)}/><br />
        <label htmlFor="inCorreo">Correo</label><br />
        <input type="correo" id='inCorreo' value={correo} onChange={(e) => setCorreo(e.target.value)}/><br />
        <label htmlFor="inContraseña">Contraseña</label><br />
        <input type="password" id='inContraseña' value={contraseña} onChange={(e) => setContraseña(e.target.value)}/><br />
        <label htmlFor="inTelefono">Telefono</label><br />
        <input type="number" id='inTelefono' value={telefono} onChange={(e) => setTelefono(e.target.value)}/><br />
        
        <button>Entrar</button>
    </div>
  )
}

export default ComponenteRegister
