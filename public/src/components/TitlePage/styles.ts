import styled from "styled-components";

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;

    @media (min-width: 1024px) { justify-content: flex-start; }
`;

interface TitlePageProps {
    mode: string;
}

export const TitlePage = styled.h1<TitlePageProps>`
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    font-size: 1.75em;
    text-transform: uppercase;
    text-align: center;

    box-sizing: border-box;
    margin-top: 32px;

    border-bottom: 4px solid var(--de-york);
    padding-bottom: 8px;

    transition: all ease-in .5s;

    @media (min-width: 768px) {
        font-size: 3em;
        
        border-width: 6px;
        margin-top: 32px;
    }

    @media (min-width: 1024px) {
        font-size: 4em;

        border-width: 8px;
        margin-top: 48px;
        padding-bottom: 16px;
    }
`;