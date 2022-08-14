import styled from "styled-components";

export const Project = styled.div`
    background-color: var(--skeptic);

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
            color: var(--limed-spruce);
            font-size: 24px;
        }

        a {
            background-color: var(--limed-spruce);
            color: var(--white);

            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;

            padding: 8px 24px;
            border-radius: 20px;
        }
    }

    &:hover, &:focus {
        img { opacity: 0; }

        .project-info { display: flex; }
    }
`;