import styled from "styled-components";

interface HomeSectionProps {
    mode: string;
    isMenuOpen: boolean;
    backgroundLandscapeSmall: string;
    backgroundLandscapeLarge: string;
    backgroundPortrait: string;
}

export const HomeSection = styled.section<HomeSectionProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--alabaster'});

    display: flex;
    justify-content: center;
    align-items: center;

    html, body {
        overflow: hidden;
    }

    width: 100%;
    min-height: 100vh;

    transition: all ease-in .5s;

    @media (orientation: landscape) {
        background-image: url(${props => props.backgroundLandscapeSmall});
    }

    @media (min-width: 1024px) and (orientation: landscape) {
        background-image: url(${props => props.backgroundLandscapeLarge});
    }

    @media (orientation: portrait) {
        background-image: url(${props => props.backgroundPortrait});
    }

    background-size: cover;
`;

interface ContainerProps {
    isMenuOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 28px;
    margin-top: 60px;

    .load-title { animation: title 2s steps(60) both; }

    .load-avatar { animation: avatar 2s steps(60) both; }

    .load-social { animation: social 2s steps(60) both; }

    .load-button { animation: button 2s steps(60) both; }

    @keyframes title {
        from {
            transform: skew(180deg,180deg);
            opacity: 0;
            margin-top: -150vh;
        }
        50% {opacity: .5;}
        75% {opacity: .75;}
        to {
            transform: skew(0deg,0deg);
            opacity: 3;
            margin-top: 0;
        }
    }

    @keyframes avatar {
        from {
            transform: skew(-180deg,-180deg);
            opacity: 0;
            margin-left: -100vw;
        }
        50% {opacity: .5;}
        75% {opacity: .75;}
        to {
            transform: skew(0deg,0deg);
            opacity: 1;
            margin-left: 0;
        }
    }

    @keyframes social {
        from {
            transform: skew(180deg,180deg);
            opacity: 0;
        }
        50% {opacity: .5;}
        75% {opacity: .75;}
        to {
            transform: skew(0deg,0deg);
            opacity: 1;
        }
    }

    @keyframes button {
        from {
            transform: skew(-180deg,-180deg);
            opacity: 0;
            margin-bottom: -100vh;
        }
        50% {opacity: .5;}
        75% {opacity: .75;}
        to {
            transform: skew(0deg,0deg);
            opacity: 1;
            margin-bottom: 0;
        }
    }

    @media (orientation: landscape) { padding: 24px 0; }

    @media (min-width: 768px) {
        max-height: calc(100vh - 80px);

        gap: 48px;
        margin-top: 80px;
    }

    @media (min-width: 1024px) {
        max-width: calc(100vw - ${(props) => props.isMenuOpen ? '300px' : '100px'});
        max-height: calc(100vh - 100px);

        gap: 32px;
        margin-top: 0;

        margin-left: ${(props) => props.isMenuOpen ? '-24px' : 0};
    }

    @media (orientation: landscape) and (min-width: 1024px) {
        padding: 100px 0 48px 0;
    }

    @media (min-width: 1250px) {
        margin-left: 0;
    }
`;

interface ContainerInfoProps {
    isMenuOpen: boolean;
}

export const ContainerInfo = styled.div<ContainerInfoProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 24px;
    
    .avatar {
        display: none;

        width: 272px;
        height: 340px;
    }

    @media (min-width: 1024px) {
        height: 340px;

        .avatar {
            display: flex;
            width: ${(props) => props.isMenuOpen ? 0 : '272px'};
            height: ${(props) => props.isMenuOpen ? 0 : '340px'};

            transition: all ease-in .5s;
        }
    }

    @media (min-width: 1250px) {
        .avatar {
            width: 272px;
            height: 340px;
        }
    }
`;

interface InfoProps {
    mode: string;
}

export const Info = styled.div<InfoProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 24px;
    
    h1 {
        position: relative;
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        font-weight: 700;
        text-transform: uppercase;
        line-height: 1.4;
        white-space: nowrap;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    }

    .title-hello { font-size: 32px; }
    .title-name  { font-size: 35px; }
    .title-work  { font-size: 24px; }

    .accent-color {
        color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
    }

    @media (min-width: 360px) {
        .title-hello { font-size: 34px; }
        .title-name  { font-size: 41px; }
        .title-work  { font-size: 28px; }
    }

    @media (min-width: 400px) {
        .title-name  { font-size: 45.2px; }
        .title-work  { font-size: 31px; }
    }
    
    @media (min-width: 768px) {
        h1 { line-height: 1.1; }

        gap: 40px;

        .title-hello {
            font-size: 56px;
        }
        .title-name  { font-size: 82px; }
        .title-work  { font-size: 56px; }
    }

    @media (min-width: 1024px) {
        height: 340px;

        gap: 0;

        h1 { line-height: 1.2; }

        .title-hello { font-size: 56px; }
        .title-name  { font-size: 70px; }
        .title-work  { font-size: 48px; }
    }
`;

interface SocialButtonsProps {
    mode: string;
}

export const SocialButtons = styled.div<SocialButtonsProps>`
    display: flex;
    justify-content: space-between;

    gap: 16px;

    a {
        width: 56px;
        height: 56px;
        
        svg {
            width: 56px;
            height: 56px;

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

    @media (min-width: 360px) {
        a {
            width: 64px;
            height: 64px;

            svg {
                width: 64px;
                height: 64px;
            }
        }
    }

    @media (min-width: 400px) {
        a {
            width: 72px;
            height: 72px;

            svg {
                width: 72px;
                height: 72px;
            }
        }
    }

    @media (min-width: 768px) {
        a {
            width: 128px;
            height: 128px;

            svg {
                width: 128px;
                height: 128px;

                border-radius: 12px;
            }
        }
    }

    @media (min-width: 1024px) {
        a {
            width: 96px;
            height: 96px;

            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
            border-radius: 10px;

            transition: all ease-in .1s;

            svg {
                width: 96px;
                height: 96px;

                border-radius: 8px;
            }
        }

        a:hover {       
            box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
        }
    }
`;

interface NavButtonsProps {
    isMenuOpen: boolean;
}

export const NavButtons = styled.div<NavButtonsProps>`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 16px;

    @media (min-width: 768px) { gap: 32px; }

    @media (min-width: 1024px) {
        flex-direction: row;

        gap: 24px;

        padding: ${(props) => props.isMenuOpen ? '0 24px' : 0};
        max-width: ${(props) => props.isMenuOpen ? 'calc(100% - 24px)' : '100%'};
    }

    @media (min-width: 1250px) {
        padding: 0;
        max-width: 100%;
    }
`;