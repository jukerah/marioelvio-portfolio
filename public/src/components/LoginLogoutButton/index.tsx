import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { svgs } from '../../data/SvgList';

export const LoginLogoutButton = () => {
    const { t } = useTranslation();
    const { theme, dispatch } = useContext(Context);
    
    const handleClickMenu = () => {
        dispatch({
            type: 'CHANGE_MENU',
            payload: {
                status: false
            }
        });
    }

    return (
        <C.LoginLogoutButton
            mode={theme.mode.status}
            onClick={handleClickMenu}
        >
            <Link to={'/login'} >            
                <p>{t('page.login.loginButton')}</p>
                <img src={(theme.mode.status === 'dark')
                        ? svgs.systemIcon.login.light
                        : svgs.systemIcon.login.dark
                    }
                    alt={t('svgs.systemIcon.login.alt')}
                />
            </Link>
        </C.LoginLogoutButton>
    );
}