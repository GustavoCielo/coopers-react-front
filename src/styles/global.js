import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
 }

 body {
    background: #f5f5f5;
    color: #312e38;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
`;
