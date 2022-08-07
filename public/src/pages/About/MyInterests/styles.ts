import styled from "styled-components";

interface Props {
    isMenuOpen: boolean;
}

export const MyInterests = styled.div<Props>`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 16px;

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 16px;
    }

    @media (min-width: 550px) { 
        .grid { grid-template-columns: repeat(3, 1fr); }
    }

    @media (min-width: 768px) { 
        .grid { grid-template-columns: repeat(4, 1fr); }

        gap: 24px;
    }

    @media (min-width: 1024px) { gap: 32px; }

    @media (min-width: 1100px) {
        .grid { grid-template-columns: ${(props) => props.isMenuOpen ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'}; }
    }

    @media (min-width: 1250px) { 
        .grid { grid-template-columns: repeat(6, 1fr); }
    }
`;