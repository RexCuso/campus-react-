import React from 'react'
import ComponenteHeader from '../components/ComponenteHeader/ComponenteHeader'
import ComponenteFooter from '../components/ComponenteFooter/ComponenteFooter'
import MostrarMateria from '../components/MostrarMateria/MostrarMateria'
import GestionarTareas from '../components/Registra-ResponderTareas/GestionarTareas'

function PaginaMateriaP() {
  return (
    <div>
      <ComponenteHeader/>
      <MostrarMateria/>
      <GestionarTareas/>
      <ComponenteFooter/>
    </div>
  )
}

export default PaginaMateriaP
