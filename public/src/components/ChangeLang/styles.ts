import styled from "styled-components";

interface ModeProps {
    mode: string | null;
}

export const ChangeLang = styled.button<ModeProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'}); 
    border: none;

    display: flex;
    align-items: center;

    width: 80px;

    gap: 8px;

    cursor: pointer;

    transition: all ease-in .5s;

    img {
        width: 40px;
        height: 30px;
    }

    p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
        font-size: 22px;
    }

    @media (min-width: 1024px) {
        background-color: var(${(props) => props.mode === 'dark' ? '--black' : '--skeptic'});

        &:hover { p { text-decoration: underline; } }
    }
`;