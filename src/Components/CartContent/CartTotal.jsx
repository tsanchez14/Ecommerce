import React from 'react'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

const CartTotal = () => {
    const {cart} = useContext(Context)
    const total = cart.reduce((acumulador, elemento) => acumulador + elemento.price * quanty)
    
  return (
    <div>
      
    </div>
  )
}

export default CartTotal
