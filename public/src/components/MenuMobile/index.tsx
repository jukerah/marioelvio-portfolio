import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { svgs } from '../../data/SvgList';
import { SwitchMode } from '../SwitchMode';
import { LoginLogoutButton } from '../LoginLogoutButton';

export const MenuMobile = () => {
    const { theme, dispatch } = useContext(Context);

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
        <C.MenuMobile
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
            onClick={handleClickMenu}
        >
            <button>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </C.MenuMobile>
    );
}

export const NavMobile = () => {
    const { theme, dispatch } = useContext(Context);

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
                            alt={svgs.systemIcon.home.altEn}
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
                            alt={svgs.systemIcon.about.altEn}
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
                            alt={svgs.systemIcon.book.altEn}
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
                            alt={svgs.systemIcon.article.altEn}
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
                            alt={svgs.systemIcon.mail.altEn}
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
    );
}