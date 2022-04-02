import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        outline: 0;
        border: 0;
        background: none;
    }
    html {
        font-size: 62.5%;

        --dark-background: #181818;
        --light-background: #ffffff;

        --first-text: #000000;
        --second-text: #ababab;
        --light-text: #ffffff;

        --blue: #4452FE;
        --blueHover: #2d3acf;
        --darkBlue:  #112D57;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
    }
    body {
        background: var(--dark-background);
        color: var(--light-text);
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    button, a {
        cursor: pointer;
    }
`;
