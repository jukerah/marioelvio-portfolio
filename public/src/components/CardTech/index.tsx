import { useContext } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';

interface Props {
    src: string;
    srcHover: string;
    tech: string;
    alt: string;
}

export const CardTech = (props:Props) => {
    const { theme } = useContext(Context);

    return ( 
        <C.CardTech
            mode={theme.mode.status}
            tabIndex={0}
        >
            <img className='img' src={props.src} alt={props.alt} />
            <img className='img-hover' src={props.srcHover} alt={props.alt} />
            <figcaption>{props.tech}</figcaption>
        </C.CardTech>
    );
};