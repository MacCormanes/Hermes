'use client'

import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../context/products.context'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ui/ProductCard'


const Shop = () => {
    const {products} = useContext(ProductsContext)
  return (
    <div>
        <Navbar />
        {products.map((product) => (
            <div key={product.id}>
                <ProductCard product={product} key={product.id} />
            </div>
        ))}
    </div>
  )
}

export default Shop