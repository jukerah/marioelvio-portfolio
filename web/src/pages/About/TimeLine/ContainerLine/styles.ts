import styled from "styled-components";

interface ContainerLineProps {
    mode: string;
    isMenuOpen: boolean;
}

export const ContainerLine = styled.div<ContainerLineProps>`
    display: none;
    align-items: center;
    width: 10px;

    .line {
        background-color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});

        width: 100%;
        height: 4px;

        transition: all ease-in .1s;
    }

    @media (min-width: 768px) { display: flex; }

    @media (min-width: 1024px) { width: 20px; }

    @media (min-width: 1024px) and (max-width: 1200px) {
        display: ${(props) => props.isMenuOpen ? 'none': 'flex'};
    }
`;