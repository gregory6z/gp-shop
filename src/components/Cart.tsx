import axios from "axios"
import { X } from "phosphor-react"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import {
  CartButtonClose,
  CartContainer,
  CheckoutButton,
} from "../styles/pages/app"
import { CartItem } from "./CartItem"

export function Cart({ onCartOpen }: any) {
  const { cartItems, cartTotal } = useContext(CartContext)

  const [isCreateCheckoutSession, setIsCreateCheckoutSession] = useState(false)

  async function handleCheckout() {
    try {
      setIsCreateCheckoutSession(true)

      const response = await axios.post("api/checkout", {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreateCheckoutSession(false)
      alert("Falha ao redirecionar ao checkout")
    }
  }

  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cartTotal)

  return (
    <>
      <CartContainer>
        <h3>Sacola de compras</h3>
        <div className="cartItems">
          {cartQuantity <= 0 && <p>Parece que seu carrinho esta vazio</p>}
          <CartItem />
        </div>
        <div className="resumeCheckout">
          <div className="resume">
            <p>Quantidade</p>
            <p>
              {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}
            </p>
          </div>
          <div className="resume">
            <p>
              <strong>Valor Total</strong>
            </p>
            <p>
              <strong className="price">{formattedCartTotal}</strong>
            </p>
          </div>
        </div>
        <CheckoutButton
          onClick={handleCheckout}
          disabled={isCreateCheckoutSession || cartQuantity <= 0}
        >
          Finalizar compra
        </CheckoutButton>
        <CartButtonClose>
          <X size={24} weight="bold" />
        </CartButtonClose>
      </CartContainer>
    </>
  )
}
