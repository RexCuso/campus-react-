import React, { useEffect, useState } from 'react'
import ServiciosTareas from '../../servers/ServiciosTareas'
import './GestionarTareas.css'

function GestionarTareas() {
  const [tareas, setTareas] = useState([])
  const [titulo, setTitulo] = useState("")
  const [contenido, setContenido] = useState("")
  const [modoEdicion, setModoEdicion] = useState(false)
  const [idEditando, setIdEditando] = useState(null)

  useEffect(() => {
    cargarTareas()
  }, [])

  const cargarTareas = async () => {
    try {
      const data = await ServiciosTareas.getTareas()
      setTareas(data)
    } catch (error) {
      console.error("Error al cargar tareas:", error)
    }
  }

  const limpiarFormulario = () => {
    setTitulo("")
    setContenido("")
    setModoEdicion(false)
    setIdEditando(null)
  }

  const manejarGuardar = async () => {
    if (!titulo.trim() || !contenido.trim()) {
      alert("Por favor, completa todos los campos.")
      return
    }

    const nuevaTarea = { titulo, contenido }

    try {
      if (modoEdicion) {
        await ServiciosTareas.putTareas(idEditando, nuevaTarea)
      } else {
        await ServiciosTareas.postTareas(nuevaTarea)
      }

      cargarTareas()
      limpiarFormulario()
    } catch (error) {
      console.error("Error al guardar la tarea:", error)
    }
  }

  const manejarEliminar = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")
    if (!confirmar) return

    try {
      await ServiciosTareas.deleteTareas(id)
      cargarTareas()
    } catch (error) {
      console.error("Error al eliminar la tarea:", error)
    }
  }

  const manejarEditar = (tarea) => {
    setTitulo(tarea.titulo)
    setContenido(tarea.contenido)
    setModoEdicion(true)
    setIdEditando(tarea.id)
  }

  return (
    <div className="gestionar-tareas">
      <h2>{modoEdicion ? "Editar Tarea" : "Crear Nueva Tarea"}</h2>
      
      <label htmlFor="tituloTarea">Título:</label><br />
      <input type="text" id="tituloTarea" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
      <br />

      <label htmlFor="contenidoTarea">Contenido:</label><br />
      <textarea id="contenidoTarea" className="input-textarea" value={contenido} onChange={(e) => setContenido(e.target.value)}/>
      <br />

      <button onClick={manejarGuardar}>{modoEdicion ? "Guardar Cambios" : "Crear Tarea"}</button>
      {modoEdicion && <button onClick={limpiarFormulario}>Cancelar</button>}

      <hr />

      <h3>Tareas Registradas</h3>
      {tareas.length === 0 ? (
        <p>No hay tareas registradas.</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id} className="tarea-item">
              <div className="tarea-header">
                <span className="tarea-titulo">{tarea.titulo}</span>
                <span className="tarea-contenido">{tarea.contenido}</span>
              </div>
              <div className="tarea-acciones">
                <button onClick={() => manejarEditar(tarea)}>Editar</button>
                <button onClick={() => manejarEliminar(tarea.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GestionarTareas