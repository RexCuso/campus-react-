import React from 'react'
import ComponenteHeader from '../components/ComponenteHeader/ComponenteHeader'
import ComponenteFooter from '../components/ComponenteFooter/ComponenteFooter'
import MostrarTareas from '../components/MostrarTareas/MostrarTareas'
import ResponderTareas from '../components/Registra-ResponderTareas/ResponderTareas'

function PaginaTareasE() {
  return (
    <div>
      <ComponenteHeader/>
      <MostrarTareas/>
      <ResponderTareas/>
      <ComponenteFooter/>
    </div>
  )
}

export default PaginaTareasE
