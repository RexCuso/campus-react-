import React, { useEffect, useState } from 'react'
import ServiciosTareas from '../../servers/ServiciosTareas'
import ServiciosRespuestas from'../../servers/ServciosRespuestas'

function ResponderTareas() {
    const [tareas, setTareas] = useState([])
    const [tareaSeleccionada, setTareaSeleccionada] = useState('')
    const [AreaR,setAreaR] =  useState("")
    
    /* copiada directamente del componente MostrarTareas porque aqui tambila ocupo..
    en realida ocupo un 50% de ese componente */
    useEffect(() => {cargarTareas();},[]);

    /* la practicamente la misma que uso en mostras tareas con un pequeño cambio, puedes verlo? */
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

        if (!AreaR.trim() || !tareaSeleccionada || !idUsuario){
          alert('Datos faltantes, recuerda elegir la tarea que vas a responder ')
          return;
        }
          
        const nuevaRespuesta ={
          idTarea: tareaSeleccionada,
          idUsuario: idUsuario,
          respuestaTex: AreaR
        };

        try {
        await ServiciosRespuestas
        .postRespuestas(nuevoTitulo,nuevaRespuesta);
        console.log('Respuesta guardada :)');
        setAreaR('');
        setTareaSeleccionada('')
        } catch (error) {
        console.error('PELIGROOOO, hubo error al guardar la tarea :', error);
        }  
    }    

  return (
    /* area en la cual se pondran ingresar las res puestas en json, TiTar = Titulo Tareas y ArResp = area Respuestas  */

    <div>
        <h2>Responder Tareas</h2>
       
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
      <textarea id="ArResp" value={AreaR} onChange={(e) => setAreaR(e.target.value)}  rows="4"  cols="50"/>
        <br/><br/>
        <button onClick={BTguardar}>Enviar</button>
    </div>
  )
}

export default ResponderTareas
