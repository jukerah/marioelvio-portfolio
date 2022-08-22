import styled from "styled-components";

interface ContactSectionProps {
    mode: string;
    background: string;
}

export const ContactSection = styled.section<ContactSectionProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white'});
    background-image: url(${props => props.background});
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

interface FormProps {
    mode: string;
}

export const Form = styled.form<FormProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alabaster'});
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;

    width: 100%;

    padding: 24px;
    gap: 16px;
    border-radius: 0 32px;

    transition: all ease-in .5s;

    .container {
        display: flex;
        flex-direction: column;

        width: 100%;

        gap: 8px;
    }

    .container p {
        color: var(${(props) => props.mode === 'dark' ? '--vivid-tangerine' : '--alizarin-crimson'});

        display: block;
        height: 20px;

        font-size: 16px;
        margin-top: 4px;
    }

    button {
        background-color: var(--de-york);
        
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        width: 176px;
        height: 40px;

        font-size: 16px;
        font-weight: 700;

        padding: 0 16px;
        border: none;

        gap: 8px;

        cursor: pointer;

        p {
            color: var(--limed-spruce); 
            margin-top: -2px;
        }

        svg {
            stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

            width: 24px;
            height: 24px;
        }
    }

    @media (min-width: 768px) { flex: 1; }

    @media (min-width: 1024px) {
        padding: 32px;

        button {
            width: 240px;
            height: 48px;

            p {
                font-size: 24px;
                margin-top: -4px;
            }
        }
    }
`;

interface InputProps {
    mode: string;
    alert: boolean;
    isValited: boolean;
}

export const Input = styled.input<InputProps>`    
    background-color: var(--alto);
    color: var(--limed-spruce);
    border: 4px solid var(--alto);
    border-color: var(${(props) => props.alert
        ? props.mode === 'dark'
            ? '--vivid-tangerine'
            : '--alizarin-crimson'
        : props.isValited
            ? '--silver-tree'
            : '--alto'
    });
    box-sizing: border-box;
    
    width: 100%;
    height: 48px;
    padding: 0 16px;

    font-size: 16px;

    &:focus {
        outline: none;
        border-color: var(${(props) => props.isValited ? '--silver-tree' : '--dodger-blue'});
    }

    &::placeholder { color: var(--scorpion); }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] { -moz-appearance: textfield; }

    @media (min-width: 1024px) {
        height: 56px;
        font-size: 22px;
    }
`;

interface TextAreaProps {
    mode: string;
    alert: boolean;
    isValited: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
    background-color: var(--alto);
    color: var(--limed-spruce);
    border: 4px solid var(--alto);
    border-color: var(${(props) => props.alert
        ? props.mode === 'dark'
            ? '--vivid-tangerine'
            : '--alizarin-crimson'
        : props.isValited
            ? '--silver-tree'
            : '--alto'
    });
    box-sizing: border-box;
    
    width: 100%;

    font-size: 16px;

    padding: 8px 16px;
    resize: none;

    &:focus {
        outline: none;
        border-color: var(${(props) => props.isValited ? '--silver-tree' : '--dodger-blue'});
    }

    &::placeholder { color: var(--scorpion); }

    &::-webkit-scrollbar {
        width: 16px;
        background-color: var(--scorpion);
    }

    &::-webkit-scrollbar-thumb { background-color: var(--de-york); }

    @media (min-width: 1024px) { font-size: 22px; }
`;