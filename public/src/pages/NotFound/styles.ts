import styled from "styled-components";

interface NotFoundProps {
    mode: string;
}

export const NotFound = styled.section<NotFoundProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white'});

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;

    transition: all ease-in .5s;
`;

interface ContainerProps {
    mode: string;
}

export const Container = styled.div<ContainerProps>`
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;

    width: 100%;
    max-width: 1366px;

    padding: 104px 24px 40px 24px;
    gap: 32px;

    h1 { font-size: 56px; }
    p { 
        font-size: 22px;
        font-weight: bold;
        color: var(--outer-space);
    }

    @media (min-width: 768px) { h1 { font-size: 96px; } }

    @media (min-width: 1024px) {
        padding: 132px 32px 32px 32px;
        gap: 48px;

        font-size: 56px;

        h1 { font-size: 128px; }
        p { font-size: 56px; }
    }
`;