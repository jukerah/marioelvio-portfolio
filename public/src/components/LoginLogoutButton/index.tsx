import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';
import { svgs } from '../../data/SvgList';

export const LoginLogoutButton = () => {
    const { theme } = useContext(Context);

    return (
        <C.Button mode={theme.mode.status}>
            <p>Login</p>
            <img src={(theme.mode.status === 'dark')
                    ? svgs.systemIcon.login.light
                    : svgs.systemIcon.login.dark
                }
                alt={svgs.systemIcon.login.altPt}
            />
        </C.Button>
    );
}