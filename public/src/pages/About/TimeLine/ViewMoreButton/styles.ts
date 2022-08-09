import styled from "styled-components";

interface Props {
    mode?: string | null;
}

export const ViewMoreButton = styled.button<Props>`
    background-color: rgba(0, 0, 0, 0);
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    display: flex;
    justify-content: center;
    align-items: center;

    width: inherit;

    font-size: 18px;
    font-weight: 700;

    border: none;
    padding: 8px 0;
    gap: 8px;

    cursor: pointer;

    transition: all ease-in .5s;

    svg {
        stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        width: 24px;
        height: 24px;

        transition: all ease-in .5s;
    }

    @media (min-width: 1024px) { font-size: 22px; }
`;