import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { svgs } from '../../data/SvgList';

export const MenuDesktop = () => {
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
                                alt={svgs.systemIcon.home.alt}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.home.dark}
                                alt={svgs.systemIcon.home.alt}
                            />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            <img
                                className='img-light'
                                src={svgs.systemIcon.about.light}
                                alt={svgs.systemIcon.about.alt}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.about.dark}
                                alt={svgs.systemIcon.about.alt}
                            />
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/portfolio'}>
                            <img
                                className='img-light'
                                src={svgs.systemIcon.book.light}
                                alt={svgs.systemIcon.book.alt}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.book.dark}
                                alt={svgs.systemIcon.book.alt}
                            />
                            <p>Portfolio</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>
                            <img
                                className='img-light'
                                src={svgs.systemIcon.article.light}
                                alt={svgs.systemIcon.article.alt}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.article.dark}
                                alt={svgs.systemIcon.article.alt}
                            />
                            <p>Blog</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            <img
                                className='img-light'
                                src={svgs.systemIcon.mail.light}
                                alt={svgs.systemIcon.mail.alt}
                            />
                            <img
                                className='img-dark'
                                src={svgs.systemIcon.mail.dark}
                                alt={svgs.systemIcon.mail.alt}
                            />
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </C.NavDesktop>
        </C.MenuDesktop>                
    );
}