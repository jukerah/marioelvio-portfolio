import styled from "styled-components";

export const ContainerSlider = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    height: 100%;
`;

export const Slider = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    width: 100%;    

    @media (min-width: 1024px) {
        &:hover {
            .button-change-img { display: flex; }
        }
    }
`;

interface ContainerProjectProps {
    position: number;
    countBanner: number;
}

export const ContainerProject = styled.div<ContainerProjectProps>`
    display: flex;
    position: relative;
    
    width: calc(100% * ${(props) => props.countBanner});

    right: ${(props) => props.position}%;
    transition: all ease 0.5s;
`;

interface ContainerPercentProps {
    position: number;
}

export const ContainerPercent = styled.div<ContainerPercentProps>`
    background-color: var(--limed-spruce);
    display: flex;

    width: 100%;
    height: 6px;

    .percent-line {
        background-color: var(--de-york);

        width: ${(props) => props.position}%;
        height: 100%;
    }

    @media (min-width: 768px) { height: 8px; }
`;

export const PositionButton = styled.div`
    background-color: var(--white);

    width: 16px;
    height: 16px;

    border-radius: 50%;
    cursor: pointer;

    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

interface ButtonChangeImgProps {
    mode: string;
    position: string;
    disable: boolean;
}

export const ButtonChangeImg = styled.div<ButtonChangeImgProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;

    left: ${(props) => (props.position === 'left') && 0};
    right: ${(props) => (props.position === 'right') && 0};
    padding: ${(props) => (props.position === 'left') ? '24px 16px 24px 0' : '24px 0 24px 16px'};

    cursor: pointer;

    .button-change-img {
        background-color: ${(props) => (props.mode === 'dark') ? 'rgba(255, 255, 255, .7)' : 'rgba(0, 0, 0, .7)'};
        opacity: ${(props) => (props.disable)
            ? '0.1'
            : '1'
        };

        display: flex;
        justify-content: center;
        align-items: center;

        width: 40px;
        height: 64px;
    }

    svg {
        stroke: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--white'});

        width: 56px;
        height: 56px;

        left: ${(props) => (props.position === 'left') && '-16px'};
        right: ${(props) => (props.position === 'right') && '-16px'};

        transition: all ease-in .5s;
    }

    @media (min-width: 768px) {
        padding: ${(props) => (props.position === 'left') ? '56px 48px 56px 0' : '56px 0 56px 48px'};
    }

    @media (min-width: 1024px) {
        position: initial;
        z-index: 0;

        width: 64px;
        height: 100%;
        padding: 0;

        .button-change-img {
            background-color: rgba(0, 0, 0, 0);
            opacity: 1;

            width: 100%;
            height: 100%;
        }

        svg {
            stroke: var(${(props) => props.mode === 'dark'
                ? props.disable
                    ? '--limed-spruce'
                    : '--white'
                : props.disable
                    ? '--alto'
                    : '--limed-spruce'
            });
        }
    }
`;