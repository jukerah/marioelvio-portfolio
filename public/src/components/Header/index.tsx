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
        <C.Header
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
        >
            <C.Container mode={theme.mode.status}>
                
                <MenuMobile />
                                
                <Link
                    to={'/'}
                    onClick={(widthDisplay < 1024) ? handleClickMenu : undefined }
                >
                    <C.Logo src={svgs.logo.marioElvio.src} alt={svgs.logo.marioElvio.altPt} />
                </Link>

                {(widthDisplay >= 1024) &&
                    <>
                        <SwitchMode />
                        <LoginLogoutButton />
                    </>
                }            
            </C.Container>

            <NavMobile />
        </C.Header>
    );
}