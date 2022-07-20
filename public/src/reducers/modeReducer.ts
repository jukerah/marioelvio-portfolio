import { reducerActionType } from '../types/reducerActionType';

export type ModeType = {
    status: string | null;
}

const localThemeMode:string | null = localStorage.getItem('themeMode');

if (localThemeMode === null) localStorage.setItem('themeMode','dark');

export const modeInitialState: ModeType = {
    status: (localThemeMode === null) ? 'dark' : localThemeMode
}

export const modeReducer = (state: ModeType, action: reducerActionType) => {
    if (action.type === 'CHANGE_MODE') {
        return {...state, status: action.payload.status};
    }

    return state;
}