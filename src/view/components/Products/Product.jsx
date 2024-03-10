import React from 'react'
import './product.css'
import Btn from '../Button/Btn'

export default function Product ({ title, description }) {
  return (
    <section className='product'>
      <aside>
        <div className='txt'>
          <h1 className='product__name'>{title}</h1>
          <p className='product__description'>{description}</p>
        </div>
        <Btn text='Comprar' />
      </aside>
      <img src={`/src/assets/${title}.png`} alt='img' width='300px' height='100%' />
    </section>
  )
}
