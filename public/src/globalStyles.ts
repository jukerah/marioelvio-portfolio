import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --de-york: #6BC38B;
        --green-pea: #205734;
        --skeptic: #C2E3CE;
        --white-ice: #F0FCF5;
        --scorpion: #595959;
        --limed-spruce: #374047;
        --shark: #2A2F34;
        --shark-dark: #1E2326;
        --black: #000000;
        --white: #FFFFFF;
        --alabaster: #FCFCFC;
        --alto: #F0F2F5;
        --dodger-blue: #4D74FF;
        --silver-tree: #68B083;
        --vivid-tangerine: #FF8989;
        --alizarin-crimson: #EB2121;
    }

    * {
        margin: 0;
        padding: 0;
        
        font-family: 'Exo 2', sans-serif;
    }

    html {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        &::-webkit-scrollbar {
            width: 8px;
            background-color: var(--black);
        }

        &::-webkit-scrollbar-thumb { background-color: var(--de-york); }
    }
    
    body { width: 100%; }

    h1, h2 { word-spacing: 6px; }
`;
 
export default GlobalStyle;