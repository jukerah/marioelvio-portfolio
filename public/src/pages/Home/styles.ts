import styled from "styled-components";
interface Props {
    mode?: string | null;
    isMenuOpen?: boolean;
    backgroundLandscapeSmall?: string;
    backgroundLandscapeLarge?: string;
    backgroundPortrait?: string;
}

export const HomeSection = styled.section<Props>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: calc(100vh - 60px);

    @media (min-width: 768px) { height: calc(100vh - 80px); }

    @media (min-width: 1024px) { height: calc(100vh - 100px); }

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

export const Container = styled.section`
    //width: 500px;
`;

export const ContainerInfo = styled.section`

`;

export const Info = styled.section`

`;

export const Buttons = styled.div`
    display: flex;

    a {
        img {
            width: 56px;
            height: 56px;

            transition: all ease-in .2s;
        }

        .img-hover {display: none; }

        &:hover, &:focus {
            .img {display: none; }
            .img-hover {display: block; }
        }
    }

    button {

    }

    @media (min-width: 768px) {
        a {
            img {
                width: 128px;
                height: 128px;
            }
        }
    }

    @media (min-width: 1024px) {
        a {
            img {
                width: 96px;
                height: 96px;
            }
        }
    }
`;