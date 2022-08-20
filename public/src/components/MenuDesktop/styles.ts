import styled from "styled-components";

interface MenuDesktopProps {
    mode: string;
    isMenuOpen: boolean;
}

export const MenuDesktop = styled.aside<MenuDesktopProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'});

    display: none;
    position: fixed;
    flex-direction: column;
    z-index: 1;

    width: ${(props) => props.isMenuOpen ? '300px' : '100px'};
    height: 100vh;

    transition: all ease-in .5s;

    @media (min-width: 1024px) { display: flex; }
`;

interface MenuButtonProps {
    mode: string;
    isMenuOpen: boolean;
}

export const MenuButton = styled.div<MenuButtonProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--black' : '--skeptic'});

    width: ${(props) => props.isMenuOpen ? '300px' : '100px'};
    height: 100px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    transition: all ease-in .5s;

    cursor: pointer;

    button {
        background-color: rgba(0, 0, 0, 0);

        display: flex;
        align-items: flex-end;
        flex-direction: column;

        gap: 12px;

        border: none;
        margin-right: ${(props) => props.isMenuOpen ? '32px' : '26px'};

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
            left: ${(props) => props.isMenuOpen ? '-300px' : 0};
        }

        div:nth-of-type(3) {
            transform: ${(props) => props.isMenuOpen ? 'rotate(45deg)' : 'none'};
            position: relative;
            top: ${(props) => props.isMenuOpen ? '-6px' : 0};
        }
    }
`;

interface NavDesktopProps {
    mode: string;
    isMenuOpen: boolean;
    activePage: string;
}

export const NavDesktop = styled.nav<NavDesktopProps>`
    display: flex;
    position: fixed;
    align-items: flex-end;

    width: ${(props) => props.isMenuOpen ? '300px' : '100px'};

    margin-top: 100px;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    li a {
        display: flex;
        align-items: center;

        gap: 32px;

        width: ${(props) => props.isMenuOpen ? '300px' : '100px'};
        height: 96px;

        font-size: 28px;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;

        svg {
            stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
            .fill {
                fill: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
            }

            display: flex;
            position: ${props  => (!props.isMenuOpen) && 'absolute'};

            width: 48px;
            height: 48px;

            padding-left: 24px;

            transition: all ease-in .5s;
        }
    }

    
    #${(props) => props.activePage} {
        background-color: var(--white-ice);
    
        width: ${(props) => props.isMenuOpen ? '292px' : '92px'};

        border-left: 8px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--scorpion'});

        transition: all ease-in .5s;

        p { color: var(${(props) => props.mode === 'dark' && '--limed-spruce'}); }

        svg {
            stroke: var(--limed-spruce);
            .fill {
                fill: var(--limed-spruce);
            }

            transition: 0s;
        }  
    }


    li:hover {
        background-color: var(--white-ice);
        
        width: ${(props) => props.isMenuOpen ? '292px' : '92px'};

        border-left: 8px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--scorpion'});

        transition: all ease-in .1s;

        p {
            color: var(${(props) => props.mode === 'dark' && '--limed-spruce'});

            ${ props  => (!props.isMenuOpen) && `
                transform: none;
                transition: .2s;
                margin-left: 112px;
            `}
        }

        svg {
            stroke: var(--limed-spruce);
            .fill {
                fill: var(--limed-spruce);
            }
        }

        ${ props  => (!props.isMenuOpen) && `
            p {
                background-color: var(${props.mode === 'dark' ? '--black' : '--skeptic'});
                color: var(${props.mode === 'dark' && '--white'});   
                
                padding: 16px;
                border-radius: 8px;
                box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
            }
        `}
    }

    p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        transform: translateX(${(props) => props.isMenuOpen ? 0 : '-300px'});
        transition: all ease-in .5s;
    }
`;