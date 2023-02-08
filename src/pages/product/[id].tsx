import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useContext } from "react"
import Stripe from "stripe"
import { CartContext, IProduct } from "../../context/CartContext"
import { stripe } from "../../lib/stripe"

import { useRouter } from "next/router"
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product"

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const router = useRouter()
  const { addToCart, checkIfCartItemAlreadyExists } = useContext(CartContext)

  function handleAddToCart() {
    addToCart(product)
    router.push("/")
  }

  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
  //   useState(false)

  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true)
  //     const response = await axios.post("/api/checkout", {
  //       priceId: product.defaultPriceId,
  //     })
  //     const { checkoutUrl } = response.data

  //     window.location.href = checkoutUrl
  //   } catch (err) {
  //     setIsCreatingCheckoutSession(false)
  //     // conenctar com uma ferramenta de observabilidade (Datadog / Sentry)
  //     alert("Falha ao redirecionar ao checkout")
  //   }
  // }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=""></Image>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            onClick={handleAddToCart}
            disabled={checkIfCartItemAlreadyExists(product.id)}
            // disabled={isCreatingCheckoutSession}
          >
            Adicionar ao carrinho
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_MgsZAzpRKSeF0n" } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("fr", {
          style: "currency",
          currency: "EUR",
        }).format(Number(price.unit_amount) / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1hour
  }
}
