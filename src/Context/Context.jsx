import { createContext , useState } from "react";

export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const buyProducts = (product) => {
        const productRepeat = cart.find((item) => item.id === product.id)

        if(productRepeat){
            setCart(cart.map((item) => (item.id === product.id ? {...product, quanty: productRepeat.quanty + 1} : item)))
        }else{
            setCart([...cart, product])
        }
      }

    return(
        <Context.Provider value={{cart, setCart, buyProducts}}> 
            {children}
        </Context.Provider>
    )
}

export default ContextProvider