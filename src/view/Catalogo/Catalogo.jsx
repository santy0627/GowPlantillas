import React from 'react'
import './catalogo.css'
import Product from '../components/Products/Product'

export default function Catalogo () {
  return (
    <main className='catalogo'>
      <div className='products'>
        <Product title='hola' description='esto es una prueba para la pagina' />
        <Product title='hola' description='esto es una prueba para la pagina' />
        <Product title='hola' description='esto es una prueba para la pagina' />
        <Product title='hola' description='esto es una prueba para la pagina' />
        <Product title='hola' description='esto es una prueba para la pagina' />
        <Product title='hola' description='esto es una prueba para la pagina' />
      </div>
    </main>
  )
}
