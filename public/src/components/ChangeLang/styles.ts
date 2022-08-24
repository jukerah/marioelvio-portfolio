import styled from "styled-components";

interface ChangeLangProps {
    mode: string;
}

export const ChangeLang = styled.button<ChangeLangProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'}); 
    border: none;

    display: flex;
    align-items: center;

    width: 80px;

    gap: 8px;

    cursor: pointer;

    transition: all ease-in .5s;

    svg {
        width: 40px;
        height: 30px;
    }

    p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
        font-size: 22px;

        margin-bottom: 4px;
        transition: all ease-in .5s;
    }

    @media (min-width: 1024px) {
        background-color: var(${(props) => props.mode === 'dark' ? '--black' : '--skeptic'});

        p { margin-top: 4px; }

        &:hover { p { text-decoration: underline; } }
    }
`;