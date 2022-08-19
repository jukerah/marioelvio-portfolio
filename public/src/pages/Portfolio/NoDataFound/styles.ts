import styled from "styled-components";

interface NoDataFoundProps {
    mode: string;
}

export const NoDataFound = styled.p<NoDataFoundProps>`
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    font-size: 1em;

    @media (min-width: 768px) { font-size: 1.375em; }
`;