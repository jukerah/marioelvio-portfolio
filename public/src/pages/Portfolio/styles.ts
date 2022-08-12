import styled from "styled-components";

interface Props {
    mode?: string | null;
    showMode?: 'slider' | 'grid';
    isActive?: boolean;
}

export const PortfolioSection = styled.section<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white'});

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;

    padding-top: 60px;

    transition: all ease-in .5s;

    @media (min-width: 768px) { padding-top: 80px; }

    @media (min-width: 1024px) { padding-top: 100px; }
`;

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    width: 100%;
    max-width: 1366px;

    padding: 0 24px 24px 24px;
    gap: 32px;

    @media (min-width: 768px) { gap: 40px; }

    @media (min-width: 1024px) {
        padding: 0 32px 32px 32px;
        gap: 48px;
    }
`;

export const ContainerButtons = styled.div<Props>`
    display: flex;
    justify-content: center;

    width: 100%;

    gap: 16px;
`;

export const SelectButton = styled.select<Props>`
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background-color: var(--alto);
	background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%23374047' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position-x: calc(100% - 8px);
    background-position-y: center;
    color: var(--limed-spruce);  

    height: 40px;
    
    font-size: 16px;

    padding: 8px 40px 8px 8px;
    border: none;

    &:focus { outline: none; }

    option {
        
    }

    option:checked { background-color: var(--skeptic); }

    cursor: pointer;

    @media (min-width: 1024px) {
        height: 48px;

        font-size: 22px;
    }
`;

export const Button = styled.button<Props>`
    background-color: var(${(props) => props.mode === 'dark'
        ? props.isActive
            ? '--de-york'
            : '--white'
        : props.isActive
            ? '--de-york'
            : '--limed-spruce'
    });
    box-shadow: ${(props) => props.isActive && '2px 2px 2px rgba(0, 0, 0, 0.25)'};

    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    border: none;

    cursor: pointer;

    transition: all ease-in .1s;

    svg {

        stroke: var(${(props) => props.mode === 'dark'
            ? '--limed-spruce'
            : props.isActive
                ? '--limed-spruce'
                : '--white'
        });

        width: 24px;
        height: 24px;

        transition: all ease-in .1s;
    }

    &:hover {
        background-color: var(--de-york);
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

        svg { stroke: var(--limed-spruce); }
    }

    @media (min-width: 1024px) {
        width: 48px;
        height: 48px;
    }
`;

export const ContainerPortfolio = styled.div`
    width: 100%;
`;

export const SliderMode = styled.div<Props>`
    display: ${(props) => props.showMode === 'slider' ? 'flex' : 'none'};

    width: 100%;

    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;

export const GridMode = styled.div<Props>`
    display: ${(props) => props.showMode === 'grid' ? 'flex' : 'none'};
    flex-direction: column;

    width: 100%;

    gap: 16px;

    @media (min-width: 1024px) { gap: 24px; }
`;

export const Project = styled.div`
    background-color: var(--skeptic);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    width: 100%;

    img { 
        width: 100%;
        transition: all ease-in .3s;
    }

    .project-info {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: absolute;

        gap: 24px;

        transition: all ease-in .3s;
        opacity: 0;

        h3 {
            color: var(--limed-spruce);
            font-size: 24px;
        }

        a {
            background-color: var(--limed-spruce);
            color: var(--white);

            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;

            padding: 8px 24px;
            border-radius: 20px;
        }
    }

    &:hover, &:focus {
        img { opacity: 0; }

        .project-info { opacity: 1; }
    }
`;