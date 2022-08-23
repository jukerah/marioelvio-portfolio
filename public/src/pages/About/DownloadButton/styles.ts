import styled from "styled-components";

interface DownloadButtonProps {
    mode: string;
}

export const DownloadButton = styled.button<DownloadButtonProps>`
    background-color: rgba(0, 0, 0, 0);
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    display: flex;
    justify-content: center;
    align-items: center;

    width: 216px;
    height: 56px;

    border: 2px solid var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
    border-radius: 28px;

    gap: 8px;

    cursor: pointer;

    transition: all ease-in .1s;

    p {
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 2px;
    }

    svg {
        stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        width: 24px;
        height: 24px;

        transition: all ease-in .1s;
    }

    &:hover {
        background-color: var(--de-york);
        color: var(--limed-spruce);
        border-color: var(--de-york);
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

        ${(props) => props.mode === 'dark' && `
            svg { stroke: var(--limed-spruce); }
        `}
    }

    @media (min-width: 1024px) {
        width: 280px;
        min-height: 64px;

        border-radius: 32px;

        p { font-size: 24px; }
    }
`;

interface BackgroundCvProps {
    mode: string;
    isOpened: boolean;
    isMenuOpen: boolean;
}

export const BackgroundCv = styled.div<BackgroundCvProps>`
    background-color: rgba(${(props) => props.mode === 'dark' ? '0,0,0, 0.9' : 'f,f,f, 0.9'});
    backdrop-filter: blur(6px);
    
    display: ${(props) => props.isOpened ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;

    width: 100%;
    height: 100vh;

    transition: all ease-in .5s;

    @media (min-width: 1024px) {
        width: calc(100% - ${(props) => props.isMenuOpen ? '300px' : '100px'});
    }
`;

interface ContainerCVProps {
    mode: string;
    isOpened: boolean;
}

export const ContainerCV = styled.div<ContainerCVProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--alto'});

    display: ${(props) => props.isOpened
        ? 'flex'
        : 'none'
    };
    justify-content: center;
    flex-direction: column;
    position: fixed;

    padding-top: 56px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    bottom: calc(50% - 100px);
    gap: 8px;

    svg {
        background-color: var(--alizarin-crimson);
        stroke: var(--white);

        position: absolute;

        width: 24px;
        height: 24px;

        top: 0;
        right: 0;
        padding: 8px;

        cursor: pointer;
    }

    a {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        font-size: 22px;
        text-decoration: none;

        padding: 8px 40px;
    }

    @media (min-width: 1024px) {
        a {
            font-size: 28px;
            padding: 16px 56px;
        }
    }
`;