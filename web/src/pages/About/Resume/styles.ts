import styled from "styled-components";

interface ResumeProps {
    mode: string;
}

export const Resume = styled.div<ResumeProps>`
    display: flex;
    flex-direction: column;

    gap: 16px;

    p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
        
        font-size: 1em;
        text-indent: 1.5em;
        line-height: 150%;
        
        transition: all ease-in .5s;
    }

    @media (min-width: 768px) {
        p { font-size: 1.375em; }
        
        gap: 24px;
    }

    @media (min-width: 1024px) { gap: 32px; }
`;