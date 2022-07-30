import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';
import { Context } from '../../contexts/Contexts';

import { svgs } from '../../data/SvgList';
import { SwitchMode } from '../SwitchMode';
import { LoginLogoutButton } from '../LoginLogoutButton';
import { MenuMobile, NavMobile } from '../MenuMobile';
import { ChangeLang } from '../ChangeLang';

export const Header = () => {
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
        <C.Header
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
        >
            <C.Container mode={theme.mode.status}>
                
                <MenuMobile />
                                
                <Link
                    to={'/home'}
                    onClick={handleClickMenu}
                >
                    <C.Logo
                        src={svgs.logo.marioElvio.src}
                        alt={t('svgs.logo.marioElvio.alt')}
                    />
                </Link>

                <div className='container-switch'>
                    <SwitchMode />
                </div>

                <div className='container-buttons'>
                    <ChangeLang />
                    <LoginLogoutButton />
                </div>

            </C.Container>

            <NavMobile />
        </C.Header>
    );
}