import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'

const Cart = () => {
    const context = useContext(DataContext);
    const [menu, setMenu] = context.menu
    const [cart, setCart] = context.cart
    const [total, setTotal] = context.total
    const toggleMenu = () => {
        setMenu(!menu)
    }
    const show1 = menu ? 'carts show' : 'carts'
    const show2 = menu ? 'cart show' : 'cart'


    const lessCart = (id) => {
        cart.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 0 : item.cantidad -= 1
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
        <div className={show1}>
            <div className={show2}>
                <div className='cart__close' onClick={toggleMenu}>
                    <box-icon name="x" ></box-icon>
                </div>
                <h2>Your Cart</h2>
                <div className='cart__center'>
                    {

                        cart.length === 0 ? <h2>Cart empty</h2> : 
                        
                        cart.map(item => (
                            <div key={item.id} className="cart__item">
                                <img src={item.image} alt="" />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p className='price'>{item.price}</p>
                                </div>
                                <div>
                                    <box-icon onClick={()=>{moreCart(item.id)}} name="up-arrow" type="solid" ></box-icon>
                                    <p className='count'>{item.cantidad}</p>
                                    <box-icon onClick={()=>{lessCart(item.id)}} name="down-arrow" type="solid" ></box-icon>

                                </div>
                                <div className="remove__item" onClick={() => deleteCart(item.id)} >
                                    <box-icon name="trash" type="solid" ></box-icon>

                                </div>
                            </div>
                        ))
                        
                    }
                    <div className='cart__footer' >
                        <h3>Total : ${total}</h3>
                        <button className='btn' >Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
