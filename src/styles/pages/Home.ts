import Link from "next/link"
import { styled } from ".."

export const HomeContainer = styled("main", {
  width:"100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  overflow: "hidden"


})

export const SliderContainer = styled("div", {
  display: "flex",

  gap: "3rem",
  margin: "0 auto",
  ".embla__slide": {
    minWidth: "43.5rem",
  },
});

export const Product = styled(Link, {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  // padding: "0.25rem",
  minHeight: 656,
  minWidth: 556,
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "1.5rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },
    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },

    div: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },

    button: {
      cursor: "pointer",
      color: "$gray100",
      padding: "0.75rem",
      borderRadius: 6,
      border: 0,
      background: "$green500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "200ms",

      "&:not(:disabled):hover": {
        background: "$green300",
      },

      "&:disabled": {
        opacity: "80%",
        cursor: "not-allowed",
      },

      div: {
        display: "block",
        position: "absolute",
        top: 0,
        right: 0,
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
})
