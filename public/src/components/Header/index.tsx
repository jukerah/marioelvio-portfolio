import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';
import { Context } from '../../contexts/Contexts';

import { svgs } from '../../data/SvgList';
import { SwitchMode } from '../SwitchMode';
import { LoginLogoutButton } from '../LoginLogoutButton';

export const Header = () => {
    const { theme, dispatch } = useContext(Context);
    const widthDisplay: number = window.screen.width;

    const handleClickMenu = () => {
        if (theme.isMenuOpen.status) {
            dispatch({
                type: 'CHANGE_MENU',
                payload: {
                    status: false
                }
            });
        } else {
            dispatch({
                type: 'CHANGE_MENU',
                payload: {
                    status: true
                }
            });
        }
    }

    return (
        <C.Header mode={theme.mode.status}>
            <C.Container mode={theme.mode.status}>
                {(widthDisplay < 1024) &&
                    <C.MenuMobile
                    mode={theme.mode.status}
                    isMenuOpen={theme.isMenuOpen.status}
                    onClick={handleClickMenu}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </C.MenuMobile>
                }
                                
                <Link to={'/'}>
                    <C.Logo src={svgs.logo.marioElvio.src} alt={svgs.logo.marioElvio.altPt} />
                </Link>

                {(widthDisplay >= 1024) &&
                    <>
                        <SwitchMode />
                        <LoginLogoutButton />
                    </>
                }            
            </C.Container>

            {(widthDisplay < 1024) &&
                <C.NavMobile
                mode={theme.mode.status}
                isMenuOpen={theme.isMenuOpen.status}
            >
                    <ul>
                        <li>
                            <Link
                                to={'/home'}
                                onClick={handleClickMenu}
                            >
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.home.light
                                        : svgs.systemIcon.home.dark
                                    }
                                    alt={svgs.systemIcon.home.altPt}
                                />
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/about'}
                                onClick={handleClickMenu}
                            >
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.about.light
                                        : svgs.systemIcon.about.dark
                                    }
                                    alt={svgs.systemIcon.about.altPt}
                                />
                                <p>About</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/portfolio'}
                                onClick={handleClickMenu}
                            >
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.book.light
                                        : svgs.systemIcon.book.dark
                                    }
                                    alt={svgs.systemIcon.book.altPt}
                                />
                                <p>Portfolio</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/blog'}
                                onClick={handleClickMenu}
                            >
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.article.light
                                        : svgs.systemIcon.article.dark
                                    }
                                    alt={svgs.systemIcon.article.altPt}
                                />
                                <p>Blog</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/contact'}
                                onClick={handleClickMenu}
                            >
                                <img src={(theme.mode.status === 'dark')
                                        ? svgs.systemIcon.mail.light
                                        : svgs.systemIcon.mail.dark
                                    }
                                    alt={svgs.systemIcon.mail.altPt}
                                />
                                <p>Contact</p>
                            </Link>
                        </li>
                    </ul>
                    <C.ContainerButtons>
                        <SwitchMode />
                        <LoginLogoutButton/>
                    </C.ContainerButtons>
                </C.NavMobile>
            }
        </C.Header>
    );
}