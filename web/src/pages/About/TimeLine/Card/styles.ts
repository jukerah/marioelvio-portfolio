import styled from "styled-components";

interface CardProps {
    mode: string;
}

export const Card = styled.div<CardProps>`
    display: flex;

    width: 100%;

    h3 {
        text-transform: uppercase;
        line-height: 110%;
    }

    h3, p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        font-size: 1em;
        font-weight: 400;

        transition: all ease-in .1s;
    }

    p { line-height: 150%; }

    @media (min-width: 768px) {
        h3, p { font-size: 1.125em; }
    }

    @media (min-width: 1024px) {
        h3, p { font-size: 1.375em; }
    }
`;