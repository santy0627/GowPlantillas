import React from 'react'
import './product.css'

export default function Product ({ title, description }) {
  return (
    <section className='product'>
      <aside>
        <h1 className='product__name'>{title}</h1>
        <p className='product__description'>{description}</p>
      </aside>
      <img src='' alt='img' width='300px' />
    </section>
  )
}
