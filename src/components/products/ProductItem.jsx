import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { Link } from 'react-router-dom'
const ProductItem = ({ id, title, price, image, category }) => {

  const context = useContext(DataContext);
  const addCart = context.addCart
  return (
    <div className="grid  md:flex flex-col gap-2 pt-14 px-2 text-xs md:text-sm grid-cols-3 shadow-lg">
      <Link to={`/producto/${id}`}>
        <div className="border-solid border-2 border-sky-500 w-[110px] md:w-full mr-2">
          <img className='w-[110px] md:w-full ' src={image} alt="img" />
        </div>
      </Link>
      <div className="">
        <h1 className='font-bold' >{title}</h1>
        <p className='font-medium'>{category}</p>
        <p className='font-semibold' >$ {price}</p>
      </div>
      <div className="md:flex items-center gap-2">
        <button className='my-2 bg-sky-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded' onClick={() => addCart(id)} >Add Cart</button>
        <div>
          <Link to={`/product/${id}`} className='bg-purple-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>View</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
