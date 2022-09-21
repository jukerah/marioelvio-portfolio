import styled from "styled-components";

interface AboutSectionProps {
    mode: string;
}

export const AboutSection = styled.section<AboutSectionProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white'});

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    width: 100%;

    padding-top: 60px;

    transition: all ease-in .5s;

    @media (min-width: 768px) { padding-top: 80px; }

    @media (min-width: 1024px) { padding-top: 100px; }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    width: 100%;
    max-width: 1366px;

    padding: 0 24px 24px 24px;
    gap: 32px;

    @media (min-width: 768px) { gap: 40px; }

    @media (min-width: 1024px) {
        padding: 0 32px 32px 32px;
        gap: 48px;
    }
`;