import React from 'react'
import ComponenteHeader from '../components/ComponenteHeader/ComponenteHeader'
import ComponenteFooter from '../components/ComponenteFooter/ComponenteFooter'
import MostrarTareas from '../components/MostrarTareas/MostrarTareas'
import RegistrarTareas from '../components/Registra-ResponderTareas/RegistrarTareas'

function PaginaTareasP() {
  return (
    <div>
      <ComponenteHeader/>
      <MostrarTareas/>
      <RegistrarTareas/>
      <ComponenteFooter/>
    </div>
  )
}

export default PaginaTareasP
