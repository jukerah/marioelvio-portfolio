import { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as C from './styles';

import { svgs } from '../../data/SvgList';
import { Context } from '../../contexts/Contexts';
import { PrimaryButton } from '../../components/PrimaryButton';

export const HomePage = (props:any) => {
    const homePage = useRef(props.linkScroll);
    const { t, i18n } = useTranslation();
    const { theme } = useContext(Context);
    
    useEffect(() => {
        if (props.linkScroll === 'home') {           
            homePage.current.scrollIntoView({ behavior: 'smooth'})
        }
    }, [props.linkScroll]);
    
    return (        
        <C.HomeSection
            ref={homePage}
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
            backgroundLandscapeSmall={(theme.mode.status === 'dark')
                ? svgs.background.home.dark.landscape.small
                : svgs.background.home.light.landscape.small
            }
            backgroundLandscapeLarge={(theme.mode.status === 'dark')
                ? svgs.background.home.dark.landscape.large
                : svgs.background.home.light.landscape.large
            }
            backgroundPortrait={(theme.mode.status === 'dark')
                ? svgs.background.home.dark.portrait
                : svgs.background.home.light.portrait
            }
        >
            <C.Container
                isMenuOpen={theme.isMenuOpen.status}
            >
                <C.ContainerInfo
                    isMenuOpen={theme.isMenuOpen.status}
                >
                    <img className='avatar' src={svgs.avatar.src} alt={t('svgs.avatar.alt')}/>

                    <C.Info
                        mode={theme.mode.status}
                        lang={i18n.language}
                    >                        
                        <h1>
                            <span className='title-hello'>
                                {(i18n.language === 'en')
                                    ? 'Hi there!'
                                    : 'Olá!'
                                }
                            </span><br />
                            <span className='title-name'>
                                {(i18n.language === 'en')
                                    ? <>I'm Mario <span className='accent-color'>Elvio</span></>
                                    : <>Eu sou Mario <span className='accent-color'>Elvio</span></>
                                }
                            </span><br />
                            <span className='title-work'>
                                {(i18n.language === 'en')
                                    ? <><span className='accent-color'>Front-end</span> developer</>
                                    : <>Desenvolvedor <span className='accent-color' lang="en">front-end</span></>
                                }
                            </span>
                        </h1>

                        <C.SocialButtons>
                            <a href="https://www.linkedin.com/in/marioelvio/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className='img'
                                    src={(theme.mode.status === 'dark')
                                        ? svgs.socialIcon.linkedin.light
                                        : svgs.socialIcon.linkedin.dark
                                    }
                                    alt={t('svgs.socialIcon.linkedin.alt')}
                                />
                                    <img className='img-hover' src={svgs.socialIcon.linkedin.primary}
                                    alt={t('svgs.socialIcon.linkedin.alt')}
                                />
                            </a>
                            <a href="https://github.com/jukerah" target="_blank" rel="noopener noreferrer">
                                <img
                                    className='img'
                                    src={(theme.mode.status === 'dark')
                                        ? svgs.socialIcon.github.light
                                        : svgs.socialIcon.github.dark
                                    }
                                    alt={t('svgs.socialIcon.github.alt')}
                                />
                                    <img className='img-hover' src={svgs.socialIcon.github.primary}
                                    alt={t('svgs.socialIcon.github.alt')}
                                />
                            </a>
                            <a href="https://www.youtube.com/channel/UCIuG63VswXMTYUuzeZgqRjw" target="_blank" rel="noopener noreferrer">
                                <img
                                    className='img'
                                    src={(theme.mode.status === 'dark')
                                        ? svgs.socialIcon.youtube.light
                                        : svgs.socialIcon.youtube.dark
                                    }
                                    alt={t('svgs.socialIcon.youtube.alt')}
                                />
                                    <img className='img-hover' src={svgs.socialIcon.youtube.primary}
                                    alt={t('svgs.socialIcon.youtube.alt')}
                                />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5516988658468" target="_blank" rel="noopener noreferrer">
                                <img
                                    className='img'
                                    src={(theme.mode.status === 'dark')
                                        ? svgs.socialIcon.whatsapp.light
                                        : svgs.socialIcon.whatsapp.dark
                                    }
                                    alt={t('svgs.socialIcon.whatsapp.alt')}
                                />
                                    <img className='img-hover' src={svgs.socialIcon.whatsapp.primary}
                                    alt={t('svgs.socialIcon.whatsapp.alt')}
                                />
                            </a>
                        </C.SocialButtons>
                    </C.Info>
                </C.ContainerInfo>
                <C.NavButtons
                    isMenuOpen={theme.isMenuOpen.status}
                >
                    <PrimaryButton
                        text={t('page.home.aboutButton')}
                        backgroundColor={'--limed-spruce'}
                        backgroundColorHover={'--de-york'}
                        color={'--white'}
                        colorHover={'--limed-spruce'}
                        url={'/about'}
                    />
                
                    <PrimaryButton
                        text={t('page.home.portfolioButton')}
                        backgroundColor={'--skeptic'}
                        backgroundColorHover={'--de-york'}
                        color={'--limed-spruce'}
                        colorHover={'--limed-spruce'}
                        url={'/portfolio'}
                    />
                </C.NavButtons>
            </C.Container>
        </C.HomeSection>
    );
};