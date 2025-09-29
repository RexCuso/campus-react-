import React from 'react'
import PurpleRing from './PurpleStarRing.webp'
import logo from './letras blancas-Logo.png'
import './ComponenteHeader.css'

function ComponenteHeader() {
  return (
    <div id='areaH'>
        <h1>Header</h1>
        <button id='Logo'><img src={logo} alt="Logo" /></button>
    </div>
  )
}

export default ComponenteHeader
