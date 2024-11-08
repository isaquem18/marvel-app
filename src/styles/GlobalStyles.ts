"use client";
import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${theme.colors.background_default};
  }

  html {
    font-size: 1rem;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 0.85rem;
    }
  }
  @media (max-width: 450px) {
    html {
      font-size: 0.8rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  a,
  button {
    cursor: pointer;
    font-weight: 500;
  }
  
`;

export default GlobalStyles;
