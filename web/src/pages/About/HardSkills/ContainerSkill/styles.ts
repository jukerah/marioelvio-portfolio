import styled from "styled-components";

export const ContainerSkill = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 16px;

    .container-card {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        gap: 16px;
    }

    @media (min-width: 1024px) {
        gap: 32px;

        .container-card { gap: 24px; }
    }

`;

interface TitleStackProps {
    mode: string;
}

export const TitleStack = styled.div<TitleStackProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 8px;

    h3 {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        font-size: 1.25em;
        font-weight: 400;
        text-transform: uppercase;
    }

    svg {
        width: 64px;
        height: 64px;

        transition: all ease-in .5s;
    }

    .fill-color {
        fill: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
    }

    .stroke-color {
        stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
    }

    @media (min-width: 768px) {
        h3 { font-size: 1.25em; }

        svg {
            width: 80px;
            height: 80px;
        }
    }

    @media (min-width: 1024px) {
        h3 { font-size: 1.75em; }

        svg {
            width: 128px;
            height: 128px;
        }
    }
`;