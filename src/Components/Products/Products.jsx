import React from 'react'
import { useState, useEffect } from 'react'
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, [])
    return products.map((product) => {
        return ( 
            <div className='card' key={product.id}>
              <img src={product.img} alt="img-product" />
              <h3>{product.name}</h3>
              <h4>{product.price}</h4>
              <button>Añade al carrito</button>
            </div>
          )
    })
    
}

export default Products
