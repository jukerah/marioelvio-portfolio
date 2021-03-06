import styled from "styled-components";
interface Props {
    mode?: string | null;
    isMenuOpen?: boolean;
    lang?: string;
    backgroundLandscapeSmall?: string;
    backgroundLandscapeLarge?: string;
    backgroundPortrait?: string;
}

export const HomeSection = styled.section<Props>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

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

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: flex-end;

    gap: 28px;
    margin-top: 60px;

    @media (orientation: landscape) { padding: 24px 0; }

    @media (min-width: 768px) {
        gap: 48px;
        margin-top: 80px;
    }

    @media (min-width: 1024px) {
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

export const ContainerInfo = styled.div<Props>`
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

export const Info = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 24px;
    
    h1 {
        color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.4;
        white-space: nowrap;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    }

    .title-hello {
        font-size: ${(props) => props.lang === 'en' ? '32px' : '24px'};
    }
    .title-name  {
        font-size: ${(props) => props.lang === 'en' ? '35px' : '28.5px'};
    }
    .title-work  {
        font-size: ${(props) => props.lang === 'en' ? '24px' : '20px'};
    }
    .accent-color {
        color: var(${(props) => props.mode === 'dark' ? '--de-york' : '--green-pea'});
    }

    @media (min-width: 360px) {
        .title-hello {
            font-size: ${(props) => props.lang === 'en' ? '34px' : '28px'};
        }
        .title-name  {
            font-size: ${(props) => props.lang === 'en' ? '41px' : '31.5px'};
        }
        .title-work  {
            font-size: ${(props) => props.lang === 'en' ? '28px' : '22px'};
        }
    }

    @media (min-width: 400px) {
        .title-name  {
            font-size: ${(props) => props.lang === 'en' ? '45.2px' : '35.7px'};
        }
        .title-work  {
            font-size: ${(props) => props.lang === 'en' ? '31px' : '25px'};
        }
    }
    
    @media (min-width: 768px) {
        h1 {
            line-height: 1.1;
            text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        }

        gap: 40px;

        .title-hello {
            font-size: 56px;
        }
        .title-name  {
            font-size: ${(props) => props.lang === 'en' ? '82px' : '66px'};
        }
        .title-work  {
            font-size: ${(props) => props.lang === 'en' ? '56px' : '46.1px'};
        }
    }

    @media (min-width: 1024px) {
        height: 340px;

        gap: 0;

        h1 { line-height: 1.2; }

        .title-hello {
            font-size: ${(props) => props.lang === 'en' ? '56px' : '56px'};
        }
        .title-name  {
            font-size: ${(props) => props.lang === 'en' ? '70px' : '55.8px'};
        }
        .title-work  {
            font-size: ${(props) => props.lang === 'en' ? '48px' : '38.9px'};
        }
    }
`;

export const SocialButtons = styled.div`
    display: flex;
    justify-content: space-between;

    gap: 16px;
    
    a {
        .img-hover { display: none; }

        &:hover, &:focus {
            .img {display: none; }
            .img-hover {display: block; }
        }
    }

    a {
        width: 56px;
        height: 56px;

        img {
            width: 56px;
            height: 56px;

            border-radius: 6px;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        }
    }

    @media (min-width: 360px) {
        a {
            width: 64px;
            height: 64px;

            img {
                width: 64px;
                height: 64px;
            }
        }
    }

    @media (min-width: 400px) {
        a {
            width: 72px;
            height: 72px;

            img {
                width: 72px;
                height: 72px;
            }
        }
    }

    @media (min-width: 768px) {
        a {
            width: 128px;
            height: 128px;

            img {
                width: 128px;
                height: 128px;

                border-radius: 12px;
                box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
            }
        }
    }

    @media (min-width: 1024px) {
        a {
            width: 96px;
            height: 96px;

            img {
                width: 96px;
                height: 96px;

                border-radius: 8px;
            }
        }
    }
`;

export const NavButtons = styled.div<Props>`
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