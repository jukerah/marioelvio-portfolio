import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { svgs } from '../../data/SvgList';
import { SwitchMode } from '../SwitchMode';
import { LoginLogoutButton } from '../LoginLogoutButton';
import { ChangeLang } from '../ChangeLang';

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
            <button aria-label='Menu'>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </C.MenuMobile>
    );
}

export const NavMobile = () => {
    const { t } = useTranslation();
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
                        <img
                            src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.home.light
                                : svgs.systemIcon.home.dark
                            }
                            alt={t('svgs.systemIcon.home.alt')}
                        />
                        <p>{t('page.home.name')}</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/about'}
                        onClick={handleClickMenu}
                    >
                        <img
                            src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.about.light
                                : svgs.systemIcon.about.dark
                            }
                            alt={t('svgs.systemIcon.about.alt')}
                        />
                        <p>{t('page.about.name')}</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/portfolio'}
                        onClick={handleClickMenu}
                    >
                        <img
                            src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.book.light
                                : svgs.systemIcon.book.dark
                            }
                            alt={t('svgs.systemIcon.book.alt')}
                        />
                        <p>{t('page.portfolio.name')}</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/blog'}
                        onClick={handleClickMenu}
                    >
                        <img
                            src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.article.light
                                : svgs.systemIcon.article.dark
                            }
                            alt={t('svgs.systemIcon.article.alt')}
                        />
                        <p>{t('page.blog.name')}</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/contact'}
                        onClick={handleClickMenu}
                    >
                        <img
                            src={(theme.mode.status === 'dark')
                                ? svgs.systemIcon.mail.light
                                : svgs.systemIcon.mail.dark
                            }
                            alt={t('svgs.systemIcon.mail.alt')}
                        />
                        <p>{t('page.contact.name')}</p>
                    </Link>
                </li>
            </ul>
            <C.ContainerButtons>
                <LoginLogoutButton/>
                <div className='top-line'>
                    <ChangeLang />
                    <SwitchMode />
                </div>
            </C.ContainerButtons>
        </C.NavMobile>
    );
}