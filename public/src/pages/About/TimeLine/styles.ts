import styled from "styled-components";

interface Props {
    mode: string | null;
    isMenuOpen?: boolean;
}

export const TimeLine = styled.div<Props>`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 16px;

    @media (min-width: 768px) {
        flex-direction: row;

        gap: 0;
        padding: 24px 0;

        h2 { margin-bottom: 8px; }
    }

    @media (min-width: 1024px) { padding: 32px 0; }

    @media (min-width: 1024px) and (max-width: 1200px) {
        flex-direction: ${(props) => props.isMenuOpen ? 'column' : 'row'};
        height: ${(props) => props.isMenuOpen && '100%'};

        padding: ${(props) => props.isMenuOpen ? 0 : '32px 0'};
    }
`;

export const CenterLine = styled.div<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
    
    display: none;

    width: 4px;

    margin-top: -24px;

    transition: all ease-in .1s;

    @media (min-width: 768px) {
        display: flex;

        height: calc(100% + 48px);
    }

    @media (min-width: 1024px) {
        height: calc(100% + 64px);

        margin-top: -32px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        display: ${(props) => props.isMenuOpen ? 'none' : 'flex'};
    }
`;

export const ContainerLeft = styled.div<Props>`
    display: flex;
    flex-direction: column;

    flex: 1;

    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;

export const ContainerRight = styled.div<Props>`
    display: flex;
    flex-direction: column;

    flex: 1;
    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;