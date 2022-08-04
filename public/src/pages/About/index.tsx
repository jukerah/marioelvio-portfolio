import { useContext, useEffect } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { TitlePage } from '../../components/TitlePage';
import { SubTitle } from '../../components/SubTitle';
import { CardTech } from '../../components/CardTech';
import { pageInfo } from '../../data/PageData';
import { svgs } from '../../data/SvgList';

export const AboutPage = (props:any) => {
    const { theme } = useContext(Context);

    useEffect(() => {
        if (props.page === 'about') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [props.page]);

    return (        
        <C.AboutSection
            mode={theme.mode.status}
        >
            <C.Container>
                <TitlePage
                    title={'About'}
                />

                <C.ContainerResume
                    mode={theme.mode.status}
                >
                    <SubTitle 
                        subTitle={pageInfo.about.personalResume.title}
                    />
                    <p>{pageInfo.about.personalResume.resume}</p>
                </C.ContainerResume>

                <C.ContainerResume
                    mode={theme.mode.status}
                >
                    <SubTitle 
                        subTitle={pageInfo.about.professionalResume.title}
                    />
                    <p>{pageInfo.about.professionalResume.resume}</p>
                </C.ContainerResume>

                <C.ContainerMyInterests
                    mode={theme.mode.status}
                    isMenuOpen={theme.isMenuOpen.status}
                >
                    <SubTitle 
                        subTitle={pageInfo.about.myInterests.title}
                    />

                    <div className='grid'>
                        {pageInfo.about.myInterests.tech.map((tech:any) => (
                            <CardTech
                                key={tech.id}
                                src={(theme.mode.status === 'dark')
                                    ? tech.img.light
                                    : tech.img.dark
                                }
                                srcHover={tech.img.primary}
                                alt={tech.img.alt}
                                tech={tech.name}
                            />
                        ))}
                    </div>        

                </C.ContainerMyInterests>

                <C.ContainerPersonalDetails
                    mode={theme.mode.status}
                >
                    <SubTitle 
                        subTitle={pageInfo.about.personalDetails.title}
                    />

                    <div className='container-info'>
                        <div>
                            <figure>
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.phone.light
                                        : svgs.systemIcon.phone.dark
                                    }
                                    alt={svgs.systemIcon.phone.alt}
                                />
                                <figcaption>
                                    <a 
                                        href={`tel:${pageInfo.about.personalDetails.phone}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {pageInfo.about.personalDetails.phone}
                                    </a>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.mail.light
                                        : svgs.systemIcon.mail.dark
                                    }
                                    alt={svgs.systemIcon.mail.alt}
                                />
                                <figcaption>
                                    <a
                                        href={`mailto:${pageInfo.about.personalDetails.email}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {pageInfo.about.personalDetails.email}
                                    </a>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.mapPin.light
                                        : svgs.systemIcon.mapPin.dark
                                    }
                                    alt={svgs.systemIcon.mapPin.alt}
                                />
                                <figcaption>
                                    {pageInfo.about.personalDetails.address}
                                </figcaption>
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.linkedin.light
                                        : svgs.systemIcon.linkedin.dark
                                    }
                                    alt={svgs.systemIcon.linkedin.alt}
                                />
                                <figcaption>
                                    <a
                                        href={pageInfo.about.personalDetails.linkedin.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {pageInfo.about.personalDetails.linkedin.text}
                                    </a>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.github.light
                                        : svgs.systemIcon.github.dark
                                    }
                                    alt={svgs.systemIcon.github.alt}
                                />
                                <figcaption>
                                    <a
                                        href={pageInfo.about.personalDetails.github.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {pageInfo.about.personalDetails.github.text}
                                    </a>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.youtube.light
                                        : svgs.systemIcon.youtube.dark
                                    }
                                    alt={svgs.systemIcon.youtube.alt}
                                />
                                <figcaption>
                                    <a
                                        href={pageInfo.about.personalDetails.youtube.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {pageInfo.about.personalDetails.youtube.text}
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </C.ContainerPersonalDetails>
            </C.Container>
        </C.AboutSection>
        
    );
};