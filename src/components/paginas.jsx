import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './inicio/Inicio'
import ProductList from './products/ProductList'
const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/products' element={<ProductList />} />
      </Routes>
    </section>
  )
}

export default Paginas
