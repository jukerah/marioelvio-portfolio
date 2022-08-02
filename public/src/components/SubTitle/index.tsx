import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';

interface Props {
    subTitle: string;
}

export const SubTitle = (props:Props) => {
    const { theme } = useContext(Context);

    return ( 
        <C.SubTitle
            mode={theme.mode.status}
        >
            {props.subTitle}
        </C.SubTitle>
    );
};