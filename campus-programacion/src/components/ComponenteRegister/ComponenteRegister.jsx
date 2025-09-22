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
        <input  type="text" id='inNombre'/><br />
        <label htmlFor="inCorreo">Contraseña</label><br />
        <input type="correo" id='inCorreo'/><br />
        <label htmlFor="inContraseña">Contraseña</label><br />
        <input type="password" id='inContraseña'/><br />
        <label htmlFor="inTelefono">Contraseña</label><br />
        <input type="password" id='inTelefono'/><br />
        <button>Entrar</button>
    </div>
  )
}

export default ComponenteRegister
