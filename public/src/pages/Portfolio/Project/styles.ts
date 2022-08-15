import styled from "styled-components";

export const Project = styled.div`
    background-color: var(--limed-spruce);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    width: 100%;

    img { 
        width: 100%;
        transition: all ease-in .3s;
    }

    .project-info {
        display: none;
        align-items: center;
        flex-direction: column;
        position: absolute;

        gap: 24px;

        transition: all ease-in .3s;

        h3 {
            color: var(--white);
            font-size: 24px;
        }

        a {
            background-color: var(--skeptic);
            color: var(--limed-spruce);

            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;

            padding: 8px 24px;
            border-radius: 20px;

            &:hover { background-color: var(--de-york); }
        }
    }

    &:hover, &:focus {
        img { opacity: .05; }

        .project-info { display: flex; }
    }
`;