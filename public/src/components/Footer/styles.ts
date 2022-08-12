import styled from "styled-components";

interface ModeProps {
    mode: string | null;
}

export const Footer = styled.footer<ModeProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'});

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 150px;

    font-size: 0.75em;
    text-align: center;

    transition: all ease-in .5s;

    gap: 32px;

    p {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
    }

    @media (min-width: 430px) { font-size: 1em; }

    @media (min-width: 768px) {
        height: 160px;

        font-size: 1.125em;
    }

    @media (min-width: 1024px) {
        height: 250px;

        font-size: 1.375em;
    }
`;

export const SocialButtons = styled.div<ModeProps>`
    display: flex;
    justify-content: center;

    gap: 16px;

    a {
        width: 40px;
        height: 40px;
        
        svg {
            width: 40px;
            height: 40px;

            border-radius: 6px;

            transition: all ease-in .1s;
        }

        .fill-social {
            fill: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--white'});
        }

        .fill-background {
            fill: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});
        }

        &:hover {
            .fill-social { fill: var(--limed-spruce); }

            .fill-background { fill: var(--de-york); }
        }
    }

    @media (min-width: 1024px) {
        gap: 24px;

        a {
            width: 64px;
            height: 64px;
            
            svg {
                width: 64px;
                height: 64px;

                border-radius: 6px;

                transition: all ease-in .1s;
            }
        }
    }
`;