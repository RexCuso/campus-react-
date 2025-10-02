import React, { useEffect,useState } from 'react'
import ServiciosTareas from '../../servers/ServiciosTareas'



function MostrarTareas() {
  /* la constante que cambia biara constantemente para mostrar las tareas(no es tu imaginacion, eso fue un chiste ) */
  const [InfoTareas, setInfoTareas] = useState([]);

  /* esta pequeña linea evitara que la funcion(constante) se "llame" de aqui al infinito  */
  useEffect(() => {cargarTareas();},[]);
/* esta funcion (constante) se encargara de llamar las tares desde el json y las pondra en data */
  const cargarTareas = async () => {
    try {
      const data = await ServiciosTareas.getTareas();
      setInfoTareas(data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  }

  return (
    /* y aqui se deveria renderisar todas las tareas disponibles en json....o decirte que no hay tareas */
    <div className="AreaTareas">
      <h2>Lista de Tareas</h2>
        <ul>
            {InfoTareas.length === 0 ? (
              <li>No hay tareas</li>) :
                (InfoTareas.map((item) => (
                  <li key={item.id}>
                    <strong>
                      {item.titulo}
                    </strong>:
                    {item.contenido} 
                  </li>
                ))
              )
            }
        </ul>
    </div>
  )
}

export default MostrarTareas
