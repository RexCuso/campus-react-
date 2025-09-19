import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PaginaLoging from '../pages/PaginaLoging'

export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaLoging/>}/>
        </Routes>
      </Router>
    </div>
  )
}
