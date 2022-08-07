import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../../contexts/Contexts';
import { SubTitle } from '../../../components/SubTitle';

interface Props {
    title: string;
    description: string;
}

export const Resume = (props:Props) => {
    const { theme } = useContext(Context);

    return (        
        <C.Resume
            mode={theme.mode.status}
        >
            <SubTitle
                subTitle={props.title}
            />
            <p>{props.description}</p>
        </C.Resume>        
    );
};