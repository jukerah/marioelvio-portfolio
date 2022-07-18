import styled from "styled-components";

export const Header = styled.header`
    background-color: red;

    display: flex;
    justify-content: center;

    width: 100%;
    height: 60px;

    @media (min-width: 768px) {
        height: 80px;
    }

    @media (min-width: 1024px) {
        height: 100px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1366px;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
    }
`;