import React from 'react'
import ComponenteHeader from '../components/ComponenteHeader/ComponenteHeader'
import ComponenteFooter from '../components/ComponenteFooter/ComponenteFooter'
import MostrarTareas from '../components/MostrarTareas/MostrarTareas'
import GestionarTareas from '../components/Registra-ResponderTareas/GestionarTareas'

function PaginaTareasP() {
  return (
    <div>
      <ComponenteHeader/>
      <MostrarTareas/>
      <GestionarTareas/>
      <ComponenteFooter/>
    </div>
  )
}

export default PaginaTareasP
