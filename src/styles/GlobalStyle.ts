import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#455a64",
  secondary: "#201E24",
  third: "#651AB0",
  thirdLight: "#BEBDBB",
  white: "#ffffff",
  black: "#000000",
}
