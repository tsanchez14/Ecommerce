import React from 'react'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

const CartElements = () => {
    const {cart} = useContext(Context)

    return cart.map((product) => {
        return (
            <div className='product-card-container' key={product.id}>
                <img src={product.img} alt="Img-Product" />
                <h3>{product.name}</h3>
                <h1>{product.price}</h1>
            </div>
          )
    })
}

export default CartElements
