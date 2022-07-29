import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';

interface Props {
    text: string,
    backgroundColor: string,
    backgroundColorHover: string,
    color: string,
    colorHover: string,
    url: string
}

export const PrimaryButton = (props:Props) => {
    const { theme } = useContext(Context);
    
    return (
        <C.PrimaryButton
            mode={theme.mode.status}
            isMenuOpen={theme.isMenuOpen.status}
            backgroundColor={props.backgroundColor}
            backgroundColorHover={props.backgroundColorHover}
            color={props.color}
            colorHover={props.colorHover}
        >
            <Link to={props.url}>{props.text}</Link>
        </C.PrimaryButton>
    );
}