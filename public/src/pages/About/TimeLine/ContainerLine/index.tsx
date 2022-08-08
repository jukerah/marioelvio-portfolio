import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../../contexts/Contexts';

export const ContainerLine = () => {
    const { theme } = useContext(Context);

    return (
        <C.ContainerLine
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
        >
            <div className='line'></div>
        </C.ContainerLine>
    );
};