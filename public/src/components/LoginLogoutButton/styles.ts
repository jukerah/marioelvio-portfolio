import styled from "styled-components";

interface ModeProps {
    mode: string | null;
}

export const Button = styled.button<ModeProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--black' : '--skeptic'});
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    display: flex;
    align-items: center;

    gap: 8px;
    padding: 8px 0 8px 8px;
    border: none;

    font-size: 22px;

    cursor: pointer;

    transition: all ease-in .5s;
`;