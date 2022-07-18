import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';

export const Header = () => {
    const { theme, dispatch } = useContext(Context);

    const handleClickMenu = () => {
        if (theme.isMenuOpen.status) {
            dispatch({
                type: 'CHANGE_STATUS',
                payload: {
                    status: false
                }
            });
        } else {
            dispatch({
                type: 'CHANGE_STATUS',
                payload: {
                    status: true
                }
            });
        }
    }

    return (
        <C.Header>
            <C.Container>
                <p>menu mobile</p>
                <p>logo</p>
                <p>switch button</p>
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
                <p>login</p>
            </C.Container>
        </C.Header>
    );
}