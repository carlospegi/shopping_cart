import React, { useContext } from 'react'

import { DataContext } from '../../context/DataProvider'
import ProductItem from './ProductItem'

const ProductList = () => {

const context = useContext(DataContext);
const [products ]= context.products
  return (
    <>
      <h1 className='title' >Products</h1>
      <div className=' py-10 mx-auto gap-2 border md:grid grid-cols-3  ' >
{
products.map(item=>(

    <ProductItem 
    key={item.id}
    id={item.id}
    title={item.title}
    price={item.price}
    image={item.image}
    category={item.category}
    count={item.cantidad}
     />
))
}
      </div>
    </>
  )
}

export default ProductList
