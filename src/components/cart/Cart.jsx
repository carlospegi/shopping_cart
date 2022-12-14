import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { FaWindowClose } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
const Cart = () => {
    const context = useContext(DataContext);
    const [menu, setMenu] = context.menu
    const [cart, setCart] = context.cart
    const [total, setTotal] = context.total
    const toggleMenu = () => {
        setMenu(!menu)
    }
    /*    const show1 = menu ? 'carts show' : 'carts'
       const show2 = menu ? 'cart show' : 'cart' */


    const lessCart = (id) => {
        cart.forEach(item => {
            if (item.id === id) {
                if(item.cantidad >= 1 ){

                    item.cantidad === 1 ? item.cantidad = 0 : item.cantidad -= 1
                }
            }
          
            setCart([...cart])
        })
    }
    const moreCart = (id) => {
        cart.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1
            }
       
            setCart([...cart])
        })
    }

    const deleteCart = (id) => {
        if (window.confirm(" Quieres Eliminar producto ?")) {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }




    return (
        <div className={menu ? 'fixed top-0 left-0 w-full h-full pb-5 z-[200] bg-black bg-opacity-50  ' : 'hidden'}>

            <div className='fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[85%] h-[80%]  rounded-lg overflow-x-scroll bg-slate-50 font-semibold md:w-[60%]' >
                <div className='cart__close' onClick={toggleMenu}>
                    <FaWindowClose className='w-11 h-11 ml-auto p-2' />
                </div>
                <h2 className='text-center   text-gray-500  text-[18px]  md:text-[18px]'>Your Cart</h2>
                <div className='w-[90%] m-auto'>

                    <div className='flex justify-center items-center h-11' >{cart.length < 1 ? <h2>Cart Empty</h2> : ''}</div>

                    {


                        cart.map(item => (
                            <div key={item.id} className="mb-3 text-[16px]  py-3 md:flex mt-4 w-full shadow-lg">
                                <div className='flex w-[100%] md:w-[95%]' >
                                    <img className='w-28 xs:m-auto' src={item.image} alt="img cart" />
                                    <div className='flex align-center flex-col'>

                                        <h3 className='text-[16px] md:text-[18px] w-full leading-5 mb-1'>{item.title}</h3>
                                        <p className='price'> ${item.price}</p>
                                    </div>
                                </div>
                                <div className='w-[90%] flex  md:w-[50%] items-center p-0'>
                                    <div className='flex w-32 justify-around items-center mr-3 text-green-800 text-xl md:block ml-[40%] '>
                                        <FaArrowCircleUp onClick={() => { moreCart(item.id) }}/>
                                        <p className='text-gray-800 md:my-1'>{item.cantidad}</p>
                                        <FaArrowCircleDown onClick={() => { lessCart(item.id) }} />

                                    </div>
                                    <div className="remove__item" onClick={() => deleteCart(item.id)} >
                                        <FaTrashAlt className=' text-rose-600  flex items-center md:justify-center align-center md:w-5 h-6' />
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                    <div className='text-[18px] mt-4 ' >
                        <h3>Total : ${total}</h3>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded-full mt-4' >Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
