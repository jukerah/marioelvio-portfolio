import styled from "styled-components";

interface Props {
    isMenuOpen?: boolean;
    scrollBarWidth?: number;
}

export const Main = styled.main<Props>`
    width: 100%;

    margin-top: 60px;

    @media (min-width: 768px) { margin-top: 80px; }

    @media (min-width: 1024px) { margin-top: 100px; }
`;
