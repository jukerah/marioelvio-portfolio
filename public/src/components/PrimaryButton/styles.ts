import styled from "styled-components";

interface Props {
    mode: string | null;
    isMenuOpen: boolean;
    backgroundColor: string,
    backgroundColorHover: string,
    color: string,
    colorHover: string
}

export const PrimaryButton = styled.div<Props>`
    background-color: var(${(props) => props.backgroundColor});
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 56px;

    border-radius: 28px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;

    transition: all ease-in .5s;

    a {
        color: var(${(props) => props.color});
        text-decoration: none;
    }

    cursor: pointer;

    &:hover {
        background-color: var(${(props) => props.backgroundColorHover});

        a {
            color: var(${(props) => props.colorHover}); transition: all ease-in .5s;
        }
    }

    @media (min-width: 768px) {
        height: 128px;

        font-size: 55px;

        border-radius: 64px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 1024px) {
        height: ${(props) => props.isMenuOpen ? '80px' : '96px'};

        font-size: ${(props) => props.isMenuOpen ? '24px' : '40px'};

        border-radius: 48px;
    }

    @media (min-width: 1250px) {
        height: 96px;

        font-size: 40px;

        border-radius: 64px;
    }
`;