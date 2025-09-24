import React, { useEffect, useState } from 'react'
import ServiciosUsuarios from '../../servers/ServiciosUsuarios'
import ServiciosMateria from '../../servers/ServiciosMateria'


function MostrarMateria() {
  /* Constantes para traer la informacion del json materias */
  const [materias, setMaterias] = useState([]);
  const [materiaElegida, setMateriaElegida] = useState([]);
  
  useEffect(() => {
    const obtenerMaterias = async () => {
    try {
      const datos = await ServiciosMateria.getMaterias();
      setMaterias(datos);
    }catch (error) {
      console.error('No se puedo octener la materia ', error);
    }
  };

    obtenerMaterias();
  },[]);

const TraerM = (Event) => {
  const idBoton = Event.target.id;
  const materiasFiltradas = materias.find(materias => materias.id === idBoton);
  setMateriaElegida(materiasFiltradas)
};

  return (
    <div>
      <aside>
        <ul>
          <li><button className='Bt' id='TM1' onClick={TraerM}>Pasos de estrutura</button></li>
          <li><button className='Bt' id='TM2' onClick={TraerM}>Iniciar un html y conecion</button></li>
          <li><button className='Bt' id='TM3' onClick={TraerM}>Etiquetas importantes</button></li>
          <li><button className='Bt' id='TM4' onClick={TraerM}>Las constantes de js</button></li>
          <li><button className='Bt' id='TM5' onClick={TraerM}>Funciones variadas js</button></li>
          <li><button className='Bt' id='TM6' onClick={TraerM}>Ejemplos de css</button></li>
        </ul>
      </aside>

      <div className='areaMateria'>
        {materiaElegida ? (
          <div>
            <h2>{materiaElegida.titulo}</h2>
            <p>{materiaElegida.contenido}</p>
          </div>
        ):(
          <p>Elige Una Materia</p>
        )}
      </div>
    </div>
  )
}

export default MostrarMateria
