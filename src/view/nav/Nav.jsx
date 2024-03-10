import React from 'react'
import './nav.css'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Nav () {
  return (
    <>
      <header className='cabecera'>
        <h1 className='cabecera__titulo'>GowPlantillas</h1>
        <nav className='navegacion'>
          <ul className='navegacion__lista'>
            <li className='list__element'><NavLink className='list__link' to='/'>Home</NavLink></li>
            <li className='list__element'><NavLink className='list__link' to='/Catalogo'>Catalogo</NavLink></li>
            <li className='list__element'><NavLink className='list__link' to='/Contacto'>Contacto</NavLink></li>
            <li className='list__element'><NavLink className='list__link' to='/Login'>Inicio Sesion</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  )
}
