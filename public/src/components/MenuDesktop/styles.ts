import styled from "styled-components";

interface Props {
    mode?: string | null;
    isMenuOpen?: boolean;
}

export const MenuDesktop = styled.div<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'});

    display: flex;
    flex-direction: column;

    width: ${(props) => props.isMenuOpen ? '300px' : '100px'};
    height: 100vh;

    transition: all ease-in .5s;
`;

export const MenuButton = styled.div<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--black' : '--skeptic'});

    width: ${(props) => props.isMenuOpen ? '300px' : '100px'};
    height: 100px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    transition: all ease-in .5s;

    cursor: pointer;

    button {
        background-color: var(${(props) => props.mode === 'dark' ? '--black' : '--skeptic'});

        display: flex;
        align-items: flex-end;
        flex-direction: column;

        gap: 12px;

        border: none;
        margin-right: ${(props) => props.isMenuOpen ? '32px' : '26px'};

        transition: all ease-in .5s;

        cursor: pointer;

        div {
            background-color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
            
            width: ${(props) => props.isMenuOpen ? '32px' : '48px'};
            height: 4px;

            border-radius: 2px;

            transition: all ease-in .5s;
        }

        div:nth-of-type(1) {
            transform: ${(props) => props.isMenuOpen ? 'rotate(-45deg)' : 'none'};
            position: relative;
            top: ${(props) => props.isMenuOpen ? '6px' : 0};
        }

        div:nth-of-type(2) {
            opacity: ${(props) => props.isMenuOpen ? 0 : 100};
            position: relative;
            left: ${(props) => props.isMenuOpen ? '-100px' : 0};
        }

        div:nth-of-type(3) {
            transform: ${(props) => props.isMenuOpen ? 'rotate(45deg)' : 'none'};
            position: relative;
            top: ${(props) => props.isMenuOpen ? '-6px' : 0};
        }
    }
`;

export const NavDesktop = styled.nav<Props>`
    width: ${(props) => props.isMenuOpen ? '300px' : '100px'};
`;