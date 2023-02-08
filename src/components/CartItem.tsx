import { CartItemContainer } from "../styles/pages/app"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Image from "next/image"

export function CartItem() {
  const { cartItems, removeToCart } = useContext(CartContext)
  return (
    <>
      {cartItems.map((cartItem) => (
        <CartItemContainer key={cartItem.id}>
          <div className="cartItemImg">
            <Image
              src={cartItem.imageUrl}
              width={100}
              height={93}
              blurDataURL={cartItem.imageUrl}
              alt=""
            />
          </div>
          <div className="cartItem">
            <p>{cartItem.name}</p>
            <div>
              <strong>{cartItem.price}</strong>
            </div>
            <button onClick={() => removeToCart(cartItem)}>Remover</button>
          </div>
        </CartItemContainer>
      ))}
    </>
  )
}
