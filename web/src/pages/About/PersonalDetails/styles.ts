import styled from "styled-components";

export const PersonalDetails = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 16px;

    @media (min-width: 1024px) { gap: 32px; }
`;

interface ContainerInfoProps {
    mode: string;
    isMenuOpen: boolean;
}

export const ContainerInfo = styled.div<ContainerInfoProps>`    
    display: flex;
    flex-direction: column;

    gap: 16px;

    .info {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        gap: 16px;

        svg {
            stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

            width: 24px;
            height: 24px;

            transition: all ease-in .5s;
        }
        
        font-size: 16px;
    }
    
    a, p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed_spruce'});
        text-decoration: none;
        word-break: break-word;

        transition: all ease-in .5s;
    }

    .direction {
        display: flex;
        flex-direction: column;

        gap: 16px;
    }

    @media (min-width: 350px) {
        .info { font-size: 18px !important; }
    }

    @media (min-width: 380px) {
        .info { font-size: 22px !important; }
    }

    @media (min-width: 768px) {
        gap: 24px;

        flex-direction: row;

        .info { font-size: 1.375em; }
        
        gap: ${(props) => props.isMenuOpen ? '32px' : '48px'};
    }

    @media (min-width: 1024px) { gap: 32px; }

    @media (min-width: 1300px) {
        gap: 64px;

        .info { font-size: 32px !important; }
    }
`;