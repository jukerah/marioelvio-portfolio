import styled from "styled-components";

interface Props {
    mode: string | null;
}

export const Card = styled.div<Props>`
    display: flex;

    width: 100%;

    h3 { text-transform: uppercase; }
    h3, p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        font-size: 1em;
        font-weight: 400;

        transition: all ease-in .1s;
    }

    @media (min-width: 768px) {
        h3, p { font-size: 1.125em; }
    }

    @media (min-width: 1024px) {
        h3, p { font-size: 1.375em; }
    }
`;