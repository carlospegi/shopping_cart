import React, { useContext } from 'react'
import Nike from '../../images/Nike.jpg'
import {Link} from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'
import { BsFillCartCheckFill } from "react-icons/bs";

const Header = () => {

    const context = useContext(DataContext);
    const [menu, setMenu]= context.menu
const [cart] = context.cart
const toggleMenu=()=>{
    setMenu(!menu)
}
    return (

        <header className='flex top-0 left-0 right-0  justify-around fixed mb-11 bg-opacity-50 bg-teal-200 w-full  '>
            <Link to="/">
                <div>
                    <img src={Nike} alt="logo" width={150}></img>
                </div>
            </Link>

            <ul className=' flex flex-col w-[80%] items-center md:flex-row justify-evenly'>
                <li className='text-[12px] bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 border border-blue-700 rounded md:text-[18px]'>
                    <Link to="/">Home</Link>
                </li>
                <li className='text-[12px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded md:text-[18px]'>
                   <Link to="/products" >Products</Link>
                </li>
            </ul>
            <div className='flex justify-center items-center  w-8 relative mr-8 ' onClick={toggleMenu}>
   
            <BsFillCartCheckFill  className=' w-6 h-6 md:w-10 md:h-10'  style={{ color: 'blue', size: '50px'}} />
                <span className='absolute top-7 left-5  bg-red-600 rounded-full text-gray-50 px-1.5 font-bold text-sm md:text-lg'>{cart.length}</span>
            </div>

        </header>

    )
}

export default Header
