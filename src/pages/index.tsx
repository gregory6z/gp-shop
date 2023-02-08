/* eslint-disable jsx-a11y/alt-text */
import { HomeContainer, Product, SliderContainer } from "../styles/pages/Home"
import Image from "next/image"
import { Handbag } from "phosphor-react"

import Head from "next/head"

import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"
import { stripe } from "../lib/stripe"
import { GetServerSideProps } from "next"
import Stripe from "stripe"
import { useContext, MouseEvent, useEffect, useState } from "react"
import { CartContext, IProduct } from "../context/CartContext"
import { Skeleton } from "../components/Skeleton"
import useEmblaCarousel from "embla-carousel-react";

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const { addToCart, checkIfCartItemAlreadyExists } = useContext(CartContext)

  const [isLoading, setIsLoading] = useState(true)

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct,
  ) {
    e.preventDefault()
    addToCart(product)
  }

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timeOut)
  }, [])

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{ overflow: "hidden", width: "100%" }}></div>
      <HomeContainer>
      <div className="embla" ref={emblaRef}>
      <SliderContainer className="embla__container container">

  
        {isLoading ? (
          <>
            <Skeleton className="embla__slide" />
            <Skeleton className="embla__slide" />
            <Skeleton className="embla__slide" />
          </>
        ) : (
          <>
            {products.map((product) => {
              return (
                <Product
                  href={`/product/${product.id}`}
                  key={product.id}
                  prefetch={false}
                  className="keen-slider__slide"
                >
                  <Image
                    src={product.imageUrl}
                    alt=""
                    width={520}
                    height={480}
                    placeholder="blur"
                    blurDataURL={product.imageUrl}
                  />

                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>
                    <button
                      disabled={checkIfCartItemAlreadyExists(product.id)}
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <Handbag weight="bold" size={32} />
                    </button>
                  </footer>
                </Product>
              )
            })}
            
          </>
          
        )}
        </SliderContainer>  
        </div>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
    active: true,
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount as number) / 100),
      numberPrice: (price.unit_amount as number) / 100,
      defaultPriceId: price.id,
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
