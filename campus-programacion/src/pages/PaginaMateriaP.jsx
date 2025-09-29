import React from 'react'
import ComponenteHeader from '../components/ComponenteHeader/ComponenteHeader'
import ComponenteFooter from '../components/ComponenteFooter/ComponenteFooter'
import MostrarMateria from '../components/MostrarMateria/MostrarMateria'
import RegistrarTareas from '../components/Registra-ResponderTareas/RegistrarTareas'

function PaginaMateriaP() {
  return (
    <div>
      <ComponenteHeader/>
      <MostrarMateria/>
      <RegistrarTareas/>
      <ComponenteFooter/>
    </div>
  )
}

export default PaginaMateriaP
