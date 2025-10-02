import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PaginaLoging from '../pages/PaginaLoging'
import PaginaRegister from '../pages/PaginaRegister'
import PaginaMateriaE from '../pages/PaginaMateriaE'
import PaginaMateriaP from '../pages/PaginaMateriaP'
import PaginaTareasE from '../pages/PaginaTareasE'
import PaginaTareasP from '../pages/PaginaTareasP'
import PrivateRoute from './PrivateRoutes';

export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaLoging/>}/>
          <Route path='/Registro' element={<PaginaRegister/>}/>

          <Route path='/MateriaE' element={<PrivateRoute allowedRoles={["E"]}> <PaginaMateriaE/> </PrivateRoute>}/>
          <Route path='/TareasE'  element={<PrivateRoute allowedRoles={["E"]}> <PaginaTareasE/> </PrivateRoute>}/>

          <Route path='/MateriaP' element={<PrivateRoute allowedRoles={["P"]}> <PaginaMateriaP/> </PrivateRoute>}/>
          <Route path='/TareasP'  element={<PrivateRoute allowedRoles={["P"]}> <PaginaTareasP/> </PrivateRoute>}/>
        </Routes>
      </Router>
    </div>
  )
}
