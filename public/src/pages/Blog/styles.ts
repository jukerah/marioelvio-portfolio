import styled from "styled-components";

interface BlogSectionProps {
    mode: string;
}

export const BlogSection = styled.section<BlogSectionProps>`
    background-color: var(${(props) => props.mode === 'dark' ? '--shark-dark' : '--white'});
    * { color: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'}); }

    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: calc(100vh - 60px);

    padding-top: 60px;

    transition: all ease-in .5s;

    @media (min-width: 768px) {
        min-height: calc(100vh - 80px);
        padding-top: 80px;
    }

    @media (min-width: 1024px) {
        min-height: calc(100vh - 100px);
        padding-top: 100px;
    }
`;