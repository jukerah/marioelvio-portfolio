import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { svgs } from '../../data/SvgList';

export const LoginLogoutButton = () => {
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
        <C.LoginLogoutButton
            mode={theme.mode.status}
            onClick={(widthDisplay < 1024) ? handleClickMenu : undefined }
        >
            <Link to={'/login'} >            
                <p>Login</p>
                <img src={(theme.mode.status === 'dark')
                        ? svgs.systemIcon.login.light
                        : svgs.systemIcon.login.dark
                    }
                    alt={svgs.systemIcon.login.altPt}
                />
            </Link>
        </C.LoginLogoutButton>
    );
}