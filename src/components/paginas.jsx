import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './inicio/Inicio'
import ProductDetail from './products/ProductDetail'
import ProductList from './products/ProductList'

const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Routes>
    </section>
  )
}

export default Paginas
