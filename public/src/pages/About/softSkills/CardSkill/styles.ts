import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

interface SkillNameProps {
    mode: string;
    show: boolean;
}

export const SkillName = styled.div<SkillNameProps>`
    display: flex;
    justify-content: space-between;
    
    padding: 8px 0 16px 0;
    border-bottom: ${(props) => !props.show && `
        2px solid var(${props.mode === 'dark' ? '--limed-spruce' : '--alto'})
    `};

    h3 {
        color: var(${(props) => props.mode === 'dark'
            ? props.show
                ? '--de-york'
                : '--white'
            : props.show
                ? '--green-pea'
                : '--limed-spruce'
        });
        
        font-size: 1.125em;
        line-height: 110%;

        transition: all ease-in .5s;
    }

    svg {
        stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        width: 24px;
        height: 24px;

        transform: rotateX(${(props) => props.show && '180deg'});

        transition: all ease-in .5s;
    }

    cursor: pointer;

    @media (min-width: 768px) { h3 { font-size: 1.5em; } }

    @media (min-width: 1024px) { h3 { font-size: 1.75em; } }
`;

interface ContainerSkillDescriptionProps {
    mode: string;
}

export const ContainerSkillDescription = styled.div<ContainerSkillDescriptionProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'});
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

interface SkillDescriptionProps {
    mode: string;
    show: boolean;
}

export const SkillDescription = styled.p<SkillDescriptionProps>`
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    display: ${(props) => props.show ? `flex` : `none`};

    font-size: 1em;
    line-height: 150%;

    padding: 8px;
    transition: all ease-in .5s;

    @media (min-width: 768px) { font-size: 1.375em; }
`;