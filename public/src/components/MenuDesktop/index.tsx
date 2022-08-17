import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';

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
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H3L12 3L21 12H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/portfolio'}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 19C4.36817 18.21 5.92017 17.7942 7.5 17.7942C9.07983 17.7942 10.6318 18.21 12 19C13.3682 18.21 14.9202 17.7942 16.5 17.7942C18.0798 17.7942 19.6318 18.21 21 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 5.99996C4.36817 5.21005 5.92017 4.79419 7.5 4.79419C9.07983 4.79419 10.6318 5.21005 12 5.99996C13.3682 5.21005 14.9202 4.79419 16.5 4.79419C18.0798 4.79419 19.6318 5.21005 21 5.99996" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 6V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 6V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 6V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>Portfolio</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4.88889V19C2 19.5523 2.44772 20 3 20H7.17708H21.1667C21.3877 20 21.5996 19.9064 21.7559 19.7397C21.9122 19.573 22 19.3469 22 19.1111V4.88889C22 4.65314 21.9122 4.42705 21.7559 4.26035C21.5996 4.09365 21.3877 4 21.1667 4H2.83333C2.61232 4 2.40036 4.09365 2.24408 4.26035C2.0878 4.42705 2 4.65314 2 4.88889Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11 12L18.3333 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11 8L18.3333 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11 16L18.3333 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className='fill' d="M5 16C5 15.4477 5.44772 15 6 15V15C6.55228 15 7 15.4477 7 16V16C7 16.5523 6.55228 17 6 17V17C5.44772 17 5 16.5523 5 16V16Z"/>
                                <path className='fill' d="M5 8C5 7.44772 5.44772 7 6 7V7C6.55228 7 7 7.44772 7 8V8C7 8.55228 6.55228 9 6 9V9C5.44772 9 5 8.55228 5 8V8Z"/>
                                <path className='fill' d="M5 12C5 11.4477 5.44772 11 6 11V11C6.55228 11 7 11.4477 7 12V12C7 12.5523 6.55228 13 6 13V13C5.44772 13 5 12.5523 5 12V12Z"/>
                            </svg>
                            <p>Blog</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 7L12 13L21 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </C.NavDesktop>
        </C.MenuDesktop>                
    );
}