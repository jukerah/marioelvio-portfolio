import styled from "styled-components";

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

    .container-fone {
        display: flex;
        gap: 16px;
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

        .container-fone { gap: 24px; }

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

interface SelectProps {
    mode: string;
}

export const Select = styled.select<SelectProps>`
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

    border: 4px solid var(--alto);
    box-sizing: border-box;

    height: 48px;
    max-height: 100px;
    
    padding: 8px 40px 8px 8px;
    resize: none;

    font-size: 16px;

    p:hover {
        background-color: red;
    }

    &:focus {
        outline: none;
        border-color: var(--dodger-blue);
    }

    &::placeholder { color: var(--scorpion); }

    &::-webkit-scrollbar {
        width: 16px;
        background-color: var(--scorpion);
    }

    &::-webkit-scrollbar-thumb { background-color: var(--de-york); }

    @media (min-width: 1024px) {
        height: 56px;
        font-size: 22px;
    }
`;