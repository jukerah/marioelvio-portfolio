import styled from "styled-components";

export const NotFound = styled.section`
    display: flex;
    justify-content: center;

    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;

    width: 100%;
    max-width: 1440px;

    padding: 104px 24px 40px 24px;
    gap: 32px;

    h1 { font-size: 28px; }
    p { 
        font-size: 56px;
        font-weight: bold;
        color: var(--outer-space);
    }

    @media (min-width: 768px) { p { font-size: 96px; } }

    @media (min-width: 1024px) {
        padding: 160px 24px 80px 24px;
        gap: 48px;

        font-size: 56px;

        h1 { font-size: 56px; }
        p { font-size: 128px; }
    }
`;