import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../../contexts/Contexts';

interface Props {
    showAll(): void;
}

export const ViewMoreButton = (props:Props) => {
    const { theme } = useContext(Context);

    return (
        <C.ViewMoreButton
            mode={theme.mode.status}
            onClick={props.showAll}
        >
            view more
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M6 9L12 15L18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </C.ViewMoreButton>
    );
};