import './CartContent.css'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'



const ButtonBuy = () => {
    initMercadoPago('YOUR_PUBLIC_KEY', {
        locale: "es-AR",
    });
  return (
    <div className='btn'>
      <button>Comprar</button>
      <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />
    </div>
  )
}

export default ButtonBuy
