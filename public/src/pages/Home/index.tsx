import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import * as C from './styles';

import { svgs } from '../../data/SvgList';
import { Context } from '../../contexts/Contexts';

export const HomePage = () => {
    const { t } = useTranslation();
    const { theme } = useContext(Context);
    
    return (        
        <C.HomeSection
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
            <C.Container>
                <C.ContainerInfo>
                    <img src={svgs.avatar.src} alt={t('svgs.avatar.alt')}/>

                    <C.Info>                        
                        <h1>{t('page.home.title.hello')}<br />{t('page.home.title.name')}<br />{t('page.home.title.work')}</h1>

                        <C.Buttons>
                            <a href="/">
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
                            <a href="/">
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
                            <a href="/">
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
                            <a href="/">
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
                        </C.Buttons>
                    </C.Info>
                </C.ContainerInfo>
                <C.Buttons>
                    <button>More about me</button>
                    <button>My portfolio</button>
                </C.Buttons>
            </C.Container>
        </C.HomeSection>
    );
};