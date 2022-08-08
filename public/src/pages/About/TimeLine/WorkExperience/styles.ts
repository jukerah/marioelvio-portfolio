import styled from "styled-components";

interface Props {
    mode?: string | null;
    isMenuOpen?: boolean;
}

export const ContainerWorkExperience = styled.div<Props>`
    display: flex;
    flex-direction: column;

    gap: 16px;

    @media (min-width: 768px) { gap: 24px; }

    @media (min-width: 1024px) and (max-width: 1200px) {
        margin-bottom: ${(props) => props.isMenuOpen && '32px'};
    }
`;

export const WorkExperience = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;

export const Work = styled.div<Props>`
    display: flex;
    flex-direction: column;
    
    gap: 8px;

    transition: all ease-in .1s;

    h3, p { font-size: 16px; }

    @media (min-width: 768px) {
        h3, p { font-size: 18px; }
    }

    @media (min-width: 1024px) {
        h3, p { font-size: 22px; }
    }
`;