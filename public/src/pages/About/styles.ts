import styled from "styled-components";

interface Props {
    mode?: string | null;
    isMenuOpen?: boolean;
    position?: 'left' | 'right';
}

export const AboutSection = styled.section<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white'});

    display: flex;
    justify-content: center;
    
    width: 100%;

    padding-top: 60px;

    transition: all ease-in .5s;

    @media (min-width: 768px) {
        padding-top: 80px;
    }

    @media (min-width: 1024px) {
        padding-top: 100px;
    }
`;

export const Container = styled.div<Props>`
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

export const ContainerTimeLine = styled.div<Props>`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 16px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 0;

        h2 { margin-bottom: 8px; }
    }
`;

export const CenterLine = styled.div<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
    
    display: none;

    width: 4px;

    @media (min-width: 768px) { display: flex; }
`;

export const ContainerLeft = styled.div<Props>`
    display: flex;
    flex-direction: column;

    flex: 1;
    height: 100%;

    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;

export const ContainerRight = styled.div<Props>`
    display: flex;
    flex-direction: column;

    flex: 1;
    height: 100%;

    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;

export const WorkExperience = styled.div<Props>`
    display: flex;

    width: 100%;
    height: 30px;

    .info {
        background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'});

        flex: 1;
        border-left: 4px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
        border-right: 4px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
    }

    .container-line {
        display: none;
        align-items: center;
        width: 10px;

        @media (min-width: 1024px) { width: 20px; }
    }

    .line {
        background-color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});

        width: 100%;
        height: 4px;
    }

    @media (min-width: 768px) {
        .container-line { display: flex; }
    }
`;

export const Education = styled.div<Props>`
    display: flex;

    width: 100%;

    .info {
        background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'});

        flex: 1;
        border-left: 4px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
        border-right: 4px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
    }

    .container-line {
        display: none;
        align-items: center;
        width: 10px;

        @media (min-width: 1024px) { width: 20px; }
    }

    .line {
        background-color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});

        width: 100%;
        height: 4px;
    }

    @media (min-width: 768px) {
        .container-line { display: flex; }
    }
`;