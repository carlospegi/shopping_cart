import React, { useContext } from 'react'
import Nike from '../../images/Nike.jpg'
import {Link} from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'

const Header = () => {

    const context = useContext(DataContext);
    const [menu, setMenu]= context.menu
const [cart] = context.cart
const toggleMenu=()=>{
    setMenu(!menu)
}
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
            <div className='cart-'  onClick={toggleMenu}>
                <box-icon name='cart' ></box-icon>
                <span className='item__total' >{cart.length}</span>
            </div>

        </header>

    )
}

export default Header
