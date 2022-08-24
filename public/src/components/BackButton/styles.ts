import styled from "styled-components";

interface BackButtonProps {
    mode: string | null;
}

export const BackButton = styled.div<BackButtonProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'});

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    width: 94px;
    height: 32px;
    
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

    padding-right: 8px;
    gap: 8px;

    cursor: pointer;

    &, svg, p { transition: all ease-in .1s; }

    svg {
        stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        width: 24px;
        height: 24px;
    }

    p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        font-size: 16px;
        margin-bottom: 2px;
    }

    &:hover {
        background-color: var(--de-york);

        svg { stroke: var(--limed-spruce) };

        p { color: var(--limed-spruce); }

        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 1024px) {
        width: 120px;
        height: 40px;

        p { font-size: 22px; }
    }
`;