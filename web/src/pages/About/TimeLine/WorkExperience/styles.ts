import styled from "styled-components";

interface ContainerWorkExperienceProps {
    isMenuOpen: boolean;
}

export const ContainerWorkExperience = styled.div<ContainerWorkExperienceProps>`
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

interface WorkInfoProps {
    mode: string;
}

export const WorkInfo = styled.div<WorkInfoProps>`
    display: flex;
    flex-direction: column;
    
    gap: 16px;

    .job-role,
    .seniority,
    .activities {
        color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
        font-weight: 700;
    }

    .period-seniority,
    .activities { text-transform: uppercase; }
`;