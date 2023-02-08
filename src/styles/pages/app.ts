import { styled } from ".."
import * as Collapsible from "@radix-ui/react-collapsible"
import { keyframes } from "@stitches/react"

const slideIn = keyframes({
  "0%": { opacity: 0, width: 0 },
  "50%": { opacity: 0 },
  "100%": {
    opacity: 1,
    width: "var(--radix-collapsible-content-width)",
  },
})

const slideOut = keyframes({
  "0%": { opacity: 1, width: "var(--radix-collapsible-content-width)" },
  "50%": { opacity: 0 },
  "100%": {
    opacity: 0,
    width: 0,
  },
})

// const slideOut = keyframes({
//   from: { height: "var(--radix-accordion-content-height)" },
//   to: { height: 0 },
// })

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
  justifyContent: "center",

  ".CollapsibleContent": {
    overflow: "hidden",
    width: "30rem",
    height: "100vh",
    position: "absolute",
    boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.5)",

    bottom: 0,
    right: 0,
    zIndex: 100,
  },

  ".CollapsibleContent[data-state='closed']": {
    animation: `${slideOut}  0.5s ease-out`,
  },

  ".CollapsibleContent[data-state='open']": {
    animation: `${slideIn}  0.5s ease-out 0s 1 normal forwards `,
  },
})

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export const ButtonCart = styled(Collapsible.Trigger, {
  border: 0,
  marginLeft: "auto",
  background: "$gray800",
  color: "$gray100",
  padding: "0.75rem",
  position: "relative",
  borderRadius: 6,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  span: {
    top: -12,
    right: -8,
    padding: 0,

    background: "$green500",
    border: "3px solid #121214",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
    width: 28,
    height: 28,
    fontSize: 14,
    position: "absolute",
  },
})

export const CartContainer = styled("div", {
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  position: "absolute",

  height: "100vh",
  width: "30rem",
  background: "$gray800",
  padding: "4.5rem 3rem 3rem",

  h3: {
    fontSize: "1.25rem",
    color: "$gray100",
    weight: 700,
  },

  strong: {
    fontSize: "1.125rem",
  },

  ".cartItems": {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    overflow: "auto",
    width: "100%",
    height: "27.75rem",
  },

  ".resumeCheckout": {
    flexDirection: "column",
    marginTop: "5.25rem",
    display: "flex",
    gap: "0.5rem",
  },

  ".resume": {
    display: "flex",
    justifyContent: "space-between",
  },

  ".price": {
    fontSize: "1.25rem",
  },
})

export const CartButtonClose = styled(Collapsible.Trigger, {
  position: "absolute",
  zIndex: 200,
  top: 24,
  right: 24,
  color: "$gray400",
  cursor: "pointer",
  background: "transparent",
  border: 0,

  "&:hover": {
    color: "$gray300",
  },
})

export const CheckoutButton = styled("button", {
  marginTop: "auto",
  backgroundColor: "$green500",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "1.25rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "$md",
  transition: "200ms",

  "&:not(:disabled):hover": {
    backgroundColor: "$green300",
  },

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
})

export const CartItemContainer = styled("div", {
  display: "flex",
  gap: "1.25rem",
  lineHeight: "160%",

  ".cartItemImg": {
    width: "100%",
    maxWidth: 94,
    height: 94,
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    padding: "0.25rem",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    img: {
      objectFit: "cover",
    },
  },

  p: {
    fontSize: "1.125rem",
    weight: 400,
    color: "$gray300",
  },

  button: {
    border: 0,
    background: "transparent",
    fontWeight: "bold",
    fontSize: "1rem",
    color: "$green500",
    marginTop: "0.5rem",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
      transition: "color 200ms",
    },
  },
})
