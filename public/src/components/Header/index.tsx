import { useState, useContext, useEffect } from 'react';
import * as C from './styles';

import { SwitchMode } from '../SwitchMode';

import { Context } from '../../contexts/Contexts';

export const Header = () => {
    const { theme, dispatch } = useContext(Context);
    
    useEffect(() => {        
        
    }, []);

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
        <C.Header>
            <C.Container>
                <p>menu mobile</p>
                <p>logo</p>

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
                <p>login</p>
            </C.Container>
        </C.Header>
    );
}