import React from 'react'
import {Link} from 'react-router-dom'

import coverImage from '../../images/inicio.jpg'
const Inicio = () => {
  return (
    <div className=' md:pt-25 md:mt-28' >

<img className='w-full' src={coverImage} alt="inicio" />
    </div>
  )
}

export default Inicio
