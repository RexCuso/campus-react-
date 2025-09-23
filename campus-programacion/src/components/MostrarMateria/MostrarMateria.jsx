import React from 'react'
import ServiciosUsuarios from '../../servers/ServiciosUsuarios'
import ServiciosMateria from '../../servers/ServiciosMateria'

function MostrarMateria() {

  const llamarMaterias = async () => {
    if (condition) {
      
    } else if (condition) {
      
    }
    
  }

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

      </div>
    </div>
  )
}

export default MostrarMateria
