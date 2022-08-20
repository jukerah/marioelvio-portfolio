import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --de-york: #6BC38B;
        --green-pea: #205734;
        --skeptic: #C2E3CE;
        --white-ice: #F0FCF5;
        --scorpion: #595959;
        --limed-spruce: #374047;
        --shark: #2a2f34;
        --shark-dark: #1E2326;
        --black: #000000;
        --white: #FFFFFF;
        --alabaster: #FCFCFC;
        --alto: #F0F2F5;
        --dodger-blue: #4d74ff;
        --silver-tree: #68b083;
        --vivid-tangerine: #Ff8989;
        --alizarin-crimson: #EB2121;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
    
    body {
        width: 100%;
        font-family: 'Exo 2', sans-serif;
    }

    h1, h2 { word-spacing: 6px; }
`;
 
export default GlobalStyle;