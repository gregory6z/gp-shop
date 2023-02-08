import type { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app"
import { Header } from "../components/Header"
import { Cart } from "../components/Cart"
import * as Collapsible from "@radix-ui/react-collapsible"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { CartProvider } from "../context/CartContext"

// import "../styles/keyframes.css"
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setOpen(false)
  }, [router])

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <CartProvider>
        <Container>
          <Header />
          <Collapsible.Content className="CollapsibleContent">
            <Cart />
          </Collapsible.Content>
          <Component {...pageProps} />
        </Container>
      </CartProvider>
    </Collapsible.Root>
  )
}
