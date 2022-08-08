import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../../contexts/Contexts';

interface Props {
    content: any;
}

export const ContainerInfo = (props:Props) => {
    const { theme } = useContext(Context);

    return (
        <C.ContainerInfo mode={theme.mode.status}>
            {props.content}
        </C.ContainerInfo>
    );
};