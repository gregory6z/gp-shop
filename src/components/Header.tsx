import logoImg from "../assets/logo.svg"
import { ButtonCart, Header as HeaderContainer } from "../styles/pages/app"
import { Handbag } from "phosphor-react"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export function Header() {
  const { pathname } = useRouter()

  const { cartItems } = useContext(CartContext)

  const showCartButton = pathname !== "/success"

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      {showCartButton && (
        <ButtonCart>
          <Handbag size={24} weight="bold" />
          {cartItems.length >= 1 && <span>{cartItems.length}</span>}
        </ButtonCart>
      )}
    </HeaderContainer>
  )
}
