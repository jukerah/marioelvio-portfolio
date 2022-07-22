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

    @media (min-width: 1024px) { height: 100px; }
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

export const MenuMobile = styled.div<Props>`
    display: flex;
    flex-direction: column;

    padding: 16px 16px 16px 0;
    gap: 6px;

    div {
        background-color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
        width: 32px;
        height: 4px;

        border-radius: 2px;

        transition: all ease-in .5s;
    }

    div:nth-of-type(1) {
        transform: ${(props) => props.isMenuOpen ? 'rotate(45deg)' : 'none'};
        position: relative;
        top: ${(props) => props.isMenuOpen ? '10px' : 0};
    }

    div:nth-of-type(2) {
        opacity: ${(props) => props.isMenuOpen ? 0 : 100};
        position: relative;
        left: ${(props) => props.isMenuOpen ? '-100px' : 0};
    }

    div:nth-of-type(3) {
        transform: ${(props) => props.isMenuOpen ? 'rotate(-45deg)' : 'none'};
        position: relative;
        top: ${(props) => props.isMenuOpen ? '-10px' : 0};
    }
`;

export const Logo = styled.img<Props>`
    width: 160px;
    height: 32px;

    @media (min-width: 768px) {
        width: 200px;
        height: 40px;
    }
`;

export const NavMobile = styled.nav<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'}); 

    display: flex;
    flex-direction: column;
    position: fixed;

    width: 100%;
    max-width: 400px;
    height: calc(100vh - 60px);
    margin-top: 100vh;

    left: ${(props) => props.isMenuOpen ? 0 : '-100vw'};

    transition: all ease-in .5s;

    ul {
        display: flex;
        flex-direction: column;

        list-style-type: none;
    }
    li a {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        display: flex;
        align-items: center;

        height: 72px;

        font-size: 28px;
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;

        gap: 24px;
        padding-left: 24px;
    }

    li a:hover {
        background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white-ice'});
        border-left: 8px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--scorpion'});
    }

    @media (min-width: 768px) {
        height: calc(100vh - 80px);
        margin-top: 100vh;
    }
    
    @media (min-width: 1024px) { display: none; }
`;

export const ContainerButtons = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 16px 0;

    div { padding: 16px; }
`;