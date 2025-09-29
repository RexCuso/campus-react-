import React, { useEffect, useState } from 'react'
import ServiciosUsuarios from '../../servers/ServiciosUsuarios'
import ServiciosMateria from '../../servers/ServiciosMateria'
import ServiciosRespuestas from'../../servers/ServciosRespuestas'

function ResponderTareas() {
    const [TituloR,setTituloR] = useState("")
    const [AreaR,setAreaR] =  useState("")

    const BTguardar = async () => {
        if (!TituloR.trim() && !AreaR.trim())return;
        const nuevoTitulo ={tituloTex: TituloR};
        const nuevaRespuesta ={respuestaTex: AreaR};

        try {
        await ServiciosRespuestas
        .postRespuestas(nuevoTitulo,nuevaRespuesta);
        console.log('Respuesta guardada :)');
        setTituloR('');
        setAreaR('');
        
        } catch (error) {
        console.error('PELIGROOOO, hubo error al guardar la tarea :', error);
        }  
    }    

  return (
    <div>
        {/* area en la cual se pondran ingresar las res puestas en json, ForResp = Formulario Respuestas */}
      <label htmlFor="ForResp">Responder Tareas</label>
      <div id='ForResp'>
        {/* TiResp = Titulo Respuestas */}
        <label htmlFor="TiResp">Titulo  de la tarea a responder</label><br />
        <input type="text" id='TiResp' value={TituloR} onChange={(e) => setTituloR(e.target.value)}/><br />
        {/* ArResp = area Respuestas */}
        <label htmlFor="ArResp">Area De Respuesta</label>
        <input type="text" id='ArResp'value={AreaR} onChange={(e) => setAreaR(e.target.value)}/>
      </div>

    </div>
  )
}

export default ResponderTareas
