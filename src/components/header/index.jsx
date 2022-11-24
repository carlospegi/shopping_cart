import React from 'react'
import Nike from '../../images/Nike.jpg'
const Header = () => {
    return (

        <header>
            <a href="!#">
                <div>
                    <img src={Nike} alt="logo" width={150}></img>

                </div>
            </a>

            <ul>
                <li>
                    <a href="!#">HOME</a>
                </li>
                <li>
                    <a href="!#">PRODUCTS</a>
                </li>
            </ul>
            <div className='cart' >
                <box-icon name='cart' ></box-icon>
                <span className='item__total' >0</span>
            </div>

        </header>

    )
}

export default Header
