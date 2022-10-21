import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
    }

    a,
    button,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    input,
    label,
    legend,
    p,
    span,
    select{
        font-family: 'Roboto', sans-serif;
    }

`