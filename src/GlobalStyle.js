import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }
    
    *, ::after ::before {
    box-sizing: inherit;
    }

    body {
    background-color: rgb(241, 241, 241);
    font-family: 'Play', sans-serif;
    }
`;