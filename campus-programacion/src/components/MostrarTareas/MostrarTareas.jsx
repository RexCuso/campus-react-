import React, { useEffect,useState } from 'react'
import ServiciosUsuarios from '../../servers/ServiciosUsuarios'
import ServiciosTareas from '../../servers/ServiciosTareas'
import ServciosRespuestas from '../../servers/ServciosRespuestas';


function MostrarTareas() {
  const [InfoTareas, setInfoTareas] = useState([]);

  useEffect(() => {cargarTareas();},[]);

  const cargarTareas = async () => {
    try {
      const data = await ServicesConsultas.getTareas();
      setInfoTareas(data);
    } catch (error) {
      console.error('Error al obtener tareas:', error);
    }
    
  }

  return (
    <div>
      <label htmlFor="TR"></label>
      <div id='TR'>
        <ul>
            
            {InfoTareas.length === 0 ? (
              <li>No hay tareas</li>) :
                {/* el map aqui sera el encargado de imprimir la informacion guardada dentro del json  */} 
                (InfoTareas.map((item) => (
                  <li key={item.id}>
                    {item.titulo} 
                    {item.contenido} 
                  </li>))
                )
            }
          </ul>
      </div>
    </div>
  )
}

export default MostrarTareas
