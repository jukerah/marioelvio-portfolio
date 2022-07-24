import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';
import { Context } from '../../contexts/Contexts';

import { svgs } from '../../data/SvgList';
import { SwitchMode } from '../SwitchMode';
import { LoginLogoutButton } from '../LoginLogoutButton';
import { MenuMobile, NavMobile } from '../MenuMobile';

export const Header = () => {
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
                    to={'/'}
                    onClick={handleClickMenu}
                >
                    <C.Logo
                        src={svgs.logo.marioElvio.src}
                        alt={svgs.logo.marioElvio.altEn}
                    />
                </Link>

                <C.ContainerButton>
                    <SwitchMode />
                </C.ContainerButton>

                <C.ContainerButton>
                    <LoginLogoutButton />
                </C.ContainerButton>

            </C.Container>

            <NavMobile />
        </C.Header>
    );
}