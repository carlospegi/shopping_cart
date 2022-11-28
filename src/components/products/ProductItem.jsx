import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import {Link} from 'react-router-dom'
const ProductItem = ({id, title, price, image, category}) => {

const context = useContext(DataContext);
const addCart = context.addCart
  return (
    <div className="product">
    <Link to={`/producto/${id}`}>
      <div className="product__img">
        <img src={image} alt="img" />
      </div>
    </Link>
    <div className="product__footer">
      <h1>{title}</h1>
      <p>{category}</p>
      <p className='price' >$ {price}</p>
    </div>
    <div className="button">
      <button className='btn' onClick={()=> addCart(id)} >Add Cart</button>
      <div>
        <Link to={`/product/${id}`}className='btn'>View</Link>
      </div>
    </div>
  </div> 
  )
}

export default ProductItem
