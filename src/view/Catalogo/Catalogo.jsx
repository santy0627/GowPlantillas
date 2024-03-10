import React from 'react'
import './catalogo.css'
import Product from '../components/Products/Product.jsx'
import { products } from '../products.js'

export default function Catalogo () {
  return (
    <main className='catalogo'>
      <div className='products'>
        {products && products.map(product =>
          <Product key={product.id} title={product.title} description={product.description} />
        )}
      </div>
    </main>
  )
}
