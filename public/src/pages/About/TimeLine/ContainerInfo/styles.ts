import styled from "styled-components";

interface Props {
    mode: string | null;
}

export const ContainerInfo = styled.div<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'});

    flex: 1;
    border-left: 4px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
    border-right: 4px solid var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});

    padding: 8px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

    transition: all ease-in .1s;

    &:hover {
        background-color: var(--white-ice);
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
    }
`;