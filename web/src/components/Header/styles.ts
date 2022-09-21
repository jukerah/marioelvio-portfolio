import styled from "styled-components";

interface HeaderProps {
    mode: string;
    isMenuOpen: boolean;
}

export const Header = styled.header<HeaderProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--black' : '--skeptic'});
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    box-sizing: border-box;
    z-index: 2;

    width: 100%;
    max-width: 100vw;
    height: 60px;
    top: 0;

    transition: all ease-in .5s;

    @media (min-width: 768px) { height: 80px; }

    @media (min-width: 1024px) {
        width: calc(100% - ${(props) => props.isMenuOpen ? '300px' : '100px'});
        max-width: calc(100vw - ${(props) => props.isMenuOpen ? '300px' : '100px'});
        height: 100px;
    }
`;

interface ContainerProps {
    mode: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    width: 100%;
    max-width: 1366px;

    padding: 0 24px;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
    }

    a { height: 32px; }

    .switch { display: none; }

    .container-button {
        display: none;
        justify-content: space-between;

        width: 200px
    }

    svg {
        width: 160px;
        height: 32px;
    }

    @media (min-width: 768px) {
        a { height: 40px; }
        
        svg {
            width: 200px;
            height: 40px;
        }
    }

    @media (min-width: 1024px) {
        padding: 0 32px;

        .switch,
        .container-button { display: flex; }
    }
`;