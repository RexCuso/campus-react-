import React, { useEffect, useState } from 'react'
import ServiciosRespuestas from '../../servers/ServciosRespuestas'
import ServiciosTareas from '../../servers/ServiciosTareas'

function ComponenteEditarRespuestas() {
  const [respuestas, setRespuestas] = useState([])
  const [tareas, setTareas] = useState([])
  const [modoEdicion, setModoEdicion] = useState(null)
  const [textoEditado, setTextoEditado] = useState("")

  const idUsuario = localStorage.getItem("idUsuario")

  /* esta pequeña linea evitara que la funcion(constante) se "llame" de aqui al infinito  */
  useEffect(() => {cargarRespuestas()cargarTareas() },[])

  /* con esto llamamos las respuestas guardadas en json */
  const cargarRespuestas = async () => {
    try {
      const data = await ServiciosRespuestas.getRespuestas()
      /* este filter se hacegurara que el el usuario solo pueda ver sus respuestas  */
      const respuestasUsuario = data.filter(r => r.idUsuario === idUsuario)
      setRespuestas(respuestasUsuario)
    } catch (error) {
      console.error("Error al cargar respuestas:", error)
    }
  }
    /* esta funcion (constante) se encargara de llamar las tares desde el json y las pondra en data..... 
    si esto se esta repitiendo */
  const cargarTareas = async () => {
    try {
      const data = await ServiciosTareas.getTareas()
      setTareas(data)
    } catch (error) {
      console.error("Error al cargar tareas:", error)
    }
  }
  /* aqui buscamos el titulo de las tarea por medio del id que tienen  */
  const obtenerTituloTarea = (idTarea) => {
    const tarea = tareas.find(t => t.id === idTarea)
    return tarea ? tarea.titulo : "Tarea desconocida"
  }

  /* esta funcion (constante) se encargara de permitirnos borrar las respuestas */
  const eliminarRespuesta = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar esta respuesta?")
    if (!confirmar) return

    try {
      await ServiciosRespuestas.deleteRespuestas(id)
      cargarRespuestas()
    } catch (error) {
      console.error("Error al eliminar la respuesta:", error)
    }
  }

  /* esta funcion (constante) se encargara de permitirnos el editar las respuesta  */
  const iniciarEdicion = (respuesta) => {
    setModoEdicion(respuesta.id)
    setTextoEditado(respuesta.respuestaTex)
  }
/* esta funcion (constante) se encargara de devolver setTextoEditado a un estado basio 
en caso de que no realisemo la edicion  */
  const cancelarEdicion = () => {
    setModoEdicion(null)
    setTextoEditado("")
  }

  /* aqui es donde se guardaran los cambio que realisemos dentro del json */
  const guardarEdicion = async (id) => {
    try {
      await ServiciosRespuestas.putRespuestas(id, {
        idUsuario,
        idTarea: respuestas.find(r => r.id === id)?.idTarea,
        respuestaTex: textoEditado
      })
      setModoEdicion(null)
      setTextoEditado("")
      cargarRespuestas()
    } catch (error) {
      console.error("Error al editar la respuesta:", error)
    }
  }

  return (
    <div>
      <h2>Mis Respuestas</h2>
      {respuestas.length === 0 ? (
        <p>No has respondido ninguna tarea todavía.</p>
      ) : (
        <ul>
          {respuestas.map(respuesta => (
            <li key={respuesta.id} style={{ marginBottom: '20px' }}>
              <strong>{obtenerTituloTarea(respuesta.idTarea)}</strong>
              {modoEdicion === respuesta.id ? (
                <div>
                  <textarea
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                    rows="4"
                    cols="50"
                  />
                  <br />
                  <button onClick={() => guardarEdicion(respuesta.id)}>Guardar</button>
                  <button onClick={cancelarEdicion}>Cancelar</button>
                </div>
              ) : (
                <div>
                  <p>{respuesta.respuestaTex}</p>
                  <button onClick={() => iniciarEdicion(respuesta)}>Editar</button>
                  <button onClick={() => eliminarRespuesta(respuesta.id)}>Eliminar</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ComponenteEditarRespuestas
