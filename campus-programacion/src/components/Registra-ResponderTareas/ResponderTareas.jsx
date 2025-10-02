import React, { useEffect, useState } from 'react'
import ServiciosTareas from '../../servers/ServiciosTareas'
import ServiciosRespuestas from'../../servers/ServciosRespuestas'
import './ResponderTareas.css'

function ResponderTareas() {
    const [tareas, setTareas] = useState([])
    const [tareaSeleccionada, setTareaSeleccionada] = useState('')
    const [AreaR,setAreaR] =  useState("")
    const [mensaje, setMensaje] = useState({ tipo: "", texto: "" })

    /* copiada directamente del componente MostrarTareas porque aqui tambila ocupo..
    en realida ocupo un 50% de ese componente */
    useEffect(() => {cargarTareas();},[]);

    /*  practicamente la misma que uso en mostras tareas con un pequeño cambio, puedes verlo? */
    const cargarTareas = async () => {
        try {
          const data = await ServiciosTareas.getTareas();
          setTareas(data);
        } catch (error) {
          console.error('Error al obtener las tareas:', error);
        }
      }

    const BTguardar = async () => {

      const idUsuario = localStorage.getItem('idUsuario')

        if (!AreaR.trim() || tareaSeleccionada === "" || !idUsuario){
          setMensaje({ tipo: "error", texto: "Datos faltantes. Recuerda elegir la tarea y escribir tu respuesta." })
          return;
        }
          
        const nuevaRespuesta ={
          idTarea: tareaSeleccionada,
          idUsuario: idUsuario,
          respuestaTex: AreaR
        };

        try {
        await ServiciosRespuestas.postRespuestas(nuevaRespuesta);
         setMensaje({ tipo: "success", texto: "¡Respuesta guardada con éxito!" })
         setAreaR('');
         setTareaSeleccionada('');
        } catch (error) {
        setMensaje({ tipo: "error", texto: "Error al guardar la respuesta." })
        } 
        /* tras 3 segundos se esconden los mensajes(es que tienen pena) */
        setTimeout(() => setMensaje({ tipo: "", texto: "" }), 3000)
  }
       

  return (
    /* area en la cual se pondran ingresar las res puestas en json, TiTar = Titulo Tareas y ArResp = area Respuestas  */

    <div className="AreaResponder">
        <h2>Responder Tareas</h2>
       
        {mensaje.texto && (
          <div className={`AlertBox ${mensaje.tipo}`}>
            {mensaje.texto}
            <button onClick={() => setMensaje({ tipo: "", texto: "" })}>✖</button>
          </div>
        )}

        <label htmlFor="TiTar">Titulo  de la tarea a responder</label><br />
        <select id="TiTar" value={tareaSeleccionada} onChange={(e) => setTareaSeleccionada(e.target.value)}>
          <option value="">-- Selecciona una tarea --</option>
          {tareas.map((tarea) => (
          <option key={tarea.id} value={tarea.id}>
            {tarea.titulo}
          </option>
        ))}
        </select>
        <br/>
        
         <label htmlFor="ArResp">Área de Respuesta</label><br />
        <textarea id="ArResp" value={AreaR} onChange={(e) => setAreaR(e.target.value)}/>
        <br/><br/>
        <button onClick={BTguardar}>Enviar</button>
    </div>
  )
}

export default ResponderTareas
