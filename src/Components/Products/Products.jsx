import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Context/Context'
import './Products.css'

const Products = () => {
    //useState: Inicio la constante products con el valor de un array vacío
    const [products, setProducts] = useState([])
    const {cart, setCart} = useContext(Context)

    //useEffect: Modifico el valor inicial de products 
    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }, [])

    const buyProducts = (product) => {
        setCart([...cart, product])
    }

    return products.map((product) => {
        return (
            <div className='card' key={product.id}>
                <img src={product.img} alt="Img-Product" />
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <button onClick={() => buyProducts(product)}>Agregar al carrito</button>
            </div>
        )
    })
}

export default Products
