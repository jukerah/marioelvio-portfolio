import styled from "styled-components";

interface Props {
    mode: string | null;
}

export const Card = styled.div<Props>`
    display: flex;

    width: 100%;
`;