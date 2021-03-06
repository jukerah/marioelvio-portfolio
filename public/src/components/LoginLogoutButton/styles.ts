import styled from "styled-components";

interface ModeProps {
    mode: string | null;
}
export const LoginLogoutButton = styled.div<ModeProps>`    
    a {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        display: flex;
        align-items: center;

        gap: 8px;
        padding: 8px 0 8px 8px;

        font-size: 22px;
        text-decoration: none;

        cursor: pointer;

        transition: all ease-in .5s;

        img {
            width: 24px;
            height: 24px;
        }

        @media (min-width: 1024px) {
            &:hover { text-decoration: underline; }
        }
    }
`;