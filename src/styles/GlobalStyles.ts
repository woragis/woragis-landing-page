import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0; padding: 0;
    box-sizing: border-box;
    background-color: white;
    color: black;
    transition: 300ms;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    scroll-behavior: smooth;
}
section {

    /* border: black 1px solid; */
}
`;

export default GlobalStyle;
