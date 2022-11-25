import React from 'react'
import {Link} from 'react-router-dom'

import coverImage from '../../images/inicio.jpg'
const Inicio = () => {
  return (
    <div className='inicio' >
<Link to="/">
  <h1>Inicio</h1>
</Link>
<Link to="/products">
  <h1>Products</h1>
</Link>
<img src={coverImage} alt="inicio" />
    </div>
  )
}

export default Inicio
