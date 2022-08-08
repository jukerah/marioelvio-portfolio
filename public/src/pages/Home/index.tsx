import { useContext, useEffect } from 'react';
import * as C from './styles';

import { svgs } from '../../data/SvgList';
import { Context } from '../../contexts/Contexts';
import { PrimaryButton } from '../../components/PrimaryButton';

export const HomePage = (props:any) => {
    const { theme } = useContext(Context);
    
    useEffect(() => {
        if (props.page === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [props.page]);
    
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
            <C.Container isMenuOpen={theme.isMenuOpen.status}>
                <C.ContainerInfo isMenuOpen={theme.isMenuOpen.status}>
                    <img className='avatar load-avatar' src={svgs.avatar.src} alt={svgs.avatar.alt}/>

                    <C.Info mode={theme.mode.status}>                        
                        <h1 className='load-title'>
                            <span className='title-hello'>Hi there!</span><br />
                            <span className='title-name'>I'm Mario <span className='accent-color'>Elvio</span></span><br />
                            <span className='title-work'><span className='accent-color'>Front-end</span> developer</span>
                        </h1>

                        <C.SocialButtons className='load-social'>
                            <a href="https://www.linkedin.com/in/marioelvio/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className='img'
                                    src={(theme.mode.status === 'dark')
                                        ? svgs.socialIcon.linkedin.light
                                        : svgs.socialIcon.linkedin.dark
                                    }
                                    alt={svgs.socialIcon.linkedin.alt}
                                />
                                    <img className='img-hover' src={svgs.socialIcon.linkedin.primary}
                                    alt={svgs.socialIcon.linkedin.alt}
                                />
                            </a>
                            <a href="https://github.com/jukerah" target="_blank" rel="noopener noreferrer">
                                <img
                                    className='img'
                                    src={(theme.mode.status === 'dark')
                                        ? svgs.socialIcon.github.light
                                        : svgs.socialIcon.github.dark
                                    }
                                    alt={svgs.socialIcon.github.alt}
                                />
                                    <img className='img-hover' src={svgs.socialIcon.github.primary}
                                    alt={svgs.socialIcon.github.alt}
                                />
                            </a>
                            <a href="https://www.youtube.com/channel/UCIuG63VswXMTYUuzeZgqRjw" target="_blank" rel="noopener noreferrer">
                                <img
                                    className='img'
                                    src={(theme.mode.status === 'dark')
                                        ? svgs.socialIcon.youtube.light
                                        : svgs.socialIcon.youtube.dark
                                    }
                                    alt={svgs.socialIcon.youtube.alt}
                                />
                                    <img className='img-hover' src={svgs.socialIcon.youtube.primary}
                                    alt={svgs.socialIcon.youtube.alt}
                                />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5516988658468" target="_blank" rel="noopener noreferrer">
                                <img
                                    className='img'
                                    src={(theme.mode.status === 'dark')
                                        ? svgs.socialIcon.whatsapp.light
                                        : svgs.socialIcon.whatsapp.dark
                                    }
                                    alt={svgs.socialIcon.whatsapp.alt}
                                />
                                    <img className='img-hover' src={svgs.socialIcon.whatsapp.primary}
                                    alt={svgs.socialIcon.whatsapp.alt}
                                />
                            </a>
                        </C.SocialButtons>
                    </C.Info>
                </C.ContainerInfo>
                <C.NavButtons
                    className='load-button'
                    isMenuOpen={theme.isMenuOpen.status}
                >
                    <PrimaryButton
                        text={'More about me'}
                        backgroundColor={'--limed-spruce'}
                        backgroundColorHover={'--de-york'}
                        color={'--white'}
                        colorHover={'--limed-spruce'}
                        url={'/about'}
                    />
                
                    <PrimaryButton
                        text={'My portfolio'}
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