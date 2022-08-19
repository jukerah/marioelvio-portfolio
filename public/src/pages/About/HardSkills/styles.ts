import styled from "styled-components";

interface ContainerHardSkillsProps {
    mode: string;
}

export const ContainerHardSkills = styled.div<ContainerHardSkillsProps>`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    gap: 16px;

    .description-skills {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        width: 100%;

        font-size: 1em;
        line-height: 150%;

        transition: all ease-in .5s;
    }
    
    @media (min-width: 768px) {
        gap: 24px;

        .description-skills { font-size: 1.125em; }
    }

    @media (min-width: 1024px) {
        gap: 32px;

        .description-skills { font-size: 1.375em; }
    }
`;

export const HardSkills = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 16px;

    @media (min-width: 1024px) { gap: 16px; }
`;