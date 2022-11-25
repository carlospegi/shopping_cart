import React from 'react'

const ProductItem = ({ title, price, image, category}) => {
  return (
    <div className="product">
    <a href="!#">
      <div className="product__img">
        <img src={image} alt="" />
      </div>
    </a>
    <div className="product__footer">
      <h1>{title}</h1>
      <p>{category}</p>
      <p className='price' >{price}</p>
    </div>
    <div className="button">
      <button className='btn' >Add</button>
      <div>
        <a href="!#" className='btn'>View</a>
      </div>
    </div>
  </div> 
  )
}

export default ProductItem
