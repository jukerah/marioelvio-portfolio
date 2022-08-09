import styled from "styled-components";

interface ModeProps {
    mode: string | null;
}

export const CardTech = styled.figure<ModeProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--limed-spruce' : '--alto'});
    color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 144px;

    font-size: 16px;
    text-align: center;

    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    gap: 16px;

    transition: all ease-in .1s;

    img {
        width: 64px;
        height: 64px;
    }

    .img-hover { display: none; }

    &:hover {
        background-color: var(--skeptic);
        color: var(--limed-spruce);
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);

        .img-hover { display: block; }
        .img { display: none; }
    }

    @media (min-width: 768px) {
        height: 200px;
        
        font-size: 18px;

        img {
            width: 104px;
            height: 104px;
        }
    }

    @media (min-width: 1024px) {
        height: 214px;

        font-size: 20px;

        img {
            width: 128px;
            height: 128px;
        }
    }
`;