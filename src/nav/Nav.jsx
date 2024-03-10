import React from 'react'
import './nav.css'

export default function Nav () {
  return (
    <header className='cabecera'>
      <h1 className='cabecera__titulo'>GowPlantillas</h1>
      <nav className='navegacion'>
        <ul className='navegacion__lista'>
          <li className='list__element'><a href='#'>Home</a></li>
          <li className='list__element'><a href='#'>Catalogo</a></li>
          <li className='list__element'><a href='#'>Contacto</a></li>
          <li className='list__element'><a href='#'>Inicio Sesion</a></li>
        </ul>
      </nav>
    </header>
  )
}
