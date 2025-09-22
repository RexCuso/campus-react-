import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PaginaLoging from '../pages/PaginaLoging'
import PaginaRegister from '../pages/PaginaRegister'
import PaginaMateriaE from '../pages/PaginaMateriaE'
export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaLoging/>}/>
          <Route path='/Registro' element={<PaginaRegister/>}/>
          <Route path='/Material' element={<PaginaMateriaE/>}/>
        </Routes>
      </Router>
    </div>
  )
}
