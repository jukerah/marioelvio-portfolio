import styled from "styled-components";

interface ModeProps {
    mode: string | null;
}

export const SubTitle = styled.h2<ModeProps>`
    color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});

    width: 100%;

    font-size: 20px;
    text-transform: uppercase;
    text-align: center;

    transition: all ease-in .5s;

    @media (min-width: 768px) { font-size: 32px; }

    @media (min-width: 1024px) { font-size: 40px; }
`;