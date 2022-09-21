import styled from "styled-components";

interface MenuMobileProps {
    mode: string;
    isMenuOpen: boolean;
}

export const MenuMobile = styled.div<MenuMobileProps>`
    padding: 16px;

    margin-right: -16px;

    button {
        background-color: rgba(0, 0, 0, 0);

        display: flex;
        flex-direction: column;

        gap: 6px;

        border: none;
        
        transition: all ease-in .5s;

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
            right: ${(props) => props.isMenuOpen ? '-100px' : 0};
        }

        div:nth-of-type(3) {
            transform: ${(props) => props.isMenuOpen ? 'rotate(-45deg)' : 'none'};
            position: relative;
            top: ${(props) => props.isMenuOpen ? '-10px' : 0};
        }
    }

    @media (min-width: 1024px) { display: none; }
`;

interface NavMobileProps {
    mode: string;
    isMenuOpen: boolean;
    activePage: string;
}

export const NavMobile = styled.nav<NavMobileProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'}); 

    display: flex;
    flex-direction: column;
    position: fixed;

    width: 100%;
    height: calc(100vh - 60px);
    margin-top: 100vh;

    right: ${(props) => props.isMenuOpen ? 0 : '-100vw'};

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
        
        height: 64px;

        font-size: 28px;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;

        gap: 24px;
        padding-left: 24px;

        transition: all ease-in .2s;

        svg {
            stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
            .fill {
                fill: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
            }

            width: 24px;
            height: 24px;

            transition: all ease-in .2s;
        }
    }

    li a:hover {
        background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white-ice'});
        border-left: 8px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--scorpion'});
    }

    #${(props) => props.activePage} a {
        background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white-ice'});
        border-left: 8px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--scorpion'});
    }

    @media (max-width: 1024px) and (max-height: 600px) {
        overflow-y: scroll;

        ::-webkit-scrollbar { width: 6px; }
    
        ::-webkit-scrollbar-thumb {
            background: var(--de-york); 
            border-radius: 3px;
        }
    }

    @media (min-width: 768px) {
        max-width: 400px;
        height: calc(100vh - 80px);
        margin-top: 100vh;
    }

    @media (min-width: 1024px) { display: none; }
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 16px 0;

    div { padding: 16px; }

    .top-line {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    @media (max-width: 1024px)
       and (max-height: 600px) {
        margin-bottom: 60px;
    }
`;