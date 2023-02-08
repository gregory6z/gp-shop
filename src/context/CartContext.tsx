import { createContext, ReactNode, useState } from "react"

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface ContextData {
  addToCart: (product: IProduct) => void
  removeToCart: (product: IProduct) => void
  cartItems: IProduct[]
  cartTotal: number
  checkIfCartItemAlreadyExists: (productId: string) => boolean
}
export const CartContext = createContext({} as ContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product])
  }

  function checkIfCartItemAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  function removeToCart(product: IProduct) {
    setCartItems((state) => state.filter((item) => item.id !== product.id))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeToCart,
        cartTotal,
        checkIfCartItemAlreadyExists,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
