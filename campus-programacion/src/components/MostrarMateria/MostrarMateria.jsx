import React, { useEffect, useState } from 'react'
import './MostrarMateria.css'
import ServiciosUsuarios from '../../servers/ServiciosUsuarios'
import ServiciosMateria from '../../servers/ServiciosMateria'


function MostrarMateria() {
  /* Constantes para traer la informacion del json materias */
  const [materias, setMaterias] = useState([]);
  const [materiaElegida, setMateriaElegida] = useState(null);
  
  /* El useEffect para darle a "datos" el valor traido del json */
  useEffect(() => {
    const obtenerMaterias = async () => {
    try {
      const datos = await ServiciosMateria.getMaterias();
      setMaterias(datos);
      /* en caso de error este mesaje saltara en la consola */
    }catch (error) {
      console.error('No se puedo octener la materia ', error);
    }
  };

    obtenerMaterias();
  },[]);
/* con esta constante/funcion se filtran las materias del json segun el id de los botones,
tambien se podran el valor de la materia filtrada en "MateriaElegida" para imprimirlo  */
const TraerM = (Event) => {
  const idBoton = Event.target.id;
  const materiaFiltrada = materias.find(materia => materia.id === idBoton);
  setMateriaElegida(materiaFiltrada)
};

  return (
    <div>
      {/* la side bar con los botones  */}
      <aside id='MenuTareas'>
        <ul>
          <li><button className='Bt' id='M1' onClick={TraerM}>Pasos de estrutura</button></li>
          <li><button className='Bt' id='M2' onClick={TraerM}>Iniciar un html y conecion</button></li>
          <li><button className='Bt' id='M3' onClick={TraerM}>Etiquetas importantes</button></li>
          <li><button className='Bt' id='M4' onClick={TraerM}>Las constantes de js</button></li>
          <li><button className='Bt' id='M5' onClick={TraerM}>Funciones variadas js</button></li>
          <li><button className='Bt' id='M6' onClick={TraerM}>Ejemplos de css</button></li>
        </ul>
      </aside >
      {/* El area donde se imprimira la materia filtrada, ArMa = area materia  */}
      <div className='ArMa'>
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
