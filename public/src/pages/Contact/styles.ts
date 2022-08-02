import styled from "styled-components";

interface Props {
    mode?: string | null;
    //isMenuOpen?: boolean;
}

export const ContactSection = styled.section<Props>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white'});

    display: flex;

    width: 100%;

    padding: 60px 24px 24px 24px;

    transition: all ease-in .5s;

    @media (min-width: 768px) {
        padding: 80px 24px 24px 24px;
    }

    @media (min-width: 1024px) {
        padding: 100px 32px 32px 32px;
    }
`;