import { useContext } from 'react'
import { Context } from '../../Context/Context'
import CartItemCounter from './CartItemCounter'

const CartElements = () => {
    const {cart, setCart} = useContext(Context)
    const deleteProducts = (id) => {
      const foundId = cart.find((element) => element.id === id)
      const newCart = cart.filter((element) => {
        return element !== foundId
      })
      setCart(newCart)
    }

    return cart.map((product) =>{
        return (
            <div className='product-card-container' key={product.id}>
              <img src={product.img} alt="product-card" />
              <h3>{product.name}</h3>
              <CartItemCounter product={product}/>
              <h4>{product.price * product.quanty}</h4>
              <button onClick={() => deleteProducts(product.id)} className='cart-delete-product'>Eliminar</button>
            </div>
          )
        
    })
}

export default CartElements
