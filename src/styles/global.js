import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
 }

  :root {
  --green: #4AC959;
  --orange: #E88D39;
  --black: #000000;
  --white: #ffffff;
 }

 body {
    background: var(--white);
    color: var(--black);
    -webkit-font-smoothing: antialiased !important
  }

  /* body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  } */

  button {
    cursor: pointer;
    outline: none;
    border: 0;
  }
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  a:visited {
    color: var(--white);
  }
`;
