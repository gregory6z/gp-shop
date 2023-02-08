import { globalCss } from "."

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    scrollbarWidth: "thin",
  },

  "*::webkit-scrollbar": {
    width: 6,
  },
  "*::-webkit-scrollbar": {
    width: 6,
  },
  "*::-webkit-scrollbar-track": {
    background: "$green100",
  },
  "*::-webkit-scrollbar-thumb": {
    backgroundColor: "$green500",
    borderRadius: 6,
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$gray900",
    color: "$gray100",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: "160%",
  },
})
