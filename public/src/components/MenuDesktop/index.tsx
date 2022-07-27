import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { svgs } from '../../data/SvgList';

export const MenuDesktop = () => {
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
        <C.MenuDesktop
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
        >
            <C.MenuButton
                mode={theme.mode.status}
                isMenuOpen={theme.isMenuOpen.status}
                onClick={handleClickMenu}
            >
                <button aria-label='Menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </C.MenuButton>

            <C.NavDesktop
                mode={theme.mode.status}
                isMenuOpen={theme.isMenuOpen.status}
            >
                <ul>
                    <li>
                        <Link to={'/home'}>
                            <img
                                className='img-light'
                                src={svgs.systemIcon.home.light}
                                alt={t('svgs.systemIcon.home.alt')}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.home.dark}
                                alt={t('svgs.systemIcon.home.alt')}
                            />
                            <p>{t('page.home.name')}</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            <img
                                className='img-light'
                                src={svgs.systemIcon.about.light}
                                alt={t('svgs.systemIcon.about.alt')}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.about.dark}
                                alt={t('svgs.systemIcon.about.alt')}
                            />
                            <p>{t('page.about.name')}</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/portfolio'}>
                            <img
                                className='img-light'
                                src={svgs.systemIcon.book.light}
                                alt={t('svgs.systemIcon.book.alt')}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.book.dark}
                                alt={t('svgs.systemIcon.book.alt')}
                            />
                            <p>{t('page.portfolio.name')}</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>
                            <img
                                className='img-light'
                                src={svgs.systemIcon.article.light}
                                alt={t('svgs.systemIcon.article.alt')}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.article.dark}
                                alt={t('svgs.systemIcon.article.alt')}
                            />
                            <p>{t('page.blog.name')}</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            <img
                                className='img-light'
                                src={svgs.systemIcon.mail.light}
                                alt={t('svgs.systemIcon.mail.alt')}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.mail.dark}
                                alt={t('svgs.systemIcon.mail.alt')}
                            />
                            <p>{t('page.contact.name')}</p>
                        </Link>
                    </li>
                </ul>
            </C.NavDesktop>
        </C.MenuDesktop>                
    );
}