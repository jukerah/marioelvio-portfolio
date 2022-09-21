import { reducerActionType } from '../types/reducerActionType';

export type themeLangType = { status: string; }

const browserLang: string = window.navigator.language;
const lang: string = `${browserLang[0]}${browserLang[1]}`;
const localLangMode: string | null = localStorage.getItem('lang');

if (localLangMode === null) localStorage.setItem('lang', lang);

export const langInitialState: themeLangType = {
    status: ((lang === 'pt' && localLangMode === 'pt') ||
            (lang === 'pt' && localLangMode === null)) ? 'pt' : 'en'
}

export const langReducer = (state: themeLangType, action: reducerActionType) => {
    if (action.type === 'CHANGE_LANG') return {...state, status: action.payload.status};
    return state;
}