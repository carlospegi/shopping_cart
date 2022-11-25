import React from 'react'
import Nike from '../../images/Nike.jpg'
import {Link} from 'react-router-dom'
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
                    <Link to="/">HOME</Link>
                </li>
                <li>
                   <Link to="/products" >Products</Link>
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
