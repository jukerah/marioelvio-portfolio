import styled from "styled-components";

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 16px;

    @media (min-width: 550px) { grid-template-columns: repeat(3, 1fr); }

    @media (min-width: 768px) { grid-template-columns: repeat(4, 1fr); }

    @media (min-width: 1024px) { grid-template-columns: repeat(5, 1fr); }

    @media (min-width: 1250px) { grid-template-columns: repeat(6, 1fr); }
`;