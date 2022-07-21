import { useContext } from 'react';
import * as C from './styles';
import { Context } from '../../contexts/Contexts';

import { svgs } from '../../data/SvgList';
import { SwitchMode } from '../SwitchMode';
import { LoginLogoutButton } from '../LoginLogoutButton';

export const Header = () => {
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
        <C.Header mode={theme.mode.status}>
            <C.Container mode={theme.mode.status}>
                <C.MenuMobile
                    mode={theme.mode.status}
                    isMenuOpen={theme.isMenuOpen.status}
                    onClick={handleClickMenu}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </C.MenuMobile>

                <C.Logo src={svgs.logo.marioElvio.src} alt={svgs.logo.marioElvio.altPt} />

                <SwitchMode />                 
                
                <nav>
                    <ul>
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p>About</p>
                        </li>
                        <li>
                            <p>Portfolio</p>
                        </li>
                        <li>
                            <p>Contact</p>
                        </li>
                    </ul>
                </nav>
                
                <LoginLogoutButton />
                
            </C.Container>
        </C.Header>
    );
}