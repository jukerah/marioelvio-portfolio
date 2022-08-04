import styled from "styled-components";

interface Props {
    mode?: string | null;
    isMenuOpen?: boolean;
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

export const ContainerResume = styled.div<Props>`
    display: flex;
    flex-direction: column;

    gap: 16px;

    p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
        
        font-size: 16px;
        text-indent: 1.5em;
        
        transition: all ease-in .5s;
    }

    @media (min-width: 768px) {
        p { font-size: 22px; }

        gap: 24px;
    }

    @media (min-width: 1024px) { gap: 32px; }
`;

export const ContainerMyInterests = styled.div<Props>`
    display: flex;
    flex-direction: column;

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

export const ContainerPersonalDetails = styled.div<Props>`
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 16px;

    .container-info {
        display: flex;
        flex-direction: column;

        gap: 16px;

        figure {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            gap: 8px;

            img {
                width: 24px;
                height: 24px;
            }
        }

        a, figure {
            color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed_spruce'});
            text-decoration: none;
            font-size: 16px;
        }

        div {
            display: flex;
            flex-direction: column;

            gap: 16px;
        }
    }

    @media (min-width: 768px) {
        gap: 24px;

        .container-info {
            flex-direction: row;

            a, figure { font-size: 22px; }
            
            gap: 56px;
        }
    }

    @media (min-width: 1024px) { gap: 32px; }
`;