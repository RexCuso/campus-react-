import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ComponenteLogin.css'
import ServiciosUsuarios from '../../servers/ServiciosUsuarios'
function ComponenteLogin() {
const [nombre,SetNombre] = useState("")
const [contraseña,setContraseña] = useState("")
const navigate=useNavigate()

function Contra (e) {
  setContraseña(e.target.value)
}

async function VerificarUser() {
        const respuesta = await ServiciosUsuarios.getUsers()  // RECUERDA UTILIZAR EL USEEFFECT, NO COMO LO HICE YO
        console.log(respuesta[0].nombre, respuesta[0].password);
        if (respuesta[0].nombre === nombre && respuesta[0].password === contraseña) {
            localStorage.setItem("usuario", JSON.stringify(respuesta[0]))
            console.log("Tus credenciales son correctas");
            navegar("/PaginaMateriaE")

        } else{
            console.log("Tus credenciales no son correctas");
            
        }
        
    }

  return (
    <div className='cuerpo'>
      <h1>Loging De Acceso</h1>
        <label htmlFor="inNombre">Nombre</label><br />
        <input  type="text" id='inNombre' value={nombre} onChange={(e) => SetNombre(e.target.value)}/><br />
        <label htmlFor="inContraseña">Contraseña</label><br />
        <input type="password" id='inContraseña' value={contraseña} onChange={Contra}/><br />
        <button>Entrar</button>
    </div>
  )
}

export default ComponenteLogin
