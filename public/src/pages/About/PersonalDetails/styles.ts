import styled from "styled-components";

interface Props {
    mode: string | null;
    isMenuOpen: boolean;
}

export const PersonalDetails = styled.div<Props>`
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 16px;
    
    .container-info {
        display: flex;
        flex-direction: column;

        gap: 16px;

        figure {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            gap: 16px;

            img {
                width: 24px;
                height: 24px;
            }
            
            font-size: 16px;
        }
        
        a, figcaption {
            color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed_spruce'});
            text-decoration: none;
            word-break: break-word;
        }

        div {
            display: flex;
            flex-direction: column;

            gap: 16px;
        }
    }

    @media (min-width: 350px) {
        figure { font-size: 18px !important; }
    }

    @media (min-width: 380px) {
        figure { font-size: 22px !important; }
    }

    @media (min-width: 768px) {
        gap: 24px;

        .container-info {
            flex-direction: row;

            figure { font-size: 1.375em; }
            
            gap: ${(props) => props.isMenuOpen ? '32px' : '48px'};
        }
    }

    @media (min-width: 1024px) { gap: 32px; }
`;