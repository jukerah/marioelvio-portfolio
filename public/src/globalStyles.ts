import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    :root {
        --de-york: #6BC38B;
        --green-pea: #205734;
        --skeptic: #C2E3CE;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
    
    body {
        width: 100%;

        font-family: 'Roboto', Helvetica, Sans-Serif;
    }
`;
 
export default GlobalStyle;