import { useState, useContext, useEffect } from 'react';
import * as C from './styles';

import { Context } from '../../contexts/Contexts';

export const SwitchMode = () => {
    const { theme, dispatch } = useContext(Context);
    let localThemeMode:string | null = localStorage.getItem('themeMode');

    useEffect(() => {        
        if(localThemeMode === null) {
            localStorage.setItem('themeMode', 'dark');
        } else {
            dispatch({
                type: 'CHANGE_MODE',
                payload: {
                    status: localThemeMode
                }
            });
        }
    }, []);

    const handleClickSwitch = (event:any) => {
        switch(theme.mode.status) {
            case 'dark':
                localStorage.setItem('themeMode','light');
                break;
            case 'light':
                localStorage.setItem('themeMode','dark');
                break;
        }

        dispatch({
            type: 'CHANGE_MODE',
            payload: {
                status: localThemeMode
            }
        });
    }

    return (
        <C.ContainerSwitchTheme>
            <p>Light</p>
            <label 
                className="switch"
                onClick={handleClickSwitch}
            >
                <input 
                    type="checkbox"
                    defaultChecked={(localThemeMode === 'dark') ? false : true}
                />
                <span className="slider round"></span>
            </label>
            <p>Dark</p>
        </C.ContainerSwitchTheme>
    );
}