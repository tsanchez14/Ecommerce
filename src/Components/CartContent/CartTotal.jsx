import { useContext } from 'react'
import { Context } from '../../Context/Context'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios'
import { title } from 'process'

<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />

const CartTotal = () => {
    const {cart} = useContext(Context)
    const total = cart.reduce((acumulador, elemento) => acumulador + elemento.price * elemento.quanty, 0)
    initMercadoPago('YOUR_PUBLIC_KEY', {
      locale: "es-AR"
    });

    const createPreference = async () =>{
      try{
        const resonse = await axios.post("http://localhost:3000/create_preference", {
          title: "product.title",
          quanty: "product.quanty",
          price: "product.price",
        });
        const { id } = respose.data;
        return id;
      }catch (error) {
        console.log(error)
      };
      
    };

    return (
    <div className='cartTotal'>
      <h3>Total a pagar: {total}</h3>
      <button>Comprar</button>
      <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
    </div>
  )
}

export default CartTotal
