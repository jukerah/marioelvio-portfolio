import styled from "styled-components";

interface Props {
    mode?: string | null;
    isMenuOpen?: boolean;
}

export const ContainerWeb = styled.section`
    display: flex;
`;

export const ContainerMain = styled.section<Props>`
    display: flex;

    transition: all ease-in .5s;

    @media (min-width: 1024px) {
        width: calc(100% - ${(props) => props.isMenuOpen ? '300px' : '100px'});
        margin-left: ${(props) => props.isMenuOpen ? '300px' : '100px'};
    }
`;