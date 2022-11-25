import React from 'react'
import Card from '../../images/img06.jpg'
const Cart = () => {
    return (
        <div className='carts'>
            <div className="cart">
                <div className='cart__close'>
                    <box-icon name="X" ></box-icon>
                </div>
                <h2>Your Cart</h2>
                <div className='cart__center'>
                    <div className="cart__item">
                        <img src={Card} alt="" />
                        <div>
                            <h3>Title</h3>
                            <p>Price</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid" ></box-icon>
                            <p>1</p>
                            <box-icon name="down-arrow" type="solid" ></box-icon>

                        </div>
                        <div className="remove__item">
                            <box-icon name="trash" type="solid" ></box-icon>

                        </div>
                    </div>
                    <div className='cart__footer' >
                        <h3>Total : $123</h3>
                        <button className='btn' >Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
