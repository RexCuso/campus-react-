import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PaginaLoging from '../pages/PaginaLoging'
import PaginaRegister from '../pages/PaginaRegister'
import PaginaMateriaE from '../pages/PaginaMateriaE'
import PaginaMateriaP from '../pages/PaginaMateriaP'
export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaLoging/>}/>
          <Route path='/Registro' element={<PaginaRegister/>}/>
          <Route path='/MaterialE' element={<PaginaMateriaE/>}/>
          <Route path='/MaterialP' element={<PaginaMateriaP/>}/>
        </Routes>
      </Router>
    </div>
  )
}
