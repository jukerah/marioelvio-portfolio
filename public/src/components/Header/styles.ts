import styled from "styled-components";

interface Props {
    mode?: string | null;
    isMenuOpen?: boolean;
}

export const Header = styled.header<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--black' : '--skeptic'});
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    box-sizing: border-box;

    width: 100%;
    height: 60px;

    top: 0;

    transition: all ease-in .5s;

    @media (min-width: 768px) { height: 80px; }

    @media (min-width: 1024px) {
        width: calc(100% - ${(props) => props.isMenuOpen ? '300px' : '100px'});
        height: 100px;
    }
`;

export const Container = styled.div<Props>`
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

    @media (min-width: 1024px) { padding: 0 32px; }
`;

export const Logo = styled.img<Props>`
    width: 160px;
    height: 32px;

    @media (min-width: 768px) {
        width: 200px;
        height: 40px;
    }
`;

export const ContainerButton = styled.div`
    display: none;

    @media (min-width: 1024px) { display: block; }
`;