import styled from "styled-components";

interface ContactSectionProps {
    mode: string;
}

export const ContactSection = styled.section<ContactSectionProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white'});
    ${(props) => props.mode === 'dark'
        ? `background-image: url("data:image/svg+xml,%3Csvg width='320' height='540' viewBox='0 0 320 540' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='320' height='540'/%3E%3Cpath d='M320 215.639L0 367.381V311.742L320 160V215.639Z' fill='%232E433B'/%3E%3Cpath d='M320 266.219L0 417.961V362.323L320 210.581V266.219Z' fill='%233D6350'/%3E%3Cpath d='M320 312.488L0 464.23V408.592L320 256.85V312.488Z' fill='%234D8366'/%3E%3Cpath d='M320 367.38L0 519.122V463.483L320 311.742V367.38Z' fill='%235CA37B'/%3E%3Cpath d='M320 540H0V514.71L320 362.968V540Z' fill='%236BC38B'/%3E%3C/svg%3E");`
        : `background-image: url("data:image/svg+xml,%3Csvg width='320' height='540' viewBox='0 0 320 540' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='320' height='540'/%3E%3Cpath d='M320 215.734L0 367.734V312.001L320 160V215.734Z' fill='%23EFFFF5'/%3E%3Cpath d='M320 266.4L0 418.4V362.667L320 210.666V266.4Z' fill='%23DEFEEA'/%3E%3Cpath d='M320 311.85L0 463.85V408.117L320 256.116V311.85Z' fill='%23D1F3DE'/%3E%3Cpath d='M320 367.733L0 519.734V464.001L320 312V367.733Z' fill='%23CCEDD8'/%3E%3Cpath d='M320 540H0V514.667L320 362.666V540Z' fill='%23C2E3CE'/%3E%3C/svg%3E");`
    };
    background-size: cover;
    background-position: center;

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

interface ContainerInfoFormProps {
    isMenuOpen: boolean;
}

export const ContainerInfoForm = styled.div<ContainerInfoFormProps>`
    display: flex;
    flex-direction: column;

    gap: 32px;

    @media (min-width: 768px) {
        flex-direction: row;

        gap: 24px;;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        flex-direction: ${(props) => props.isMenuOpen ? 'column' : 'row'};
    }
`;

interface InfoProps {
    mode: string;
    isMenuOpen: boolean;
}

export const Info = styled.div<InfoProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    gap: 32px;

    transition: all ease-in .5s;

    .description {
        font-size: 1.125em;
        text-align: center;
    }

    ul {
        display: flex;
        flex-direction: column;

        list-style: none;

        gap: 16px;
    }

    li {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    a, p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed_spruce'});
    }

    a {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed_spruce'});
        
        font-size: 16px;
        text-decoration: none;
    }

    svg {
        stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        width: 24px;
        height: 24px;
    }

    @media (min-width: 350px) {
        li a,
        li p { font-size: 18px; }
    }

    @media (min-width: 768px) {
        background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alabaster'});
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

        justify-content: center;
        
        flex: 1;
        padding: 24px;
        gap: 56px;

        border-radius: 32px 0;

        .description { font-size: 1.625em; }

        ul { gap: 24px; }
        li a { font-size: 20px; }
    }

    @media (min-width: 1024px) {
        ul { gap: 32px; }
        li { gap: 24px; }
        li a { font-size: 24px; }

        padding: 32px;
        gap: 88px;
    }

    @media (min-width: 1150px) {
        .description { font-size: 2em; }

        li a { font-size: 28px; }
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        li a { font-size: ${(props) => props.isMenuOpen ? '22px' : '28px'}; }
    }
`;