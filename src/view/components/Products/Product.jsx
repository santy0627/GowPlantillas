import React from 'react'
import './product.css'

export default function Product ({ title, description }) {
  return (
    <section className='product'>
      <h1 className='Product__name'>{title}</h1>
      <p className='product__description'>{description}</p>
    </section>
  )
}
