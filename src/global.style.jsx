import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: 'Kalam', sans-serif;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    .arrow-up {
        font-size: 1.5rem;
        padding: 5px 10px;
        color: white;
    }
`