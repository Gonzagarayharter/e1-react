import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    font-family: 'Josefin Sans', sans-serif;
}

body {
    background: rgb(41,128,92);
    background: linear-gradient(90deg, rgba(41,128,92,1) 0%, rgba(22,152,152,1) 100%);
}
`;
