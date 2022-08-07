import styled from "styled-components";

interface Props {
    mode?: string | null;
}

export const Resume = styled.div<Props>`
    display: flex;
    flex-direction: column;

    gap: 16px;

    p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
        
        font-size: 1em;
        text-indent: 1.5em;
        
        transition: all ease-in .5s;
    }

    @media (min-width: 768px) {
        p { font-size: 1.375em; }

        gap: 24px;
    }

    @media (min-width: 1024px) { gap: 32px; }
`;