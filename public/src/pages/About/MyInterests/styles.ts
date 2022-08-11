import styled from "styled-components";

interface Props {
    isMenuOpen: boolean;
}

export const MyInterests = styled.div<Props>`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 16px;

    .container-card {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        gap: 16px;
    }

    @media (min-width: 1024px) {
        gap: 32px;

        .container-card { gap: 24px; }
    }
`;