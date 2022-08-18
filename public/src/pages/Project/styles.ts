import styled from "styled-components";

interface ProjectSectionProps {
    mode: string | null;
}

export const ProjectSection = styled.section<ProjectSectionProps>`
    background-color: var(${(props) => props.mode === 'dark'
        ? '--shark-dark'
        : '--white'
    });

    display: flex;
    justify-content: space-between;
    align-items: center;
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

interface ContainerProps {
    mode: string | null;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    width: 100%;
    max-width: 1366px;

    padding: 24px;
    gap: 32px;

    h1 {
        color: var(${(props) => props.mode === 'dark'
            ? '--white'
            : '--limed-spruce'
        });

        font-size: 1.5em;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        line-height: 110%;
    }

    h2 {
        color: var(${(props) => props.mode === 'dark'
            ? '--de-york'
            : '--green-pea'
        });

        font-size: 1.25em;
        text-align: center;
        text-transform: uppercase;
        line-height: 110%;
    }

    img {
        width: 100%;
        height: auto;
    }
    
    @media (min-width: 768px) {
        gap: 40px;

        h1 { font-size: 2em; }
        h2 { font-size: 2em; }
    }

    @media (min-width: 1024px) {
        padding: 32px;

        h1 { font-size: 3em; }
        h2 { font-size: 2.5em; }
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 8px;
`;

interface DescriptionProps {
    mode: string | null;
}

export const Description = styled.div<DescriptionProps>`
    display: flex;
    flex-direction: column;

    gap: 16px;

    p {
        color: var(${(props) => props.mode === 'dark'
            ? '--white'
            : '--limed-spruce'
        });
        
        font-size: 1em;
        text-indent: 1.5em;
        line-height: 150%;
    }

    @media (min-width: 768px) {
        gap: 24px;

        p { font-size: 1.375em; }
    }
`;

interface ContainerTechResProps {
    isMenuOpen: boolean;
}

export const ContainerTechRes = styled.div<ContainerTechResProps>`
    display: flex;
    flex-direction: column;

    gap: 32px;

    @media (min-width: 768px) { flex-direction: row; }

    @media (min-width: 1024px) { gap: 48px; }

    @media (min-width: 1024px) and (max-width: 1200px) {
        flex-direction: ${(props) => props.isMenuOpen
            ? 'column'
            : 'row'
        };
    }
`;

interface TechnologiesProps {
    mode: string | null;
}

export const Technologies = styled.div<TechnologiesProps>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    gap: 16px;

    flex: 1;

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        flex-wrap: wrap;

        gap: 16px;
    }

    p {
        background-color: var(${(props) => props.mode === 'dark'
            ? '--limed-spruce'
            : '--alto'
        });
        color: var(${(props) => props.mode === 'dark'
            ? '--white'
            : '--limed-spruce'
        });

        font-size: 16px;

        padding: 8px;
        border-radius: 8px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

        transition: all ease-in .1s;
    }

    p:hover {
        background-color: var(--skeptic);
        color: var(--limed-spruce);

        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 768px) {
        p { font-size: 18px; }

        gap: 24px;
    }

    @media (min-width: 1024px) {
        p {
            font-size: 22px;
            padding: 16px;
        }
    }
`;

interface ResourcesProps {
    mode: string | null;
}


export const Resources = styled.div<ResourcesProps>`
    display: flex;
    flex-direction: column;

    gap: 16px;

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        flex-wrap: wrap;

        gap: 16px;
    }

    a {
        background-color: var(${(props) => props.mode === 'dark'
            ? '--limed-spruce'
            : '--alto'
        });

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-decoration: none;

        width: 80px;
        height: 80px;

        gap: 8px;
        border-radius: 8px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

        transition: all ease-in .1s;
    
        svg {
            .stroke {
                stroke: var(${(props) => props.mode === 'dark'
                    ? '--white'
                    : '--limed-spruce'
                });
            }

            .fill {
                fill: var(${(props) => props.mode === 'dark'
                    ? '--white'
                    : '--limed-spruce'
                });
            }

            width: 24px;
            height: 24px;

            transition: all ease-in .1s;
        }

        p {
            color: var(${(props) => props.mode === 'dark'
                ? '--white'
                : '--limed-spruce'
            });

            font-size: 16px;
        }
    }

    a:hover {
        background-color: var(--skeptic);
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);

        p { color: var(--limed-spruce); }

        .stroke { stroke: var(--limed-spruce); }

        .fill { fill: var(--limed-spruce); }
    }

    @media (min-width: 768px) { gap: 24px; }

    @media (min-width: 1024px) {
        a {
            width: 128px;
            height: 128px;

            svg {
                width: 64px;
                height: 64px;
            }

            p { font-size: 22px; }
        }
    }
`;

interface BackButtonProps {
    mode: string | null;
}

export const BackButton = styled.div<BackButtonProps>`
    background-color: var(${(props) => props.mode === 'dark'
        ? '--limed-spruce'
        : '--alto'
    });

    display: flex;
    align-items: center;
    box-sizing: border-box;

    width: 80px;
    height: 32px;
    
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

    padding-left: 2px;
    gap: 8px;

    cursor: pointer;

    &, svg, p { transition: all ease-in .1s; }

    svg {
        stroke: var(${(props) => props.mode === 'dark' ? '--white' : '--limed-spruce'});

        width: 24px;
        height: 24px;
    }

    p {
        color: var(${(props) => props.mode === 'dark'
            ? '--white'
            : '--limed-spruce'
        });

        font-size: 16px;
        margin-bottom: 2px;
    }

    &:hover {
        background-color: var(--de-york);

        svg { stroke: var(--limed-spruce) };

        p { color: var(--limed-spruce); }

        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 1024px) {
        width: 104px;
        height: 40px;

        p { font-size: 22px; }

        padding-left: 8px;
    }
`;