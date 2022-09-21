import styled from "styled-components";

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    width: 100%;

    gap: 16px;

    @media (min-width: 768px) { grid-template-columns: 1fr 1fr; }

    @media (min-width: 1024px) { gap: 24px; }
`;