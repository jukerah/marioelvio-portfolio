import styled from "styled-components";

interface ContainerEducationProps {
    isMenuOpen: boolean;
}

export const ContainerEducation = styled.div<ContainerEducationProps>`
    display: flex;
    flex-direction: column;

    gap: 16px;

    @media (min-width: 768px) { gap: 24px; }

    @media (min-width: 1024px) and (max-width: 1200px) {
        margin-bottom: ${(props) => props.isMenuOpen && '32px'};
    }
`;

export const Education = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;

interface EducationInfoProps {
    mode: string;
}

export const EducationInfo = styled.div<EducationInfoProps>`
    display: flex;
    flex-direction: column;
    
    gap: 16px;

    .course, .college {
        color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});

        font-weight: 700;
        text-transform: uppercase;
    }
`;