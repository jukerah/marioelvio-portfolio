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
    box-sizing: border-box;

    width: 100%;
    height: 60px;
    padding: 0 24px;

    transition: all ease-in .5s;

    @media (min-width: 768px) {
        height: 80px;
    }

    @media (min-width: 1024px) {
        height: 100px;
        padding: 0 32px;
    }
`;

export const Container = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1366px;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
    }
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
    @media (min-width: 768px) { width: 200px; }
`;