import styled from "styled-components";

interface PortfolioSectionProps {
    mode: string | null;
}

export const PortfolioSection = styled.section<PortfolioSectionProps>`
    background-color: var(${(props) => props.mode === 'dark'
        ? '--shark-dark'
        : '--white'
    });

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    width: 100%;
    min-height: calc(100vh - 60px);

    padding-top: 60px;

    transition: all ease-in .5s;

    @media (min-width: 768px) {
        min-height: calc(100vh - 80px);
        padding-top: 80px;
    }

    @media (min-width: 1024px) {
        min-height: calc(100vh - 100px);
        padding-top: 100px;
    }
`;

export const Container = styled.div`
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

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;

    gap: 16px;
`;

export const SelectButton = styled.select`
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

interface ButtonProps {
    mode: string | null;
    isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
    background-color: var(${(props) => props.mode === 'dark'
        ? props.isActive
            ? '--de-york'
            : '--white'
        : props.isActive
            ? '--de-york'
            : '--limed-spruce'
    });
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 40px;
    height: 40px;
    
    border: none;
    box-shadow: ${(props) => props.isActive && '2px 2px 2px rgba(0, 0, 0, 0.25)'};

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